import{_ as s,c as n,o as a,a as l}from"./app.2a51697e.js";const p="/assets/2.d52b8132.png",e="/assets/3.5bdc9089.png",o="/assets/4.83552f8e.png",c="/assets/5.cf2fc68c.png",C=JSON.parse('{"title":"Redis \u5E38\u7528\u6570\u636E\u7C7B\u578B\u53CA\u64CD\u4F5C\u547D\u4EE4\uFF08CRUD\uFF09","description":"","frontmatter":{"outline":"deep"},"headers":[{"level":2,"title":"Redis \u4E2D\u7684\u952E","slug":"redis-\u4E2D\u7684\u952E","link":"#redis-\u4E2D\u7684\u952E","children":[]},{"level":2,"title":"\u5B57\u7B26\u4E32\uFF08String\uFF09","slug":"\u5B57\u7B26\u4E32-string","link":"#\u5B57\u7B26\u4E32-string","children":[]},{"level":2,"title":"\u54C8\u5E0C\uFF08Hash\uFF09","slug":"\u54C8\u5E0C-hash","link":"#\u54C8\u5E0C-hash","children":[]},{"level":2,"title":"\u5217\u8868\uFF08List\uFF09","slug":"\u5217\u8868-list","link":"#\u5217\u8868-list","children":[]},{"level":2,"title":"\u96C6\u5408\uFF08Set\uFF09","slug":"\u96C6\u5408-set","link":"#\u96C6\u5408-set","children":[]},{"level":2,"title":"\u6709\u5E8F\u96C6\u5408\uFF08Sorted Set\uFF09","slug":"\u6709\u5E8F\u96C6\u5408-sorted-set","link":"#\u6709\u5E8F\u96C6\u5408-sorted-set","children":[]},{"level":2,"title":"\u901A\u7528\u547D\u4EE4","slug":"\u901A\u7528\u547D\u4EE4","link":"#\u901A\u7528\u547D\u4EE4","children":[]}],"relativePath":"FullStack/Redis/CRUD.md"}'),t={name:"FullStack/Redis/CRUD.md"},i=l('<h1 id="redis-\u5E38\u7528\u6570\u636E\u7C7B\u578B\u53CA\u64CD\u4F5C\u547D\u4EE4-crud" tabindex="-1">Redis \u5E38\u7528\u6570\u636E\u7C7B\u578B\u53CA\u64CD\u4F5C\u547D\u4EE4\uFF08CRUD\uFF09 <a class="header-anchor" href="#redis-\u5E38\u7528\u6570\u636E\u7C7B\u578B\u53CA\u64CD\u4F5C\u547D\u4EE4-crud" aria-hidden="true">#</a></h1><p>Redis \u4E0D\u662F\u7B80\u5355\u7684\u952E\u503C\u5B58\u50A8\uFF0C\u5B83\u5B9E\u9645\u4E0A\u662F\u4E00\u4E2A\u6570\u636E\u7ED3\u6784\u670D\u52A1\u5668\uFF0C\u652F\u6301\u4E0D\u540C\u7C7B\u578B\u7684\u503C\u3002\u8FD9\u610F\u5473\u7740\u5728\u4F20\u7EDF\u952E\u503C\u5B58\u50A8\u4E2D\uFF0C\u60A8\u5C06\u5B57\u7B26\u4E32\u952E\u4E0E\u5B57\u7B26\u4E32\u503C\u76F8\u5173\u8054\uFF0C\u800C\u5728 Redis \u4E2D\uFF0C\u8BE5\u503C\u4E0D\u4EC5\u9650\u4E8E\u7B80\u5355\u7684\u5B57\u7B26\u4E32\uFF0C\u8FD8\u53EF\u4EE5\u5BB9\u7EB3\u66F4\u590D\u6742\u7684\u6570\u636E\u7ED3\u6784\u3002\u4EE5\u4E0B\u662F Redis \u4E2D\u652F\u6301\u7684\u6240\u6709\u6570\u636E\u7ED3\u6784\u7684\u5217\u8868\uFF1A</p><table><thead><tr><th>\u7C7B\u578B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>String</td><td>\u5B57\u7B26\u4E32</td></tr><tr><td>Hash</td><td>\u6563\u5217\uFF0C\u662F\u7531\u4E0E\u503C\u76F8\u5173\u8054\u7684\u5B57\u6BB5\u7EC4\u6210\u7684\u5185\u5BB9\u3002\u5B57\u6BB5\u548C\u503C\u90FD\u662F\u5B57\u7B26\u4E32\u3002\u8FD9\u4E0E Ruby \u6216 Python \u54C8\u5E0C\u975E\u5E38\u76F8</td></tr><tr><td>List</td><td>\u5217\u8868\uFF0C\u6839\u636E\u63D2\u5165\u987A\u5E8F\u6392\u5E8F\u7684\u5B57\u7B26\u4E32\u5143\u7D20\u7684\u96C6\u5408\u3002\u5B83\u4EEC\u57FA\u672C\u4E0A\u662F\u94FE\u8868\u3002</td></tr><tr><td>Set</td><td>\u672A\u6392\u5E8F\u7684\u5B57\u7B26\u4E32\u5143\u7D20\u96C6\u5408\uFF0C\u96C6\u5408\u4E2D\u7684\u6570\u636E\u662F\u4E0D\u91CD\u590D\u7684\u3002</td></tr><tr><td>ZSet</td><td>\u4E0E Sets \u7C7B\u4F3C\uFF0C\u4F46\u6BCF\u4E2A\u5B57\u7B26\u4E32\u5143\u7D20\u90FD\u4E0E\u4E00\u4E2A\u79F0\u4E3A\u5206\u6570\u7684\u6D6E\u70B9\u503C\u76F8\u5173\u8054\u3002\u5143\u7D20\u603B\u662F\u6309\u5B83\u4EEC\u7684\u5206\u6570\u6392\u5E8F\uFF0C\u56E0\u6B64\u4E0E Sets \u4E0D\u540C\uFF0C\u53EF\u4EE5\u68C0\u7D22\u4E00\u7CFB\u5217\u5143\u7D20\uFF08\u4F8B\u5982\uFF0C\u60A8\u53EF\u80FD\u4F1A\u95EE\uFF1A\u7ED9\u6211\u524D10\u540D\u6216\u540E10\u540D\uFF09\u3002</td></tr><tr><td>Bit arrays\uFF08\u6216 bitmaps\uFF09</td><td>\u53EF\u4EE5\u4F7F\u7528\u7279\u6B8A\u547D\u4EE4\u50CF\u4F4D\u6570\u7EC4\u4E00\u6837\u5904\u7406\u5B57\u7B26\u4E32\u503C\uFF1A\u60A8\u53EF\u4EE5\u8BBE\u7F6E\u548C\u6E05\u9664\u5355\u4E2A\u4F4D\uFF0C\u8BA1\u6570\u6240\u6709\u8BBE\u7F6E\u4E3A1\u7684\u4F4D\uFF0C\u627E\u5230\u7B2C\u4E00\u4E2A\u8BBE\u7F6E\u6216\u672A\u8BBE\u7F6E\u7684\u4F4D\uFF0C\u4F9D\u6B64\u7C7B\u63A8\u3002</td></tr><tr><td>HyperLogLogs</td><td>\u8FD9\u662F\u4E00\u4E2A\u6982\u7387\u6570\u636E\u7ED3\u6784\uFF0C\u7528\u4E8E\u4F30\u8BA1\u96C6\u5408\u7684\u57FA\u6570\u3002</td></tr><tr><td>Streams</td><td>\u63D0\u4F9B\u62BD\u8C61\u65E5\u5FD7\u6570\u636E\u7C7B\u578B\u7684\u7C7B\u4F3C\u5730\u56FE\u9879\u7684\u4EC5\u8FFD\u52A0\u96C6\u5408\u3002</td></tr></tbody></table><h2 id="redis-\u4E2D\u7684\u952E" tabindex="-1">Redis \u4E2D\u7684\u952E <a class="header-anchor" href="#redis-\u4E2D\u7684\u952E" aria-hidden="true">#</a></h2><p>Redis \u5BC6\u94A5\u662F\u4E8C\u8FDB\u5236\u5B89\u5168\u7684\uFF0C\u8FD9\u610F\u5473\u7740\u60A8\u53EF\u4EE5\u4F7F\u7528\u4EFB\u4F55\u4E8C\u8FDB\u5236\u5E8F\u5217\u4F5C\u4E3A key\uFF0C\u4ECE &quot;foo&quot; \u4E4B\u7C7B\u7684\u5B57\u7B26\u4E32\u5230 JPEG \u6587\u4EF6\u7684\u5185\u5BB9\u3002\u7A7A\u5B57\u7B26\u4E32\u4E5F\u662F\u6709\u6548\u7684\u952E\u3002</p><p>\u6709\u5173\u952E\u7684\u5176\u4ED6\u4E00\u4E9B\u89C4\u5219\uFF1A</p><ul><li>\u592A\u957F\u4E0D\u597D\uFF0C\u5360\u7528\u5185\u5B58\u7A7A\u95F4</li><li>\u592A\u77ED\u4E5F\u4E0D\u597D\uFF0C\u6CA1\u6709\u53EF\u8BFB\u6027</li><li>\u5C1D\u8BD5\u575A\u6301\u4F7F\u7528\u56FA\u5B9A\u89C4\u5219\uFF0C\u4F8B\u5982\uFF1A <ul><li>object-type:id</li><li>user:1000</li><li>\u70B9\u6216\u7834\u6298\u53F7\u901A\u5E38\u7528\u4E8E\u591A\u5B57\u5B57\u6BB5\uFF0C\u4F8B\u5982\uFF1Acomment\u{1F522}reply.to \u6216 comment\u{1F522}reply-to \u4E2D\u3002</li></ul></li><li>\u5141\u8BB8\u7684\u6700\u5927\u5927\u5C0F\u4E3A 512 MB</li><li>\u603B\u7ED3\u4E00\u4E0B\uFF1A <ul><li>\u4E0D\u8981\u592A\u957F\uFF0C\u6D6A\u8D39\u7A7A\u95F4</li><li>\u4E0D\u8981\u8FC7\u77ED\uFF0C\u4E0D\u5229\u4E8E\u9605\u8BFB</li><li>\u7EDF\u4E00\u7684\u547D\u4EE4\u89C4\u8303</li></ul></li></ul><h2 id="\u5B57\u7B26\u4E32-string" tabindex="-1">\u5B57\u7B26\u4E32\uFF08String\uFF09 <a class="header-anchor" href="#\u5B57\u7B26\u4E32-string" aria-hidden="true">#</a></h2><p>\u5B57\u7B26\u4E32\u7C7B\u578B\u662F Redis \u4E2D\u6700\u57FA\u672C\u7684\u6570\u636E\u7C7B\u578B\uFF0C\u4E5F\u662F\u5176\u5B83\u6570\u636E\u7C7B\u578B\u7684\u57FA\u7840\u3002</p><ul><li>\u5B83\u80FD\u5B58\u50A8\u4EFB\u4F55\u5F62\u5F0F\u7684\u5B57\u7B26\u4E32\uFF0C\u5305\u62EC\u4E8C\u8FDB\u5236\u6570\u636E\u3002</li><li>\u4F60\u53EF\u4EE5\u7528\u5B83\u5B58\u50A8\u7528\u6237\u7684\u90AE\u7BB1\u3001JSON \u5316\u7684\u5BF9\u8C61\uFF0C\u751A\u81F3\u662F\u4E00\u5F20\u56FE\u7247</li><li>value \u6700\u591A\u53EF\u4EE5\u5BB9\u7EB3\u6570\u636E\u5927\u5C0F\u4E3A 512 MB</li></ul><p><img src="'+p+`" alt="img"></p><p>\u5B57\u7B26\u4E32\u7C7B\u578B\u662F\u5176\u4ED6\u5E38\u89C1 4 \u79CD\u6570\u636E\u7C7B\u578B\u7684\u57FA\u7840\uFF0C\u5176\u4ED6\u6570\u636E\u7C7B\u578B\u548C\u5B57\u7B26\u4E32\u7C7B\u578B\u7684\u5DEE\u522B\u4ECE\u67D0\u79CD\u89D2\u5EA6\u6765\u8BF4\u53EA\u662F\u7EC4\u7EC7\u5B57\u7B26\u7684\u5F62\u5F0F\u4E0D\u540C\u3002</p><p>\u4F8B\u5982\uFF0C\u5217\u8868\u7C7B\u578B\u662F\u4EE5\u5217\u8868\u7684\u5F62\u5F0F\u7EC4\u7EC7\u5B57\u7B26\u4E32\uFF0C\u800C\u96C6\u5408\u7C7B\u578B\u662F\u4EE5\u96C6\u5408\u7684\u5F62\u5F0F\u7EC4\u7EC7\u5B57\u7B26\u4E32\u3002\u5B66\u4E60\u5B8C\u540E\u9762\u7684\u6570\u636E\u7C7B\u578B\u4E4B\u540E\u76F8\u4FE1\u4F60\u4F1A\u6709\u66F4\u6DF1\u7684\u7406\u89E3\u3002</p><h4 id="\u6DFB\u52A0" tabindex="-1">\u6DFB\u52A0 <a class="header-anchor" href="#\u6DFB\u52A0" aria-hidden="true">#</a></h4><div class="language-Shell"><button title="Copy Code" class="copy"></button><span class="lang">Shell</span><pre class="shiki vp-code-dark"><code><span class="line"><span style="color:#758575DD;"># \u8BBE\u7F6E\u6307\u5B9A key \u7684\u503C</span></span>
<span class="line"><span style="color:#DBD7CAEE;">SET key value</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575DD;"># \u5C06\u7ED9\u5B9A key \u7684\u503C\u8BBE\u4E3A value \uFF0C\u5E76\u8FD4\u56DE key \u7684\u65E7\u503C(old value)</span></span>
<span class="line"><span style="color:#DBD7CAEE;">GETSET key value</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575DD;"># \u53EA\u6709\u5728 key \u4E0D\u5B58\u5728\u65F6\u8BBE\u7F6E key \u7684\u503C</span></span>
<span class="line"><span style="color:#DBD7CAEE;">SETNX key value</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575DD;"># \u540C\u65F6\u8BBE\u7F6E\u4E00\u4E2A\u6216\u591A\u4E2A key-value \u5BF9</span></span>
<span class="line"><span style="color:#DBD7CAEE;">MSET key value </span><span style="color:#666666;">[</span><span style="color:#DBD7CAEE;">key value ...</span><span style="color:#666666;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575DD;"># \u540C\u65F6\u8BBE\u7F6E\u4E00\u4E2A\u6216\u591A\u4E2A key-value \u5BF9\uFF0C\u5F53\u4E14\u4EC5\u5F53\u6240\u6709\u7ED9\u5B9A key \u90FD\u4E0D\u5B58\u5728</span></span>
<span class="line"><span style="color:#DBD7CAEE;">MSETNX key value </span><span style="color:#666666;">[</span><span style="color:#DBD7CAEE;">key value ...</span><span style="color:#666666;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575DD;"># \u5982\u679C key \u5DF2\u7ECF\u5B58\u5728\u5E76\u4E14\u662F\u4E00\u4E2A\u5B57\u7B26\u4E32\uFF0C APPEND \u547D\u4EE4\u5C06\u6307\u5B9A\u7684 value \u8FFD\u52A0\u5230\u8BE5 key \u539F\u6765\u503C\uFF08value\uFF09\u7684\u672B\u5C3E\u3002</span></span>
<span class="line"><span style="color:#DBD7CAEE;">APPEND key value</span></span>
<span class="line"></span></code></pre><pre class="shiki vp-code-light"><code><span class="line"><span style="color:#A0ADA0;"># \u8BBE\u7F6E\u6307\u5B9A key \u7684\u503C</span></span>
<span class="line"><span style="color:#393A34;">SET key value</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;"># \u5C06\u7ED9\u5B9A key \u7684\u503C\u8BBE\u4E3A value \uFF0C\u5E76\u8FD4\u56DE key \u7684\u65E7\u503C(old value)</span></span>
<span class="line"><span style="color:#393A34;">GETSET key value</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;"># \u53EA\u6709\u5728 key \u4E0D\u5B58\u5728\u65F6\u8BBE\u7F6E key \u7684\u503C</span></span>
<span class="line"><span style="color:#393A34;">SETNX key value</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;"># \u540C\u65F6\u8BBE\u7F6E\u4E00\u4E2A\u6216\u591A\u4E2A key-value \u5BF9</span></span>
<span class="line"><span style="color:#393A34;">MSET key value </span><span style="color:#999999;">[</span><span style="color:#393A34;">key value ...</span><span style="color:#999999;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;"># \u540C\u65F6\u8BBE\u7F6E\u4E00\u4E2A\u6216\u591A\u4E2A key-value \u5BF9\uFF0C\u5F53\u4E14\u4EC5\u5F53\u6240\u6709\u7ED9\u5B9A key \u90FD\u4E0D\u5B58\u5728</span></span>
<span class="line"><span style="color:#393A34;">MSETNX key value </span><span style="color:#999999;">[</span><span style="color:#393A34;">key value ...</span><span style="color:#999999;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;"># \u5982\u679C key \u5DF2\u7ECF\u5B58\u5728\u5E76\u4E14\u662F\u4E00\u4E2A\u5B57\u7B26\u4E32\uFF0C APPEND \u547D\u4EE4\u5C06\u6307\u5B9A\u7684 value \u8FFD\u52A0\u5230\u8BE5 key \u539F\u6765\u503C\uFF08value\uFF09\u7684\u672B\u5C3E\u3002</span></span>
<span class="line"><span style="color:#393A34;">APPEND key value</span></span>
<span class="line"></span></code></pre></div><blockquote><p>\u6CE8\u610F\uFF1A\u5728 Redis \u4E2D\u547D\u4EE4\u4E0D\u533A\u5206\u5927\u5C0F\u5199\u3002\u4E5F\u5C31\u662F\u8BF4 SET foo bar \u548C set foo bar \u662F\u4E00\u6837\u7684\uFF0C\u4F46\u662F\u6211\u4EEC\u7EA6\u5B9A\u4F7F\u7528\u5927\u5199\u8868\u793A\u5B83\u662F\u4E00\u4E2A Redis \u547D\u4EE4\u3002</p></blockquote><h4 id="\u67E5\u8BE2" tabindex="-1">\u67E5\u8BE2 <a class="header-anchor" href="#\u67E5\u8BE2" aria-hidden="true">#</a></h4><div class="language-Shell"><button title="Copy Code" class="copy"></button><span class="lang">Shell</span><pre class="shiki vp-code-dark"><code><span class="line"><span style="color:#758575DD;"># \u83B7\u53D6\u6307\u5B9A key \u7684\u503C</span></span>
<span class="line"><span style="color:#DBD7CAEE;">GET key</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575DD;"># \u8FD4\u56DE key \u4E2D\u5B57\u7B26\u4E32\u503C\u7684\u5B50\u5B57\u7B26</span></span>
<span class="line"><span style="color:#DBD7CAEE;">GETRANGE key start end</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575DD;"># \u83B7\u53D6\u6240\u6709(\u4E00\u4E2A\u6216\u591A\u4E2A)\u7ED9\u5B9A key \u7684\u503C</span></span>
<span class="line"><span style="color:#DBD7CAEE;">MGET key </span><span style="color:#666666;">[</span><span style="color:#DBD7CAEE;">key ...</span><span style="color:#666666;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575DD;"># \u8FD4\u56DE key \u6240\u50A8\u5B58\u7684\u5B57\u7B26\u4E32\u503C\u7684\u957F\u5EA6\u3002</span></span>
<span class="line"><span style="color:#DBD7CAEE;">STRLEN key</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575DD;"># \u901A\u7528\u547D\u4EE4\uFF1A\u67E5\u8BE2\u96C6\u5408\u4E2D\u662F\u5426\u6709\u6307\u5B9A\u7684 key</span></span>
<span class="line"><span style="color:#DBD7CAEE;">EXISTS key </span><span style="color:#666666;">[</span><span style="color:#DBD7CAEE;">key ...</span><span style="color:#666666;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575DD;"># \u901A\u7528\u547D\u4EE4\uFF0C\u67E5\u8BE2 key \u7684\u7C7B\u578B</span></span>
<span class="line"><span style="color:#DBD7CAEE;">TYPE key</span></span>
<span class="line"></span></code></pre><pre class="shiki vp-code-light"><code><span class="line"><span style="color:#A0ADA0;"># \u83B7\u53D6\u6307\u5B9A key \u7684\u503C</span></span>
<span class="line"><span style="color:#393A34;">GET key</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;"># \u8FD4\u56DE key \u4E2D\u5B57\u7B26\u4E32\u503C\u7684\u5B50\u5B57\u7B26</span></span>
<span class="line"><span style="color:#393A34;">GETRANGE key start end</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;"># \u83B7\u53D6\u6240\u6709(\u4E00\u4E2A\u6216\u591A\u4E2A)\u7ED9\u5B9A key \u7684\u503C</span></span>
<span class="line"><span style="color:#393A34;">MGET key </span><span style="color:#999999;">[</span><span style="color:#393A34;">key ...</span><span style="color:#999999;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;"># \u8FD4\u56DE key \u6240\u50A8\u5B58\u7684\u5B57\u7B26\u4E32\u503C\u7684\u957F\u5EA6\u3002</span></span>
<span class="line"><span style="color:#393A34;">STRLEN key</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;"># \u901A\u7528\u547D\u4EE4\uFF1A\u67E5\u8BE2\u96C6\u5408\u4E2D\u662F\u5426\u6709\u6307\u5B9A\u7684 key</span></span>
<span class="line"><span style="color:#393A34;">EXISTS key </span><span style="color:#999999;">[</span><span style="color:#393A34;">key ...</span><span style="color:#999999;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;"># \u901A\u7528\u547D\u4EE4\uFF0C\u67E5\u8BE2 key \u7684\u7C7B\u578B</span></span>
<span class="line"><span style="color:#393A34;">TYPE key</span></span>
<span class="line"></span></code></pre></div><h4 id="\u4FEE\u6539" tabindex="-1">\u4FEE\u6539 <a class="header-anchor" href="#\u4FEE\u6539" aria-hidden="true">#</a></h4><div class="language-Shell"><button title="Copy Code" class="copy"></button><span class="lang">Shell</span><pre class="shiki vp-code-dark"><code><span class="line"><span style="color:#758575DD;"># \u8BBE\u7F6E\u6307\u5B9A key \u7684\u503C</span></span>
<span class="line"><span style="color:#DBD7CAEE;">SET key value</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575DD;"># \u5C06\u7ED9\u5B9A key \u7684\u503C\u8BBE\u4E3A value \uFF0C\u5E76\u8FD4\u56DE key \u7684\u65E7\u503C(old value)</span></span>
<span class="line"><span style="color:#DBD7CAEE;">GETSET key value</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575DD;"># \u5982\u679C key \u5DF2\u7ECF\u5B58\u5728\u5E76\u4E14\u662F\u4E00\u4E2A\u5B57\u7B26\u4E32\uFF0C APPEND \u547D\u4EE4\u5C06\u6307\u5B9A\u7684 value \u8FFD\u52A0\u5230\u8BE5 key \u539F\u6765\u503C\uFF08value\uFF09\u7684\u672B\u5C3E\u3002</span></span>
<span class="line"><span style="color:#DBD7CAEE;">APPEND key value</span></span>
<span class="line"></span></code></pre><pre class="shiki vp-code-light"><code><span class="line"><span style="color:#A0ADA0;"># \u8BBE\u7F6E\u6307\u5B9A key \u7684\u503C</span></span>
<span class="line"><span style="color:#393A34;">SET key value</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;"># \u5C06\u7ED9\u5B9A key \u7684\u503C\u8BBE\u4E3A value \uFF0C\u5E76\u8FD4\u56DE key \u7684\u65E7\u503C(old value)</span></span>
<span class="line"><span style="color:#393A34;">GETSET key value</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;"># \u5982\u679C key \u5DF2\u7ECF\u5B58\u5728\u5E76\u4E14\u662F\u4E00\u4E2A\u5B57\u7B26\u4E32\uFF0C APPEND \u547D\u4EE4\u5C06\u6307\u5B9A\u7684 value \u8FFD\u52A0\u5230\u8BE5 key \u539F\u6765\u503C\uFF08value\uFF09\u7684\u672B\u5C3E\u3002</span></span>
<span class="line"><span style="color:#393A34;">APPEND key value</span></span>
<span class="line"></span></code></pre></div><h4 id="\u5220\u9664" tabindex="-1">\u5220\u9664 <a class="header-anchor" href="#\u5220\u9664" aria-hidden="true">#</a></h4><div class="language-Shell"><button title="Copy Code" class="copy"></button><span class="lang">Shell</span><pre class="shiki vp-code-dark"><code><span class="line"><span style="color:#758575DD;"># \u901A\u7528\u547D\u4EE4\uFF1A\u5220\u96641\u4E2A\u6216\u591A\u4E2A\u6307\u5B9A\u7684 key</span></span>
<span class="line"><span style="color:#DBD7CAEE;">DEL key </span><span style="color:#666666;">[</span><span style="color:#DBD7CAEE;">key ...</span><span style="color:#666666;">]</span></span>
<span class="line"></span></code></pre><pre class="shiki vp-code-light"><code><span class="line"><span style="color:#A0ADA0;"># \u901A\u7528\u547D\u4EE4\uFF1A\u5220\u96641\u4E2A\u6216\u591A\u4E2A\u6307\u5B9A\u7684 key</span></span>
<span class="line"><span style="color:#393A34;">DEL key </span><span style="color:#999999;">[</span><span style="color:#393A34;">key ...</span><span style="color:#999999;">]</span></span>
<span class="line"></span></code></pre></div><h4 id="\u6570\u5B57\u503C" tabindex="-1">\u6570\u5B57\u503C <a class="header-anchor" href="#\u6570\u5B57\u503C" aria-hidden="true">#</a></h4><div class="language-Shell"><button title="Copy Code" class="copy"></button><span class="lang">Shell</span><pre class="shiki vp-code-dark"><code><span class="line"><span style="color:#758575DD;"># \u5C06 key \u4E2D\u50A8\u5B58\u7684\u6570\u5B57\u503C\u589E\u4E00</span></span>
<span class="line"><span style="color:#DBD7CAEE;">INCR key</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575DD;"># \u5C06 key \u6240\u50A8\u5B58\u7684\u503C\u52A0\u4E0A\u7ED9\u5B9A\u7684\u589E\u91CF\u503C\uFF08increment\uFF09 </span></span>
<span class="line"><span style="color:#DBD7CAEE;">INCRBY key increment</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575DD;"># \u5C06 key \u4E2D\u50A8\u5B58\u7684\u6570\u5B57\u503C\u51CF\u4E00</span></span>
<span class="line"><span style="color:#DBD7CAEE;">DECR key</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575DD;"># key \u6240\u50A8\u5B58\u7684\u503C\u51CF\u53BB\u7ED9\u5B9A\u7684\u51CF\u91CF\u503C\uFF08decrement\uFF09</span></span>
<span class="line"><span style="color:#DBD7CAEE;">DECRBY key decrement</span></span>
<span class="line"></span></code></pre><pre class="shiki vp-code-light"><code><span class="line"><span style="color:#A0ADA0;"># \u5C06 key \u4E2D\u50A8\u5B58\u7684\u6570\u5B57\u503C\u589E\u4E00</span></span>
<span class="line"><span style="color:#393A34;">INCR key</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;"># \u5C06 key \u6240\u50A8\u5B58\u7684\u503C\u52A0\u4E0A\u7ED9\u5B9A\u7684\u589E\u91CF\u503C\uFF08increment\uFF09 </span></span>
<span class="line"><span style="color:#393A34;">INCRBY key increment</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;"># \u5C06 key \u4E2D\u50A8\u5B58\u7684\u6570\u5B57\u503C\u51CF\u4E00</span></span>
<span class="line"><span style="color:#393A34;">DECR key</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;"># key \u6240\u50A8\u5B58\u7684\u503C\u51CF\u53BB\u7ED9\u5B9A\u7684\u51CF\u91CF\u503C\uFF08decrement\uFF09</span></span>
<span class="line"><span style="color:#393A34;">DECRBY key decrement</span></span>
<span class="line"></span></code></pre></div><blockquote><p>\u6570\u5B57\u503C\u5728 Redis \u4E2D\u4EE5\u5B57\u7B26\u4E32\u4FDD\u5B58\u3002</p></blockquote><h2 id="\u54C8\u5E0C-hash" tabindex="-1">\u54C8\u5E0C\uFF08Hash\uFF09 <a class="header-anchor" href="#\u54C8\u5E0C-hash" aria-hidden="true">#</a></h2><p>\u54C8\u5E0C\uFF08\u4E5F\u53EB\u6563\u5217\uFF09\u7C7B\u578B\u4E5F\u662F\u4E00\u79CD\u5B57\u5178\u7ED3\u6784\uFF0C\u5176\u5B58\u50A8\u4E86\u5B57\u6BB5\u548C\u5B57\u6BB5\u503C\u7684\u6620\u5C04\uFF0C\u4F46\u5B57\u7B26\u503C\u53EA\u80FD\u662F\u5B57\u7B26\u4E32\uFF0C\u4E0D\u80FD\u5176\u5B83\u6570\u636E\u7C7B\u578B\uFF0C\u6362\u53E5\u8BDD\u8BF4\uFF0C\u6563\u5217\u7C7B\u578B\u4E0D\u80FD\u5D4C\u5957\u5176\u5B83\u6570\u636E\u7C7B\u578B\u3002\u4E00\u4E2A\u54C8\u5E0C\u7C7B\u578B\u53EF\u4EE5\u5305\u542B\u81F3\u5C11 232 - 1 \u4E2A\u5B57\u6BB5\u3002</p><blockquote><p>\u63D0\u793A\uFF1A\u9664\u4E86\u6563\u5217\u7C7B\u578B\uFF0CRedis \u7684\u5176\u5B83\u6570\u636E\u7C7B\u578B\u540C\u6837\u4E0D\u652F\u6301\u6570\u636E\u7C7B\u578B\u5D4C\u5957\u3002</p></blockquote><p><img src="`+e+`" alt="img"></p><h4 id="\u6DFB\u52A0-1" tabindex="-1">\u6DFB\u52A0 <a class="header-anchor" href="#\u6DFB\u52A0-1" aria-hidden="true">#</a></h4><div class="language-Shell"><button title="Copy Code" class="copy"></button><span class="lang">Shell</span><pre class="shiki vp-code-dark"><code><span class="line"><span style="color:#758575DD;"># \u5C06\u54C8\u5E0C\u8868 key \u4E2D\u7684\u5B57\u6BB5 field \u7684\u503C\u8BBE\u4E3A value</span></span>
<span class="line"><span style="color:#DBD7CAEE;">HSET key field value </span><span style="color:#666666;">[</span><span style="color:#DBD7CAEE;">field value ...</span><span style="color:#666666;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575DD;"># \u540C\u65F6\u5C06\u591A\u4E2A field-value (\u57DF-\u503C)\u5BF9\u8BBE\u7F6E\u5230\u54C8\u5E0C\u8868 key \u4E2D</span></span>
<span class="line"><span style="color:#DBD7CAEE;">HMSET key field value </span><span style="color:#666666;">[</span><span style="color:#DBD7CAEE;">field value ...</span><span style="color:#666666;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575DD;"># \u53EA\u6709\u5728\u5B57\u6BB5 field \u4E0D\u5B58\u5728\u65F6\uFF0C\u8BBE\u7F6E\u54C8\u5E0C\u8868\u5B57\u6BB5\u7684\u503C</span></span>
<span class="line"><span style="color:#DBD7CAEE;">HSETNX key field value</span></span>
<span class="line"></span></code></pre><pre class="shiki vp-code-light"><code><span class="line"><span style="color:#A0ADA0;"># \u5C06\u54C8\u5E0C\u8868 key \u4E2D\u7684\u5B57\u6BB5 field \u7684\u503C\u8BBE\u4E3A value</span></span>
<span class="line"><span style="color:#393A34;">HSET key field value </span><span style="color:#999999;">[</span><span style="color:#393A34;">field value ...</span><span style="color:#999999;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;"># \u540C\u65F6\u5C06\u591A\u4E2A field-value (\u57DF-\u503C)\u5BF9\u8BBE\u7F6E\u5230\u54C8\u5E0C\u8868 key \u4E2D</span></span>
<span class="line"><span style="color:#393A34;">HMSET key field value </span><span style="color:#999999;">[</span><span style="color:#393A34;">field value ...</span><span style="color:#999999;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;"># \u53EA\u6709\u5728\u5B57\u6BB5 field \u4E0D\u5B58\u5728\u65F6\uFF0C\u8BBE\u7F6E\u54C8\u5E0C\u8868\u5B57\u6BB5\u7684\u503C</span></span>
<span class="line"><span style="color:#393A34;">HSETNX key field value</span></span>
<span class="line"></span></code></pre></div><h4 id="\u67E5\u8BE2-1" tabindex="-1">\u67E5\u8BE2 <a class="header-anchor" href="#\u67E5\u8BE2-1" aria-hidden="true">#</a></h4><div class="language-Shell"><button title="Copy Code" class="copy"></button><span class="lang">Shell</span><pre class="shiki vp-code-dark"><code><span class="line"><span style="color:#758575DD;"># \u83B7\u53D6\u6240\u6709\u54C8\u5E0C\u8868\u4E2D\u7684\u5B57\u6BB5</span></span>
<span class="line"><span style="color:#DBD7CAEE;">HKEYS key</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575DD;"># \u83B7\u53D6\u54C8\u5E0C\u8868\u4E2D\u5B57\u6BB5\u7684\u6570\u91CF</span></span>
<span class="line"><span style="color:#DBD7CAEE;">HLEN key</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575DD;"># \u83B7\u53D6\u6240\u6709\u7ED9\u5B9A\u5B57\u6BB5\u7684\u503C</span></span>
<span class="line"><span style="color:#DBD7CAEE;">HMGET key field1 </span><span style="color:#666666;">[</span><span style="color:#DBD7CAEE;">field2</span><span style="color:#666666;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575DD;"># \u83B7\u53D6\u5B58\u50A8\u5728\u54C8\u5E0C\u8868\u4E2D\u6307\u5B9A\u5B57\u6BB5\u7684\u503C</span></span>
<span class="line"><span style="color:#DBD7CAEE;">HGET key field</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575DD;"># \u83B7\u53D6\u5728\u54C8\u5E0C\u8868\u4E2D\u6307\u5B9A key \u7684\u6240\u6709\u5B57\u6BB5\u548C\u503C</span></span>
<span class="line"><span style="color:#DBD7CAEE;">HGETALL key</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575DD;"># \u67E5\u770B\u54C8\u5E0C\u8868 key \u4E2D\uFF0C\u6307\u5B9A\u7684\u5B57\u6BB5\u662F\u5426\u5B58\u5728</span></span>
<span class="line"><span style="color:#DBD7CAEE;">HEXISTS key field</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575DD;"># \u83B7\u53D6\u54C8\u5E0C\u8868\u4E2D\u6240\u6709\u503C</span></span>
<span class="line"><span style="color:#DBD7CAEE;">HVALS key</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575DD;"># \u8FED\u4EE3\u54C8\u5E0C\u8868\u4E2D\u7684\u952E\u503C\u5BF9</span></span>
<span class="line"><span style="color:#DBD7CAEE;">HSCAN key cursor </span><span style="color:#666666;">[</span><span style="color:#DBD7CAEE;">MATCH pattern</span><span style="color:#666666;">]</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">[</span><span style="color:#DBD7CAEE;">COUNT count</span><span style="color:#666666;">]</span></span>
<span class="line"></span></code></pre><pre class="shiki vp-code-light"><code><span class="line"><span style="color:#A0ADA0;"># \u83B7\u53D6\u6240\u6709\u54C8\u5E0C\u8868\u4E2D\u7684\u5B57\u6BB5</span></span>
<span class="line"><span style="color:#393A34;">HKEYS key</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;"># \u83B7\u53D6\u54C8\u5E0C\u8868\u4E2D\u5B57\u6BB5\u7684\u6570\u91CF</span></span>
<span class="line"><span style="color:#393A34;">HLEN key</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;"># \u83B7\u53D6\u6240\u6709\u7ED9\u5B9A\u5B57\u6BB5\u7684\u503C</span></span>
<span class="line"><span style="color:#393A34;">HMGET key field1 </span><span style="color:#999999;">[</span><span style="color:#393A34;">field2</span><span style="color:#999999;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;"># \u83B7\u53D6\u5B58\u50A8\u5728\u54C8\u5E0C\u8868\u4E2D\u6307\u5B9A\u5B57\u6BB5\u7684\u503C</span></span>
<span class="line"><span style="color:#393A34;">HGET key field</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;"># \u83B7\u53D6\u5728\u54C8\u5E0C\u8868\u4E2D\u6307\u5B9A key \u7684\u6240\u6709\u5B57\u6BB5\u548C\u503C</span></span>
<span class="line"><span style="color:#393A34;">HGETALL key</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;"># \u67E5\u770B\u54C8\u5E0C\u8868 key \u4E2D\uFF0C\u6307\u5B9A\u7684\u5B57\u6BB5\u662F\u5426\u5B58\u5728</span></span>
<span class="line"><span style="color:#393A34;">HEXISTS key field</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;"># \u83B7\u53D6\u54C8\u5E0C\u8868\u4E2D\u6240\u6709\u503C</span></span>
<span class="line"><span style="color:#393A34;">HVALS key</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;"># \u8FED\u4EE3\u54C8\u5E0C\u8868\u4E2D\u7684\u952E\u503C\u5BF9</span></span>
<span class="line"><span style="color:#393A34;">HSCAN key cursor </span><span style="color:#999999;">[</span><span style="color:#393A34;">MATCH pattern</span><span style="color:#999999;">]</span><span style="color:#393A34;"> </span><span style="color:#999999;">[</span><span style="color:#393A34;">COUNT count</span><span style="color:#999999;">]</span></span>
<span class="line"></span></code></pre></div><h4 id="\u4FEE\u6539-1" tabindex="-1">\u4FEE\u6539 <a class="header-anchor" href="#\u4FEE\u6539-1" aria-hidden="true">#</a></h4><div class="language-Shell"><button title="Copy Code" class="copy"></button><span class="lang">Shell</span><pre class="shiki vp-code-dark"><code><span class="line"><span style="color:#758575DD;"># \u5C06\u54C8\u5E0C\u8868 key \u4E2D\u7684\u5B57\u6BB5 field \u7684\u503C\u8BBE\u4E3A value</span></span>
<span class="line"><span style="color:#DBD7CAEE;">HSET key field value </span><span style="color:#666666;">[</span><span style="color:#DBD7CAEE;">field value ...</span><span style="color:#666666;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575DD;"># \u4E3A\u54C8\u5E0C\u8868 key \u4E2D\u7684\u6307\u5B9A\u5B57\u6BB5\u7684\u6574\u6570\u503C\u52A0\u4E0A\u589E\u91CF increment</span></span>
<span class="line"><span style="color:#DBD7CAEE;">HINCRBY key field increment</span></span>
<span class="line"></span></code></pre><pre class="shiki vp-code-light"><code><span class="line"><span style="color:#A0ADA0;"># \u5C06\u54C8\u5E0C\u8868 key \u4E2D\u7684\u5B57\u6BB5 field \u7684\u503C\u8BBE\u4E3A value</span></span>
<span class="line"><span style="color:#393A34;">HSET key field value </span><span style="color:#999999;">[</span><span style="color:#393A34;">field value ...</span><span style="color:#999999;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;"># \u4E3A\u54C8\u5E0C\u8868 key \u4E2D\u7684\u6307\u5B9A\u5B57\u6BB5\u7684\u6574\u6570\u503C\u52A0\u4E0A\u589E\u91CF increment</span></span>
<span class="line"><span style="color:#393A34;">HINCRBY key field increment</span></span>
<span class="line"></span></code></pre></div><h4 id="\u5220\u9664-1" tabindex="-1">\u5220\u9664 <a class="header-anchor" href="#\u5220\u9664-1" aria-hidden="true">#</a></h4><div class="language-Shell"><button title="Copy Code" class="copy"></button><span class="lang">Shell</span><pre class="shiki vp-code-dark"><code><span class="line"><span style="color:#758575DD;"># \u5220\u9664\u4E00\u4E2A\u6216\u591A\u4E2A\u54C8\u5E0C\u8868\u5B57\u6BB5</span></span>
<span class="line"><span style="color:#DBD7CAEE;">HDEL key field1 </span><span style="color:#666666;">[</span><span style="color:#DBD7CAEE;">field2</span><span style="color:#666666;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575DD;"># \u5220\u9664\u6574\u4E2A\u6570\u636E\u5B57\u6BB5</span></span>
<span class="line"><span style="color:#DBD7CAEE;">DEL key </span><span style="color:#666666;">[</span><span style="color:#DBD7CAEE;">key ...</span><span style="color:#666666;">]</span></span>
<span class="line"></span></code></pre><pre class="shiki vp-code-light"><code><span class="line"><span style="color:#A0ADA0;"># \u5220\u9664\u4E00\u4E2A\u6216\u591A\u4E2A\u54C8\u5E0C\u8868\u5B57\u6BB5</span></span>
<span class="line"><span style="color:#393A34;">HDEL key field1 </span><span style="color:#999999;">[</span><span style="color:#393A34;">field2</span><span style="color:#999999;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;"># \u5220\u9664\u6574\u4E2A\u6570\u636E\u5B57\u6BB5</span></span>
<span class="line"><span style="color:#393A34;">DEL key </span><span style="color:#999999;">[</span><span style="color:#393A34;">key ...</span><span style="color:#999999;">]</span></span>
<span class="line"></span></code></pre></div><h2 id="\u5217\u8868-list" tabindex="-1">\u5217\u8868\uFF08List\uFF09 <a class="header-anchor" href="#\u5217\u8868-list" aria-hidden="true">#</a></h2><p>\u5217\u8868\u7C7B\u578B\u7C7B\u4F3C\u4E8E\u7F16\u7A0B\u8BED\u8A00\u4E2D\u7684\u6570\u7EC4\uFF0C\u53EF\u4EE5\u5B58\u50A8\u4E00\u4E2A\u6709\u5E8F\u7684\u5B57\u7B26\u4E32\u5217\u8868\uFF0C\u5E38\u7528\u7684\u64CD\u4F5C\u5C31\u662F\u5411\u5217\u8868\u4E24\u7AEF\u6DFB\u52A0\u5143\u7D20\uFF0C\u6216\u8005\u83B7\u5F97\u5217\u8868\u7684\u67D0\u4E00\u4E2A\u7247\u6BB5\u3002</p><p><img src="`+o+`" alt="img"></p><p>\u5217\u8868\u7C7B\u578B\u5185\u90E8\u4F7F\u7528\u53CC\u5411\u94FE\u8868\u5B9E\u73B0\u7684\uFF0C\u6240\u6709\u5411\u5217\u8868\u4E24\u7AEF\u6DFB\u52A0\u5143\u7D20\u7684\u65F6\u95F4\u590D\u6742\u5EA6\u4E3AO(1)\uFF0C\u83B7\u53D6\u8D8A\u63A5\u8FD1\u4E24\u7AEF\u7684\u5143\u7D20\u901F\u5EA6\u5C31\u8D8A\u5FEB\u3002\u8FD9\u610F\u5473\u7740\u5373\u65F6\u662F\u4E00\u4E2A\u6709\u51E0\u5343\u4E07\u4E2A\u5143\u7D20\u7684\u5217\u8868\uFF0C\u83B7\u53D6\u5934\u90E8\u6216\u5C3E\u90E8\u768410\u6761\u8BB0\u5F55\u4E5F\u662F\u6781\u5FEB\u7684\uFF08\u548C\u4ECE\u53EA\u670920\u4E2A\u5143\u7D20\u7684\u5217\u8868\u4E2D\u83B7\u53D6\u5934\u90E8\u6216\u5C3E\u90E8\u768410\u6761\u8BB0\u5F55\u7684\u901F\u5EA6\u662F\u4E00\u6837\u7684\uFF09\u3002</p><p>\u4E0D\u8FC7\u4F7F\u7528\u94FE\u8868\u7684\u4EE3\u4EF7\u662F\u901A\u8FC7\u7D22\u5F15\u8BBF\u95EE\u5143\u7D20\u6BD4\u8F83\u6162\u3002\u8BBE\u60F3\u5728 iPhone \u53D1\u552E\u5F53\u524D\u6709 1000 \u4E2A\u4EBA\u5728\u5546\u5E97\u6392\u961F\u8D2D\u4E70\uFF0C\u8FD9\u65F6\u5546\u5BB6\u4E3A\u4E86\u611F\u8C22\u5927\u5BB6\u7684\u652F\u6301\uFF0C\u51B3\u5B9A\u5956\u52B1\u7B2C486\u4F4D\u7684\u987E\u5BA2\u5F02\u6B65\u514D\u8D39\u7684 iPhone\u3002\u4E3A\u4E86\u627E\u5230\u8FD9\u7B2C 486 \u4F4D\u987E\u5BA2\uFF0C\u5DE5\u4F5C\u4EBA\u5458\u4E0D\u5F97\u4E0D\u4ECE\u961F\u9996\u4E00\u4E2A\u4E00\u4E2A\u5730\u6570\u5230 486 \u4E2A\u4EBA\u3002\u4F46\u540C\u65F6\uFF0C\u65E0\u8BBA\u961F\u4F0D\u6709\u591A\u957F\uFF0C\u65B0\u6765\u7684\u4EBA\u60F3\u52A0\u5165\u961F\u4F0D\u7684\u8BDD\u76F4\u63A5\u6392\u5230\u961F\u5C3E\u5C31\u597D\u4E86\uFF0C\u548C\u961F\u4F0D\u91CC\u6709\u591A\u5C11\u4EBA\u6CA1\u6709\u4EFB\u4F55\u5173\u7CFB\u3002\u8FD9\u79CD\u60C5\u666F\u4E0E\u5217\u8868\u7C7B\u578B\u7684\u7279\u6027\u5F88\u76F8\u4F3C\u3002</p><p>\u8FD9\u79CD\u7279\u6027\u4F7F\u5217\u8868\u7C7B\u578B\u80FD\u975E\u5E38\u5FEB\u901F\u5730\u5B8C\u6210\u5173\u7CFB\u6570\u636E\u5E93\u96BE\u4EE5\u5E94\u4ED8\u7684\u573A\u666F\uFF1A\u4F8B\u5982\u793E\u4EA4\u7F51\u7AD9\u7684\u65B0\u9C9C\u4E8B\uFF0C\u6211\u4EEC\u5173\u5FC3\u7684\u53EA\u662F\u6700\u65B0\u5185\u5BB9\uFF0C\u4F7F\u7528\u5217\u8868\u7C7B\u578B\u5B58\u50A8\uFF0C\u5373\u4F7F\u65B0\u9C9C\u4E8B\u7684\u603B\u6570\u8FBE\u5230\u51E0\u5343\u4E07\u4E2A\uFF0C\u83B7\u53D6\u5176\u4E2D\u6700\u65B0\u7684100\u6761\u6570\u636E\u4E5F\u662F\u6781\u5FEB\u7684\u3002\u540C\u6837\u56E0\u4E3A\u5728\u4E24\u7AEF\u63D2\u5165\u8BB0\u5F55\u7684\u65F6\u95F4\u590D\u6742\u5EA6\u662FO(1)\uFF0C\u5217\u8868\u7C7B\u578B\u4E5F\u9002\u5408\u7528\u6765\u8BB0\u5F55\u65E5\u5FD7\uFF0C\u53EF\u4EE5\u4FDD\u8BC1\u52A0\u5165\u65B0\u65E5\u5FD7\u7684\u901F\u5EA6\u4E0D\u4F1A\u53D7\u5230\u5DF2\u6709\u65E5\u5FD7\u6570\u91CF\u989D\u5F71\u54CD\u3002</p><p>\u4E00\u4E2A\u5217\u8868\u6700\u591A\u53EF\u4EE5\u5305\u542B 232 - 1 \u4E2A\u5143\u7D20 (4294967295, \u6BCF\u4E2A\u5217\u8868\u8D85\u8FC740\u4EBF\u4E2A\u5143\u7D20)\u3002</p><h4 id="\u6DFB\u52A0-2" tabindex="-1">\u6DFB\u52A0 <a class="header-anchor" href="#\u6DFB\u52A0-2" aria-hidden="true">#</a></h4><div class="language-Shell"><button title="Copy Code" class="copy"></button><span class="lang">Shell</span><pre class="shiki vp-code-dark"><code><span class="line"><span style="color:#758575DD;"># \u5C06\u4E00\u4E2A\u6216\u591A\u4E2A\u503C\u63D2\u5165\u5230\u5217\u8868\u5934\u90E8</span></span>
<span class="line"><span style="color:#DBD7CAEE;">LPUSH key element </span><span style="color:#666666;">[</span><span style="color:#DBD7CAEE;">element ...</span><span style="color:#666666;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575DD;"># \u5728\u5217\u8868\u7684\u5143\u7D20\u524D\u6216\u8005\u540E\u63D2\u5165\u5143\u7D20</span></span>
<span class="line"><span style="color:#DBD7CAEE;">LINSERT key BEFORE</span><span style="color:#CB7676;">|</span><span style="color:#DBD7CAEE;">AFTER pivot value</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575DD;"># \u5C06\u4E00\u4E2A\u503C\u63D2\u5165\u5230\u5DF2\u5B58\u5728\u7684\u5217\u8868\u5934\u90E8</span></span>
<span class="line"><span style="color:#DBD7CAEE;">LPUSHX key value</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575DD;"># \u901A\u8FC7\u7D22\u5F15\u8BBE\u7F6E\u5217\u8868\u5143\u7D20\u7684\u503C</span></span>
<span class="line"><span style="color:#DBD7CAEE;">LSET key index value</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575DD;"># \u5728\u5217\u8868\u4E2D\u6DFB\u52A0\u4E00\u4E2A\u6216\u591A\u4E2A\u503C</span></span>
<span class="line"><span style="color:#DBD7CAEE;">RPUSH key value1 </span><span style="color:#666666;">[</span><span style="color:#DBD7CAEE;">value2</span><span style="color:#666666;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575DD;"># \u4E3A\u5DF2\u5B58\u5728\u7684\u5217\u8868\u6DFB\u52A0\u503C</span></span>
<span class="line"><span style="color:#DBD7CAEE;">RPUSHX key value</span></span>
<span class="line"></span></code></pre><pre class="shiki vp-code-light"><code><span class="line"><span style="color:#A0ADA0;"># \u5C06\u4E00\u4E2A\u6216\u591A\u4E2A\u503C\u63D2\u5165\u5230\u5217\u8868\u5934\u90E8</span></span>
<span class="line"><span style="color:#393A34;">LPUSH key element </span><span style="color:#999999;">[</span><span style="color:#393A34;">element ...</span><span style="color:#999999;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;"># \u5728\u5217\u8868\u7684\u5143\u7D20\u524D\u6216\u8005\u540E\u63D2\u5165\u5143\u7D20</span></span>
<span class="line"><span style="color:#393A34;">LINSERT key BEFORE</span><span style="color:#AB5959;">|</span><span style="color:#393A34;">AFTER pivot value</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;"># \u5C06\u4E00\u4E2A\u503C\u63D2\u5165\u5230\u5DF2\u5B58\u5728\u7684\u5217\u8868\u5934\u90E8</span></span>
<span class="line"><span style="color:#393A34;">LPUSHX key value</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;"># \u901A\u8FC7\u7D22\u5F15\u8BBE\u7F6E\u5217\u8868\u5143\u7D20\u7684\u503C</span></span>
<span class="line"><span style="color:#393A34;">LSET key index value</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;"># \u5728\u5217\u8868\u4E2D\u6DFB\u52A0\u4E00\u4E2A\u6216\u591A\u4E2A\u503C</span></span>
<span class="line"><span style="color:#393A34;">RPUSH key value1 </span><span style="color:#999999;">[</span><span style="color:#393A34;">value2</span><span style="color:#999999;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;"># \u4E3A\u5DF2\u5B58\u5728\u7684\u5217\u8868\u6DFB\u52A0\u503C</span></span>
<span class="line"><span style="color:#393A34;">RPUSHX key value</span></span>
<span class="line"></span></code></pre></div><h4 id="\u67E5\u8BE2-2" tabindex="-1">\u67E5\u8BE2 <a class="header-anchor" href="#\u67E5\u8BE2-2" aria-hidden="true">#</a></h4><div class="language-Shell"><button title="Copy Code" class="copy"></button><span class="lang">Shell</span><pre class="shiki vp-code-dark"><code><span class="line"><span style="color:#758575DD;"># \u901A\u8FC7\u7D22\u5F15\u83B7\u53D6\u5217\u8868\u4E2D\u7684\u5143\u7D20</span></span>
<span class="line"><span style="color:#DBD7CAEE;">LINDEX key index</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575DD;"># \u83B7\u53D6\u5217\u8868\u957F\u5EA6</span></span>
<span class="line"><span style="color:#DBD7CAEE;">LLEN key</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575DD;"># \u83B7\u53D6\u5217\u8868\u6307\u5B9A\u8303\u56F4\u5185\u7684\u5143\u7D20</span></span>
<span class="line"><span style="color:#DBD7CAEE;">LRANGE key start stop</span></span>
<span class="line"></span></code></pre><pre class="shiki vp-code-light"><code><span class="line"><span style="color:#A0ADA0;"># \u901A\u8FC7\u7D22\u5F15\u83B7\u53D6\u5217\u8868\u4E2D\u7684\u5143\u7D20</span></span>
<span class="line"><span style="color:#393A34;">LINDEX key index</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;"># \u83B7\u53D6\u5217\u8868\u957F\u5EA6</span></span>
<span class="line"><span style="color:#393A34;">LLEN key</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;"># \u83B7\u53D6\u5217\u8868\u6307\u5B9A\u8303\u56F4\u5185\u7684\u5143\u7D20</span></span>
<span class="line"><span style="color:#393A34;">LRANGE key start stop</span></span>
<span class="line"></span></code></pre></div><h4 id="\u5220\u9664-2" tabindex="-1">\u5220\u9664 <a class="header-anchor" href="#\u5220\u9664-2" aria-hidden="true">#</a></h4><div class="language-Shell"><button title="Copy Code" class="copy"></button><span class="lang">Shell</span><pre class="shiki vp-code-dark"><code><span class="line"><span style="color:#758575DD;"># \u79FB\u51FA\u5E76\u83B7\u53D6\u5217\u8868\u7684\u7B2C\u4E00\u4E2A\u5143\u7D20</span></span>
<span class="line"><span style="color:#DBD7CAEE;">LPOP key</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575DD;"># \u79FB\u51FA\u5E76\u83B7\u53D6\u5217\u8868\u7684\u7B2C\u4E00\u4E2A\u5143\u7D20\uFF0C \u5982\u679C\u5217\u8868\u6CA1\u6709\u5143\u7D20\u4F1A\u963B\u585E\u5217\u8868\u76F4\u5230\u7B49\u5F85\u8D85\u65F6\u6216\u53D1\u73B0\u53EF\u5F39\u51FA\u5143\u7D20\u4E3A\u6B62</span></span>
<span class="line"><span style="color:#DBD7CAEE;">BLPOP key1 </span><span style="color:#666666;">[</span><span style="color:#DBD7CAEE;">key2 </span><span style="color:#666666;">]</span><span style="color:#DBD7CAEE;"> timeout</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575DD;"># \u79FB\u51FA\u5E76\u83B7\u53D6\u5217\u8868\u7684\u6700\u540E\u4E00\u4E2A\u5143\u7D20\uFF0C \u5982\u679C\u5217\u8868\u6CA1\u6709\u5143\u7D20\u4F1A\u963B\u585E\u5217\u8868\u76F4\u5230\u7B49\u5F85\u8D85\u65F6\u6216\u53D1\u73B0\u53EF\u5F39\u51FA\u5143\u7D20\u4E3A\u6B62</span></span>
<span class="line"><span style="color:#DBD7CAEE;">BRPOP key1 </span><span style="color:#666666;">[</span><span style="color:#DBD7CAEE;">key2 </span><span style="color:#666666;">]</span><span style="color:#DBD7CAEE;"> timeout</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575DD;"># \u4ECE\u5217\u8868\u4E2D\u5F39\u51FA\u4E00\u4E2A\u503C\uFF0C\u5C06\u5F39\u51FA\u7684\u5143\u7D20\u63D2\u5165\u5230\u53E6\u5916\u4E00\u4E2A\u5217\u8868\u4E2D\u5E76\u8FD4\u56DE\u5B83\uFF1B \u5982\u679C\u5217\u8868\u6CA1\u6709\u5143\u7D20\u4F1A\u963B\u585E\u5217\u8868\u76F4\u5230\u7B49\u5F85\u8D85\u65F6\u6216\u53D1\u73B0\u53EF\u5F39\u51FA\u5143\u7D20\u4E3A\u6B62</span></span>
<span class="line"><span style="color:#DBD7CAEE;">BRPOPLPUSH </span><span style="color:#B8A965;">source</span><span style="color:#DBD7CAEE;"> destination timeout</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575DD;"># \u79FB\u9664\u5217\u8868\u5143\u7D20</span></span>
<span class="line"><span style="color:#758575DD;"># \u5982\u679C count &gt; 0\uFF0C\u5219\u4ECE\u5934\u5411\u5C3E\u904D\u5386\u5220\u9664\u5143\u7D20</span></span>
<span class="line"><span style="color:#758575DD;"># \u5982\u679C count &lt; 0\uFF0C\u5219\u4ECE\u540E\u9762\u5411\u524D\u9762\u5220\u9664\u5143\u7D20</span></span>
<span class="line"><span style="color:#758575DD;"># \u5982\u679C count = 0\uFF0C\u5219\u5220\u9664\u6240\u6709\u5339\u914D\u7684\u5143\u7D20</span></span>
<span class="line"><span style="color:#DBD7CAEE;">LREM key count value</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575DD;"># \u5BF9\u4E00\u4E2A\u5217\u8868\u8FDB\u884C\u4FEE\u526A(trim)\uFF0C\u5C31\u662F\u8BF4\uFF0C\u8BA9\u5217\u8868\u53EA\u4FDD\u7559\u6307\u5B9A\u533A\u95F4\u5185\u7684\u5143\u7D20\uFF0C\u4E0D\u5728\u6307\u5B9A\u533A\u95F4\u4E4B\u5185\u7684\u5143\u7D20\u90FD\u5C06\u88AB\u5220\u9664</span></span>
<span class="line"><span style="color:#DBD7CAEE;">LTRIM key start stop</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575DD;"># \u79FB\u9664\u5217\u8868\u7684\u6700\u540E\u4E00\u4E2A\u5143\u7D20\uFF0C\u8FD4\u56DE\u503C\u4E3A\u79FB\u9664\u7684\u5143\u7D20</span></span>
<span class="line"><span style="color:#DBD7CAEE;">RPOP key</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575DD;"># \u79FB\u9664\u5217\u8868\u7684\u6700\u540E\u4E00\u4E2A\u5143\u7D20\uFF0C\u5E76\u5C06\u8BE5\u5143\u7D20\u6DFB\u52A0\u5230\u53E6\u4E00\u4E2A\u5217\u8868\u5E76\u8FD4\u56DE</span></span>
<span class="line"><span style="color:#DBD7CAEE;">RPOPLPUSH </span><span style="color:#B8A965;">source</span><span style="color:#DBD7CAEE;"> destination</span></span>
<span class="line"></span></code></pre><pre class="shiki vp-code-light"><code><span class="line"><span style="color:#A0ADA0;"># \u79FB\u51FA\u5E76\u83B7\u53D6\u5217\u8868\u7684\u7B2C\u4E00\u4E2A\u5143\u7D20</span></span>
<span class="line"><span style="color:#393A34;">LPOP key</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;"># \u79FB\u51FA\u5E76\u83B7\u53D6\u5217\u8868\u7684\u7B2C\u4E00\u4E2A\u5143\u7D20\uFF0C \u5982\u679C\u5217\u8868\u6CA1\u6709\u5143\u7D20\u4F1A\u963B\u585E\u5217\u8868\u76F4\u5230\u7B49\u5F85\u8D85\u65F6\u6216\u53D1\u73B0\u53EF\u5F39\u51FA\u5143\u7D20\u4E3A\u6B62</span></span>
<span class="line"><span style="color:#393A34;">BLPOP key1 </span><span style="color:#999999;">[</span><span style="color:#393A34;">key2 </span><span style="color:#999999;">]</span><span style="color:#393A34;"> timeout</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;"># \u79FB\u51FA\u5E76\u83B7\u53D6\u5217\u8868\u7684\u6700\u540E\u4E00\u4E2A\u5143\u7D20\uFF0C \u5982\u679C\u5217\u8868\u6CA1\u6709\u5143\u7D20\u4F1A\u963B\u585E\u5217\u8868\u76F4\u5230\u7B49\u5F85\u8D85\u65F6\u6216\u53D1\u73B0\u53EF\u5F39\u51FA\u5143\u7D20\u4E3A\u6B62</span></span>
<span class="line"><span style="color:#393A34;">BRPOP key1 </span><span style="color:#999999;">[</span><span style="color:#393A34;">key2 </span><span style="color:#999999;">]</span><span style="color:#393A34;"> timeout</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;"># \u4ECE\u5217\u8868\u4E2D\u5F39\u51FA\u4E00\u4E2A\u503C\uFF0C\u5C06\u5F39\u51FA\u7684\u5143\u7D20\u63D2\u5165\u5230\u53E6\u5916\u4E00\u4E2A\u5217\u8868\u4E2D\u5E76\u8FD4\u56DE\u5B83\uFF1B \u5982\u679C\u5217\u8868\u6CA1\u6709\u5143\u7D20\u4F1A\u963B\u585E\u5217\u8868\u76F4\u5230\u7B49\u5F85\u8D85\u65F6\u6216\u53D1\u73B0\u53EF\u5F39\u51FA\u5143\u7D20\u4E3A\u6B62</span></span>
<span class="line"><span style="color:#393A34;">BRPOPLPUSH </span><span style="color:#998418;">source</span><span style="color:#393A34;"> destination timeout</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;"># \u79FB\u9664\u5217\u8868\u5143\u7D20</span></span>
<span class="line"><span style="color:#A0ADA0;"># \u5982\u679C count &gt; 0\uFF0C\u5219\u4ECE\u5934\u5411\u5C3E\u904D\u5386\u5220\u9664\u5143\u7D20</span></span>
<span class="line"><span style="color:#A0ADA0;"># \u5982\u679C count &lt; 0\uFF0C\u5219\u4ECE\u540E\u9762\u5411\u524D\u9762\u5220\u9664\u5143\u7D20</span></span>
<span class="line"><span style="color:#A0ADA0;"># \u5982\u679C count = 0\uFF0C\u5219\u5220\u9664\u6240\u6709\u5339\u914D\u7684\u5143\u7D20</span></span>
<span class="line"><span style="color:#393A34;">LREM key count value</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;"># \u5BF9\u4E00\u4E2A\u5217\u8868\u8FDB\u884C\u4FEE\u526A(trim)\uFF0C\u5C31\u662F\u8BF4\uFF0C\u8BA9\u5217\u8868\u53EA\u4FDD\u7559\u6307\u5B9A\u533A\u95F4\u5185\u7684\u5143\u7D20\uFF0C\u4E0D\u5728\u6307\u5B9A\u533A\u95F4\u4E4B\u5185\u7684\u5143\u7D20\u90FD\u5C06\u88AB\u5220\u9664</span></span>
<span class="line"><span style="color:#393A34;">LTRIM key start stop</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;"># \u79FB\u9664\u5217\u8868\u7684\u6700\u540E\u4E00\u4E2A\u5143\u7D20\uFF0C\u8FD4\u56DE\u503C\u4E3A\u79FB\u9664\u7684\u5143\u7D20</span></span>
<span class="line"><span style="color:#393A34;">RPOP key</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;"># \u79FB\u9664\u5217\u8868\u7684\u6700\u540E\u4E00\u4E2A\u5143\u7D20\uFF0C\u5E76\u5C06\u8BE5\u5143\u7D20\u6DFB\u52A0\u5230\u53E6\u4E00\u4E2A\u5217\u8868\u5E76\u8FD4\u56DE</span></span>
<span class="line"><span style="color:#393A34;">RPOPLPUSH </span><span style="color:#998418;">source</span><span style="color:#393A34;"> destination</span></span>
<span class="line"></span></code></pre></div><h2 id="\u96C6\u5408-set" tabindex="-1">\u96C6\u5408\uFF08Set\uFF09 <a class="header-anchor" href="#\u96C6\u5408-set" aria-hidden="true">#</a></h2><p>\u96C6\u5408\u7C7B\u578B\u548C\u6570\u5B66\u4E2D\u7684\u96C6\u5408\u6982\u5FF5\u76F8\u4F3C\uFF0C\u96C6\u5408\u4E2D\u7684\u5143\u7D20\u662F\u552F\u4E00\u7684\u3001\u65E0\u5E8F\u7684\uFF0C\u7B80\u5355\u7406\u89E3\u96C6\u5408\u5C31\u662F\u6CA1\u6709\u987A\u5E8F\u4E14\u4E0D\u91CD\u590D\u7684\u5217\u8868\u3002</p><p>\u4E00\u4E2A\u96C6\u5408\u7C7B\u578B\u53EF\u4EE5\u5B58\u50A8\u81F3\u591A 232 - 1 \u4E2A\u5B57\u7B26\u4E32\u3002</p><p>\u96C6\u5408\u7C7B\u578B\u548C\u5217\u8868\u7C7B\u578B\u6709\u76F8\u4F3C\u4E4B\u5904\uFF0C\u5B83\u4EEC\u7684\u4E3B\u8981\u533A\u522B\u662F\uFF1A</p><ul><li>\u5217\u8868\u662F\u6709\u5E8F\u7684\uFF0C\u96C6\u5408\u662F\u65E0\u5E8F\u7684</li><li>\u5217\u8868\u6570\u636E\u53EF\u4EE5\u91CD\u590D\uFF0C\u96C6\u5408\u4E2D\u6CA1\u6709\u91CD\u590D\u6570\u636E</li></ul><p>\u96C6\u5408\u7C7B\u578B\u7684\u5E38\u7528\u64CD\u4F5C\u662F\u5411\u96C6\u5408\u4E2D\u52A0\u5165\u6216\u5220\u9664\u5143\u7D20\u3001\u5224\u65AD\u67D0\u4E2A\u5143\u7D20\u662F\u5426\u5B58\u5728\u7B49\u3002\u7531\u4E8E\u96C6\u5408\u7C7B\u578B\u5728 Redis \u5185\u90E8\u662F\u4F7F\u7528\u503C\u4E3A\u7A7A\u7684\u6563\u5217\u8868\u5B9E\u73B0\u7684\uFF0C\u6240\u4EE5\u8FD9\u4E9B\u64CD\u4F5C\u7684\u65F6\u95F4\u590D\u6742\u5EA6\u90FD\u662FO(1)\u3002</p><p>\u6700\u65B9\u4FBF\u7684\u662F\u591A\u4E2A\u96C6\u5408\u4E4B\u95F4\u8FD8\u53EF\u4EE5\u8FDB\u884C\u5E76\u96C6\u3001\u4EA4\u96C6\u548C\u5DEE\u96C6\u8FD0\u7B97\u3002</p><h4 id="\u6DFB\u52A0-3" tabindex="-1">\u6DFB\u52A0 <a class="header-anchor" href="#\u6DFB\u52A0-3" aria-hidden="true">#</a></h4><div class="language-Shell"><button title="Copy Code" class="copy"></button><span class="lang">Shell</span><pre class="shiki vp-code-dark"><code><span class="line"><span style="color:#758575DD;"># \u5411\u96C6\u5408\u6DFB\u52A0\u4E00\u4E2A\u6216\u591A\u4E2A\u6210\u5458</span></span>
<span class="line"><span style="color:#DBD7CAEE;">SADD key member1 </span><span style="color:#666666;">[</span><span style="color:#DBD7CAEE;">member2</span><span style="color:#666666;">]</span></span>
<span class="line"></span></code></pre><pre class="shiki vp-code-light"><code><span class="line"><span style="color:#A0ADA0;"># \u5411\u96C6\u5408\u6DFB\u52A0\u4E00\u4E2A\u6216\u591A\u4E2A\u6210\u5458</span></span>
<span class="line"><span style="color:#393A34;">SADD key member1 </span><span style="color:#999999;">[</span><span style="color:#393A34;">member2</span><span style="color:#999999;">]</span></span>
<span class="line"></span></code></pre></div><h4 id="\u67E5\u8BE2-3" tabindex="-1">\u67E5\u8BE2 <a class="header-anchor" href="#\u67E5\u8BE2-3" aria-hidden="true">#</a></h4><div class="language-Shell"><button title="Copy Code" class="copy"></button><span class="lang">Shell</span><pre class="shiki vp-code-dark"><code><span class="line"><span style="color:#758575DD;"># \u8FD4\u56DE\u96C6\u5408\u4E2D\u7684\u6240\u6709\u6210\u5458</span></span>
<span class="line"><span style="color:#DBD7CAEE;">SMEMBERS key</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575DD;"># \u83B7\u53D6\u96C6\u5408\u7684\u6210\u5458\u6570</span></span>
<span class="line"><span style="color:#DBD7CAEE;">SCARD key</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575DD;"># \u5224\u65AD member \u5143\u7D20\u662F\u5426\u662F\u96C6\u5408 key \u7684\u6210\u5458</span></span>
<span class="line"><span style="color:#DBD7CAEE;">SISMEMBER key member</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575DD;"># \u8FD4\u56DE\u96C6\u5408\u4E2D\u4E00\u4E2A\u6216\u591A\u4E2A\u968F\u673A\u6570</span></span>
<span class="line"><span style="color:#DBD7CAEE;">SRANDMEMBER key </span><span style="color:#666666;">[</span><span style="color:#DBD7CAEE;">count</span><span style="color:#666666;">]</span></span>
<span class="line"></span></code></pre><pre class="shiki vp-code-light"><code><span class="line"><span style="color:#A0ADA0;"># \u8FD4\u56DE\u96C6\u5408\u4E2D\u7684\u6240\u6709\u6210\u5458</span></span>
<span class="line"><span style="color:#393A34;">SMEMBERS key</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;"># \u83B7\u53D6\u96C6\u5408\u7684\u6210\u5458\u6570</span></span>
<span class="line"><span style="color:#393A34;">SCARD key</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;"># \u5224\u65AD member \u5143\u7D20\u662F\u5426\u662F\u96C6\u5408 key \u7684\u6210\u5458</span></span>
<span class="line"><span style="color:#393A34;">SISMEMBER key member</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;"># \u8FD4\u56DE\u96C6\u5408\u4E2D\u4E00\u4E2A\u6216\u591A\u4E2A\u968F\u673A\u6570</span></span>
<span class="line"><span style="color:#393A34;">SRANDMEMBER key </span><span style="color:#999999;">[</span><span style="color:#393A34;">count</span><span style="color:#999999;">]</span></span>
<span class="line"></span></code></pre></div><h4 id="\u5220\u9664-3" tabindex="-1">\u5220\u9664 <a class="header-anchor" href="#\u5220\u9664-3" aria-hidden="true">#</a></h4><div class="language-Shell"><button title="Copy Code" class="copy"></button><span class="lang">Shell</span><pre class="shiki vp-code-dark"><code><span class="line"><span style="color:#758575DD;"># \u79FB\u9664\u96C6\u5408\u4E2D\u4E00\u4E2A\u6216\u591A\u4E2A\u6210\u5458</span></span>
<span class="line"><span style="color:#DBD7CAEE;">SREM key member1 </span><span style="color:#666666;">[</span><span style="color:#DBD7CAEE;">member2</span><span style="color:#666666;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575DD;"># \u79FB\u9664\u5E76\u8FD4\u56DE\u96C6\u5408\u4E2D\u7684\u4E00\u4E2A\u968F\u673A\u5143\u7D20</span></span>
<span class="line"><span style="color:#DBD7CAEE;">SPOP key</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575DD;"># \u5C06 member \u5143\u7D20\u4ECE source \u96C6\u5408\u79FB\u52A8\u5230 destination \u96C6\u5408</span></span>
<span class="line"><span style="color:#DBD7CAEE;">SMOVE </span><span style="color:#B8A965;">source</span><span style="color:#DBD7CAEE;"> destination member</span></span>
<span class="line"></span></code></pre><pre class="shiki vp-code-light"><code><span class="line"><span style="color:#A0ADA0;"># \u79FB\u9664\u96C6\u5408\u4E2D\u4E00\u4E2A\u6216\u591A\u4E2A\u6210\u5458</span></span>
<span class="line"><span style="color:#393A34;">SREM key member1 </span><span style="color:#999999;">[</span><span style="color:#393A34;">member2</span><span style="color:#999999;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;"># \u79FB\u9664\u5E76\u8FD4\u56DE\u96C6\u5408\u4E2D\u7684\u4E00\u4E2A\u968F\u673A\u5143\u7D20</span></span>
<span class="line"><span style="color:#393A34;">SPOP key</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;"># \u5C06 member \u5143\u7D20\u4ECE source \u96C6\u5408\u79FB\u52A8\u5230 destination \u96C6\u5408</span></span>
<span class="line"><span style="color:#393A34;">SMOVE </span><span style="color:#998418;">source</span><span style="color:#393A34;"> destination member</span></span>
<span class="line"></span></code></pre></div><h4 id="\u96C6\u5408\u95F4\u805A\u5408\u8FD0\u7B97" tabindex="-1">\u96C6\u5408\u95F4\u805A\u5408\u8FD0\u7B97 <a class="header-anchor" href="#\u96C6\u5408\u95F4\u805A\u5408\u8FD0\u7B97" aria-hidden="true">#</a></h4><p>\u591A\u4E2A\u96C6\u5408\u4E4B\u95F4\u8FD8\u53EF\u4EE5\u8FDB\u884C\u5E76\u96C6\u3001\u4EA4\u96C6\u548C\u5DEE\u96C6\u8FD0\u7B97\u3002</p><div class="language-Shell"><button title="Copy Code" class="copy"></button><span class="lang">Shell</span><pre class="shiki vp-code-dark"><code><span class="line"><span style="color:#758575DD;"># \u8FD4\u56DE\u7B2C\u4E00\u4E2A\u96C6\u5408\u4E0E\u5176\u4ED6\u96C6\u5408\u4E4B\u95F4\u7684\u5DEE\u5F02\u3002</span></span>
<span class="line"><span style="color:#DBD7CAEE;">SDIFF key1 </span><span style="color:#666666;">[</span><span style="color:#DBD7CAEE;">key2</span><span style="color:#666666;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575DD;"># \u8FD4\u56DE\u7ED9\u5B9A\u6240\u6709\u96C6\u5408\u7684\u4EA4\u96C6</span></span>
<span class="line"><span style="color:#DBD7CAEE;">SINTER key1 </span><span style="color:#666666;">[</span><span style="color:#DBD7CAEE;">key2</span><span style="color:#666666;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575DD;"># \u8FD4\u56DE\u6240\u6709\u7ED9\u5B9A\u96C6\u5408\u7684\u5E76\u96C6</span></span>
<span class="line"><span style="color:#DBD7CAEE;">SUNION key1 </span><span style="color:#666666;">[</span><span style="color:#DBD7CAEE;">key2</span><span style="color:#666666;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575DD;"># \u8FD4\u56DE\u7ED9\u5B9A\u6240\u6709\u96C6\u5408\u7684\u5DEE\u96C6\u5E76\u5B58\u50A8\u5728 destination \u4E2D</span></span>
<span class="line"><span style="color:#DBD7CAEE;">SDIFFSTORE destination key1 </span><span style="color:#666666;">[</span><span style="color:#DBD7CAEE;">key2</span><span style="color:#666666;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575DD;"># \u8FD4\u56DE\u7ED9\u5B9A\u6240\u6709\u96C6\u5408\u7684\u4EA4\u96C6\u5E76\u5B58\u50A8\u5728 destination \u4E2D</span></span>
<span class="line"><span style="color:#DBD7CAEE;">SINTERSTORE destination key1 </span><span style="color:#666666;">[</span><span style="color:#DBD7CAEE;">key2</span><span style="color:#666666;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575DD;"># \u6240\u6709\u7ED9\u5B9A\u96C6\u5408\u7684\u5E76\u96C6\u5B58\u50A8\u5728 destination \u96C6\u5408\u4E2D</span></span>
<span class="line"><span style="color:#DBD7CAEE;">SUNIONSTORE destination key1 </span><span style="color:#666666;">[</span><span style="color:#DBD7CAEE;">key2</span><span style="color:#666666;">]</span></span>
<span class="line"></span></code></pre><pre class="shiki vp-code-light"><code><span class="line"><span style="color:#A0ADA0;"># \u8FD4\u56DE\u7B2C\u4E00\u4E2A\u96C6\u5408\u4E0E\u5176\u4ED6\u96C6\u5408\u4E4B\u95F4\u7684\u5DEE\u5F02\u3002</span></span>
<span class="line"><span style="color:#393A34;">SDIFF key1 </span><span style="color:#999999;">[</span><span style="color:#393A34;">key2</span><span style="color:#999999;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;"># \u8FD4\u56DE\u7ED9\u5B9A\u6240\u6709\u96C6\u5408\u7684\u4EA4\u96C6</span></span>
<span class="line"><span style="color:#393A34;">SINTER key1 </span><span style="color:#999999;">[</span><span style="color:#393A34;">key2</span><span style="color:#999999;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;"># \u8FD4\u56DE\u6240\u6709\u7ED9\u5B9A\u96C6\u5408\u7684\u5E76\u96C6</span></span>
<span class="line"><span style="color:#393A34;">SUNION key1 </span><span style="color:#999999;">[</span><span style="color:#393A34;">key2</span><span style="color:#999999;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;"># \u8FD4\u56DE\u7ED9\u5B9A\u6240\u6709\u96C6\u5408\u7684\u5DEE\u96C6\u5E76\u5B58\u50A8\u5728 destination \u4E2D</span></span>
<span class="line"><span style="color:#393A34;">SDIFFSTORE destination key1 </span><span style="color:#999999;">[</span><span style="color:#393A34;">key2</span><span style="color:#999999;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;"># \u8FD4\u56DE\u7ED9\u5B9A\u6240\u6709\u96C6\u5408\u7684\u4EA4\u96C6\u5E76\u5B58\u50A8\u5728 destination \u4E2D</span></span>
<span class="line"><span style="color:#393A34;">SINTERSTORE destination key1 </span><span style="color:#999999;">[</span><span style="color:#393A34;">key2</span><span style="color:#999999;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;"># \u6240\u6709\u7ED9\u5B9A\u96C6\u5408\u7684\u5E76\u96C6\u5B58\u50A8\u5728 destination \u96C6\u5408\u4E2D</span></span>
<span class="line"><span style="color:#393A34;">SUNIONSTORE destination key1 </span><span style="color:#999999;">[</span><span style="color:#393A34;">key2</span><span style="color:#999999;">]</span></span>
<span class="line"></span></code></pre></div><h4 id="\u4F7F\u7528\u573A\u666F" tabindex="-1">\u4F7F\u7528\u573A\u666F <a class="header-anchor" href="#\u4F7F\u7528\u573A\u666F" aria-hidden="true">#</a></h4><ul><li>\u8DDF\u8E2A\u4E00\u4E9B\u552F\u4E00\u6027\u6570\u636E <ul><li>\u6BD4\u5982\u8BBF\u95EE\u7F51\u7AD9\u7684\u552F\u4E00 IP \u5730\u5740\u4FE1\u606F\uFF0C\u6BCF\u6B21\u8BBF\u95EE\u7F51\u7AD9\u7684\u65F6\u5019\u8BB0\u5F55\u7528\u6237 IP \u5730\u5740\uFF0CSET \u81EA\u52A8\u4FDD\u8BC1\u6570\u636E\u7684\u552F\u4E00\u4E0D\u91CD\u590D</li></ul></li><li>\u5145\u5206\u5229\u7528 SET \u805A\u5408\u64CD\u4F5C\u65B9\u4FBF\u9AD8\u6548\u7684\u7279\u6027\uFF0C\u7528\u4E8E\u7EF4\u62A4\u6570\u636E\u5BF9\u8C61\u4E4B\u95F4\u7684\u5173\u8054\u5173\u7CFB <ul><li>\u6BD4\u5982\u6240\u6709\u8D2D\u4E70A\u5546\u54C1\u7684\u5BA2\u6237 ID \u5B58\u50A8\u5230\u6307\u5B9A\u7684 SET \u4E2D\uFF0C\u6240\u6709\u8D2D\u4E70B\u5546\u54C1\u7684\u5BA2\u6237 ID \u5B58\u50A8\u5230\u6307\u5B9A\u7684 SET \u4E2D\uFF0C\u5982\u679C\u6211\u4EEC\u60F3\u8981\u83B7\u53D6\u6709\u54EA\u4E2A\u5BA2\u6237\u540C\u65F6\u8D2D\u4E70\u4E86\u8FD9\u4E24\u4E2A\u5546\u54C1\uFF0C\u6211\u4EEC\u53EA\u9700\u8981\u4F7F\u7528\u4EA4\u96C6\u64CD\u4F5C\u5C31\u53EF\u4EE5\u8F7B\u677E\u7684\u67E5\u51FA\u6765</li></ul></li></ul><h2 id="\u6709\u5E8F\u96C6\u5408-sorted-set" tabindex="-1">\u6709\u5E8F\u96C6\u5408\uFF08Sorted Set\uFF09 <a class="header-anchor" href="#\u6709\u5E8F\u96C6\u5408-sorted-set" aria-hidden="true">#</a></h2><p>\u6709\u5E8F\u96C6\u5408\u662F\u4E00\u79CD\u7C7B\u4F3C\u4E8E\u96C6\u5408\u548C\u54C8\u5E0C\u4E4B\u95F4\u7684\u6DF7\u5408\u6570\u636E\u7C7B\u578B\u3002</p><ul><li>\u4E0E\u96C6\u5408\u4E00\u6837\uFF0C\u6392\u5E8F\u96C6\u5408\u7531\u552F\u4E00\u7684\u975E\u91CD\u590D\u5B57\u7B26\u4E32\u5143\u7D20\u7EC4\u6210</li><li>\u6709\u5E8F\u96C6\u5408\u4E2D\u7684\u5143\u7D20\u4E0D\u6392\u5E8F\uFF0C\u4F46\u6709\u5E8F\u96C6\u5408\u4E2D\u7684\u6BCF\u4E2A\u5143\u7D20\u90FD\u5173\u8054\u4E86\u4E00\u4E2A\u5206\u6570\uFF08\u8FD9\u5C31\u662F\u4E3A\u4EC0\u4E48\u7C7B\u578B\u4E5F\u7C7B\u4F3C\u4E8E\u54C8\u5E0C\uFF0C\u56E0\u4E3A\u6BCF\u4E2A\u5143\u7D20\u90FD\u6620\u5C04\u5230\u4E00\u4E2A\u503C\uFF09</li><li>\u867D\u7136\u96C6\u5408\u4E2D\u6BCF\u4E2A\u5143\u7D20\u90FD\u662F\u4E0D\u540C\u7684\uFF0C\u4F46\u662F\u5B83\u4EEC\u7684\u5206\u6570\u786E\u53EF\u4EE5\u76F8\u540C</li></ul><p><img src="`+c+`" alt="img"></p><blockquote><p>\u6BCF\u4E2A\u5143\u7D20\u90FD\u4F1A\u5173\u8054\u4E00\u4E2A double \u7C7B\u578B\u7684\u5206\u6570\u3002Redis \u6B63\u662F\u901A\u8FC7\u5206\u6570\u6765\u4E3A\u96C6\u5408\u4E2D\u7684\u6210\u5458\u8FDB\u884C\u4ECE\u5C0F\u5230\u5927\u7684\u6392\u5E8F\u3002 \u6709\u5E8F\u96C6\u5408\u7C7B\u578B\u5728\u67D0\u4E9B\u65B9\u9762\u548C\u5217\u8868\u7C7B\u578B\u6709\u4E9B\u76F8\u4F3C\u3002</p></blockquote><p>\u76F8\u540C\u70B9\uFF1A</p><ul><li>\u4E24\u8005\u90FD\u662F\u6709\u5E8F\u7684</li><li>\u4E24\u8005\u90FD\u53EF\u4EE5\u83B7\u5F97\u67D0\u4E00\u8303\u56F4\u7684\u5143\u7D20 \u4E0D\u540C\u70B9\uFF1A</li><li>\u5217\u8868\u7C7B\u578B\u901A\u8FC7\u94FE\u8868\u5B9E\u73B0\u7684\uFF0C\u83B7\u53D6\u9760\u8FD1\u4E24\u7AEF\u7684\u6570\u636E\u901F\u5EA6\u6781\u5FEB\uFF0C\u800C\u5F53\u5143\u7D20\u589E\u591A\u540E\uFF0C\u8BBF\u95EE\u4E2D\u95F4\u6570\u636E\u7684\u901F\u5EA6\u4F1A\u8F83\u6162\uFF0C\u6240\u4EE5\u5B83\u66F4\u9002\u5408\u5B9E\u73B0\u5982\u201C\u65B0\u9C9C\u4E8B\u201D\u6216\u201C\u65E5\u5FD7\u201D\u8FD9\u6837\u5F88\u5C11\u8BBF\u95EE\u4E2D\u95F4\u5143\u7D20\u7684\u5E94\u7528</li><li>\u6709\u5E8F\u96C6\u5408\u7C7B\u4F3C\u662F\u4F7F\u7528\u54C8\u5E0C\u8868\u5B9E\u73B0\u7684\uFF0C\u6240\u4EE5\u5373\u4F7F\u8BFB\u53D6\u4F4D\u4E8E\u4E2D\u95F4\u90E8\u5206\u7684\u6570\u636E\u901F\u5EA6\u4E5F\u5F88\u5FEB</li><li>\u5217\u8868\u4E2D\u4E0D\u80FD\u7B80\u5355\u7684\u8C03\u6574\u67D0\u4E2A\u5143\u7D20\u7684\u4F4D\u7F6E\uFF0C\u4F46\u662F\u6709\u5E8F\u96C6\u5408\u53EF\u4EE5\uFF08\u901A\u8FC7\u66F4\u6539\u5143\u7D20\u7684\u5206\u6570\uFF09</li><li>\u6709\u5E8F\u96C6\u5408\u8981\u6BD4\u5217\u8868\u7C7B\u578B\u66F4\u8017\u8D39\u5185\u5B58</li></ul><p>\u6709\u5E8F\u96C6\u5408\u7684\u5178\u578B\u5E94\u7528\u573A\u666F\uFF1A</p><p>\uFF081\uFF09\u6392\u884C\u699C \u4F8B\u5982\u4E00\u4E2A\u5927\u578B\u5728\u7EBF\u6E38\u620F\u7684\u79EF\u5206\u6392\u884C\u699C\uFF0C\u6BCF\u5F53\u73A9\u5BB6\u7684\u5206\u6570\u53D1\u751F\u53D8\u5316\u65F6\uFF0C\u53EF\u4EE5\u6267\u884C ZADD \u547D\u4EE4\u66F4\u65B0\u73A9\u5BB6\u7684\u5206\u6570\uFF0C\u6B64\u540E\u518D\u901A\u8FC7 ZRANGE \u547D\u4EE4\u83B7\u53D6\u79EF\u5206 TOPTEN \u7684\u7528\u6237\u4FE1\u606F\u3002\u5F53\u7136\u6211\u4EEC\u4E5F\u53EF\u4EE5\u5229\u7528 ZRANK \u547D\u4EE4\u901A\u8FC7 username \u6765\u83B7\u53D6\u73A9\u5BB6\u7684\u6392\u884C\u4FE1\u606F\u3002\u6700\u540E\u6211\u4EEC\u5C06\u7EC4\u5408\u4F7F\u7528 ZRANGE \u548C ZRANK \u547D\u4EE4\u5FEB\u901F\u7684\u83B7\u53D6\u548C\u67D0\u4E2A\u73A9\u5BB6\u79EF\u5206\u76F8\u8FD1\u7684\u5176\u4ED6\u7528\u6237\u7684\u4FE1\u606F\u3002</p><p>\uFF082\uFF09\u5FAE\u535A\u70ED\u641C \u5047\u8BBE\u6211\u4EEC\u73B0\u5728\u8981\u83B7\u53D6\u70ED\u95E8\u7684\u5E16\u5B50\u6216\u641C\u7D22\uFF0C\u6BD4\u5982\u6211\u4EEC\u5E38\u7528\u7684\u5FAE\u535A\u70ED\u641C\u3002 \u9996\u5148\uFF0C\u6211\u4EEC\u9700\u8981\u4E00\u4E2A\u8861\u91CF\u7684\u6807\u51C6\uFF0C\u5B9A\u91CF\u7684\u91CF\u5EA6\u70ED\u641C\u7684\u70ED\u95E8\u7A0B\u5EA6\u3002\u5047\u8BBE\u6211\u4EEC\u6709\u4E00\u4E2A\u5B57\u6BB5\u53EB\u56DE\u590D\u91CF\uFF0C\u56DE\u590D\u91CF\u8D8A\u9AD8\u5C31\u8D8A\u70ED\u95E8\u3002</p><p>\u5982\u679C\u6211\u4EEC\u7528\u5173\u7CFB\u578B\u6570\u636E\u5E93\u6765\u83B7\u53D6\u7684\u8BDD\uFF0C\u7528 SQL \u8BED\u53E5\u5B9E\u73B0\u5F88\u7B80\u5355\uFF1A</p><div class="language-SQL"><button title="Copy Code" class="copy"></button><span class="lang">SQL</span><pre class="shiki vp-code-dark"><code><span class="line"><span style="color:#4D9375;">SELECT</span><span style="color:#DBD7CAEE;"> </span><span style="color:#CB7676;">*</span><span style="color:#DBD7CAEE;"> </span><span style="color:#4D9375;">FROM</span><span style="color:#DBD7CAEE;"> </span><span style="color:#4D9375;">message</span><span style="color:#DBD7CAEE;"> </span><span style="color:#4D9375;">ORDER BY</span><span style="color:#DBD7CAEE;"> backsum </span><span style="color:#4D9375;">LIMIT</span><span style="color:#DBD7CAEE;"> </span><span style="color:#4C9A91;">10</span></span>
<span class="line"></span></code></pre><pre class="shiki vp-code-light"><code><span class="line"><span style="color:#1E754F;">SELECT</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">*</span><span style="color:#393A34;"> </span><span style="color:#1E754F;">FROM</span><span style="color:#393A34;"> </span><span style="color:#1E754F;">message</span><span style="color:#393A34;"> </span><span style="color:#1E754F;">ORDER BY</span><span style="color:#393A34;"> backsum </span><span style="color:#1E754F;">LIMIT</span><span style="color:#393A34;"> </span><span style="color:#2F798A;">10</span></span>
<span class="line"></span></code></pre></div><p>\u4F46\u662F\u5F53\u6570\u636E\u91CF\u5F88\u5927\u7684\u65F6\u5019\uFF0C\u6548\u7387\u5F88\u4F4E\uFF0C\u540C\u65F6\u5982\u679C\u5EFA\u7ACB\u7D22\u5F15\u53C8\u8981\u6D88\u8017\u5927\u91CF\u7684\u8D44\u6E90\uFF0C\u540C\u65F6\u589E\u52A0\u8D1F\u8F7D\u3002 \u4F7F\u7528 Redis \u7684\u65F6\u5019\uFF0C\u6211\u4EEC\u4E0D\u9700\u8981\u5B58\u50A8\u591A\u4F59\u7684\u4FE1\u606F\uFF0C\u53EA\u9700\u8981\u5B58\u50A8\u5E16\u5B50 id \u548C\u56DE\u590D\u91CF\u4E24\u4E2A\u4FE1\u606F\u5C31\u53EF\u4EE5\u4E86\u3002</p><h4 id="\u6DFB\u52A0-4" tabindex="-1">\u6DFB\u52A0 <a class="header-anchor" href="#\u6DFB\u52A0-4" aria-hidden="true">#</a></h4><div class="language-Shell"><button title="Copy Code" class="copy"></button><span class="lang">Shell</span><pre class="shiki vp-code-dark"><code><span class="line"><span style="color:#758575DD;"># \u5411\u6709\u5E8F\u96C6\u5408\u6DFB\u52A0\u4E00\u4E2A\u6216\u591A\u4E2A\u6210\u5458\uFF0C\u6216\u8005\u66F4\u65B0\u5DF2\u5B58\u5728\u6210\u5458\u7684\u5206\u6570</span></span>
<span class="line"><span style="color:#DBD7CAEE;">ZADD key score member </span><span style="color:#666666;">[</span><span style="color:#DBD7CAEE;">score member ...</span><span style="color:#666666;">]</span></span>
<span class="line"></span></code></pre><pre class="shiki vp-code-light"><code><span class="line"><span style="color:#A0ADA0;"># \u5411\u6709\u5E8F\u96C6\u5408\u6DFB\u52A0\u4E00\u4E2A\u6216\u591A\u4E2A\u6210\u5458\uFF0C\u6216\u8005\u66F4\u65B0\u5DF2\u5B58\u5728\u6210\u5458\u7684\u5206\u6570</span></span>
<span class="line"><span style="color:#393A34;">ZADD key score member </span><span style="color:#999999;">[</span><span style="color:#393A34;">score member ...</span><span style="color:#999999;">]</span></span>
<span class="line"></span></code></pre></div><h4 id="\u67E5\u8BE2-4" tabindex="-1">\u67E5\u8BE2 <a class="header-anchor" href="#\u67E5\u8BE2-4" aria-hidden="true">#</a></h4><div class="language-Shell"><button title="Copy Code" class="copy"></button><span class="lang">Shell</span><pre class="shiki vp-code-dark"><code><span class="line"><span style="color:#758575DD;"># \u901A\u8FC7\u7D22\u5F15\u533A\u95F4\u8FD4\u56DE\u6709\u5E8F\u96C6\u5408\u6307\u5B9A\u533A\u95F4\u5185\u7684\u6210\u5458\uFF0C\u5206\u6570\u4ECE\u4F4E\u5230\u9AD8\u6392\u5E8F</span></span>
<span class="line"><span style="color:#DBD7CAEE;">ZRANGE key start stop </span><span style="color:#666666;">[</span><span style="color:#DBD7CAEE;">WITHSCORES</span><span style="color:#666666;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575DD;"># \u901A\u8FC7\u7D22\u5F15\u533A\u95F4\u8FD4\u56DE\u6709\u5E8F\u96C6\u5408\u6307\u5B9A\u533A\u95F4\u5185\u7684\u6210\u5458\uFF0C\u5206\u6570\u4ECE\u9AD8\u5230\u4F4E\u6392\u5E8F</span></span>
<span class="line"><span style="color:#DBD7CAEE;">ZREVRANGE key start stop </span><span style="color:#666666;">[</span><span style="color:#DBD7CAEE;">WITHSCORES</span><span style="color:#666666;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575DD;"># \u8FD4\u56DE\u6709\u5E8F\u96C6\u4E2D\u6307\u5B9A\u5206\u6570\u533A\u95F4\u5185\u7684\u6210\u5458\uFF0C\u5206\u6570\u4ECE\u4F4E\u5230\u9AD8\u6392\u5E8F</span></span>
<span class="line"><span style="color:#DBD7CAEE;">ZRANGEBYSCORE key min max </span><span style="color:#666666;">[</span><span style="color:#DBD7CAEE;">WITHSCORES</span><span style="color:#666666;">]</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">[</span><span style="color:#DBD7CAEE;">LIMIT offset count</span><span style="color:#666666;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575DD;"># \u8FD4\u56DE\u6709\u5E8F\u96C6\u4E2D\u6307\u5B9A\u5206\u6570\u533A\u95F4\u5185\u7684\u6210\u5458\uFF0C\u5206\u6570\u4ECE\u9AD8\u5230\u4F4E\u6392\u5E8F</span></span>
<span class="line"><span style="color:#DBD7CAEE;">ZREVRANGEBYSCORE key max min </span><span style="color:#666666;">[</span><span style="color:#DBD7CAEE;">WITHSCORES</span><span style="color:#666666;">]</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">[</span><span style="color:#DBD7CAEE;">LIMIT offset count</span><span style="color:#666666;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575DD;"># \u8FD4\u56DE\u6709\u5E8F\u96C6\u5408\u4E2D\u6307\u5B9A\u6210\u5458\u7684\u6392\u540D\uFF0C\u6709\u5E8F\u96C6\u6210\u5458\u6309\u5206\u6570\u503C\uFF08\u4ECE\u5C0F\u5230\u5927\uFF09\u6392\u5E8F</span></span>
<span class="line"><span style="color:#DBD7CAEE;">ZRANK key member</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575DD;"># \u8FD4\u56DE\u6709\u5E8F\u96C6\u5408\u4E2D\u6307\u5B9A\u6210\u5458\u7684\u6392\u540D\uFF0C\u6709\u5E8F\u96C6\u6210\u5458\u6309\u5206\u6570\u503C\uFF08\u4ECE\u5927\u5230\u5C0F\uFF09\u6392\u5E8F</span></span>
<span class="line"><span style="color:#DBD7CAEE;">ZREVRANK key member</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575DD;"># \u83B7\u53D6\u6709\u5E8F\u96C6\u5408\u7684\u6210\u5458\u6570</span></span>
<span class="line"><span style="color:#DBD7CAEE;">ZCARD key</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575DD;"># \u8FD4\u56DE\u6709\u5E8F\u96C6\u4E2D\uFF0C\u6210\u5458\u7684\u5206\u6570\u503C</span></span>
<span class="line"><span style="color:#DBD7CAEE;">ZSCORE key member</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575DD;"># \u8BA1\u7B97\u5728\u6709\u5E8F\u96C6\u5408\u4E2D\u6307\u5B9A\u533A\u95F4\u5206\u6570\u7684\u6210\u5458\u6570</span></span>
<span class="line"><span style="color:#DBD7CAEE;">ZCOUNT key min max</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><pre class="shiki vp-code-light"><code><span class="line"><span style="color:#A0ADA0;"># \u901A\u8FC7\u7D22\u5F15\u533A\u95F4\u8FD4\u56DE\u6709\u5E8F\u96C6\u5408\u6307\u5B9A\u533A\u95F4\u5185\u7684\u6210\u5458\uFF0C\u5206\u6570\u4ECE\u4F4E\u5230\u9AD8\u6392\u5E8F</span></span>
<span class="line"><span style="color:#393A34;">ZRANGE key start stop </span><span style="color:#999999;">[</span><span style="color:#393A34;">WITHSCORES</span><span style="color:#999999;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;"># \u901A\u8FC7\u7D22\u5F15\u533A\u95F4\u8FD4\u56DE\u6709\u5E8F\u96C6\u5408\u6307\u5B9A\u533A\u95F4\u5185\u7684\u6210\u5458\uFF0C\u5206\u6570\u4ECE\u9AD8\u5230\u4F4E\u6392\u5E8F</span></span>
<span class="line"><span style="color:#393A34;">ZREVRANGE key start stop </span><span style="color:#999999;">[</span><span style="color:#393A34;">WITHSCORES</span><span style="color:#999999;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;"># \u8FD4\u56DE\u6709\u5E8F\u96C6\u4E2D\u6307\u5B9A\u5206\u6570\u533A\u95F4\u5185\u7684\u6210\u5458\uFF0C\u5206\u6570\u4ECE\u4F4E\u5230\u9AD8\u6392\u5E8F</span></span>
<span class="line"><span style="color:#393A34;">ZRANGEBYSCORE key min max </span><span style="color:#999999;">[</span><span style="color:#393A34;">WITHSCORES</span><span style="color:#999999;">]</span><span style="color:#393A34;"> </span><span style="color:#999999;">[</span><span style="color:#393A34;">LIMIT offset count</span><span style="color:#999999;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;"># \u8FD4\u56DE\u6709\u5E8F\u96C6\u4E2D\u6307\u5B9A\u5206\u6570\u533A\u95F4\u5185\u7684\u6210\u5458\uFF0C\u5206\u6570\u4ECE\u9AD8\u5230\u4F4E\u6392\u5E8F</span></span>
<span class="line"><span style="color:#393A34;">ZREVRANGEBYSCORE key max min </span><span style="color:#999999;">[</span><span style="color:#393A34;">WITHSCORES</span><span style="color:#999999;">]</span><span style="color:#393A34;"> </span><span style="color:#999999;">[</span><span style="color:#393A34;">LIMIT offset count</span><span style="color:#999999;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;"># \u8FD4\u56DE\u6709\u5E8F\u96C6\u5408\u4E2D\u6307\u5B9A\u6210\u5458\u7684\u6392\u540D\uFF0C\u6709\u5E8F\u96C6\u6210\u5458\u6309\u5206\u6570\u503C\uFF08\u4ECE\u5C0F\u5230\u5927\uFF09\u6392\u5E8F</span></span>
<span class="line"><span style="color:#393A34;">ZRANK key member</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;"># \u8FD4\u56DE\u6709\u5E8F\u96C6\u5408\u4E2D\u6307\u5B9A\u6210\u5458\u7684\u6392\u540D\uFF0C\u6709\u5E8F\u96C6\u6210\u5458\u6309\u5206\u6570\u503C\uFF08\u4ECE\u5927\u5230\u5C0F\uFF09\u6392\u5E8F</span></span>
<span class="line"><span style="color:#393A34;">ZREVRANK key member</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;"># \u83B7\u53D6\u6709\u5E8F\u96C6\u5408\u7684\u6210\u5458\u6570</span></span>
<span class="line"><span style="color:#393A34;">ZCARD key</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;"># \u8FD4\u56DE\u6709\u5E8F\u96C6\u4E2D\uFF0C\u6210\u5458\u7684\u5206\u6570\u503C</span></span>
<span class="line"><span style="color:#393A34;">ZSCORE key member</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;"># \u8BA1\u7B97\u5728\u6709\u5E8F\u96C6\u5408\u4E2D\u6307\u5B9A\u533A\u95F4\u5206\u6570\u7684\u6210\u5458\u6570</span></span>
<span class="line"><span style="color:#393A34;">ZCOUNT key min max</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><h4 id="\u4FEE\u6539-2" tabindex="-1">\u4FEE\u6539 <a class="header-anchor" href="#\u4FEE\u6539-2" aria-hidden="true">#</a></h4><div class="language-Shell"><button title="Copy Code" class="copy"></button><span class="lang">Shell</span><pre class="shiki vp-code-dark"><code><span class="line"><span style="color:#758575DD;"># \u5411\u6709\u5E8F\u96C6\u5408\u6DFB\u52A0\u4E00\u4E2A\u6216\u591A\u4E2A\u6210\u5458\uFF0C\u6216\u8005\u66F4\u65B0\u5DF2\u5B58\u5728\u6210\u5458\u7684\u5206\u6570</span></span>
<span class="line"><span style="color:#DBD7CAEE;">ZADD key score member </span><span style="color:#666666;">[</span><span style="color:#DBD7CAEE;">score member ...</span><span style="color:#666666;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575DD;"># \u6709\u5E8F\u96C6\u5408\u4E2D\u5BF9\u6307\u5B9A\u6210\u5458\u7684\u5206\u6570\u52A0\u4E0A\u589E\u91CF increment</span></span>
<span class="line"><span style="color:#DBD7CAEE;">ZINCRBY key increment member</span></span>
<span class="line"></span></code></pre><pre class="shiki vp-code-light"><code><span class="line"><span style="color:#A0ADA0;"># \u5411\u6709\u5E8F\u96C6\u5408\u6DFB\u52A0\u4E00\u4E2A\u6216\u591A\u4E2A\u6210\u5458\uFF0C\u6216\u8005\u66F4\u65B0\u5DF2\u5B58\u5728\u6210\u5458\u7684\u5206\u6570</span></span>
<span class="line"><span style="color:#393A34;">ZADD key score member </span><span style="color:#999999;">[</span><span style="color:#393A34;">score member ...</span><span style="color:#999999;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;"># \u6709\u5E8F\u96C6\u5408\u4E2D\u5BF9\u6307\u5B9A\u6210\u5458\u7684\u5206\u6570\u52A0\u4E0A\u589E\u91CF increment</span></span>
<span class="line"><span style="color:#393A34;">ZINCRBY key increment member</span></span>
<span class="line"></span></code></pre></div><h4 id="\u5220\u9664-4" tabindex="-1">\u5220\u9664 <a class="header-anchor" href="#\u5220\u9664-4" aria-hidden="true">#</a></h4><div class="language-Shell"><button title="Copy Code" class="copy"></button><span class="lang">Shell</span><pre class="shiki vp-code-dark"><code><span class="line"><span style="color:#758575DD;"># \u79FB\u9664\u6709\u5E8F\u96C6\u5408\u4E2D\u7684\u4E00\u4E2A\u6216\u591A\u4E2A\u6210\u5458</span></span>
<span class="line"><span style="color:#DBD7CAEE;">ZREM key member </span><span style="color:#666666;">[</span><span style="color:#DBD7CAEE;">member ...</span><span style="color:#666666;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575DD;"># \u79FB\u9664\u6709\u5E8F\u96C6\u5408\u4E2D\u7ED9\u5B9A\u7684\u6392\u540D\u533A\u95F4\u7684\u6240\u6709\u6210\u5458</span></span>
<span class="line"><span style="color:#DBD7CAEE;">ZREMRANGEBYRANK key start stop</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575DD;"># \u79FB\u9664\u6709\u5E8F\u96C6\u5408\u4E2D\u7ED9\u5B9A\u7684\u5206\u6570\u533A\u95F4\u7684\u6240\u6709\u6210\u5458</span></span>
<span class="line"><span style="color:#DBD7CAEE;">ZREMRANGEBYSCORE key min max</span></span>
<span class="line"></span></code></pre><pre class="shiki vp-code-light"><code><span class="line"><span style="color:#A0ADA0;"># \u79FB\u9664\u6709\u5E8F\u96C6\u5408\u4E2D\u7684\u4E00\u4E2A\u6216\u591A\u4E2A\u6210\u5458</span></span>
<span class="line"><span style="color:#393A34;">ZREM key member </span><span style="color:#999999;">[</span><span style="color:#393A34;">member ...</span><span style="color:#999999;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;"># \u79FB\u9664\u6709\u5E8F\u96C6\u5408\u4E2D\u7ED9\u5B9A\u7684\u6392\u540D\u533A\u95F4\u7684\u6240\u6709\u6210\u5458</span></span>
<span class="line"><span style="color:#393A34;">ZREMRANGEBYRANK key start stop</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;"># \u79FB\u9664\u6709\u5E8F\u96C6\u5408\u4E2D\u7ED9\u5B9A\u7684\u5206\u6570\u533A\u95F4\u7684\u6240\u6709\u6210\u5458</span></span>
<span class="line"><span style="color:#393A34;">ZREMRANGEBYSCORE key min max</span></span>
<span class="line"></span></code></pre></div><p>\u6709\u5E8F\u96C6\u5408\u95F4\u805A\u5408\u8FD0\u7B97</p><div class="language-Shell"><button title="Copy Code" class="copy"></button><span class="lang">Shell</span><pre class="shiki vp-code-dark"><code><span class="line"><span style="color:#758575DD;"># \u8BA1\u7B97\u7ED9\u5B9A\u7684\u4E00\u4E2A\u6216\u591A\u4E2A\u6709\u5E8F\u96C6\u7684\u4EA4\u96C6\u5E76\u5C06\u7ED3\u679C\u96C6\u5B58\u50A8\u5728\u65B0\u7684\u6709\u5E8F\u96C6\u5408 destination \u4E2D</span></span>
<span class="line"><span style="color:#DBD7CAEE;">ZINTERSTORE destination numkeys key </span><span style="color:#666666;">[</span><span style="color:#DBD7CAEE;">key ...</span><span style="color:#666666;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575DD;"># \u8BA1\u7B97\u7ED9\u5B9A\u7684\u4E00\u4E2A\u6216\u591A\u4E2A\u6709\u5E8F\u96C6\u7684\u5E76\u96C6\uFF0C\u5E76\u5B58\u50A8\u5728\u65B0\u7684 key \u4E2D</span></span>
<span class="line"><span style="color:#DBD7CAEE;">ZUNIONSTORE destination numkeys key </span><span style="color:#666666;">[</span><span style="color:#DBD7CAEE;">key ...</span><span style="color:#666666;">]</span></span>
<span class="line"></span></code></pre><pre class="shiki vp-code-light"><code><span class="line"><span style="color:#A0ADA0;"># \u8BA1\u7B97\u7ED9\u5B9A\u7684\u4E00\u4E2A\u6216\u591A\u4E2A\u6709\u5E8F\u96C6\u7684\u4EA4\u96C6\u5E76\u5C06\u7ED3\u679C\u96C6\u5B58\u50A8\u5728\u65B0\u7684\u6709\u5E8F\u96C6\u5408 destination \u4E2D</span></span>
<span class="line"><span style="color:#393A34;">ZINTERSTORE destination numkeys key </span><span style="color:#999999;">[</span><span style="color:#393A34;">key ...</span><span style="color:#999999;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;"># \u8BA1\u7B97\u7ED9\u5B9A\u7684\u4E00\u4E2A\u6216\u591A\u4E2A\u6709\u5E8F\u96C6\u7684\u5E76\u96C6\uFF0C\u5E76\u5B58\u50A8\u5728\u65B0\u7684 key \u4E2D</span></span>
<span class="line"><span style="color:#393A34;">ZUNIONSTORE destination numkeys key </span><span style="color:#999999;">[</span><span style="color:#393A34;">key ...</span><span style="color:#999999;">]</span></span>
<span class="line"></span></code></pre></div><h2 id="\u901A\u7528\u547D\u4EE4" tabindex="-1">\u901A\u7528\u547D\u4EE4 <a class="header-anchor" href="#\u901A\u7528\u547D\u4EE4" aria-hidden="true">#</a></h2><div class="language-Shell"><button title="Copy Code" class="copy"></button><span class="lang">Shell</span><pre class="shiki vp-code-dark"><code><span class="line"><span style="color:#758575DD;"># \u8FD4\u56DE\u6240\u6709 key</span></span>
<span class="line"><span style="color:#DBD7CAEE;">KEYS </span><span style="color:#CB7676;">*</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575DD;"># \u8FD4\u56DE\u6240\u6709\u4EE5 my \u5F00\u5934\u7684 key</span></span>
<span class="line"><span style="color:#DBD7CAEE;">KEYS my</span><span style="color:#CB7676;">*</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575DD;"># \u83B7\u53D6 key \u7684\u7C7B\u578B</span></span>
<span class="line"><span style="color:#DBD7CAEE;">TYPE key</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575DD;"># \u67E5\u8BE2\u67D0\u4E2A key \u662F\u5426\u5B58\u5728</span></span>
<span class="line"><span style="color:#DBD7CAEE;">EXISTS key </span><span style="color:#666666;">[</span><span style="color:#DBD7CAEE;">key ...</span><span style="color:#666666;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575DD;"># \u5C06 key \u6539\u540D\u4E3A newkey</span></span>
<span class="line"><span style="color:#DBD7CAEE;">RENAME key newkey</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575DD;"># \u5220\u9664\u6307\u5B9A key</span></span>
<span class="line"><span style="color:#DBD7CAEE;">DEL key </span><span style="color:#666666;">[</span><span style="color:#DBD7CAEE;">key ...</span><span style="color:#666666;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575DD;"># \u4ECE\u5F53\u524D\u6570\u636E\u5E93\u4E2D\u968F\u673A\u8FD4\u56DE(\u4E0D\u5220\u9664)\u4E00\u4E2A key</span></span>
<span class="line"><span style="color:#DBD7CAEE;">RANDOMKEY</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575DD;"># \u5BF9 key \u8FDB\u884C\u91CD\u547D\u540D</span></span>
<span class="line"><span style="color:#DBD7CAEE;">RENAME key newkey</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575DD;"># \u6E05\u7A7A\u5F53\u524D\u6570\u636E\u5E93\u6240\u6709\u5185\u5BB9</span></span>
<span class="line"><span style="color:#DBD7CAEE;">FLUSHDB</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575DD;"># \u6E05\u7A7A\u6240\u6709\u6570\u636E\u5E93\u5185\u5BB9</span></span>
<span class="line"><span style="color:#DBD7CAEE;">FLUSHALL</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575DD;"># \u5C06\u5F53\u524D\u6570\u636E\u5E93\u7684 key \u79FB\u52A8\u5230\u7ED9\u5B9A\u7684\u6570\u636E\u5E93 db \u5F53\u4E2D</span></span>
<span class="line"><span style="color:#DBD7CAEE;">MOVE key db</span></span>
<span class="line"></span></code></pre><pre class="shiki vp-code-light"><code><span class="line"><span style="color:#A0ADA0;"># \u8FD4\u56DE\u6240\u6709 key</span></span>
<span class="line"><span style="color:#393A34;">KEYS </span><span style="color:#AB5959;">*</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;"># \u8FD4\u56DE\u6240\u6709\u4EE5 my \u5F00\u5934\u7684 key</span></span>
<span class="line"><span style="color:#393A34;">KEYS my</span><span style="color:#AB5959;">*</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;"># \u83B7\u53D6 key \u7684\u7C7B\u578B</span></span>
<span class="line"><span style="color:#393A34;">TYPE key</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;"># \u67E5\u8BE2\u67D0\u4E2A key \u662F\u5426\u5B58\u5728</span></span>
<span class="line"><span style="color:#393A34;">EXISTS key </span><span style="color:#999999;">[</span><span style="color:#393A34;">key ...</span><span style="color:#999999;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;"># \u5C06 key \u6539\u540D\u4E3A newkey</span></span>
<span class="line"><span style="color:#393A34;">RENAME key newkey</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;"># \u5220\u9664\u6307\u5B9A key</span></span>
<span class="line"><span style="color:#393A34;">DEL key </span><span style="color:#999999;">[</span><span style="color:#393A34;">key ...</span><span style="color:#999999;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;"># \u4ECE\u5F53\u524D\u6570\u636E\u5E93\u4E2D\u968F\u673A\u8FD4\u56DE(\u4E0D\u5220\u9664)\u4E00\u4E2A key</span></span>
<span class="line"><span style="color:#393A34;">RANDOMKEY</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;"># \u5BF9 key \u8FDB\u884C\u91CD\u547D\u540D</span></span>
<span class="line"><span style="color:#393A34;">RENAME key newkey</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;"># \u6E05\u7A7A\u5F53\u524D\u6570\u636E\u5E93\u6240\u6709\u5185\u5BB9</span></span>
<span class="line"><span style="color:#393A34;">FLUSHDB</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;"># \u6E05\u7A7A\u6240\u6709\u6570\u636E\u5E93\u5185\u5BB9</span></span>
<span class="line"><span style="color:#393A34;">FLUSHALL</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;"># \u5C06\u5F53\u524D\u6570\u636E\u5E93\u7684 key \u79FB\u52A8\u5230\u7ED9\u5B9A\u7684\u6570\u636E\u5E93 db \u5F53\u4E2D</span></span>
<span class="line"><span style="color:#393A34;">MOVE key db</span></span>
<span class="line"></span></code></pre></div>`,93),r=[i];function y(A,D,d,E,k,h){return a(),n("div",null,r)}const S=s(t,[["render",y]]);export{C as __pageData,S as default};
