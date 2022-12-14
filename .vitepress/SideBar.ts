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
            text: "模块检测",
            collapsible: true,
            items: [
                {
                    text: "模块检测一",
                    link: "/JavaScript/Module/",
                },
                {
                    text: "模块检测二",
                    link: "/JavaScript/Module/Two",
                },
                {
                    text: "模块检测三",
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
                    text: "第一篇：框架设计与实现",
                    link: "/Framework/Vue/Vue2",
                },
                {
                    text: "第二篇：响应式系统",
                    link: "/Framework/Vue/Vue3",
                },
                {
                    text: "Vue3+TSX语法写法总结",
                    link: "/Framework/Vue/Vue3Tsx.md",
                },
                {
                    text: "杂记",
                    link: "/Framework/Vue/RandomRecord.md",
                },
            ],
        },
        {
            text: "React",
            collapsible: true,
            items: [
                {
                    text: "第一篇：框架设计与实现",
                    link: "/Framework/React/React",
                },
                {
                    text: "第二篇：响应式系统",
                    link: "/Framework/React/ReactHooks",
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
                    text: "ReactRedux",
                    link: "/Framework/React/ReactRedux",
                },
                {
                    text: "NextJS",
                    link: "/Framework/React/NextJS",
                },
            ],
        },
        {
            text: "Nuxt",
            collapsible: true,
            items: [
                {
                    text: "第一篇：框架设计与实现",
                    link: "/Framework/Nuxt/Nuxt",
                },
            ],
        },
        {
            text: "模块检测",
            collapsible: true,
            items: [
                {
                    text: "模块检测一",
                    link: "/Framework/Module/",
                },
                {
                    text: "模块检测二",
                    link: "/Framework/Module/Two",
                },
                {
                    text: "模块检测三",
                    link: "/Framework/Module/Three",
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
                    text: "第一篇：框架设计与实现",
                    link: "/Framework/Node/WebCli",
                },
            ],
        },
        {
            text: "Nest",
            collapsible: true,
            items: [
                {
                    text: "第一篇：框架设计与实现",
                    link: "/Framework/Nest/WebCli",
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
                    text: "第一篇：框架设计与实现",
                    link: "/PanClient/RN/WebCli",
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
    ],
};
