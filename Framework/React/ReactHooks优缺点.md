# 谈谈react hooks的优缺点

## 优点：
#### 更容易复用代码

这点应该是`react hooks`最大的优点，它通过自定义hooks来复用状态，从而解决了类组件有些时候难以复用逻辑的问题。hooks是怎么解决这个复用的问题呢，具体如下：

1.  每调用useHook一次都会生成一份独立的状态，这个没有什么黑魔法，函数每次调用都会开辟一份独立的内存空间。
2.  虽然状态(from useState)和副作用(`useEffect`)的存在依赖于组件，但它们可以在组件外部进行定义。这点是`class component`做不到的，你无法在外部声明state和副作用（如`componentDidMount`）。
3.  组件树层级变浅。在原本的代码中，我们经常使用 HOC/render props 等方式来复用组件的状态，增强功能等，无疑增加了组件树层数及渲染，在 React DevTools 中观察过 React 应用，你会发现由 providers，consumers，高阶组件，render props 等其他抽象层组成的组件会形成“嵌套地狱”。而在 React Hooks 中，这些功能都可以通过强大的自定义的 Hooks 来实现。
3.  不用再去考虑 this 的指向问题。在类组件中，你必须去理解 JavaScript 中 this 的工作方式。

上面这两点，高阶组件也能做到。但高阶组件的缺点是：

1. 来源不清晰：高阶组件是通过增强组件的props（赋予一个新的属性或者方法到组件的props属性）， 实现起来比较隐式。你难以区分这个props是来自哪个高阶组件。

2. 高阶组件需要实例化一个父组件来实现，不管是在代码量还是性能上，都不如hooks。

3. 依赖不清晰：高阶组件对入参的依赖是隐式的，入参发生在看不到的上层的高阶组件里面。

4. 命名冲突：高阶组件太多时，容易发生命名冲突。

## 缺点：
#### 简述
状态不同步\
不好用的useEffect，

这绝对可以成为摒弃react hooks的理由。函数的运行是独立的，每个函数都有一份父级作用域。当我们处理复杂逻辑的时候，经常会碰到状态不同步的问题

副作用代码从主动式变成响应式\
写函数组件时，你不得不改变一些写法习惯。你必须把深入理解useEffect和useCallback这些api的第二个参数的作用。其次，还有下面几点：

useEffect的依赖参数并不好写，你需要花时间去判断该把什么变量加入到依赖数组，幸运的是eslint-plugin-react-hooks很多场景可以帮你解决这点，但有时得靠你自己加以判断\
useEffect很容易出错，它是响应式的，当某个依赖项变化时它才会被调用。你必须去理解它的调用时机、调用时的状态老旧问题，这不直观，也难以维护。有时，useEffect会发生比你预期更多的调用次数\
怎么避免react hooks的常见问题\
不要在useEffect里面写太多的依赖项，划分这些依赖项成多个useEffect，这样更好维护
#### Hook API

| 名称 | 描述 |
| --- | --- |
| useState | 在函数组件中维护自己的状态 |
| useEffect | 在函数组件中实现生命周期钩子函数 |
| useContext | 用来处理多层级传递数据的方式，减少组件嵌套 |
| useReducer | 跟react-redux的使用方式一样，算是提供一个 mini 的 Redux 版本 |
| useCallback | 获得一个记忆函数，避免在某些情况下重新渲染子组件，用来做性能优化 |
| useMemo | 获得一个记忆组件，和useCallback非常类似，它适用于返回确定的值 |
| useRef | 生成对 DOM 对象的引用，它是一个真正的引用，而不是把值拷过去 |
| useImperativeHandle | 透传ref，用于让父组件获取子组件内的引用 |
| useLayoutEffect | 同步执行副作用，在页面完全渲染完成后，操作DOM |

写函数组件时，你不得不改变一些写法习惯。你必须清楚代码中`useEffect`和`useCallback`的“依赖项数组”的改变时机。有时候，你的useEffect依赖某个函数的不可变性，这个函数的不可变性又依赖于另一个函数的不可变性，这样便形成了一条依赖链。一旦这条依赖链的某个节点意外地被改变了，你的useEffect就被意外地触发了，如果你的useEffect是幂等的操作，可能带来的是性能层次的问题，如果是非幂等，那就糟糕了。

所以，对比`componentDidmount`和`componentDidUpdate`，useEffect带来的心智负担更大。

#### 避免react hooks的常见问题

1.  不要在`useEffect`里面写太多的依赖项，划分这些依赖项成多个单一功能的`useEffect`。其实这点是遵循了软件设计的“单一职责模式”。
1.  如果你碰到状态不同步的问题，可以考虑下手动传递参数到函数。如：

```
   // showCount的count来自父级作用域 
   const [count,setCount] = useState(xxx); 
   function showCount(){ console.log(count) } 
   
   // showCount的count来自参数 
   const [count,setCount] = useState(xxx); 
   function showCount(c){ console.log(c) }
```

但这个也只能解决一部分问题，很多时候你不得不使用上述的`useRef`方案。

3. 拆分组件，细化组件的粒度。复杂业务场景中使用hooks，应尽可能地细分组件，使得组件的功能尽可能单一，这样的hooks组件更好维护。
4. `hooks`很好用很强大，但它不擅长异步。但在有太多异步逻辑的代码时，class比它更适合、更稳、更好维护。
5. 一定要加入eslint-plugin-react-hooks这个插件，并且重视它的警告！




