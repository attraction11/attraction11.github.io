import { DefaultTheme } from 'vitepress';

export const NavItemList: DefaultTheme.NavItem[] = [
    {
        text: '前端基础',
        items: [
            {
                text: 'HTML&CSS',
                link: '/JavaScript/HTML&CSS/',
            },
            {
                text: '函数式编程',
                link: '/JavaScript/Functional/',
            },
            {
                text: 'JS异步编程',
                link: '/JavaScript/Asynchronous/',
            },
            {
                text: 'ES新特性',
                link: '/JavaScript/ESFeatures/',
            },
            {
                text: 'TS语言',
                link: '/JavaScript/TypeScript/',
            },
            {
                text: 'JS性能优化',
                link: '/JavaScript/Performance/',
            },
            {
                text: '项目工程化',
                link: '/JavaScript/Engineering/',
            },
            {
                text: '杂记',
                link: '/JavaScript/Module/',
            },
        ],
    },
    {
        text: '前端框架',
        items: [
            {
                text: 'Vue',
                link: '/Framework/Vue/Vue2',
            },
            {
                text: 'React',
                link: '/Framework/React/React',
            },
            {
                text: 'Nuxt',
                link: '/Framework/Nuxt/serveRender',
            },
            {
                text: 'Next',
                link: '/Framework/Next/NextJS',
            },
            {
                text: '杂记',
                link: '/Framework/Module/',
            },
        ],
    },
    {
        text: '全栈开发',
        items: [
            {
                text: 'Node',
                link: '/FullStack/Node/NodeBase',
            },
            {
                text: 'NoSQL数据库',
                link: '/FullStack/DataBase/Mongodb',
            },
            {
                text: 'Web开发框架',
                link: '/FullStack/WebDev/Express',
            },
            {
                text: 'GraphQL API 开发',
                link: '/FullStack/GraphQL/',
            },
        ],
    },
    {
        text: '泛客户端开发',
        items: [
            {
                text: 'React Native',
                link: '/PanClient/RN/',
            },
            {
                text: 'Flutter',
                link: '/PanClient/RN/WebCli',
            },
            {
                text: 'Electron',
                link: '/PanClient/Electron/WebCli',
            },
        ],
    },
    {
        text: '技术方案',
        items: [
            {
                text: 'Micro Frontend',
                link: '/ProgramTopics/MicroFrontend/WebCli',
            },
            {
                text: 'Test Automation',
                link: '/ProgramTopics/TestAutomation/WebCli',
            },
            {
                text: 'Data Visualization',
                link: '/ProgramTopics/DataVisualization/WebCli',
            },
            {
                text: 'Serverless',
                link: '/ProgramTopics/Serverless/WebCli',
            },
        ],
    },
    {
        text: '宝藏网站',
        link: '/Sites',
    },
];
