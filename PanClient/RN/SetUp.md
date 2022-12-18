# React Native 环境搭建

## 基础环境搭建

-   安装 Node.js 版本>=12
-   安装 yarn: npm i yarn -g
-   安装 RN 脚手架：npm i raect-native-cli -g

## 搭建安卓环境

-   安装 Java JDK
    -   下载 JDK （Java SE Development Kit）
        -   https://www.oracle.com/java/technologies/javase/javase-jdk8-downloads.html
    -   JDK 的版本必须是 1.8（1.8 版本，官方也直接称 8 版本）
        -   目前不支持高于 1.8 的 JDK 版本
    -   下载时要求登陆（请先注册 Oracle 账号）
    -   安装 JDK（一直“下一步”）
        -   命令行中，输入 java ＋ version，验证安装是否成功
-   安装 Android Studio
    -   下载 Android Studio
        -   https://developer.android.com/studio/index. html
    -   安装 Android Studio（一直“下一步”）
    -   启动 Android Studio
        -   初次启动，需要安装组件（组件约 2 GB，安装后占用空间约 8 GB）
        -   安装组件的过程巨长巨长巨长，要有耐心
    -   创建项目
        -   安装 Android JDK
        -   配置环境变量

## 安装 Android SDK

-   Android SDK 是针对安卓开发的套件
-   虽然 Android Studio 默认会安装最新版本的 Android SDK,但是，目前编译 React Native 0.70 应用需要的是 Android 12 （S）版本的 SDK
-   打开 Android Studio，在菜单 Tools 下找到＂SDK Manager

![image](./images/image5.png)

## 配置环境变量

-   打开 Android Studio，点击菜单 Tools→SDK Manager，找到 Appearance & Behavior →System Settings → Android SDK 查看 sdk 地址

![image](./images/image6.png)

-   配置跟 ANDROID_HOME 相关的环境变量（将平台工具添加到路径）

![image](./images/image7.png)

## 创建一个新的应用程序

-   React Native 有一个内置的命令行界面，你可以用它来生成一个新项目。npx 您无需使用 Node.js 附带的全局安装任何东西即可访问它。让我们创建一个名为“AwesomeProject”的新 React Native 项目

```js
npx react-native init AwesomeProject
```

-   使用特定版本或模板,使用自定义 React Native 模板（例如 TypeScript）

```js
npx react-native init AwesomeProject --version X.XX.X
npx react-native init AwesomeTSProject --template react-native-template-typescript
```
