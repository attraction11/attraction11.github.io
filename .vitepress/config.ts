import { defineConfig } from 'vitepress';

import { NavItemList } from './NavItems';
import NotesNavItems from './NotesNavItems';
import { SideBarList } from './SideBar';

NavItemList.push(NotesNavItems);

export default defineConfig({
    base: '/',
    title: 'Growth Record',
    description: '个人博客',
    markdown: {
        theme: {
            light: 'vitesse-light',
            dark: 'vitesse-dark',
        },
    },
    themeConfig: {
        // 文档标题
        siteTitle: 'Growth Record',
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
