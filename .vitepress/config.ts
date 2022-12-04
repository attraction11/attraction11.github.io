import { defineConfig } from 'vitepress';

import { NavItemList } from './NavItems';
import NotesNavItems from './NotesNavItems';
import { SideBarList } from './SideBar';

NavItemList.push(NotesNavItems);

export default defineConfig({
    base: '/',
    head: [
        [
            'link', // 设置 favicon.ico，注意图片放在 public 文件夹下
            { rel: 'icon', href: 'docs-logo.png' },
        ],
    ],
    title: 'Attraction11',
    description: '个人博客',
    markdown: {
        theme: {
            light: 'vitesse-light',
            dark: 'vitesse-dark',
        },
    },
    themeConfig: {
        // 文档标题
        siteTitle: 'Attraction11',
        // 文档LOGO
        logo: '/docs-logo.png',
        // 顶部栏导航栏
        nav: NavItemList,
        // 顶部右侧相关社交账号栏
        socialLinks: [
            { icon: 'github', link: 'https://github.com/attraction11' },
        ],
        // 左侧侧边栏
        sidebar: SideBarList,
        footer: {
            message: 'Released under the MIT License.',
            copyright: 'Copyright © 2022-present Attraction11',
        },
    },
});
