# Q&A

## 1. 请说出下列最终执行结果，并解释为什么?

```javascript
var a = [];
for (var i = 0; i < 10; i++) {
    a[i] = function () {
        console.log(i);
    };
}
a[6]();
```

1. 答：10
2. 解析：
    - 首先建立`ECStack`执行环境栈，全局执行上下文`EC(G)`进栈执行。`a`的堆地址设为`0x001`，`i` 默认为`undefined`。
    - 然后`for`循环代码执行，依次开辟新的匿名函数堆内存，将堆内存地址储存在`a`的堆地址内存中
    - 然后执行 `a[6]()`，此时 a[6]指向堆内存地址`0x008`, 其中储存着字符串形式的函数，将它进栈执行
    - 函数执行时，确定作用域链为`<EC(AN1), EC(G)>`, 函数体中的 i 当前执行上下文不存在，
    - 然后沿着作用域链在`EC(G)`的变量对象`VO(G)`中找到了`i`, 此时的`i`经过`for`循环之后，已经变为`10`
    - 执行`console.log(i)`，打印结果为`10`
3. 图解执行过程：
   ![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/eefb18c53fef48e4a0d0b1769ccdb485~tplv-k3u1fbpfcp-watermark.image)

## 2. 请说出此案列最终执行结果，并解释为什么?

```javascript
var tmp = 123;
if (true) {
    console.log(tmp);
    let tmp;
}
```

1. 答：报错`Uncaught ReferenceError` 引用错误
2. 解析：
    - 首先全局作用域定义了变量`var tmp = 123`
    - 然后在`if`判断中通过`let`定义了同名变量`tmp`,因此这里形成了块级作用域
    - 在块级作用域中局部的变量`tmp`会覆盖全局的变量`tmp`，
    - 由于使用`let`定义的变量要等到程序流执行到定义变量的代码行时才会装载，
    - 因此在定义局部变量`tmp`之前访问它（存在暂时性死区），就会导致引用错误。

## 3. 结合 ES6 语法，用最简单的方式找出数组中的最小值

```javascript
var arr = [12, 34, 32, 89, 4];
```

1. 答：Math.min(...arr)
2. 解析：
    - Math.min()方法默认接收不定数量 number 类型的参数
    - 因此可以采用...扩展运算符的用法将 arr 数组元素依次传入 Math.min()方法中
    - 此外 ES5 也有类似的传参方式，Math.min.apply(null, arr),可以达到相同效果

## 4. 请详细说明 var、let、const 三种声明变量的方式之间的具体差别

### 表格区别差异：

|            |              var              |           let            |                               const                                |
| :--------: | :---------------------------: | :----------------------: | :----------------------------------------------------------------: |
|    语法    |           var a = 1           |        let a = 1         |                            const a = 1                             |
|  声明提升  | 声明提升，使用 undefined 定义 |    仅声明提升，未定义    |                         仅声明提升，未定义                         |
|   作用域   |       全局或函数作用域        |        块级作用域        |                             块级作用域                             |
|    定义    |       可以仅声明不定义        |     可以仅声明不定义     |                           必须声明时定义                           |
|  多次赋值  |             可以              |           可以           | 基本数据类型不可以，引用类型可以改变堆内存中的值（堆地址不能改变） |
| 声明前访问 |             可以              | 不可以（存在暂时性死区） |                      不可以（存在暂时性死区）                      |
|    特点    |       全局或函数作用域        |        块级作用域        |                             块级作用域                             |

解析差异：

1. `const`必须声明时定义,因为不定义后续就无法定义了，并且会报错`Uncaught SyntaxError: Missing initializer in const declaration`
2. `const`和`let`在`{}`花括号中使用时会形成块级作用域
3. `const`和`let`在声明前访问存在暂时性死区，即变量在定义之前是不能被使用。
4. `let`和`const`不会绑定全局作用域,`var`定义的全局变量会自动添加全局`window`对象的属性(浏览器环境)

### 实例分析：

```js
var name = "aaa";
function func() {
    console.log(name);
    let name = "bbb";
    console.log(name);
}
func();
// 报错：Uncaught ReferenceError: Cannot access 'name' before initialization
```

原因：`let`定义的变量不会提前装载, 使用`let`定义的变量要等到程序流执行到定义变量的代码行时才会装载。  
过程：上面代码定义了全局变量`name`, 然后在函数`func`中定义了同名的`name`变量，此时局部变量`name`会覆盖全局的`name`变量。但由于使用 let 定义的变量不会提前装载，在定义局部变量`name`之前访问它，就会导致错误。

## 5. 请说出下列代码最终输出结果，并解释为什么？

```javascript
var a = 10;
var obj = {
    a: 20,
    fn() {
        setTimeout(() => {
            console.log(this.a);
        });
    },
};
obj.fn();
```

1. 答：20
2. 解析：
    - 首先建立`ECStack`执行环境栈，全局执行上下文`EC(G)`进栈执行。`a`的值设为`10`，`obj` 设为`0x001`。
    - 然后执行`obj.fn()`,函数执行时，查看函数的前端有.,则点前面的对象就是执行主体`this`指向`obj`
    - 在`obj`的堆内存中找到属性`a`的值为`20`，因此打印`this.a`的值为`20`
3. 图解执行过程：
   ![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c09e6079140a413ab29f983a8cb9d565~tplv-k3u1fbpfcp-watermark.image)

## 6. 简述 Symbol 类型的用途

1. 常量枚举：JavaScript 没有枚举类型，常量概念也通常用字符串或数字表示。如果不小心有两个值重复会很难调试，但当用 Symbol 类型定义常量，并通过 Symbol('xxx')中的 xxx 添加对 Symbol 数据的描述, 就可以保证不会与其他常量重复。
2. 定义对象的私有属性：由于没有访问限制，一般以下划线起始来命名对象的私有属性,但这并不能从根本限制访问这些属性。Symbol 类型可以为对象添加一个独一无二的属性名并隐藏这些私有属性，因此 Symbol('xxx')属性适合作为对象的私有属性。

## 7. 说说什么是浅拷贝，什么是深拷贝？

1. 浅拷贝是拷贝一层，如果是基本类型数据会拷贝其本身的值，如果是引用类型数据则拷贝其引用地址，如果引用类型数据属性值也是引用类型，那么引用类型数据属性值的改变会反应到拷贝对象上。  
   对应基本数据类型，浅拷贝就是赋值，以下是部分引用类型数据的浅拷贝方法：

```js
// 数组
let arr = [1, 2, 3];
let arr1 = arr.slice();
let arr2 = [...arr];
let arr3 = [].concat(arr);
let arr4 = Array.from(arr);
// 对象
let obj = { a: 1, b: 2 };
let obj1 = Object.assign({}, obj);
let { ...obj2 } = obj;
let obj3 = {};
for (let key in obj) {
    obj3[key] = obj[key];
}
```

2. 深拷贝是拷贝多层，每一层的数据都会拷贝出来，对象的改变不会影响拷贝对象。  
   深拷贝的方法：
    - `JSON.parse(JSON.stringify(obj))`平常项目也常拿来使用,但要严格遵守`JSON`序列化规则。原对象中如果含有`Date`对象，`JSON.stringify()`会将其变为字符串，之后并不会将其还原为日期对象。或是含有`RegExp`对象，`JSON.stringify()`会将其变为空对象，属性中含有`NaN`、`Infinity`和`-Infinity`，则序列化的结果会变成`null`，如果属性中有函数,`undefined`,`symbol`则经过`JSON.stringify()`序列化后的`JSON`字符串中这个键值对会消失，因为不支持。
    - 递归实现深拷贝
      完整代码：

```js
// 手工实现一个JS深拷贝的函数（改进版）
const isCloneDataType = (obj) =>
    typeof obj === "object" && typeof obj !== "function" && obj !== null;

const deepClone = (obj, hash = new WeakMap()) => {
    if (obj instanceof Date) return new Date(obj);
    if (obj instanceof RegExp) return new RegExp(obj);
    if (hash.has(obj)) return hash.get(obj);

    let allDesc = Object.getOwnPropertyDescriptors(obj);
    let cloneObj = Object.create(Object.getPrototypeOf(obj), allDesc);
    hash.set(obj, cloneObj);
    // 重新使用循环赋值对象属性目的：WeakMap 防止内存泄漏，
    // 否则循环引用复制起来比较吃内存。
    for (let key of Reflect.ownKeys(obj)) {
        cloneObj[key] = isCloneDataType(obj[key])
            ? deepClone(obj[key], hash)
            : obj[key];
    }
    return cloneObj;
};
```

## 8. 请简述 TypeScript 与 JavaScript 之间的关系？

`TypeScript`是一种由微软开发的自由和开源的编程语言。它是`JavaScript`的一个超集，而且本质上向这个语言添加了可选的静态类型和基于类的面向对象编程，是一种给 `JavaScript` 添加特性的语言扩展。

## 9. 请谈谈你所认为的 TypeScript 优缺点

1. 优点：

-   `TypeScript`是`Javascript`的增强，它作为`Javascript`语言的超集，为`Javascript`添加了可选择的类型标注，提高了代码的可读性和可维护性。
-   增强了编辑器和 `IDE` 的功能，包括代码补全、接口提示、跳转到定义、重构等
-   可以使用到最新提供的`Javascript`特性，使我们的代码更加健壮。
-   `TypeScript`是未来前端开发的趋势，非常适合构建大型复杂应用，也利于编写基础的 JS 库和框架（如`Vue3.0`、`antdesign`、`vscode`等）

2. 缺点：

-   有一定的学习成本，需要理解接口（`Interfaces`）、泛型（`Generics`）、类（`Classes`）、枚举类型（`Enums`）
-   短期可能会增加一些开发成本，毕竟要多写一些类型的定义，长期 TypeScript 能够减少其维护成本

## 10. 描述引用计数的工作原理和优缺点

1. 引用计数工作原理：核心思想是利用引用计数器设置引数，当引用关系改变时修改引用数字，当引用数字为 0 时立即回收
2. 优点：发现垃圾立即回收，最大限度减少程序的暂停
3. 缺点：无法回收循环引用的对象；由于需要管理引用计数器，时间开销大。

## 11. 描述标记整理算法的工作流程

1. 标记整理的工作原理：第一步遍历所有对象标记活动对象，第二部遍历所有对象先执行整理，移动对象的位置整理并清除未标记的非活动对象，回收相应的空间。解决了循环引用对象不可回收的问题，但不会立即回收垃圾对象。
2. 图解过程: 首先遍历所有对象并标记活动对象，其中循环引用对象不可达不标记，然后对对象移动位置进行整理，最后回收图中蓝色区域（非活动对象）
   ![48f77fbcdd21504570670ec38b6468c.jpg](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c1254ef7c18e4210bc43b0cada6add60~tplv-k3u1fbpfcp-watermark.image)

## 12. 描述 V8 中新生代存储区垃圾回收的流程

1. V8 垃圾回收策略：采用分代回收的思想。将内存分为新生代、老生代，针对不同的对象采用不同的 GC 算法。
2. 新生代：指的是存活时间较短的对象（如函数内的局部作用域变量，当函数执行完后，就成为垃圾了）
3. 新生代对象的回收实现

    - 回收过程采用复制算法 + 标记整理
    - 新生代内存区分为两个等大的空间
    - 使用空间为`From`, 空闲空间为`To`
    - 当申请内存后的活动对象都储存在`From`空间，当达到一定量后触发`GC`回收
    - 经过标记整理后，将活动对象拷贝到`To`空间，然后将`From`空间内存释放
    - 将`From`和`To`交换空间，再次执行第`4`条，依次循环

    注意：在对象的拷贝过程中可能会出现对象的晋升，即一轮`GC`还存活的新生代需要晋升到老年代，此外当`To`空间使用率超过`25%`时，本次拷贝的活动对象都会被移动到老年代。

## 13. 描述增量标记算法在何时使用及工作原理

1. 增量标记算法：主要用在回收老生代对象时，进行效率优化。
2. 工作原理：当老生代储存区域，占用内存达到一定量后触发`GC`回收。增量标记采用分片进行标记和清除，让程序执行和垃圾回收交替执行，实现垃圾回收优化，让用户无感知，体验更好。
3. 图解过程
   ![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ddc2c74e3c1b43a7a58f8f3b6e00dbb9~tplv-k3u1fbpfcp-watermark.image)

## 14、谈谈你对工程化的初步认识，结合你之前遇到过的问题说出三个以上工程化能够解决问题或者带来的价值。

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

## 15、你认为脚手架除了为我们创建项目结构，还有什么更深的意义？

答:

-   脚手架提供了项目规范和公共约定，包含了相同的组织结构、开发范式、模块依赖、工具配置、基础代码等。对于部门产品开发，前端开发人员使用一套脚手架，能够统一不同项目的代码管理，当有新成员加入时，可以快速上手提高工作效率。
-   脚手架集成了在代码创建、编码、预览/测试以及代码提交等阶段的工具，例如 vue-cli 创建约定的项目结构、编码风格检查、预览热更新、自动化单元测试以及代码提交规范。大大降低了开发者的开发成本，有利于开发者明确编程规范。
-   脚手架是对项目基础功能的抽象，对一些机械重复性工作的的简化集成，了解脚手架内部的原理能够对项目架构的设计能力有更好的提升。

## 16、概述脚手架实现的过程，并使用 NodeJS 完成一个自定义的小型脚手架工具

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

## 17、尝试使用 Gulp 完成项目的自动化构建

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

## 18、Webpack 的构建流程主要有哪些环节？如果可以请尽可能详尽的描述 Webpack 打包的整个过程。

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

## 19、Loader 和 Plugin 有哪些不同？请描述一下开发 Loader 和 Plugin 的思路。

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

## 20、简述前端兼容性的解决方案及不同工具的使用（CSS 及 JS）

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

## 21、列举三种常见的 webpack 打包优化手段及使用步骤

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
