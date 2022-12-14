# Nodejs 核心模块

## 一、核心模块 path

-   basename（） 获取路径中基础名称

```js
/**
 * 01 返回的就是接收路径当中的最后一部分
 * 02 第二个参数表示扩展名，如果说没有设置则返回完整的文件名称带后缀
 * 03 第二个参数做为后缀时，如果没有在当前路径中被匹配到，那么就会忽略
 * 04 处理目录路径的时候如果说，结尾处有路径分割符，则也会被忽略掉
 */
console.log(path.basename(__filename));
console.log(path.basename(__filename, ".js"));
console.log(path.basename(__filename, ".css"));
console.log(path.basename("/a/b/c"));
console.log(path.basename("/a/b/c/"));
```

-   dirname（） 获取路径中目录名称

```js
/**
 * 01 返回路径中最后一个部分的上一层目录所在路径
 */
console.log(path.dirname(__filename));
console.log(path.dirname("/a/b/c"));
console.log(path.dirname("/a/b/c/"));
```

-   extname（）获取路径中扩展名称

```js
/**
 * 01 返回 path路径中相应文件的后缀名
 * 02 如果 path 路径当中存在多个点，它匹配的是最后一个点，到结尾的内容
 */
console.log(path.extname(__filename));
console.log(path.extname("/a/b"));
console.log(path.extname("/a/b/index.html.js.css"));
console.log(path.extname("/a/b/index.html.js."));
```

-   isAbsolute（） 获取路径是否为绝对路径

```js
console.log(path.isAbsolute("foo")); // false
console.log(path.isAbsolute("/foo")); // true
console.log(path.isAbsolute("///foo"));
console.log(path.isAbsolute(""));
console.log(path.isAbsolute("."));
console.log(path.isAbsolute("../bar"));
```

-   join（） 拼接多个路径片段

```js
console.log(path.join("a/b", "c", "index.html"));
console.log(path.join("/a/b", "c", "index.html"));
console.log(path.join("/a/b", "c", "../", "index.html"));
console.log(path.join("/a/b", "c", "./", "index.html"));
console.log(path.join("/a/b", "c", "", "index.html"));
console.log(path.join(""));
```

-   resolve（） 返回绝对路径

```js
/**
 * resolve([from], to)
 */
console.log(path.resolve("/a", "../b"));
console.log(path.resolve("index.html"));
```

-   pasre（） 解析路径

```js
/**
 * 01 接收一个路径，返回一个对象，包含不同的信息
 * 02 root dir base ext name
 */
const obj = path.parse("/a/b/c/index.html");
// const obj = path.parse('/a/b/c/')
// const obj = path.parse('./a/b/c/')
console.log(obj);
```

-   format（） 序列化路径

```js
const obj = path.parse("./a/b/c/");
console.log(path.format(obj)); // ./a/b\c
```

-   normalize（） 规范化路径

```js
console.log(path.normalize(""));
console.log(path.normalize("a/b/c/d"));
console.log(path.normalize("a///b/c../d"));
console.log(path.normalize("a//\\/b/c\\/d"));
console.log(path.normalize("a//\b/c\\/d"));
```

## 二、全局变量 Buffer

#### 1. Buffer 全局变量

Buffer 可以让 Javascript 操作二进制（二进制数据、流操作、Buffer）。  
起初 Javascript 语言服务于浏览器平台，Nodejs 平台下 JavaScript 可以实现 IO 操作（FS 等）。  
IO 行为操作的就是二进制数据，Stream 流操作并非 Nodejs 独创，我们可以把它理解为一种数据类型（如数组、字符串）。  
流操作配合管道实现数据分段传输，数据的端到端传输会生产者和消费者，生产和消费的过程往往存在等待。
产生等待时数据存在在哪？（Buffer）Nodejs 中 Buffer 是一片内存空间（C++），它不占据 V8 堆内存的大小，但由 JS 分配，由 v8 引擎的 GC 回收。

![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9d78858bb5d24243a670d4ce74f56e84~tplv-k3u1fbpfcp-watermark.image?)

#### 2. 创建 Buffer(类)

-   alloc：创建指定字节大小的 buffer

```js
const b1 = Buffer.alloc(10);
console.log(b1); // <Buffer 00 00 00 00 00 00 00 00 00 00>
```

-   allocUnsafe：创建指定大小的 buffer（不安全）,只要有内存空间就会使用

```js
const b2 = Buffer.allocUnsafe(10);
console.log(b2); // <Buffer d0 d8 49 b8 3e 02 00 00 28 d9>
```

-   from：接收数据，创建 buffer（编码可选--'utf-8'），接收字符串或数组参数作为数据。

```js
const b1 = Buffer.from("中", "utf-8");
console.log(b1); // <Buffer e4 b8 ad>

const b2 = Buffer.from([0xe4, 0xb8, 0xad]);
console.log(b2); // <Buffer e4 b8 ad>
console.log(b2.toString("utf-8")); // 中

const b3 = Buffer.alloc(3);
const b4 = Buffer.from(b3);
console.log(b3); // <Buffer 00 00 00>
console.log(b4); // <Buffer 00 00 00>

// 两者的内存空间不共享的
b3[0] = 1;
console.log(b3); // <Buffer 01 00 00>
console.log(b4); // <Buffer 00 00 00>
```

#### 3. Buffer 实例方法

-   fill：使用数据填充 buffer

```js
// buf.fill(123) // <Buffer 7b 7b 7b 7b 7b 7b>
buf.fill("12345678", 1, 3); // 填充数据  开始  结束 (完全填充)
console.log(buf); // <Buffer 00 31 32 00 00 00>
console.log(buf.toString()); // 12
```

-   write：向 buffer 中写入数据

```js
buf.write("123", 1, 4); // 填充数据  开始  长度（一般填充）
console.log(buf); // <Buffer 00 31 32 33 00 00>
console.log(buf.toString()); // 123
```

-   toString： 从 buffer 中提取数据

```js
buf = Buffer.from("拉勾教育");
console.log(buf); // <Buffer e6 8b 89 e5 8b be e6 95 99 e8 82 b2>
console.log(buf.toString("utf-8", 3, 9)); // 字符编码  开始  结束  （勾教）
```

-   slice： 截取 buffer

```js
buf = Buffer.from("拉勾教育");
let b1 = buf.slice(-3);
console.log(b1); // <Buffer e8 82 b2>
console.log(b1.toString()); // 育
```

-   indexOf： 在 buffer 中查找数据

```js
buf = Buffer.from("zcesaddwewqrqggnddd");
console.log(buf);
console.log(buf.indexOf("qc", 4)); // -1
```

-   copy：拷贝 buffer 中的数据

```js
let b1 = Buffer.alloc(6);
let b2 = Buffer.from("拉勾");

b2.copy(b1, 3, 3, 6); // 将b2拷贝到b1中  开始写入位置  开始读取位置  长度
console.log(b1.toString());
console.log(b2.toString());
```

#### 4. Buffer 静态方法

-   concat：将多个 buffer 拼接成一个新的 buffer

```js
let b1 = Buffer.from("hello");
let b2 = Buffer.from("world");

let b = Buffer.concat([b1, b2], 9);
console.log(b);
console.log(b.toString()); // helloworl
```

-   isBuffer：判断当前数据是否为 buffer

```js
let b1 = "123";
console.log(Buffer.isBuffer(b1)); // false
```

#### 5. Buffer-split 实现

```js
ArrayBuffer.prototype.split = function (sep) {
    let len = Buffer.from(sep).length;
    let ret = [];
    let start = 0;
    let offset = 0;

    while ((offset = this.indexOf(sep, start) !== -1)) {
        ret.push(this.slice(start, offset));
        start = offset + len;
    }
    ret.push(this.slice(start));
    return ret;
};

let buf = "哈皮，凉皮，好顽皮";
let bufArr = buf.split("皮");
console.log(bufArr); // [ '哈', '，凉', '，好顽', '' ]
```

## 三、核心模块 FS

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/008ce5f60a0c43288ad92f8f66499630~tplv-k3u1fbpfcp-watermark.image?)

#### 1. 前置知识

用户对于文件所具备的操作权限：R(读-8)W(写-4)S（执行-1）（不具备权限-0）。
操作系统将用户分为 3 类：文件所有者（自己）、文件所属组（家人）、访客（陌生人）。

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c800b7be0df84402a1302d37e26412a6~tplv-k3u1fbpfcp-watermark.image?)

![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0f278c13b2e844caa4c369c7a92fa27f~tplv-k3u1fbpfcp-watermark.image?)

#### 2. Nodejs 中 flag 表示对文件操作方式，常见 flag 操作符

-   r：表示可读
-   w：表示可写
-   s：表示同步
-   ＋：表示执行相反操作
-   x：表示排它操作
-   a：表示追加操作

#### 3. fs 介绍

-   fd 就是操作系统分配给被打开文件的标识（描述符从 3 开始的）
-   代码层面上 fs 分为基本操作类和常用 API
-   文件操作概念：权限位、标识符、操作符

#### 4. 文件操作 API

-   readFile：从指定文件中读取数据

```js
fs.readFile(path.resolve("data1.txt"), "utf-8", (err, data) => {
    // 在Nodejs中错误优先
    console.log(err);
    if (!null) {
        console.log(data);
    }
});
```

-   writeFile：向指定文件中写入数据

```js
fs.writeFile(
    "data.txt",
    "123",
    {
        mode: 438,
        flag: "w+",
        encoding: "utf-8",
    },
    (err) => {
        if (!err) {
            fs.readFile("data.txt", "utf-8", (err, data) => {
                console.log(data);
            });
        }
    }
);
```

-   appendFile： 追加的方式向指定文件中写入数据

```js
fs.appendFile("data.txt", "hello node.js", {}, (err) => {
    console.log("写入成功");
});
```

-   copyFile：将某个文件中的数据拷贝至另一文件

```js
fs.copyFile("data.txt", "test.txt", () => {
    console.log("拷贝成功");
});
```

-   watchFile：对指定文件进行监控

```js
fs.watchFile("data.txt", { interval: 20 }, (curr, prev) => {
    if (curr.mtime !== prev.mtime) {
        console.log("文件被修改了");
        fs.unwatchFile("data.txt");
    }
});
```

#### 5. md 转 html 实现-核心代码

```js
// 核心代码
fs.watchFile(mdPath, (curr, prev) => {
    if (curr.mtime !== prev.mtime) {
        fs.readFile(mdPath, "utf-8", (err, data) => {
            // 将 md--》html
            let htmlStr = marked(data);
            fs.readFile(cssPath, "utf-8", (err, data) => {
                let retHtml = temp
                    .replace("{{content}}", htmlStr)
                    .replace("{{style}}", data);
                // 将上述的内容写入到指定的 html 文件中，用于在浏览器里进行展示
                fs.writeFile(htmlPath, retHtml, (err) => {
                    console.log("html 生成成功了");
                });
            });
        });
    }
});
```

#### 6. 文件打开与关闭 （作用：适应大文件的操作, readFile 等是一次性内存操作）

```js
// open
fs.open(path.resolve("data.txt"), "r", (err, fd) => {
    console.log(fd); // 3 (打开了)
});

// close
fs.open("data.txt", "r", (err, fd) => {
    console.log(fd);
    fs.close(fd, (err) => {
        console.log("关闭成功");
    });
});
```

#### 7. 大文件读写操作（一次性读写无须 Buffer, 大文件边读边写需 Buffer）

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/5f91c8ace0f24be28ca045891bccf6de~tplv-k3u1fbpfcp-watermark.image?)

```js
const fs = require("fs");
// read ： 所谓的读操作就是将数据从磁盘文件中写入到 buffer 中
let buf = Buffer.alloc(10);

/**
 * fd 定位当前被打开的文件
 * buf 用于表示当前缓冲区
 * offset 表示当前从 buf 的哪个位置开始执行写入
 * length 表示当前次写入的长度
 * position 表示当前从文件的哪个位置开始读取
 */
fs.open("data.txt", "r", (err, rfd) => {
    console.log(rfd);
    fs.read(rfd, buf, 1, 4, 3, (err, readBytes, data) => {
        console.log(readBytes);
        console.log(data);
        console.log(data.toString());
    });
});

// write 将缓冲区里的内容写入到磁盘文件中
buf = Buffer.from("1234567890");
fs.open("b.txt", "w", (err, wfd) => {
    fs.write(wfd, buf, 2, 4, 0, (err, written, buffer) => {
        console.log(written, "----");
        fs.close(wfd);
    });
});
```

#### 8. 文件拷贝自定义实现（处理大文件）

```js
/**
 * 01 打开 a 文件，利用 read 将数据保存到 buffer 暂存起来
 * 02 打开 b 文件，利用 write 将 buffer 中数据写入到 b 文件中
 */
const BUFFER_SIZE = buf.length;
let readOffset = 0;

fs.open("a.txt", "r", (err, rfd) => {
    fs.open("b.txt", "w", (err, wfd) => {
        function next() {
            fs.read(rfd, buf, 0, BUFFER_SIZE, readOffset, (err, readBytes) => {
                if (!readBytes) {
                    // 如果条件成立，说明内容已经读取完毕
                    fs.close(rfd, () => {});
                    fs.close(wfd, () => {});
                    console.log("拷贝完成");
                    return;
                }
                readOffset += readBytes;
                fs.write(wfd, buf, 0, readBytes, (err, written) => {
                    next();
                });
            });
        }
        next();
    });
});
```

## 四、FS 目录操作

#### 1. 目录操作 API

-   access：判断文件或目录是否具有操作权限

```js
fs.access("a.txt", (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("有操作权限");
    }
});
```

-   stat：获取目录及文件信息

```js
fs.stat("a.txt", (err, statObj) => {
    console.log(statObj.size);
    console.log(statObj.isFile());
    console.log(statObj.isDirectory());
});
```

-   mkdir：创建目录

```js
fs.mkdir("a/b/c", { recursive: true }, (err) => {
    if (!err) {
        console.log("创建成功");
    } else {
        console.log(err);
    }
});
```

-   rmdir：删除目录

```js
fs.rmdir("a", { recursive: true }, (err) => {
    if (!err) {
        console.log("删除成功");
    } else {
        console.log(err);
    }
});
```

-   readdir：读取目录中内容

```js
fs.readdir("a/b", (err, files) => {
    console.log(files);
});
```

-   unlink：删除指定文件

```js
fs.unlink("a/a.txt", (err) => {
    if (!err) {
        console.log("删除成功");
    }
});
```

## 五、Nodejs 模块化

#### 1. 模块化历程

传统开发常见问题：命名冲突和污染、代码冗余，无效请求多、文件间的依赖关系复杂，导致项目难以维护，不可复用。模块是小而精且可利用维护的代码块，可以利用函数、对象、执行函数拆分。  
Commonjs 规范类似 ECMAscript 规范。Commonjs 规范是同步加载模块，不适用浏览器加载。  
AMD 规范(require.js)、CMD 规范（sea.js）、ES modules 规范（ES6）。

#### 2. Commonjs 规范

Commonjs 是语言层面的规范：模块引用、模块定义、模块标识。  
Nodejs 语言的实现：任一文件都是模块，具有独立作用域；使用 require 导入其他模块；将模块 ID 传入 require 实现目标模块的定位。

-   CommonJS 规范起初是为了弥补 JS 语言模块化缺陷
-   CommonJS 是语言层面的规范，当前主要用于 Node.js
-   CommonJS 规定模块化分为引入、定义、标识符三个部分
-   Moudle 在任意模块中可直接使用包含模块信息
-   Require 接收标识符，加载目标模块
-   Exports 与 module.exports 都能导出模块数据
-   CommonJS 规范定义模块的加载是同步完成

#### 3. module 属性

-   任意 js 文件就是一个模块，可以直接使用 module 属性
-   id：返回模块标识符，一般是一个绝对路径
-   filename：返回文件模块的绝对路径
-   loaded：返回布尔值，表示模块是否完成加载
-   parent： 返回对象存放调用当前模块的模块
-   children： 返回数组，存放当前模块调用的其它模块
-   exports： 返回当前模块需要暴露的内容
-   paths：返回数组，存放不同目录下的 node＿modules 位置

#### 4. module.export 与 exports 的区别？

exports 是 Nodejs 为了便于使用，定义的一个指向 module.export 内存地址的变量，不能被赋值为其他数值，否则就切断了和 module.export 的联系
![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ac98cae5b25b476796b61a2afb9a6f71~tplv-k3u1fbpfcp-watermark.image?)

#### 5. require 属性

-   基本功能是读入并且执行一个模块文件
-   resolve： 返回模块文件绝对路径
-   extensions： 依据不同后缀名执行解析操作
-   main：返回主模块对象

#### 6. Nodejs 模块分类

-   内置模块：加载速度（Node 源码编译时写入到二进制文件）、
-   文件模块：加载速度（代码运行时，动态加载）

#### 7. 模块加载流程

-   路径分析：依据标识符确定模块位置。路径标识符，非路径标识符（常见于核心模块 如 fs）,模块路径（路径依次向上查找 node_modules,直到盘符根）
-   文件定位：确定目标模块中具体的文件及文件类型。

![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/15faa6e602ca4bb4b1e91c588163df79~tplv-k3u1fbpfcp-watermark.image?)

-   编译执行：采用对应的方式完成文件的编译执行。
    -   使用 fs 模块同步读入目标文件内容
    -   对内容进行语法包装，生成可执行 JS 函数
    -   调用函数时传入 exports、module、require 等属性值
    -   以上 3 点是对 JS 文件的编译，对 JSON 文件编译是将读取到的内容通过 JSON.parse()进行解析。
-   缓存优先原则
    -   提高模块加载速度
    -   当前模块不存在，则经历一次完整加载流程
    -   模块加载完成后，使用路径作为索引进行缓存

## 六、模块加载分析

#### 1. 源码分析及内置模块 VM（创建独立运行的沙箱环境）

```js
const fs = require("fs");
const vm = require("vm");

let age = 33;
let content = fs.readFileSync("test.txt", "utf-8");

// eval
// eval(content)

// new Function
/* console.log(age)
let fn = new Function('age', "return age + 1")
console.log(fn(age)) */

// vm.runInThisContext(content)
// 默认无法使用外部局部变量，但可以使用全局变量
vm.runInThisContext("age += 10");

console.log(age);
```

#### 2. 模块加载流程实现（以文件加载为例）

-   路径分析
-   缓存优化
-   文件定位
-   编译执行

```js
const { dir } = require("console");
const fs = require("fs");
const path = require("path");
const vm = require("vm");

function Module(id) {
    this.id = id;
    this.exports = {};
    console.log(1111);
}

Module._resolveFilename = function (filename) {
    // 利用 Path 将 filename 转为绝对路径
    let absPath = path.resolve(__dirname, filename);

    // 判断当前路径对应的内容是否存在（）
    if (fs.existsSync(absPath)) {
        // 如果条件成立则说明 absPath 对应的内容是存在的
        return absPath;
    } else {
        // 文件定位
        let suffix = Object.keys(Module._extensions);

        for (var i = 0; i < suffix.length; i++) {
            let newPath = absPath + suffix[i];
            if (fs.existsSync(newPath)) {
                return newPath;
            }
        }
    }
    throw new Error(`${filename} is not exists`);
};

Module._extensions = {
    ".js"(module) {
        // 读取
        let content = fs.readFileSync(module.id, "utf-8");

        // 包装
        content = Module.wrapper[0] + content + Module.wrapper[1];

        // VM
        let compileFn = vm.runInThisContext(content);

        // 准备参数的值
        let exports = module.exports;
        let dirname = path.dirname(module.id);
        let filename = module.id;

        // 调用
        compileFn.call(exports, exports, myRequire, module, filename, dirname);
    },
    ".json"(module) {
        let content = JSON.parse(fs.readFileSync(module.id, "utf-8"));

        module.exports = content;
    },
};

Module.wrapper = [
    "(function (exports, require, module, __filename, __dirname) {",
    "})",
];

Module._cache = {};

Module.prototype.load = function () {
    let extname = path.extname(this.id);

    Module._extensions[extname](this);
};

function myRequire(filename) {
    // 1 绝对路径
    let mPath = Module._resolveFilename(filename);

    // 2 缓存优先
    let cacheModule = Module._cache[mPath];
    if (cacheModule) return cacheModule.exports;

    // 3 创建空对象加载目标模块
    let module = new Module(mPath);

    // 4 缓存已加载过的模块
    Module._cache[mPath] = module;

    // 5 执行加载（编译执行）
    module.load();

    // 6 返回数据
    return module.exports;
}

let obj = myRequire("./v");
let obj2 = myRequire("./v");
console.log(obj.age);
```

## 七、事件模块 Events

通过 EventEmitter 类实现事件统一管理。

#### 1. events 与 EventEmitter

-   Nodejs 是基于事件驱动的异步操作架构，内置 events 模块
-   events 模块提供了 EventEmitter 类
-   Nodejs 中很多内置核心模块继承 EventEmitter（如 **FS、HTTP、NET**）

#### 2. EventEmitter 类常见 API

-   on：添加当事件被触发时调用的回调函数
-   emit：触发事件，按照注册的序同步调用每个事件监听器
-   once：添加当事件在注册之后首次被触发时调用的回调函数
-   off：移除特定的监听器

```js
const EventEmitter = require("events");
const ev = new EventEmitter();

ev.on("事件1", function () {
    console.log(this);
});
ev.on("事件1", function () {
    console.log(2222);
});

ev.on("事件2", function () {
    console.log(333);
});

ev.emit("事件1");
```

打印 this 的值：

![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c1238996d4a346fdaa677a1001a9c435~tplv-k3u1fbpfcp-watermark.image?)

#### 3. 发布订阅（定义对象间一对多的依赖关系）

主要解决问题：在没有 Promise 的时候，事件触发后有一连串的异步操作，这些异步又相互依赖操作结果。  
工作流程：发布者发布事件，统一由调度中心，调用之前的订阅代码执行。

![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e63c67e8363b45c0a873c8b0cf057ee4~tplv-k3u1fbpfcp-watermark.image?)

#### 4. EventEmitter 模拟

```js
function MyEvent() {
    // 准备一个数据结构用于缓存订阅者信息
    this._events = Object.create(null);
}

MyEvent.prototype.on = function (type, callback) {
    // 判断当前次的事件是否已经存在，然后再决定如何做缓存
    if (this._events[type]) {
        this._events[type].push(callback);
    } else {
        this._events[type] = [callback];
    }
};

MyEvent.prototype.emit = function (type, ...args) {
    if (this._events && this._events[type].length) {
        this._events[type].forEach((callback) => {
            callback.call(this, ...args);
        });
    }
};

MyEvent.prototype.off = function (type, callback) {
    // 判断当前 type 事件监听是否存在，如果存在则取消指定的监听
    if (this._events && this._events[type]) {
        this._events[type] = this._events[type].filter((item) => {
            return item !== callback && item.link !== callback;
        });
    }
};

MyEvent.prototype.once = function (type, callback) {
    let foo = function (...args) {
        callback.call(this, ...args);
        this.off(type, foo);
    };
    foo.link = callback;
    this.on(type, foo);
};

let ev = new MyEvent();

let fn = function (...data) {
    console.log("事件1执行了", data);
};

ev.once("事件1", fn);
// ev.off('事件1', fn)
ev.emit("事件1", "前");
```

## 八、事件环

#### 1. 浏览器中的事件环

```js
setTimeout(() => {
    console.log("s1");
    Promise.resolve().then(() => {
        console.log("p2");
    });
    Promise.resolve().then(() => {
        console.log("p3");
    });
});

Promise.resolve().then(() => {
    console.log("p1");
    setTimeout(() => {
        console.log("s2");
    });
    setTimeout(() => {
        console.log("s3");
    });
});

// p1 s1 p2 p3 s2 s3
```

完整事件环执行顺序:

-   从上至下执行所有的同步代码.
-   执行过程中将遇到的宏任务与微任务添加至相应的队列.
-   同步代码执行完毕后，执行满足条件的微任务回调.
-   微任务队列执行完毕后执行所有满足需求的宏任务回调.
-   事件环操作

> 注意：宏任务之后就会立刻检查微任务队列

#### 2. Nodejs 中的事件环

Nodejs 的 6 个事件队列：每一个队列中存放的都是回调函数，与浏览器一个宏任务不同。他们都有微任务队列。

-   timers: 执行 setTimout 与 setInterval 回调
-   pending callbacks: 执行操作系统的回调，例如 tcp udp **（暂不用考虑）**
-   idle,prepare: 只在系统内部使用 **（暂不用考虑）**
-   poll: 执行与 I/O 相关的回调
-   check: 执行 setImmediate 中的回调
-   close callbacks: 执行 close 事件回调 **（暂不用考虑）**

![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f50ea443475846848d1a2d07c81a2d61~tplv-k3u1fbpfcp-watermark.image?)

Nodejs 完整事件环的执行：

-   执行同步代码，将不同的任务添加至相应的队列
-   所有同步代码执行后会去执行满足条件微任务
-   所有微任务代码执行后会执行 timer 队列中满足的宏任务
-   timer 中的所有宏任务执行完成后就会依次切换队列
    > 注意：在完成队列切换之前会先清空微任务代码。优先级 process.nextTick() > Promise 是 Nodejs 平台的微任务。

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/840d3cc3a6fe4a789b1db59351428a19~tplv-k3u1fbpfcp-watermark.image?)

Nodejs 事件环梳理：（新版 Node 改为每执行完一个宏任务就清空微任务队列，保持和浏览器一致）

![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/fe97a8be5e5f49d88b3e0fde86000221~tplv-k3u1fbpfcp-watermark.image?)

#### 3. Nodejs 器事件环常见问题

![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/556408c03d5945ed804ab70df6caf9c1~tplv-k3u1fbpfcp-watermark.image?)

## 九、核心模块 Stream

文件操作系统和网络模块实现了流接口。Nodejs 中的流就是处理流式数据的抽象接口。

#### 1. 为什么使用流来处理数据？

问题：

-   同步读取资源文件，用户需要等待数据读取完成。
-   资源文件最终一次性加载至内存，开销比较大

![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7d161abbf9eb4028908e49c6072f242a~tplv-k3u1fbpfcp-watermark.image?)

优势：

-   时间效率：流的分段处理可以同时操作多个数据 chunk
-   空间效率：同一时间无须占用大内存空间
-   使用方便：流配合管道连接，扩展程序比较简单

流的分类(以下 4 个是具体的抽象，所有的流都继承了 EventEmitter)：

-   Readable: 可读流，能够实现数据的读取
-   Writeable: 可写流，能够事件数据的写操作
-   Duplex: 双工流，即可写也可读（如 Net 模块内的 socket）
-   Tranform: 转换流，可读可写，还能实现数据转换（如 Zlib 下的 createDeffort）

示例：

```js
const fs = require("fs");

let rs = fs.createReadStream("./test.txt");
let ws = fs.createWriteStream("./test1.txt");
// 执行拷贝行为
rs.pipe(ws);
```

#### 2. 可读流

可读流是生产供程序消费数据的流。  
自定义可读流：

-   继承 stream 里 Readable
-   重写\_read 方法调用 push 方法将读取的数据添加到缓冲区（一个链表结构）
    自定义可读流的问题：
-   底层数据读取完成后该如何处理？给数组的最后添加一个空值
-   消费者如何获取可读流中的数据？Readable 提供了两个事件：readable 事件、data 事件,为了满足不同的数据使用场景，因此有流动模式、暂停模式。

![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3e296278abc04c8a9b2588ad785de657~tplv-k3u1fbpfcp-watermark.image?)

消费数据：

-   reabable 事件：当缓存区准备好，也就是当流中存在可读取数据时触发。直到消费者拿到 null 之后，标识底层数据已经读取完。
-   data 事件：可读流处于流动模式，当流中数据块传给消费者后触发。同样读取到 null 之后，消费行为结束。
-   end 事件：数据被消费完之后触发。

```js
const { Readable } = require("stream");

// 模拟底层数据
let source = ["lg", "zce", "syy"];

// 自定义类继承 Readable
class MyReadable extends Readable {
    constructor(source) {
        super();
        this.source = source;
    }
    _read() {
        let data = this.source.shift() || null;
        this.push(data);
    }
}

// 实例化
let myReadable = new MyReadable(source);

// 暂停模式
myReadable.on("readable", () => {
    let data = null;
    while ((data = myReadable.read(2)) != null) {
        // 依次打印 lg  zc  es  yy
        console.log(data.toString());
    }
});

// 流动模式 (可能都不需要往缓存中添加)
// myReadable.on('data', (chunk) => {
//   //依次打印 lg  zce   syy
//   console.log(chunk.toString())
// })

myReadable.on("end", (chunk) => {
    console.log("end: 消费结束");
});
```

#### 3. 可写流

可写流是用于消费数据的流。
自定义可写流：

-   继承 stream 里 Writeable
-   重写\_write 方法调用 write 方法执行写入
    可写流事件：
-   pipe 事件：可读流调用 pipe（） 方法时触发
-   unpipe 事件：可读流调用 unpipe（）方法时触发
-   drain 事件：中文译为抽干

```js
const { Writable } = require("stream");

class MyWriteable extends Writable {
    constructor() {
        super();
    }
    _write(chunk, en, done) {
        process.stdout.write(chunk.toString() + "<----");
        process.nextTick(done);
    }
}

let myWriteable = new MyWriteable();

myWriteable.write("AABBCC", "utf-8", () => {
    console.log("end");
});
```

#### 4. 双工（Duplex）和转换流（Transform）

Duplex: 双工流，既能生产又能消费数据，读和写相互独立的。

```
let { Duplex } = require('stream')

class MyDuplex extends Duplex {
  constructor(source) {
    super()
    this.source = source
  }
  _read() {
    let data = this.source.shift() || null
    this.push(data)
  }
  _write(chunk, en, next) {
    process.stdout.write(chunk)
    process.nextTick(next)
  }
}

let source = ['a', 'b', 'c']
let myDuplex = new MyDuplex(source)

/* myDuplex.on('data', (chunk) => {
  console.log(chunk.toString())
}) */
myDuplex.write('AABBXCC', () => {
  console.log(1111)
})
```

Transform: 双工流，但底层将读写操作进行了联通，可以对数据相应的转换操作。

```js
let { Transform } = require("stream");

class MyTransform extends Transform {
    constructor() {
        super();
    }
    _transform(chunk, en, cb) {
        this.push(chunk.toString().toUpperCase());
        cb(null);
    }
}

let t = new MyTransform();

t.write("a");

t.on("data", (chunk) => {
    console.log(chunk.toString());
});
```

## 十、文件可读流和可写流

#### 1. 文件可读流的创建、消费、事件、应用

```js
const fs = require("fs");

let rs = fs.createReadStream("test.txt", {
    flags: "r",
    encoding: null,
    fd: null,
    mode: 438,
    autoClose: true,
    start: 0,
    // end: 3,
    highWaterMark: 4,
});

/* rs.on('data', (chunk) => {
  console.log(chunk.toString())
  rs.pause()
  setTimeout(() => {
    rs.resume()
  }, 1000)
}) */

/* rs.on('readable', () => {
  // let data = rs.read()
  // console.log(data)
  let data
  while((data = rs.read(1)) !== null) {
    console.log(data.toString())
    console.log('----------', rs._readableState.length)
  }
}) */

rs.on("open", (fd) => {
    console.log(fd, "文件打开了");
});

rs.on("close", () => {
    console.log("文件关闭了");
});
let bufferArr = [];
rs.on("data", (chunk) => {
    bufferArr.push(chunk);
});

rs.on("end", () => {
    console.log(Buffer.concat(bufferArr).toString());
    console.log("当数据被清空之后");
});

rs.on("error", (err) => {
    console.log("出错了");
});
```

#### 2. 文件可写流

-   创建可写流

```js
const fs = require("fs");

const ws = fs.createWriteStream("test.txt", {
    flags: "w",
    mode: 438,
    fd: null,
    encoding: "utf-8",
    start: 0,
    highWaterMark: 3,
});

let buf = Buffer.from("abc");

// 字符串 或者  buffer ===》 fs rs
/* ws.write(buf, () => {
  console.log('ok2')
}) */

/* ws.write('AABB', () => {
  console.log('ok1')
}) */

/* ws.on('open', (fd) => {
  console.log('open', fd)
}) */

ws.write("2");

// close 是在数据写入操作全部完成之后再执行
/* ws.on('close', () => {
  console.log('文件关闭了')
}) */

// end 执行之后就意味着数据写入操作完成
ws.end("AABB");

// error
ws.on("error", (err) => {
    console.log("出错了");
});
```

-   write 执行流程

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/990093b6db1d4efa97a6ddbbb36a5b97~tplv-k3u1fbpfcp-watermark.image?)

-   控制写入速度

```js
/**
 * 需求：“AABBCC” 写入指定的文件
 * 01 一次性写入
 * 02 分批写入
 * 对比：
 */
let fs = require("fs");

let ws = fs.createWriteStream("test.txt", {
    highWaterMark: 3,
});

// ws.write('AABBCC')
let source = "AABBCC".split("");
let num = 0;
let flag = true;

function executeWrite() {
    flag = true;
    while (num !== 4 && flag) {
        flag = ws.write(source[num]);
        num++;
    }
}

executeWrite();

ws.on("drain", () => {
    console.log("drain 执行了");
    executeWrite();
});
```

-   背压机制
    Nodejs 的 stream 已经实现了背压机制。

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1921ddb8d7144fd7829d7c6f1e0ba92b~tplv-k3u1fbpfcp-watermark.image?)

> 存在问题：生产者产生数据的速度远远大于消费者消费数据的速度，readable 内部维护了一个队列，将展示无法消费的数据缓存到队列中。但是队列的内存大小是有上限的（默认 16kb,文件可读流 64kb），因此读写的过程中不实现一个背压的机制，很有可能会出现内存溢出、GC 频繁调用，其他进程变慢。

数据的读操作图示：

![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/288241d02d95479e8242f7c3b81bf9a4~tplv-k3u1fbpfcp-watermark.image?)

数据写操作图示：

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ed2ad755864e4c29aa15e1c18a9b2e84~tplv-k3u1fbpfcp-watermark.image?)

解析 pipe 方法背压机制内部的原理：

```js
let fs = require("fs");
let rs = fs.createReadStream("test.txt", { highWaterMark: 4 });
let ws = fs.createWriteStream("test1.txt", { highWaterMark: 1 });

let flag = true;

rs.on("data", (chunk) => {
    flag = ws.write(chunk, () => {
        console.log("写完了");
    });
    if (!flag) {
        rs.pause();
    }
});

ws.on("drain", () => {
    rs.resume();
});

// rs.pipe(ws)
```

#### 3. 模拟文件可读流

```js
const fs = require("fs");
const EventEmitter = require("events");

class MyFileReadStream extends EventEmitter {
    constructor(path, options = {}) {
        super();
        this.path = path;
        this.flags = options.flags || "r";
        this.mode = options.mode || 438;
        this.autoClose = options.autoClose || true;
        this.start = options.start || 0;
        this.end = options.end;
        this.highWaterMark = options.highWaterMark || 64 * 1024;
        this.readOffset = 0;

        this.open();

        this.on("newListener", (type) => {
            if (type === "data") {
                this.read();
            }
        });
    }
    open() {
        // 原生 open 方法来打开指定位置上的文件
        fs.open(this.path, this.flags, this.mode, (err, fd) => {
            if (err) {
                this.emit("error", err);
            }
            this.fd = fd;
            this.emit("open", fd);
        });
    }
    read() {
        if (typeof this.fd !== "number") {
            return this.once("open", this.read);
        }

        let buf = Buffer.alloc(this.highWaterMark);

        let howMuchToRead = this.end
            ? Math.min(this.end - this.readOffset + 1, this.highWaterMark)
            : this.highWaterMark;

        fs.read(
            this.fd,
            buf,
            0,
            howMuchToRead,
            this.readOffset,
            (err, readBytes) => {
                if (readBytes) {
                    this.readOffset += readBytes;
                    this.emit("data", buf.slice(0, readBytes));
                    this.read();
                } else {
                    this.emit("end");
                    this.close();
                }
            }
        );
    }
    close() {
        fs.close(this.fd, () => {
            this.emit("close");
        });
    }
}

let rs = new MyFileReadStream("test.txt", {
    end: 7,
    highWaterMark: 3,
});

rs.on("data", (chunk) => {
    console.log(chunk);
});
```

#### 4. 链表结构（一系列节点的集合）

数组相对链表储存队列的缺陷：

-   在多个语言下，数组存放数据的长度具有上限。
-   数组在插入和删除元素时，都会移动其他元素的位置。
-   在 JS 中数组被实现成了一个对象，在使用效率上会低一些。

链表分类：

-   双向链表
-   单向链表
-   循环链表

单向链表（默认 head 指向 null）：

![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d82cc1484edf401f9ce2667d39c03c0c~tplv-k3u1fbpfcp-watermark.image?)

双向链表就是在 element 节点上增加一个 prev 属性。循环链表是将首位链接起来。

单向链表实现：

```js
/* 
  01 node + head + null 
  02 head --->null 
  03 size 
  04 next element
  05 增加 删除 修改 查询 清空 
*/
class Node {
    constructor(element, next) {
        this.element = element;
        this.next = next;
    }
}

class LinkedList {
    constructor(head, size) {
        this.head = null;
        this.size = 0;
    }
    _getNode(index) {
        if (index < 0 || index >= this.size) {
            throw new Error("越界了");
        }
        let currentNode = this.head;
        for (let i = 0; i < index; i++) {
            currentNode = currentNode.next;
        }
        return currentNode;
    }
    add(index, element) {
        if (arguments.length == 1) {
            element = index;
            index = this.size;
        }
        if (index < 0 || index > this.size) {
            throw new Error("cross the border");
        }
        if (index == 0) {
            let head = this.head; // 保存原有 head 的指向
            this.head = new Node(element, head);
        } else {
            let prevNode = this._getNode(index - 1);
            prevNode.next = new Node(element, prevNode.next);
        }
        this.size++;
    }

    remove(index) {
        if (index == 0) {
            let head = this.head;
            this.head = head.next;
        } else {
            let prevNode = this._getNode(index - 1);
            prevNode.next = prevNode.next.next;
        }
        this.size--;
    }
    set(index, element) {
        let node = this._getNode(index);
        node.element = element;
    }
    get(index) {
        return this._getNode(index);
    }
    clear() {
        this.head = null;
        this.size = 0;
    }
}

const l1 = new LinkedList();
l1.add("node1");
l1.add("node2");
l1.add(1, "node3");
// l1.remove(1)
l1.set(1, "node3-3");
// let a = l1.get(0)
l1.clear();
console.log(l1);
```

单向链表实现队列(先进先出-可写流的 readable)：

```js
// 接上代码
class Queue {
    constructor() {
        this.linkedList = new LinkedList();
    }
    enQueue(data) {
        this.linkedList.add(data);
    }
    deQueue() {
        return this.linkedList.remove(0);
    }
}

const q = new Queue();

q.enQueue("node1");
q.enQueue("node2");

let a = q.deQueue();
a = q.deQueue();
a = q.deQueue();

console.log(a);
```

#### 5. 模拟文件可写流
