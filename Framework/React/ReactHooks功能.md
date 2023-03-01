# ReactHooks功能

## 1、主要功能
1. 对函数型组件进行增强，让函数型组件可以储存状态，可以拥有处理副作用的能力
2. 让开发者在不使用类组件的情况下，实现相同的功能
3. 副作用：只要不是将数据转换为视图的代码都是副作用代码，比如：获取`DOM`元素、为`DOM`元素添加事件、设置定时器、发送`ajax`请求。在类组件中我们通常使用生命周期函数处理这些副作用，在函数组件中我们通过`Hooks`处理这些事情。

## 2、类组件的不足
1. 缺少逻辑复用机制
类组件中一般通过渲染属性和高阶组件（HOC）复用一些逻辑，需要在外层嵌套组件，导致层级比较深。   
```jsx
// hoc的定义
function withSubscription(WrappedComponent, selectData) {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        data: selectData(DataSource, props)
      };
    }
    // 一些通用的逻辑处理
    render() {
      // ... 并使用新数据渲染被包装的组件!
      return <WrappedComponent data={this.state.data} {...this.props} />;
    }
  };

// 使用
const BlogPostWithSubscription = withSubscription(BlogPost,
  (DataSource, props) => DataSource.getBlogPost(props.id));
 【来源：https://wuhou.fun/149.html，转载请注明】
```
总结为：为了复用逻辑增加了无实际渲染效果的组件，增加了组件的层级显示十分臃肿，增加了调试的难度以及运行的效率。  

2. 类组件经常会变得很复杂难以维护
将一组相干的业务逻辑拆分到多个生命周期函数中，在一个生命周期函数内存在多个不相干的业务逻辑。

3. 类成员方法不能保证`this`指向的正确性(通常需要在事件处理函数中改变`this`的指向)

## 3、使用useState让函数组件保存状态
1. 通常一个函数中的变量，在函数执行完后，变量的内存会被释放掉。因此函数型组件原本是不可以保存数据的。但使用`useState`就可以让函数组件保存状态，`useState`内部是使用闭包保存状态的。当状态值改变后函数组件会重新渲染。
![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f26dd141e7884999891c871257caf917~tplv-k3u1fbpfcp-watermark.image?)

2. `useState`的使用细节
- 接收唯一的参数即状态初始值. 初始值可以是任意数据类型. 
- 返回值为数组. 数组中存储状态值和更改状态值的方法. 方法名称约定以`set`开头, 后面加上状态名称. 
- 方法可以被调用多次. 用以保存不同状态值. 
- 参数可以是一个函数, 函数返回什么, 初始状态就是什么, 函数只会被调用一次, **用在初始值是动态值的情况**
![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/212cac0036554eabbc9ba72435634b38~tplv-k3u1fbpfcp-watermark.image?)

3. 设置状态方法的使用细节
- 设置状态值方法的参数可以是一个值也可以是**一个函数**
- 设置状态值方法的方法本身是**异步**的
![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c8d890510be64b828901480c334e2b07~tplv-k3u1fbpfcp-watermark.image?)

4. 实现原理
- 由于`useState`可以被不确定的多次调用，因此需要使用数组储存`state`变量和设置`state`的函数数组`setters`。
- 各个`useState`方法需要有自己的下标，因此需要用闭包储存对应的下标
- 由于`setState`方法会导致组重新渲染，因此需要在重新渲染方法`render`中重置`state`

```js
let state = [];
let setters = [];
let stateIndex = 0;

// 使用闭包储存数组下标，便于点击设置state时拿到正确的下标值
function createSetter (index) {
  return function (newState) {
    state[index] = newState;
    render ();
  }
}

function useState (initialState) {
  state[stateIndex] = state[stateIndex] ? state[stateIndex] : initialState;
  setters.push(createSetter(stateIndex));
  let value = state[stateIndex]; // 拿到状态值
  let setter = setters[stateIndex];
  stateIndex++;
  return [value, setter];
}

function render () {
  stateIndex = 0; // 重置state,避免页面重新渲染后下标累加
  ReactDOM.render(<App />, document.getElementById('root'));
}
```

![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/4509b3a880cf4f63b8ba4e1de7ecca3e~tplv-k3u1fbpfcp-watermark.image?)

## 4、`useReducer()` 另一种让函数组件保存状态的方式(类似多个`setState`)


![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c98230bf7401433685af00dcb645812f~tplv-k3u1fbpfcp-watermark.image?)

`useReducer`相对`useState`函数的优势：  
若`App`组件的子组件需要修改`count`,则只需将`dispatch`传递给子组件去调用`action`

- 实现原理(基于`useState`)：实际就是加了`reducer`函数去判断各种`action`,触发`action`用`dispathch`。
```js
function useReducer (reducer, initialState) {
  const [state, setState] = useState(initialState);
  function dispatch (action) {
    const newState = reducer(state, action);
    setState(newState);
  }
  return [state, dispatch];
}

function App() {
  function reducer (state, action) {
    switch (action.type) {
      case 'increment':
        return state + 1;
      case 'decrement':
        return state - 1;
      default:
        return state;
    }
  }
  const [count, dispatch] = useReducer(reducer, 0);
  return <div>
    {count}
    <button onClick={() => dispatch({type: 'increment'})}>+1</button>
    <button onClick={() => dispatch({type: 'decrement'})}>-1</button>
  </div>;
```

## 5、`useContext` 用在跨组件层级获取数据时简化获取数据的代码

![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f683fc6d767a43299f3bca0317d1a324~tplv-k3u1fbpfcp-watermark.image?)


## 6、`useEffect` 让函数型组件拥有处理副作用的能力. 模拟生命周期函数
1. 执行时机分析
- 可以把 useEffect 看做 componentDidMount, componentDidUpdate 和 componentWillUnmount 这三个函数的组合
- useEffect(() => {}) => `componentDidMount`, `componentDidUpdate`
- useEffect(() => {}, []) => `componentDidMount`
- useEffect(() => () => {}) => `componentWillUnMount`

![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d007742bc75e405f98f0e9670b29137f~tplv-k3u1fbpfcp-watermark.image?)

2. 使用方式
- 为window对象添加滚动事件
- 设置定时器让count数值每隔一秒增加1

![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/68b4c51222bb411c8bbdea2a93f3ba7b~tplv-k3u1fbpfcp-watermark.image?)
- `useEffect` 钩子函数的第二个参数--只有指定数据发生变化时触发`effect`

![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a3ff82e338db4027b87dbe7a286d9ebb~tplv-k3u1fbpfcp-watermark.image?)

3. `useEffect` 解决的问题
- 按照用途将代码进行分类 (将一组相干的业务逻辑归置到了同一个副作用函数中)
- 简化重复代码, 使组件内部代码更加清晰
4. 结合异步函数
- `useEffect`中的参数函数不能是异步函数, 因为`useEffect`函数要返回清理资源的函数, 如果是异步函数就变成了返回`Promise`
- `Understanding React’s useEffect cleanup function`
```jsx
useEffect(() => {
    effect
    return () => {
        cleanup
    }
}, [input])
```

![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9bfa3dd47a18480798bc279ab016e6e9~tplv-k3u1fbpfcp-watermark.image?)

5. 实现原理
- `useEffect`同样可以多次调用
```js
function render () {
  stateIndex = 0;
  effectIndex = 0;
  ReactDOM.render(<App />, document.getElementById('root'));
}

// 上一次的依赖值
let prevDepsAry = [];
let effectIndex = 0;

function useEffect(callback, depsAry) {
  // 判断callback是不是函数
  if (Object.prototype.toString.call(callback) !== '[object Function]') throw new Error('useEffect函数的第一个参数必须是函数');
  // 判断depsAry有没有被传递
  if (typeof depsAry === 'undefined') {
    // 没有传递
    callback();
  } else {
    // 判断depsAry是不是数组
    if (Object.prototype.toString.call(depsAry) !== '[object Array]') throw new Error('useEffect函数的第二个参数必须是数组');
    // 获取上一次的状态值
    let prevDeps = prevDepsAry[effectIndex];
    // 将当前的依赖值和上一次的依赖值做对比 如果有变化 调用callback
    let hasChanged = prevDeps ? depsAry.every((dep, index) => dep === prevDeps[index]) === false : true;
    // 判断值是否有变化
    if (hasChanged) {
      callback();
    }
    // 同步依赖值
    prevDepsAry[effectIndex] = depsAry;
    effectIndex++;
  }
}
```

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6d13a909d73748ce877499ea721de74f~tplv-k3u1fbpfcp-watermark.image?)

## 7、useLayoutEffect()
> useEffect在浏览器渲染完成之后执行
>
> useLayoutEffect在浏览器渲染之前执行
>
> 所以useLayoutEffect总是比useEffect先执行
>
> useLayoutEffect里面的任务最好是影响了布局视图，但如果无此操作，为了用户体验，优先使用useEffect（优先渲染视图）

![image-20220213143535492](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/38e134038aa84768b0987066e33a0cc5~tplv-k3u1fbpfcp-zoom-1.image)


## 8、useMemo()
- `useMemo` 的行为类似`Vue`中的计算属性, 可以监测某个值的变化, 根据变化值计算新值.
- `useMemo` 会缓存计算结果. **如果监测值没有发生变化, 即使组件重新渲染, 也不会重新计算**. 此行为可以有助于避免在每个渲染上进行昂贵的计算。

![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/dd84afdfcbfa48b7bd18d410e729244c~tplv-k3u1fbpfcp-watermark.image?)
- 示例：
![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/4d6e1ddf91824783a57c5935d59c1df7~tplv-k3u1fbpfcp-watermark.image?)
## 9、memo()
- 性能优化, 如果本组件中的数据没有发生变化, 阻止组件更新. 类似类组件中的 `PureComponent` 和 `shouldComponentUpdate`(`return false`组织渲染)

![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f741d6dbf0924a3b88fc7a20db827216~tplv-k3u1fbpfcp-watermark.image?)
- 计数器案例演示：

![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7a2a3756eef2464ca31c233ae455e68a~tplv-k3u1fbpfcp-watermark.image?)
## 10、useCallback()
问题：如8中示例解决了父组件`state`变化后，子组件虽然没有依赖父组件的`state`，但是会因父组件重新渲染而渲染的问题。用`memo`阻止组件的重新渲染。但如果父组件传给子组件方法时，仍会存在因父组件重新渲染，导致重新创建了方法实例。子组件也会跟着渲染。这时，可以使用`useCallback()`缓存函数，监听`setState()`方法的变化，
作用：性能优化, 缓存函数, 使组件重新渲染时得到相同的函数实例

![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b60138f6fce04ecfad030cad2a6e1254~tplv-k3u1fbpfcp-watermark.image?)
## 11、useRef()
- 作用一：获取 DOM 元素

![1656213661206.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/12cb01c862f54ab08960375e261c54c3~tplv-k3u1fbpfcp-watermark.image?)
- 作用二： 保存数据（跨组件周期）
`useRef()` VS `useState()` 对比：`useState()`保存的是状态数据，当数据变化后，会触发组件的重新渲染。而`useRef()` 保存的不是状态数据，即使去更改它保存的数据也不会触发组件的重新渲染。即使组件重新渲染, 保存的数据仍然还在。我通常用于保存在程序运行过程中的一些辅助的手续。
![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/24b29337577544098cc891fbb8e9cdbc~tplv-k3u1fbpfcp-watermark.image?)

## 12、forwardRef()
> 少部分时候我们希望props包含ref，这时候就需要forwardRef


## 13、自定义`Hook`
- 自定义 `Hook` 是标准的封装和共享逻辑的方式.
- 自定义 `Hook` 是一个函数, 其名称以 `use` 开头.
- 自定义 `Hook` 其实就是逻辑和内置 `Hook` 的组合.

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/152904a7c7f544a89547e24edb9fa574~tplv-k3u1fbpfcp-watermark.image?)

## 14、`react-router-dom` 路由提供的钩子函数使用

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9267209a3dfc43d284286352ee551b59~tplv-k3u1fbpfcp-watermark.image?)

## 15（副作用Side-effect）
1. 什么是副作用

> 与药物的副作用类似: 减肥药(拉肚子)，头孢(过敏)，泰诺(头痛)
>
> 副作用与纯函数相反，指一个函数处理了与返回值无关的事情
>
> 输入参数一样，而输出结果不确定的情况就是副作用，比如我们发送请求，就不一定能得到相同返回
>
> 副作用不全是坏事，很多代码必须得借助副作用才能实现如AJAX，修改dom，甚至是console log，副作用会给系统添加不可控的因素，但我们也不应该想方设法躲避副作用，更应该避免的是错误的代码逻辑和思维理念

2. 纯函数( pure function )

-   给一个函数同样的参数，那么这个函数永远返回同样的值
-   React组件输入相同的参数(props)，渲染UI应该永远一样

