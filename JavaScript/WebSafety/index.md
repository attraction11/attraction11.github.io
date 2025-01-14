# 前端安全

前端常见安全问题的7个方面：

- iframe
- opener
- CSRF（跨站请求伪造）
- XSS（跨站脚本攻击）
- ClickJacking（点击劫持）
- HSTS（HTTP严格传输安全）
- CND劫持

## 1、iframe
- 如何让自己的网站不被其他网站的 iframe 引用？
```js
// 检测当前网站是否被第三方iframe引用
// 若相等证明没有被第三方引用，若不等证明被第三方引用。当发现被引用时强制跳转百度。
if(top.location != self.location){
    top.location.href = 'http://www.baidu.com'
}
```
- 如何禁用，被使用的 iframe 对当前网站某些操作？
:::tip
sandbox是html5的新属性，主要是提高iframe安全系数。iframe因安全问题而臭名昭著，这主要是因为iframe常被用于嵌入到第三方中，然后执行某些恶意操作。
现在有一场景：我的网站需要 iframe 引用某网站，但是不想被该网站操作DOM、不想加载某些js（广告、弹框等）、当前窗口被强行跳转链接等，我们可以设置 sandbox 属性。如使用多项用空格分隔
:::

- allow-same-origin：允许被视为同源，即可操作父级DOM或cookie等
- allow-top-navigation：允许当前iframe的引用网页通过url跳转链接或加载
- allow-forms：允许表单提交
- allow-scripts：允许执行脚本文件  
- allow-popups：允许浏览器打开新窗口进行跳转
- “”：设置为空时上面所有允许全部禁止

## 2、opener
如果在项目中需要 打开新标签 进行跳转一般会有两种方式
```js
// 1) HTML -> <a target='_blank' href='http://www.baidu.com'>
// 2)  JS  -> window.open('http://www.baidu.com')

/* 
 * 这两种方式看起来没有问题，但是存在漏洞。
 * 通过这两种方式打开的页面可以使用 window.opener 来访问源页面的 window 对象。
 * 场景：A 页面通过 <a> 或 window.open 方式，打开 B 页面。但是 B 页面存在恶意代码如下：
 * window.opener.location.replace('https://www.baidu.com') 【此代码仅针对打开新标签有效】
 * 此时，用户正在浏览新标签页，但是原来网站的标签页已经被导航到了百度页面。
 * 恶意网站可以伪造一个足以欺骗用户的页面，使得进行恶意破坏。
 * 即使在跨域状态下 opener 仍可以调用 location.replace 方法。
 */
```
- a标签解法
```html
<a target="_blank" href="" rel="noopener noreferrer nofollow">a标签跳转url</a>

<!-- 
  通过 rel 属性进行控制：
  noopener：会将 window.opener 置空，从而源标签页不会进行跳转（存在浏览器兼容问题）
  noreferrer：兼容老浏览器/火狐。禁用HTTP头部Referer属性（后端方式）。
  nofollow：SEO权重优化，详情见 https://blog.csdn.net/qq_33981438/article/details/80909881
 -->
```
- JS跳转解法
```js
<button onclick='openurl("http://www.baidu.com")'>click跳转</button>

function openurl(url) {
    var newTab = window.open();
    newTab.opener = null;
    newTab.location = url;
}
```

## 3、CSRF / XSRF（跨站请求伪造）
:::tip
你可以这么理解 CSRF 攻击：攻击者盗用了你的身份，以你的名义进行恶意请求。它能做的事情有很多包括：以你的名义发送邮件、发信息、盗取账号、购买商品、虚拟货币转账等。总结起来就是：个人隐私暴露及财产安全问题。  
 * 阐述 CSRF 攻击思想：（核心2和3）
 * 1、浏览并登录信任网站（举例：淘宝）
 * 2、登录成功后在浏览器产生信息存储（举例：cookie）
 * 3、用户在没有登出淘宝的情况下，访问危险网站
 * 4、危险网站中存在恶意代码，代码为发送一个恶意请求（举例：购买商品/余额转账）
 * 5、携带刚刚在浏览器产生的信息进行恶意请求
 * 6、淘宝验证请求为合法请求（区分不出是否是该用户发送）
 * 7、达到了恶意目标
 :::

防御措施（推荐添加token / HTTP头自定义属性）
   - 涉及到数据修改操作严格使用 post 请求而不是 get 请求
   - HTTP 协议中使用 Referer 属性来确定请求来源进行过滤（禁止外域）
   - 请求地址添加 token ，使黑客无法伪造用户请求
   - HTTP 头自定义属性验证（类似上一条）
   - 显示验证方式：添加验证码、密码等

## 4、XSS/CSS（跨站脚本攻击）
:::tip
XSS又叫CSS（Cross Site Script），跨站脚本攻击：攻击者在目标网站植入恶意脚本（js / html），用户在浏览器上运行时可以获取用户敏感信息（cookie / session）、修改web页面以欺骗用户、与其他漏洞相结合形成蠕虫等。
:::
浏览器遇到 html 中的 script 标签时，会解析并执行其中的js代码  

针对这种情况，我们对特殊字符进行转译就好了（vue/react等主流框架已经避免类似问题，vue举例：不能在template中写script标签，无法在js中通过ref或append等方式动态改变或添加script标签）  

XSS类型：
- 持久型XSS：将脚本植入到服务器上，从而导致每个访问的用户都会执行
- 非持久型XSS：对个体用户某url的参数进行攻击

防御措施（对用户输入内容和服务端返回内容进行过滤和转译）
- 现代大部分浏览器都自带 XSS 筛选器，vue / react 等成熟框架也对 XSS 进行一些防护
- 即便如此，我们在开发时也要注意和小心
- 对用户输入内容和服务端返回内容进行过滤和转译
- 重要内容加密传输
- 合理使用get/post等请求方式
- 对于URL携带参数谨慎使用
- 我们无法做到彻底阻止，但是能增加黑客攻击成本，当成本与利益不符时自然会降低风险

## 5、ClickJacking（点击劫持）
:::tip
ClickJacking 翻译过来被称为点击劫持。一般会利用透明 iframe 覆盖原网页诱导用户进行某些操作达成目的。
:::

防御措施
- 在HTTP头中加入 X-FRAME-OPTIONS 属性，此属性控制页面是否可被嵌入 iframe 中【DENY：不能被所有网站嵌套或加载；SAMEORIGIN：只能被同域网站嵌套或加载；ALLOW-FROM URL：可以被指定网站嵌套或加载。】
- 判断当前网页是否被 iframe 嵌套（详情在第一条 firame 中）

## 6、HSTS（HTTP Strict Transport Security：HTTP严格传输安全）
:::tip
网站接受从 HTTP 请求跳转到 HTTPS 请求的做法，例如我们输入“http://www.baidu.com”或“www.baidu.com”最终都会被302重定向到“[https://www.baidu.com](https://link.zhihu.com/?target=https%3A//www.baidu.com)”。这就存在安全风险，当我们第一次通过 HTTP 或域名进行访问时，302重定向有可能会被劫持，篡改成一个恶意或钓鱼网站。
HSTS：通知浏览器此网站禁止使用 HTTP 方式加载，浏览器应该自动把所有尝试使用 HTTP 的请求自动替换为 HTTPS 进行请求。用户首次访问时并不受 HSTS 保护，因为第一次还未形成链接。我们可以通过 浏览器预置HSTS域名列表 或 将HSTS信息加入到域名系统记录中，来解决第一次访问的问题。
:::

## 7、CDN劫持
:::tip
出于性能考虑，前端应用通常会把一些静态资源存放到CDN（Content Delivery Networks）上面，例如 js 脚本和 style 文件。这么做可以显著提高前端应用的访问速度，但与此同时却也隐含了一个新的安全风险。如果攻击者劫持了CDN，或者对CDN中的资源进行了污染，攻击者可以肆意篡改我们的前端页面，对用户实施攻击。
现在的CDN以支持SRI为荣，script 和 link 标签有了新的属性 integrity，这个属性是为了防止校验资源完整性来判断是否被篡改。它通过 验证获取文件的哈希值是否和你提供的哈希值一样来判断资源是否被篡改。
使用 SRI 需要两个条件：一是要保证 资源同域 或开启跨域，二是在中 提供签名 以供校验。
:::
integrity 属性分为两个部分，第一部分是指定哈希值的生成算法（例：sha384），第二部分是经过编码的实际哈希值，两者之前用一个短横(-)来分隔

## 8、前端安全相关-XSS和CSRF

XSS（Cross-site scripting），指的是跨站脚本攻击，攻击者通过向页面A注入代码，达到窃取信息等目的，本质是数据被当作程序执行。XSS危害是很大的，一般XSS可以做到以下的事情：

- 获取页面的数据，包括dom、cookies、localStorage等
- 劫持前端逻辑
- 发送请求

CSRF(Cross Site Request Frogy)指的是跨站请求伪造。与XSS不同的是，XSS是攻击者直接对我们的网站A进行注入攻击，CSRF是通过网站B对我们的网站A进行伪造请求。

举个例子，你登录购物网站A之后点击一个恶意链接B，B请求了网站A的下单接口，结果是你在网站A的帐号真的会生成一个订单。其背后的原理是：网站B通过表单、get请求来伪造网站A的请求，这时候请求会带上网站A的cookies，若登录态是保存在cookies中，则实现了伪造攻击。

1. XSS的类型

- 反射型（非持久）：通过URL参数直接注入
- 存储型（持久）：存储到数据库后读取时注入
- 基于DOM：被执行的恶意脚本会修改页面脚本结构
2. XSS的注入点

- HTML的节点内容或属性
- javascript代码
- 富文本

3. XSS的防御

-  浏览器的防御

防御和“X-XSS-Protection”有关，默认值为1，即默认打开XSS防御，可以防御反射型的XSS，不过作用有限，只能防御注入到HTML的节点内容或属性的XSS，例如URL参数中包含script标签。不建议只依赖此防御手段。

-  防御HTML节点内容

存在风险的代码：

```html
<template>
    <p>{{username}}</p>
</template>

<script>
    username = "<script>alert('xss')</script>"
</script>
```
编译后的代码：
```html
<p>
    <script>alert('xss')</script>
</p>
```
以上例子是采用vue语法，但其实在vue这样的框架中，{{username}}中的内容是经过字符串化的，所以是不会被浏览器执行的，若换其他模板语言例如jade，则可能存在风险。下同。

- 防御代码：

通过转义<为&lt以及>为&gt来实现防御HTML节点内容。
```html
<template>
    <p>{{username}}</p>
</template>
<script>
    escape = function(str){
        return str.replace(/</g, '&lt;').replace(/>/g, '&gt;')
    }
    username = escape("<script>alert('xss')</script>")
</script>
```
- 防御HTML属性
```html
<template>
    <img :src="image" />
</template>
<script>
    image = 'www.a.com/c.png" onload="alert(1)'
</script>
```
编译后代码：
```html
<img src="www.a.com/c.png" onload="alert(1)" />
```
防御代码：

通过转义"为&quto;、'为'来实现防御，一般不转义空格，但是这要求属性必须带引号！
```html
<template>
    <img :src="image" />
</template>
<script>
    escape = function(str){
        return str.replace(/"/g, '&quto;').replace(/'/g, '&#39;').replace(/ /g, '&#32;')
    }
    image = escape('www.a.com/c.png" onload="alert(1)')
</script>
```
- 防御javaScript代码

假设访问页面地址为www.a.com?id=1";alert(1);"

风险代码：
```js
var id = getQuery('id')
```
编译后代码：
```js
var id = "1";alert(1);""
```
防御代码：

通过将数据进行JSON序列化
```js
escape = function(str){
    return JSON.stringify(str)
}
```
- 防御富文本

风险代码：
```html
<template>
    <p v-html="richTxt"></p>
</template>

<script>
    richTxt = '<a onmouseover=alert(document.cookie)>点击</a>'
</script>
```
上面的这段代码中，当鼠标移动到“点击”上面时，就会触发alert弹窗！这在vue中是会发生的。

防御富文本是比较复杂的工程，因为富文本可以包含HTML和script，这些难以预测与防御，建议是通过白名单的方式来过滤允许的HTML标签和标签的属性来进行防御，大概的实现方式是：

    - 将HTML代码段转成树级结构的数据

    - 遍历树的每一个节点，过滤节点的类型和属性，或进行特殊处理

    - 处理完成后，将树级结构转化成HTML代码

当然，也可以通过开源的第三方库来实现，类似的有js-xss

- CSP 内容安全策略

CSP(content security policy)，是一个额外的安全层，用于检测并削弱某些特定类型的攻击，包括跨站脚本 (XSS) 和数据注入攻击等。

CSP可以通过HTTP头部（Content-Security-Policy）或``元素配置页面的内容安全策略，以控制浏览器可以为该页面获取哪些资源。比如一个可以上传文件和显示图片页面，应该允许图片来自任何地方，但限制表单的action属性只可以赋值为指定的端点。一个经过恰当设计的内容安全策略应该可以有效的保护页面免受跨站脚本攻击。

## 9、url的加密解密

JavaScript中有三个可以对字符串编码的函数，分别是： escape,encodeURI,encodeURIComponent，相应3个解码函数：unescape,decodeURI,decodeURIComponent 。

三种方式的特点：  
escape() 除了 ASCII 字母、数字和特定的符号外，对传进来的字符串全部进行转义编码，因此如果想对URL编码，最好不要使用此方法。  
encodeURI() 用于编码整个URI,因为URI中的合法字符都不会被编码转换。  
encodeURIComponent() 方法在编码单个URIComponent（指请求参数）应当是最常用的，它可以讲参数中的中文、特殊字符进行转义，而不会影响整个URL。

1. escape()函数

**定义和用法**  
escape() 函数可对字符串进行编码，这样就可以在所有的计算机上读取该字符串。

语法  
escape(string)

参数 描述  
string 必需。要被转义或编码的字符串。

返回值  
已编码的 string 的副本。其中某些字符被替换成了十六进制的转义序列。

说明  
该方法不会对 ASCII 字母和数字进行编码，也不会对下面这些 ASCII 标点符号进行编码： - _ . ! ~ * ' ( ) 。其他所有的字符都会被转义序列替换。

2. encodeURI()函数

**定义和用法**  
encodeURI() 函数可把字符串作为 URI 进行编码。

语法  
encodeURI(URIstring)

参数 描述  
URIstring 必需。一个字符串，含有 URI 或其他要编码的文本。

返回值  
URIstring 的副本，其中的某些字符将被十六进制的转义序列进行替换。

说明  
该方法不会对 ASCII 字母和数字进行编码，也不会对这些 ASCII 标点符号进行编码： - _ . ! ~ * ' ( ) 。

该方法的目的是对 URI 进行完整的编码，因此对以下在 URI 中具有特殊含义的 ASCII 标点符号，encodeURI() 函数是不会进行转义的：;/?:@&=+$,#

3. encodeURIComponent() 函数

**定义和用法**  
encodeURIComponent() 函数可把字符串作为 URI 组件进行编码。

语法  
encodeURIComponent(URIstring)

参数 描述  
URIstring 必需。一个字符串，含有 URI 组件或其他要编码的文本。

返回值  
URIstring 的副本，其中的某些字符将被十六进制的转义序列进行替换。

说明  
该方法不会对 ASCII 字母和数字进行编码，也不会对这些 ASCII 标点符号进行编码： - _ . ! ~ * ' ( ) 。

其他字符（比如 ：;/?:@&=+$,# 这些用于分隔 URI 组件的标点符号），都是由一个或多个十六进制的转义序列替换的。

提示和注释  
提示：请注意 encodeURIComponent() 函数 与 encodeURI() 函数的区别之处，前者假定它的参数是 URI 的一部分（比如协议、主机名、路径或查询字符串）。因此 encodeURIComponent() 函数将转义用于分隔 URI 各个部分的标点符号。