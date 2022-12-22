import { DefaultTheme } from "vitepress";

export const SideBarList: DefaultTheme.Sidebar = {
    "/JavaScript/": [
        {
            text: "HTML&CSS",
            collapsible: true, // 是否开启折叠
            items: [
                {
                    text: "概述",
                    link: "/JavaScript/HTML&CSS/",
                },
                {
                    text: "布局",
                    link: "/JavaScript/HTML&CSS/Layout",
                },
                {
                    text: "Flex布局",
                    link: "/JavaScript/HTML&CSS/Flex",
                },
                {
                    text: "Grid网格布局",
                    link: "/JavaScript/HTML&CSS/Grid",
                },
                {
                    text: "CSS常用技巧",
                    link: "/JavaScript/HTML&CSS/Skill",
                },
                {
                    text: "杂记",
                    link: "/JavaScript/HTML&CSS/RandomRecord",
                },
            ],
        },
        {
            text: "函数式编程",
            collapsible: true,
            items: [
                {
                    text: "函数式编程范式",
                    link: "/JavaScript/Functional/",
                },
                {
                    text: "闭包介绍",
                    link: "/JavaScript/Functional/closure",
                },
                {
                    text: "纯函数",
                    link: "/JavaScript/Functional/pureFunction",
                },
                {
                    text: "柯里化",
                    link: "/JavaScript/Functional/currying",
                },
                {
                    text: "函数组合",
                    link: "/JavaScript/Functional/combination",
                },
            ],
        },
        {
            text: "JS异步编程",
            collapsible: true,
            items: [
                {
                    text: "同步与异步模式",
                    link: "/JavaScript/Asynchronous/",
                },
                {
                    text: "Promise介绍",
                    link: "/JavaScript/Asynchronous/promise",
                },
                {
                    text: "手写Promise",
                    link: "/JavaScript/Asynchronous/promiseCode",
                },
                {
                    text: "JS中的this",
                    link: "/JavaScript/Asynchronous/this",
                },
                {
                    text: "面向对象",
                    link: "/JavaScript/Asynchronous/objectOriented",
                },
                {
                    text: "理解堆栈执行",
                    link: "/JavaScript/Asynchronous/heap&stack",
                },
            ],
        },
        {
            text: "ES新特性",
            collapsible: true,
            items: [
                {
                    text: "ES 新特性",
                    link: "/JavaScript/ESFeatures/",
                },
            ],
        },
        {
            text: "TS语言",
            collapsible: true,
            items: [
                {
                    text: "基础语法",
                    link: "/JavaScript/TypeScript/",
                },
                {
                    text: "工具类型",
                    link: "/JavaScript/TypeScript/ToolType",
                },
            ],
        },
        {
            text: "JS性能优化",
            collapsible: true,
            items: [
                {
                    text: "JS内存管理及回收",
                    link: "/JavaScript/Performance/",
                },
                {
                    text: "JS代码执行",
                    link: "/JavaScript/Performance/Execute",
                },
                {
                    text: "JS性能检测",
                    link: "/JavaScript/Performance/Check",
                },
                {
                    text: "JS性能优化",
                    link: "/JavaScript/Performance/Optimize",
                },
            ],
        },
        {
            text: "项目工程化",
            collapsible: true,
            items: [
                {
                    text: "脚手架工具",
                    link: "/JavaScript/Engineering/",
                },
                {
                    text: "自动化构建",
                    link: "/JavaScript/Engineering/Automate",
                },
                {
                    text: "模块化开发",
                    link: "/JavaScript/Engineering/Modular",
                },
                {
                    text: "Webpack解析",
                    link: "/JavaScript/Engineering/Webpack",
                },
                {
                    text: "规范化标准",
                    link: "/JavaScript/Engineering/CodeStandard",
                },
            ],
        },
        {
            text: "杂记",
            collapsible: true,
            items: [
                {
                    text: "问答题一",
                    link: "/JavaScript/Module/",
                },
                {
                    text: "问答题二",
                    link: "/JavaScript/Module/Two",
                },
                {
                    text: "问答题三",
                    link: "/JavaScript/Module/Three",
                },
            ],
        },
    ],
    "/Framework": [
        {
            text: "Vue",
            collapsible: true,
            items: [
                {
                    text: "框架设计与实现",
                    link: "/Framework/Vue/Vue2",
                },
                {
                    text: "响应式系统",
                    link: "/Framework/Vue/Vue3",
                },
                {
                    text: "Vue3+TSX语法",
                    link: "/Framework/Vue/Vue3Tsx.md",
                },
                {
                    text: "虚拟DOM原理",
                    link: "/Framework/Vue/VirtualDOM",
                },
                {
                    text: "Vue3源码解析",
                    link: "/Framework/Vue/Vue3Code",
                },
                {
                    text: "Vue 组件库",
                    link: "/Framework/Vue/Component",
                },
                {
                    text: "Vue Router",
                    link: "/Framework/Vue/VueRouter",
                },
                {
                    text: "Vuex",
                    link: "/Framework/Vue/Vuex",
                },
                {
                    text: "Q&A-1",
                    link: "/Framework/Vue/QA1.md",
                },
                {
                    text: "Q&A-2",
                    link: "/Framework/Vue/QA2.md",
                },
                {
                    text: "Q&A-3",
                    link: "/Framework/Vue/QA3.md",
                },
            ],
        },
        {
            text: "React",
            collapsible: true,
            items: [
                {
                    text: "框架设计与实现",
                    link: "/Framework/React/React",
                },
                {
                    text: "响应式系统",
                    link: "/Framework/React/ReactHooks",
                },
                {
                    text: "React 基础",
                    link: "/Framework/React/ReactBase",
                },
                {
                    text: "Diff 算法",
                    link: "/Framework/React/ReactDiff",
                },
                {
                    text: "React Fiber",
                    link: "/Framework/React/ReactFilber",
                },
                {
                    text: "React16+源码解析",
                    link: "/Framework/React/React16Code",
                },
                {
                    text: "React组件性能优化",
                    link: "/Framework/React/ReactOptimize",
                },
                {
                    text: "React Router",
                    link: "/Framework/React/ReactRouter",
                },
                {
                    text: "Redux",
                    link: "/Framework/React/Redux",
                },
                {
                    text: "Redux源码及应用",
                    link: "/Framework/React/ReduxCode",
                },
                {
                    text: "MobX6基础",
                    link: "/Framework/React/MobX6",
                },
                {
                    text: "ReactRedux",
                    link: "/Framework/React/ReactRedux",
                },
                {
                    text: "Q&A-1",
                    link: "/Framework/React/QA1.md",
                },
                {
                    text: "Q&A-2",
                    link: "/Framework/React/QA2.md",
                },
            ],
        },
        {
            text: "Nuxt",
            collapsible: true,
            items: [
                {
                    text: "服务端渲染",
                    link: "/Framework/Nuxt/ServeRender",
                },
                {
                    text: "搭建SSR",
                    link: "/Framework/Nuxt/MySSR",
                },
                {
                    text: "Nuxt基础",
                    link: "/Framework/Nuxt/NuxtBase",
                },
                {
                    text: "Nuxt最佳实践",
                    link: "/Framework/Nuxt/",
                },
                {
                    text: "静态站点生成",
                    link: "/Framework/Nuxt/StaticSite",
                },
            ],
        },
        {
            text: "Next",
            collapsible: true,
            items: [
                {
                    text: "NextJS",
                    link: "/Framework/Next/NextJS",
                },
                {
                    text: "React SSR简介及应用",
                    link: "/Framework/Next/ServeRender",
                },
                {
                    text: "Gatsby 基础",
                    link: "/Framework/Next/Gatsby",
                },
            ],
        },
        {
            text: "杂记",
            collapsible: true,
            items: [
                {
                    text: "基础问答",
                    link: "/Framework/Module/",
                },
            ],
        },
    ],
    "/FullStack": [
        {
            text: "Node",
            collapsible: true,
            items: [
                {
                    text: "Nodejs基础",
                    link: "/FullStack/Node/NodeBase",
                },
                {
                    text: "Nodejs核心模块",
                    link: "/FullStack/Node/NodeCore",
                },
                {
                    text: "Nodejs通信",
                    link: "/FullStack/Node/NodeMessage",
                },
            ],
        },
        {
            text: "NoSQL数据库",
            collapsible: true,
            items: [
                {
                    text: "MongoDB教程",
                    link: "/FullStack/DataBase/Mongodb",
                },
                {
                    text: "Redis教程",
                    link: "/FullStack/DataBase/Redis",
                },
            ],
        },
        {
            text: "Web开发框架",
            collapsible: true,
            items: [
                {
                    text: "Express",
                    link: "/FullStack/WebDev/Express",
                },
                {
                    text: "Koa",
                    link: "/FullStack/WebDev/Koa",
                },
                {
                    text: "Nest",
                    link: "/FullStack/WebDev/Nest",
                },
                {
                    text: "Egg",
                    link: "/FullStack/WebDev/Egg",
                },
            ],
        },
        {
            text: "GraphQL API 开发",
            collapsible: true,
            items: [
                {
                    text: "GraphQL",
                    link: "/FullStack/GraphQL/",
                },
            ],
        },
    ],
    "/PanClient": [
        {
            text: "React Native",
            collapsible: true,
            items: [
                {
                    text: "React Native介绍",
                    link: "/PanClient/RN/",
                },
                {
                    text: "React Native环境搭建",
                    link: "/PanClient/RN/SetUp",
                },
                {
                    text: "StyleSheet 语法",
                    link: "/PanClient/RN/StyleSheet",
                },
                {
                    text: "组件和API",
                    link: "/PanClient/RN/Component",
                },
                {
                    text: "路由与导航",
                    link: "/PanClient/RN/Router&Nav",
                },
                {
                    text: "杂记",
                    link: "/PanClient/RN/RandomRecord",
                },
            ],
        },
        {
            text: "Flutter",
            collapsible: true,
            items: [
                {
                    text: "第一篇：框架设计与实现",
                    link: "/PanClient/Flutter/WebCli",
                },
            ],
        },
        {
            text: "Electron",
            collapsible: true,
            items: [
                {
                    text: "第一篇：框架设计与实现",
                    link: "/PanClient/Electron/WebCli",
                },
            ],
        },
    ],
    "/ProgramTopics": [
        {
            text: "Micro Frontend",
            collapsible: true,
            items: [
                {
                    text: "第一篇：框架设计与实现",
                    link: "/Framework/MicroFrontend/WebCli",
                },
            ],
        },
        {
            text: "Test Automation",
            collapsible: true,
            items: [
                {
                    text: "第一篇：框架设计与实现",
                    link: "/Framework/TestAutomation/WebCli",
                },
            ],
        },
        {
            text: "Data Visualization",
            collapsible: true,
            items: [
                {
                    text: "第一篇：框架设计与实现",
                    link: "/Framework/DataVisualization/WebCli",
                },
            ],
        },
        {
            text: "Serverless",
            collapsible: true,
            items: [
                {
                    text: "第一篇：框架设计与实现",
                    link: "/Framework/Serverless/WebCli",
                },
            ],
        },
    ],
};
