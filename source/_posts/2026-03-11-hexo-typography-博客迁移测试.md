---
title: Hexo + Typography 博客迁移测试
date: 2026-03-11 17:15:00
categories:
  - 技术
  - 博客
tags:
  - Hexo
  - Typography
  - GitHub Pages
  - 博客迁移
---
## 🎯 迁移背景

今天，我决定将我的个人博客从 VitePress 迁移到 Hexo + Typography 主题。主要原因有：

1. **UI风格偏好**：被 [polebug.github.io](https://polebug.github.io) 的简洁美观界面所吸引
2. **主题成熟度**：Typography 主题经过时间考验，社区支持良好
3. **发布体验**：Hexo 的 Markdown 优先工作流更适合技术博客写作

## 🏗️ 技术架构

### 新博客技术栈
```
前端框架: Hexo 8.0.0
主题: Typography (活版印字)
部署: GitHub Pages
自动化: GitHub Actions 双分支策略
代码高亮: Prism.js
```

### 双分支部署策略
为了实现"推送即发布"的自动化体验，我采用了双分支策略：

- **hexo-src 分支**: 存放 Hexo 源码（Markdown、配置、主题）
- **main 分支**: 存放生成的静态网页（GitHub Pages 自动渲染）

GitHub Actions 工作流会自动监控 hexo-src 分支的变化，云端构建后更新 main 分支。

## 🎨 主题定制

Typography 主题提供了简洁优雅的设计，我进行了一些个性化配置：

### 配置文件分离
```yaml
# _config.yml (Hexo 主配置)
theme: typography
deploy:
  type: git
  repo: https://github.com/attraction11/attraction11.github.io.git
  branch: main

# _config.typography.yml (主题独立配置)
title_primary: "良的博客"
title_secondary: "Typography"
themeStyle: light
showPageCount: true
```

### 主要特性
- ✅ 响应式设计
- ✅ 代码语法高亮
- ✅ 分类和标签系统
- ✅ RSS 订阅支持
- ✅ 夜间模式（可切换）
- ✅ 文章摘要自动生成

## 🔧 遇到的问题与解决方案

### 1. 主题依赖兼容性
Typography 主题较老，与最新 Node.js 版本存在兼容性问题。

**解决方案**: 使用 `--legacy-peer-deps` 标志安装依赖，避免版本冲突。

### 2. GitHub Pages 分支策略
GitHub Pages 对 `username.github.io` 仓库有特殊要求：必须使用 main 分支。

**解决方案**: 采用双分支策略，Actions 从 hexo-src 构建到 main。

### 3. 代码高亮配置
Hexo 默认使用 highlight.js，但 Typography 推荐 Prism.js。

**解决方案**: 禁用 highlight.js，启用 hexo-prism-plugin。

## 🚀 本地开发命令

```bash
# 启动本地服务器
hexo server

# 生成静态文件
hexo generate

# 清理并重新生成
hexo clean && hexo generate

# 部署到 GitHub
hexo deploy
```

## 📈 迁移成果

### 已完成
1. ✅ Hexo 基础环境初始化
2. ✅ Typography 主题安装配置
3. ✅ 双分支 GitHub Actions 工作流配置
4. ✅ 基本页面创建（首页、归档、分类、关于）
5. ✅ 代码高亮和插件配置

### 待优化
1. 🔄 评论系统集成（Disqus/LiveRe）
2. 🔄 文章搜索功能
3. 🔄 访问统计添加
4. 🔄 更多个性化样式调整

## 💭 未来计划

1. **内容迁移**: 将原有的 VitePress 文章迁移到 Hexo
2. **性能优化**: 图片懒加载、CDN 加速
3. **功能增强**: 添加文章搜索、暗黑模式切换
4. **SEO 优化**: 更好的搜索引擎友好性

## 🎉 结语

这次迁移让我重新思考了技术博客的工具选择。Hexo + Typography 的组合提供了：

1. **写作友好**: 纯 Markdown 写作，无需担心样式
2. **部署简单**: 一次配置，永久自动化
3. **主题美观**: Typography 的印刷品风格很有质感
4. **社区活跃**: Hexo 生态丰富，问题容易解决

期待在这个新平台上继续分享技术心得！ 🚀

---
*本文是 Hexo 博客的测试文章，用于验证整个迁移流程的工作情况。*