# Q&A

## 1. Vue3 组件之间的通信方式有哪些

-   `Props、Emits`：用于父子组件之间数据的传递
-   `expose、ref`：在 Vue3 中我们需要通过 `ref` 去获取组件的实例，并且 Vue 并不会将所有组件实例属性和方法暴露出来。我们需要通过 `defineExpose` 将实例的属性和方法暴露出来。在父组件我们可以通过获取组件实例来向子组件传递数据。
-   `透传 Attributes`：指的是在子组件中，没使用 prop 或 emits 定义的 attribute，可以通过 `$attrs` 来访问。[文档介绍](https://cn.vuejs.org/guide/components/attrs.html)
-   `v-model` 语法糖
-   `Slots` 插槽
-   `Provide/Inject`：适合跨组件传递
-   `Vuex、Pinia`：跨组件通信工具

## 2. `v-if` 和 `v-for` 哪个优先级更高

:::tip 优先级比较

在 Vue2 中 `v-for` 会比 `v-if` 的优先级高

在 Vue3 中 `v-if` 会比 `v-for` 的优先级高

建议：在平时开发中永远不要将两个 API 放在同一个元素上。可以根据需求在外部包裹一层 `<template v-for/v-if></template>`

:::

## 3. `v-model` 双向绑定使用

:::tip `v-model`

`v-model` 是一个语法糖。默认情况下相当于 `:value` 和 `@update:value`，使用双向绑定可以减少繁琐事件，提高开发体验。

Vue3 甚至可以使用参数形式来绑定多个响应式数据。例如： `v-model:content`、`v-model:header`

:::

## 4. Vue3 中如何扩展一个组件

:::tip 扩展组件

Vue3 模式下最好通过 Composition API 来进行组件的扩展。首先开发者通过 `Props` 和 `Emits` 来与子组件进行通信，之后配合响应式模块可以很方便得多编写独立功能的钩子来提供响应式的数据。

当我们需要新增组件功能时，只需要在当前的组件基础上新增对应的钩子来完成功能的开发。

[官方关于组合式函数（composables 或 hooks）的介绍和用法](https://staging-cn.vuejs.org/guide/reusability/composables.html)

:::

## 5. `v-show` 和 `v-if` 的区别

控制手段：`v-show` 是通过给元素设置 CSS `display: none` 来控制元素的显示与否 而`v-if` 是通过一定的 JS 手段将整个 DOM 节点进行添加或删除

编译过程：`v-if` 切换有一个局部编译/卸载的过程，切换过程中合适地销毁和重建内部的事件监听和子组件。`v-show` 只是简单一个基于 CSS 切换

编译条件：`v-if` 是真正的条件渲染，它会确保在切换过程中条件块内的事件监听器和子组件适当地被销毁和挂载。只有渲染条件为假时，并不做操作，直到为真才渲染

总结：

1. 通过 `v-if` 来控制元素或子组件的显示和隐藏会经历实例创建、挂载和销毁等阶段。相对来说性能消耗较大，所以如果有频繁的控制元素的显示隐藏的需要，应当首选 `v-show`

2. `v-show` 由 false 变为 true 的时候不会触发组件的生命周期。`v-if` 由 false 变为 true 的时候，触发组件的 `beforeCreate`、`create`、`beforeMount`、`mounted` 钩子，由 true 变为 false 的时候触发组件的 `beforeDestory`、`destoryed` 方法

## 6. 谈谈对 Vue 数据响应式理解

:::tip

数据响应式：数据驱动视图的思想,**能够使数据变化可以被检测并且做出相应的响应机制**

MVVM 框架中都要解决一个核心的问题是**如何连接数据层和视图层**。通过**数据驱动视图**，数据变化，视图更新，要做到这点的就需要做到数据响应式处理

在 Vue2 中，采用的是 `Object.defineProperty()` 的方式对响应式数据进行拦截。但是使用此 API 有一些缺点：  
1、新增或删除属性的不会被依赖收集也就不会有响应式的特性，需要使用 `Vue.set/delete` 等 API 才能生效。  
2、对应 ES6 中的 Map、Set 这些数据结构不支持。  

在 Vue3 中 采用的是 ES6 的 `Proxy`代理实现数据的响应式

:::

## 7. 虚拟 DOM 的理解

虚拟 DOM：就是 JavaScript 对象，它通过不同的属性去描述一个 DOM 节点的视图结构

虚拟 DOM 如何生成？

在 Vue 中我们会为组件编写模板 template，这个模板会被编译器 compiler 编译为渲染函数，在接下来的挂载时刻 mount 过程中会调用 render 渲染函数来返回 虚拟 DOM，在后续的 patch 过程中会进一步转换为真实 DOM

挂载过程结束后，Vue 会进入更新流程，如果发现有响应式数据发生变化，就会引起组件重新渲染，此时就会产生新的虚拟 DOM，和上一次的渲染结构 Diff 就可以得到变化的地方，从而转换为最小量的 DOM 操作，高效更新视图

## 8. 对 Diff 算法的理解

Vue 中的 `diff` 算法又称为 `patching` 算法。虚拟 DOM 想要转换为真实 DOM 就需要通过此方法进行转换

Vue 中 `diff` 执行的时刻是组件内响应式数据变更触发实例执行其更新函数时，更新函数会再次执行渲染函数获得最新虚拟 DOM，然后执行 `patch` 函数，并传入新旧两次虚拟 DOM，通过对比两者找到变化的地方，最后将其转换为真实的 DOM

Patch 过程是一个递归过程，遵循一个**同层比较，深度优先**策略

-   首先判断两个节点是否为相同同类节点，不同则删除重新创建
-   如果双方都是文本则更新文本内容
-   如果双方都是元素节点则递归更新子元素，同时更新元素属性
-   更新子节点又分为几种情况：
    -   新的子节点是文本，老的子节点是数组则清空，并设置文本
    -   新的子节点是文本，老的字节点是文本则直接更新文本
    -   新的子节点是数组，老的子节点是文本则清空文本，并创建子节点数组中的子元素
    -   新的节点是数组，老的子节点也是数组，那么比较两组子节点，更新细节

Vue3 在 diff 算法中相比增加了 更新类型标记 来优化算法。作用就是为了在发送变化的地方添加一个 `flag` 标记，下次发送变化的时候直接找该地方进行比较。

```vue
<!-- 对于单个有动态绑定的元素来说，我们可以在编译时推断出大量信息 -->
<template>
    <!-- 仅含 class 绑定 -->
    <div :class="{ active }"></div>

    <!-- 仅含 id 和 value 绑定 -->
    <input :id="id" :value="value" />

    <!-- 仅含文本子节点 -->
    <div>{{ dynamic }}</div>
</template>
```

就是在编译阶段，会为模板生成渲染函数时，会判断每个元素所需要的更新类型，并且打上标记。在更新阶段进行 Diff 的时候就会根据这些类型标记去做对应的更新，极大的优化递归的过程

```ts
createElementVNode(
    "div",
    {
        class: _normalizeClass({ active: _ctx.active }),
    },
    null,
    2 /* CLASS */
);
// 最后这个参数 2 就是一个更新类型标记 (patchFlag)
```

## 9. Vue2 `Object.defineProperty` 和 Vue3 `Proxy`有什么区别

`defineProperty` 是 ES5 新增的方法，是对一个对象新增或修改某个属性，然后返回该对象

`Proxy` 是 E56 新增的，是对对象的代理，并不是直接的去修改对象

:::tip
区别：在 Vue2 中 `defineProperty` 只能对定义好的数据进行数据监听，而新增属性或删除数据是不会被监听的，也就会失去响应式的特性。而 `Proxy` 是对整个对象的代理监听。
:::

## 10. 响应式数据发生改变之后 Vue 做了什么事情

:::tip
当响应式数据监听到数据的变化后，会触发对应组件的渲染方法，渲染前会调用 `beforeUpdate` 钩子函数，在渲染的过程中会 `patch` 重新获取变化后的虚拟 DOM 然后渲染到页面上，渲染后在去调用 `updated` 钩子函数。
:::

## 11. 谈谈 Vue 的生命周期吧

Vue 实例有一个完整的生命周期。从实例创建、初始化数据、编译模板、挂载 DOM、渲染、更新、又渲染、卸载等一系列过程，就是 Vue 的声明周期

-   `beforeCreate`：组件实例创建之前调用，此时还无法访问到相关方法和数据
-   `created`：组件实例创建之后调用。实例完成：数据观测、属性和方法的运算、 watch/event 事件回调。但是 DOM 还未挂载
-   `beforeMount`：挂载之前调用，相关 render 函数首次被调用
-   `mounted`：组件实例被挂载到 DOM 上之后调用
-   `beforeUpdate`：响应式数据被更新前调用，发生在虚拟 DOM 重新渲染和打补丁
-   `updated`：由于数据更新导致的虚拟 DOM 重新渲染和打补丁，在这之后会调用该钩子
-   `beforeDestroy`：组件实例销毁前调用
-   `destroyed`：组件实例销毁之后调用

## 12. 说说 `nextTick` 的使用

:::tip

`nextTick()` 是等待下一次 DOM 更新刷新的工具方法

Vue 有一个异步更新策略，意思就是如果数据变化，Vue 不会立即更新 DOM，而是开启一个队列，把组件更新函数保存在队列中，在同一事件循环中发生的所有数据变更后会异步的批量更新。这一策略会导致我们对数据的修改不会及时的体现在 DOM 上，此时如果想要获取更新后的 DOM 状态，就需要使用 `nextTick`

:::

## 13. `watch` 和 `computed` 的区别

:::tip

computed：会返回一个只读的响应式的数据

watch：检测响应式数据的变化，执行回调

区别：

1. 计算属性可以从响应式数据派生出自己需要的响应式属性。监听器可以监测某个响应式数据的变化并且执行对应的副作用，可以执行一些异步操作等复杂逻辑

2. 两个的使用场景不同。计算属性一般用于对响应式数据进行加工处理得到的全新的响应式数据。监听器则是在数据发送变化后需要执行的操作

:::

## 14. Vue Router 中 hash 模式和 history 模式的区别

SPA 即**单页面应用程序**。只有一个 HTML 文件并且在**用户与应用程序进行交互时**动态的更新此页面的 Web 应用程序。浏览器一开始会加载必需的 HTML 、 CSS 和 JavaScript ，而所有的页面更新操作**都由 JavaScript 来控制**。

-   SPA 的优点：用户体验好、页面内容的改变不需要我们去重新加载新的页面
-   SPA 的缺点：不利于搜索引擎的抓取，首页加载时间会过长、页面渲染的速度会相对较慢

单页面应用程序时就提供了 Hash 和 History 两种模式

### Hash 模式

Hash 模式的前端路由的路径是用井号 # 拼接在真实 URL 后面的。当井号 # 后面的路径发生变化时，浏览器并不会重新发起请求，而是会触发 `onhashchange` 事件。

例如：https://vadmire.top/#/login

特点：

-   1. Hash 变化会出现页面跳转即浏览器的前进和后退。
-   2. Hash 改变的是 # 后面的路由不会刷新页面，所有的更新操作是由 JavaScript 来实现的，并不会向服务器发送 HTTP 请求去获取对应路径页面。
-   3. Hash 通过 `window.onhashchange` 的方式，来监听 Hash 的改变，借此实现无刷新跳转的功能

### History 模式

`History API` 是 HTML5 提供的新特性，允许开发者**直接更改前端路由**，即更新浏览器 URL 地址而不会**重新发起请求**。总结一句话：页面内容没变，地址栏的地址改变了

当我们使用 `History` 模式将前端项目部署上线后，在我们通过 `index.html` 去访问单页面应用某个路径下的内容，正常的路由跳转是没有问题的。**但是我们重新刷新页面的时候就会出现 404 的情况**

原因在于：重新刷新页面后浏览器会重新发送一次 HTTP 请求，去请求对应路径下的页面。但是服务器其实是没有这个页面的所以会报 404 的情况。这个时候我们就需要 **通过服务端来允许访问如何路径下的页面重定向到** `index.html` 上

### 总结

针对不同的应用场景我们可以选择不同模式

-   如果是 `B端` 系统更加推荐 Hash 模式，相对简单容易
-   如果是 `C端` 系统对外观有一定要求就可以考虑选择 `History` 模式但是需要 **服务端支持**

## 15. Key 的作用

Key 的作用是用于优化的 `patch` 性能的，更高效的更新虚拟 DOM

实际开发使用中在渲染一组列表是 key 是必须设置的，而且必须是唯一标识，应该避免使用数组索引作为 Key，这可能导致一些隐藏的 Bug

Vue 在使用相同标签元素过渡切换时，也会使用 Key 属性，其目的是为了让 Vue 可以区分它们，否则 Vue 只会替换其内部属性而不会触发过渡效果

## 16. Vue 首次实例创建和挂载发生了什么

`createApp()` 会创建一个 App 实例，内部通过 `const app = ensureRenderer().createApp(...args)` 来进行实例的创建。内部最终是执行了一个函数 `createAppApi()` 来创建实例的。
方法会返回一个函数就叫做 `createApp`。内部会创建一个对象，最终返回这个对象，而这个对象就是 App 实例。

整个 App 实例呢配置了很多平时开发常用的 API，例如：`app.use()`、`app.mixin()`、`app.component()`、`app.directive()`、`app.mount()`、`app.provide()`

创建完实例是，会提取内部写的 `mount` 方法，并且重写 `app.mount` 方法

```ts
// 重写这块的方法主要是进行的是实例挂载前的清理工作
app.mount = (containerOrSelector: Element | ShadowRoot | string): any => {
    // 获取#app DOM Element
    const container = normalizeContainer(containerOrSelector);
    // 如果没有就不会挂载 直接 return
    if (!container) return;

    // 在挂载之前清理掉 DOM根节点里面的内容
    container.innerHTML = "";
    // 这里执行的是 App实例原有的mount方法
    const proxy = mount(container, false, container instanceof SVGElement);
    if (container instanceof Element) {
        container.removeAttribute("v-cloak");
        container.setAttribute("data-v-app", "");
    }
    return proxy;
};
```

最后执行挂载方法，主要做了两件事。1. 通过 `createVNode()` 来创建虚拟 DOM 2. 调用 `render()` 渲染方法来渲染生成的虚拟 DOM 挂载到跟页面上

```ts
mount(
  rootContainer: HostElement,
  isHydrate?: boolean,
  isSVG?: boolean
): any {
  if (!isMounted) {
    // 创建虚拟DOM
    const vnode = createVNode(
      rootComponent as ConcreteComponent,
      rootProps
    )
    if (isHydrate && hydrate) {
      hydrate(vnode as VNode<Node, Element>, rootContainer as any)
    } else {
      // 调用渲染函数 runtime-core/src/renderer.ts 1227行
      render(vnode, rootContainer, isSVG)
    }
    // 执行完 render后表示挂载完成 修改 isMounted
    isMounted = true
    return getExposeProxy(vnode.component!) || vnode.component!.proxy
  }
},
```

总结：在实例创建阶段，Vue 会将一些全局 API 定义，在实例挂载阶段创建虚拟 DOM 最后调用渲染函数将虚拟 DOM 进行渲染

## 17. Vue 项目部署到服务器后刷新出现 404 的问题

前后端分离开发模式下，前端只需要将项目打包，将打包文件扔到目标服务器即可。Vue 是单页面应用，无论有多少页面构建物都只会产出一个 `index.html` 文件

### 如果路由是 `History` 模式

`History` 模式下就会出现页面刷新出现 404 问题

**原因**：在于当我们在地址栏输入 `www.xxx.com` 地址时，首先一定会访问到服务器的目标文件的 `index.html` 这时候是不会有 404 的问题。但是如果我们在访问或者重定向到 `www.xxx.com/xx` 页面时其实就会向服务器发送一个 HTTP 请求，去请求 `/xx` 页面的文件内容，这个时候自然服务器是没有这个路径的文件资源的。所以就会报 404 问题

### 如果路由是 `Hash` 模式

`Hash` 模块是用符号 # 表示的。 如 `www.xxx.com/#/xx`

它的特点在于 `Hash` 虽然出现在 URL 中，但不会被包括在 HTTP 请求中，对服务端完全没有影响，因此改变 `Hash` 不会重新加载页面。该模式下仅 `Hash` 符号之前的内容会被包含在请求中，如 `www.xxx.com/#/xx` 只有 `www.xxx.com` 会被包含在请求中

### 解决方案

本质单页面应用就只有一个页面，路由则是通过 JS 来执行视图切换的，`History` 模式下去请求其他不存在的页面自然会报 404 问题。

所以如果你的项目配置的是 `History` 模式下，所以进行以下的配置

解决方案：就是在服务器进行配置，将任意页面都重定向到 `index.html` 文件，把路由交给前端处理

以 Nginx 为例子，只需要修改它的配置文件。添加：`try_files $uri $uri/ /index.html;` 这么一条配置即可

```ts
server {
  listen  80;
  server_name  www.xxx.com;

  location / {
    index  /data/dist/index.html;
    try_files $uri $uri/ /index.html;
  }
}
```

配置完毕后，重启 Nginx： `nginx -s reload`

为了避免这种情况，你应该在 Vue 应用里面覆盖所有的路由情况，然后在给出一个 404 页面

```ts
const router = new VueRouter({
    mode: "history",
    routes: [
        { path: "*", component: NotFoundComponent }, // 添加一条匹配404页面的路由
    ],
});
```

## 18. Vue 项目是如何解决跨域的呢

跨域的本质是**浏览器的同源策略**的一种安全手段，它是浏览器最核心也是最基本的安全功能

同源：就是指在同一个域下（协议相同、主机相同、端口相同）的情况下。非同源：则上面有一个不同都属于非同源，这个时候就会产生跨域

如何解决跨域有很多：`JSONP`、`CORS`、`Proxy`。实际开发中主要会采用 `CORS`、`Proxy` 这两种

### CORS

CORS （Cross-Origin Resource Sharing，跨域资源共享）是一个系统，它由一系列传输的 HTTP 头组成，这些 HTTP 头决定浏览器是否阻止前端 JavaScript 代码获取跨域请求的响应

CORS 实现起来非常方便，只需要增加一些 HTTP 头，让服务器能声明允许的访问来源。一般都是后端配置 CORS，就可以实现跨域资源共享

`Koa` 服务框架为例：

```ts
app.use(async (ctx, next) => {
    ctx.set("Access-Control-Allow-Origin", "*");
    ctx.set(
        "Access-Control-Allow-Headers",
        "Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild"
    );
    ctx.set("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, OPTIONS");
    if (ctx.method == "OPTIONS") {
        ctx.body = 200;
    } else {
        await next();
    }
});
```

### Proxy

代理（Proxy）也称网络代理，是一种特殊的网络服务，允许一个（一般为客户端）通过这个服务与另一个网络终端（一般为服务器）进行非直接的连接。一些网关、路由器等网络设备具备网络代理功能。一般认为代理服务有利于保
障网络终端的隐私或安全，防止攻击

**方案一**：平时开发中如果后台没有配置去 CORS，一般会通过脚手架来配置本地代理服务器，通过该服务器转发请求到后台服务，得到结果返回给前端。但是本地代理只是在开发中有效果，最终发布上线时如果 Web 应用和接口服务器不在一起仍会跨域

以 `vue-cli` 脚手架为例

```js
module.exports = {
    devServer: {
        host: "127.0.0.1",
        port: 8084,
        open: true, // vue项目启动时自动打开浏览器
        proxy: {
            "/api": {
                // '/api'是代理标识，用于告诉node，url前面是/api的就是使用代理的
                target: "http://xxx.xxx.xx.xx:8080", //目标地址，一般是指后台服务器地址
                changeOrigin: true, //是否跨域
                pathRewrite: {
                    // pathRewrite 的作用是把实际Request Url中的'/api'用""代替
                    "^/api": "",
                },
            },
        },
    },
};
```

通过 axios 发送请求中，配置请求的根路径：`axios.defaults.baseURL = '/api'`

**方案二**：通过配置 `Nginx` 实现反向代理

## 19. 自定义指令是什么？应用场景有哪些？

在 `Vue` 中提供了一套为数据驱动视图更为方便的操作，这些操作被称为指令系统

不同的指令可以完成或实现不同的功能，除了核心功能默认内置的指令 (v-model 和 v-show)，Vue 也允许注册自定义指令

### 如何实现自定义指令

全局注册主要是通过 `Vue.directive` 方法进行注册。第一个参数是指令名称，第二个参数可以是对象，也可以是一个指令函数

```ts
// 注册一个全局自定义指令 `v-focus`
Vue.directive("focus", {
    // 当被绑定的元素插入到 DOM 中时……
    inserted: function (el) {
        // 聚焦元素
        el.focus(); // 页面加载完成之后自动让输入框获取到焦点的小功能
    },
});
```

存在如下钩子函数：

-   `bind`：只调用一次，指令第一次绑定到元素时调用。在这里可以进行一次性的初始化设置
-   `inserted`：被绑定元素插入父节点时调用 (仅保证父节点存在，但不一定已被插入文档中)
-   `update`：所在组件的 VNode 更新时调用，但是可能发生在其子 VNode 更新之前。指令的值可能发生了改变，也可能没有。但是你可以通过比较更新前后的值来忽略不必要的模板更新
-   `componentUpdated`：指令所在组件的 VNode 及其子 VNode 全部更新后调用
-   `unbind`：只调用一次，指令与元素解绑时调用

### 应用场景

-   一键 Copy 功能
-   权限按钮
-   防止表单重复提交

## 20. KeepAlive 缓存组件

KeepAlive 组件是 Vue 官方提供的一个内置组件，在开发过程中使用 KeepAlive 包裹动态组件 Component 时，会将不活动的组件实例缓存起来，不会去销毁它们。这样在进行组件切换过程中会将状态保留在内存中，防止反复创建组件，可以保证组件的活性。

结合 `include` 和 `exclude` 可以明确指定缓存哪些组件或排除缓存指定组件

```vue
<template>
    <keep-alive>
        <component :is="view"></component>
    </keep-alive>
</template>
```

```vue
<!-- 结合 VueRouter -->
<template>
    <router-view v-slot="{ Component }">
        <keep-alive>
            <component :is="Component"></component>
        </keep-alive>
    </router-view>
</template>
```

缓存后如果要获取数据，解决方案有两种：

1. 通过 `beforeRouteEnter` 函数，在每次进入路由前做具体操作
2. 通过 `actived` 钩子函数，在 KeepAlive 缓存组件被激活的时候，都会执行 `actived` 钩子函数

## 21、Vue2 和 Vue3 都有哪些区别？

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

## 22、vue 父子组件的通信方式

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

## 23、vue3 有了解过吗？能说说跟 vue2 的区别吗？

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

## 24、当我们点击按钮的时候动态给 data 增加的成员是否是响应式数据，如果不是的话，如何把新增成员设置成响应式数据，它的内部原理是什么。

```js
let vm = new Vue({
 el: '#el'
 data: {
  o: 'object',
  dog: {}
 },
 method: {
  clickHandler () {
   // 该 name 属性是否是响应式的
   this.dog.name = 'Trump'
  }
 }
})
```

答：动态给 data 增加的成员不是响应式数据。  
因为`data`中的成员是在创建`Vue`对象的时候，通过`new Observer`将其设置为响应式数据的。内部利用`Object.defineProperty()`方法监听数据的变化。当`Vue`实例化完成后，再添加一个成员，此时仅仅是给`vm`上增加了一个对象属性，并不是响应式数据。

`Vue`官方给出的解决方案：  
对于已经创建的实例，`Vue`不允许动态添加根级别的响应式属性。但是可以使用`Vue.set(object, propertyName, value)`方法给已经定义过的对象添加响应式属性。在组件中还可以使用`vm.$set`实例方法。

`Vue.set`内部原理的源码位置是：`vue/src/core/observer/index.js`

```js
export function set (target: Array<any> | Object, key: any, val: any): any {
  ...
  // 判断当前target是不是数组，并且key的值是有效的数组索引
  // 这块代码意思是在修改数组时调用set方法时让我们能够触发响应的代码
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    // 类似$vm.set(vm.$data.arr, 0, 3)
    // 修改数组的长度, 避免索引>数组长度导致splcie()执行有误
    target.length = Math.max(target.length, key)
    // 利用数组的splice变异方法触发响应式
    target.splice(key, 1, val)
    return val
  }
  // target为对象, key在target或者target.prototype上。
  // 并且key不是Object原型上的属性
  // 说明这个key本来就在对象上面已经定义过了的，直接修改值就可以了，可以自动触发响应
  if (key in target && !(key in Object.prototype)) {
    target[key] = val
    return val
  }
  // 以上都不成立, 即开始给target创建一个全新的属性
  // vue给响应式对象都加了一个__ob__属性，如果一个对象有这个__ob__属性，
  // 那么就说明这个对象是响应式对象，我们修改对象已有属性的时候就会触发页面渲染
  // 获取Observer实例
  const ob = (target: any).__ob__
  // Vue 实例对象拥有 _isVue 属性, 即不允许给 Vue 实例对象添加属性
  // 也不允许Vue.set/$set 函数为根数据对象(vm.$data)添加属性
  // 即 当前的target对象是vue实例对象或者是根数据对象，那么就会抛出错误警告
  if (target._isVue || (ob && ob.vmCount)) {
    process.env.NODE_ENV !== 'production' && warn(
      'Avoid adding reactive properties to a Vue instance or its root $data ' +
      'at runtime - declare it upfront in the data option.'
    )
    return val
  }
  // target本身就不是响应式数据, 不需要响应，那么直接赋值返回即可
  if (!ob) {
    target[key] = val
    return val
  }
  // 进行响应式处理
  // 给新加的属性添加依赖，以后再直接修改这个新的属性的时候就会触发页面渲染
  defineReactive(ob.value, key, val)
  // 触发当前的依赖（这里的依赖依然可以理解成渲染函数），所以页面就会进行重新渲染
  ob.dep.notify()
  return val
}
```

## 25、请简述 Diff 算法的执行过程

`Diff`算法是一种通过同层的树节点进行比较的高效算法，避免了对树进行逐层搜索遍历。  
执行流程：  
1、执行`patch`函数传入新旧两个节点如：`patch(oldVnode, vnode)`  
2、判断两个新旧节点`oldVnode, vnode`是否相同。即将新旧节点`oldVnode, vnode`转化为`VNode`对象，判断节点的
`vnode.key`与`vnode.key`是否都相同。  
3、若两个节点不相同，在父节点插入新节点`vnode`，然后删除老节点`oldVnode`  
4、如果两个节点的`vnode.key`与`vnode.key`相同，就需要对比两个节点的文本、子节点（数组）是否相同，找出差异点。  
5、如果新老节点的文本不相同，只需要更新文本内容，同时判断老节点的子节点数组不为空的，删除老节点的所有子节点  
6、如果只有新节点有子节点数组，重置老节点的文本为空，添加新节点数组。  
7、如果只有老节点有子节点数组，删除所有子节点数组  
8、如果新老节点都有子节点数组，且子节点不相同（`vnode.key`与`vnode.key`都相同，但子节点数组不同）--复杂的逻辑  
9、这一步会发现是新老子节点数组对比，那么必定是一个循环遍历。以下是简单的伪代码实现流程如下，代码注释可能会帮助理解流程：  

```js
function init () {
    function updateChildren (oldCh, newCh) {
        // 以下参数有助于帮助理解遍历是下标的移动过程
        let oldStartIdx = 0;
        let newStartIdx = 0;
        let oldEndIdx = oldCh.length - 1;
        let oldStartVnode = oldCh[0];
        let oldEndVnode = oldCh[oldEndIdx];
        let newEndIdx = newCh.length - 1;
        let newStartVnode = newCh[0];
        let newEndVnode = newCh[newEndIdx];
        let oldKeyToIdx: KeyToIndexMap | undefined;
        let idxInOld: number;
        let elmToMove: VNode;
        let before: any;

        //同级别节点比较
        while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
            if (oldStartVnode == null) {
                oldStartVnode = oldCh[++oldStartIdx]; // Vnode might have been moved left
            } else if (oldEndVnode == null) {
                oldEndVnode = oldCh[--oldEndIdx];
            } else if (newStartVnode == null) {
                newStartVnode = newCh[++newStartIdx];
            } else if (newEndVnode == null) {
                newEndVnode = newCh[--newEndIdx];
            } else if (sameVnode(oldStartVnode, newStartVnode)) {
                // 同级节点且新、旧开始位置相同 比较好理解
                patchVnode(oldStartVnode, newStartVnode);
                oldStartVnode = oldCh[++oldStartIdx];
                newStartVnode = newCh[++newStartIdx];
            } else if (sameVnode(oldEndVnode, newEndVnode)) {
                // 同级节点且新、旧开始位置相同 比较好理解
                patchVnode(oldEndVnode, newEndVnode);
                oldEndVnode = oldCh[--oldEndIdx];
                newEndVnode = newCh[--newEndIdx];
            } else if (sameVnode(oldStartVnode, newEndVnode)) {
                // 同级节点且新、旧开始位置不同，如果相同交互位置
                // Vnode moved right
                patchVnode(oldStartVnode, newEndVnode);
                api.insertBefore();
                oldStartVnode = oldCh[++oldStartIdx];
                newEndVnode = newCh[--newEndIdx];
            } else if (sameVnode(oldEndVnode, newStartVnode)) {
                / 同级节点且新、旧开始位置不同，如果相同交互位置
                // Vnode moved left
                patchVnode(oldEndVnode, newStartVnode);
                api.insertBefore();
                oldEndVnode = oldCh[--oldEndIdx];
                newStartVnode = newCh[++newStartIdx];
            } else {
                // createKeyToOldIdx 获取所有老节点子节点数组的key  这可能是最麻烦的对比的位置
                if (oldKeyToIdx === undefined) {
                    oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx);
                }
                // 最后的理论场景还是将新节点插入到老节点的父元素
                // 找到老节点子节点数组key
                // 找到新开始节点位置的key 不为空 然后插入父元素
                idxInOld = oldKeyToIdx[newStartVnode.key as string];
                if (isUndef(idxInOld)) {
                    // New element
                    api.insertBefore();
                } else {
                    elmToMove = oldCh[idxInOld];
                    if (elmToMove.sel !== newStartVnode.sel) {
                        api.insertBefore();
                    } else {
                        patchVnode(elmToMove, newStartVnode);
                        oldCh[idxInOld] = undefined as any;
                        api.insertBefore();
                    }
                }
                newStartVnode = newCh[++newStartIdx];
            }
        }
        //循环结束的收尾工作
        if (oldStartIdx <= oldEndIdx || newStartIdx <= newEndIdx) {
            if (oldStartIdx > oldEndIdx) {
                before = newCh[newEndIdx + 1] == null ? null : newCh[newEndIdx + 1].elm;
                addVnodes();
            } else {
                removeVnodes(parentElm, oldCh, oldStartIdx, oldEndIdx);
            }
        }
    }

    function patchVnode (oldVnode, vnode) {
        if (oldVnode === vnode) return;
        if (isUndef(vnode.text)) {
            if (isDef(oldCh) && isDef(ch)) {
                // 新旧节点的子节点存在且不相同是，逐个对比子节点，如要遍历
                if (oldCh !== ch) updateChildren(elm, oldCh, ch, insertedVnodeQueue);
            } else if (isDef(ch)) {
                // 只有新节点的子节点数组有值，添加所有子节点
                // 重置文本参数
                if (isDef(oldVnode.text)) api.setTextContent(elm, "");
                addVnodes();
            } else if (isDef(oldCh)) {
                // 只有老节点的子节点数组有值 删除所有子节点
                removeVnodes();
            } else if (isDef(oldVnode.text)) {
                // 只有老节点的文本有值 重置参数
                api.setTextContent(elm, "");
            }
        } else if (oldVnode.text !== vnode.text) {
            if (isDef(oldCh)) {
                // 若老节点的子节点数组不为空 删除
                removeVnodes()
            }
            api.setTextContent(elm, vnode.text!);
        }
    }

    return patch(oldVnode, vnode) {
        if (!isVnode(oldVnode)) {
            // 初次将oldVnode转换成VNode节点
            oldVnode = emptyNodeAt(oldVnode)
        }
        // 比较两个节点是否相同 key && sel (即两个节点的标识是否相同)
        if (sameVnode(oldVnode, vnode)) {
            // 详情对比新旧两个节点参数
            patchVnode(oldVnode, vnode);
        } else {
            // 找到父元素是否存在
            // 创建新节点
            createElm(vnode);
            // 插入新节点，移除老节点
            if (parent !== null) {
                api.insertBefore(parent, vnode.elm!, api.nextSibling(elm));
                removeVnodes(parent, [oldVnode], 0, 0);
            }
        }
        return vnode
    }
}
```

梳理整个`Diff`对比流程：

## 26、模拟 VueRouter 的 hash 模式的实现，实现思路和 History 模式类似，把 URL 中的 # 后面的内容作为路由的地址，可以通过 hashchange 事件监听路由地址的变化。

`SPA(single page application)`:单一页面应用程序，只有一个完整的页面；它在加载页面时，不会加载整个页面，而是只更新某个指定的容器中内容。
单页面应用(`SPA`)的核心之一是: 更新视图而不重新请求页面;`vue-router`在实现单页面前端路由时，
提供了两种方式：`Hash`模式和`History`模式；根据`mode`参数来决定采用哪一种方式。

#### Hash 模式与 History 模式

-   `hash` 模式是基于锚点， 以及`onhashchange` 事件
-   `history` 模式是基于 `HTML5` 中的 `History API`
    `history.pushState()` `IE10` 以后才支持
    `history.replaceState()` \
-   `History` 需要服务器的支持,单页应用中，如果刷新页面，会向服务器发起请求，而服务器不存在这样的地址就会返回找不到该页面从而出现`404`, 在服务端应该除了静态资源外都返回单页应用的 `index.html`

#### 类图构造

#### 属性

-   `options`：记录构造函数中传入对象
-   `data`：一个响应式对象（`obeerver`实现），该对象中有一个属性`current`（记录当前路由地址，当路径改变的时候通过当前路径在 `routerMap` 对象中找到对应的组件，渲染 `router-view`）
-   `routeMap`：一个对象，记录路由地址和组件间的对应关系，路由规则会解析到这个对象中

#### 方法

-   `install`：静态方法，用来实现`vue`的插件机制并调用`init`方法
-   `constructor`：初始化上述属性
-   `init`：调用`createRouteMap`、`initComponents`、`initCurrent`、`initEvents`四个方法，目的是把不同使用途径的代码分割到不同的方法中实现
-   `createRouteMap`：把构造函数中传入的规则转化为键值对的模式存储到`routeMap`中，在`router-view`组件中会使用到`routeMap`
-   `initComponents`：用来创建`route-link`和`route-view`这两个组件
-   `initCurrent`：初始化不同模式下的当前路由地址（设置`this.data.current`属性）
-   `initEvents`：注册 `hashchange`、`popstate`事件。`hashchange`：监听 hash 改变,`popstate`: 监听浏览器的的历史记录 当历史记录条目更改时，将触发 popstate 事件

#### 代码实现

项目代码路径：`part3\fed-e-task-03-01\code\01-vue-router-code`

## 27、在模拟 Vue.js 响应式源码的基础上实现 v-html 指令，以及 v-on 指令。

-   `v-html`指令与`v-text`指令相似，将 `textContent` 更改为 `innerHTML`
-   `v-on` 指令在 `compiler.js`文件 将`/^@|^v-on:/` 修改为空,只保留后面的事件再处理相应指令

项目代码路径：`part3\fed-e-task-03-01\code\02-vue-reactive-code`

## 28、参考 Snabbdom 提供的电影列表的示例，利用 Snabbdom 实现类似的效果，如图：

项目代码路径：`part3\fed-e-task-03-01\code\03-snabbdom-demo`

## 29、Vue 3.0 性能提升主要是通过哪几方面体现的？

-   响应式系统升级：`Vue2.0`是在数据初始化之后，遍历对象的属性通过`Object.defineProperty`监听属性的变化。`vue3.0`采用`Proxy`代理对象拦截对象的访问，可以监听动态新增的属性、删除的属性、数组的索引和 length 属性。
-   编译优化：`Vue2.0`中渲染的最小单位是组件，会标记静态根节点，优化`diff`的过程，但静态节点还要通过`diff`。`Vue2.0`中会标记所有的静态节点，`diff`的过程只需要对比动态节点内容。
    -   `Fragments`(片段)：组件内支持多个同级的根标签
    -   静态提升：标签中仅仅是纯文本的节点,会提升到`render`函数外，再次`render`无须再次创建
    -   Patch flag: 标记不同类型的节点（如动态文本节点、有动态属性的节点），优化`diff`的过程
    -   缓存事件处理函数、组件按需动态导入
-   源码体积优化
    -   `Vue3.0`中移除了一些不常用`API`,如：`inline-template`、`filter`
    -   `Tree-shaking`(依赖`ESmodule`的模块化规范)

## 30、Vue 3.0 所采用的 Composition Api 与 Vue 2.x 使用的 Options Api 有什么区别？

-   `Vue2.0`中的`Options API`包含描述组件选项(`data`、`methods`等)的对象，在描述复杂组件时，同一功能的逻辑被拆分到不同的选项中，随着版本的迭代难以维护
-   `Vue3.0`中的`Compositon API`新增一组基于函数的`API`，可以更加灵活的组织同一个功能的代码片段
-   `Vue3.0`中的`setup(props, context){}`在实例被初始化之前执行，故在`setup`中的`this`上没有任何东西

## 31、Proxy 相对于 Object.defineProperty 有哪些优点？

-   `Proxy`直接监听对象而非属性,有多达`13`种拦截方法,如 `apply`、`ownKeys`、`has` 等等,这是`Object.defineProperty`不具备的
-   多层属性嵌套，在访问属性过程中处理下一级属性
-   默认监听动态添加的属性
-   默认监听属性的删除操作
-   默认监听数组索引和`length`属性



## 32、Vue 3.0 在编译方面有哪些优化？

-   `Vue2.0`中渲染的最小单位是组件，会标记静态根节点，优化`diff`的过程，但静态节点还要通过`diff`。`Vue2.0`中会标记所有的静态节点，`diff`的过程只需要对比动态节点内容。
-   `Fragments`(片段)：组件内支持多个同级的根标签
-   静态提升：标签中仅仅是纯文本的节点,会提升到`render`函数外，再次`render`无须再次创建
-   Patch flag: 标记不同类型的节点（如动态文本节点、有动态属性的节点），优化`diff`的过程
-   缓存事件处理函数、组件按需动态导入

## 33、Vue.js 3.0 响应式系统的实现原理？

-   `Vue3.0`使用`Proxy`对象重写响应式系统
-   `Proxy`代理拦截: - `reactive`函数执行，会将传入的`target`对象通过`Proxy`包装，拦截它的`get`，`set`等，并将代理的`target`缓存到`targetMap`，`targetMap.set(target, new Map())`。
    代理的`get`的时候会调用一个`track`函数，而`set`会调用一个`triger`函数。分别对应依赖收集和触发更新。

```js
export function reactive (target) {
  if (!isObject(target)) return target

  const handler = {
    get (target, key, receiver) {
      // 收集依赖
      track(target, key)
      const result = Reflect.get(target, key, receiver)
      return convert(result)
    },
    set (target, key, value, receiver) {
      const oldValue = Reflect.get(target, key, receiver)
      let result = true
      if (oldValue !== value) {
        result = Reflect.set(target, key, value, receiver)
        // 触发更新
        trigger(target, key)
      }
      return result
    },
    deleteProperty (target, key) {
      const hadKey = hasOwn(target, key)
      const result = Reflect.deleteProperty(target, key)
      if (hadKey && result) {
        // 触发更新
        trigger(target, key)
      }
      return result
    }
  }

  return new Proxy(target, handler)
```

-   依赖收集和触发更新:
    -   组件在`render`阶段，视图会读取数据对象上的值进行渲染，此时便触发了`Proxy`的`get`，由此触发对应的`track`函数，记录下了对应的`ReactiveEffect`，也就是依赖收集。
    -   `ReactiveEffect`其实就可以看作是组件的更新（`mount`是特殊的`update`），数据的变更触发`trigger`，`trigger`遍历调用`track`收集的对应的数据的`ReactiveEffect`，也就是对应有关联的组件的更新。`trigger`触发的组件的更新，在`render`阶段又触发了新一轮的`track`依赖收集，更新依赖
