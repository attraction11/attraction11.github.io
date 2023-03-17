---
outline: deep
---

# Nuxt 基础

## 一、NuxtJS 基础

#### 1、[官网学习](https://nuxt.com/)

-   一个基于 Vue.js 生态的第三方开源服务端渲染应用框架
-   它可以帮我们轻松的使用 Vue.js 技术栈构建同构应用
    [备注](https://zhuanlan.zhihu.com/p/407408742)

#### 2、Nuxt.js 的异步数据--asyncData 方法

-   基本用法
    -   它会将`asyncData`返回的数据融合组件`data`方法返回数据一并给组件
    -   调用时机：服务端渲染期间和客户端路由更新之前
-   注意事项
    -   只能在页面组件中使用
    -   没有 this,因为它是在组件初始化之前被调用的

#### 3、具体实现

```js
  // 当你想要动态页面内容有利于 SEO 或者是提升首屏渲染速度的时候，就在 asyncData 中发请求拿数据
  async asyncData () {
    console.log('asyncData')
    console.log(this)
    const res = await axios({
      method: 'GET',
      url: 'http://localhost:3000/data.json'
    })
    return res.data
  },

  // 如果是非异步数据或者普通数据，则正常的初始化到 data 中即可
  data () {
    return {
      foo: 'bar'
    }
  }
```

#### 4、Nuxt.js 的异步数据--上下文对象

[官方参考](https://nuxt.com/docs/api/utils/define-nuxt-component#asyncdata)

```js
  async asyncData (context) {
    console.log(context)
    const { data } = await axios({
      method: 'GET',
      url: 'http://localhost:3000/data.json'
    })
    const id = Number.parseInt(context.params.id)
    return {
      article: data.posts.find(item => item.id === id)
    }
  }
```

## 二、NuxtJS 实战

#### 1、用户的登录状态保存

-   `vuex`的`state`中定义`user`保存当前登录用户的登录状态。为了防止刷新页面数据丢失，通过`Cookie`把数据持久化(由于`cookie`客户端和服务端都可以访问)。
-   客户端通过`Cookie.set('user', data.user)`配置`Cookie`

```js
// 仅在客户端加载 js-cookie 包
const Cookie = process.client ? require('js-cookie') : undefined;
```

-   服务端通过`cookieparser`解析请求头中的`cookie`字符串,并转为`JavaScript`对象。方法定义在`vuex`的`action`方法中。

```js
export const actions = {
    // nuxtServerInit 是一个特殊的 action 方法
    // 这个 action 会在服务端渲染期间自动调用
    // 作用：初始化容器数据，传递数据给客户端使用
    nuxtServerInit({ commit }, { req }) {
        let user = null;

        // 如果请求头中有 Cookie
        if (req.headers.cookie) {
            // 使用 cookieparser 把 cookie 字符串转为 JavaScript 对象
            const parsed = cookieparser.parse(req.headers.cookie);
            try {
                user = JSON.parse(parsed.user);
            } catch (err) {
                // No valid cookie found
            }
        }

        // 提交 mutation 修改 state 状态
        commit('setUser', user);
    },
};
```

#### 2、`vuex`中`state`的定义

-   在服务端渲染期间运行都是同一个`store`实例，为了防止数据冲突，务必要把 state 定义成一个函数，返回数据对象。

```js
export const state = () => {
    return {
        // 当前登录用户的登录状态
        user: null,
    };
};
```

#### 3、`nuxtJS`中的中间件

-   项目根目录新建`middleware`文件夹，其中定义各种中间件，应用在组件中。

```js
/* 验证是否登录的中间件 */
export default function ({ store, redirect }) {
    // If the user is not authenticated
    if (!store.state.user) {
        return redirect('/login');
    }
}
```

```js
/* 在pages页面组件中使用中间件，限制登陆后才可访问 */
export default {
    middleware: 'authenticated',
    name: 'UserProfile',
};
```

#### 4、`nuxtJS`中的插件

-   项目根目录新建`plugins`文件夹，其中定义各种插件(可以作用于全局)，在运行 Vue.js 应用程序之前执行。通过插件机制获取到上下文对象（`query`、`params`、`req`、`res`、`app`、`store`...）。插件导出函数必须作为 `default`成员
-   注册各种插件。在`nuxt.config.js`文件中配置。

```js
module.exports = {
    plugins: ['~/plugins/request.js', '~/plugins/dayjs.js'],
};
```

#### 5、组件的`watchQuery`属性

-   观察查询字符串并在更改时执行组件方法（`asyncData`、`fetch`、`validate`、`layout` 等）。示例`watchQuery: ['page', 'tag', 'tab']`

#### 6、设置页面 meto 优化 SEO

-   Nuxt.js 允许你在  `nuxt.config.js`  里定义应用所需的所有默认 meta 标签，在  `head`  字段里配置就可以了。

```js
// 一个使用自定义 `viewport` 和 `谷歌字体` 的配置示例
head: {
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ],
  link: [
    { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto' }
  ]
}
```

-   个性化特定页面的`Meta`标签,在组件中配置。

```js
    // 为了避免子组件中的 meta 标签不能正确覆盖父组件中相同的标签
    // 而产生重复的现象，建议利用 `hid` 键为 meta 标签配一个唯一的标识编号
    head() {
      return {
        title: this.title,
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: 'My custom description'
          }
        ]
      }
    }
```

#### 7、项目打包部署

| 命令       | 描述                                                     |
| ---------- | -------------------------------------------------------- |
| nuxt       | 启动一个热加载的 Web 服务器（开发模式）                  |
| nuxt build | 利用 webpack 编译应用，压缩 JS 和 CSS 资源（发布用）。   |
| nuxt start | 以生产模式启动一个 Web 服务器 (需要先执行`nuxt build`)。 |

#### 8、简单的发布部署（传统方式）

-   配置`Host`+`Port`。在`nuxt.config.js`中配置如：`server: { host: '0.0.0.0', port: 3000 },`
-   压缩发布包。选中项目中的某些文件，这些文件都是必要的文件，如`static`是项目的静态资源，并合并压缩为`realworld-nuxtjs.zip`。
    ![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/33226e22dc144b7da29afa8fe4616eb7~tplv-k3u1fbpfcp-watermark.image?)
-   把发布包传到服务端。依次经过图中的 7 个步骤,其中第 4 步是通过`Linux`的`scp`命令将本地压缩包上传到远程服务器的指定目录`/root/realworld-nuxtjs`文件夹中。
    ![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0a1d67aaad5148b2bf11f300f280ff6a~tplv-k3u1fbpfcp-watermark.image?)
-   解压，如上图中第 7 步,查看文件信息，由于`Linux`默认会隐藏`.`开头的文件，因此要通过`ls -a`查看。
    ![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0bcfa071fc6f4a1d8261659cb24d57de~tplv-k3u1fbpfcp-watermark.image?)
-   安装依赖。通过`npm i`安装依赖
-   启动服务，运行`npm run start`启动服务
    ![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d43a8cd41b9b4fa7a675bb455c43afcc~tplv-k3u1fbpfcp-watermark.image?)
-   在外网访问。这里不能使用`http://172.17.215.90:3000`（当前链接是在服务端的局域网地址）进行访问，应该用服务器对应的公网`IP`+端口号访问。此处应访问`http://39.105.28.5:3000/`,就可以测试网页功能了。  
    
#### 9、使用 PM2 启动 Node 服务

解决 nodeJS 进程的管理，实现后台运行
-   GitHub 仓库地址: https://github.com/Unitech/om2
-   官方文档： https://pm2.io/
-   安装： npm install—global pm2
-   启动： pm2 start 脚本路径，如下步骤 使用`npm`通过`-- start`传参
    ![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/707ce4727eb94ca4bf04faf5bba40dca~tplv-k3u1fbpfcp-watermark.image?)
-   PM2 常用命令
    ![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/bb672e3c0780421b95e7c45727841d8d~tplv-k3u1fbpfcp-watermark.image?)
    
#### 10、自动化部署--现代化的部署方式（CI 持续集成/CD 持续部署）

-   图解过程：
    ![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/be8e330e3b074ebda03d75a6d8168f89~tplv-k3u1fbpfcp-watermark.image?)
-   常见的 CI/CD 服务 - `Jenkins`、`Gitlab CI`、`GitHub Actions`、`Travic CI`、`Circle CI`...
    
#### 11、以`GitHub Actions`为例，演示具体实现

-   环境准备
    -   首先准备一台`Linux`服务器
    -   把代码提交到`GitHub`远程仓库
-   配置`GitHub Actions Token`
    -   生成`Token`: https://github.com/settings/tokens
    -   配置到项目的`Secrets`中: https://github.com/lipengzhou/realworld- nuxtis/settings/secrets
-   配置`GitHub Actions`执行脚本 - 在项目根目录创建.github／workflows 目录 - 下载 main.yml 到 workflows 目录中,[下载地址](https://gist.github.com/lipengzhou/b92f80142afa37aea397da47366bd872)： - 修改`Secrets`相关的配置  
    ![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6f93e30edd7043d2a27cfabdce27bece~tplv-k3u1fbpfcp-watermark.image?)
    -   配置 PM2 配置文件

```js
{
  "apps": [
    {
      "name": "RealWorld",
      "script": "npm",
      "args": "start"
    }
  ]
}
```

-   提交更新,创建以`v`开头的标签并推送到远程
    ![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3f4ed99f2f054ab189902664df115fa5~tplv-k3u1fbpfcp-watermark.image?)
-   查看自动部署状态
    ![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/308c23e7d4be43b8af481a1edb07026c~tplv-k3u1fbpfcp-watermark.image?)
-   访问网站
-   提交更新...
