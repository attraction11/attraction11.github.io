import{_ as s,c as a,o as l,a as n}from"./app.9fd00f02.js";const u=JSON.parse('{"title":"\u670D\u52A1\u7AEF\u6E32\u67D3","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4E00\u3001\u670D\u52A1\u7AEF\u6E32\u67D3\u57FA\u7840","slug":"\u4E00\u3001\u670D\u52A1\u7AEF\u6E32\u67D3\u57FA\u7840","link":"#\u4E00\u3001\u670D\u52A1\u7AEF\u6E32\u67D3\u57FA\u7840","children":[]}],"relativePath":"Framework/Nuxt/ServeRender.md"}'),p={name:"Framework/Nuxt/ServeRender.md"},o=n(`<h1 id="\u670D\u52A1\u7AEF\u6E32\u67D3" tabindex="-1">\u670D\u52A1\u7AEF\u6E32\u67D3 <a class="header-anchor" href="#\u670D\u52A1\u7AEF\u6E32\u67D3" aria-hidden="true">#</a></h1><h2 id="\u4E00\u3001\u670D\u52A1\u7AEF\u6E32\u67D3\u57FA\u7840" tabindex="-1">\u4E00\u3001\u670D\u52A1\u7AEF\u6E32\u67D3\u57FA\u7840 <a class="header-anchor" href="#\u4E00\u3001\u670D\u52A1\u7AEF\u6E32\u67D3\u57FA\u7840" aria-hidden="true">#</a></h2><p>1\u3001\u6E32\u67D3\u7684\u672C\u8D28\uFF1A\u628A\u6570\u636E+\u6A21\u677F\u62FC\u63A5\u5230\u4E00\u8D77<br> 2\u3001\u4F20\u7EDF\u7684\u670D\u52A1\u7AEF\u6E32\u67D3</p><ul><li>\u56FE\u89E3\u8FC7\u7A0B <img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c7087dc39a5e4abab40d6295ad7abf8a~tplv-k3u1fbpfcp-watermark.image?" alt="image.png"></li><li>\u670D\u52A1\u7AEF\u5904\u7406</li></ul><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki vp-code-dark"><code><span class="line"><span style="color:#BD976A;">app</span><span style="color:#666666;">.</span><span style="color:#80A665;">get</span><span style="color:#666666;">(</span><span style="color:#C98A7DAA;">&quot;</span><span style="color:#C98A7D;">/</span><span style="color:#C98A7DAA;">&quot;</span><span style="color:#666666;">,</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">(</span><span style="color:#BD976A;">req</span><span style="color:#666666;">,</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">res</span><span style="color:#666666;">)</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">=&gt;</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span></span>
<span class="line"><span style="color:#666666;">    </span><span style="color:#758575DD;">// 1. \u83B7\u53D6\u9875\u9762\u6A21\u677F</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#CB7676;">const</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">templateStr</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">=</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">fs</span><span style="color:#666666;">.</span><span style="color:#80A665;">readFileSync</span><span style="color:#666666;">(</span><span style="color:#C98A7DAA;">&quot;</span><span style="color:#C98A7D;">./index.html</span><span style="color:#C98A7DAA;">&quot;</span><span style="color:#666666;">,</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7DAA;">&quot;</span><span style="color:#C98A7D;">utf-8</span><span style="color:#C98A7DAA;">&quot;</span><span style="color:#666666;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#666666;">    </span><span style="color:#758575DD;">// 2. \u83B7\u53D6\u6570\u636E</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#CB7676;">const</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">data</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">=</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">JSON</span><span style="color:#666666;">.</span><span style="color:#80A665;">parse</span><span style="color:#666666;">(</span><span style="color:#BD976A;">fs</span><span style="color:#666666;">.</span><span style="color:#80A665;">readFileSync</span><span style="color:#666666;">(</span><span style="color:#C98A7DAA;">&quot;</span><span style="color:#C98A7D;">./data.json</span><span style="color:#C98A7DAA;">&quot;</span><span style="color:#666666;">,</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7DAA;">&quot;</span><span style="color:#C98A7D;">utf-8</span><span style="color:#C98A7DAA;">&quot;</span><span style="color:#666666;">));</span></span>
<span class="line"></span>
<span class="line"><span style="color:#666666;">    </span><span style="color:#758575DD;">// 3. \u6E32\u67D3\uFF1A\u6570\u636E + \u6A21\u677F = \u6700\u7EC8\u7ED3\u679C</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#CB7676;">const</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">html</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">=</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">template</span><span style="color:#666666;">.</span><span style="color:#80A665;">render</span><span style="color:#666666;">(</span><span style="color:#BD976A;">templateStr</span><span style="color:#666666;">,</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">data</span><span style="color:#666666;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#666666;">    </span><span style="color:#758575DD;">// 4. \u628A\u6E32\u67D3\u7ED3\u679C\u53D1\u9001\u7ED9\u5BA2\u6237\u7AEF</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#BD976A;">res</span><span style="color:#666666;">.</span><span style="color:#80A665;">send</span><span style="color:#666666;">(</span><span style="color:#BD976A;">html</span><span style="color:#666666;">);</span></span>
<span class="line"><span style="color:#666666;">});</span></span>
<span class="line"></span></code></pre><pre class="shiki vp-code-light"><code><span class="line"><span style="color:#B07D48;">app</span><span style="color:#999999;">.</span><span style="color:#59873A;">get</span><span style="color:#999999;">(</span><span style="color:#B56959AA;">&quot;</span><span style="color:#B56959;">/</span><span style="color:#B56959AA;">&quot;</span><span style="color:#999999;">,</span><span style="color:#393A34;"> </span><span style="color:#999999;">(</span><span style="color:#B07D48;">req</span><span style="color:#999999;">,</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">res</span><span style="color:#999999;">)</span><span style="color:#393A34;"> </span><span style="color:#999999;">=&gt;</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span></span>
<span class="line"><span style="color:#999999;">    </span><span style="color:#A0ADA0;">// 1. \u83B7\u53D6\u9875\u9762\u6A21\u677F</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#AB5959;">const</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">templateStr</span><span style="color:#393A34;"> </span><span style="color:#999999;">=</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">fs</span><span style="color:#999999;">.</span><span style="color:#59873A;">readFileSync</span><span style="color:#999999;">(</span><span style="color:#B56959AA;">&quot;</span><span style="color:#B56959;">./index.html</span><span style="color:#B56959AA;">&quot;</span><span style="color:#999999;">,</span><span style="color:#393A34;"> </span><span style="color:#B56959AA;">&quot;</span><span style="color:#B56959;">utf-8</span><span style="color:#B56959AA;">&quot;</span><span style="color:#999999;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#999999;">    </span><span style="color:#A0ADA0;">// 2. \u83B7\u53D6\u6570\u636E</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#AB5959;">const</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">data</span><span style="color:#393A34;"> </span><span style="color:#999999;">=</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">JSON</span><span style="color:#999999;">.</span><span style="color:#59873A;">parse</span><span style="color:#999999;">(</span><span style="color:#B07D48;">fs</span><span style="color:#999999;">.</span><span style="color:#59873A;">readFileSync</span><span style="color:#999999;">(</span><span style="color:#B56959AA;">&quot;</span><span style="color:#B56959;">./data.json</span><span style="color:#B56959AA;">&quot;</span><span style="color:#999999;">,</span><span style="color:#393A34;"> </span><span style="color:#B56959AA;">&quot;</span><span style="color:#B56959;">utf-8</span><span style="color:#B56959AA;">&quot;</span><span style="color:#999999;">));</span></span>
<span class="line"></span>
<span class="line"><span style="color:#999999;">    </span><span style="color:#A0ADA0;">// 3. \u6E32\u67D3\uFF1A\u6570\u636E + \u6A21\u677F = \u6700\u7EC8\u7ED3\u679C</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#AB5959;">const</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">html</span><span style="color:#393A34;"> </span><span style="color:#999999;">=</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">template</span><span style="color:#999999;">.</span><span style="color:#59873A;">render</span><span style="color:#999999;">(</span><span style="color:#B07D48;">templateStr</span><span style="color:#999999;">,</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">data</span><span style="color:#999999;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#999999;">    </span><span style="color:#A0ADA0;">// 4. \u628A\u6E32\u67D3\u7ED3\u679C\u53D1\u9001\u7ED9\u5BA2\u6237\u7AEF</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#B07D48;">res</span><span style="color:#999999;">.</span><span style="color:#59873A;">send</span><span style="color:#999999;">(</span><span style="color:#B07D48;">html</span><span style="color:#999999;">);</span></span>
<span class="line"><span style="color:#999999;">});</span></span>
<span class="line"></span></code></pre></div><ul><li>\u7F3A\u70B9 <ul><li>\u524D\u540E\u7AEF\u4EE3\u7801\u5B8C\u5168\u8026\u5408\u5728\u4E00\u8D77\uFF0C\u4E0D\u5229\u4E8E\u5F00\u53D1\u548C\u7EF4\u62A4</li><li>\u524D\u7AEF\u6CA1\u6709\u8DB3\u591F\u7684\u53D1\u6325\u7A7A\u95F4</li><li>\u670D\u52A1\u7AEF\u538B\u529B\u5927</li><li>\u7528\u6237\u4F53\u9A8C\u4E00\u822C\uFF08\u6BCF\u6B21\u8BF7\u6C42\u65B0\u9875\u9762\u90FD\u9700\u8981\u5237\u65B0\u9875\u9762\uFF09</li></ul></li></ul><p>3\u3001\u5BA2\u6237\u7AEF\u6E32\u67D3</p><ul><li>\u56FE\u89E3\u8FC7\u7A0B\uFF08\u540E\u7AEF\u5904\u7406\u6570\u636E\u63A5\u53E3\u3001\u524D\u7AEF\u8D1F\u8D23\u5C06\u63A5\u53E3\u6570\u636E\u6E32\u67D3\u5230\u9875\u9762\u4E2D\uFF0C\u524D\u7AEF\u66F4\u72EC\u7ACB\uFF09 <img src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/dc0a8eaf90bb45a2a2dfca96489f250c~tplv-k3u1fbpfcp-watermark.image?" alt="image.png"></li><li>\u7F3A\u70B9 - \u9996\u5C4F\u6E32\u67D3\u6162: \u5BF9\u6BD4\u7A7F\u900F\u670D\u52A1\u7AEF\u6E32\u67D3\u4E0E\u5BA2\u6237\u7AEF\u6E32\u67D3\u9875\u9762\u5448\u73B0\u7684\u8017\u65F6\u3002<br><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1a83c502c74f4ecf85fdf7927ffb6156~tplv-k3u1fbpfcp-watermark.image?" alt="9.2.png"> - \u4E0D\u5229\u4E8E<code>SEO</code>: \u56E0\u4E3A\u5728\u8BF7\u6C42\u4E00\u4E2A\u5730\u5740\u540E\u670D\u52A1\u7AEF\u8FD4\u56DE\u7684\u662F\u7A7A<code>HTML</code>,\u641C\u7D22\u5F15\u64CE\u4E0D\u80FD\u89E3\u6790<code>JS</code>\u83B7\u53D6\u52A8\u6001\u9875\u9762\uFF0C\u5728<code>body</code>\u6807\u7B7E\u5185\u5F97\u4E0D\u5230\u6709\u7528\u7684\u4FE1\u606F\u3002</li></ul><p>4\u3001\u73B0\u4EE3\u5316\u7684\u670D\u52A1\u7AEF\u6E32\u67D3\uFF08\u540C\u6784\u6E32\u67D3\uFF09</p><ul><li>\u7406\u89E3\u540C\u6784\u6E32\u67D3 <ul><li>\u57FA\u4E8E React\u3001Vue \u7B49\u6846\u67B6\uFF0C\u5BA2\u6237\u7AEF\u6E32\u67D3\u548C\u670D\u52A1\u5668\u7AEF\u6E32\u67D3\u7684\u7ED3\u5408 <ul><li>\u5728\u670D\u52A1\u5668\u7AEF\u6267\u884C\u4E00\u6B21\uFF0C\u7528\u4E8E\u5B9E\u73B0\u670D\u52A1\u5668\u7AEF\u6E32\u67D3\uFF08\u9996\u5C4F\u76F4\u51FA\uFF09</li><li>\u5728\u5BA2\u6237\u7AEF\u518D\u6267\u884C\u4E00\u6B21\uFF0C\u7528\u4E8E\u63A5\u7BA1\u9875\u9762\u4EA4\u4E92</li></ul></li><li>\u6838\u5FC3\u89E3\u51B3 SEO \u548C\u9996\u5C4F\u6E32\u67D3\u6162\u7684\u95EE\u9898</li><li>\u62E5\u6709\u4F20\u7EDF\u670D\u52A1\u7AEF\u6E32\u67D3\u7684\u4F18\u70B9\uFF0C\u4E5F\u6709\u5BA2\u6237\u7AEF\u6E32\u67D3\u7684\u4F18\u70B9</li></ul></li><li>\u56FE\u89E3\u8FC7\u7A0B <img src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ab65ca8198fe4912be33b9fba9ed9d63~tplv-k3u1fbpfcp-watermark.image?" alt="image.png"></li><li>\u5B9E\u73B0\u540C\u6784\u6E32\u67D3\u7684\u65B9\u6848 <ul><li>\u4F7F\u7528 Vue\u3001React \u7B49\u6846\u67B6\u7684\u5B98\u65B9\u89E3\u51B3\u65B9\u6848 <ul><li>\u4F18\u70B9\uFF1A\u6709\u52A9\u4E8E\u7406\u89E3\u539F\u7406</li><li>\u7F3A\u70B9\uFF1A\u9700\u8981\u642D\u5EFA\u73AF\u5883\uFF0C\u6BD4\u8F83\u9EBB\u70E6</li></ul></li><li>\u4F7F\u7528\u7B2C\u4E09\u65B9\u89E3\u51B3\u65B9\u6848 <ul><li>React \u751F\u6001\u7684 Next.js</li><li>Vue \u751F\u6001\u7684 Nuxt.js</li></ul></li></ul></li></ul><p>5\u3001\u540C\u6784\u6E32\u67D3\u7684\u95EE\u9898</p><ul><li>\u5F00\u53D1\u6761\u4EF6\u6240\u9650 <ul><li>\u6D4F\u89C8\u5668\u7279\u5B9A\u7684\u4EE3\u7801\u53EA\u80FD\u5728\u67D0\u4E9B\u751F\u547D\u5468\u671F\u94A9\u5B50\u51FD\u6570\u4E2D\u4F7F\u7528\uFF1B</li><li>\u4E00\u4E9B\u5916\u90E8\u6269\u5C55\u5E93\u53EF\u80FD\u9700\u8981\u7279\u6B8A\u5904\u7406\u624D\u80FD\u5728\u670D\u52A1\u7AEF\u6E32\u67D3\u5E94\u7528\u4E2D\u8FD0\u884C\uFF1B</li><li>\u4E0D\u80FD\u5728\u670D\u52A1\u7AEF\u6E32\u67D3\u671F\u95F4\u64CD\u4F5C DOM</li><li>\u67D0\u4E9B\u4EE3\u7801\u64CD\u4F5C\u9700\u8981\u533A\u5206\u8FD0\u884C\u73AF\u5883</li></ul></li><li>\u6D89\u53CA\u6784\u5EFA\u8BBE\u7F6E\u548C\u90E8\u7F72\u7684\u66F4\u591A\u8981\u6C42\uFF0C\u5BF9\u6BD4\u5982\u4E0B\uFF1A <table><thead><tr><th></th><th>\u5BA2\u6237\u7AEF\u6E32\u67D3</th><th>\u540C\u6784\u6E32\u67D3</th></tr></thead><tbody><tr><td>\u6784\u5EFA</td><td>\u4EC5\u6784\u5EFA\u5BA2\u6237\u7AEF\u5E94\u7528\u5373\u53EF</td><td>\u9700\u8981\u6784\u5EFA\u4E24\u4E2A\u7AEF</td></tr><tr><td>\u90E8\u7F72</td><td>\u53EF\u4EE5\u90E8\u7F72\u5728\u4EFB\u610F web \u670D\u52A1\u5668\u4E2D</td><td>\u53EA\u80FD\u90E8\u7F72\u5728 Node.js Server</td></tr></tbody></table></li><li>\u66F4\u591A\u7684\u670D\u52A1\u5668\u8D1F\u8F7D <ul><li>\u5728 Node \u4E2D\u6E32\u67D3\u5B8C\u6574\u7684\u5E94\u7528\u7A0B\u5E8F\uFF0C\u76F8\u6BD4\u4EC5\u4EC5\u63D0\u4F9B\u9759\u6001\u6587\u4EF6\u7684\u670D\u52A1\u5668\u9700\u8981\u5927\u91CF\u5360\u7528<code>CPU</code>\u8D44\u6E90</li><li>\u5982\u679C\u5E94\u7528\u5728\u9AD8\u6D41\u91CF\u73AF\u5883\u4E0B\u4F7F\u7528\uFF0C\u9700\u8981\u51C6\u5907\u76F8\u5E94\u7684\u670D\u52A1\u5668\u8D1F\u8F7D</li><li>\u9700\u8981\u66F4\u591A\u7684\u670D\u52A1\u7AEF\u6E32\u67D3\u4F18\u5316\u5DE5\u4F5C\u5904\u7406</li></ul></li></ul>`,12),e=[o];function t(c,r,y,i,A,D){return l(),a("div",null,e)}const B=s(p,[["render",t]]);export{u as __pageData,B as default};
