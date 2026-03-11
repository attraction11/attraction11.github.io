---
title: "vibe coding初体验：从零到上线打地鼠游戏"
date: 2026-03-11
description: "通过OpenClaw + OpenCode + GitHub + Pages工具链，25分钟内完成从需求到部署的全流程vibe coding项目实践。"
categories:
  - VibeCoding
tags:
  - GitHub
  - OpenClaw
  - VibeCoding
---

## 什么是vibe coding？ \#

vibe coding是一种全新的开发模式： **用自然语言描述需求，AI助手理解并协调多个工具，自动完成从需求分析、代码生成到部署上线的全流程** 。

今天，我完成了第一个vibe coding项目： **创建一个HTML5打地鼠游戏并部署到GitHub Pages** 。

## 项目背景 \#

  *  **需求** ：创建一个打地鼠游戏（非贪吃蛇）
  *  **目标** ：验证vibe coding工作流的可行性
  *  **时间** ：从需求到上线约25分钟
  *  **工具链** ：OpenClaw + OpenCode + GitHub + GitHub Pages

## 工具链配置 \#

### 1\. Ofox.ai统一模型网关 \#

由于OpenCode需要AI服务API密钥，我们配置了Ofox.ai作为统一网关：

  *  **API Key** ：通过Ofox.ai访问100+模型
  *  **默认模型** ：`deepseek/deepseek-v3.2`
  *  **备用模型** ：Claude Sonnet 4.5, Claude Haiku 4.5

### 2\. OpenCode代码生成 \#

  *  **版本** ：1.2.17
  *  **提示词** ：详细描述打地鼠游戏功能需求
  *  **输出** ：生成30KB的`index.html`，包含完整HTML/CSS/JS

### 3\. GitHub仓库管理 \#

  *  **仓库** ：<https://github.com/attraction11/whack-a-mole-game>
  *  **隐私保护** ：使用GitHub隐私邮箱提交
  *  **代码推送** ：通过GitHub API创建仓库并推送代码

### 4\. 部署方案 \#

  *  **首选** ：Vercel（遇到网络问题）
  *  **实际使用** ：GitHub Pages（更可靠）
  *  **访问URL** ：<https://attraction11.github.io/whack-a-mole-game>

## 实施过程 \#

### 阶段1：需求分析（2分钟） \#

通过OpenClaw分析需求，明确游戏功能：

  * 3x3地鼠洞网格
  * 60秒倒计时计分系统
  * 开始/暂停/重置控制
  * 响应式设计
  * Web Audio音效

### 阶段2：代码生成（5分钟） \#

使用OpenCode生成完整游戏代码：

bash
[code]
    opencode run "创建一个HTML5打地鼠游戏，包含以下功能：..."
    
[/code]
[code]
    opencode run "创建一个HTML5打地鼠游戏，包含以下功能：..."
    
[/code]

生成`index.html`文件，包含所有游戏逻辑。

### 阶段3：GitHub配置（10分钟） \#

  1. 创建GitHub仓库（通过API）
  2. 配置Git本地仓库
  3. 使用隐私邮箱提交代码
  4. 推送代码到GitHub

### 阶段4：部署上线（5分钟） \#

  1. 配置GitHub Pages
  2. 等待构建完成
  3. 测试访问
  4. 纠正URL格式（无`.html`后缀）

### 阶段5：测试验证（3分钟） \#

  1. 访问游戏URL
  2. 测试所有功能
  3. 确认游戏正常运行

## 遇到的问题和解决方案 \#

### 问题1：OpenCode API密钥缺失 \#

 **解决方案** ：配置Ofox.ai统一网关，提供统一API访问。

### 问题2：GitHub推送认证失败 \#

 **解决方案** ：使用GitHub API直接创建仓库，重新配置Git远程。

### 问题3：Vercel部署卡住 \#

 **解决方案** ：切换到更可靠的GitHub Pages。

### 问题4：URL格式误解 \#

 **解决方案** ：纠正URL格式，GitHub Pages不需要`.html`后缀。

## 关键学习 \#

### 1\. 5分钟汇报规则 \#

在复杂任务中，必须每5分钟汇报进度，保持沟通透明。

### 2\. 备用方案准备 \#

主方案（Vercel）失败时，立即切换到备用方案（GitHub Pages）。

### 3\. 工具链灵活性 \#

根据实际情况调整工具选择，不固执于单一方案。

### 4\. 用户协作效率 \#

及时纠正用户误解（如URL格式），提高整体效率。

## 技术收获 \#

### 1\. 端到端自动化验证 \#

证明了AI助手可以协调多个工具完成完整项目。

### 2\. 隐私保护实践 \#

使用GitHub隐私邮箱保护个人身份。

### 3\. 统一模型管理 \#

通过Ofox.ai管理多个AI模型，降低成本和提高灵活性。

### 4\. 部署策略优化 \#

根据可靠性选择部署平台，GitHub Pages比Vercel更稳定。

## 游戏功能验证 \#

✅ **核心玩法** ：点击地鼠得分  
✅ **计分系统** ：分数显示、最高分记录  
✅ **时间限制** ：60秒倒计时  
✅ **游戏控制** ：开始、暂停、重置  
✅ **响应式设计** ：手机、平板、桌面适配  
✅ **声音效果** ：Web Audio API音效  
✅ **视觉动画** ：地鼠出现/消失动画

## 未来展望 \#

### 短期计划 \#

  1.  **游戏功能增强** ：添加更多关卡和特效
  2.  **部署优化** ：考虑CDN加速
  3.  **文档完善** ：添加详细使用说明

### 长期规划 \#

  1.  **vibe coding常态化** ：应用于日常开发工作
  2.  **工具链扩展** ：集成测试、CI/CD等工具
  3.  **学习计划结合** ：将vibe coding融入Python爬虫学习

## 结论 \#

vibe coding不是未来，而是现在。通过今天的实践，我验证了：

  1.  **可行性** ：AI助手可以完成端到端项目开发
  2.  **效率** ：25分钟从需求到上线
  3.  **质量** ：生成的代码功能完整、结构清晰
  4.  **可靠性** ：GitHub Pages提供稳定访问

 **vibe coding将彻底改变开发方式** ，从"写代码"转变为"描述需求"，让开发者专注于创意而非实现细节。

* * *

 **游戏体验地址** ：<https://attraction11.github.io/whack-a-mole-game>  
 **项目源码** ：<https://github.com/attraction11/whack-a-mole-game>  
 **vibe coding系列** ：本文是VibeCoding系列的第一篇

 _下一篇预告：vibe coding在Python爬虫项目中的应用_
