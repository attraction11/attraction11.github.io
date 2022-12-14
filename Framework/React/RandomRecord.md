# React Q&A

## 1、redux 原理

#### 简答：

-   Redux 的设计思想：
    -   Web 应用是一个状态机，视图与状态是一一对应的，所有的状态，保存在一个对象里面。
-   Redux 的概念：
    -   一个有用的架构，用操作的事件来管理和更新应用的状态，在整个应用中，它用于状态集中存储，状态的更新必须是一种可预测的方式更新。
-   Redux 三大原则：
    -   单一数据源：整个应用的 state 被储存在一棵 object tree 中，并且这个 object tree 只存在于唯一一个 store 中
    -   State 是只读的：唯一改变 state 的方法就是触发 action，action 是一个用于描述已发生事件的普通对象。
    -   使用纯函数来执行修改：为了描述 action 如何改变 state tree ，你需要编写 reducers。
-   何时使用 Redux?
    -   多交互，多数据源等场景
        -   不同身份的用户有不同的使用方式、与服务器大量交互、View 要从多个来源获取数据
    -   组件角度
        -   某个组件的状态需要共享、一个组件需要更改全局状态、一个组件需要改变另一组件的状态
-   关于一些 API:

    -   state 是只读的，唯一改变它的方法就是触发 action
    -   action 用于描述已发生事件的普通对象，确保视图和网络请求不会直接修改 state，它们只能表达想要修改的意图。
    -   reducers 是为了描述 action 如何改变 state tree 而编写的。它是纯函数，接收先前的 state 和 action，并返回新的 state

-   代码：part4\fed-e-task-04-02\notes\materials\Redux\code\myRedux\myRedux.js
-   在线源码：https://codesandbox.io/s/redux-and-react-redux-7l55p

#### 详细介绍：

-   https://juejin.cn/post/6873387634891161608

## 2、React 常用的 hook 都有哪些?

#### 简答：

-   什么是 hook?
    -   Hook 本质上就是一个函数，它简洁了组件，有自己的状态管理，生命周期管理，状态共享。
-   Hook 出现解决了什么 ？
    -   使你在无需修改组件结构的情况下复用状态逻辑。例如：useContext 解决状态复用问题或自定义 Hook 来定制符合自己业务场景遇到的状态管理。
    -   在函数组件中 生命周期的使用，更好的设计封装组件。
-   什么时候使用 Hook ?
    -   在函数组件顶层调用
    -   在 函数中使用 / 自定义 Hook 中使用。
-   常用的 hook
    -   useState 状态管理：setState 为更新 satate 方法；useState(initialState) initialState 为初始值
    -   useEffect 生命周期管理：useEffect 可以使用的 3 个生命周期函数。
        -   无需清除 Effect 使用：在生命周期的 compoentDidmount 和 componentUpdate 中执行。
        ```js
        useEffect(() => {
            //默认会执行
            // 这块相当于 class 组件 生命周期的
            //compoentDidmount    compoentDidUpdate
        }, []);
        ```
        -   清除 Effect 使用: 在生命周期的 compoentDidmount、componentUpdate、componentUnmount(return 清除函数) 中执行。
        ```js
        useEffect(() => {
            //compoentDidmount    compoentDidUpdate
            console.log("组件挂载和更新   ");
            return () => {
                console.log("组件卸载时执行");
            };
        });
        ```

#### 详细介绍

[segmentfault：React Hook | 必 学 的 9 个 钩子](https://segmentfault.com/a/1190000040139985)

## 3、用 React hook 都遇到过哪些坑？

#### 简答：

-   React 可以在提交之前多次调用渲染阶段生命周期的方法，所以不要在它们内部编写副作用相关的代码。[参见](https://zh-hans.reactjs.org/docs/strict-mode.html#detecting-unexpected-side-effects)介绍。
    ![渲染阶段生命周期的方法](../../images/render-live-fn.jpeg)
-   setState 传相同的引用类型或原始类型值，不会触发组件更新
-   setArray([...array]) ArrayItem 元素对应的内容虽然没有变，但还是会触发重新渲染
-   使用 useEffect 时一定要注意，如果有多个副效应，应该调用多个 useEffect 而不应该合并写在一起。
-   每次渲染时，React 会在执行当前 effect 之前对上一个 effect 进行清除。
-   如果某些特定值在两次重渲染之间没有发生变化，可以通知 React 跳过对 effect 的调用，只要传递数组作为 useEffect 的第二个可选参数即可。
-   memo() 限制一个组件是否重复渲染，而 useMemo() 则是限制一个函数是否重复执行。
-   useMemo() 和 useEffect() 的第二个参数逻辑是相同的，但是 useMemo()在渲染之前执行，而 useEffect 则是在渲染之后执行。
-   记住，传入 useMemo 的函数会在渲染期间执行。请不要在这个函数内部执行与渲染无关的操作，诸如副作用这类的操作属于 useEffect 的适用范畴，而不是 useMemo。
    如果没有提供依赖项数组，useMemo 在每次渲染时都会计算新的值。

```js
// 这个跟 Vue.js 中的 computed 很像
const double = useMemo(() => count * 2, [count]);
```

-   把内联回调函数及依赖项数组作为参数传入 useCallback，它将返回该回调函数的 memoized 版本。useCallback(fn, deps) 相当于 useMemo(() => fn, deps)。
-   某些场景下，useReducer 会比 useState 更适用，如 state 逻辑较复杂且包含多个子值 ，或是下一个 state 依赖于之前的 state 。并且，使用 useReducer 还能给那些会触发深更新的组件做性能优化，因为你可以**向子组件传递 dispatch 而不是回调函数。**

```jsx
function FancyInput(props, ref) {
    const inputRef = useRef();
    useImperativeHandle(ref, () => ({
        focus: () => inputRef.current.focus(),
    }));
    return <input ref={inputRef} />;
}

FancyInput = forwardRef(FancyInput);

function Foo() {
    const fancyInputRef = useRef(null);
    return (
        <>
            <span onClick={() => fancyInputRef.current.focus()}></span>
            <FancyInput ref={fancyInputRef} />
        </>
    );
}
```

-   useLayoutEffect 会阻塞浏览器主线程，里面的所有修改都会在下次渲染时体现。而 useEffect 会先让出主线程，将任务添加到事件队列中等候执行。
-   获取上一轮的 props 或 state，考虑到这是一个相对常见的使用场景，很可能在未来 React 会内置此 Hook。

```jsx
function usePrevious(value) {
    const ref = useRef();
    useEffect(() => {
        ref.current = value;
    });
    return ref.current;
}

function Counter() {
    const [count, setCount] = useState(0);
    const prevCount = usePrevious(count);
    return (
        <h1>
            Now: {count}, before: {prevCount}
        </h1>
    );
}
```

-   useForceUpdate 用于强制更新组件，通常在使用 useRef 管理可变状态，但又需要重渲染时使用。

```jsx
function useForceUpdate() {
    const [, forceUpdate] = useReducer((v) => v + 1, 0);
    return forceUpdate;
}

function Demo() {
    const counter = useRef(0);
    const forceUpdate = useForceUpdate();
    const handleClick = () => {
        counter.current++;
        forceUpdate();
    };
    return <div onClick={handleClick}>{counter.current}</div>;
}
```

-   Hook 就是 JavaScript 函数，但是使用它们会有两个额外的规则

    -   只在最顶层使用 Hook。不要在循环，条件或嵌套函数中调用 Hook，确保总是在你的 React 函数的最顶层调用他们。确保 Hook 在每一次渲染中都 按照同样的顺序被调用。
    -   只在函数组件中调用 Hook。不要在普通的 JavaScript 函数中调用 Hook。

-   每次渲染都是独立闭包的坑。

    -   当我们先执行异步增加函数(handleSyncAdd)，再执行同步函数(handleAdd)，同步执行完毕再执行异步时，异步函数里面的 count 为之前执行时闭包里面的值(0)。

    ```jsx
    import React, { useState } from "react";

    function Comment() {
        const [count, setCount] = useState(0);
        const handleAdd = () => setCount(count + 1);
        const handleSyncAdd = () => {
            setTimeout(() => {
                // 获取的是闭包中的state
                // setCount(count + 1); // 错误用法
                // 改成回调函数更新，每次回调函数执行时会接收之前的state，而不是闭包中的state
                setCount((count) => count + 1); // 正确用法
            }, 1000);
        };
        return (
            <div>
                <p>{count}</p>
                <button onClick={handleAdd}>增加</button>
                <button onClick={handleSyncAdd}>异步增加</button>
            </div>
        );
    }

    export default Comment;
    ```

-   闭包引起的 state 值过期:

```jsx
function DelayCount() {
    const [count, setCount] = useState(0);

    function handleClickAsync() {
        setTimeout(function delay() {
            // setCount(count + 1); // 问题所在：此时的 count 为5s前的count！！！
            setCount((count) => count + 1); // 重点：setCount传入的回调函数用的是最新的 state！！！
        }, 5000);
    }

    function handleClickSync() {
        setCount(count + 1);
    }

    return (
        <div>
            {count}
            <button onClick={handleClickAsync}>异步加1</button>
            <button onClick={handleClickSync}>同步加1</button>
        </div>
    );
}
```

-   依赖值监听问题导致死循环

```jsx
// 子组件
let Child = React.memo((props) => {
    useEffect(() => {
        props.onChange(props.id);
    }, [props.onChange, props.id]);

    return <div>{props.id}</div>;
});

// 父组件
let Parent = () => {
    let [id, setId] = useState(0);
    let [count, setCount] = useState(0);
    // const onChange = (id) => { // 会导致死循环
    //     // coding
    //     setCount(id);
    // };
    const onChange = useCallback(() => {
        // 重点：通过useCallback包裹一层即可达到缓存函数的目的
        // coding
    }, [id]); // id 为依赖值

    return (
        <div>
            {count}
            <Child onChange={onChange} id={id} /> // 重点：这里有性能问题！！！
        </div>
    );
};
```

#### 详细介绍

[掘金-React Hooks 文档解读及踩坑总结](https://juejin.cn/post/7030733515482202119)
[掘金-React Hooks 使用详解及实际项目中遇到的坑](https://juejin.cn/post/6844904157829136398)
[博客-React Hooks 踩坑总结](https://leo123.pub/React%20Hooks%20%E8%B8%A9%E5%9D%91%E6%80%BB%E7%BB%93)
[博客-React Hooks 填坑](https://www.cnblogs.com/chenwenhao/p/12639077.html)

## 4、如何解决 React Hooks 中的闭包陷阱？

#### 简答：

-   React 的闭包陷阱指的是当 useEffect 的依赖为[]的时候，当 React 函数式组件重新执行，useEffect hooks 并不会重新执行，这时候它内部的变量依旧是上一次的变量，这就构成了“闭包陷阱”。如下：我们点击+1 按钮数次后，页面渲染已经成为 4，而控制台打印的依旧是 0。这就是闭包陷阱。

```jsx
import { useState, useEffect } from "react";

export default function App() {
    const [count, setCount] = useState(0);

    // 模拟 DidMount
    useEffect(() => {
        // 定时任务
        // useEffect 中的 count 永远是第一次的 count
        const timer = setInterval(() => {
            console.log("setInterval...", count);
        }, 1000);

        // 清除定时任务
        return () => clearTimeout(timer);
    }, []); // 依赖为 []，re-render 不会重新执行 effect 函数

    return (
        <>
            <div>count: {count}</div>
            <div>
                <button onClick={() => setCount(count + 1)}>+1</button>
            </div>
        </>
    );
}
```

-   解决 React Hooks 中的闭包陷阱的方式

    -   使用回调函数赋值：当我们使用 setState 时，新的 state 如果是通过计算旧的 state 得出，那么我们可以将回调函数当作参数传递给 setState。该回调函数将接收先前的 state，并返回一个更新后的值。

    ```jsx
    import React, { useState, useEffect, useRef } from "react";

    function App() {
        const [count, setCount] = useState(0);
        useEffect(() => {
            const timer = setInterval(() => {
                setCount((c) => c + 1);
            }, 1000);
            return () => clearInterval(timer);
        }, []);
        return <div>{count}</div>;
    }

    export default App;
    ```

    -   使用 useRef: 同一个 ref 在 React 组件的整个生命周期中只存在一个引用，因此通过 current 永远是可以访问到引用中最新的函数值，不会存在闭包陈旧值的问题。
    -   使用 useReducer: 利用 useReducer 获取的 dispatch 方法在组件的生命周期中保持唯一引用，并且总是能操作到最新的值。

    ```jsx
    import { useEffect, useReducer } from "react";
    const initialCount = 0;

    function reducer(count, action) {
        switch (action.type) {
            case "increment":
                return count + 1;
            case "decrement":
                return count - 1;
            default:
                throw new Error();
        }
    }

    function App() {
        const [count, dispatch] = useReducer(reducer, initialCount);
        useEffect(() => {
            setInterval(() => {
                dispatch({ type: "increment" });
            }, 1000);
        }, []);

        return <div>Count: {count}</div>;
    }

    export default App;
    ```

-   给 useEffect 的依赖项设置为 空数组 的惟一理由：是它确实没有依赖任何外部变量，而 不是 你认为这个副作用只需要在组件 mount 的时候执行一次。

#### 详细介绍

[知乎-React Hooks 使用中遇到的坑](https://zhuanlan.zhihu.com/p/409759732)
[知乎-[译]5 个技巧：避免 React Hooks 常见问题](https://zhuanlan.zhihu.com/p/77243662)
[51CTO-从根上理解 React Hooks 的闭包陷阱](https://www.51cto.com/article/707963.html)

## 5、了解 useReducer 吗?

#### 简答：

-   总结一句话：我们使用 dispatch 来触发 reducer 纯函数，用 reducer 纯函数中的逻辑修改 initialState，得到一个新的变量，把这个变量赋值给 state，最终返回。
-   要使用 useReducer 的场景
    -   在需要管理大量数据的场景中，使用 useReducer 更加合适
    -   使用 useReducer 更加利于理解：对 Redux 比较熟悉，习惯于使用 dispatch 触发 action，然后获取最新的 state。
-   使用 useReduce 管理组件中的状态
    -   1、首先我们需要定义一个初始的变量：
    ```jsx
    const initState = {
        amount: 0,
    };
    ```
    -   2、我们需要定义 reducer(纯函数: 接受两个参数，最终返回一个最新的状态值)
    ```jsx
    const reducer = (state, action) => {
        switch (action.type) {
            case "add":
                return {
                    amount: state.amount + 1,
                };
            case "minus":
                return {
                    amount: state.amount - 1,
                };
            case "reset":
                return {
                    amount: 0,
                };
            default:
                return {
                    amount: 0,
                };
        }
    };
    ```
    -   3、用 useReducer 来定义 state 和触发 reducer 的方法
    ```jsx
    const [state, dispatch] = useReducer(reducer, initState);
    ```
    -   4、 使用 dispatch 触发 action，修改状态
    ```jsx
        <button onClick={() => { dispatch({ type: "add" }); }} >Add</button>
        <button onClick={() => { dispatch({ type: "minus" });}}>minus</button>
        <button onClick={() => { dispatch({ type: "reset" });}}>reset</button>
    ```

#### 详细介绍

[掘金-React 中的 useReducer 是个什么东西](https://juejin.cn/post/6989217144814698509)
[掘金-在 React Hooks 中使用 useReducer 的几种用例](https://juejin.cn/post/6844903817981460493)
[知乎-这一次彻底搞定 useReducer-使用篇](https://zhuanlan.zhihu.com/p/69622832)

## 6、组件外侧 let a 1 组件内侧点击事件更改 a，渲染的 a 会发生改变吗？如果 let a 放在组件内部，有什么变化吗？和 useState 有什么区别？

#### 简答：

-   组件内外定义的变量发生改变的时候，渲染的 a 并不会发生改变。
-   变量写在外边可以节省开销，但是所有元素将共享一份配置，容易被子组件不小心修改（写在外面会形成一个闭包）。写在里面的话，多次调用时每次都会在内存中生成一次。
-   避免组件外老数据对页面造成的影响
    -   与组件共存：将这几个全局变量直接挂到组件上，这样变量与组件的生命周期就同步了。
    -   使用前初始化：在组件 mount 或第一次使用数据前，对原有数据进行初始化。

#### 详细介绍

[segmentfault-react 组件中的变量写在哪里？](https://segmentfault.com/q/1010000014412215)
[博客-React 组件中的全局变量](https://www.zhuyuntao.cn/React%E5%8F%98%E9%87%8F%E4%BD%9C%E7%94%A8%E5%9F%9F%E9%97%AE%E9%A2%98)

## 7、在 React 函数式组件中使用 useState， 变量，useRef 的时机

#### 简答：

-   变量：在每次组件重新渲染的时候都会被重新进行赋值，所以如果你想要保留之前操作的状态的话就不要使用变量。
-   useState：当我们需要在状态改变的时候重新渲染视图，那么我们就使用 useState 来保存我们的状态。
-   useRef： 如果我们只是想保存状态，而且可以同步更新&获取我们的状态，那么就使用 useRef。
    -   每次渲染 useRef 返回值都不变
    -   ref.current 发生变化，并不会造成 re-render。
    -   ref.current 发生变化应该作为 Side Effect（因为它会影响下次渲染），所以不应该在 render 阶段更新 current 属性。
    -   ref.current 不可以作为其他 hooks（useMemo, useCallback, useEffect）依赖项；
    -   ref.current 的值发生变更，并不会造成 re-render, Reactjs 并不会跟踪 ref.current 的变化。

#### 详细介绍

[简书-在 React 函数式组件中使用 useState， 变量，useRef 的时机](https://www.jianshu.com/p/c6da6cae5e9c)
