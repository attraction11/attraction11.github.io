import{_ as s,c as n,o as a,a as e}from"./app.b5247682.js";const u=JSON.parse('{"title":"Redis \u8BBE\u7F6E\u8FDC\u7A0B\u8FDE\u63A5","description":"","frontmatter":{},"headers":[],"relativePath":"FullStack/Redis/Connect.md"}'),p={name:"FullStack/Redis/Connect.md"},l=e(`<h1 id="redis-\u8BBE\u7F6E\u8FDC\u7A0B\u8FDE\u63A5" tabindex="-1">Redis \u8BBE\u7F6E\u8FDC\u7A0B\u8FDE\u63A5 <a class="header-anchor" href="#redis-\u8BBE\u7F6E\u8FDC\u7A0B\u8FDE\u63A5" aria-hidden="true">#</a></h1><blockquote><p>\u6CE8\u610F\uFF1A\u4E3A\u4E86\u4FDD\u62A4\u6570\u636E\u5B89\u5168\uFF0C\u5F00\u653E\u8FDC\u7A0B\u8FDE\u63A5\u9700\u8C28\u614E\u64CD\u4F5C\u3002 Redis \u9ED8\u8BA4\u662F\u4E0D\u5141\u8BB8\u8FDC\u7A0B\u8FDE\u63A5\u7684\uFF0C\u901A\u8FC7\u4E0B\u9762\u7684\u914D\u7F6E\u53EF\u4EE5\u5F00\u542F\u8FDC\u7A0B\u8FDE\u63A5\u3002</p></blockquote><p>\u5C06 redis.conf \u914D\u7F6E\u6587\u4EF6\u7684 bind \u548C protected-mode \u4FEE\u6539\u5982\u4E0B\uFF1A</p><div class="language-Shell"><button title="Copy Code" class="copy"></button><span class="lang">Shell</span><pre class="shiki vp-code-dark"><code><span class="line"></span>
<span class="line"><span style="color:#758575DD;"># \u7ED1\u5B9A\u7684\u7AEF\u53E3\u53F7</span></span>
<span class="line"><span style="color:#B8A965;">bind</span><span style="color:#DBD7CAEE;"> 0.0.0.0</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575DD;"># \u5173\u95ED\u4FDD\u62A4\u6A21\u5F0F</span></span>
<span class="line"><span style="color:#DBD7CAEE;">protected-mode no</span></span>
<span class="line"></span></code></pre><pre class="shiki vp-code-light"><code><span class="line"></span>
<span class="line"><span style="color:#A0ADA0;"># \u7ED1\u5B9A\u7684\u7AEF\u53E3\u53F7</span></span>
<span class="line"><span style="color:#998418;">bind</span><span style="color:#393A34;"> 0.0.0.0</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;"># \u5173\u95ED\u4FDD\u62A4\u6A21\u5F0F</span></span>
<span class="line"><span style="color:#393A34;">protected-mode no</span></span>
<span class="line"></span></code></pre></div><p>\u9664\u6B64\u4E4B\u5916\u8FD8\u9700\u8981\u68C0\u67E5\u670D\u52A1\u5668\u9632\u706B\u5899\u662F\u5426\u5F00\u653E\u4E86 Redis \u670D\u52A1\u5360\u7528\u7684\u7AEF\u53E3\u53F7\u3002</p><p>\u4FEE\u6539\u4E4B\u540E\u91CD\u542F Redis \u670D\u52A1\u5373\u53EF\u751F\u6548\u3002</p>`,6),o=[l];function c(t,i,d,r,_,h){return a(),n("div",null,o)}const y=s(p,[["render",c]]);export{u as __pageData,y as default};
