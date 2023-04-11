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
                    text: 'JS数据类型',
                    link: '/JavaScript/JSCore/',
                },
                {
                    text: '实现深浅拷贝',
                    link: '/JavaScript/JSCore/Copy',
                },
                {
                    text: 'JS继承',
                    link: '/JavaScript/JSCore/Inherit',
                },
                {
                    text: '底层逻辑',
                    link: '/JavaScript/JSCore/Call',
                },
                {
                    text: 'JS闭包',
                    link: '/JavaScript/JSCore/Closure',
                },
                {
                    text: 'JSON.stringify',
                    link: '/JavaScript/JSCore/Stringify',
                },
                {
                    text: 'JS 的类数组',
                    link: '/JavaScript/JSCore/ArrayLike',
                },
                {
                    text: '数组扁平化',
                    link: '/JavaScript/JSCore/ArrayFlat',
                },
                {
                    text: '数组排序',
                    link: '/JavaScript/JSCore/ArraySort',
                },
                {
                    text: 'sort排序原理',
                    link: '/JavaScript/JSCore/TheorySort',
                },
                {
                    text: '手写JS数组方法',
                    link: '/JavaScript/JSCore/ArrayCode',
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
            text: '数据结构与算法',
            collapsible: true,
            items: [
                {
                    text: '数据结构',
                    link: '/JavaScript/LeetCode/',
                },
                {
                    text: '数组算法',
                    link: '/JavaScript/LeetCode/Array',
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
                    text: 'Webpack对比',
                    link: '/JavaScript/Engineering/Webpack4V5',
                },
                {
                    text: 'Webpack升级',
                    link: '/JavaScript/Engineering/WebpackToV5',
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
                    text: 'React18+新特性',
                    link: '/Framework/React/React18+新特性',
                },
                {
                    text: 'ReactHooks',
                    link: '/Framework/React/ReactHooks',
                },
                {
                    text: 'VDOM 及 Diff 算法',
                    link: '/Framework/React/ReactDiff',
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
                    text: 'React Router',
                    link: '/Framework/React/ReactRouter',
                },
                {
                    text: 'CSS-IN-JSS解决方案',
                    link: '/Framework/React/CSSINJS',
                },

                {
                    text: 'Q&A',
                    link: '/Framework/React/QA.md',
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
            text: 'Node.js 编程',
            collapsible: true,
            items: [
                {
                    text: 'Node.js介绍',
                    link: '/FullStack/Node/Introduce',
                },
                {
                    text: 'Node.js基础',
                    link: '/FullStack/Node/NodeBase',
                },
                {
                    text: '模块系统',
                    link: '/FullStack/Node/Module',
                },
                {
                    text: '文件操作',
                    link: '/FullStack/Node/FileOpt',
                },
                {
                    text: '会话保持',
                    link: '/FullStack/Node/KeepSession',
                },
                {
                    text: '核心模块',
                    link: '/FullStack/Node/NodeCore',
                },
                {
                    text: '网络通信',
                    link: '/FullStack/Node/NodeMessage',
                },
                {
                    text: '应用开发',
                    link: '/FullStack/Node/NodeDev',
                },
                {
                    text: 'Express 开发',
                    link: '/FullStack/Node/ExpressDev',
                },
                {
                    text: 'Koa 开发',
                    link: '/FullStack/Node/KoaDev',
                },
                {
                    text: 'Egg 开发',
                    link: '/FullStack/Node/EggDev',
                },
                {
                    text: 'Node.js框架对比',
                    link: '/FullStack/Node/Comparison',
                },
                {
                    text: 'QA问答',
                    link: '/FullStack/Node/NodeQA',
                },
            ],
        },
        {
            text: 'Nest.js 应用',
            collapsible: true,
            items: [
                {
                    text: 'Nest.js 简介',
                    link: '/FullStack/Nest/Introduce',
                },
                {
                    text: 'Nest.js 基本实践',
                    link: '/FullStack/Nest/NestLesson',
                },
                {
                    text: 'Nest.js 开发',
                    link: '/FullStack/Nest/NestDev',
                },
            ],
        },
        {
            text: 'Redis 应用',
            collapsible: true,
            items: [
                {
                    text: 'Redis 简介',
                    link: '/FullStack/Redis/Introduce',
                },
                {
                    text: 'Redis 安装',
                    link: '/FullStack/Redis/SetUp',
                },
                {
                    text: 'Redis 配置',
                    link: '/FullStack/Redis/Config',
                },
                {
                    text: 'Redis 多数据库',
                    link: '/FullStack/Redis/MoreDB',
                },
                {
                    text: 'Redis 操作命令',
                    link: '/FullStack/Redis/CRUD',
                },
                {
                    text: 'Redis 过期时间',
                    link: '/FullStack/Redis/Expire',
                },
                {
                    text: 'Redis 事务',
                    link: '/FullStack/Redis/Multi',
                },
                {
                    text: 'Redis 持久化',
                    link: '/FullStack/Redis/Persistence',
                },
                {
                    text: 'Redis 图形管理软件',
                    link: '/FullStack/Redis/SoftAdmin',
                },
                {
                    text: '客户端操作 Redis',
                    link: '/FullStack/Redis/Client',
                },
                {
                    text: 'Redis 集群',
                    link: '/FullStack/Redis/Cluster',
                },
                {
                    text: 'Redis 设置远程连接',
                    link: '/FullStack/Redis/Connect',
                },
            ],
        },
        {
            text: 'MongoDB 应用',
            collapsible: true,
            items: [
                {
                    text: 'MongoDB 介绍',
                    link: '/FullStack/MongoDB/Introduce',
                },
            ],
        },
        {
            text: 'GraphQL API 开发',
            collapsible: true,
            items: [
                {
                    text: 'GraphQL 简介',
                    link: '/FullStack/GraphQL/',
                },
                {
                    text: 'GraphQL 入门',
                    link: '/FullStack/GraphQL/First',
                },
                {
                    text: 'GraphQL 模式和类型',
                    link: '/FullStack/GraphQL/Type',
                },
                {
                    text: 'Apollo GraphQL',
                    link: '/FullStack/GraphQL/Apollo',
                },
                {
                    text: 'QA 问答',
                    link: '/FullStack/GraphQL/QA',
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
        {
            text: 'Docker 使用',
            collapsible: true,
            items: [
                {
                    text: 'Docker 介绍',
                    link: '/FullStack/Docker/Introduce',
                },
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
            text: 'Electron',
            collapsible: true,
            items: [
                {
                    text: 'Electron基础',
                    link: '/PanClient/Electron/',
                },
                {
                    text: 'Electron应用',
                    link: '/PanClient/Electron/Application',
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
                    text: '简介',
                    link: '/ProgramTopics/MicroFrontend/WebCli',
                },
            ],
        },
        {
            text: 'Test Automation',
            collapsible: true,
            items: [
                {
                    text: '简介',
                    link: '/ProgramTopics/TestAutomation/WebCli',
                },
            ],
        },
        {
            text: 'Data Visualization',
            collapsible: true,
            items: [
                {
                    text: '简介',
                    link: '/ProgramTopics/DataVisualization/WebCli',
                },
            ],
        },
        {
            text: 'Serverless',
            collapsible: true,
            items: [
                {
                    text: '简介',
                    link: '/ProgramTopics/Serverless/WebCli',
                },
            ],
        },
        {
            text: 'Business Scene',
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
            text: 'Interview Bible',
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
