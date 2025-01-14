import { DefaultTheme } from 'vitepress';

export const NavItemList: DefaultTheme.NavItem[] = [
    {
        text: '前端基础',
        items: [
            {
                text: 'HTML与CSS',
                link: '/JavaScript/HTMLCSS/Index',
            },
            {
                text: '函数式编程',
                link: '/JavaScript/Functional/',
            },
            {
                text: 'JS核心原理',
                link: '/JavaScript/JSCore/',
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
                text: '性能优化',
                link: '/JavaScript/Performance/',
            },
            {
                text: '数据结构与算法',
                link: '/JavaScript/LeetCode/',
            },
            {
                text: '网络与安全',
                link: '/JavaScript/WebSafety/',
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
                link: '/Framework/Vue/Introduce',
            },
            {
                text: 'React',
                link: '/Framework/React/React',
            },
            {
                text: 'Render',
                link: '/Framework/Render/ServeRender',
            },
            {
                text: 'StaticSite',
                link: '/Framework/StaticSite/Gatsby',
            },
        ],
    },
    {
        text: '全栈开发',
        items: [
            {
                text: 'Node.js 编程',
                link: '/FullStack/Node/Introduce',
            },
            {
                text: 'Nest.js 应用',
                link: '/FullStack/Nest/Introduce',
            },
            {
                text: 'Redis 应用',
                link: '/FullStack/Redis/Introduce',
            },
            {
                text: 'MongoDB 应用',
                link: '/FullStack/MongoDB/Introduce',
            },
            {
                text: 'GraphQL API 开发',
                link: '/FullStack/GraphQL/',
            },
            {
                text: 'Nginx 配置',
                link: '/FullStack/Nginx/',
            },
        ],
    },
    {
        text: '泛客户端开发',
        items: [
            {
                text: 'UniApp',
                link: '/PanClient/UniApp/',
            },
            {
                text: 'React Native',
                link: '/PanClient/RN/',
            },
            {
                text: 'Electron',
                link: '/PanClient/Electron/',
            },
            {
                text: 'AIGC',
                link: '/PanClient/AIGC/',
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
            {
                text: 'Business Scene',
                link: '/ProgramTopics/BusinessScene/Login',
            }, 
            {
                text: 'Interview Bible',
                link: '/ProgramTopics/InterviewBible/',
            }, 
        ],
    },
    // {
    //     text: '宝藏网站',
    //     link: '/Sites',
    // },
];
