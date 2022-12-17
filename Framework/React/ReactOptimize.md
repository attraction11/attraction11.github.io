# React 组件性能优化

前言：React 组件性能优化的核心是减少渲染真实 DOM 节点的频率，减少 Virtual DOM 比对的频率

## 1.卸载前进行清理操作

> 在组件中为 window 注册的全局事件、定时器等，在组件卸载前要清理掉，防止组件卸载后继续执行影响应用性能

需求 ∶ 使用 useState 保存一个数组，开启定时器改变数值，卸载组件查看组件中的定时器是否还在运行

```js
import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

function App() {
    const [index, setIndex] = useState(0);
    useEffect(() => {
        let timer = setInterval(() => {
            setIndex((prev) => prev + 1);
            console.log('timer is running...');
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <button
            onClick={() =>
                ReactDOM.unmountComponentAtNode(document.getElementById('root'))
            }
        >
            {index}
        </button>
    );
}

export default App;
```

## 2.PureComponent

> -   什么是纯组件
>
>     -   纯组件会对组件输入数据进行浅层比较，如果当前输入数据和上次输入数据相同，组件不会重新渲染
>
> -   什么是浅层比较
>
>     -   比较引用数据类型在内存中的引用地址是否相同，比较基本数据类型的值是否相同
>
> -   如何实现纯组件
>
>     -   类组件继承 PureComponent 类，函数组件使用 memo 方法
>
> -   为什么不直接进行 diff 操作，而是要先进行浅层比较，浅层比较难道没有性能消耗吗
>
>     -   和进行 dff 比较操作相比，浅层比较将消耗更少的性能。diff 操作会重新遍历整颗 virtualDOM 树,而浅层比较只操作当前组件的 state 和 props

需求︰在状态对象中存储 name 值为张三，组件挂载完成后将 name 属性的值再次更改为张三，然后分别将 name 传递给纯组件和非纯组件，查看结果

```js
import { Component, PureComponent } from 'react';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { name: 'yunmu' };
    }
    updateName() {
        setInterval(() => {
            this.setState({ name: 'yunmu' });
        }, 1000);
    }
    componentDidMount() {
        this.updateName();
    }
    render() {
        return (
            <>
                <ReguarComponent name={this.state.name} />
                <PurceComponentDemo name={this.state.name} />
            </>
        );
    }
}

class ReguarComponent extends Component {
    render() {
        console.log('ReguarComponent');
        return <div>{this.props.name}</div>;
    }
}

class PurceComponentDemo extends PureComponent {
    render() {
        console.log('PurceComponentDemo');
        return <div>{this.props.name}</div>;
    }
}

export default App;
```

## 3.shouldComponentUpdate

> 纯组件只能进行浅层比较，要进行深层比较，使用 shouldComponentUpdate，它用于编写自定义比较逻辑
>
> 返回 true 重新渲染组件，返回 false 阻止重新渲染
>
> 函数的第一个参数为 nextProps ，第二个参数为 nextState

需求：在页面中展示员工信息，员工信息包括姓名，年龄、职位、但是在页面中只想展示姓名和年龄.也就是说只有姓名和年龄发生变化时才有必要重新渲染组件，如果员工的其他信息发生了变化没必要重新渲染组件

```js
import { Component } from 'react';

class App extends Component {
    constructor() {
        super();
        this.state = { person: { name: 'yunmu', age: 18, job: 'waiter' } };
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({ person: { ...this.state.person, job: 'coder' } });
        }, 2000);
    }
    shouldComponentUpdate(nextProps, nextState) {
        // 返回true重新渲染
        if (
            nextState.person.name !== this.state.person.name ||
            nextState.person.age !== this.state.person.age
        ) {
            return true;
        }
        return false;
    }
    render() {
        console.log('render...');
        return (
            <div>
                {this.state.person.name} {this.state.person.age}
            </div>
        );
    }
}

export default App;
```

## 4.React.memo

### 1.memo 的基本使用

> 将函数组件变为纯组件，将当前 props 和上一次的 props 进行浅层比较，如果相同就阻止组件重新渲染

需求︰父组件维护两个状态， index 和 name，开启定时器让 index 不断发生变化，name 传递给子组件，查看父组件更新子组件是否也更新了

```js
import { useState, useEffect, memo } from 'react';

const ShowName = memo(function ({ name }) {
    console.log('showName reder...');
    return <div>{name}</div>;
});

function App() {
    const [index, setIndex] = useState(0);
    const [name] = useState('yunmu');
    useEffect(() => {
        setInterval(() => {
            setIndex((prev) => prev + 1);
        }, 1000);
    }, []);
    return (
        <div>
            {index}
            <ShowName name={name} />
        </div>
    );
}

export default App;
```

### 2.为 memo 传递比较逻辑

> 使用 memo 方法比较逻辑，用于深层比较
>
> 比较函数的第一个参数为上一次的 props，比较函数的第二个参数为下一次的 props，比较函数返回 true，不进行渲染，比较函数返回 false，组件重新渲染

```js
import { useState, useEffect, memo } from 'react';

// 返回false重新渲染
function compare(prevProps, nextProps) {
    if (
        prevProps.person.name !== nextProps.person.name ||
        prevProps.person.age !== nextProps.person.age
    ) {
        return false;
    }
    return true;
}

const ShowPerson = memo(function ({ person }) {
    console.log('showName reder...');
    return (
        <div>
            {person.name} {person.age}
        </div>
    );
}, compare);

function App() {
    const [person, setPerson] = useState({
        name: 'yunmu',
        age: 18,
        job: 'waiter',
    });
    useEffect(() => {
        setInterval(() => {
            setPerson({ ...person, job: 'coder' });
        }, 1000);
    }, []);
    return (
        <div>
            <ShowPerson person={person} />
        </div>
    );
}

export default App;
```

## 5.使用组件懒加载

> 使用组件懒加载可以减少 bundle 文件大小，加快首页呈现速度

### 1.路由懒加载

```js
import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-roter-dom';
const Home = lazy(() => import(/* webpackChunkName: "Home" */ './Home'));
const List = lazy(() => import(/* webpackChunkName: "List" */ './List'));

function App() {
    return (
        <BrowserRouter>
            <Link to='/'>首页</Link>
            <Link to='/list'>列表页</Link>
            <Switch>
                <Suspense fallback={<div>loading...</div>}>
                    <Route path='/' component={Home} exact />
                    <Route path='/list' component={List} />
                </Suspense>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
```

### 2.根据条件进行组件懒加载

适用于组件不会随条件频繁切换

```js
import { lazy, Suspense } from 'react';

function App() {
    let LazyComponent = null;
    if (true) {
        LazyComponent = lazy(() =>
            import(/* webpackChunkName: "Home" */ './Home')
        );
    } else {
        LazyComponent = lazy(() =>
            import(/* webpackChunkName: "List" */ './List')
        );
    }
    return (
        <Suspense fallback={<div>loading...</div>}>
            <LazyComponent />
        </Suspense>
    );
}

export default App;
```

## 6.使用 Fragment 避免额外标记

React 组件中返回的 jsx 如果有多同级元素，这多个同级元素必须要有一个共同的父级

```js
function App() {
    return (
        <div>
            <div>message a</div>
            <div>message b</div>
        </div>
    );
}
```

为了满足这个条件我们通常都会在最外层添加一个 div，但是这样的话就会多出一个无意义的标记，如果每个组件都多出这样的一个无意义标记的话，浏览器渲染引擎的负担就会加剧

为了解决这个问题，React 推出了 fragment 占位符标记，使用占位符标记既满足了拥有共同父级的要求又不会多出额外的无意义标记

```js
import { Fragment } from 'react';
function App() {
    return (
        <Fragment>
            <div>message a</div>
            <div>message b</div>
        </Fragment>
    );
}
```

```js
function App() {
    return (
        <>
            <div>message a</div>
            <div>message b</div>
        </>
    );
}
```

## 7.不要使用内联函数定义

> 在使用内联函数后, render 方法每次运行时都会创建该函数的新实例
>
> 导致 React 在进行 Virtual DOM 比对时，新旧函数比对不相等
>
> 导致 React 总是为元素绑定新的函数实例，而旧的函数实例又要交给垃圾回收器处理

```js
class App extends Component {
    constructor() {
        super();
        this.state = {
            inputValue: '',
        };
    }
    render() {
        return (
            <input
                value={this.state.inputValue}
                onChange={(e) => this.setState({ inputValue: e.target.value })}
            />
        );
    }
}
```

正确的做法是在组件中单独定义函数，将函数绑定给事件：

```js
class App extends Component {
    constructor() {
        super();
        this.state = {
            inputValue: '',
        };
    }
    setInputValue = (e) => {
        this.setState({ inputValue: e.target.value });
    };

    render() {
        return (
            <input
                value={this.state.inputValue}
                onChange={this.setInputValue}
            />
        );
    }
}
```

## 8.在构造函数中进行函数 this 绑定

> 在类组件中如果使用 fn() {} 这种方式定义函数,函数 this 默认指向 undefined
>
> 也就是说函数内部的 this 指向需要被更正
>
> 可以在构造函数中对函数的 this 进行更正，也可以在行内进行更正
>
> 两者看起来没有太大区别，但是对性能的影响是不同的

```js
class App extends Component {
    constructor() {
        super();
        // 方式一
        // 构造函数只执行一次 所以函数this执行更正的代码也只执行一次
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        console.log(this);
    }

    render() {
        // 方式二
        // 问题：rnder方法每次执行都会调用 bind 方法生成新的函数实例
        return <button onClick={this.handleClick.bind(this)}>按钮</button>;
    }
}
```

## 9.类组件中的箭头函数

在类组件中使用箭头函数不会存在 this 指向问题，因为箭头函数本身不绑定 this

```js
class App extends Component {
    handleClick = () => {
        console.log(this);
    };

    render() {
        return <button onClick={this.handleClick}>按钮</button>;
    }
}
```

箭头函数在 this 指向问题上占据优势,但是同时也有不利的一面

当使用箭头函数时，该函数被添加为类的实例对象属性，而不是原型对象属性

如果组件被多次重用，每个组件实例对象中都将会有一个相同的函数实例，降低了函数实例的可重用性造成了资源浪费

综上所述，更正函数内部 this 指向的最佳做法仍是在构造函数中使用 bind 方法进行绑定

## 10.避免使用内联样式属性

> 当使用内联 style 为元素添加样式时，内联 style 会被编译为 JavaScript 代码
>
> 通过 JavaScript 代码将样式规则映射到元素的身上，浏览器就会花费更多的时间执行脚本和渲染 UI，从而增加了组件的渲染时间.

```js
function App() {
    return <div style={{ height: '200px', background: 'skyblue' }}></div>;
}
```

在上面的组件中，为元素附加了内联样式，添加的内联样式为 JavaScript 对象

backgroundColor 需要被转换为等效的 CSS 样式规则，然后将其应用到元素，这样涉及到脚本的执行

更好的办法是将 CSS 文件导入样式组件.能通过 CSS 直接做的事情就不要通过 JavaScript 去做，因为 JavaScript 操作 DOM 非常慢

## 11.优化条件渲染

> 频繁的挂载和卸载组件是一项耗性能的操作，为了确保应用程序的性能，应该减少组件挂载和卸载的次数
>
> 在 React 中我们经常会根据条件渲染不同的组件，条件渲染是一项必做的优化操作

```js
function App() {
    if (true) {
        return (
            <>
                <Header />
                <Content />
                <Footer />
            </>
        );
    } else {
        return (
            <>
                <Content />
                <Footer />
            </>
        );
    }
}
```

在上面的代码中，当渲染条件发生变化时，React 内部在做 Virtual DOM 比对时发现

刚刚第一个组件是 Header，现在第一个组件是 Content

刚刚第二个组件是 Content，现在第二个组件是 Footer

组件发生了变化，React 就会卸载 Header、Content、Footer、重新挂载 Content 和 Footer，这种挂载和卸载就是没有必要的

```js
function App() {
    if (true) {
        return (
            <>
                {true && <Header />}
                <Content />
                <Footer />
            </>
        );
    }
}
```

## 12.避免重复的无限渲染

当应用程序状态发生更改时，React 会调用 render 方法，如果在 render 方法中继续更改应用程序状态，就会发生 render 方法递归调用导致应用报错：

![image-20220214142304011](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/8c6542dbcd914f7fa62a315e4ffa0ffd~tplv-k3u1fbpfcp-zoom-1.image)

```js
class App extends Component {
    constructor() {
        super();
        this.state = { name: 'yunmu' };
    }
    render() {
        this.setState({ name: 'linduidui' });
        return <div>{this.state.name}</div>;
    }
}
```

与其他生命周期函数不同, render 方法应该被作为纯函数，这意味着，在 render 方法中不要做以下事情

比如不要调用 setState 方法，不要使用其他手段查询更改原生 DOM 元素，以及其他更改应用程序的任何操作.

render 方法的执行要根据状态的改变，这样可以保持组件的行为和渲染方式一致

## 13.为组件创建错误边界

> 默认情况下，组件渲染错误会导致整个应用程序中断，创建错误边界可确保在特定组件发生错误时应用程序不会中断
>
> 错误边界是一个 React 组件,可以捕获子级组件在渲染时发生的错误，当错误发生时，可以将错误记录下来,可以显示备用 UI 界面
>
> 错误边界涉及到两个生命周期函数,分别为 getDerivedStateFromError 和 componentDidCatch
>
> getDerivedStateFromError 为静态方法，方法中需要返回一个对象，该对象会和 state 对象进行合并用于更改应用程序状态
>
> componentDidCatch 方法用于记录应用程序错误信息，该方法的参数就是错误对象

```js
// ErrorBoundaries.js
import { Component } from 'react';
import App from './App';

class ErrorBoundaries extends Component {
    constructor() {
        super();
        this.state = { hasError: false };
    }
    componentDidCatch(error) {
        console.log('发生了错误');
        console.log(error);
    }
    static getDerivedStateFromError() {
        console.log('getDerivedStateFromError');
        return {
            hasError: true,
        };
    }
    render() {
        if (this.state.hasError) {
            return <div>发生了未知错误</div>;
        }
        return <App />;
    }
}

export default ErrorBoundaries;
```

## 14.避免数据结构突变

> 组件中 props 和 state 的数据结构应该保持一致，数据结构突变会导致输出不一致

```js
class App extends Component {
    constructor() {
        super();
        this.state = {
            emplyee: {
                name: 'yunmu',
                age: 18,
            },
        };
    }
    render() {
        const { name, age } = this.state.emplyee;
        return (
            <div>
                <p>
                    {name} {age}
                </p>
                <button
                    onClick={() =>
                        this.setState({
                            ...this.state,
                            emplyee: {
                                ...this.state.emplyee,
                                age: 20,
                            },
                        })
                    }
                >
                    按钮
                </button>
            </div>
        );
    }
}
```

## 15.为列表数据添加唯一标识

> 当需要渲染列表数据时，我们应该为每一个列表项添加 key 属性，key 属性的值必须是唯一的
>
> key 属性可以让 React 直接了当的知道哪些列表项发生了变化，从而避免了 React 内部逐一遍历 Virtual DOM 查找变化所带来的性能消耗，避免了元素因为位置变化而导致的重新创建
>
> 当列表数据没有唯一标识时，可以临时使用索引作为 key 属性的值，但是仅限于列表项是静态的，不会被动态改变
>
> 比如不会对列表项进行排序或者过滤，不会从顶部或者中间添加或者删除项目
>
> 如果没有唯一标识发生以上行为时，索引会被更改，更新就不会变高效

```js
const arrData = [
    { id: 1, name: 'yunmu' },
    { id: 2, name: 'linduidui' },
];

function App() {
    return (
        <ul>
            {arrData.map((item) => {
                return <li key={item.id}>{item.name}</li>;
            })}
        </ul>
    );
}

export default App;
```

## 16.Hooks 优化

> 使用 useMemo 缓存计算结果，监测值不变化不重新计算
>
> 使用 useCallback 缓存函数，使得重新渲染总得到相同的函数
>
> 更多 Hooks 可看我另一篇文章：[30 张图全面剖析 React Hooks（十五） - 掘金 (juejin.cn)](https://juejin.cn/post/7064097257821306916 'https://juejin.cn/post/7064097257821306916')

## 17.依赖优化

> 在应用程序中经常依赖第三方包，但我们不想引用包中所有代码，我们只想用到哪些代码就包含哪些代码，此时可以使用插件对依赖项进行优化

当前我们就使用 lodash 举例子，应用基于 create-react-app 脚手架创建

1．下载依赖 `yarn add react-app-rewired customize-cra lodash babel-plugin-lodash`

-   react-app-rewired：覆盖 create-react-app 的默认配置

```js
module.exports = function (oldConfig) {
    return newConfig;
};
// 参数中的 oldConfig 就是默认的 webpack config
```

-   customize-cra：导出一些辅助方法，可以使以上写法更加简洁：

```js
const { override, useBabelRc } = require('customize-cra');

module.exports = override(
    (oldConfig) => newConfig,
    (oldConfig) => newConfig
);
```

override：可以接收多个参数，每个参数都是一个配置函数，函数接收 oldConfig ，返回 newConfig

useBabelRc：允许使用 .babelrc 文件进行 babel 配置

2.  在项目根目录新建 `config-overrides.js `并加入配置代码

```js
const { override, useBabelRc } = require('customize-cra');

module.exports = override(useBabelRc());
```

3.  修改 `package.json` 文件的构建命令

```js
"scripts": {
    "start": "react-app-rewired start",
    "build": "react-app-rewired build",
    "test" : "react-app-rewired test --env=jsdom",
    "eject": "react-scripts eject"
}
```

4.  创建 `.babelrc` 文件并加入配置

```js
{
	"plugins": ["lodash"]
}
```

5.  生产环境下的三种 JS 文件

-   main.[hash].chunk.js:这是你的应用程序代码,App.js 等.
-   2.[hash].chunk.js:这是第三方库的代码,包含你在 node_modules 中导入的模块
-   runtime-main.[hash].js webpack 运行时代码

![image-20220214200300130](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0edfb4dbf81e4904bb5f94cddcfa2706~tplv-k3u1fbpfcp-zoom-1.image)

6.  App 组件：

```js
import _ from 'lodash';

function App() {
    console.log(_.chunk('a', 'b', 'c', 'd'), 2);
    return <div>App works</div>;
}

export default App;
```
