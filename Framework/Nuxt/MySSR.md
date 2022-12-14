# 搭建 SSR

## 一、Vue SSR 介绍

1、`Vue SSR`是官方提供的一个服务端渲染（同构应用）解决方案，使用它基于原有的`Vue.js`技术栈，可以构建同构应用。  
2、通常服务器渲染的`Vue.js`应用程序被认为是“通用”的，因为应用程序的大部分代码都可以在服务器和客户端上运行。

## 二、使用场景

在使用服务器渲染之前，应该从两个方面考虑它是否真的适合？

#### 1、技术层面

-   追求更快的首屏渲染速度
-   更好的 SEO

#### 2、业务层面

-   不适合管理系统
-   适合门户资讯类网站，例如企业官网、知乎、简书
-   适合移动网站

## 三、如何实现 Vue SSR

1、基于`Vue SSR`官方提供的解决方案

-   此方案具备直接控制应用程序的结构，更加深入底层，更加灵活。
-   在使用中`Vue SSR`有更深的理解
-   需要熟悉`Vue.js`,并具备有 `Node.js` 和`webpack` 的相当不错的应用经验。

2、Nuxt.js 开发框架

-   提供开箱即用的开发体验
-   基于`vue`技术栈上，抽象许多模板，并提供一些额外的功能，如静态站点生成
-   通过 `Nuxt.js` 可以快速的使用 `Vue SSR` 构建同构应用

## 四、Vue SSR 的基本使用

目标：使用 `Vue SSR` 将一个 `Vue` 实例渲染为 `HTML` 字符串。
1、首先解决如何在服务端使用`Vue`的方式解析替换为字符串？

```js
// 第 1 步：创建一个 Vue 实例
const Vue = require("vue");
const app = new Vue({
    template: `{{ message }}`,
    data: { message: "Hello World" },
});

// 第 2 步：创建一个 renderer
const renderer = require("vue-server-renderer").createRenderer();

// 第 3 步：将 Vue 实例渲染为 HTML
renderer.renderToString(app, (err, html) => {
    if (err) throw err;
    console.log(html);
    // => <div data-server-rendered="true">Hello World</div
});
// 在 2.5.0+，如果没有传入回调函数，则会返回 Promise：
renderer
    .renderToString(app)
    .then((html) => {
        console.log(html);
    })
    .catch((err) => {
        console.error(err);
    });
```

2、与服务器集成(使用`Express`创建一个基本的`Web`服务,在`Web`服务中渲染`Vue`实例)

```js
const Vue = require("vue");
const server = require("express")();
const renderer = require("vue-server-renderer").createRenderer();

server.get("*", (req, res) => {
    const app = new Vue({
        data: {
            url: req.url,
        },
        template: `<div>访问的 URL 是： {{ url }}</div>`,
    });
    renderer.renderToString(app, (err, html) => {
        if (err) {
            res.status(500).end("Internal Server Error");
            return;
        }
        res.end(`
            <!DOCTYPE html>
            <html lang="en">
                <head>
                    <title>Hello</title>
                    <meta charset="UTF-8">
                </head>
                <body>${html}</body>
            </html>
        `);
    });
});
server.listen(8080);
```

3、使用外部`HTML`模板

-   在根目录新建文件`index.template.html`，其中`body`中添加注释`<!--vue-ssr-outlet-->`
-   指定不同环境下渲染的逻辑

```js
if (isProd) {
    // 生产模式，直接基于已构建好的包创建渲染器
    const serverBundle = require("./dist/vue-ssr-server-bundle.json");
    const template = fs.readFileSync("./index.template.html", "utf-8");
    const clientManifest = require("./dist/vue-ssr-client-manifest.json");
    renderer = createBundleRenderer(serverBundle, {
        template, // 指定服务端渲染的模板和指定编码
        clientManifest,
    });
} else {
    // 开发模式: 监视打包构建 -> 打包构建（客户端 + 服务端） -> 创建渲染器
    onReady = setupDevServer(
        server,
        (serverBundle, template, clientManifest) => {
            renderer = createBundleRenderer(serverBundle, {
                template, // 指定服务端渲染的模板和指定编码
                clientManifest,
            });
        }
    );
}
```

4、在模板中使用外部数据(如：`title`,`meta`,`url`)

```js
const html = await renderer.renderToString({
    title: "渲染示例",
    meta: `<meta name="description" content="渲染示例">`,
    url: req.url,
});
```

## 五、Vue SSR 构建配置

1、构建基本流程如图：
![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/49511d09a09a44ff9a4770d0d8a55efa~tplv-k3u1fbpfcp-watermark.image?)
2、源码结构

-   通常 Vue 应用程序都是采用`webpack`和`vue-loader`构建的，由于许多特定的功能不能直接在`Node.js`中运行（如 `css-loader`导入`css`）
-   尽管`Node.js`最近版本已经完全支持`ES2015`特性，但客户端代码需要转译以适应老版浏览器。
-   对于客户端应用程序和服务器应用程序，我们都要使用 `webpack` 打包。服务器需要 「服务器 `bundle`」然后用于服务器端渲染(`SSR`)，而「客户端 `bundle`」会发送给浏览器，用于混合静态标记。
-   基本的项目结构可以如下：
    ![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d4fb35d6f20a45e5b9f9e90497472b7a~tplv-k3u1fbpfcp-watermark.image?)
-   `app.js` 是我们应用程序的「通用 `entry`」。在纯客户端应用程序中，我们将在此文件中创建根`Vue`实 例，并直接挂载到`DOM`。但是，对于服务器端渲染(`SSR`)，责任转移到纯客户端`entry`文件。
-   `entry-client.js`是客户端入口，作用是创建应用程序，并将其挂载到`DOM`上。
-   `entry-server.js`是服务器入口，导出应用程序实例，并在每次渲染中重复调用此函数。
-   `server.js`是通用应用`Web`服务启动脚本。
-   使用到的主要生产依赖
    ![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/2226c2b533764ae5992cf607bdc5c229~tplv-k3u1fbpfcp-watermark.image?)
-   使用到的主要开发依赖
    ![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/bf374ba11bfb475fb7f696dc27481405~tplv-k3u1fbpfcp-watermark.image?)
-   配置文件及打包命令,区分 3 个文件
    ![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/54b4a317e2e04153b5111c63a57ac755~tplv-k3u1fbpfcp-watermark.image?)
    3、解析渲染流程  
    服务端渲染：
-   `renderer.renderToString` 渲染了什么？
-   `renderer` 是如何拿到 `entry-server` 模块的？ `createBundleRenderer` 中的 `serverBundle`
-   `server Bundle` 是 `Vue SSR` 构建的一个特殊的 `JSON` 文件
    -   `entry`：入口
    -   `files`：所有构建结果资源列表
    -   `maps`：源代码 `source map` 信息
-   `server-bundle.js` 就是通过 `server.entry.js` 构建出来的结果文件
-   最终把渲染结果注入到模板中

客户端渲染：`vue-ssr-client-manifest.json`

-   `publicPath`：访问静态资源的根相对路径，与 `webpack` 配置中的`publicPath` 一致
-   `all`：打包后的所有静态资源文件路径
-   `initial`：页面初始化时需要加载的文件，会在页面加载时配置到`preload` 中
-   `async`：页面跳转时需要加载的文件，会在页面加载时配置到 `prefetch` 中
-   `modules`：项目的各个模块包含的文件的序号，对应 `all` 中文件的顺序；`moduleIdentifier`和`all`数组中文件的映射关系（`modules`对象是我们查找文件引用的重要数据）

4、构建开发模式  
至此实现了同构应用的基本功能，但如何处理同构应用中的路由? 如何在服务端渲染中进行数据预取等功能？但首先解决打包问题:

-   写完代码，自动构建。
-   自动重启 `Web` 服务
-   自动刷新页面内容
-   服务端配置(`server.js`)：服务端入口，仅运行于服务端。

```js
// 生产模式，直接基于已构建好的包创建渲染器
if (isProd) {
    const template = fs.readFileSync(templatePath, "utf-8");
    const serverBundle = require("./dist/vue-ssr-server-bundle.json");
    const clientManifest = require("./dist/vue-ssr-client-manifest.json");
    renderer = createBundleRenderer(serverBundle, {
        runInNewContext: false, // 推荐
        template, // （可选）页面模板
        clientManifest, // （可选）客户端构建 manifest
    });
} else {
    // 开发模式: 监视打包构建 -> 打包构建（客户端 + 服务端） -> 创建渲染器
    onReady = setupDevServer(
        server,
        (serverBundle, template, clientManifest) => {
            renderer = createBundleRenderer(serverBundle, {
                template, // 指定服务端渲染的模板和指定编码
                clientManifest,
            });
        }
    );
}
```

-   封装处理模块(`build/setup-dev-server.js`)

```js
module.exports = function (app, templatePath, cb) {
    let ready;
    const onReady = new Promise((r) => (ready = r));
    let serverBundle;
    let clientManifest;
    let template;
    const update = () => {
        if (serverBundle && clientManifest) {
            // 构建完毕，通知 server 可以 render 渲染了
            ready();
            // 更新 server 中的 Renderer
            cb(serverBundle, {
                template,
                clientManifest,
            });
        }
    };
    // 监视构建 template 模板更新，调用 update 更新 Renderer
    // 监视构建 serverBundle 打包服务端更新，调用 update 更新 Renderer
    // 监视构建 clientManifest 打包客户端更新，调用 update 更新 Renderer
    return onReady;
};
```

-   热更新：需要使用到`webpack-hot-middleware`工具包。中间件将自身安装为`webpack`插件，并侦听编译器事件。每个连接的客户端都有一个`Server Sent Events`连接，服务器将在编译器事件上向连接的客户端发布通知。当客户端收到消息时，它将检查本地代码是否为最新。如果不是最新版本，它将触发`webpack`热模块重新加载。

5、服务器上的数据响应

-   在纯客户端应用程序 (`client-only app`) 中，每个用户会在他们各自的浏览器中使用新的应用程序实例。 对于服务器端渲染，我们也希望如此：**每个请求应该都是全新的、独立的应用程序实例，以便不会有交叉请求造成的状态污染** (`cross-request state pollution`)。
-   因为实际的渲染过程需要确定性，所以我们也将在服务器上“预取”数据 (`"pre-fetching" data`) - 这意味着 在我们开始渲染时，我们的应用程序就已经解析完成其状态。也就是说，将数据进行响应式的过程在服 务器上是多余的，所以默认情况下禁用。禁用响应式数据，还可以避免将「数据」转换为「响应式对 象」的性能开销。
-   6、组件生命周期钩子函数
-   由于没有动态更新，所有的生命周期钩子函数中，只有`beforeCreate`和`created`会在服务器端渲染 (`SSR`) 过程中被调用。这就是说任何其他生命周期钩子函数中的代码（例如`beforeMount 或`mounted`），只会在客户端执行。
-   此外还需要注意的是，你应该避免在`beforeCreate`和`created`生命周期时产生全局副作用的代码， 例如在其中使用`setInterval`设置`timer`。在纯客户端 (`client-side only`) 的代码中，我们可以设置一 个`timer`，然后在`beforeDestroy`或`destroyed`生命周期时将其销毁。但是，由于在`SSR`期间并不 会调用销毁钩子函数，所以`timer`将永远保留下来。为了避免这种情况，请将副作用代码移动到`beforeMount`或`mounted`生命周期中。

7、访问特定平台(Platform-Specific) API

-   **通用代码不可接受特定平台的 API**，因此如果你的代码中，直接使用了像`window`或`document`，这种 仅浏览器可用的全局变量，则会在`Node.js`中执行时抛出错误，反之也是如此
-   对于共享于服务器和客户端，但用于不同平台`API`的任务(`task`)，建议将平台特定实现包含在通用`API`中，或者使用为你执行此操作的`library`。例如，`axios` 是一个`HTTP`客户端，可以向服务器和客户端都 暴露相同的 `API`。
-   请注意，考虑到如果第三方`library`不是以上面的通用用法编写，则将其集成到服务器渲染的应用程序中，可能会很棘手。你可能要通过模拟 (`mock`) 一些全局变量来使其正常运行，但这只是`hack`的做 法，并且可能会干扰到其他`library`的环境检测代码。

## 六、Vue SSR 路由处理

在处理通用应用中的路由的解决方案还是`vue-router`,整体使用方式和纯客户端的使用方式基本一致，只 需要在少许的位置做一些配置就可以了。  
1、`router/index.js`配置

```js
import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/pages/Home";

Vue.use(VueRouter);

export const createRouter = () => {
    const router = new VueRouter({
        mode: "history", // 同构应用不能使用 hash 路由，应该使用 history 模式，兼容前后端
        routes: [
            {
                path: "/",
                name: "home",
                component: Home,
            },
            {
                path: "/about",
                name: "about",
                component: () => import("@/pages/About"),
            },
            {
                path: "*",
                name: "error404",
                component: () => import("@/pages/404"),
            },
        ],
    });

    return router;
};
```

当你首次访问页面的时候，它是通过服务端渲染出来的，服务端渲染 拥有了更快的渲染速度以及更好的`SEO`，当服务端渲染的内容来到客户端以后被客户端`Vue`结合`Vue Router`激活，摇身一变成为了一个客户端`SPA`应用，之后的页面导航也不需要重新刷新整个页面。这 样我们的网站就既拥有了更好的渲染速度，也拥有了更好的用户体验。

2、页面的头部中的带有`preload`和`prefetch`的`link`标签区别

-   我们期望客户端`JavaScript`脚本尽快加载尽早的接管服务端渲染的内容，让其拥有动态交互能力，但是 如果你把 `script`标签放到这里的话，浏览器会去下载它，然后执行里面的代码，这个过程会阻塞页面的 渲染。
-   因此真正的`script`标签是在页面的底部的。而这里只是**告诉浏览器可以去预加载这个资源**。但是不要执行里面的代码，也不要影响网页的正常渲染。直到遇到真正的`script`标签加载该资源的时候才会去 执行里面的代码，这个时候可能已经预加载好了，直接使用就可以了，如果没有加载好，也不会造成重复加载，所以不用担心这个问题。
-   `prefetch` 资源是加载下一个页面可能用到的资源，**浏览器会在空闲的时候对其进行加载**，所以它并不一定会把资源加载出来，而`preload`一定会预加载。所以你可以看到当我们去访问`about`页面的时 候，它的资源是通过 `prefetch`预取过来的，提高了客户端页面导航的响应速度。

## 七、Vue SSR 数据处理

1、服务端渲染中的数据预取和状态管理
需求：我们想要通过服务端渲染的方式来把异步接口数据渲染到页面中

-   在组件中添加生命周期钩子，`beforeCreate` 和 `created`，服务端渲染仅支持这两个钩子函数的调用
-   `axios` 既可以运行在客户端也可以运行在服务端，因为它对不同的环境做了适配处理，在客户端是基于浏览器的 `XMLHttpRequest` 请求对象，在服务端是基于`Node.js`中的`http`模块实现。

```js
// 服务端渲染
// 只支持 beforeCreate 和 created
// 不会等待 beforeCreate 和 created 中的异步操作
// 不支持响应式数据
// async created() {
//     const { data } = await axios({
//         method: 'GET',
//         url: 'https://cnodejs.org/api/v1/topics'
//     })
//     this.posts = data.data
// }
```

-   通过官方文档我们可以看到，它的核心思路就是把在服务端渲染期间获取的数据存储到`Vuex`容器中，然后把容器中的数据同步到客户端，这样就保持了前后端渲染的数据状态同步，避免了客户端重新渲染的问题。
-   在组件中使用`serverPrefetch`触发容器中的`action`

```js
export default {
    name: "PostList",
    metaInfo: {
        title: "Posts",
    },
    data() {
        return {
            // posts: [],
        };
    },
    computed: {
        ...mapState(["posts"]),
    },
    // Vue SSR 特殊为服务端渲染提供的一个生命周期钩子函数
    serverPrefetch() {
        // 发起 action 返回 Promise
        return this.getPosts();
    },
    methods: {
        ...mapActions(["getPosts"]),
    },
};
```

2、服务端和客户端的容器数据同步，从而避免 两个端状态不一致导致客户端重新渲染的问题。

-   将容器中的 state 转为 JSON 格式字符串
-   生成代码： `window.__INITIAL__STATE = 容器状态` 语句插入模板页面中
-   客户端通过` window.__INITIAL__STATE 获取该数据`

```js
// entry-server.js 服务端
context.rendered = () => {
    // Renderer 会把 context.state 数据对象内联到页面模板中
    // 最终发送给客户端的页面中会包含一段脚本：window.__INITIAL_STATE__ = context.state
    // 客户端就要把页面中的 window.__INITIAL_STATE__ 拿出来填充到客户端 store 容器中
    context.state = store.state;
};
```

```js
if (window.__INITIAL_STATE__) {
    store.replaceState(window.__INITIAL_STATE__);
}
```
