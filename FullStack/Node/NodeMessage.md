# Nodejs 通信

## 一、网络通信

#### 1. 基本原理

-   主机之间需要有传输介质
-   主机必须有网卡设备（用于设备的调制和解调）
-   主机之间需要在通讯前，协商网络速率。
-   通信方式：交换机通讯、路由器通讯
-   交换机通过 Mac 地址来唯一标识一台主机，定位局域网中的其他主机

![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e096220a3d4a499da442b42b86676d65~tplv-k3u1fbpfcp-watermark.image?)

#### 2. 网络层次模型

##### OSI 七层模型

-   应用层：他是用户与网络、应用程序和网络的接口。可以用不同的协议完成用户请求的服务（http-->网站服务/ FTP-->文件传输服务/SSH-->远程登陆服务）。
-   表示层：数据加密、转换、压缩。
-   会话层：控制网络连接的建立与终止
-   传输层：控制数据传输的可靠性（基于端口的协议层）
-   网络层：通过路由确定目标网络
-   数据链路层：通过 MAC 地址，确定目标主机（APR 寻址协议）
-   物理层：各种物理设备和标准

#### 3. TCP 通信

##### TCP 协议：

-   属于传输层协议
-   面向连接的协议
-   用于处理实时通信
    TCP 报文：

![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/5d97f3abf4554b2ea45969b0286b3b09~tplv-k3u1fbpfcp-watermark.image?)

TCP 三次握手与四次挥手

![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d4739448941e465fac0ea89435ec0239~tplv-k3u1fbpfcp-watermark.image?)

![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/fe89c7e2932c4a989351d2db3ac772db~tplv-k3u1fbpfcp-watermark.image?)

> 四次挥手的原因：由于一个服务端会服务于多个客户端，我们不能保证客户端请求断开连接后，服务端能将结果立即返回给客户端。

##### 创建 TCP 通信过程

-   创建服务端：接收和回写客户端数据
-   创建客户端：发送和接收服务端数据
-   数据传输：内置服务事件和方法读写数据

##### 通信事件&方法

-   listening 事件：调用 server.listen 方法之后触发
-   connection 事件：新的连接建立时触发
-   close 事件：当 server 关闭时触发
-   error 事件：当错误出现的时候触发
-   data 事件：当接收到数据的时触发该事件
-   write 方法：在 socket 上发送数据，默认是 UT8 编码
-   end 操作：当 socket 的一端发送 FIN 包时触发，结束可读端

##### TCP 粘包及解决

```js
const net = require("net");

// 创建服务端实例
const server = net.createServer();
const PORT = 1234;
const HOST = "localhost";
server.listen(PORT, HOST);

server.on("listening", () => {
    console.log(`服务端已经开启在 ${HOST}: ${PORT}`);
});

// 接收消息 回写消息
server.on("connection", (socket) => {
    socket.on("data", (chunk) => {
        const msg = chunk.toString();
        console.log(msg);

        // 回数据
        socket.write(Buffer.from("您好" + msg));
    });
});

server.on("close", () => {
    console.log("服务端关闭了");
});

server.on("error", (err) => {
    if (err.code == "EADDRINUSE") {
        console.log("地址正在被使用");
    } else {
        console.log(err);
    }
});
```

```js
const net = require("net");

const client = net.createConnection({
    port: 1234,
    host: "127.0.0.1",
});

let dataArr = ["AABBCC2", "AABBCC3", "AABBCC4", "AABBCC5"];

client.on("connect", () => {
    client.write("AABBCC1");
    // 解决数据粘包
    for (let i = 0; i < dataArr.length; i++) {
        (function (val, index) {
            setTimeout(() => {
                client.write(val);
            }, 1000 * (index + 1));
        })(dataArr[i], i);
    }
});

client.on("data", (chunk) => {
    console.log(chunk.toString());
});

client.on("error", (err) => {
    console.log(err);
});

client.on("close", () => {
    console.log("客户端断开连接");
});
```

##### 封包拆包：为了避免客户端连续多次发送数据时，出现粘包的现象。

-   包的结构：

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e2fe4f6cfa77436785c4ea2d40aef392~tplv-k3u1fbpfcp-watermark.image?)

-   数据传输过程：进行数据编码，获取二进制数据包；按规则拆解数据，获取指定长度的数据。
-   Buffer 数据读写：通过 writeIn16BE 将 value 从指定位置写入; 通过 readIn16BE 从指定位置开始读取数据。

```js
class MyTransformCode {
    constructor() {
        this.packageHeaderLen = 4; // header总长度
        this.serialNum = 0; // 序列号
        this.serialLen = 2; // 消息体长度
    }

    // 编码
    encode(data, serialNum) {
        const body = Buffer.from(data);

        // 01 先按照指定的长度来申请一片内存空间做为 header 来使用
        const headerBuf = Buffer.alloc(this.packageHeaderLen);

        // 02
        headerBuf.writeInt16BE(serialNum || this.serialNum);

        headerBuf.writeInt16BE(body.length, this.serialLen);

        if (serialNum == undefined) {
            this.serialNum++;
        }

        return Buffer.concat([headerBuf, body]);
    }

    // 解码
    decode(buffer) {
        const headerBuf = buffer.slice(0, this.packageHeaderLen);
        const bodyBuf = buffer.slice(this.packageHeaderLen);

        return {
            serialNum: headerBuf.readInt16BE(),
            bodyLength: headerBuf.readInt16BE(this.serialLen),
            body: bodyBuf.toString(),
        };
    }

    // 获取包长度的方法
    getPackageLen(buffer) {
        if (buffer.length < this.packageHeaderLen) {
            return 0;
        } else {
            return this.packageHeaderLen + buffer.readInt16BE(this.serialLen);
        }
    }
}

module.exports = MyTransformCode;
```

#### 4. Http 协议

-   请求行: GET / HTTP/1.1
-   请求头: Host: localhost:1234 Connection: keep-alive ....
-   请求空行：
-   请求体: {"pageNum":1,"pageSize":10 ...}
-   响应行: GET / HTTP/1.1
-   响应头: Connection: keep-alive
-   响应空行：
-   响应体: {"code":200,"message": ...}

##### 获取 http 请求头：

```js
  ...
  // 请求路径
  let {pathname, query} = url.parse(req.url, true)
  console.log(pathname, '----', query)

  // 请求方式
  console.log(req.method)

  // 版本号
  // console.log(req.httpVersion)

  // 请求头
  // console.log(req.headers)

  // 请求体数据获取
  let arr = []
  req.on('data', (data) => {
    arr.push(data)
  })
  req.on('end', () => {
    console.log(Buffer.concat(arr).toString())
  })
  ...
```

##### 设置 http 响应：

```js
...
  // res.write('ok')
  // res.end()
  // res.end('test ok')
  res.statusCode = 302
  res.setHeader('Content-type', 'text/html;charset=utf-8')
  res.end('AABBCC')
...
```

代理客户端：

```js
const http = require("http");

const server = http.createServer((req, res) => {
    // console.log('请求进来了')
    let arr = [];
    req.on("data", (data) => {
        arr.push(data);
    });
    req.on("end", () => {
        console.log(Buffer.concat(arr).toString());
        res.end("111111");
    });
});
server.listen(1234, () => {
    console.log("外部服务端启动了");
});
```

```js
const http = require("http");

let options = { host: "localhost", port: 1234, path: "/", method: "POST" };
let server = http.createServer((request, response) => {
    let req = http.request(options, (res) => {
        let arr = [];
        res.on("data", (data) => {
            arr.push(data);
        });
        res.on("end", () => {
            // console.log(Buffer.concat(arr).toString())
            let ret = Buffer.concat(arr).toString();
            response.setHeader("Content-type", "text/html;charset=utf-8");
            response.end(ret);
        });
    });

    req.end("拉勾教育");
});

server.listen(2345, () => {
    console.log("本地的服务端启动了");
});
```

##### Http 静态服务:

```js
const http = require("http");
const url = require("url");
const path = require("path");
const fs = require("fs");
const mime = require("mime");

const server = http.createServer((req, res) => {
    // console.log('请求进来了')
    // 1 路径处理
    let { pathname, query } = url.parse(req.url);
    pathname = decodeURIComponent(pathname);
    let absPath = path.join(__dirname, pathname);
    // console.log(absPath)
    // 2 目标资源状态处理
    fs.stat(absPath, (err, statObj) => {
        if (err) {
            res.statusCode = 404;
            res.end("Not Found");
            return;
        }
        if (statObj.isFile()) {
            // 此时说明路径对应的目标是一个文件，可以直接读取然后回写
            fs.readFile(absPath, (err, data) => {
                res.setHeader(
                    "Content-type",
                    mime.getType(absPath) + ";charset=utf-8"
                );
                res.end(data);
            });
        } else {
            fs.readFile(path.join(absPath, "index.html"), (err, data) => {
                res.setHeader(
                    "Content-type",
                    mime.getType(absPath) + ";charset=utf-8"
                );
                res.end(data);
            });
        }
    });
});
server.listen(1234, () => {
    console.log("server is start.....");
});
```
