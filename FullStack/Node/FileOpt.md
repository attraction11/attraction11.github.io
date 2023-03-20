---
outline: deep
---

# 文件操作

## 学习目标
- 理解同步和异步概念
- 掌握基本的文件读写
- 掌握 path 模块基本使用
- 理解文件操作的相对路径
## 同步和异步

fs 模块对文件的几乎所有操作都有同步和异步两种形式，例如：readFile() 和 readFileSync()。

同步与异步文件系统调用的区别

- 同步调用立即执行，会阻塞后续代码继续执行，如果想要捕获异常需要使用 try-catch
- 异步调用不会阻塞后续代码继续执行，需要回调函数作为额外的参数，通常包含一个错误作为回调函数的第一个参数
- 异步调用通过判断第一个 err 对象来处理异常
- 异步调用结果往往通过回调函数来进行获取

Node 只在文件 IO 操作中，提供了同步调用和异步调用两种形式，两者可以结合使用，
但是推荐能使用异步调用解决问题的情况下，少用同步调用。

对于文件操作，Node 几乎为所有的文件操作 API 提供了同步操作和异步操作两种方式。

- 同步会阻塞程序的执行，效率低（知道就行）
- 异步相当于多找了一个人帮你干活，效率高
- 所以建议：尽量使用异步

## 常用 API

| API | 作用 | 备注 |
| fs.access(path, callback)| 判断路径是否存在
| fs.appendFile(file, data, callback) | 向文件中追加内容
| fs.copyFile(src, callback) | 复制文件
| fs.mkdir(path, callback) | 创建目录
| fs.readDir(path, callback) | 读取目录列表
| fs.rename(oldPath, newPath, callback) | 重命名文件/目录
| fs.rmdir(path, callback) | 删除目录 | 只能删除空目录
| fs.stat(path, callback)| 获取文件/目录信息
| fs.unlink(path, callback) | 删除文件
| fs.watch(filename[, options][, listener]) | 监视文件/目录
| fs.watchFile(filename[, options], listener) | 监视文件

## 案例：Markdown 文件转换器

> 需求：用户编写 md 格式的文件，实时的编译成 html 文件

## 监视文件/目录

- [fs.watch(filename, options][, listener])
- [fs.watchFile(filename, options], listener)

## 文件流

- fs.createReadStream(path[, options])
- fs.createWriteStream(path[, options])

## path 模块

参考文档：https://nodejs.org/dist/latest-v9.x/docs/api/path.html

path 是 Node 本身提供的一个核心模块，专门用来处理路径。

使用它的第一步就是先加载：
```js
const path = require("path");
```

#### path.basename

获取一个路径的文件名部分
```js
path.basename("/foo/bar/baz/asdf/quux.html");
// Returns: 'quux.html'

path.basename("/foo/bar/baz/asdf/quux.html", ".html");
// Returns: 'quux'
```

#### path.dirname

获取一个路径的目录部分
```js
path.dirname("/foo/bar/baz/asdf/quux");
// Returns: '/foo/bar/baz/asdf'
```

#### path.extname

获取一个路径的后缀名部分
```js
path.extname("index.html");
// Returns: '.html'

path.extname("index.coffee.md");
// Returns: '.md'

path.extname("index.");
// Returns: '.'

path.extname("index");
// Returns: ''

path.extname(".index");
// Returns: ''
```

#### path.parse

将一个路径转换为一个对象，得到路径的各个组成部分
```js
path.parse("/home/user/dir/file.txt");
// Returns:
// { root: '/',
//   dir: '/home/user/dir',
//   base: 'file.txt',
//   ext: '.txt',
//   name: 'file' }
```

#### path.format(pathObject)

将具有特定属性的对象转换为一个路径
```js
// If `dir`, `root` and `base` are provided,
// `${dir}${path.sep}${base}`
// will be returned. `root` is ignored.
path.format({
  root: "/ignored",
  dir: "/home/user/dir",
  base: "file.txt"
});
// Returns: '/home/user/dir/file.txt'

// `root` will be used if `dir` is not specified.
// If only `root` is provided or `dir` is equal to `root` then the
// platform separator will not be included. `ext` will be ignored.
path.format({
  root: "/",
  base: "file.txt",
  ext: "ignored"
});
// Returns: '/file.txt'

// `name` + `ext` will be used if `base` is not specified.
path.format({
  root: "/",
  name: "file",
  ext: ".txt"
});
// Returns: '/file.txt'
```

#### path.join

将多个路径拼接为一个
```js
path.join("/foo", "bar", "baz/asdf", "quux", "..");
// Returns: '/foo/bar/baz/asdf'

path.join("foo", {}, "bar");
// throws 'TypeError: Path must be a string. Received {}'
```

#### path.isAbsolute

判断一个路径是否是绝对路径

Unix:
```js
path.isAbsolute("/foo/bar"); // true
path.isAbsolute("/baz/.."); // true
path.isAbsolute("qux/"); // false
path.isAbsolute("."); // false
```

Windows:
```js
path.isAbsolute("//server"); // true
path.isAbsolute("\\\\server"); // true
path.isAbsolute("C:/foo/.."); // true
path.isAbsolute("C:\\foo\\.."); // true
path.isAbsolute("bar\\baz"); // false
path.isAbsolute("bar/baz"); // false
path.isAbsolute("."); // false
```

#### path.normalize(path)

将一个非标准路径标准化
```js
path.normalize("/foo/bar//baz/asdf/quux/..");
// Returns: '/foo/bar/baz/asdf'

path.normalize("C:\\temp\\\\foo\\bar\\..\\");
// Returns: 'C:\\temp\\foo\\'
```

#### path.resolve([...paths])

类似于 path.join() ，也是用来路径拼接
```js
path.resolve("/foo/bar", "./baz");
// Returns: '/foo/bar/baz'

path.resolve("/foo/bar", "/tmp/file/");
// Returns: '/tmp/file'

path.resolve("wwwroot", "static_files/png/", "../gif/image.gif");
// if the current working directory is /home/myself/node,
// this returns '/home/myself/node/wwwroot/static_files/gif/image.gif'
```
## 文件操作的相对路径

建议：以后操作文件使用相对路径都使用 path.join() 方法结合 __dirname 来避免问题。

#### 路径分类

和大多数路径规则一样，在 Node 中的路径规则同样遵守以下方式：

- 绝对路径
  - 以 / 开头的路径，例如 /a/b/c
    - 在 Linux 中就是操作系统的根路径
    - 在 Windows 中是当前 JavaScript 脚本所属磁盘根路径
  - 以 c:/ 开头的盘符路径，例如 c:/a/b/c
- 相对路径
  - 以 ./ 开头的相对路径，例如 ./a/b/c
    - 在这里 ./ 可以省略，a/b/c 等价于 ./a/b/c
    - 注意，. 不能省略，否则 /a/b/c 就是一个绝对路径
  - 以 ../ 开头的相对路径，例如 ../a/b/c

```js
// 相对于当前路径
fs.readFile("./README.md");

// 相对当前路径，可以省略 ./
// 注意：加载模块中的标识路径不能省略 ./
fs.readFile("README.md");

// 绝对路径
fs.readFile("c:/README.md");

// 绝对路径，当前 js 脚本所处磁盘根目录
fs.readFile("/README.md");
```

#### 相对路径操作的问题

#### 相对路径到底相对于谁？

#### 如何解决某些时候相对路径带来的问题？

#### __dirname 和 __filename

在每个模块中，除了 require、exports 等模块成员之外，还有两个特殊的成员：

- __dirname 动态获取 当前文件模块所属目录的绝对路径
- __filename 动态获取 当前文件的绝对路径

dirname和__filename` 是不受执行 node 命令所属路径影响的

把相对路径转换为动态的绝对路径

使用 path.join() 方法解决拼接的问题

#### 路径使用整理

## 总结

- 相对路径永远是相对于执行 node 命令所处的路径
- 绝对路径永远是绝对路径，__dirname 永远不会受影响

注意：模块标识路径还是相对于文件模块本身，还这里的文件操作中的相对路径规则没有关系。