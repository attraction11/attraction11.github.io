# Redux 源码及应用

## 一、定义创建`store`的函数

```js
function createStore(reducer, preloadedState, enhancer) {
    // reducer 类型判断
    if (typeof reducer !== "function") throw new Error("redcuer必须是函数");

    if (typeof enhancer !== "undefined") {
        if (typeof enhancer !== "function") {
            throw new Error("enhancer必须是函数");
        }
        return enhancer(createStore)(reducer, preloadedState);
    }
    // 状态
    var currentState = preloadedState;
    // 订阅者
    var currentListeners = [];
    // 获取状态
    function getState() {
        return currentState;
    }
    // 用于触发action的方法
    function dispatch(action) {
        // 判断action是否是一个对象
        if (!isPlainObject(action)) throw new Error("action必须是一个对象");
        // 判断action中的type属性是否存在
        if (typeof action.type === "undefined")
            throw new Error("action对象中必须有type属性");
        // 调用reducer函数 处理状态
        currentState = reducer(currentState, action);
        // 调用订阅者 通知订阅者状态发生了改变
        for (var i = 0; i < currentListeners.length; i++) {
            var listener = currentListeners[i];
            listener();
        }
    }
    // 订阅状态的改变
    function subscribe(listener) {
        currentListeners.push(listener);
    }

    // 默认调用一次dispatch方法 存储初始状态(通过reducer函数传递的默认状态)
    dispatch({ type: "initAction" });

    return {
        getState,
        dispatch,
        subscribe,
    };
}
```

1. 其中`preloadedState`为`state`的初始值
2. 订阅状态改变时，通过`subscribe`函数将订阅者保存入数组`currentListeners`
3. 触发`action`时，调用`reducer`函数修改`state`，同时遍历执行订阅者函数

## 二、参数类型的约束

1. `reducer`的参数类型必须是函数

```js
if (typeof reducer !== "function") throw new Error("redcuer必须是函数");
```

2. `dispatch`函数的参数`action`必须是对象，并且有`type`属性

```js
// 判断action是否是一个对象
if (!isPlainObject(action)) throw new Error("action必须是一个对象");
// 判断action中的type属性是否存在
if (typeof action.type === "undefined")
    throw new Error("action对象中必须有type属性");
```

3. 定义判断是否为对象的函数（原理：判断对象的当前原型对象是否和顶层原型对象相同）

```js
function isPlainObject(obj) {
    // 排除基本类型和null
    if (typeof obj !== "object" || obj === null) return false;
    // 区分数组和对象（采用原型对象对比的方式）
    var proto = obj;
    while (Object.getPrototypeOf(proto) != null) {
        proto = Object.getPrototypeOf(proto);
    }
    return Object.getPrototypeOf(obj) === proto;
}
```

4. 使用`enhancer`对`store`对象进行功能增强（可选参数）

```js
if (typeof enhancer !== "undefined") {
    if (typeof enhancer !== "function") {
        throw new Error("enhancer必须是函数");
    }
    // 返回更加强大的store对象
    return enhancer(createStore)(reducer, preloadedState);
}
```

5. `enhancer`进行功能增强（中间件用于覆盖原有`dispatch`方法）

```js
function enhancer(createStore) {
    return function (reducer, preloadedState) {
        var store = createStore(reducer, preloadedState);
        var dispatch = store.dispatch;
        function _dispatch(action) {
            if (typeof action === "function") {
                return action(dispatch);
            }
            // 正常的action
            dispatch(action);
        }
        return {
            ...store,
            dispatch: _dispatch,
        };
    };
}
```

在视图中调用`dispatch`方法传入`action`，判断`action`的数据类型。如果是函数就将`dispatch`传给`action`函数。等`action`函数执行完异步逻辑之后，再去调用`dispatch`触发正常的`action`

## 三、enhancer 演变为 applyMiddleware 函数

1. `applyMiddleware`规定中间件函数的写法

```js
// 中间件外层的两个函数是用来接收参数的
function logger(store) {
    // next函数实际就是下一个中间件函数（最后一个中间件中的next是dispatch方法）
    return function (next) {
        // 这才是中间件函数
        return function (action) {
            console.log("logger");
            next(action);
        };
    };
}
```

`applyMiddleware`函数用于给中间件传参 2. `applyMiddleware`函数的实现

```js
function applyMiddleware(...middlewares) {
    return function (createStore) {
        return function (reducer, preloadedState) {
            // 创建 store
            var store = createStore(reducer, preloadedState);
            // 阉割版的 store
            var middlewareAPI = {
                getState: store.getState,
                dispatch: store.dispatch,
            };
            // 调用中间件的第一层函数 传递阉割版的store对象
            var chain = middlewares.map((middleware) =>
                middleware(middlewareAPI)
            );
            var dispatch = compose(...chain)(store.dispatch);
            console.log("dispatch: ", dispatch);
            return {
                ...store,
                dispatch,
            };
        };
    };
}
```

3. 使用`compose`函数串联中间件函数

```js
function compose() {
    var funcs = [...arguments];
    return function (dispatch) {
        for (var i = funcs.length - 1; i >= 0; i--) {
            dispatch = funcs[i](dispatch);
        }
        return dispatch;
    };
}
```

-   该函数从`applyMiddleware`函数参数的最后一项执行循环，获取它的中间件函数并返回。返回值将作为下一个中间的`next`参数。最后执行`var dispatch = compose(...chain)(store.dispatch);`, 得到增强后的`dispatch`函数。
-   在执行`dispatch`时，它先调用第一个中间件传入的`next`是下一个中间件，而最后一个中间件传入的`next`参数就是`store.dispatch`会执行`store.dispatch`触发`action`，在函数内部调用`reducer`函数处理状态(依据传入的`action`)

## 四、bindActionCreators 函数的实现

1. `bindActionCreators`函数的写法
   作用：将`ActionCreator`函数转换为能触发`action`的函数（返回对象）

```js
var actions = bindActionCreators({ increment, decrement }, store.dispatch);

function increment() {
    // `ActionCreator`函数
    return { type: "increment" };
}

function decrement() {
    // `ActionCreator`函数
    return { type: "decrement" };
}
```

2. `bindActionCreators`函数的实现

```js
function bindActionCreators(actionCreators, dispatch) {
    var boundActionCreators = {};
    for (var key in actionCreators) {
        // 采用自调用函数，传入参数，用于保存传入当前函数参数（闭包）
        (function (key) {
            boundActionCreators[key] = function () {
                dispatch(actionCreators[key]());
            };
        })(key);
    }
    return boundActionCreators;
}
```

## 五、combineReducers 函数的实现

1. `combineReducers`函数的用法
   作用：`Redux`中允许我们将大的`reducer`拆分为一个个小的`reducer`,再通过`combineReducers`合并`reducer`。

```js
function counterReducer(state, action) {
    switch (action.type) {
        case "increment":
            return state + 1;
        case "decrement":
            return state - 1;
        default:
            return state;
    }
}

var rootReducer = combineReducers({ counter: counterReducer });
var store = createStore(
    rootReducer,
    { counter: 100 },
    applyMiddleware(logger, thunk)
);
```

2. `combineReducers`函数的写法

```js
function combineReducers(reducers) {
    // 1. 检查reducer类型 它必须是函数
    var reducerKeys = Object.keys(reducers);
    for (var i = 0; i < reducerKeys.length; i++) {
        var key = reducerKeys[i];
        if (typeof reducers[key] !== "function")
            throw new Error("reducer必须是函数");
    }
    // 2. 调用一个一个的小的reducer 将每一个小的reducer中返回的状态存储在一个新的大的对象中
    return function (state, action) {
        var nextState = {};
        for (var i = 0; i < reducerKeys.length; i++) {
            var key = reducerKeys[i];
            var reducer = reducers[key];
            var previousStateForKey = state[key];
            nextState[key] = reducer(previousStateForKey, action);
        }
        return nextState;
    };
}
```

## 六、Redux Tookit 应用

1. `Redux Tookit`是`redux`的工具集，对`Redux`进行二次封装，用于高效`Redux`开发，使`Redux`使用更简单
2. 创建状态切片

-   对于状态切片，我们可以认为它就是原本 Redux 中的那一个个的小的 Reducer 函数。在 Redux 中，原本 Reducer 函数和 Action 对象需要分别创建，现在通过状态切片替代，它会返回 Reducer 函数和 Action 对象.

```js
import { createSlice } from "@reduxjs/toolkit"

export const TODOS_FEATURE_KEY = "todos"
const { reducer: TodosReducer, actions } = createSlice({
  name: TODOS_FEATURE_KEY,
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
        state.push(action.payload)
    }
})
export const { addTodo } = actions
export default TodosReducer
```

3. 创建`store`

```js
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import TodosReducer, { TODOS_FEATURE_KEY } from "./todos.slice";
import logger from "redux-logger";

export default configureStore({
    reducer: {
        [TODOS_FEATURE_KEY]: TodosReducer,
    },
    devTools: process.env.NODE_ENV !== "production",
    middleware: [...getDefaultMiddleware(), logger],
});
```

4. 配置`Provider`触发`Action`

```js
import { Provider } from "react-redux";
import store from "./Store";

ReactDOM.render(
    <Provider store={store}>
        <Global styles={styles} />
        <App />
    </Provider>,
    document.getElementById("root")
);
```

![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d43a019db9324675b61f7e802fa70cfb~tplv-k3u1fbpfcp-watermark.image?) 5. `Action`预处理
当`Action`被触发后，可以通过`prepare`方法对`Action`进行预处理，处理完成后交给`Reducer`， `prepare`方法必须返回对象。
![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/8d303f2efb094a6c88169cb423a24080~tplv-k3u1fbpfcp-watermark.image?) 6. 执行异步操作

```js
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const loadTodos = createAsyncThunk("todos/loadTodos", (payload) =>
    axios.get(payload).then((response) => response.data)
);
```

创建接收异步操作结果的`Reducer`

```js
createSlice({
    ...
  extraReducers: {
    [loadTodos.pending]: (state, action) => {
      console.log("pending")
      return state
    },
    [loadTodos.fulfilled]: todosAdapter.addMany
  }
})
```

7、配置中间件
注意在引入自定义中间件前，需要导入`toolkit`中默认的中间件

```js
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import TodosReducer, { TODOS_FEATURE_KEY } from "./todos.slice";
import logger from "redux-logger";

export default configureStore({
    reducer: {
        [TODOS_FEATURE_KEY]: TodosReducer,
    },
    devTools: process.env.NODE_ENV !== "production",
    middleware: [...getDefaultMiddleware(), logger],
});
```

8. 实体适配器
   实体：可以理解为一条数据  
   实体适配器：可以理解为一个放入数据的容器  
   将状态放入实体适配器中，因为实体适配器提供了操作状态的各种方法，简化增删改查的操作。

```js
import { createEntityAdapter } from "@reduxjs/toolkit";

const todosAdapter = createEntityAdapter();

// 获取实体适配器默认的数据结构
todosAdapter.getInitialState();
// 向实体适配器中添加一条数据
todosAdapter.addOne(state, action.payload);
// 向实体适配器中添加多条数据
todosAdapter.addMany(state, action.payload);
```

9、将实体唯一标识指定为某个字段
实体适配器要求每一个实体必须拥有`id`属性作为唯一标识，如果实体中唯一标识的字段不叫`id`，则需要使用`selectId`进行声明。

```js
const todosAdapter = createEntityAdapter({
    selectId: (todo) => todo.cid,
});
```

10. 状态选择器
    提供从实体适配器中获取状态的快捷途径

```js
import { createSelector } from "@reduxjs/toolkit";

// 从实体适配器中获取一些便捷的状态选择器和我们自己的状态选择器一起使用
const { selectAll } = todosAdapter.getSelectors();
export const selectTodos = createSelector(
    (state) => state[TODOS_FEATURE_KEY],
    selectAll
);
```

在组件中通过`const todos = useSelector(selectTodos)`获取数据
