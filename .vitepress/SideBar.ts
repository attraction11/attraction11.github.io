import { DefaultTheme } from 'vitepress';

export const SideBarList: DefaultTheme.Sidebar = {
    '/JavaScript/': [
        {
            text: 'HTML&CSS',
            collapsible: true, // 是否开启折叠
            items: [
                {
                    text: 'HTML',
                    link: '/JavaScript/HTML&CSS/',
                },
                {
                    text: 'CSS布局',
                    link: '/JavaScript/HTML&CSS/Layout',
                },
                {
                    text: 'Flex布局',
                    link: '/JavaScript/HTML&CSS/Flex',
                },
                {
                    text: 'Grid网格布局',
                    link: '/JavaScript/HTML&CSS/Grid',
                },
                {
                    text: 'CSS常用技巧',
                    link: '/JavaScript/HTML&CSS/Skill',
                },
                {
                    text: 'CSS问答题',
                    link: '/JavaScript/HTML&CSS/RandomRecord',
                },
            ],
        },
        {
            text: '函数式编程',
            collapsible: true,
            items: [
                {
                    text: '函数式编程范式',
                    link: '/JavaScript/Functional/',
                },
                {
                    text: '闭包介绍',
                    link: '/JavaScript/Functional/closure',
                },
                {
                    text: '纯函数',
                    link: '/JavaScript/Functional/pureFunction',
                },
                {
                    text: '柯里化',
                    link: '/JavaScript/Functional/currying',
                },
                {
                    text: '函数组合',
                    link: '/JavaScript/Functional/combination',
                },
            ],
        },
        {
            text: 'JS核心原理',
            collapsible: true,
            items: [
                {
                    text: 'JS核心原理',
                    link: '/JavaScript/JSCore/',
                },
            ],
        },
        {
            text: 'JS异步编程',
            collapsible: true,
            items: [
                {
                    text: '同步与异步模式',
                    link: '/JavaScript/Asynchronous/',
                },
                {
                    text: 'Promise介绍',
                    link: '/JavaScript/Asynchronous/promise',
                },
                {
                    text: '手写Promise',
                    link: '/JavaScript/Asynchronous/promiseCode',
                },
                {
                    text: 'JS中的this',
                    link: '/JavaScript/Asynchronous/this',
                },
                {
                    text: '面向对象',
                    link: '/JavaScript/Asynchronous/objectOriented',
                },
                {
                    text: '理解堆栈执行',
                    link: '/JavaScript/Asynchronous/heap&stack',
                },
                {
                    text: '33个JS概念',
                    link: '/JavaScript/Asynchronous/jsConcepts',
                },
            ],
        },
        {
            text: 'ES新特性',
            collapsible: true,
            items: [
                {
                    text: 'ES 新特性',
                    link: '/JavaScript/ESFeatures/',
                },
            ],
        },
        {
            text: 'TS语言',
            collapsible: true,
            items: [
                {
                    text: '基础语法',
                    link: '/JavaScript/TypeScript/',
                },
                {
                    text: '工具类型',
                    link: '/JavaScript/TypeScript/ToolType',
                },
            ],
        },
        {
            text: '性能优化',
            collapsible: true,
            items: [
                {
                    text: 'JS内存管理及回收',
                    link: '/JavaScript/Performance/',
                },
                {
                    text: 'JS代码执行',
                    link: '/JavaScript/Performance/Execute',
                },
                {
                    text: 'JS性能检测',
                    link: '/JavaScript/Performance/Check',
                },
                {
                    text: 'JS性能优化',
                    link: '/JavaScript/Performance/Optimize',
                },
                {
                    text: '前端性能优化',
                    link: '/JavaScript/Performance/Overall',
                },
            ],
        },
        {
            text: '网络与安全',
            collapsible: true,
            items: [
                {
                    text: '前端安全',
                    link: '/JavaScript/WebSafety/',
                },
                {
                    text: '网络传输',
                    link: '/JavaScript/WebSafety/Transfer',
                },
            ],
        },
        {
            text: '项目工程化',
            collapsible: true,
            items: [
                {
                    text: '脚手架工具',
                    link: '/JavaScript/Engineering/',
                },
                {
                    text: '自动化构建',
                    link: '/JavaScript/Engineering/Automate',
                },
                {
                    text: '模块化开发',
                    link: '/JavaScript/Engineering/Modular',
                },
                {
                    text: 'Webpack解析',
                    link: '/JavaScript/Engineering/Webpack',
                },
                {
                    text: '规范化标准',
                    link: '/JavaScript/Engineering/CodeStandard',
                },
            ],
        },
        {
            text: '杂记',
            collapsible: true,
            items: [
                {
                    text: '问答题一',
                    link: '/JavaScript/Module/',
                },
                {
                    text: '问答题二',
                    link: '/JavaScript/Module/Two',
                },
                {
                    text: '问答题三',
                    link: '/JavaScript/Module/Three',
                },
            ],
        },
    ],
    '/Framework': [
        {
            text: 'Vue',
            collapsible: true,
            items: [
                {
                    text: '框架设计与实现',
                    link: '/Framework/Vue/Vue2',
                },
                {
                    text: '响应式系统',
                    link: '/Framework/Vue/Vue3',
                },
                {
                    text: 'Vue3+TSX语法',
                    link: '/Framework/Vue/Vue3Tsx.md',
                },
                {
                    text: '虚拟DOM原理',
                    link: '/Framework/Vue/VirtualDOM',
                },
                {
                    text: 'Vue3源码解析',
                    link: '/Framework/Vue/Vue3Code',
                },
                {
                    text: 'Vue 组件库',
                    link: '/Framework/Vue/Component',
                },
                {
                    text: 'Vue Router',
                    link: '/Framework/Vue/VueRouter',
                },
                {
                    text: 'Vuex',
                    link: '/Framework/Vue/Vuex',
                },
                {
                    text: 'Q&A-1',
                    link: '/Framework/Vue/QA1.md',
                },
                {
                    text: 'Q&A-2',
                    link: '/Framework/Vue/QA2.md',
                },
            ],
        },
        {
            text: 'React',
            collapsible: true,
            items: [
                {
                    text: '框架设计与实现',
                    link: '/Framework/React/React',
                },
                {
                    text: '响应式系统',
                    link: '/Framework/React/ReactHooks',
                },
                {
                    text: 'ReactHooks优缺点',
                    link: '/Framework/React/ReactHooks优缺点',
                },
                {
                    text: 'ReactHooks功能',
                    link: '/Framework/React/ReactHooks功能',
                },
                {
                    text: 'useState注意事项',
                    link: '/Framework/React/UseStateNote',
                },
                {
                    text: 'React 基础',
                    link: '/Framework/React/ReactBase',
                },
                {
                    text: 'Diff 算法',
                    link: '/Framework/React/ReactDiff',
                },
                {
                    text: 'React Fiber',
                    link: '/Framework/React/ReactFilber',
                },
                {
                    text: 'React16+源码解析',
                    link: '/Framework/React/React16Code',
                },
                {
                    text: 'React组件性能优化',
                    link: '/Framework/React/ReactOptimize',
                },
                {
                    text: 'React Router',
                    link: '/Framework/React/ReactRouter',
                },
                {
                    text: 'Redux',
                    link: '/Framework/React/Redux',
                },
                {
                    text: 'Redux源码及应用',
                    link: '/Framework/React/ReduxCode',
                },
                {
                    text: 'ReactRedux',
                    link: '/Framework/React/ReactRedux',
                },
                {
                    text: 'MobX6基础',
                    link: '/Framework/React/MobX6',
                },
                {
                    text: 'ReduxOrMobX',
                    link: '/Framework/React/ReduxOrMobX',
                },
                {
                    text: 'CSS-IN-JSS解决方案',
                    link: '/Framework/React/CSSINJS',
                },
                {
                    text: 'Chakra-UI介绍',
                    link: '/Framework/React/ChakraUI',
                },
                {
                    text: 'Q&A-1',
                    link: '/Framework/React/QA1.md',
                },
                {
                    text: 'Q&A-2',
                    link: '/Framework/React/QA2.md',
                },
            ],
        },
        {
            text: 'Nuxt',
            collapsible: true,
            items: [
                {
                    text: '服务端渲染',
                    link: '/Framework/Nuxt/ServeRender',
                },
                {
                    text: '搭建SSR',
                    link: '/Framework/Nuxt/MySSR',
                },
                {
                    text: 'Nuxt基础',
                    link: '/Framework/Nuxt/NuxtBase',
                },
                {
                    text: 'Nuxt最佳实践',
                    link: '/Framework/Nuxt/',
                },
                {
                    text: '静态站点生成',
                    link: '/Framework/Nuxt/StaticSite',
                },
            ],
        },
        {
            text: 'Next',
            collapsible: true,
            items: [
                {
                    text: 'NextJS',
                    link: '/Framework/Next/NextJS',
                },
                {
                    text: 'React SSR简介及应用',
                    link: '/Framework/Next/ServeRender',
                },
            ],
        },
        {
            text: 'Gatsby',
            collapsible: true,
            items: [
                {
                    text: 'Gatsby 基础',
                    link: '/Framework/Gatsby/',
                },
            ],
        },
        {
            text: '杂记',
            collapsible: true,
            items: [
                {
                    text: '基础问答',
                    link: '/Framework/Module/',
                },
            ],
        },
    ],
    '/FullStack': [
        {
            text: 'Node.js',
            collapsible: true,
            items: [
                {
                    text: 'Node.js基础',
                    link: '/FullStack/Node/NodeBase',
                },
                {
                    text: 'Node.js核心模块',
                    link: '/FullStack/Node/NodeCore',
                },
                {
                    text: 'Node.js通信',
                    link: '/FullStack/Node/NodeMessage',
                },
                {
                    text: 'Node.js应用开发',
                    link: '/FullStack/Node/NodeDev',
                },
                {
                    text: 'Node.js问答',
                    link: '/FullStack/Node/NodeQA',
                },
            ],
        },
        {
            text: 'NoSQL数据库',
            collapsible: true,
            items: [
                {
                    text: 'MongoDB教程',
                    link: '/FullStack/DataBase/Mongodb',
                },
                {
                    text: 'Redis教程',
                    link: '/FullStack/DataBase/Redis',
                },
            ],
        },
        {
            text: 'Node.js开发框架',
            collapsible: true,
            items: [
                {
                    text: 'Express',
                    link: '/FullStack/WebDev/Express',
                },
                {
                    text: 'Koa',
                    link: '/FullStack/WebDev/Koa',
                },
                {
                    text: 'Nest',
                    link: '/FullStack/WebDev/Nest',
                },
                {
                    text: 'Egg',
                    link: '/FullStack/WebDev/Egg',
                },
                {
                    text: 'NodeJS框架对比',
                    link: '/FullStack/WebDev/Comparison',
                },
            ],
        },
        {
            text: 'GraphQL API 开发',
            collapsible: true,
            items: [
                {
                    text: 'GraphQL',
                    link: '/FullStack/GraphQL/',
                },
            ],
        },
        {
            text: 'Nginx 配置',
            collapsible: true,
            items: [
                {
                    text: 'Nginx 问题解决',
                    link: '/FullStack/Nginx/',
                }
            ],
        },
    ],
    '/PanClient': [
        {
            text: 'UniApp',
            collapsible: true,
            items: [
                {
                    text: 'uniapp 基础',
                    link: '/PanClient/UniApp/',
                },
                {
                    text: 'uniapp 实战',
                    link: '/PanClient/UniApp/ProjectDemo',
                },
            ],
        },
        {
            text: 'React Native',
            collapsible: true,
            items: [
                {
                    text: 'React Native介绍',
                    link: '/PanClient/RN/',
                },
                {
                    text: 'React Native环境搭建',
                    link: '/PanClient/RN/SetUp',
                },
                {
                    text: 'StyleSheet 语法',
                    link: '/PanClient/RN/StyleSheet',
                },
                {
                    text: '组件和API',
                    link: '/PanClient/RN/Component',
                },
                {
                    text: '路由与导航',
                    link: '/PanClient/RN/Router&Nav',
                },
                {
                    text: '架构原理',
                    link: '/PanClient/RN/Architecture',
                },
                {
                    text: 'RN 项目实践',
                    link: '/PanClient/RN/ProjectDemo',
                },
                {
                    text: '杂记',
                    link: '/PanClient/RN/RandomRecord',
                },
            ],
        },
        {
            text: 'Flutter',
            collapsible: true,
            items: [
                {
                    text: '框架设计与实现',
                    link: '/PanClient/Flutter/WebCli',
                },
            ],
        },
        {
            text: 'Electron',
            collapsible: true,
            items: [
                {
                    text: '框架设计与实现',
                    link: '/PanClient/Electron/WebCli',
                },
            ],
        },
    ],
    '/ProgramTopics': [
        {
            text: 'Micro Frontend',
            collapsible: true,
            items: [
                {
                    text: '框架设计与实现',
                    link: '/ProgramTopics/MicroFrontend/WebCli',
                },
            ],
        },
        {
            text: 'Test Automation',
            collapsible: true,
            items: [
                {
                    text: '框架设计与实现',
                    link: '/ProgramTopics/TestAutomation/WebCli',
                },
            ],
        },
        {
            text: 'Data Visualization',
            collapsible: true,
            items: [
                {
                    text: '框架设计与实现',
                    link: '/ProgramTopics/DataVisualization/WebCli',
                },
            ],
        },
        {
            text: 'Serverless',
            collapsible: true,
            items: [
                {
                    text: '框架设计与实现',
                    link: '/ProgramTopics/Serverless/WebCli',
                },
            ],
        },
        {
            text: 'BusinessScene',
            collapsible: true,
            items: [
                {
                    text: '登录功能',
                    link: '/ProgramTopics/BusinessScene/Login',
                },
                {
                    text: '懒加载',
                    link: '/ProgramTopics/BusinessScene/Lazy',
                },
                {
                    text: '刷新与加载',
                    link: '/ProgramTopics/BusinessScene/Refresh',
                },
                {
                    text: '用户体验优化',
                    link: '/ProgramTopics/BusinessScene/Experience',
                },
            ],
        },
        {
            text: 'InterviewBible',
            collapsible: true,
            items: [
                {
                    text: '面试准备',
                    link: '/ProgramTopics/InterviewBible/',
                },
                {
                    text: '自检清单',
                    link: '/ProgramTopics/InterviewBible/Check',
                },
            ],
        },
    ],
};
