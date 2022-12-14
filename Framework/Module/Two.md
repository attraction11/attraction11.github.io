# 模块检测二

## 1、Vue2 和 Vue3 都有哪些区别？

#### 简答

##### 语法 API：

-   生命周期的变化： 使用 setup 代替了之前的 beforeCreate 和 created，其他生命周期名字有些变化，功能都是没有变化。

##### 性能优化：

-   使用 proxy 代替 defineProperty：劫持对整个对象操作，通过 getter 去递归响应式，只有真正访问到的内部对象才会变成响应式。
-   静态提升 hoistStatic：检测模版中的静态节点、子树甚至数据对象，并将他们提升到渲染函数之外，避免在每次渲染时重新创建。
-   静态标记 PatchFlags：Vue2 中每次更新都是全量 diff，Vue3 则只对比带有标记的节点，大大提升了对比性能。
-   Diff 算法优化：先做相同的前置与后置元素的预处理，后采用最长递增子序列算法对比节点变更。
-   事件监听器缓存：默认情况下 onClick 会被视为动态绑定，但都是同一个函数没必要追踪更新，直接缓存起来复用就好了。
-   源码体积优化：移除一些冷门的 feature（比如 filter），引入 tree-shaking 的技术，减少打包体积。
-   优化逻辑组织与复用：使用 Composition API 解决 mixins (属性、函数)命名冲突和数据来源不清晰问题，另外对 tree-shaking 友好，代码更容易压缩。
-   SSR 渲染性能提升：当存在大量静态内容时，会被当作纯字符串推进一个 buffer 里面。即使存在动态的绑定，会通过模版插值潜入进去，完胜虚拟 dmo 渲染。
-   使用 Vite 创建 Vue3：Vite 的性能也要大大优于 webpack，可以利用 ES6 的 import 会发送请求去加载文件的特性，拦截这些请求，做一些预编译。
-   更好的代码管理方式：**monorepo**
-   有类型声明与保护：**TypeScript**

### 详细介绍

[掘金-Vue3 源码浅谈](https://juejin.cn/post/6885247012036902920)

[掘金-一文看懂 Vue3.0 主要做了哪些优化？](https://juejin.cn/post/6850418112878575629)

[掘金-Vue3 为什么要使用 Composition API](https://juejin.cn/post/6875253488017342478)

[CSDN-vue3.0 性能优化点之静态标记(PatchFlag)](https://blog.csdn.net/weixin_40297452/article/details/121143356)

## 2、vue 父子组件的通信方式

#### 简答

-   props / $emit：
    -   使用：父组件通过 props 的方式向子组件传递数据，而通过$emit 子组件可以向父组件通信。
    -   注意：prop 只可以父子组件间传递，并且 prop 只读，不可被修改
-   $parent / $children
    -   使用：子实例可以用 this.$parent 访问父实例，父实例可以通过 this.$children[i] 访问子实例。
    -   注意：不推荐使用。推荐用 props 和 events 实现父子组件通信
-   provide/ inject （vue2.2）
    -   使用：父组件中通过 provide 来提供变量, 然后再子组件中通过 inject 来注入变量，不限子组件嵌套有多深。
-   ref / $refs
    -   使用：ref 如果在普通的 DOM 元素上使用，引用指向的就是 DOM 元素；如果用在子组件上，引用就指向组件实例。通过 this.$refs['对 ref 的赋值']
-   event / Bus
    -   使用：eventBus 又称为事件总线，在 vue 中可以使用它来作为沟通桥梁的概念, 就像是所有组件共用相同的事件中心，可以向该中心注册发送事件或接收事件， 所以组件都可以通知其他组件。
    -   注意：项目较大,就容易造成难以维护的灾难
-   vuex / pinia
    -   使用：Vuex 和 Pinia 是 Vue 3 中的状态管理工具，使用这两个工具可以轻松实现组件通信。
-   localStorage / sessionStorage
    -   通信比较简单, 缺点是数据和状态比较混乱,不太容易维护。
    -   注意用 JSON.parse() / JSON.stringify() 做数据格式转换。localStorage / sessionStorage 可以结合 vuex, 实现数据的持久保存,同时使用 vuex 解决数据状态混乱问题。
-   $attrs 与 $listeners (vue2.4)
    -   使用：批量获取未被 props 定义的属性。新增了 inheritAttrs 选项。

### 详细介绍

[博客-Vue 组件间通信的八种方式](https://www.wpgdadatong.com/cn/blog/detail/44531)
[segmentfault-vue 组件间通信六种方式（完整版）](https://segmentfault.com/a/1190000019208626)

## 3、vue3 有了解过吗？能说说跟 vue2 的区别吗？

#### 简答

-   vue3 版本重写的两大原因：
    -   新的 JavaScript 语言特性在主流浏览器中的受支持水平（利用新的语言特性(es6)）
    -   当前代码库中随时间推移而逐渐暴露出来的一些**设计和架构问题**
-   概览 Vue3 的新特性：速度更快、体积减少、更易维护、更好的 Typescript 支持、更接近原生、更易使用。
    -   速度更快：重写了虚拟 Dom 实现、编译模板的优化、更高效的组件初始化。
    -   体积减少：支持 tree-shaking
    -   更易维护：compositon Api 实现灵活的逻辑组合与复用
    -   更好的 Typescript 支持：VUE3 是基于 typescipt 编写的，可以享受到自动的类型定义提示
    -   更接近原生：可以自定义渲染 API
    -   更易使用：响应式 Api 暴露出来
-   Vue 3 中需要关注的一些新功能：
    -   framents：在 Vue3.x 中，组件现在支持有多个根节点
    -   Teleport：一种能够将我们的模板移动到 DOM 中 Vue app 之外的其他位置的技术
    ```js
    <button @click="showToast" class="btn">打开 toast</button>
    <!-- to 属性就是目标位置 -->
    <teleport to="#teleport-target">
        <div v-if="visible" class="toast-wrap">
            <div class="toast-msg">我是一个 Toast 文案</div>
        </div>
    </teleport>
    ```
    -   createRenderer: 能够构建自定义渲染器，我们能够将 vue 的开发模型扩展到其他平台

### 详细介绍

[博客-vue3 有了解过吗？能说说跟 vue2 的区别吗？](https://vue3js.cn/interview/vue/vue3_vue2.html)
