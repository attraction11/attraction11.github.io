import { DefaultTheme } from 'vitepress';

export const SideBarList: DefaultTheme.Sidebar = {
    '/JavaScript/': [
        {
            text: 'HTML&CSS',
            collapsible: true, // 是否开启折叠
            items: [
                {
                    text: '概述',
                    link: '/JavaScript/HTML&CSS/',
                },
                {
                    text: '布局',
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
                    text: '杂记',
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
            ],
        },
        {
            text: 'JS异步编程',
            collapsible: true,
            items: [
                {
                    text: '基础语法',
                    link: '/JavaScript/Asynchronous/',
                },
                {
                    text: '工具类型',
                    link: '/JavaScript/Asynchronous/ToolType',
                },
            ],
        },
        {
            text: 'ES新特性',
            collapsible: true,
            items: [
                {
                    text: 'Vue2相关语法',
                    link: '/JavaScript/ESFeatures/Vue2',
                },
                {
                    text: 'Vue3相关语法',
                    link: '/JavaScript/ESFeatures/Vue3',
                },
                {
                    text: 'Vue3+TSX语法写法总结',
                    link: '/JavaScript/ESFeatures/Vue3Tsx.md',
                },
                {
                    text: '杂记',
                    link: '/JavaScript/ESFeatures/RandomRecord.md',
                },
            ],
        },
        {
            text: 'TypeScript语言',
            collapsible: true,
            items: [
                {
                    text: 'React',
                    link: '/JavaScript/TypeScript/React',
                },
                {
                    text: 'React Router',
                    link: '/JavaScript/TypeScript/ReactRouter',
                },
                {
                    text: 'Redux',
                    link: '/JavaScript/TypeScript/Redux',
                },
                {
                    text: 'ReactRedux',
                    link: '/JavaScript/TypeScript/ReactRedux',
                },
                {
                    text: 'ReactHooks',
                    link: '/JavaScript/TypeScript/ReactHooks',
                },
                {
                    text: 'NextJS',
                    link: '/JavaScript/TypeScript/NextJS',
                },
            ],
        },
        {
            text: 'JavaScript性能优化',
            collapsible: true,
            items: [
                {
                    text: '基础语法',
                    link: '/JavaScript/Performance/',
                },
                {
                    text: '工具类型',
                    link: '/JavaScript/Performance/ToolType',
                },
            ],
        },
    ],
    '/Engineering': [
        {
            text: 'Engineering',
            collapsible: true,
            items: [
                {
                    text: '基本使用',
                    link: '/Engineering/',
                },
                {
                    text: '环境变量配置',
                    link: '/Engineering/Changesets',
                },
                {
                    text: '服务常用配置',
                    link: '/Engineering/CodeFormat',
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
                    text: '第一篇：框架设计与实现',
                    link: '/Framework/Vue/Vue2',
                },
                {
                    text: '第二篇：响应式系统',
                    link: '/Framework/Vue/Vue3',
                },
            ],
        },
        {
            text: 'React',
            collapsible: true,
            items: [
                {
                    text: '第一篇：框架设计与实现',
                    link: '/Framework/React/React',
                },
                {
                    text: '第二篇：响应式系统',
                    link: '/Framework/React/ReactHooks',
                },
            ],
        },
    ],
    '/FullStack': [
        {
            text: 'Node',
            collapsible: true,
            items: [
                {
                    text: '第一篇：框架设计与实现',
                    link: '/Framework/Node/WebCli',
                },
            ],
        },
    ],
    '/PanClient': [
        {
            text: 'React Native',
            collapsible: true,
            items: [
                {
                    text: '第一篇：框架设计与实现',
                    link: '/Framework/RN/WebCli',
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
                    text: '第一篇：框架设计与实现',
                    link: '/Framework/MicroFrontend/WebCli',
                },
            ],
        },
    ],
};
