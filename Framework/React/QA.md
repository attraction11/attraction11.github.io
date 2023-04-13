# Q&A-2

## 1、 请简述 React 16 版本中初始渲染的流程

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

## 2、 为什么 React 16 版本中 render 阶段放弃了使用递归

-   在 `React 15` 的版本中，采用了循环加递归的方式进行了 `virtualDOM` 的比对，由于递归使用 `JavaScript` 自身的执行栈，一旦开始就无法停止，直到任务执行完成。如果 `VirtualDOM` 树的层级比较深，`virtualDOM` 的比对就会长期占用 `JavaScript` 主线程，由于 `JavaScript` 又是单线程的无法同时执行其他任务，所以在比对的过程中无法响应用户操作，无法即时执行元素动画，造成了页面卡顿的现象。
-   在 `React 16` 的版本中，放弃了 `JavaScript` 递归的方式进行 `virtualDOM` 的比对，而是采用**循环模拟递归**。而且比对的过程是利用浏览器的空闲时间完成的，不会长期占用主线程，这就解决了 `virtualDOM` 比对造成页面卡顿的问题。
-   在 `React` 中，官方实现了自己的任务调度库 `Scheduler`。它可以实现在浏览器空闲时执行任务，而且还可以设置**任务的优先级**，高优先级任务先执行，低优先级任务后执行。

## 3、 请简述 React 16 版本中 commit 阶段的三个子阶段分别做了什么事情

调用 `commitRoot` 表示进入 `commit` 阶段，`commitRoot` 更改任务优先级，默认任务优先级为 `97` ，`commit`阶段不可被打断，要以最高优先级执行 `commit` 任务，使用 `runWithPriority` 改变任务优先级并调用 `commitRootImpl` 则开始 `commit` 阶段

-   `before mutation`阶段（执行 DOM 操作前）
    主要调用类组件生命周期函数`getSnapshotBeforeUpdate`,并且把旧的`props`和旧的`states`传递进去
-   `mutation`阶段（执行`DOM`操作）
    调用`commitMutationEffects `,获取对象得`effects`，根据不同的 `effectTag` 执行不同的操作: 插入节点：`commitPlacement`、更新节点：`commitWork`、删除节点：`commitDeletion`
-   `layout`阶段（执行`DOM`操作后）
    调用类组件的生命周期函数: 初次渲染阶段调用`componentDidMount`生命周期函数、更新阶段调用`componentDidUpdate`生命周期函数、执行渲染完成之后的回调函数，也就是`render`函数的第三个参数，并且更改`this`指向，指向`render`方法的第一个参数
    调用函数组件的钩子函数: firstEffect：指向第一个更新的节点、nextEffect：指向下一个更新的节点



## 4、 请简述 workInProgress Fiber 树存在的意义是什么

-   `React` 使用双缓存技术完成 `Fiber` 树的构建与替换，实现`DOM`对象的快速更新
-   在 `React` 中最多会同时存在两棵 `Fiber` 树，当前在屏幕中显示的内容对应的 `Fiber` 树叫做 `current Fiber` 树，当发生更新时，`React` 会在内存中重新构建一颗新的 `Fiber` 树，这颗正在构建的 `Fiber` 树叫做 `workInProgress Fiber` 树。在双缓存技术中，`workInProgress Fiber` 树就是即将要显示在页面中的 `Fiber` 树，当这颗 `Fiber` 树构建完成后，`React` 会使用它直接替换 `current Fiber` 树达到快速更新 `DOM` 的目的，因为 `workInProgress Fiber` 树是在内存中构建的所以构建它的速度是非常快的。一旦 `workInProgress Fiber` 树在屏幕上呈现，它就会变成 `current Fiber` 树
-   在 `current Fiber` 节点对象中有一个 `alternate` 属性指向对应的 `workInProgress Fiber` 节点对象，在 `workInProgress Fiber` 节点中有一个 `alternate` 属性也指向对应的 `current Fiber` 节点对象。

## 5、虚拟 DOM 是什么？原理、优缺点？应用场景？

-   虚拟 DOM： **JS 对象**，通常含有 tag(节点标签)、props（节点属性含事件监听）、shapeFlag（特征标签）、children（子节点 Array）。
-   诞生目的：浏览器标准 DOM 对象很复杂，使用虚拟 DOM + diff 算法减少 DOM 操作，同时引入 key 值，避免对比多个相同元素浪费性能
-   虚拟 DOM 的实现：

    -   compile，通过 h 函数把真实 DOM 编译成 vnode 虚拟节点对象。
    -   diff 算法，明确 oldVnode 和 newVnode 之间的变化。
    -   patch， 如果把这些变化用打补丁的方式（批量异步）更新到真实 dom 上去

-   优点：

    -   **保证性能下限** 。降低 DOM 的操作范围（减小）与频次（合并），提升页面性能。

        > 是不是所有的操作都是虚拟 DOM 更高效?
        > 大量的直接操作 DOM 容易引起页面性能下降。这时 React 基于虚拟 DOM 的 diff 处理与批处理操作，可降低 DOM 的操作频次和范围，提升页面性能。但是在首次渲染或者微量 dom 操作的时候，虚拟 DOM 的性能就更慢一些。

    -   **规避 XSS 风险。** 跨站脚本攻击属于代码注入攻击，没有直接的 HTML，都是通过转义的方式生成的。

        > 虚拟 DOM 一定可以规避 XSS 吗？
        > 虚拟 DOM 内部确保了字符转义，所以确实可以做到这点，但 React 存在风险，因为 React 留有 dangerouslySetInnerHTML API 绕过转义。

    -   **低成本实现跨平台**（JS 对象可以与其他实体建立映射关系，如：IOS/安卓应用、小程序）

        > 没有虚拟 DOM 不能实现跨平台吗？
        > 比如 NativeScript 没有虚拟 DOM 层 ，它是通过提供兼容原生 API 的 JS API 实现跨平台开发。
        > 那虚拟 DOM 的优势在哪里？
        > 实际上它的优势在于跨平台的成本更低。在 React Native 之后，前端社区从虚拟 DOM 中体会到了跨平台的无限前景，所以在后续的发展中，都借鉴了虚拟 DOM。比如：社区流行的小程序同构方案，在构建过程中会提供类似虚拟 DOM 的结构描述对象，来支撑多端转换。

-   缺点:

    -   **内存占用较高**。因为需要模拟整个网页的真实 DOM，而且由于是 Object，其内存占用肯定会有所上升。
    -   **严重依赖打包工具**。需要用额外的创建函数 CreateElement，可以用 JSX / 模板 来简化，因为 JS 不认识 jsx / 模板 语法。
    -   **高性能应用场景存在难以优化**的情况，类似像 Google Earth 一类的高性能前端应用在技术选型上往往不会选择 React。

-   其他应用场景：

    -   **记录真实 DOM 变更**。可以应用于埋点统计与数据记录等。例如实现 web 页面录制与回放的[rrweb](https://github.com/rrweb-io/rrweb), 将⻚⾯中的 DOM 以及⽤户操作保存为可序列化的数据，以实现远程回放.

## 6、vue2、vue3 、react17+ 在虚拟 dom 的 diff 算法？

#### 简答

**vue2 diff 算法：**

-   **双端比较：新列表\*\***和旧列表两个列\*\*表的头与尾互相对比，，在对比的过程中指针会逐渐向内靠拢，直到某一个列表的节点全部遍历过，对比停止。
-   **非理想情况：当**四次对比都没找到复用节点时，拿**新列表**的第一个节点去旧列表中找与其 `key`相同的节点。找到移动旧节点，找不到添加新节点到旧节点列表，之后新列表头指针向后移一位，依次查找。

**vue3 diff 算法：**

-   **首先是相同的前置与后置元素的预处理，其次是最长递增子序列（借鉴于**[inferno](https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Finfernojs%2Finferno "https://github.com/infernojs/inferno")）

**react diff 算法：**

-   **递增法：通过对比新的列表中的节点，在原本的列表中的位置是否是递增，来判断当前节点是否需要移动。**
-   **优化与不足：**
    -   **目前的 **`reactDiff`的时间复杂度为 `O(m*n)`，我们可以用空间换时间，把 `key`与 `index`的关系维护成一个 `Map`，从而将时间复杂度降低为 `O(n)。`
    -   **react 目前在节点移动情况下的算法性能不高，有可优化的空间。**`vue2.x`中的 `diff`算法——双端比较，解决此问题。

#### 详细介绍

[掘金：React、Vue2、Vue3 的三种 Diff 算法](https://juejin.cn/post/6919376064833667080)

[GitHub：三种 virtual-dom Diff 算法源码实现](https://github.com/sunyanzhe/virtual-dom/tree/master/src/diff)

## 7、react 和 vue 在技术层面的区别？

#### 简答

-   相同点
    -   都是创建 UI 界面的 JavaScript 库
    -   都采用虚拟 DOM，提高渲染的速度
    -   提供响应式和可组合性的视图组件（组件化），推崇单向数据流
    -   独立的路由系统和全局状态的管理的处理来自于第三方库
-   不同点：
    -   概念/框架层面：
        -   Vue.js 是一套构建用户界面的渐进式框架，采用自底向上增量开发的设计。
        -   React 是一个用于构建用户界面的开源 JavaScript 库。React 拥有较高的性能，代码逻辑非常简单。
    -   数据流及响应式的不同： vue 是数据双绑，react 数据流向是单向的。监听数据变化的实现原理不同
    -   模板语法不同：vue 是指令+模板语法，react 是 jsx 函数式编程
    -   渲染区别：vue 是数据变化通知依赖项精确的驱动渲染，react 是需要调用 setState 时重新渲染全部子组件，但是可以通过 shouldComponentUpdate 等一些方法进行优化控制
    -   diff：Vue Diff 使用双向链表边对比边更新，react 的 diff 将需要更新的部分添加到任务队列进行批量更新
    -   事件机制：vue 直接是原生事件，react 是合成事件：事件冒泡到根节点进行事件委托处理，且做了跨端兼容处理。

#### 详细介绍

[掘金：vue 和 react 区别](https://juejin.cn/post/7085734888011202597)
