import{_ as s,c as e,o as a,a as n}from"./app.2a51697e.js";const g=JSON.parse('{"title":"Redis \u5B89\u88C5","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u5173\u4E8E Redis \u7684\u7248\u672C","slug":"\u5173\u4E8E-redis-\u7684\u7248\u672C","link":"#\u5173\u4E8E-redis-\u7684\u7248\u672C","children":[]},{"level":2,"title":"\u83B7\u53D6 Redis \u7684\u65B9\u5F0F","slug":"\u83B7\u53D6-redis-\u7684\u65B9\u5F0F","link":"#\u83B7\u53D6-redis-\u7684\u65B9\u5F0F","children":[]},{"level":2,"title":"\u5728 macOS \u4E2D\u5B89\u88C5 Redis","slug":"\u5728-macos-\u4E2D\u5B89\u88C5-redis","link":"#\u5728-macos-\u4E2D\u5B89\u88C5-redis","children":[]},{"level":2,"title":"\u5728 Windows \u4E2D\u5B89\u88C5 Redis","slug":"\u5728-windows-\u4E2D\u5B89\u88C5-redis","link":"#\u5728-windows-\u4E2D\u5B89\u88C5-redis","children":[]},{"level":2,"title":"\u5728 Linux \u4E2D\u5B89\u88C5 Redis","slug":"\u5728-linux-\u4E2D\u5B89\u88C5-redis","link":"#\u5728-linux-\u4E2D\u5B89\u88C5-redis","children":[]},{"level":2,"title":"\u8FD0\u884C Redis","slug":"\u8FD0\u884C-redis","link":"#\u8FD0\u884C-redis","children":[]},{"level":2,"title":"\u505C\u6B62 Redis","slug":"\u505C\u6B62-redis","link":"#\u505C\u6B62-redis","children":[]},{"level":2,"title":"\u8FDE\u63A5 Redis","slug":"\u8FDE\u63A5-redis","link":"#\u8FDE\u63A5-redis","children":[]}],"relativePath":"FullStack/Redis/SetUp.md"}'),l={name:"FullStack/Redis/SetUp.md"},p=n(`<h1 id="redis-\u5B89\u88C5" tabindex="-1">Redis \u5B89\u88C5 <a class="header-anchor" href="#redis-\u5B89\u88C5" aria-hidden="true">#</a></h1><h2 id="\u5173\u4E8E-redis-\u7684\u7248\u672C" tabindex="-1">\u5173\u4E8E Redis \u7684\u7248\u672C <a class="header-anchor" href="#\u5173\u4E8E-redis-\u7684\u7248\u672C" aria-hidden="true">#</a></h2><p>Redis \u501F\u9274\u4E86 Linux \u64CD\u4F5C\u7CFB\u7EDF\u5BF9\u4E8E\u7248\u672C\u53F7\u7684\u547D\u540D\u89C4\u5219\uFF1A</p><ul><li>\u7248\u672C\u53F7\u7B2C\u4E8C\u4F4D\u5982\u679C\u662F\u5947\u6570\uFF0C\u5219\u4E3A\u975E\u7A33\u5B9A\u7248\u672C\uFF08\u4F8B\u59822.7\u30012.9\u30013.1\uFF09</li><li>\u5982\u679C\u662F\u5076\u6570\uFF0C\u5219\u4E3A\u7A33\u5B9A\u7248\u672C\uFF08\u4F8B\u59822.6\u30012.8\u30013.0\u30013.2\uFF09</li></ul><p>\u5F53\u524D\u5947\u6570\u7248\u672C\u5C31\u662F\u4E0B\u4E00\u4E2A\u7A33\u5B9A\u7248\u672C\u7684\u5F00\u53D1\u7248\u672C\uFF0C\u4F8B\u5982 2.9 \u7248\u672C\u662F 3.0 \u7248\u672C\u7684\u5F00\u53D1\u7248\u672C\u3002\u6240\u4EE5\u6211\u4EEC\u5728\u751F\u4EA7\u73AF\u5883\u901A\u5E38\u9009\u53D6\u5076\u6570\u7248\u672C\u7684Redis\uFF0C\u5982\u679C\u5BF9\u4E8E\u67D0\u4E9B\u65B0\u7684\u7279\u6027\u60F3\u63D0\u524D\u4E86\u89E3\u548C\u4F7F\u7528\uFF0C\u53EF\u4EE5\u9009\u62E9\u6700\u65B0\u7684\u5947\u6570\u7248\u672C\u3002</p><h2 id="\u83B7\u53D6-redis-\u7684\u65B9\u5F0F" tabindex="-1">\u83B7\u53D6 Redis \u7684\u65B9\u5F0F <a class="header-anchor" href="#\u83B7\u53D6-redis-\u7684\u65B9\u5F0F" aria-hidden="true">#</a></h2><p>\u83B7\u53D6 Redis \u7684\u65B9\u5F0F\u6709\u5F88\u591A\u79CD\uFF1A</p><ul><li>\u5B89\u88C5\u5230\u81EA\u5DF1\u7535\u8111\u4E0A</li><li>\u5B89\u88C5\u5230\u865A\u62DF\u673A\u4E0A</li><li>\u5B89\u88C5\u5230\u8FDC\u7A0B\u670D\u52A1\u5668\u4E0A</li><li>\u53EF\u4EE5\u4ECE Docker Hub \u83B7\u53D6 Redis \u7684 Docker \u955C\u50CF</li><li>...</li></ul><h2 id="\u5728-macos-\u4E2D\u5B89\u88C5-redis" tabindex="-1">\u5728 macOS \u4E2D\u5B89\u88C5 Redis <a class="header-anchor" href="#\u5728-macos-\u4E2D\u5B89\u88C5-redis" aria-hidden="true">#</a></h2><p>\u5728 macOS \u4E2D\u6709\u4E24\u79CD\u65B9\u5F0F\uFF1A</p><ul><li>\u65B9\u5F0F\u4E00\uFF1A\u7F16\u8BD1\u5B89\u88C5</li><li>\u65B9\u5F0F\u4E8C\uFF08\u63A8\u8350\uFF09\uFF1A\u4F7F\u7528 Homebrew \u5B89\u88C5</li></ul><p>macOS \u7CFB\u7EDF\u4E0B\u7684\u8F6F\u4EF6\u5305\u7BA1\u7406\u5DE5\u5177 Homebrew \u63D0\u4F9B\u4E86\u8F83\u65B0\u7248\u672C\u7684 Redis \u5305\uFF0C\u6240\u4EE5\u6211\u4EEC\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528\u5B83\u4EEC\u6765\u5B89\u88C5 Redis\uFF0C\u7701\u53BB\u4E86\u5728 Linux \u4E0A\u9700\u8981\u624B\u52A8\u7F16\u8BD1\u7684\u9EBB\u70E6\u3002</p><p>1\u3001\u5B89\u88C5 Homebrew</p><div class="language-Shell"><button title="Copy Code" class="copy"></button><span class="lang">Shell</span><pre class="shiki vp-code-dark"><code><span class="line"><span style="color:#DBD7CAEE;">/bin/bash -c </span><span style="color:#C98A7DAA;">&quot;$(</span><span style="color:#C98A7D;">curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh</span><span style="color:#C98A7DAA;">)&quot;</span></span>
<span class="line"></span></code></pre><pre class="shiki vp-code-light"><code><span class="line"><span style="color:#393A34;">/bin/bash -c </span><span style="color:#B56959AA;">&quot;$(</span><span style="color:#B56959;">curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh</span><span style="color:#B56959AA;">)&quot;</span></span>
<span class="line"></span></code></pre></div><p>2\u3001\u901A\u8FC7 Homebrew \u5B89\u88C5 Redis</p><div class="language-Shell"><button title="Copy Code" class="copy"></button><span class="lang">Shell</span><pre class="shiki vp-code-dark"><code><span class="line"><span style="color:#DBD7CAEE;">brew install redis</span></span>
<span class="line"></span></code></pre><pre class="shiki vp-code-light"><code><span class="line"><span style="color:#393A34;">brew install redis</span></span>
<span class="line"></span></code></pre></div><h2 id="\u5728-windows-\u4E2D\u5B89\u88C5-redis" tabindex="-1">\u5728 Windows \u4E2D\u5B89\u88C5 Redis <a class="header-anchor" href="#\u5728-windows-\u4E2D\u5B89\u88C5-redis" aria-hidden="true">#</a></h2><p>Redis \u5B98\u65B9\u4E0D\u652F\u6301 Windows\u30022011 \u5E74\u5FAE\u8F6F\u5411 Redis \u63D0\u4EA4\u4E86\u4E00\u4E2A\u8865\u4E01\uFF0C\u4EE5\u4F7F Redis \u53EF\u4EE5\u5728 Windows \u4E0B\u7F16\u8BD1\u8FD0\u884C\u3002\u4F46\u88AB\u4F5C\u8005\u62D2\u7EDD\u4E86\uFF0C\u539F\u56E0\u662F\u5728\u670D\u52A1\u5668\u9886\u57DF\u4E0A Linux \u5DF2\u7ECF\u5F97\u5230\u4E86\u5E7F\u6CDB\u7684\u4F7F\u7528\uFF0C\u8BA9 Redis \u80FD\u5728 Windows \u4E0B\u8FD0\u884C\u76F8\u6BD4\u800C\u8A00\u663E\u5F97\u4E0D\u90A3\u4E48\u91CD\u8981\u3002\u5E76\u4E14 Redis \u4F7F\u7528\u4E86\u5982\u5199\u65F6\u590D\u5236\u7B49\u5F88\u591A\u64CD\u4F5C\u7CFB\u7EDF\u76F8\u5173\u7684\u7279\u6027\uFF0C\u517C\u5BB9 Windows \u4F1A\u8017\u8D39\u5929\u5927\u7684\u7CBE\u529B\u800C\u5F71\u54CD Redis \u7684\u5F00\u53D1\u3002</p><p>\u5C3D\u7BA1\u5982\u6B64\u5FAE\u8F6F\u8FD8\u662F\u53D1\u5E03\u4E86\u4E00\u4E2A\u53EF\u4EE5\u5728 Windows \u4E0B\u7684 Redis \u7248\u672C\uFF0C\u4F46\u662F\u8FD9\u4E2A\u9879\u76EE\u5DF2\u7ECF\u4E0D\u518D\u7EF4\u62A4\u3002</p><p>\u5982\u679C\u4F60\u5B9E\u5728\u60F3\u8981\u5728 Windows \u4E0A\u5B66\u4E60\u4F7F\u7528 Redis \u7684\u8BDD\u53EF\u4EE5\u5C1D\u8BD5\u4E00\u4E0B Memurai\uFF0C\u5B83\u662F\u4E00\u4E2A Redis for Windows \u7684\u66FF\u4EE3\u54C1\uFF0C\u5B83\u7684\u6838\u5FC3\u57FA\u4E8E Redis \u6E90\u4EE3\u7801\u5E76\u4E14\u5B8C\u5168\u517C\u5BB9 Redis\uFF0C\u4F46\u662F\u8BE5\u9879\u76EE\u5E76\u672A\u5F97\u5230\u5FAE\u8F6F\u5B98\u65B9\u7684\u8BA4\u53EF\uFF0C\u6709\u5174\u8DA3\u7684\u8BDD\u53EF\u4EE5\u5C1D\u8BD5\u4E00\u4E0B\u3002</p><h2 id="\u5728-linux-\u4E2D\u5B89\u88C5-redis" tabindex="-1">\u5728 Linux \u4E2D\u5B89\u88C5 Redis <a class="header-anchor" href="#\u5728-linux-\u4E2D\u5B89\u88C5-redis" aria-hidden="true">#</a></h2><div class="language-Shell"><button title="Copy Code" class="copy"></button><span class="lang">Shell</span><pre class="shiki vp-code-dark"><code><span class="line"><span style="color:#758575DD;"># \u4E0B\u8F7D Redis \u6E90\u7801</span></span>
<span class="line"><span style="color:#DBD7CAEE;">wget https://download.redis.io/releases/redis-6.0.9.tar.gz</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575DD;"># \u89E3\u538B Redis \u538B\u7F29\u5305</span></span>
<span class="line"><span style="color:#DBD7CAEE;">tar xzf redis-6.0.9.tar.gz</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575DD;"># \u8FDB\u5165 Redis \u6E90\u7801\u76EE\u5F55</span></span>
<span class="line"><span style="color:#B8A965;">cd</span><span style="color:#DBD7CAEE;"> redis-6.0.9</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575DD;"># \u7F16\u8BD1\u5B89\u88C5</span></span>
<span class="line"><span style="color:#DBD7CAEE;">make</span></span>
<span class="line"></span></code></pre><pre class="shiki vp-code-light"><code><span class="line"><span style="color:#A0ADA0;"># \u4E0B\u8F7D Redis \u6E90\u7801</span></span>
<span class="line"><span style="color:#393A34;">wget https://download.redis.io/releases/redis-6.0.9.tar.gz</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;"># \u89E3\u538B Redis \u538B\u7F29\u5305</span></span>
<span class="line"><span style="color:#393A34;">tar xzf redis-6.0.9.tar.gz</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;"># \u8FDB\u5165 Redis \u6E90\u7801\u76EE\u5F55</span></span>
<span class="line"><span style="color:#998418;">cd</span><span style="color:#393A34;"> redis-6.0.9</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;"># \u7F16\u8BD1\u5B89\u88C5</span></span>
<span class="line"><span style="color:#393A34;">make</span></span>
<span class="line"></span></code></pre></div><p>\u73B0\u5728\u5DF2\u7F16\u8BD1\u7684\u4E8C\u8FDB\u5236\u6587\u4EF6\u4F4D\u4E8E src \u76EE\u5F55\u4E2D\u3002\u4F7F\u7528\u4EE5\u4E0B\u547D\u4EE4\u8FD0\u884C Redis\uFF1A</p><div class="language-Shell"><button title="Copy Code" class="copy"></button><span class="lang">Shell</span><pre class="shiki vp-code-dark"><code><span class="line"><span style="color:#DBD7CAEE;">$ ./src/redis-server</span></span>
<span class="line"></span></code></pre><pre class="shiki vp-code-light"><code><span class="line"><span style="color:#393A34;">$ ./src/redis-server</span></span>
<span class="line"></span></code></pre></div><p>\u8981\u5C06 Redis \u4E8C\u8FDB\u5236\u6587\u4EF6\u5B89\u88C5\u5230 /usr/local/bin \u4E2D\uFF0C\u53EA\u9700\u4F7F\u7528\uFF1A</p><div class="language-Shell"><button title="Copy Code" class="copy"></button><span class="lang">Shell</span><pre class="shiki vp-code-dark"><code><span class="line"><span style="color:#DBD7CAEE;">make install</span></span>
<span class="line"></span></code></pre><pre class="shiki vp-code-light"><code><span class="line"><span style="color:#393A34;">make install</span></span>
<span class="line"></span></code></pre></div><h2 id="\u8FD0\u884C-redis" tabindex="-1">\u8FD0\u884C Redis <a class="header-anchor" href="#\u8FD0\u884C-redis" aria-hidden="true">#</a></h2><p>\u7F16\u8BD1\u540E\u5728 Redis \u6E90\u4EE3\u7801\u76EE\u5F55\u7684 src \u6587\u4EF6\u5939\u4E2D\u4F1A\u6709\u4EE5\u4E0B\u51E0\u4E2A\u53EF\u6267\u884C\u6587\u4EF6\uFF1A</p><table><thead><tr><th>\u53EF\u6267\u884C\u6587\u4EF6</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>redis-server</td><td>Redis \u670D\u52A1\u5668</td></tr><tr><td>redis-cli</td><td>Redis \u547D\u4EE4\u884C\u5BA2\u6237\u7AEF</td></tr><tr><td>redis-benchmark</td><td>Redis \u6027\u80FD\u6D4B\u8BD5\u5DE5\u5177</td></tr><tr><td>redis-check-aof</td><td>AOF \u6587\u4EF6\u4FEE\u590D\u5DE5\u5177</td></tr><tr><td>redis-check-dump</td><td>RDB \u6587\u4EF6\u68C0\u67E5\u5DE5\u5177</td></tr><tr><td>redis-sentinel</td><td>\u54E8\u5175\u6A21\u5F0F\u5DE5\u5177</td></tr></tbody></table><blockquote><p>\u6CE8\u610F\uFF1A\u901A\u8FC7\u7F16\u8BD1\u6E90\u7801\u5B89\u88C5\u7684\u8BDD\uFF0C\u4E5F\u4F1A\u4EA7\u751F\u4E00\u4E2A redis.conf \u7684\u914D\u7F6E\u6587\u4EF6\u3002</p></blockquote><p>\u6211\u4EEC\u6700\u5E38\u7528\u662F redis-server \u548C redis-cli\u3002</p><p>\u6700\u7B80\u5355\u7684\uFF0C\u76F4\u63A5\u8FD0\u884C redis-server \u5373\u53EF\u542F\u52A8 Redis\uFF1A</p><div class="language-Shell"><button title="Copy Code" class="copy"></button><span class="lang">Shell</span><pre class="shiki vp-code-dark"><code><span class="line"><span style="color:#DBD7CAEE;">redis-server</span></span>
<span class="line"></span></code></pre><pre class="shiki vp-code-light"><code><span class="line"><span style="color:#393A34;">redis-server</span></span>
<span class="line"></span></code></pre></div><p>Redis \u9ED8\u8BA4\u4F7F\u7528 6379 \u7AEF\u53E3\uFF0C\u6211\u4EEC\u4E5F\u53EF\u4EE5\u901A\u8FC7 --port \u53C2\u6570\u6307\u5B9A\u542F\u52A8\u7AEF\u53E3\uFF1A</p><div class="language-Shell"><button title="Copy Code" class="copy"></button><span class="lang">Shell</span><pre class="shiki vp-code-dark"><code><span class="line"><span style="color:#DBD7CAEE;">redis-server --port 1234</span></span>
<span class="line"></span></code></pre><pre class="shiki vp-code-light"><code><span class="line"><span style="color:#393A34;">redis-server --port 1234</span></span>
<span class="line"></span></code></pre></div><p>\u5982\u679C\u9700\u8981\u5728\u540E\u7AEF\u8FD0\u884C Redis\uFF1A</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki vp-code-dark"><code><span class="line"><span style="color:#dbd7caee;">redis-server --daemonize yes</span></span>
<span class="line"><span style="color:#dbd7caee;"></span></span></code></pre><pre class="shiki vp-code-light"><code><span class="line"><span style="color:#393a34;">redis-server --daemonize yes</span></span>
<span class="line"><span style="color:#393a34;"></span></span></code></pre></div><p>\u67E5\u770B Redis \u8FD0\u884C\u72B6\u6001\uFF1A</p><div class="language-Shell"><button title="Copy Code" class="copy"></button><span class="lang">Shell</span><pre class="shiki vp-code-dark"><code><span class="line"><span style="color:#758575DD;"># \u67E5\u770B Redis \u540E\u7AEF\u8FD0\u884C\u8FDB\u7A0B</span></span>
<span class="line"><span style="color:#DBD7CAEE;">ps -ef </span><span style="color:#CB7676;">|</span><span style="color:#DBD7CAEE;"> grep -i redis</span></span>
<span class="line"></span></code></pre><pre class="shiki vp-code-light"><code><span class="line"><span style="color:#A0ADA0;"># \u67E5\u770B Redis \u540E\u7AEF\u8FD0\u884C\u8FDB\u7A0B</span></span>
<span class="line"><span style="color:#393A34;">ps -ef </span><span style="color:#AB5959;">|</span><span style="color:#393A34;"> grep -i redis</span></span>
<span class="line"></span></code></pre></div><h2 id="\u505C\u6B62-redis" tabindex="-1">\u505C\u6B62 Redis <a class="header-anchor" href="#\u505C\u6B62-redis" aria-hidden="true">#</a></h2><p>\u8003\u8651\u5230 Redis \u6709\u53EF\u80FD\u6B63\u5728\u5C06\u5185\u5B58\u4E2D\u7684\u6570\u636E\u540C\u6B65\u5230\u786C\u76D8\u4E2D\uFF0C\u5F3A\u884C\u7EC8\u6B62 Redis \u8FDB\u7A0B\u53EF\u80FD\u4F1A\u5BFC\u81F4\u6570\u636E\u4E22\u5931\u3002 \u6240\u6709\u6B63\u786E\u505C\u6B62 Redis \u7684\u65B9\u5F0F\u5E94\u8BE5\u662F\u5411 Redis \u53D1\u9001 SHUTDOWN \u547D\u4EE4\uFF1A</p><div class="language-Shell"><button title="Copy Code" class="copy"></button><span class="lang">Shell</span><pre class="shiki vp-code-dark"><code><span class="line"><span style="color:#DBD7CAEE;">redis-cli shutdown</span></span>
<span class="line"></span></code></pre><pre class="shiki vp-code-light"><code><span class="line"><span style="color:#393A34;">redis-cli shutdown</span></span>
<span class="line"></span></code></pre></div><p>\u5F53 Redis \u624B\u52A8 Shutdown \u547D\u4EE4\u540E\uFF0C\u4F1A\u5148\u65AD\u5F00\u6240\u6709\u5BA2\u6237\u7AEF\u8FDE\u63A5\uFF0C\u7136\u540E\u6839\u636E\u914D\u7F6E\u6267\u884C\u6301\u4E45\u5316\uFF0C\u6700\u540E\u5B8C\u6210\u9000\u51FA\u3002</p><p>Redis \u53EF\u4EE5\u59A5\u5584\u5904\u7406 SIGTERM \u4FE1\u53F7\uFF0C\u6240\u6709\u4F7F\u7528 kill Redis \u8FDB\u7A0B\u7684 PID \u4E5F\u53EF\u4EE5\u6B63\u5E38\u7ED3\u675F Redis\uFF0C\u6548\u679C\u4E0E\u53D1\u9001 SHUTDOWN \u547D\u4EE4\u4E00\u6837\u3002</p><div class="language-Shell"><button title="Copy Code" class="copy"></button><span class="lang">Shell</span><pre class="shiki vp-code-dark"><code><span class="line"><span style="color:#758575DD;"># \u901A\u8FC7\u8FDB\u7A0B\u53F7\u505C\u6B62 Redis</span></span>
<span class="line"><span style="color:#B8A965;">kill</span><span style="color:#DBD7CAEE;"> -9 4684</span></span>
<span class="line"></span></code></pre><pre class="shiki vp-code-light"><code><span class="line"><span style="color:#A0ADA0;"># \u901A\u8FC7\u8FDB\u7A0B\u53F7\u505C\u6B62 Redis</span></span>
<span class="line"><span style="color:#998418;">kill</span><span style="color:#393A34;"> -9 4684</span></span>
<span class="line"></span></code></pre></div><h2 id="\u8FDE\u63A5-redis" tabindex="-1">\u8FDE\u63A5 Redis <a class="header-anchor" href="#\u8FDE\u63A5-redis" aria-hidden="true">#</a></h2><p>redis-cli \u662F Redis \u81EA\u5E26\u7684\u57FA\u4E8E\u547D\u4EE4\u884C\u7684 Redis \u5BA2\u6237\u7AEF\uFF0C\u4E5F\u662F\u6211\u4EEC\u5B66\u4E60\u548C\u6D4B\u8BD5 Redis \u7684\u91CD\u8981\u5DE5\u5177\u3002</p><p>\u8FD0\u884C redis-cli \u5373\u53EF\u8FDE\u63A5\u6570\u636E\u5E93\uFF1A</p><div class="language-Shell"><button title="Copy Code" class="copy"></button><span class="lang">Shell</span><pre class="shiki vp-code-dark"><code><span class="line"><span style="color:#DBD7CAEE;">redis-cli</span></span>
<span class="line"></span></code></pre><pre class="shiki vp-code-light"><code><span class="line"><span style="color:#393A34;">redis-cli</span></span>
<span class="line"></span></code></pre></div><p>\u4E5F\u53EF\u4EE5\u6307\u5B9A\u670D\u52A1\u5668\u5730\u5740\u548C\u7AEF\u53E3\u8FDE\u63A5\uFF1A</p><div class="language-Shell"><button title="Copy Code" class="copy"></button><span class="lang">Shell</span><pre class="shiki vp-code-dark"><code><span class="line"><span style="color:#DBD7CAEE;">redis-cli -h 127.0.0.1 -p 1234</span></span>
<span class="line"></span></code></pre><pre class="shiki vp-code-light"><code><span class="line"><span style="color:#393A34;">redis-cli -h 127.0.0.1 -p 1234</span></span>
<span class="line"></span></code></pre></div><p>\u4E0D\u51FA\u5DEE\u9519\u7684\u8BDD\uFF0C\u6B64\u65F6\u5DF2\u7ECF\u8FDE\u63A5\u4E0A Redis \u6570\u636E\u5E93\uFF0C\u6211\u4EEC\u901A\u8FC7 Redis \u63D0\u4F9B\u7684 PING \u547D\u4EE4\u6765\u6D4B\u8BD5\u4E0E Redis \u662F\u5426\u8FDE\u63A5\u6B63\u5E38\uFF1A</p><div class="language-Shell"><button title="Copy Code" class="copy"></button><span class="lang">Shell</span><pre class="shiki vp-code-dark"><code><span class="line"><span style="color:#DBD7CAEE;">127.0.0.1:</span><span style="color:#CB7676;">6379&gt;</span><span style="color:#DBD7CAEE;"> PING</span></span>
<span class="line"><span style="color:#DBD7CAEE;">PONG</span></span>
<span class="line"><span style="color:#DBD7CAEE;">127.0.0.1:</span><span style="color:#CB7676;">6379&gt;</span></span>
<span class="line"></span></code></pre><pre class="shiki vp-code-light"><code><span class="line"><span style="color:#393A34;">127.0.0.1:</span><span style="color:#AB5959;">6379&gt;</span><span style="color:#393A34;"> PING</span></span>
<span class="line"><span style="color:#393A34;">PONG</span></span>
<span class="line"><span style="color:#393A34;">127.0.0.1:</span><span style="color:#AB5959;">6379&gt;</span></span>
<span class="line"></span></code></pre></div><p>Redis \u8FD4\u56DE PONG\uFF0C\u8BC1\u660E\u8FDE\u63A5\u6B63\u5E38\u3002</p><p>\u5982\u679C\u60F3\u8981\u65AD\u5F00\u8FDE\u63A5\uFF1A</p><ul><li>\u547D\u4EE4\uFF1Aquit</li><li>\u5FEB\u6377\u952E\uFF1ACtrl + C</li></ul>`,56),i=[p];function c(d,o,r,t,h,y){return a(),e("div",null,i)}const A=s(l,[["render",c]]);export{g as __pageData,A as default};
