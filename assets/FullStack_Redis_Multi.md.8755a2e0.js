import{_ as s,c as n,o as a,a as l}from"./app.547186f3.js";const p="/assets/6.11812aa4.png",C=JSON.parse('{"title":"Redis \u4E8B\u52A1","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4E8B\u52A1\u7684\u57FA\u7840\u6982\u5FF5","slug":"\u4E8B\u52A1\u7684\u57FA\u7840\u6982\u5FF5","link":"#\u4E8B\u52A1\u7684\u57FA\u7840\u6982\u5FF5","children":[]},{"level":2,"title":"Redis \u4E2D\u7684\u4E8B\u52A1","slug":"redis-\u4E2D\u7684\u4E8B\u52A1","link":"#redis-\u4E2D\u7684\u4E8B\u52A1","children":[]},{"level":2,"title":"\u4E8B\u52A1\u4E2D\u7684\u9519\u8BEF\u5904\u7406","slug":"\u4E8B\u52A1\u4E2D\u7684\u9519\u8BEF\u5904\u7406","link":"#\u4E8B\u52A1\u4E2D\u7684\u9519\u8BEF\u5904\u7406","children":[]},{"level":2,"title":"\u4E8B\u52A1\u4E2D\u7684 WATCH \u547D\u4EE4","slug":"\u4E8B\u52A1\u4E2D\u7684-watch-\u547D\u4EE4","link":"#\u4E8B\u52A1\u4E2D\u7684-watch-\u547D\u4EE4","children":[]},{"level":2,"title":"\u53C2\u8003\u94FE\u63A5","slug":"\u53C2\u8003\u94FE\u63A5","link":"#\u53C2\u8003\u94FE\u63A5","children":[]}],"relativePath":"FullStack/Redis/Multi.md"}'),e={name:"FullStack/Redis/Multi.md"},c=l('<h1 id="redis-\u4E8B\u52A1" tabindex="-1">Redis \u4E8B\u52A1 <a class="header-anchor" href="#redis-\u4E8B\u52A1" aria-hidden="true">#</a></h1><h2 id="\u4E8B\u52A1\u7684\u57FA\u7840\u6982\u5FF5" tabindex="-1">\u4E8B\u52A1\u7684\u57FA\u7840\u6982\u5FF5 <a class="header-anchor" href="#\u4E8B\u52A1\u7684\u57FA\u7840\u6982\u5FF5" aria-hidden="true">#</a></h2><p>\u5173\u4E8E\u4E8B\u52A1\u6700\u5E38\u89C1\u7684\u4F8B\u5B50\u5C31\u662F\u94F6\u884C\u8F6C\u8D26\uFF0CA \u8D26\u6237\u7ED9 B \u8D26\u6237\u8F6C\u8D26\u4E00\u4E2A\u4EBF (T1)\uFF0C\u4E70\u4E00\u5757\u5730\u76D6\u623F\u5B50\u3002\u5728\u8FD9\u79CD\u4EA4\u6613\u7684\u8FC7\u7A0B\u4E2D\uFF0C\u6709\u51E0\u4E2A\u95EE\u9898\u503C\u5F97\u601D\u8003\uFF1A</p><ul><li>\u5982\u4F55\u540C\u65F6\u4FDD\u8BC1\u4E0A\u8FF0\u4EA4\u6613\u4E2D\uFF0CA\u8D26\u6237\u603B\u91D1\u989D\u51CF\u5C11\u4E00\u4E2A\u4EBF\uFF0CB\u8D26\u6237\u603B\u91D1\u989D\u589E\u52A0\u4E00\u4E2A\u4EBF\uFF1F A</li><li>A\u8D26\u6237\u5982\u679C\u540C\u65F6\u5728\u548CC\u8D26\u6237\u4EA4\u6613(T2)\uFF0C\u5982\u4F55\u8BA9\u8FD9\u4E24\u7B14\u4EA4\u6613\u4E92\u4E0D\u5F71\u54CD\uFF1F I</li><li>\u5982\u679C\u4EA4\u6613\u5B8C\u6210\u65F6\u6570\u636E\u5E93\u7A81\u7136\u5D29\u6E83\uFF0C\u5982\u4F55\u4FDD\u8BC1\u4EA4\u6613\u6570\u636E\u6210\u529F\u4FDD\u5B58\u5728\u6570\u636E\u5E93\u4E2D\uFF1F D</li><li>\u5982\u4F55\u5728\u652F\u6301\u5927\u91CF\u4EA4\u6613\u7684\u540C\u65F6\uFF0C\u4FDD\u8BC1\u6570\u636E\u7684\u5408\u6CD5\u6027(\u6CA1\u6709\u94B1\u51ED\u7A7A\u4EA7\u751F\u6216\u6D88\u5931) \uFF1F C</li></ul><p>\u8981\u4FDD\u8BC1\u4EA4\u6613\u6B63\u5E38\u53EF\u9760\u5730\u8FDB\u884C\uFF0C\u6570\u636E\u5E93\u5C31\u5F97\u89E3\u51B3\u4E0A\u9762\u7684\u56DB\u4E2A\u95EE\u9898\uFF0C\u8FD9\u4E5F\u5C31\u662F\u4E8B\u52A1\u8BDE\u751F\u7684\u80CC\u666F\uFF0C\u5B83\u80FD\u89E3\u51B3\u4E0A\u9762\u7684\u56DB\u4E2A\u95EE\u9898\uFF0C\u5BF9\u5E94\u5730\uFF0C\u5B83\u62E5\u6709\u56DB\u5927\u7279\u6027\uFF08ACID\uFF09\u3002</p><p><img src="'+p+`" alt="img"></p><p>\uFF081\uFF09\u539F\u5B50\u6027\uFF08Atomicity\uFF09: \u4E8B\u52A1\u8981\u4E48\u5168\u90E8\u5B8C\u6210\uFF0C\u8981\u4E48\u5168\u90E8\u53D6\u6D88\u3002 \u5982\u679C\u4E8B\u52A1\u5D29\u6E83\uFF0C\u72B6\u6001\u56DE\u5230\u4E8B\u52A1\u4E4B\u524D\uFF08\u4E8B\u52A1\u56DE\u6EDA\uFF09\u3002</p><p>\u786E\u4FDD\u4E0D\u7BA1\u4EA4\u6613\u8FC7\u7A0B\u4E2D\u53D1\u751F\u4E86\u4EC0\u4E48\u610F\u5916\u72B6\u51B5\uFF08\u670D\u52A1\u5668\u5D29\u6E83\u3001\u7F51\u7EDC\u4E2D\u65AD\u7B49\uFF09\uFF0C\u4E0D\u80FD\u51FA\u73B0A\u8D26\u6237\u5C11\u4E86\u4E00\u4E2A\u4EBF\uFF0C\u4F46B\u8D26\u6237\u6CA1\u5230\u5E10\uFF0C\u6216\u8005A\u8D26\u6237\u6CA1\u53D8\uFF0C\u4F46B\u8D26\u6237\u5374\u51ED\u7A7A\u6536\u5230\u4E00\u4E2A\u4EBF\uFF08\u6570\u636E\u4E0D\u4E00\u81F4\uFF09\u3002A\u548CB\u8D26\u6237\u7684\u91D1\u989D\u53D8\u52A8\u8981\u4E48\u540C\u65F6\u6210\u529F\uFF0C\u8981\u4E48\u540C\u65F6\u5931\u8D25(\u4FDD\u6301\u539F\u72B6)\u3002</p><p>\uFF082\uFF09\u9694\u79BB\u6027\uFF08Isolation\uFF09: \u5982\u679C2\u4E2A\u4E8B\u52A1 T1 \u548C T2 \u540C\u65F6\u8FD0\u884C\uFF0C\u4E8B\u52A1 T1 \u548C T2 \u6700\u7EC8\u7684\u7ED3\u679C\u662F\u76F8\u540C\u7684\uFF0C\u4E0D\u7BA1 T1\u548CT2\u8C01\u5148\u7ED3\u675F\u3002</p><p>\u5982\u679CA\u5728\u8F6C\u8D261\u4EBF\u7ED9B\uFF08T1\uFF09\uFF0C\u540C\u65F6C\u53C8\u5728\u8F6C\u8D263\u4EBF\u7ED9A\uFF08T2\uFF09\uFF0C\u4E0D\u7BA1T1\u548CT2\u8C01\u5148\u6267\u884C\u5B8C\u6BD5\uFF0C\u6700\u7EC8\u7ED3\u679C\u5FC5\u987B\u662FA\u8D26\u6237\u589E\u52A02\u4EBF\uFF0C\u800C\u4E0D\u662F3\u4EBF\uFF0CB\u589E\u52A01\u4EBF\uFF0CC\u51CF\u5C113\u4EBF\u3002</p><p>\uFF083\uFF09\u6301\u4E45\u6027\uFF08Durability\uFF09: \u4E00\u65E6\u4E8B\u52A1\u63D0\u4EA4\uFF0C\u4E0D\u7BA1\u53D1\u751F\u4EC0\u4E48\uFF08\u5D29\u6E83\u6216\u8005\u51FA\u9519\uFF09\uFF0C\u6570\u636E\u8981\u4FDD\u5B58\u5728\u6570\u636E\u5E93\u4E2D\u3002 \u786E\u4FDD\u5982\u679C T1 \u521A\u521A\u63D0\u4EA4\uFF0C\u6570\u636E\u5E93\u5C31\u53D1\u751F\u5D29\u6E83\uFF0CT1\u6267\u884C\u7684\u7ED3\u679C\u4F9D\u7136\u4F1A\u4FDD\u6301\u5728\u6570\u636E\u5E93\u4E2D\u3002</p><p>\uFF084\uFF09\u4E00\u81F4\u6027\uFF08Consistency\uFF09: \u53EA\u6709\u5408\u6CD5\u7684\u6570\u636E\uFF08\u4F9D\u7167\u5173\u7CFB\u7EA6\u675F\u548C\u51FD\u6570\u7EA6\u675F\uFF09\u624D\u80FD\u5199\u5165\u6570\u636E\u5E93\u3002 \u786E\u4FDD\u94B1\u4E0D\u4F1A\u5728\u7CFB\u7EDF\u5185\u51ED\u7A7A\u4EA7\u751F\u6216\u6D88\u5931\uFF0C \u4F9D\u8D56\u539F\u5B50\u6027\u548C\u9694\u79BB\u6027\u3002</p><p>\u53EF\u4EE5\u770B\u51FA\uFF0C\u539F\u5B50\u6027\u3001\u9694\u79BB\u6027\u3001\u4E00\u81F4\u6027\u7684\u6839\u672C\u95EE\u9898\uFF0C\u662F\u4E0D\u540C\u7684\u4E8B\u52A1\u540C\u65F6\u5BF9\u540C\u4E00\u4EFD\u6570\u636E(A\u8D26\u6237)\u8FDB\u884C\u5199\u64CD\u4F5C(\u4FEE\u6539\u3001\u5220\u9664\u3001\u65B0\u589E)\uFF0C\u5982\u679C\u4E8B\u52A1\u4E2D\u90FD\u53EA\u662F\u8BFB\u6570\u636E\u7684\u8BDD\uFF0C\u90A3\u4E48\u5B83\u4EEC\u53EF\u4EE5\u968F\u610F\u5730\u540C\u65F6\u8FDB\u884C\uFF0C\u53CD\u6B63\u8BFB\u5230\u7684\u6570\u636E\u90FD\u662F\u4E00\u6837\u7684\u3002</p><p>\u5982\u679C\uFF0C\u51E0\u4E2A\u4E92\u4E0D\u77E5\u6653\u7684\u4E8B\u52A1\u5728\u540C\u65F6\u4FEE\u6539\u540C\u4E00\u4EFD\u6570\u636E\uFF0C\u90A3\u4E48\u5F88\u5BB9\u6613\u51FA\u73B0\u540E\u5B8C\u6210\u7684\u4E8B\u52A1\u8986\u76D6\u4E86\u524D\u9762\u7684\u4E8B\u52A1\u7684\u7ED3\u679C\uFF0C\u5BFC\u81F4\u4E0D\u4E00\u81F4\u3002 \u4E8B\u52A1\u5728\u6700\u7EC8\u63D0\u4EA4\u4E4B\u524D\u90FD\u6709\u53EF\u80FD\u4F1A\u56DE\u6EDA\uFF0C\u64A4\u9500\u6240\u6709\u4FEE\u6539\uFF1A</p><ul><li>\u5982\u679CT1\u4E8B\u52A1\u4FEE\u6539\u4E86A\u8D26\u6237\u7684\u6570\u636E\uFF0C</li><li>\u8FD9\u65F6T2\u4E8B\u52A1\u8BFB\u5230\u4E86\u66F4\u65B0\u540E\u7684A\u8D26\u6237\u6570\u636E\uFF0C\u5E76\u8FDB\u884C\u4E0B\u4E00\u6B65\u64CD\u4F5C\uFF0C</li><li>\u4F46\u6B64\u65F6T1\u4E8B\u52A1\u5374\u56DE\u6EDA\u4E86\uFF0C\u64A4\u9500\u4E86\u5BF9A\u8D26\u6237\u7684\u4FEE\u6539\uFF0C</li><li>\u90A3\u4E48T2\u8BFB\u53D6\u5230\u7684A\u8D26\u6237\u6570\u636E\u5C31\u662F\u975E\u6CD5\u7684\uFF0C\u8FD9\u4F1A\u5BFC\u81F4\u6570\u636E\u4E0D\u4E00\u81F4\u3002 \u8FD9\u4E9B\u95EE\u9898\u90FD\u662F\u4E8B\u52A1\u9700\u8981\u907F\u514D\u7684\u3002</li></ul><h2 id="redis-\u4E2D\u7684\u4E8B\u52A1" tabindex="-1">Redis \u4E2D\u7684\u4E8B\u52A1 <a class="header-anchor" href="#redis-\u4E2D\u7684\u4E8B\u52A1" aria-hidden="true">#</a></h2><p>Redis \u4E2D\u63D0\u4F9B\u4E86\u4EE5\u4E0B\u4E09\u4E2A\u547D\u4EE4\u6765\u5904\u7406\u4E8B\u52A1\uFF1A</p><div class="language-Shell"><button title="Copy Code" class="copy"></button><span class="lang">Shell</span><pre class="shiki vp-code-dark"><code><span class="line"><span style="color:#758575DD;"># \u6807\u8BB0\u4E00\u4E2A\u4E8B\u52A1\u5757\u7684\u5F00\u59CB</span></span>
<span class="line"><span style="color:#758575DD;"># \u4E8B\u52A1\u5757\u5185\u7684\u591A\u6761\u547D\u4EE4\u4F1A\u6309\u7167\u5148\u540E\u987A\u5E8F\u88AB\u653E\u8FDB\u4E00\u4E2A\u961F\u5217\u5F53\u4E2D\uFF0C\u6700\u540E\u7531 EXEC \u547D\u4EE4\u539F\u5B50\u6027(atomic)\u5730\u6267\u884C</span></span>
<span class="line"><span style="color:#DBD7CAEE;">MULTI</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575DD;"># \u6267\u884C\u6240\u6709\u4E8B\u52A1\u5757\u5185\u7684\u547D\u4EE4\u3002</span></span>
<span class="line"><span style="color:#DBD7CAEE;">EXEC</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575DD;"># \u53D6\u6D88\u4E8B\u52A1\uFF0C\u653E\u5F03\u6267\u884C\u4E8B\u52A1\u5757\u5185\u7684\u6240\u6709\u547D\u4EE4\u3002</span></span>
<span class="line"><span style="color:#DBD7CAEE;">DISCARD</span></span>
<span class="line"></span></code></pre><pre class="shiki vp-code-light"><code><span class="line"><span style="color:#A0ADA0;"># \u6807\u8BB0\u4E00\u4E2A\u4E8B\u52A1\u5757\u7684\u5F00\u59CB</span></span>
<span class="line"><span style="color:#A0ADA0;"># \u4E8B\u52A1\u5757\u5185\u7684\u591A\u6761\u547D\u4EE4\u4F1A\u6309\u7167\u5148\u540E\u987A\u5E8F\u88AB\u653E\u8FDB\u4E00\u4E2A\u961F\u5217\u5F53\u4E2D\uFF0C\u6700\u540E\u7531 EXEC \u547D\u4EE4\u539F\u5B50\u6027(atomic)\u5730\u6267\u884C</span></span>
<span class="line"><span style="color:#393A34;">MULTI</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;"># \u6267\u884C\u6240\u6709\u4E8B\u52A1\u5757\u5185\u7684\u547D\u4EE4\u3002</span></span>
<span class="line"><span style="color:#393A34;">EXEC</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;"># \u53D6\u6D88\u4E8B\u52A1\uFF0C\u653E\u5F03\u6267\u884C\u4E8B\u52A1\u5757\u5185\u7684\u6240\u6709\u547D\u4EE4\u3002</span></span>
<span class="line"><span style="color:#393A34;">DISCARD</span></span>
<span class="line"></span></code></pre></div><p>\u793A\u4F8B\uFF1A</p><div class="language-Shell"><button title="Copy Code" class="copy"></button><span class="lang">Shell</span><pre class="shiki vp-code-dark"><code><span class="line"><span style="color:#DBD7CAEE;">SET Jack 10</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CAEE;">SET Rose 20</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575DD;"># Jack \u7ED9 Rose \u8F6C\u8D26 5 \u5757\u94B1</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575DD;"># \u5F00\u542F\u4E8B\u52A1</span></span>
<span class="line"><span style="color:#DBD7CAEE;">MULTI</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CAEE;">DECRBY Jack 5</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CAEE;">INCRBY ROSE 5</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CAEE;">EXEC</span></span>
<span class="line"></span></code></pre><pre class="shiki vp-code-light"><code><span class="line"><span style="color:#393A34;">SET Jack 10</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">SET Rose 20</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;"># Jack \u7ED9 Rose \u8F6C\u8D26 5 \u5757\u94B1</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;"># \u5F00\u542F\u4E8B\u52A1</span></span>
<span class="line"><span style="color:#393A34;">MULTI</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">DECRBY Jack 5</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">INCRBY ROSE 5</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">EXEC</span></span>
<span class="line"></span></code></pre></div><p>\u4E0A\u9762\u7684\u4EE3\u7801\u6F14\u793A\u4E86\u4E8B\u52A1\u7684\u4F7F\u7528\u65B9\u5F0F\u3002</p><p>\uFF081\uFF09\u5F00\u59CB\u4E8B\u52A1\uFF1A\u9996\u5148\u4F7F\u7528 MULTI \u547D\u4EE4\u544A\u8BC9 Redis\uFF1A\u201C\u4E0B\u9762\u6211\u53D1\u7ED9\u4F60\u7684\u547D\u4EE4\u5C5E\u4E8E\u540C\u4E00\u4E8B\u52A1\uFF0C\u4F60\u5148\u4E0D\u8981\u6267\u884C\uFF0C\u800C\u662F\u628A\u5B83\u4EEC\u6682\u65F6\u5B58\u8D77\u6765\u201D\u3002Redis \u56DE\u7B54\uFF1A\u201COK\u201D</p><p>\uFF082\uFF09\u547D\u4EE4\u5165\u961F\uFF1A\u800C\u540E\u6211\u4EEC\u53D1\u9001\u4E86\u4E24\u4E2A\u547D\u4EE4\u6765\u5B9E\u73B0\u76F8\u5173\u64CD\u4F5C\uFF0C\u53EF\u4EE5\u770B\u5230 Redis \u9075\u5B88\u4E86\u627F\u8BFA\uFF0C\u6CA1\u6709\u6267\u884C\u8FD9\u4E9B\u547D\u4EE4\uFF0C\u800C\u662F\u8FD4\u56DE QUEUED \u8868\u793A\u8FD9\u4E24\u6761\u547D\u4EE4\u5DF2\u7ECF\u8FDB\u5165\u7B49\u5F85\u6267\u884C\u7684\u4E8B\u52A1\u961F\u5217\u4E2D\u4E86</p><p>\uFF083\uFF09\u6267\u884C\u4E8B\u52A1\uFF1A\u5F53\u628A\u6240\u6709\u8981\u5728\u540C\u4E00\u4E8B\u52A1\u4E2D\u6267\u884C\u7684\u547D\u4EE4\u90FD\u53D1\u7ED9 Redis \u540E\uFF0C\u6211\u4EEC\u4F7F\u7528 EXEC \u547D\u4EE4\u544A\u8BC9 Redis \u5C06\u7B49\u5F85\u6267\u884C\u7684\u4E8B\u52A1\u961F\u5217\u4E2D\u7684\u6240\u6709\u547D\u4EE4\u6309\u7167\u53D1\u9001\u7684\u987A\u5E8F\u4F9D\u6B21\u6267\u884C\u3002EXEC \u547D\u4EE4\u7684\u8FD4\u56DE\u503C\u5C31\u662F\u8FD9\u4E9B\u547D\u4EE4\u7684\u8FD4\u56DE\u503C\u7EC4\u6210\u7684\u5217\u8868\uFF0C\u8FD4\u56DE\u503C\u987A\u5E8F\u548C\u547D\u4EE4\u7684\u987A\u5E8F\u76F8\u540C\u3002</p><p>\uFF084\uFF09\u5982\u679C\u60F3\u8981\u53D6\u6D88\u4E8B\u52A1\uFF0C\u5219\u6267\u884C DISCARD \u547D\u4EE4\u3002</p><p>Redis \u4FDD\u8BC1\u4E86\u4E00\u4E2A\u4E8B\u52A1\u4E2D\u7684\u6240\u6709\u547D\u4EE4\u8981\u4E48\u90FD\u6267\u884C\uFF0C\u8981\u4E48\u90FD\u4E0D\u6267\u884C\u3002\u5982\u679C\u5728\u53D1\u9001 EXEC \u547D\u4EE4\u524D\u5BA2\u6237\u7AEF\u6389\u7EBF\u4E86\uFF0C\u5219 Redis \u4F1A\u6E05\u7A7A\u4E8B\u52A1\u961F\u5217\uFF0C\u4E8B\u52A1\u4E2D\u7684\u6240\u6709\u547D\u4EE4\u90FD\u4E0D\u4F1A\u6267\u884C\u3002\u800C\u4E00\u65E6\u5BA2\u6237\u7AEF\u53D1\u9001\u4E86 EXEC \u547D\u4EE4\uFF0C\u6240\u6709\u7684\u547D\u4EE4\u5C31\u90FD\u4F1A\u88AB\u6267\u884C\uFF0C\u5373\u4F7F\u6B64\u540E\u5BA2\u6237\u7AEF\u65AD\u7EBF\u4E5F\u6CA1\u5173\u7CFB\uFF0C\u56E0\u4E3A Redis \u4E2D\u5DF2\u7ECF\u8BB0\u5F55\u4E86\u6240\u6709\u8981\u6267\u884C\u7684\u547D\u4EE4\u3002</p><p>\u9664\u6B64\u4E4B\u5916\uFF0CRedis \u7684\u4E8B\u52A1\u8FD8\u80FD\u4FDD\u8BC1\u4E00\u4E2A\u4E8B\u52A1\u5185\u7684\u547D\u4EE4\u4F9D\u6B21\u6267\u884C\u800C\u4E0D\u88AB\u5176\u5B83\u547D\u4EE4\u63D2\u5165\u3002\u8BD5\u60F3\u5BA2\u6237\u7AEF A \u9700\u8981\u6267\u884C\u51E0\u6761\u547D\u4EE4\uFF0C\u540C\u65F6\u5BA2\u6237\u7AEF B \u53D1\u9001\u4E86\u4E00\u6761\u547D\u4EE4\uFF0C\u5982\u679C\u4E0D\u9002\u7528\u4E8B\u52A1\uFF0C\u5219\u5BA2\u6237\u7AEF B \u7684\u547D\u4EE4\u53EF\u80FD\u4F1A\u63D2\u5165\u5230\u5BA2\u6237\u7AEF A \u7684\u51E0\u6761\u547D\u4EE4\u4E2D\u6267\u884C\u3002\u5982\u679C\u4E0D\u5E0C\u671B\u53D1\u9001\u8FD9\u79CD\u60C5\u51B5\uFF0C\u4E5F\u53EF\u4EE5\u4F7F\u7528\u4E8B\u52A1\u3002</p><h2 id="\u4E8B\u52A1\u4E2D\u7684\u9519\u8BEF\u5904\u7406" tabindex="-1">\u4E8B\u52A1\u4E2D\u7684\u9519\u8BEF\u5904\u7406 <a class="header-anchor" href="#\u4E8B\u52A1\u4E2D\u7684\u9519\u8BEF\u5904\u7406" aria-hidden="true">#</a></h2><p>\u5982\u679C\u4E00\u4E2A\u4E8B\u52A1\u4E2D\u7684\u67D0\u4E2A\u547D\u4EE4\u6267\u884C\u51FA\u9519\uFF0CRedis \u4F1A\u600E\u4E48\u5904\u7406\u5462\uFF1F\u8981\u56DE\u7B54\u8FD9\u4E2A\u95EE\u9898\uFF0C\u9996\u5148\u9700\u8981\u77E5\u9053\u4EC0\u4E48\u539F\u56E0\u5BFC\u81F4\u547D\u4EE4\u6267\u884C\u51FA\u9519\u3002</p><p>\uFF081\uFF09\u8BED\u6CD5\u9519\u8BEF\u3002\u8BED\u6CD5\u9519\u8BEF\u6307\u547D\u4EE4\u4E0D\u5B58\u5728\u6216\u547D\u4EE4\u53C2\u6570\u7684\u4E2A\u6570\u4E0D\u5BF9\u3002\u6BD4\u5982\uFF1A</p><div class="language-Shell"><button title="Copy Code" class="copy"></button><span class="lang">Shell</span><pre class="shiki vp-code-dark"><code><span class="line"><span style="color:#DBD7CAEE;">MULTI</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575DD;"># \u6B63\u786E\u7684\u547D\u4EE4</span></span>
<span class="line"><span style="color:#DBD7CAEE;">SET key value</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575DD;"># \u9519\u8BEF\u7684\u547D\u4EE4</span></span>
<span class="line"><span style="color:#DBD7CAEE;">SET key</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CAEE;">ERRORCOMMAND key</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CAEE;">EXEC</span></span>
<span class="line"></span></code></pre><pre class="shiki vp-code-light"><code><span class="line"><span style="color:#393A34;">MULTI</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;"># \u6B63\u786E\u7684\u547D\u4EE4</span></span>
<span class="line"><span style="color:#393A34;">SET key value</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;"># \u9519\u8BEF\u7684\u547D\u4EE4</span></span>
<span class="line"><span style="color:#393A34;">SET key</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">ERRORCOMMAND key</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">EXEC</span></span>
<span class="line"></span></code></pre></div><p>\u8DDF\u5728 MULTI \u547D\u4EE4\u540E\u6267\u884C\u4E86 3 \u4E2A\u547D\u4EE4\uFF1A</p><ul><li>\u4E00\u4E2A\u6B63\u786E\u7684\u547D\u4EE4\uFF0C\u6210\u529F\u7684\u52A0\u5165\u4E86\u4E8B\u52A1\u961F\u5217</li><li>\u5176\u4F59\u4E24\u4E2A\u547D\u4EE4\u90FD\u6709\u8BED\u6CD5\u9519\u8BEF \u800C\u53EA\u8981\u6709\u4E00\u4E2A\u547D\u4EE4\u6709\u8BED\u6CD5\u9519\u8BEF\uFF0C\u6267\u884C EXEC \u547D\u4EE4\u540E Redis \u5C31\u4F1A\u76F4\u63A5\u8FD4\u56DE\u9519\u8BEF\uFF0C\u8FDE\u8BED\u6CD5\u6B63\u786E\u7684\u547D\u4EE4\u4E5F\u4E0D\u4F1A\u6267\u884C\u3002</li></ul><p>\uFF082\uFF09\u8FD0\u884C\u9519\u8BEF\u3002\u8FD0\u884C\u9519\u8BEF\u6307\u5728\u547D\u4EE4\u6267\u884C\u65F6\u51FA\u73B0\u7684\u9519\u8BEF\uFF0C\u6BD4\u5982\u4F7F\u7528\u6563\u5217\u7C7B\u578B\u7684\u547D\u4EE4\u64CD\u4F5C\u96C6\u5408\u7C7B\u578B\u7684\u952E\uFF0C\u8FD9\u79CD\u9519\u8BEF\u5728\u5B9E\u9645\u6267\u884C\u4E4B\u524D Redis \u662F\u65E0\u6CD5\u53D1\u73B0\u7684\uFF0C\u6240\u4EE5\u5728\u4E8B\u52A1\u91CC\u8FD9\u6837\u7684\u547D\u4EE4\u662F\u4F1A\u88AB Redis \u63A5\u53D7\u5E76\u6267\u884C\u7684\u3002\u5982\u679C\u4E8B\u52A1\u91CC\u7684\u4E00\u6761\u547D\u4EE4\u51FA\u73B0\u4E86\u8FD0\u884C\u9519\u8BEF\uFF0C\u4E8B\u52A1\u91CC\u5176\u5B83\u7684\u547D\u4EE4\u4F9D\u7136\u4F1A\u7EE7\u7EED\u6267\u884C\uFF0C\u4F8B\u5982\uFF1A</p><div class="language-Shell"><button title="Copy Code" class="copy"></button><span class="lang">Shell</span><pre class="shiki vp-code-dark"><code><span class="line"><span style="color:#DBD7CAEE;">MULTI</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CAEE;">SET key 1</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CAEE;">SADD key 2</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CAEE;">SET key 3</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CAEE;">EXEC</span></span>
<span class="line"></span></code></pre><pre class="shiki vp-code-light"><code><span class="line"><span style="color:#393A34;">MULTI</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">SET key 1</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">SADD key 2</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">SET key 3</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">EXEC</span></span>
<span class="line"></span></code></pre></div><blockquote><p>\u53EF\u89C1\u867D\u7136 SADD key 2 \u51FA\u73B0\u4E86\u9519\u8BEF\uFF0C\u4F46\u662F SET key 3 \u4F9D\u7136\u6267\u884C\u4E86\u3002 Redis \u4E8B\u52A1\u6CA1\u6709\u5173\u7CFB\u6570\u636E\u5E93\u4E8B\u52A1\u63D0\u4F9B\u7684\u56DE\u6EDA\uFF08rollback\uFF09\u529F\u80FD\u3002\u4E3A\u6B64\u5F00\u53D1\u8005\u5FC5\u987B\u5728\u4E8B\u52A1\u6267\u884C\u51FA\u9519\u540E\u81EA\u5DF1\u6536\u62FE\u5269\u4E0B\u7684\u644A\u5B50\uFF08\u5C06\u6570\u636E\u5E93\u590D\u539F\u56DE\u4E8B\u52A1\u6267\u884C\u524D\u7684\u72B6\u6001\u7B49\uFF09\u3002</p></blockquote><p>\u4E0D\u8FC7\u7531\u4E8E Redis \u4E0D\u652F\u6301\u56DE\u6EDA\u529F\u80FD\uFF0C\u4E5F\u4F7F\u5F97 Redis \u5728\u4E8B\u52A1\u4E0A\u53EF\u4EE5\u4FDD\u6301\u7B80\u6D01\u548C\u5FEB\u901F\u3002\u6B64\u5916\u56DE\u987E\u521A\u624D\u63D0\u5230\u7684\u4F1A\u5BFC\u81F4\u4E8B\u52A1\u6267\u884C\u5931\u8D25\u7684\u4E24\u79CD\u9519\u8BEF\uFF0C\u5176\u4E2D\u8BED\u6CD5\u9519\u8BEF\u5B8C\u5168\u53EF\u4EE5\u5728\u5F00\u53D1\u65F6\u627E\u51FA\u5E76\u89E3\u51B3\uFF0C\u53E6\u5916\u5982\u679C\u80FD\u591F\u5F88\u597D\u7684\u89C4\u5212\u6570\u636E\u5E93\u7684\u4F7F\u7528\uFF0C\u662F\u4E0D\u4F1A\u51FA\u73B0\u5982\u547D\u4EE4\u4E0E\u6570\u636E\u7C7B\u578B\u4E0D\u5339\u914D\u8FD9\u6837\u7684\u8FD0\u884C\u65F6\u9519\u8BEF\u7684\u3002</p><h2 id="\u4E8B\u52A1\u4E2D\u7684-watch-\u547D\u4EE4" tabindex="-1">\u4E8B\u52A1\u4E2D\u7684 WATCH \u547D\u4EE4 <a class="header-anchor" href="#\u4E8B\u52A1\u4E2D\u7684-watch-\u547D\u4EE4" aria-hidden="true">#</a></h2><p>\u5173\u4E8E WATCH \u547D\u4EE4\uFF0C\u6211\u4EEC\u6765\u4E00\u4E2A\u751F\u6D3B\u4E2D\u7684\u4F8B\u5B50\u6BD4\u8F83\u597D\u7406\u89E3\u3002</p><p>\u5047\u8BBE\u6211\u7684\u94F6\u884C\u5361\u6709 100 \u5143\uFF0C\u6B64\u65F6\u6211\u53BB\u5546\u5E97\u4E70\u4E1C\u897F\uFF1A</p><div class="language-Shell"><button title="Copy Code" class="copy"></button><span class="lang">Shell</span><pre class="shiki vp-code-dark"><code><span class="line"><span style="color:#758575DD;"># \u5F00\u542F\u4E8B\u52A1</span></span>
<span class="line"><span style="color:#DBD7CAEE;">MULTI</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575DD;"># \u5047\u8BBE\u91CC\u9762\u6709 100 \u5143</span></span>
<span class="line"><span style="color:#DBD7CAEE;">SET balance 100</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575DD;"># \u62FF\u4E86\u74F6\u6C34</span></span>
<span class="line"><span style="color:#DBD7CAEE;">SET balance 3</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575DD;"># \u62FF\u4E86\u5305\u70DF</span></span>
<span class="line"><span style="color:#DBD7CAEE;">SET balance 20</span></span>
<span class="line"></span></code></pre><pre class="shiki vp-code-light"><code><span class="line"><span style="color:#A0ADA0;"># \u5F00\u542F\u4E8B\u52A1</span></span>
<span class="line"><span style="color:#393A34;">MULTI</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;"># \u5047\u8BBE\u91CC\u9762\u6709 100 \u5143</span></span>
<span class="line"><span style="color:#393A34;">SET balance 100</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;"># \u62FF\u4E86\u74F6\u6C34</span></span>
<span class="line"><span style="color:#393A34;">SET balance 3</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;"># \u62FF\u4E86\u5305\u70DF</span></span>
<span class="line"><span style="color:#393A34;">SET balance 20</span></span>
<span class="line"></span></code></pre></div><p>\u6211\u7684\u94F6\u884C\u5361\u9664\u4E86\u6211\u81EA\u5DF1\u6D88\u8D39\u4F7F\u7528\uFF0C\u8FD8\u7ED1\u5B9A\u4E86\u6211\u5AB3\u5987\u513F\u7684\u652F\u4ED8\u5B9D\uFF0C\u5982\u679C\u6211\u5728\u6D88\u8D39\u7684\u65F6\u5019\uFF0C\u5979\u4E5F\u6D88\u8D39\u4E86\u4F1A\u600E\u4E48\u6837\uFF1F</p><div class="language-Shell"><button title="Copy Code" class="copy"></button><span class="lang">Shell</span><pre class="shiki vp-code-dark"><code><span class="line"><span style="color:#758575DD;"># \u5F00\u542F\u4E8B\u52A1</span></span>
<span class="line"><span style="color:#DBD7CAEE;">MULTI</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575DD;"># \u4E70\u4E86 10 \u65A4\u82F9\u679C</span></span>
<span class="line"><span style="color:#DBD7CAEE;">SET balance 100</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CAEE;">EXEC</span></span>
<span class="line"></span></code></pre><pre class="shiki vp-code-light"><code><span class="line"><span style="color:#A0ADA0;"># \u5F00\u542F\u4E8B\u52A1</span></span>
<span class="line"><span style="color:#393A34;">MULTI</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;"># \u4E70\u4E86 10 \u65A4\u82F9\u679C</span></span>
<span class="line"><span style="color:#393A34;">SET balance 100</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">EXEC</span></span>
<span class="line"></span></code></pre></div><p>\u8FD9\u65F6\u5019\u6211\u5AB3\u5987\u5728\u8D85\u5E02\u76F4\u63A5\u5237\u4E86 100\uFF0C\u6B64\u65F6\u4F59\u989D\u4E0D\u8DB3\u7684\u6211\u8FD8\u5728\u6311\u53E3\u9999\u7CD6...</p><p>\u9488\u5BF9\u4E8E\u4E0A\u9762\u7684\u573A\u666F\uFF0C\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528 Redis \u4E8B\u52A1\u4E2D\u63D0\u4F9B\u7684 WATCH \u529F\u80FD\u6765\u89E3\u51B3\u8FD9\u4E2A\u95EE\u9898\u3002</p><p>WATCH \u5B9A\u4E49\uFF1A\u76D1\u89C6\u4E00\u4E2A(\u6216\u591A\u4E2A) key \uFF0C\u5982\u679C\u5728\u4E8B\u52A1\u6267\u884C\u4E4B\u524D\u8FD9\u4E2A(\u6216\u8FD9\u4E9B) key \u88AB\u5176\u4ED6\u547D\u4EE4\u6240\u6539\u52A8\uFF0C\u90A3\u4E48\u4E8B\u52A1\u5C06\u88AB\u6253\u65AD\u3002</p><p>WATCH \u76F8\u5173\u547D\u4EE4\u5982\u4E0B\uFF1A</p><div class="language-Shell"><button title="Copy Code" class="copy"></button><span class="lang">Shell</span><pre class="shiki vp-code-dark"><code><span class="line"><span style="color:#758575DD;"># \u76D1\u89C6\u4E00\u4E2A(\u6216\u591A\u4E2A) key \uFF0C\u5982\u679C\u5728\u4E8B\u52A1\u6267\u884C\u4E4B\u524D\u8FD9\u4E2A(\u6216\u8FD9\u4E9B) key \u88AB\u5176\u4ED6\u547D\u4EE4\u6240\u6539\u52A8\uFF0C\u90A3\u4E48\u4E8B\u52A1\u5C06\u88AB\u6253\u65AD\u3002</span></span>
<span class="line"><span style="color:#DBD7CAEE;">WATCH key </span><span style="color:#666666;">[</span><span style="color:#DBD7CAEE;">key ...</span><span style="color:#666666;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575DD;"># \u53D6\u6D88 WATCH \u547D\u4EE4\u5BF9\u6240\u6709 key \u7684\u76D1\u89C6\u3002</span></span>
<span class="line"><span style="color:#758575DD;"># \u5982\u679C\u5728\u6267\u884C WATCH \u547D\u4EE4\u4E4B\u540E\uFF0C EXEC \u547D\u4EE4\u6216 DISCARD \u547D\u4EE4\u5148\u88AB\u6267\u884C\u4E86\u7684\u8BDD\uFF0C\u90A3\u4E48\u5C31\u4E0D\u9700\u8981\u518D\u6267\u884C UNWATCH \u4E86\u3002</span></span>
<span class="line"><span style="color:#DBD7CAEE;">UNWATCH</span></span>
<span class="line"></span></code></pre><pre class="shiki vp-code-light"><code><span class="line"><span style="color:#A0ADA0;"># \u76D1\u89C6\u4E00\u4E2A(\u6216\u591A\u4E2A) key \uFF0C\u5982\u679C\u5728\u4E8B\u52A1\u6267\u884C\u4E4B\u524D\u8FD9\u4E2A(\u6216\u8FD9\u4E9B) key \u88AB\u5176\u4ED6\u547D\u4EE4\u6240\u6539\u52A8\uFF0C\u90A3\u4E48\u4E8B\u52A1\u5C06\u88AB\u6253\u65AD\u3002</span></span>
<span class="line"><span style="color:#393A34;">WATCH key </span><span style="color:#999999;">[</span><span style="color:#393A34;">key ...</span><span style="color:#999999;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;"># \u53D6\u6D88 WATCH \u547D\u4EE4\u5BF9\u6240\u6709 key \u7684\u76D1\u89C6\u3002</span></span>
<span class="line"><span style="color:#A0ADA0;"># \u5982\u679C\u5728\u6267\u884C WATCH \u547D\u4EE4\u4E4B\u540E\uFF0C EXEC \u547D\u4EE4\u6216 DISCARD \u547D\u4EE4\u5148\u88AB\u6267\u884C\u4E86\u7684\u8BDD\uFF0C\u90A3\u4E48\u5C31\u4E0D\u9700\u8981\u518D\u6267\u884C UNWATCH \u4E86\u3002</span></span>
<span class="line"><span style="color:#393A34;">UNWATCH</span></span>
<span class="line"></span></code></pre></div><p>\u4F7F\u7528\u793A\u4F8B\uFF1A</p><div class="language-Shell"><button title="Copy Code" class="copy"></button><span class="lang">Shell</span><pre class="shiki vp-code-dark"><code><span class="line"><span style="color:#DBD7CAEE;">SET balance 100</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CAEE;">WATCH balance</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CAEE;">DECRBY balance 30</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CAEE;">MULTI</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CAEE;">DECRBY balance 10</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CAEE;">EXEC</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CAEE;">GET balance </span><span style="color:#758575DD;"># 70</span></span>
<span class="line"></span></code></pre><pre class="shiki vp-code-light"><code><span class="line"><span style="color:#393A34;">SET balance 100</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">WATCH balance</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">DECRBY balance 30</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">MULTI</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">DECRBY balance 10</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">EXEC</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">GET balance </span><span style="color:#A0ADA0;"># 70</span></span>
<span class="line"></span></code></pre></div><p>\u5982\u679C\u5728\u6267\u884C WATCH \u547D\u4EE4\u4E4B\u540E\uFF0C EXEC \u547D\u4EE4\u6216 DISCARD \u547D\u4EE4\u88AB\u6267\u884C\u4E86\u7684\u8BDD\uFF0C\u90A3\u4E48\u4F1A\u81EA\u52A8\u53D6\u6D88 WATCH\u3002</p><p>\u5982\u679C\u9700\u8981\u624B\u52A8\u505C\u6B62 WATCH \u5219\u53EF\u4EE5\u53EF\u4EE5\u4F7F\u7528 UNWATCH \u547D\u4EE4\uFF0CUNWATCH \u547D\u4EE4\u4F1A\u53D6\u6D88 WATCH \u547D\u4EE4\u5BF9\u6240\u6709 key \u7684\u76D1\u89C6\u3002</p><h2 id="\u53C2\u8003\u94FE\u63A5" tabindex="-1">\u53C2\u8003\u94FE\u63A5 <a class="header-anchor" href="#\u53C2\u8003\u94FE\u63A5" aria-hidden="true">#</a></h2><p><a href="https://zhuanlan.zhihu.com/p/43493165" target="_blank" rel="noreferrer">https://zhuanlan.zhihu.com/p/43493165</a><a href="https://xie.infoq.cn/article/84baa7fa9c2c3d3698a601def" target="_blank" rel="noreferrer">https://xie.infoq.cn/article/84baa7fa9c2c3d3698a601def</a></p>`,54),i=[c];function o(t,r,A,d,y,D){return a(),n("div",null,i)}const h=s(e,[["render",o]]);export{C as __pageData,h as default};
