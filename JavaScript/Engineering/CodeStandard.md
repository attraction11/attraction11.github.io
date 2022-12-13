---
theme: vue-pro
---

## 一、模块化开发

[模块化](https://www.liaoxuefeng.com/wiki/1022910821149312/1023027697415616)开发是当前最重要的前端开发范式。随着前端代码量的激增，可以将不同的代码按照功能或业务划分为不同模块单独去维护，提高开发效率和降低维护成本。模块化只是思想，具体实现需要依赖一些工具。  
模块化的演进过程

#### 1. 文件划分方式

缺点：污染全局作用域、命名冲突问题、无法管理模块依赖关系，模块化完全依靠约定。

#### 2. 命名空间方式

文件划分后，为每个文件提供一个命名空间,虽然减少了命名冲突，但仍存在无法管理模块依赖关系问题

```js
// module a 相关状态数据和功能函数
var moduleA = {
    name: "module-a",
    method1: function () {
        console.log(this.name + "#method1");
    },
    method2: function () {
        console.log(this.name + "#method2");
    },
};
```

#### 3. IIFE 立即执行函数

划分了命名空间，明确了模块的依赖

```js
(function ($) {
    // 依赖变量
    // 函数私有作用域
    var name = "module-a";
    function method1() {
        console.log(name + "#method1");
    }
    function method2() {
        console.log(name + "#method2");
    }
    // 挂载到全局对象，实现了私有成员，仅能在闭包中使用
    window.moduleA = {
        method1: method1,
        method2: method2,
    };
})(jQuery); // 依赖声明
```

#### 4. 模块化规范出现

虽然实现了模块的依赖，但模块的加载仍不受控制。于是就出现了一些模块化标准+模块加载器的规范。  
CommonJS 规范(nodeJS)：以同步模式加载模块，不适合浏览器端使用

-   一个文件就是一个模块
-   每个模块都有单独的作用域
-   通过 module.exports 导出成员
-   通过 require 函数载入模块
    AMD(Asynchronous Module Definition)异步模块定义（Require.js）: 以异步加载模块，同时可以管理模块依赖，适合浏览器端使用（前端模块化演进中妥协的方案）
-   目前绝大多数的第三方库都支持 AMD 规范
-   AMD 的使用相对复杂（除了业务代码，还要编写一个模块定义与模块依赖相关的代码）
-   模块划分过于细致后，模块文件的请求频繁且多，导致页面效率底下

```js
// 定义一个模块，'moduleA'为模块名，['jquery', 'moduleB']为依赖项，$, moduleB为依赖项导出成员
define("moduleA", ["jquery", "moduleB"], function ($, moduleB) {
    return {
        foo: function () {
            $("body").animate({ margin: "100px" });
            moduleB();
        },
    };
});
```

```js
// 加载一个模块（相当于自动创建一个script标签加载对应的代码）
require(["./moduleA"], function (moduleA) {
    moduleA.foo();
});
```

CMD(Common Module Definition)通用模块定义：类似 CommonJS 规范，但 Require.js 也兼容了

```js
// CMD规范（类似CommonJS规范）
define(function (require, exports, module) {
    // 通过require引入依赖
    var $ = require("jquery");
    // 通过exports或者module.exports对外暴露成员
    module.exports = function () {
        console.log("module 2~");
        $("body").append("<p>module 2</>");
    };
});
```

#### 5. 模块化标准规范

目前的模块化标准已经确定：
![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/dedf04cd7604438697516f643d09ae6b~tplv-k3u1fbpfcp-watermark.image)
ES Modules 是 ES6 中定义的一个标准，因此会存在各种的兼容问题，但随着 webpack 等打包工具的出现已经可以完全兼容使用了。

## 二、ES Modules 标准

#### 1. 基本特性

```html
<!-- 通过给script标签添加type = module的属性，就可以以ES Module 的标准执行其中的JS代码 -->
<script type="module">
    console.log("this is es module");
</script>
<!-- 1、ESM自动采用严格模式，忽略'use strict' -->
<script type="module">
    console.log(this);
</script>
<!-- 2、每一个ES Module都是运行在单独的私有作用域中 -->
<script type="module">
    var foo = 100;
    console.log(foo); // 100
</script>
<script type="module">
    // console.log(foo) // foo is not defined
</script>
<!-- 3、ES Module是通过CORS 的方式请求外部JS模块的，若服务端不支持CORS会出现跨域问题 -->
<!-- <script type="module" src="https://libs.baidu.com/jquery@3.4.1/dist/jquery.min.js"></script> -->
<!-- <script type="module" src="https://unpkg.com/jquery@3.4.1/dist/jquery.min.js"></script> -->
<!-- 4、ES Module的script标签会延迟执行脚本，相当于添加了defer属性，js不会阻塞页面的渲染 -->
<script defer src="demo.js"></script>
<p>需要显示的内容</p>
```

#### 2. ES Modules 模块导入导出用法

```js
// 模块导入   ./app.js
import { default as fooName, hello } from "./module.js";
console.log(fooName);
console.log(hello());

// 模块导出   ./module.js
const foo = "es modules!";
class Person {}
export { foo as default, Person };
```

-   `import`导入文件需要提供完整的路径和后缀名，也可以引用`CDN`地址，使用相对路径的时候`./`不能省略,使用绝对路径`/`的时候是从当前文件夹的根目录寻址的。
-   当仅仅是执行某个模块时，使用`import ./module.js`加载这个模块并执行它，并不提取模块中内容。
-   当导入一个模块的所有成员的时候，可以使用`import * as mod from './module.js`,通过`mod`对象获取模块内的所有成员。
-   当导入模块的路径是动态的时候，可以采用`import('./module.js')`函数，该函数返回的是一个`promise`对象,在`promise`对象的`then`方法中可以拿到模块的所有变量和方法
-   当模块中导出命名变量和匿名变量时，如：`export {name, age}; export default 'default'`导出文件，则在导入文件中可以使用`import {name, age, default as title} from './module.js'`或`import title, {name, age} from './module.js'`

```js
import { name, age } from "./module.js";
console.log(name, age); // jack 17
// 模块向外暴露的变量是只读的
name = "tom";
// 模块向外暴露是引用关系
setTimeout(() => {
    console.log(name, age); // ben 17
}, 1500);
```

#### 3. ES Modules 导入导出成员

一般在模块文件较多的时候，可以在所在文件夹新建一个`index.js`,然后就可以在此文件中导入导出文件。若加载的模块采用默认导出，则在 index.js 中相应模块导入的时候需要进行重命名，如：`export { default as Button } from './button.js'`

```js
// 集中的模块成员导入与导出
// import { Button } from './button.js'
// import { Avartar } from './avatar.js'
// export { Button, Avartar }

export { Button } from "./button.js";
export { Avartar } from "./avatar.js";
```

#### 4. 处理 ES Module 在浏览器环境的兼容(Polyfill)

```html
<script
    nomodule
    src="https://unpkg.com/promise-polyfill@8.1.3/dist/polyfill.min.js"
></script>
<script
    nomodule
    src="https://unpkg.com/browser-es-module-loader@0.4.1/dist/babel-browser-build.js"
></script>
<script
    nomodule
    src="https://unpkg.com/browser-es-module-loader@0.4.1/dist/browser-es-module-loader.js"
></script>
<script type="module">
    import { foo } from "./module.js";
    console.log(foo);
</script>
```

在浏览器环境不支持使用`ES Module`时，需要使用`browser-es-module-loader`处理`ES Module`模式加载的代码。但为了避免在支持使用`ES Module`的浏览器环境中二次执行模块内代码，可以使用`nomodule`。含义是：只有当前浏览器不支持`ES Module`时，采取加载`script`标签引用的`js`文件

#### 5. ES Module 在 node 环境的基本使用及支持情况

支持情况: `node8.5+`之后，内部就已经以实验特性的方式支持`ES Module`  
使用步骤：

-   将文件的扩展名由 `.js` 改为 `.mjs`
-   启动时需要额外添加 `--experimental-modules` 参数,表示启用``ES Module`实验特性

```js
// 我们也可以通过 esm 加载内置模块了
import fs from "fs";
fs.writeFileSync("./foo.txt", "es module working");

// 也可以直接提取模块内的成员，内置模块兼容了 ESM 的提取成员方式
import { writeFileSync } from "fs";
writeFileSync("./bar.txt", "es module working");

// 对于第三方的 NPM 模块也可以通过 esm 加载
import _ from "lodash";
_.camelCase("ES Module");

// 不支持，因为第三方模块都是导出默认成员
// import { camelCase } from 'lodash'
// console.log(camelCase('ES Module'))
```

#### 6. ES Module in Node.js

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/4403e0d59a94406a992b6e0ecdbe729c~tplv-k3u1fbpfcp-watermark.image)
要点一：

-   `ES Modules`中可以导入`CommonJS`模块
-   `CommonJS`中不能导入`ES Modules`模块
-   `CommonJS`中始终只会导出一个默认成员
-   注意`import`不是解构导出对象
    要点二(使用差异)：
    ![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ebbf75d8fa2847ab98e19136fd846a2c~tplv-k3u1fbpfcp-watermark.image)
    要点三(`node12+`新版本)：
-   当在`package.json`中添加`type = module`后，项目中默认使用`ES Module`规范，文件后缀可以以`.js`结尾，但如果想使用`CommonJS`规范时需要将文件后缀名修改为`.cjs`。
    要点四(`node8.5`以前版本)：
-   可以使用`Bable`进行兼容，执行`yarn add @babel/core @babel/node @babel/preset-env --dev`
-   需要`babel`的插件转换，`preset-env`包含了各种插件

## 三、Webpack 与 Rollup 打包工具

#### 1、ES Modules 模块化的弊端

-   存在环境兼容问题
-   模块文件过多，网络请求频繁
-   不仅仅是`JS`，所有的前端资源都需要模块化
    模块化打包工具可以针对整个前端应用进行模块化，目前主流的的打包工具是`Webpack`、`Rollup`

#### 2、webpack 使用

-   `webpack`的工作模式: `node`、`development`、`production`三种
-   `webpack`打包结果运行原理：将所有的模块放到同一个文件中，通过一些基础代码维护模块之间的依赖关系
-   `Loader`是`Webpack`的核心特性，借助`Loader`就可以加载任何类型的资源
-   `webpack`建议在代码中引入任何当前代码需要的资源，即动态导入。因为真正需要资源的不是应用，而是代码。
-   `webpack`的哲学：Javascript 驱动整个前端应用，资源文件动态导入，确保上线资源不缺少，都是必要的。
    启发：关注新事物的思想才是技术水平提升的重点。

1. 文件加载器`file-loader`  
   图解：
   ![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6030c72aa75145b482b9252876333f47~tplv-k3u1fbpfcp-watermark.image)

2. URL 加载器`url-loader`  
   使用要点：小文件使用`Data URLs`,减少请求次数。大文件单独提取存放，提高加载速度(临界大小 10KB)
   图解：`Data URLs`
   ![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/98188da6e7944d0db992c6f21d2054cc~tplv-k3u1fbpfcp-watermark.image)
   例如：  
   文本 url: `data:text/html;charset=UTF-8,<h1>html content</h1>`
   图片 url: `data:image/png;base64,iVBOwYthjDs...SUowEC`

3. 编译加载器`babel-loader`

-   `webpack`只是打包工具
-   加载器可以用来编译转换代码

4. 加载器分类

-   编译转换类：例如`css-loader`将`css`代码转换为`bundle.js`中的一个模块
-   文件操作类：例如`file-loader`将资源文件拷贝到输出目录，并在`bundle.js`中导出文件访问路径。
-   代码检查类：例如`eslint-loader`检验代码的风格，从而使代码质量有所提升。

5. 加载资源的方式

-   遵循`ESModules`标准的`import`声明(`JavaScript`代码加载推荐统一使用此种)

```js
import createHeading from "./heading.js";
import icon from "./icon.png";
import "./main.css";
```

-   遵循`CommonJS`标准的`require`函数

```js
const createHeading = require("./heading.js").default;
const icon = require("./icon.png");
require("./main.css");
```

-   遵循`AMD`标准的`define`函数和`require`函数

```js
// 模块声明
definne(["./heading.js", "./icon.png", "./main.css"], (createHeading, icon) => {
    const heading = createHeading.default();
    const img = new Image();
    img.src = icon;
    document.body.append(heading);
    document.body.append(img);
});
// 模块引入
require(["./heading.js", "./icon.png", "./main.css"], (createHeading, icon) => {
    const heading = createHeading.default();
    const img = new Image();
    img.src = icon;
    document.body.append(heading);
    document.body.append(img);
});
```

-   样式代码中的`@import`指令和`url`函数
-   `HTML`代码中图片标签的`src`属性,`a`标签的`href`属性

```js
{
    test: /.html$/,
    use: {
        loader: 'html-loader',
        options: {
            attrs: ['img:src', 'a:href']
        }
    }
}
```

6. 核心工作原理
   图解：`webpack`通过入口文件遍历整个文件加载书，然后将不同的资源文件交由相应的`loader`加载此模块，最后将结果放到`bundle.js`中,从而实现整个项目的打包，因此`Loader`机制是`webpack`的核心。
   ![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/21f1516c9f014315b7afb0406f7730e5~tplv-k3u1fbpfcp-watermark.image)

7. Loader 的工作原理

-   `wepack`的`Loader`是一个函数，导出的一段`JavaScript`代码。
-   `Loader`负责资源文件从输入到输出的转换
-   对于同一个资源可以依次使用多个`loader`处理

```js
// 自定义Loader
const marked = require("marked");
module.exports = (source) => {
    // console.log(source)
    const html = marked(source);
    // 返回一段js代码
    // return `export default ${JSON.stringify(html)}`
    return html;
};
```

8. 插件机制  
   Loader 目的：专注实现资源模块加载  
   插件目的：增强 webpack 的自动化能力（如：清除文件目录、拷贝静态文件到输出目录）

-   `clean-wabpack-plugin`: 自动清除输出目录插件
-   `html-wabpack-plugin`：自动生成使用`bundle.js`的`HTML`,每个`HtmlWebpackPlugin`负责生成一个`html`入口文件
-   `copy-wabpack-plugin`：文件拷贝功能
    `webpack`的中有许多的钩子，代表着不同的执行阶段，我们可以在钩子上挂载任务扩展`webpack`插件的能力。
    ![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d0994231b18b4d65ac8fbb9f606900d6~tplv-k3u1fbpfcp-watermark.image)
    自定义插件：通过在生命周期的钩子中挂载函数实现扩展

```js
class MyPlugin {
    apply(compiler) {
        console.log("自定义插件");
        // tap方法注册钩子函数（emit是其中一个钩子）
        compiler.hooks.emit.tap("MyPlugin", (compilation) => {
            // compilation可以理解为此次打包的上下文
            for (const name in compilation.assets) {
                if (name.endsWith(".js")) {
                    const contents = compilation.assets[name].source();
                    const withoutComments = contents.replace(
                        /\/\*\*+\*\//g,
                        ""
                    );
                    compilation.assets[name] = {
                        source: () => withoutComments,
                        size: () => withoutComments.length,
                    };
                }
            }
        });
    }
}

module.exports = {
    plugins: [new MyPlugin()],
};
```

9、开发体验优化

-   自动编译 + 代理 API + 自动唤起浏览器 + 自动刷新浏览器 + HMR: `Webpack Dev Server`集成了这些功能
-   其中静态资源的访问：`Webpack Dev Server`配置`devServer: { contentBase: './public' }`
-   配置`Source Map`模式: `eval`-是否使用`eval`执行模块代码；`cheap`-`Source Map`是否包含行信息；`module`-是否能够得到 Loader 处理之前的源代码。开发阶段一般选择`cheap-module-eval-source-map`模式,生产环境一般选择`none`或`nosources-source-map`模式
-   配置 HMR(Hot Module Replacement)模块热替换：`module.hot.accept`
-   `Tree Shaking`: 生产环境默认开启`Tree Shaking`, 开发环境可以通过配置。`Tree Shaking`的前提是通过`ES Modules`的模式组织代码。最新版的`babel-loader`并不会导致`Tree Shaking`失效。

```js
    optimization: { // webpack内部的优化配置
        // usedExports负责标记[枯树叶]
        usedExports: true,
        // minimize负责[摇掉]他们
        minimize: true
    }
```

-   合并模块：尽可能将所有的模块合并输出到一个函数中，既提升了运行效率，又减少了代码体积。该特性又被称为`Scope Hoisting`作用域提升。

```js
    optimization: { // webpack内部的优化配置
        concatenateModules: true,
    }
```

-   标记`sideEffects`(副作用)：模块执行时，除了导出成员之外所作的事情。一般用于 npm 包标记是否有副作用。生产环境默认开启`sideEffects`。
-   `Code Splitting`代码分割：分包、按需加载、模块打包有必要。原因：`http1.1`同域并行请求限制、每次请求有一定的延迟、请求的`Header`浪费带宽流量。方法：多入口打包、动态导入
-   `Multi Entry`多入口打包：适用于多页应用程序，一个页面对应一个打包入口，公共部分单独提取。
-   `Split Chunks`提取公共模块

```js
optimization: {
    // webpack内部的优化配置
    splitChunks: {
        // 自动提取所有公共模块到单独 bundle
        chunks: "all";
    }
}
```

-   `Dynamic Imports`动态导入：需要用到某个模块时，再加载这个模块，动态导入的模块会被自动分包。
-   `Magic Comments`魔法注释：`import(/* webpackChunkName: 'components' */'./posts/posts')`
-   `MiniCssExtractPlugin`提取`CSS`到单独的文件：实现`CSS`模块的按需加载(`CSS`体积超过 150KB 后使用比较合适)
-   `OptimizeCssAssetsWebpackPlugin`压缩输出的`CSS`文件:

```js
    optimization: {
        minimizer: [
            new TerserWebpackPlugin(), // webpack默认的JS压缩插件
            new OptimizeCssAssetsWebpackPlugin() // 压缩输出的`CSS`文件
        ]
    },
```

-   输出文件名`Hash`:当启用服务器的静态资源缓存时，只有 Hash 名变更时，才会重新请求。

```js
output: {
    filename: "[name]-[contenthash:8].bundle.js";
}
```

#### 3、Rollup 使用

1. 区别于`webpack`：`Rollup`仅仅是一款 ESM 打包器。默认会开启`Tree Shaking`
2. `Rollup`支持使用插件的方式扩展，插件是`Rollup`唯一的扩展方式。
3. `Rollup`默认只会处理`ES Modules`模块，若要支持加载`CommonJS`模块可以采用`rollup-plugin-commonjs`。因为有需要的 npm 包采用的`CommonJS`模式组织的代码。
4. `Dynamic Imports`动态导入，代码拆分：

```js
import("./logger").then(({ log }) => {
    log("code splitting~");
});
```

5. 多入口打包

```js
    input: {
        foo: 'src/index.js',
        bar: 'src/album.js',
    }
```

总结`Rollup`使用优缺点：

-   输出结果更加扁平
-   自动移除未引用代码
-   打包结果依然完全可读
-   加载非`ESM`的第三方模块比较复杂
-   模块最终都被打包到一个函数中，无法实现`HMR`
-   浏览器环境中，代码拆分功能依赖`AMD`库

#### 4、Parcel 使用

零配置的前端应用打包。

## 四、规范化标准

1. 为什么要有规范标准？

-   软件开发需要多人协作
-   不同的开发者具有不同的编码习惯和喜好
-   不同的喜好增加了项目维护成本
-   每个项目或团队都需要明确统一的标准

2. 哪里需要规范化标准？

-   代码、文档、甚至提交日志
-   开发过程中人为编写的成果物
-   代码标准化规范最为重要，影响着代码的质量和维护成本

3. 常见的规范化实现方式

-   `eslint`、`stylelint`
-   `eslint` 检查`typescript`
-   `stylelint`使用
-   `stylelint`使用
-   `eslint`结合`git hooks` (Husky)
