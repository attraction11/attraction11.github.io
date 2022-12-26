---
outline: deep
---

# 架构原理

## 简述

为了更好的理解 React Native，我们需要了解 RN 的架构原理。这里主要介绍两个内容

-   现有架构: 当前 RN 正在使用的架构
-   新架构: 2018 年 6 月，Facebook 推出了 RN 的重构计划,下一代 RN 的架构原理

## 现有架构

#### 架构模型

基本架构模型如下：

-   Native 是原生部分，例如：IOS 原生或 Android 原生
-   JS 端主要是 React 语法
-   Bridge 用于 Native 和 JS 的通信（由于 Native 和 JS 相对独立，彼此通信是通过桥接器-Bridge 来实现）

详细一点的架构模型：
![image](./images/image26.png)

-   最上层提供类 React 支持，运行在 JSC（JS Core 运行引擎） 提供的 JavaScript 运行时环境中。
-   Bridge 层将 JavaScript 与 Native 原生连接起来。
    -   Shadow Tree 用于定义 UI 效果及交互功能
    -   Native Modules 提供 Native 功能（比如：蓝牙）
-   二者之间通过 JSON 消息相互通信（异步）

#### 线程模型

-   JS 线程：JS 代码的执行线程，将源码通过 Metro 打包后生成 bundle 文件，传给 JS 引擎进行解析。
-   Main 线程（UI 线程、原生线程、主线程）：主要负责原生渲染（Native UI）和调用原生模块（Native Modules）
-   Shadow 线程（Layout 线程）
    -   创建 Shadow Tree 来模拟 React 结构树（类似虚拟 DOM）
    -   再由 Yoga 引擎将 Flexbox 等样式，解析成原生平台的布局方式

> RN 使用 Flexbox 布局，但是原生是不支持，Yoga 用于将 Flexbox 布局转化为原生平台的布局方式。

#### 渲染机制

-   JS 线程将视图信息（结构、样式、属性等）传递给 Shadow 线程
-   Shadow 线程创建出用于布局计算的 Shadow Tree,布局计算好之后，再将完整的视图信息（宽高、位置等）传递给主线程。
-   Main 线程据此创建 Native View（UI）

![image](./images/image27.png)
也可以通过下图，来理解渲染过程：
![image](./images/image28.png)
解析：

-   点击启动 App 之后，原生会触发一个事件调用 JS（此阶段会准备 React 相关的结构树）
-   JS 线程会将结构树发给 Shadow 线程（Layout 线程）。
-   Shadow 线程会计算样式，并将样式添加到 React 结构树中，并最终生成一个新的 Shadow Tree。
-   Shadow 线程会将新的 Shadow Tree 放到渲染队列当中，并最终传给主线程（UI 线程）。
-   Main 线程做最终的计算，将 Flexbox 布局转化为原生平台的布局方式。

#### 线程间通信

![image](./images/image30.png)
解析：

-   首先点击了 App 中的菜单，触发了 Main 线程。
-   Main 线程接收到事件后，会收集相关的数据，然后把数据以 JSON 的方式传递给 Bridge。
-   Bridge 再将数据以 JSON 的方式传递给 JS 线程，JS 线程会做出响应以 JSON 的方式返给 Bridge，最终传递给 Main 线程。
-   如果涉及 UI 的渲染，Bridge 拿到的内容，还会传递给 Shadow 线程。Shadow 线程通过各种计算生成 Shadow Tree 传递给 Main 线程。Main 线程再根据 Shadow Tree 做最终的渲染。
-   如果涉及调用原生模块的调用（比如：蓝牙），调用原生模块时也有响应的返回信息。通过 Bridge 再将返回信息传递给 Main 线程。
-   Bridge 具有 3 个特点：Async(异步)、Serialized(序列化)、Batched(批量处理消息，提高 Bridge 沟通性能)

#### 启动过程

![image](./images/image31.png)
解析：

-   首先 React
