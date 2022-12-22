# 杂记

## React Native Directory

[React Native Directory](https://reactnative.directory/)是一个可搜索的库数据库，专门为 React Native 构建。

## React Native 构建工具

-   使用官方 [TypeScript 模板](https://github.com/react-native-community/react-native-template-typescript)

```js
npx react-native init MyApp --template react-native-template-typescript
```

> 注意：您的系统上可能安装了旧版本 react-native 或 react-native-cli 全局安装。要解决此问题，请尝试卸载 CLI：
> `npm uninstall -g react-native-cli` 要么 `yarn global remove react-native-cli`
> React Native 版本升级：`npx react-native upgrade`

-   使用维护 TypeScript 模板的 [Expo](https://expo.io/)

```js
npx create-expo-app --template
```

-   使用[Ignite](https://github.com/infinitered/ignite)，它也有一个 TypeScript 模板

```js
npx ignite-cli@latest new PizzaApp
```

> [关于为何选择使用 Expo?](https://medium.com/@adhithiravi/building-react-native-apps-expo-or-not-d49770d1f5b8)  
> 30 分钟构建一个应用程序。https://www.youtube.com/watch?v=OgiFKMd_TeY
