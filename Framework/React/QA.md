# Q&A-2

## 一、 请简述 React 16 版本中初始渲染的流程

1. `jsx`转换为`react`元素

-   `babel-react` 将`jsx` 调用 `React.createElement` 创建为虚拟`DOM`(`react element`是 一个用来描述`react` 元素的对象)

2. `render`阶段（协调层）: 此阶段负责创建 `Fiber` 数据结构并为 `Fiber` 节点打标记，标记当前 `Fiber` 节点要进行的 `DOM` 操作

大致流程：

-   首先为每一个`react`元素创建`fiber`对象(`workInProgress Fiber` 树)
-   然后创建此`fiber`对象对应的`DOM`对象，并为`fiber`对象添加`effectTag` 属性，用于记录当前`fiber`要执行的`DOM`操作
-   在`render`结束后，所有的`fiber`对象会被保存在`fiberroot`中

代码执行：

-   将子树渲染到容器中 (初始化 `Fiber` 数据结构: 创建 `fiberRoot` 及 `rootFiber`)
-   判断是否为服务器端渲染 如果不是服务器端渲染，清空 `container` 容器中的节点
-   通过实例化 `ReactDOMBlockingRoot` 类创建 `LegacyRoot`，创建 `LegacyRoot` 的 `Fiber` 数据结构
-   创建 `container`，创建根节点对应的 `fiber` 对象
-   获取 `container` 的第一个子元素的实例对象
-   计算任务的过期时间，再根据任务过期时间创建 `Update` 任务，将任务(Update)存放于任务队列(updateQueue)中。判断任务是否为同步 调用同步任务入口。
-   构建 `workInProgress Fiber` 树

一些关键点：

-   在 render 阶段中，只会做一些复杂的运算，并不会真正的操作页面
-   在内存中做 新旧 fiber 对象比对，找出更新的 fiber 节点，或者是首次加载时 生成组装 html 片段
-   `render`阶段是可以被打断的,但初始渲染时不会被打断，因为要让用户尽快看到界面
-   `react`里的时间分片的概念，分的就是复杂运算的部分
-   `render`阶段也就是说可能会被高优先级的任务（例如界面事件）打断

3. `commit` 阶段 （渲染层）： `commit` 阶段负责根据 `Fiber` 节点标记 ( `effectTag` ) 进行相应的 `DOM` 操作，可以分为三个子阶段

-   `before mutation` 阶段（执行 `DOM` 操作前）：处理类组件的 `getSnapShotBeforeUpdate` 生命周期函数
-   `mutation` 阶段（执行 `DOM` 操作）： 根据 `effectTag` 执行 `DOM` 操作，向容器 `container` 中追加或插入节点
-   `layout` 阶段（执行 `DOM` 操作后）：调用生命周期函数和钩子函数，执行 `render` 传递的回调函数

## 二、 为什么 React 16 版本中 render 阶段放弃了使用递归

-   在 `React 15` 的版本中，采用了循环加递归的方式进行了 `virtualDOM` 的比对，由于递归使用 `JavaScript` 自身的执行栈，一旦开始就无法停止，直到任务执行完成。如果 `VirtualDOM` 树的层级比较深，`virtualDOM` 的比对就会长期占用 `JavaScript` 主线程，由于 `JavaScript` 又是单线程的无法同时执行其他任务，所以在比对的过程中无法响应用户操作，无法即时执行元素动画，造成了页面卡顿的现象。
-   在 `React 16` 的版本中，放弃了 `JavaScript` 递归的方式进行 `virtualDOM` 的比对，而是采用**循环模拟递归**。而且比对的过程是利用浏览器的空闲时间完成的，不会长期占用主线程，这就解决了 `virtualDOM` 比对造成页面卡顿的问题。
-   在 `React` 中，官方实现了自己的任务调度库 `Scheduler`。它可以实现在浏览器空闲时执行任务，而且还可以设置**任务的优先级**，高优先级任务先执行，低优先级任务后执行。

## 三、 请简述 React 16 版本中 commit 阶段的三个子阶段分别做了什么事情

调用 `commitRoot` 表示进入 `commit` 阶段，`commitRoot` 更改任务优先级，默认任务优先级为 `97` ，`commit`阶段不可被打断，要以最高优先级执行 `commit` 任务，使用 `runWithPriority` 改变任务优先级并调用 `commitRootImpl` 则开始 `commit` 阶段

-   `before mutation`阶段（执行 DOM 操作前）
    主要调用类组件生命周期函数`getSnapshotBeforeUpdate`,并且把旧的`props`和旧的`states`传递进去
-   `mutation`阶段（执行`DOM`操作）
    调用`commitMutationEffects `,获取对象得`effects`，根据不同的 `effectTag` 执行不同的操作: 插入节点：`commitPlacement`、更新节点：`commitWork`、删除节点：`commitDeletion`
-   `layout`阶段（执行`DOM`操作后）
    调用类组件的生命周期函数: 初次渲染阶段调用`componentDidMount`生命周期函数、更新阶段调用`componentDidUpdate`生命周期函数、执行渲染完成之后的回调函数，也就是`render`函数的第三个参数，并且更改`this`指向，指向`render`方法的第一个参数
    调用函数组件的钩子函数: firstEffect：指向第一个更新的节点、nextEffect：指向下一个更新的节点



## 四、 请简述 workInProgress Fiber 树存在的意义是什么

-   `React` 使用双缓存技术完成 `Fiber` 树的构建与替换，实现`DOM`对象的快速更新
-   在 `React` 中最多会同时存在两棵 `Fiber` 树，当前在屏幕中显示的内容对应的 `Fiber` 树叫做 `current Fiber` 树，当发生更新时，`React` 会在内存中重新构建一颗新的 `Fiber` 树，这颗正在构建的 `Fiber` 树叫做 `workInProgress Fiber` 树。在双缓存技术中，`workInProgress Fiber` 树就是即将要显示在页面中的 `Fiber` 树，当这颗 `Fiber` 树构建完成后，`React` 会使用它直接替换 `current Fiber` 树达到快速更新 `DOM` 的目的，因为 `workInProgress Fiber` 树是在内存中构建的所以构建它的速度是非常快的。一旦 `workInProgress Fiber` 树在屏幕上呈现，它就会变成 `current Fiber` 树
-   在 `current Fiber` 节点对象中有一个 `alternate` 属性指向对应的 `workInProgress Fiber` 节点对象，在 `workInProgress Fiber` 节点中有一个 `alternate` 属性也指向对应的 `current Fiber` 节点对象。
