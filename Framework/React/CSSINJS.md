# CSS-IN-JSS解决方案


## 一、为什么会有CSS-IN-JS 
- `CSS-IN-JS`: 集成 CSS 代码在 JavaScript 文件, 以前编写前端代码是以页面为单位的，有`HTML`、`CSS`、`JS`三者分离。但现代前端是以组件为单位开发页面的，因此更加低耦合、高内聚的组件更依赖只应用于该组件的样式。由于`CSS`没有作用域的概念，因此可以采用`JS`的作用域模拟`CSS`的作用域。
- `CSS-IN-JS` 是 `WEB` 项目中将 `CSS` 代码捆绑在 `JavaScript` 代码中的解决方案. 这种方案旨在解决 `CSS` 的局限性, 例如缺乏动态功能, 作用域和可移植性.

## 二、CSS-IN-JS 介绍
1. 优点
- 让 `CSS` 代码拥有独**立的作用域**, 阻止 `CSS` 代码泄露到组件外部, 防止样式冲突.
- 让组件更具**可移植性**, 实现开箱即用, 轻松创建松耦合的应用程序
- 让组件更具**可重用性**, 只需编写一次即可, 可以在任何地方运行. 不仅可以在同一应用程序中重用组件, 而且可以在使用相同框架构建的其他应用程序中重用组件.
- **让样式具有动态功能**, 可以将复杂的逻辑应用于样式规则, 如果要创建需要动态功能的复杂`UI`, 它是理想的解决方案.

2. 缺点
- 为项目增加了额外的复杂性.
- 自动生成的选择器大大降低了代码的可读性

## 三、Emotion库
1. `Emotion` 介绍
`Emotion` 是一个旨在使用 `JavaScript` 编写 `CSS` 样式的库.  
` npm install @emotion/core @emotion/styled `
2. `css`属性支持
- JSX Pragma (方案一)
通知 babel, 不再需要将 jsx 语法转换为 React.createElement 方法, 而是需要转换为 jsx 方法.

![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/2c6ed27c725f4d7ab333dee25f4ab6f5~tplv-k3u1fbpfcp-watermark.image?)
- Babel Preset（方案二）
先`npm run eject`,后在 package.json 文件中找到 babel 属性, 加入如下内容：

![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/8d7075d615c545018a77ed8a91d88b93~tplv-k3u1fbpfcp-watermark.image?)
3. css方法
- String Styles

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/49d2183e6db649e6b408eeb7ff1b0fad~tplv-k3u1fbpfcp-watermark.image?)
- Object Styles

![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/bb7005d146a3421292f672bc605af6c2~tplv-k3u1fbpfcp-watermark.image?)
4. css 属性优先级  
props 对象中的 css 属性优先级高于组件内部的 css 属性. 在调用组件时可以在覆盖组件默认样式.

5. Styled Components 样式化组件  
样式化组件就是用来构建用户界面的，是 emotion 库提供的另一种为元素添加样式的方式
- 创建样式化组件

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a73c45e50efc47c5802e896692f4fbd8~tplv-k3u1fbpfcp-watermark.image?)


