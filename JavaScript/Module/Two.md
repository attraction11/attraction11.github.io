# 模块检测二

## 1、谈谈你对工程化的初步认识，结合你之前遇到过的问题说出三个以上工程化能够解决问题或者带来的价值。

答:  
前端工程化是在项目工程的创建、编码、预览/测试、提交、部署等阶段，采用一切以提高效率、降低成本、质量保证为目的的手段都属于工程化。
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

## 编程题

**1、概述脚手架实现的过程，并使用 NodeJS 完成一个自定义的小型脚手架工具**  
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

代码: [sjk-cli](https://gitee.com/sjk2016/lagoufed-e-task/tree/master/part2/fed-e-task-02-01/code/sjk-cli)  
说明文档: [sjk-cli/README.md](https://gitee.com/sjk2016/lagoufed-e-task/tree/master/part2/fed-e-task-02-01/code/pages-boilerplate)

**2、尝试使用 Gulp 完成项目的自动化构建** ( **[先要作的事情](https://gitee.com/lagoufed/fed-e-questions/blob/master/part2/%E4%B8%8B%E8%BD%BD%E5%8C%85%E6%98%AF%E5%87%BA%E9%94%99%E7%9A%84%E8%A7%A3%E5%86%B3%E6%96%B9%E5%BC%8F.md)** )

(html,css,等素材已经放到 code/pages-boilerplate 目录)
答：
实现主要任务：

1. gulp-sass 编译 scss 文件
2. gulp-babel 编译 JS
3. gulp-imagemin 处理图片、 字体、拷贝静态资源
4. gulp-swig 处理 HTML 模板文件
5. browser-sync 搭建开发服务器
6. 监听文件改变
7. gulp-useref gulp-if 文件引用处理
8. gulp-load-plugins 自动加载插件
   实现组合任务：
9. develop 用于开发环境
10. build 用于生产环境

代码: [pages-boilerplate](https://gitee.com/sjk2016/lagoufed-e-task/tree/master/part2/fed-e-task-02-01/code/pages-boilerplate)  
说明文档: [pages-boilerplate/README.md](https://gitee.com/sjk2016/lagoufed-e-task/tree/master/part2/fed-e-task-02-01/code/pages-boilerplate)
