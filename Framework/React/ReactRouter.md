---
outline: deep
---

# React-Router6

## 前端路由

什么前端路由？

路由这个概念最早出现在后端，通过用户请求的 url 导航到具体的 html 页面。现在的前端路由不同于传统路由，它不需要服务器解析，而是可以通过 hash 函数或者 history API 来实现。在前端开发中，我们可以使用路由设置访问路径，并根据路径与组件的映射关系切换组件的显示，而这整个过程都是在同一个页面中实现的，不涉及页面间的跳转，这也就是我们常说的单页应用（spa）。

前端路由带来了什么？

相比多页应用（mpa）来说，spa 有以下优点：

1. 不涉及 html 页面跳转，内容改变不需要重新加载页面，对服务器压力小。
2. 只涉及组件之间的切换，因此跳转流畅，用户体验好。
3. 页面效果会比较炫酷（比如切换页面内容时的转场动画）。
4. 组件化开发便捷。

但是同时 spa 也有以下缺点：

1. 首屏加载过慢。
2. 不利于 seo。
3. 页面复杂度提高很多。

## React Router 中 history、hash 路由差异

-   react-router6 中有三种路由模式，分别为 BrowserRouter、HashRouter、MemoryRouter，其中前两个可用于浏览器环境，最后一个用于测试环境。HistoryRouter 可以让用户自定义路由模式。

-   HashRouter 最简单，因为服务端并不解析#之后的字符，但是前端可以监听#之后字符的变化，因此前端可以依据这个变化决定渲染哪个组件。也因此，使用 HashRouter 不需要服务器端的特殊支持。

-   但是 BrowserRouter 就不同了，BrowserRouter 使用 HTML5 history API（ pushState，replaceState 和 popstate 事件），让页面的 UI 同步与 URL。服务器端对不同的 URL 返回不同的 HTML，后端配置可[参考](https://pro.ant.design/zh-CN/docs/deploy)

## react-router6 原理

router6 相比 router5 发生了很大变化，大部分 API 都变了。

-   内置组件的变化：移除`<Switch/>` ，新增 `<Routes/>`等。
-   语法的变化：component={About} 变为 element={`<About/>`}等。
-   引入了支持新数据 API 的新路由器，如 `createBrowserRouter`。React Native 目前不支持数据 API，但最终应该支持。
-   新增多个 hook：useParams、useNavigate、useMatch 等。
-   相比 router5，router6 实现了配置式路由，渲染子组件需要手动渲染`Outlet`组件，404 路由需要配置 path=\*，且放在任意位置都可以。
-   使用 Context 机制，从 Router 层传递 naviagtor、location、match 等参数给后代组件，同时 BrowserRouter、HashRouter 组件会监听 location，一旦 location 变化，即路由变化，那么就会执行 setState，导致组件更新，后代消费 naviagtor、location、match 等参数的组件也更新。

## 路由重定向

作用：只要`<Navigate>`组件被渲染，就会修改路径，切换视图。

```jsx
<Route path='/' element={<Navigate to='/home ' />}></Route>
```

**App.jsx**

```jsx
import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';

export default function App() {
    return (
        <div>
            {/* 设置路由链接 */}
            <Link className='list-group-item' to='/about'>
                About
            </Link>
            <Link className='list-group-item' to='/home'>
                Home
            </Link>

            {/* 注册路由 */}
            <Routes>
                <Route path='/about' caseSensitive element={<About />}></Route>
                <Route path='/home' element={<Home />}></Route>
                {/* Navigate 组件，页面一渲染就显示对应组件，可实现重定向效果 */}
                <Route path='/' element={<Navigate to='/about ' />}></Route>
            </Routes>
        </div>
    );
}
```

## NavLink 高亮

```jsx
import React from 'react';
import { NavLink, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';

export default function App() {
    return (
        <div>
            {/* 设置路由链接 */}
            <NavLink to='/about'>About</NavLink>
            <NavLink to='/home'>Home</NavLink>

            {/* 注册路由 */}
            <Routes>
                <Route path='/about' caseSensitive element={<About />}></Route>
                <Route path='/home' element={<Home />}></Route>
            </Routes>
        </div>
    );
}
```

## 路由映射表

说明：路由映射表其实是一个数组，里面使用对象来表示每一个路径与组件之间的对应关系（如果是子路由需要使用`<Outlet>` 路由占位符展示组件）

**src/routes/index.js 新建一个 js 文件编写路由映射表并导出**

```jsx
import { Navigate } from 'react-router-dom';
import About from '../pages/About';
import Home from '../pages/Home';
import Message from '../pages/Home/Message';
import News from '../pages/Home/News';

// 路由映射表
const routes = [
    {
        path: '/home',
        element: <Home />,
        // children 选项，用于实现嵌套路由
        // 注意：子路由只需要写路径名称，不需要 "/"
        children: [
            { path: 'news', element: <News /> },
            { path: 'message', element: <Message /> },
        ],
    },
    {
        path: '/about',
        element: <About />,
    },
    // 路由重定向
    {
        path: '/',
        element: <Navigate to='/home' />,
    },
];

export default routes;
```

**App.jsx**

```jsx
import React from 'react';
import { NavLink, useRoutes } from 'react-router-dom';
// 导入编写好的路由映射表
import routes from './routes';

export default function App() {
    return (
        <div>
            <div className='list-group'>
                {/* 设置路由链接 */}
                <NavLink className='list-group-item' to='/about'>
                    About
                </NavLink>
                <NavLink className='list-group-item' to='/home'>
                    Home
                </NavLink>
            </div>
            <div className='panel-body'>
                {/* 注册路由 */}
                {/* 调用 useRoutes() hooks，嵌入路由映射表 */}
                {useRoutes(routes)}
            </div>
        </div>
    );
}
```

**Home.jsx**

```jsx
import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

export default function Home() {
    return (
        <div>
            <h3>我是 Home 组件的内容</h3>
            <div>
                <ul className='nav nav-tabs'>
                    <li>
                        {/* 设置路由链接 */}
                        {/* to 属性值的路径有三种写法 */}
                        <NavLink className='list-group-item' to='/home/news'>
                            新闻
                        </NavLink>
                        {/* <NavLink className='list-group-item' to='./news'>新闻</NavLink> */}
                        {/* <NavLink className='list-group-item' to='news'>新闻</NavLink> */}
                    </li>
                    <li>
                        <NavLink className='list-group-item' to='/home/message'>
                            消息
                        </NavLink>
                    </li>
                </ul>
                {/* Outlet 路由占位符，表示"路由映射表"中匹配的组件将在此处展示 */}
                <Outlet />
            </div>
        </div>
    );
}
```

## 路由的参数传递

1. 向路由组件传递 params 参数  
   步骤:

-   传递 params 参数，在路径后面用 / 进行拼接
-   在路由表中定义接收路由参数
-   对应组件使用 useParams() hooks 接收参数

```jsx
// Message.jsx 传递参数的组件
{
    /* 1. 传递 params 参数，在路径后面用 / 进行拼接 */
}
<Link to={`detail/${m.id}/${m.title}/${m.content}`}>{m.title}</Link>;
```

```js
// routes.js 路由映射表
{
    children: [
        // 声明接收参数
        { path: 'detail/:id/:title/:content', element: <Detail /> },
    ];
}
```

```jsx
// Detail.jsx 接收参数的组件
// 1. 调用 useParams() hooks，获取传递过来的 params 参数，返回一个参数对象，可以通过解构得出数据
const { id, title, content } = useParams();

// 2. 调用 useMatch() hooks，传入完成路径，也可以获取到 params 参数，但是不常用
const data = useMatch('/home/message/detail/:id/:title/:content');
console.log(data);
```

2. 向路由组件传递 search 参数  
   步骤：

-   传递 params 参数，在路径后面用 / 进行拼接

```jsx
// Message.jsx 传递参数的组件
/* 1. 传递 search 参数，在路径后面用 ? 进行拼接 */
<Link to={`detail?id=${m.id}&title=${m.title}&content=${m.content}`}>
    {m.title}
</Link>
```

-   对应组件使用 useSearchParams() hooks 接收参数 Message.jsx 传递参数的组件

```jsx
// Detail.jsx 接收参数的组件
// 1. 调用 useSearchParams() hooks，获取传递过来的 search 参数
// 通过数组解构的方法，获取 search(URLSearchParams) 对象
const [search, setSearch] = useSearchParams();

// 通过 get('search') 方法，获取 search 参数
const id = search.get('id');
const title = search.get('title');
const content = search.get('content');

// 使用 useLocation() hooks，得到一个location对象，也可以获取 search参数，但是比较麻烦，不常用
const location = useLocation();
console.log('location', location);
```

3. 向路由组件传递 state 参数  
   步骤：

-   传递 params 参数，在路径后面用 / 进行拼接

```jsx
// Message.jsx 传递参数的组件
// 1. 传递 state 参数，添加 state 属性，值为一个对象
<Link to='detail' state={{ id: m.id, title: m.title, content: m.content }}>
    {m.title}
</Link>
```

-   对应组件使用 useLocation() hooks 接收参数

```jsx
// Detail.jsx 接收参数的组件
// 调用 useLocation() hooks，通过解构得到一个 state 对象，里面可以拿到传递过来的参数
// 这里通过连续解构赋值，直接取到参数
const {
    state: { id, title, content },
} = useLocation();
```

## 路由的编程式导航

使用 useNavigate() hooks 可以实现路由的编程式导航

```jsx
// Message.jsx 传递参数的组件
// 调用 useNavigate() hooks 可以实现编程式导航
// 接收两个参数：目标路径, 配置对象
// 配置对象：仅支持 replace 和 state 属性，replace表示跳转的模式，state表示传递的state参数
const navigate = useNavigate();

function showDetail(m) {
    navigate('detail', {
        replace: true,
        state: {
            id: m.id,
            title: m.title,
            content: m.content,
        },
    });
}
```

## 内置组件

- `<BrowserRouter>` : 用于包裹整个应用
- `<HashRouter>` : 作用与`<BrowserRouter>`一样，但`<HashRouter>`修改的是地址栏的hash值。
- `<Routes/>`|`<Route/>` 
  - v6版本中移出了先前的`<Switch>`，引入了新的替代者：`<Routes>`。
  - `<Routes>` 和 `<Route>`要配合使用，且必须要用`<Routes>`包裹`<Route>`。
  - `<Route>` 相当于一个 if 语句，如果其路径与当前 URL 匹配，则呈现其对应的组件。
  - `<Route caseSensitive>` 属性用于指定：匹配时是否区分大小写（默认为 false）。
  - 当URL发生变化时，`<Routes>` 都会查看其所有子 `<Route>` 元素以找到最佳匹配并呈现组件 。
  - `<Route>` 也可以嵌套使用，且可配合useRoutes()配置 “路由表” ，但需要通过 `<Outlet>` 组件来渲染其子路由。
- `<Link>` : 修改URL，且不发送网络请求（路由链接）。外侧需要用`<BrowserRouter>`或`<HashRouter>`包裹。
- `<NavLink>` : 与`<Link>`组件类似，且可实现导航的“高亮”效果。
- `<Navigate>` : 只要`<Navigate>`组件被渲染，就会修改路径，切换视图。replace属性用于控制跳转模式（push 或 replace，默认是push）。
- `<Outlet>` : 当`<Route>`产生嵌套时，渲染其对应的后续子路由。

## Hooks 总结
- `useRoutes()`： 根据路由表，动态创建`<Routes>`和`<Route>`
- `useNavigate()`： 返回一个函数用来实现编程式导航。
- `useParams()`： 回当前匹配路由的params参数，类似于5.x中的match.params。
- `useSearchParams()`： 用于读取和修改当前位置的 URL 中的查询字符串。返回一个包含两个值的数组，内容分别为：当前的seaech参数、更新search的函数。`const [search,setSearch] = useSearchParams()`
- `useLocation()`： 获取当前 location 信息，对标5.x中的路由组件的location属性。
- `useMatch()`： 返回当前匹配信息，对标5.x中的路由组件的match属性。`const match = useMatch('/login/:x/:y'); console.log(match) //输出match对象`
- `useInRouterContext()`： 如果组件在 `<Router>` 的上下文中呈现，则 useInRouterContext 钩子返回 true，否则返回 false。
- `useNavigationType()`： 返回当前的导航类型（用户是如何来到当前页面的）。返回值：POP、PUSH、REPLACE。POP是指在浏览器中直接打开了这个路由组件（刷新页面）
- `useOutlet()`： 用来呈现当前组件中渲染的嵌套路由。
- `useResolvedPath()`： 给定一个 URL值，解析其中的：path、search、hash值。

## 懒加载
懒加载或者按需加载，是一种很好的优化网页或应用的方式。这种方式实际上是先把你的代码在一些逻辑断点处分离开，然后在一些代码块中完成某些操作后，立即引用或即将引用另外一些新的代码块。这样加快了应用的初始加载速度，减轻了它的总体体积，因为某些代码块可能永远不会被加载。

#### React.lazy -->  lazy(load)
lazy 能够让你在组件第一次被渲染之前延迟加载组件的代码。在组件外部调用 lazy，以声明一个懒加载的 React 组件:
```jsx
import { lazy } from 'react';

const MarkdownPreview = lazy(() => import('./MarkdownPreview.js'));
```

参数：
- load: 一个返回 Promise 或另一个 thenable（具有 then 方法的类 Promise 对象）的函数。在你尝试第一次渲染返回的组件之前，React 是不会调用 load 函数的。在 React 首次调用 load 后，它将等待其解析，然后将解析值渲染成 React 组件。返回的 Promise 和 Promise 的解析值都将被缓存，因此 React 不会多次调用 load 函数。如果 Promise 被拒绝，则 React 将抛出拒绝原因给最近的错误边界处理。

返回值：
- lazy 返回一个 React 组件，你可以在 fiber 树中渲染。当懒加载组件的代码仍在加载时，尝试渲染它将会处于 暂停 状态。使用 `<Suspense>` 可以在其加载时显示一个正在加载的提示。

#### 使用 Suspense 实现懒加载组件 

如果想在组件第一次渲染前延迟加载这个组件的代码，采用以下导入方式：
```jsx
import { lazy } from 'react';

const MarkdownPreview = lazy(() => import('./MarkdownPreview.js'));
```
此代码依赖于 动态 import()，可能需要你的打包工具或框架提供支持。

现在你的组件代码可以按需加载，同时你需要指定在它正在加载时应该显示什么。你可以通过将懒加载组件或其任何父级包装到 `<Suspense>` 边界中来实现：

[react-router6中的懒加载](https://reactrouter.com/en/main/route/lazy)