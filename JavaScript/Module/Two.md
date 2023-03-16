# Q&A

## 1、谈谈你对工程化的初步认识，结合你之前遇到过的问题说出三个以上工程化能够解决问题或者带来的价值。

答:  
前端工程化是在项目工程的创建、编码、预览/测试、提交、部署等阶段，采用一切**以提高效率、降低成本、质量保证为目的的手段**都属于工程化。
具体表现：

-   在创建项目阶段，通过脚手架工具创建工程或一些特定类型文件；
-   在编码阶段，通过代码格式化和代码校验确保统一的代码风格，通过编译工具可以使用语言新特性，通过自动构建打包工具提高编码效率，缩小代码体积等
-   在预览测试阶段，通过`Web Server / Mock`、`Live Reloading / HMR`、`Source Map`等提升开发体验
-   在代码提交阶段，通过`Git Hooks`规范代码提交日志，便于回滚排查问题；通过`Lint-staged`只检测暂存区的文件，加快代码检查速度。
-   在代码部署阶段，通过持续集成`Continuous Integration(CI)`通过持续集成让产品可以快速迭代，同时还能保持高质量。它的核心措施是，
    代码集成到主干之前，必须通过自动化测试。只要有一个测试用例失败，就不能集成。持续交付`Continuous Delivery(CD)`指的是，频繁地将软件的新版本，
    交付给质量团队或者用户，以供评审，如果评审通过，代码就进入生产阶段  
    参考： [持续集成](https://www.ruanyifeng.com/blog/2015/09/continuous-integration.html)

工程化能够解决的问题以及带来的价值：

-   工程化极大提高了开发的效率、开发体验。以往受限于运行平台对语言的支持情况和对各个平台的兼容。
-   工程化让前端开发阶段不再依赖后端服务。以往需要等待后端接口完成才能进行调试，而工程化提供了 Mock ，来帮助我们进行开发阶段的调试
-   工程化让开发的流程更加规范，有利于制定标准，让开发的各个阶段做的更精细，专业。以往开发界限不明、分类笼统不利于推进各个阶段的技术进步。
-   工程化让产品的迭代速度和代码质量、风格的控制有很大提高。以往没有持续集成和持续交付标准因为无法把控代码质量，测试阶段会延长发布交付周期，有了自动化测试发布部署，缩短了周期。

## 2、你认为脚手架除了为我们创建项目结构，还有什么更深的意义？

答:

-   脚手架提供了项目规范和公共约定，包含了相同的组织结构、开发范式、模块依赖、工具配置、基础代码等。对于部门产品开发，前端开发人员使用一套脚手架，能够统一不同项目的代码管理，当有新成员加入时，可以快速上手提高工作效率。
-   脚手架集成了在代码创建、编码、预览/测试以及代码提交等阶段的工具，例如 vue-cli 创建约定的项目结构、编码风格检查、预览热更新、自动化单元测试以及代码提交规范。大大降低了开发者的开发成本，有利于开发者明确编程规范。
-   脚手架是对项目基础功能的抽象，对一些机械重复性工作的的简化集成，了解脚手架内部的原理能够对项目架构的设计能力有更好的提升。

## 3、概述脚手架实现的过程，并使用 NodeJS 完成一个自定义的小型脚手架工具

答:  
实现过程：

1. 通过命令行`mkdir sjk-cli`创建一个目录,并进入目录`cd sjk-cli`
2. 在当前目录通过`yarn init`初始化一个`package.json`文件，并通过`code .`打开当前目录
3. `package.json`文件中添加`bin`字段指定我们`cli`应用的入口文件(`"bin": "bin/cli.js"`)
4. 打开`cli.js`文件并添加特定文件头`#!/usr/bin/env node`(window OS) 指明这个脚本文件的解释程序，告诉系统可以在 PATH 目录中查找 node 安装路径执行当前脚本

```js
#!/usr/bin/env node
// cli.js的主体内容
console.log("hello~");
```

5. 通过`yarn link`命令将当前模块链接到全局
6. 命令行运行`sjk-cli`就可以打印出`cli.js`中的输出内容`hello~`
7. 接下来就开始实现创建项目的需求：通过命令行的询问的方式，指引用户输入和选择一些信息，然后读取模板文件，使用`ejs`渲染数据后写入到项目目录的`src`文件夹中。

代码: [sjk-cli](https://github.com/attraction11/lagoufed-e-task/tree/master/part2/fed-e-task-02-01/code/sjk-cli)  
说明文档: [sjk-cli/README.md](https://github.com/attraction11/lagoufed-e-task/tree/master/part2/fed-e-task-02-01/code/sjk-cli)

## 4、尝试使用 Gulp 完成项目的自动化构建

(html,css,等素材已经放到 code/[pages-boilerplate](https://github.com/attraction11/lagoufed-e-task/tree/master/part2/fed-e-task-02-01/code/pages-boilerplate) 目录)

-   实现主要任务：

1. gulp-sass 编译 scss 文件
2. gulp-babel 编译 JS
3. gulp-imagemin 处理图片、 字体、拷贝静态资源
4. gulp-swig 处理 HTML 模板文件
5. browser-sync 搭建开发服务器
6. 监听文件改变
7. gulp-useref gulp-if 文件引用处理
8. gulp-load-plugins 自动加载插件

-   实现组合任务：

9. develop 用于开发环境
10. build 用于生产环境

代码: [pages-boilerplate](https://github.com/attraction11/lagoufed-e-task/tree/master/part2/fed-e-task-02-01/code/pages-boilerplate)  
说明文档: [pages-boilerplate/README.md](https://github.com/attraction11/lagoufed-e-task/tree/master/part2/fed-e-task-02-01/code/pages-boilerplate)

## 5、Webpack 的构建流程主要有哪些环节？如果可以请尽可能详尽的描述 Webpack 打包的整个过程。

`webpack`的概述：  
`webpack`是一个模块打包工具，它将一切文件都视为模块，通过`loader`编译转换文件，通过`plugin`注入钩子，最后
将输出的资源模块组合成文件。主要的配置信息有`entry`、`output`、`module`、`plugins`

构建流程：

-   创建`compiler`实例，用于控制构建流程，`compiler`实例包含`webpack`基本环境信息
-   根据配置项转换成对应的内部插件，并初始化`options`配置项
-   执行`compiler.run`
-   创建`comppilation`实例，每次构建都会新建一个`comppilation`实例，包含了这次构建的基本信息
-   从`entry`开始递归分析依赖，对每个依赖模块会进行`buildModule`,通过`Loader`将不同类型的模块转换成`webpack`模块
-   通过`Parser.parse`将上面的结果转换成 AST 树
-   遍历`AST`树，收集依赖`dependency`,并保存在`compilation`实例的`dependiencies`属性中
-   生成`chunks`,不同`entry`生成不同`chunk`, 动态导入也会生成自己的`chunk`,生成`chunk`后还会进行优化
-   使用`template`基于`compilation`的数据生成结果代码

总结：  
`webpack`打包输出的文件其实就是一个闭包，传入的参数是一个对象，键值为所有输出文件的路径，内容为`eval`包裹的文件内容；闭包内重写了模块的加载方式，自己定义了`__webpack_require__`方法，来实现模拟的`common.js`规范模块加载机制。  
`webpack`实际是基于事件流的，通过一系列的插件运行。`webpack`利用`tapable`库提供各种钩子来实现对于整个构建流程各个步骤的控制。

## 6、Loader 和 Plugin 有哪些不同？请描述一下开发 Loader 和 Plugin 的思路。

`Loader`：  
用于对模块文件进行编译转换和加载处理，在`modules.rules`数组中进行配置，它用于告诉`webpack`在遇到什么类型的文件，应该采用哪些`Loader`进行加载和转换，`loader`可以通过`querystring`或`object`的方式指定选项参数。处理一类文件可以使用多个`loader`,`loader`的执行顺序类似出栈的方式（从后向前执行）

`Plugin`:  
主要是通过`webpack`内部的钩子机制，在`webpack`构建的不同阶段执行一些额外的工作。从打包 优化和压缩，到从新定义环境变量，功能强大到可以用来处理各种各样的任务。`plugin`让`webpack`的机制更加灵活，他的编译过程中留下的一系列生命周期钩子，通过调用这些钩子来实现在不同编译结果时对源模块进行处理。它的插件是一个函数或者一个包含`apply`方法的对象，接收一个`compile`对象，通过`webpack`的钩子来处理资源

开发`Loader`的思路:

-   通过 module.export 导出一个函数
-   函数的默认参数为要处理的文件 source
-   函数体中处理资源
-   返回处理后结果（交给下一个 loader 进行处理）

```js
const marked = require("marked");

module.exports = (source) => {
    // console.log(source)
    const html = marked(source);
    // 返回一段js代码
    // return `export default ${JSON.stringify(html)}`
    return html;
};
```

开发`Plugin`的思路:

-   通过钩子机制实现,在生命周期的钩子中挂载函数实现扩展
-   函数方法体内通过 webpack 提供的 api 获取资源做相应处理
-   将处理完的资源通过 webpack 提供的方法返回

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
```

## 7、简述前端兼容性的解决方案及不同工具的使用（CSS 及 JS）

CSS 兼容(不同浏览器的默认样式存在差异，可以使用 Normalize.css 抹平这些差异)：

1. 不同浏览器的标签默认的 margin 和 padding 不同

-   CSS 里 \*{margin:0;padding:0;} 但是性能不好
-   一般我们会引入 reset.css 样式重置；

2.  超链接访问过后 hover 样式就不出现的问题

-   被点击访问过的超链接样式不在具有 hover 和 active 了,很多人应该都遇到过这个问题,解决技巧是改变 CSS 属性的排列顺序: L-V-H-A

```css
<style type="text/css">
a:link {}
a:visited {}
a:hover {}
a:active {}
</style>
```

3. 图片默认有间距(几个 img 标签放在一起的时候，有些浏览器会有默认的间距，加了问题一中提到的通配符也不起作用。)

-   因为 img 标签是行内属性标签，所以只要不超出容器宽度，img 标签都会排在一行里，但是部分浏览器的 img 标签之间会有个间距。去掉这个间距使用 float 是正道。

4. 上下 margin 的重叠问题(给上边元素设置了 margin-bottom，给下边元素设置了 margin-top，浏览器只会识别较大值)

-   margin-top 和 margin-bottom 中选择一个，只设置其中一个值

JS 兼容：

1. 键盘事件 keyCode 兼容性写法

```js
const inp = document.getElementById("inp");
const result = document.getElementById("result");

function getKeyCode(e) {
    e = e ? e : window.event ? window.event : "";
    return e.keyCode ? e.keyCode : e.which;
}

inp.onkeypress = function (e) {
    result.innerHTML = getKeyCode(e);
};
```

2. 求窗口大小的兼容写法

```js
// 浏览器窗口可视区域大小（不包括工具栏和滚动条等边线）
// 1600 * 525
const client_w =
    document.documentElement.clientWidth || document.body.clientWidth;
const client_h =
    document.documentElement.clientHeight || document.body.clientHeight;

// 网页内容实际宽高（包括工具栏和滚动条等边线）
// 1600 * 8
const scroll_w =
    document.documentElement.scrollWidth || document.body.scrollWidth;
const scroll_h =
    document.documentElement.scrollHeight || document.body.scrollHeight;

// 网页内容实际宽高 (不包括工具栏和滚动条等边线）
// 1600 * 8
const offset_w =
    document.documentElement.offsetWidth || document.body.offsetWidth;
const offset_h =
    document.documentElement.offsetHeight || document.body.offsetHeight;

// 滚动的高度
const scroll_Top =
    document.documentElement.scrollTop || document.body.scrollTop;
```

3. addEventListener 与 attachEvent 区别

-   attachEvent ——兼容：IE7、IE8；不兼容 firefox、chrome、IE9、IE10、IE11、safari、opera。
-   addEventListener——兼容：firefox、chrome、IE、safari、opera；不兼容 IE7、IE8

```js
function addEvent(elm, evType, fn, useCapture) {
    if (elm.addEventListener) {
        // W3C标准
        elm.addEventListener(evType, fn, useCapture);
        return true;
    } else if (elm.attachEvent) {
        // IE
        const r = elm.attachEvent("on" + evType, fn); // IE5+
        return r;
    } else {
        elm["on" + evType] = fn; // DOM事件
    }
}
```

4. 阻止事件冒泡传播

```js
//js阻止事件传播，这里使用click事件为例
document.onclick = function (e) {
    const e = e || window.event;
    if (e.stopPropagation) {
        e.stopPropagation(); //W3C标准
    } else {
        e.cancelBubble = true; //IE....
    }
};
```

5. 阻止事件默认行为

```js
//js阻止默认事件   一般阻止a链接href，form表单submit提交
document.onclick = function (e) {
    const e = e || window.event;
    if (e.preventDefault) {
        e.preventDefault(); //W3C标准
    } else {
        e.returnValue = "false"; //IE..
    }
};
```

## 8、列举三种常见的 webpack 打包优化手段及使用步骤

通过 webpack 优化前端的手段有:   
可以通过文件体积大小入手，  
其次还可通过分包的形式、减少 http 请求次数等方式，实现对前端性能的优化。  

-   JS 代码压缩
    在 production 模式下，webpack 默认就是使用 TerserPlugin 来处理我们的代码的。如果想要自定义配置它，配置方法如下:

```js
const TerserPlugin = require('terser-webpack-plugin')
module.exports = {
    ...
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                parallel: true // 电脑cpu核数-1
            })
        ]
    }
}
```

可以将 TerserPlugin 中的 cache 设为 true，开启缓存

-   CSS 代码压缩
    CSS 压缩通常是去除无用的空格等，因为很难去修改选择器、属性的名称、值等。CSS 的压缩可以使用：`css-minimizer-webpack-plugin`

```js
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
module.exports = {
    // ...
    optimization: {
        minimize: true,
        minimizer: [
            new CssMinimizerPlugin({
                parallel: true,
            }),
        ],
    },
};
```

-   Html 文件代码压缩
    使用 HtmlWebpackPlugin 插件来生成 HTML 的模板时候，通过配置属性 minify 进行 html 优化

```js
module.exports = {
    ...
    plugin:[
        new HtmlwebpackPlugin({
            ...
            minify:{
                minifyCSS:false, // 是否压缩css
                collapseWhitespace:false, // 是否折叠空格
                removeComments:true // 是否移除注释
            }
        })
    ]
}
```

-   文件大小压缩
    对文件的大小进行压缩，减少 http 传输过程中宽带的损耗。可以采用`compression-webpack-plugin`

```js
new ComepressionPlugin({
    test: /\.(css|js)$/, // 哪些文件需要压缩
    threshold: 500, // 设置文件多大开始压缩
    minRatio: 0.7, // 至少压缩的比例
    algorithm: "gzip", // 采用的压缩算法
});
```

-   图片压缩
    一般来说在打包之后，一些图片文件的大小是远远要比 js 或者 css 文件要来的大，所以图片压缩较为重要

```js
module: {
    rules: [
        {
            test: /\.(png|jpg|gif)$/,
            use: [
                {
                    loader: "file-loader",
                    options: {
                        name: "[name]_[hash].[ext]",
                        outputPath: "images/",
                    },
                },
                {
                    loader: "image-webpack-loader",
                    options: {
                        // 压缩 jpeg 的配置
                        mozjpeg: {
                            progressive: true,
                            quality: 65,
                        },
                        // 使用 imagemin**-optipng 压缩 png，enable: false 为关闭
                        optipng: {
                            enabled: false,
                        },
                        // 使用 imagemin-pngquant 压缩 png
                        pngquant: {
                            quality: "65-90",
                            speed: 4,
                        },
                        // 压缩 gif 的配置
                        gifsicle: {
                            interlaced: false,
                        },
                        // 开启 webp，会把 jpg 和 png 图片压缩为 webp 格式
                        webp: {
                            quality: 75,
                        },
                    },
                },
            ],
        },
    ];
}
```

-   Tree Shaking
    Tree Shaking 是一个术语，在计算机中表示消除死代码，依赖于 ES Module 的静态语法分析（不执行任何的代码，可以明确知道模块的依赖关系）
    在 webpack 实现 Trss shaking 有两种不同的方案：

usedExports：通过标记某些函数是否被使用，之后通过 Terser 来进行优化的
sideEffects：跳过整个模块/文件，直接查看该文件是否有副作用
两种不同的配置方案， 有不同的效果

#usedExports (配置方法也很简单，只需要将 usedExports 设为 true)

```js
module.exports = {
    ...
    optimization:{
        usedExports
    }
}
```

使用之后，没被用上的代码在 webpack 打包中会加入 unused harmony export mul 注释，用来告知 Terser 在优化时，可以删除掉这段代码。

#sideEffects（用于告知 webpack compiler 哪些模块时有副作用，配置方法是在 package.json 中设置 sideEffects 属性）
如果 sideEffects 设置为 false，就是告知 webpack 可以安全的删除未用到的 exports

如果有些文件需要保留，可以设置为数组的形式

```js
"sideEffecis":[
    "./src/util/format.js",
    "*.css" // 所有的css文件
]
```

#css tree shaking（css 进行 tree shaking 优化可以安装 PurgeCss 插件）

```js
const PurgeCssPlugin = require('purgecss-webpack-plugin')
module.exports = {
    ...
    plugins:[
        new PurgeCssPlugin({
            path:glob.sync(`${path.resolve('./src')}/**/*`), {nodir:true}// src里面的所有文件
            satelist:function(){
                return {
                    standard:["html"]
                }
            }
        })
    ]
}
```

paths：表示要检测哪些目录下的内容需要被分析，配合使用 glob
默认情况下，Purgecss 会将我们的 html 标签的样式移除掉，如果我们希望保留，可以添加一个 safelist 的属性

-   代码分离
    将代码分离到不同的 bundle 中，之后我们可以按需加载，或者并行加载这些文件

默认情况下，所有的 JavaScript 代码（业务代码、第三方依赖、暂时没有用到的模块）在首页全部都加载，就会影响首页的加载速度

代码分离可以分出出更小的 bundle，以及控制资源加载优先级，提供代码的加载性能

这里通过 splitChunksPlugin 来实现，该插件 webpack 已经默认安装和集成，只需要配置即可

默认配置中，chunks 仅仅针对于异步（async）请求，我们可以设置为 initial 或者 all

```js
module.exports = {
    ...
    optimization:{
        splitChunks:{
            chunks:"all"
        }
    }
}
```

Chunks，对同步代码还是异步代码进行处理
minSize： 拆分包的大小, 至少为 minSize，如何包的大小不超过 minSize，这个包不会拆分
maxSize： 将大于 maxSize 的包，拆分为不小于 minSize 的包
minChunks：被引入的次数，默认是 1

-   内联 chunk
    可以通过 InlineChunkHtmlPlugin 插件将一些 chunk 的模块内联到 html，如 runtime 的代码（对模块进行解析、加载、模块信息相关的代码），代码量并不大，但是必须加载的。

```js
const InlineChunkHtmlPlugin = require('react-dev-utils/InlineChunkHtmlPlugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    ...
    plugin:[
        new InlineChunkHtmlPlugin(HtmlWebpackPlugin,[/runtime.+\.js/]
}
```

-   减少查找过程
    对 webpack 的 resolve 参数进行合理配置，使用 resolve 字段告诉 webpack 怎么去搜索文件

-   合理使用 resolve.extensions
    在导入语句没带文件后缀时，webpack 会自动带上后缀后去尝试询问文件是否存在，查询的顺序是按照我们配置 的 resolve.extensions 顺序从前到后查找，webpack 默认支持的后缀是 js 与 json。

举个 ：如果我们配置 resolve.extensions= ['js', 'json']，那么 webpack 会先找 xxx.js

如果没有则再查找 xxx.json，所以我们应该把常用到的文件后缀写在前面，或者 我们导入模块时，尽量带上文件后缀名

-   使用 resolve.alias 减少查找过程
    alias 的意思为 别名，能把原导入路径映射成一个新的导入路径。

比如我们项目中可能会有一些相对路径的写法，就可以使用 alias 配置来减少查找过程；

还比如我们经常使用的 react 库，其实我们可以直接使用其 dist 目录下打包好的 react.min.js，这样就能跳过耗时的模块解析，具体示例配置如下：

```js
const commonConfig = {
  // ...
  resolve: {
    // ...
    alias: {
      react: path.resolve(__dirname, './node_modules/react/dist/react.min.js'),
      @alias: path.resolve(__dirname, '../src/alias'),
    },
  },
  // ...
}
```
