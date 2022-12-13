import { DefaultTheme } from "vitepress";

export const NavItemList: DefaultTheme.NavItem[] = [
    {
        text: "前端基础",
        items: [
            {
                text: "HTML&CSS",
                link: "/JavaScript/HTML&CSS/",
            },
            {
                text: "函数式编程",
                link: "/JavaScript/Functional/",
            },
            {
                text: "JS异步编程",
                link: "/JavaScript/Asynchronous/",
            },
            {
                text: "ES新特性",
                link: "/JavaScript/ESFeatures/",
            },
            {
                text: "TS语言",
                link: "/JavaScript/TypeScript/",
            },
            {
                text: "JS性能优化",
                link: "/JavaScript/Performance/",
            },
            {
                text: "项目工程化",
                link: "/JavaScript/Engineering/",
            },
            {
                text: "模块检测",
                link: "/JavaScript/Detection/",
            },
        ],
    },
    {
        text: "前端框架",
        items: [
            {
                text: "Vue",
                link: "/Framework/Vue/Vue3",
            },
            {
                text: "React",
                link: "/Framework/React/React",
            },
            {
                text: "Nuxt",
                link: "/Framework/Nuxt/Nuxt",
            },
        ],
    },
    {
        text: "全栈开发",
        items: [
            {
                text: "Node",
                link: "/FullStack/Node/WebCli",
            },
            {
                text: "Nest",
                link: "/FullStack/Nest/WebCli",
            },
        ],
    },
    {
        text: "泛客户端开发",
        items: [
            {
                text: "React Native",
                link: "/PanClient/RN/WebCli",
            },
            {
                text: "Flutter",
                link: "/PanClient/RN/WebCli",
            },
        ],
    },
    {
        text: "技术方案专题",
        items: [
            {
                text: "Micro Frontend",
                link: "/ProgramTopics/MicroFrontend/WebCli",
            },
        ],
    },
    {
        text: "宝藏网站",
        link: "/Sites",
    },
];
