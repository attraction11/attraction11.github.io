import{_ as e,c as s,o as a,a as o}from"./app.72351449.js";const c="/assets/image10.eacac835.png",r="/assets/image11.7738c026.png",d="/assets/image12.40c119e8.png",n="/assets/image13.0164fef4.png",l="/assets/image14.acb49ae5.png",k=JSON.parse('{"title":"\u9759\u6001\u7AD9\u70B9\u751F\u6210","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4E00\u3001Gridsome \u4ECB\u7ECD","slug":"\u4E00\u3001gridsome-\u4ECB\u7ECD","link":"#\u4E00\u3001gridsome-\u4ECB\u7ECD","children":[]},{"level":2,"title":"\u4E8C\u3001Gridsome \u57FA\u7840","slug":"\u4E8C\u3001gridsome-\u57FA\u7840","link":"#\u4E8C\u3001gridsome-\u57FA\u7840","children":[]},{"level":2,"title":"\u4E09\u3001\u4F7F\u7528 Strapi \u7BA1\u7406\u6570\u636E","slug":"\u4E09\u3001\u4F7F\u7528-strapi-\u7BA1\u7406\u6570\u636E","link":"#\u4E09\u3001\u4F7F\u7528-strapi-\u7BA1\u7406\u6570\u636E","children":[]}],"relativePath":"Framework/Nuxt/StaticSite.md"}'),p={name:"Framework/Nuxt/StaticSite.md"},t=o(`<h1 id="\u9759\u6001\u7AD9\u70B9\u751F\u6210" tabindex="-1">\u9759\u6001\u7AD9\u70B9\u751F\u6210 <a class="header-anchor" href="#\u9759\u6001\u7AD9\u70B9\u751F\u6210" aria-hidden="true">#</a></h1><h2 id="\u4E00\u3001gridsome-\u4ECB\u7ECD" tabindex="-1">\u4E00\u3001Gridsome \u4ECB\u7ECD <a class="header-anchor" href="#\u4E00\u3001gridsome-\u4ECB\u7ECD" aria-hidden="true">#</a></h2><p>1\u3001<a href="https://github.com/gridsome/gridsome" target="_blank" rel="noreferrer"><code>Gridsome</code></a> \u662F\u7531<code>Vue.js</code>\u9A71\u52A8\u7684 Jamstack \u6846\u67B6,\u7528\u4E8E\u751F\u4EA7\u9759\u6001\u7F51\u7AD9\u3002\u7528\u4E8E\u4E3A\u4EFB\u4F55\u65E0\u5934<code>CMS</code>\uFF0C\u672C\u5730\u6587\u4EF6\u6216<code>API</code>\u6784\u5EFA\u53EF\u7528\u4E8E<code>CDN</code>\u7684\u7F51\u7AD9<br> 2\u3001<a href="https://gridsome.org/docs/jamstack/" target="_blank" rel="noreferrer"><code>Jamstack</code></a>\u4F7F\u60A8\u53EF\u4EE5\u901A\u8FC7\u9884\u6E32\u67D3\u6587\u4EF6\u5E76\u76F4\u63A5\u4ECE<code>CDN</code>\u76F4\u63A5\u63D0\u4F9B\u6587\u4EF6\u6765\u6784\u5EFA\u5FEB\u901F\u5B89\u5168\u7684\u7AD9\u70B9\u548C\u5E94\u7528\u7A0B\u5E8F\uFF0C\u800C\u65E0\u9700\u7BA1\u7406\u6216\u8FD0\u884C Web \u670D\u52A1\u5668\u3002</p><ul><li><code>JAMStack</code>\u7684<code>JAM</code>\u662F<code>JavaScript</code>\uFF0C <code>API</code>\u548C<code>Markup</code>\u7684\u9996\u5B57\u6BCD\u7EC4\u5408\u672C\u8D28\u4E0A\u662F\u4E00\u79CD\u80D6\u524D\u7AEF\uFF0C\u901A\u8FC7\u8C03\u7528\u5404\u79CD<code>API</code>\u6765\u5B9E\u73B0\u66F4\u591A\u7684\u529F\u80FD</li><li>\u5176\u5B9E\u4E5F\u662F\u4E00\u79CD\u524D\u540E\u7AEF\u7684\u6A21\u5F0F\uFF0C\u53EA\u4E0D\u8FC7\u79BB\u5F97\u6BD4\u8F83\u5F00\uFF0C\u751A\u81F3\u524D\u540E\u7AEF\u6765\u81EA\u591A\u4E2A\u4E0D\u540C\u7684\u5382\u5546</li></ul><p>3\u3001\u4F7F\u7528<code>Vue.js</code>\uFF0C<code>webpack</code>\u548C<code>Node.js</code>\u7B49\u73B0\u4EE3\u5DE5\u5177\u6784\u5EFA\u7F51\u7AD9\u3002\u901A\u8FC7<code>npm</code>\u8FDB\u884C\u70ED\u91CD\u8F7D\u5E76\u8BBF\u95EE\u4EFB\u4F55\u8F6F\u4EF6\u5305\uFF0C\u5E76\u4F7F\u7528\u81EA\u52A8\u524D\u7F00\u5728\u60A8\u559C\u6B22\u7684\u9884\u5904\u7406\u5668\uFF08\u5982<code>Sass</code>\u6216<code>Less</code>\uFF09\u4E2D\u7F16\u5199<code>CSS</code>\u3002</p><p>4\u3001\u9759\u6001\u7F51\u7AD9\u7684\u597D\u5904</p><ul><li>\u7701\u94B1\uFF1A\u4E0D\u9700\u8981\u4E13\u4E1A\u7684\u670D\u52A1\u5668\uFF0C\u53EA\u8981\u6258\u7BA1\u9759\u6001\u6587\u4EF6\u7684\u7A7A\u95F4\u5373\u53EF</li><li>\u5FEB\u901F\uFF1A\u4E0D\u7ECF\u8FC7\u540E\u7AEF\u670D\u52A1\u5668\u7684\u5904\u7406\uFF0C\u53EA\u4F20\u8F93\u5185\u5BB9</li><li>\u5B89\u5168\uFF1A\u6CA1\u6709\u540E\u7AEF\u7A0B\u5E8F\u7684\u6267\u884C</li></ul><p>5\u3001\u5E38\u89C1\u7684\u9759\u6001\u7F51\u7AD9\u751F\u6210\u5668</p><p><code>ekyll (Ruby)</code> <code>Hexo (Node)</code> <code>Hugo (Golang)</code> <code>Gatsby (Node/React)</code> <code>Gridsome (Node/Vue)</code>\u53E6\u5916\uFF0C <code>Next.js</code>\uFF0C <code>Nuxt.js</code>\u4E5F\u80FD\u751F\u6210\u9759\u6001\u7F51\u7AD9\uFF0C\u4F46\u662F\u5B83\u4EEC\u66F4\u591A\u88AB\u8BA4\u4E3A\u662F<code>SSR</code> \uFF08\u670D\u52A1\u7AEF\u6E32\u67D3\uFF09\u6846\u67B6\u3002</p><p>6\u3001\u9759\u6001\u5E94\u7528\u4F7F\u7528\u573A\u666F</p><ul><li>\u4E0D\u9002\u5408\u6709\u5927\u91CF\u8DEF\u7531\u9875\u9762\u7684\u5E94\u7528</li><li>\u4E0D\u9002\u5408\u6709\u5927\u91CF\u52A8\u6001\u5185\u5BB9\u7684\u5E94\u7528\uFF08\u5982\u540E\u53F0\u7BA1\u7406\u7CFB\u7EDF\uFF0C\u9891\u7E41\u589E\u5220\u6539\u67E5\uFF09</li></ul><h2 id="\u4E8C\u3001gridsome-\u57FA\u7840" tabindex="-1">\u4E8C\u3001Gridsome \u57FA\u7840 <a class="header-anchor" href="#\u4E8C\u3001gridsome-\u57FA\u7840" aria-hidden="true">#</a></h2><p>1\u3001\u5B98\u65B9\u6587\u6863\uFF1A<a href="https://gridsome.org/docs/" target="_blank" rel="noreferrer">https://gridsome.org/docs/</a><br> 2\u3001\u5FEB\u901F\u4E86\u89E3 <code>Gridsome</code> \u9879\u76EE</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki vp-code-dark"><code><span class="line"><span style="color:#dbd7caee;"># \u521B\u5EFA\u9879\u76EE</span></span>
<span class="line"><span style="color:#dbd7caee;">gridsome create my-gridsome-site</span></span>
<span class="line"><span style="color:#dbd7caee;"></span></span>
<span class="line"><span style="color:#dbd7caee;"># \u8FDB\u5165\u9879\u76EE\u4E2D</span></span>
<span class="line"><span style="color:#dbd7caee;">cd my-gridsome-site</span></span>
<span class="line"><span style="color:#dbd7caee;"></span></span>
<span class="line"><span style="color:#dbd7caee;"># \u542F\u52A8\u5F00\u53D1\u6A21\u5F0F\uFF0C\u6216 npm run develop</span></span>
<span class="line"><span style="color:#dbd7caee;">gridsome develop</span></span>
<span class="line"><span style="color:#dbd7caee;"></span></span></code></pre><pre class="shiki vp-code-light"><code><span class="line"><span style="color:#393a34;"># \u521B\u5EFA\u9879\u76EE</span></span>
<span class="line"><span style="color:#393a34;">gridsome create my-gridsome-site</span></span>
<span class="line"><span style="color:#393a34;"></span></span>
<span class="line"><span style="color:#393a34;"># \u8FDB\u5165\u9879\u76EE\u4E2D</span></span>
<span class="line"><span style="color:#393a34;">cd my-gridsome-site</span></span>
<span class="line"><span style="color:#393a34;"></span></span>
<span class="line"><span style="color:#393a34;"># \u542F\u52A8\u5F00\u53D1\u6A21\u5F0F\uFF0C\u6216 npm run develop</span></span>
<span class="line"><span style="color:#393a34;">gridsome develop</span></span>
<span class="line"><span style="color:#393a34;"></span></span></code></pre></div><p>3\u3001\u76EE\u5F55\u7ED3\u6784</p><p><img src="`+c+'" alt="image.png"></p><ul><li>\u5173\u4E8E\u9879\u76EE\u7684\u4E00\u4E9B\u914D\u7F6E\uFF0C\u53C2\u8003\uFF1A<a href="https://gridsome.org/docs/config/" target="_blank" rel="noreferrer">https://gridsome.org/docs/config/</a></li><li><code>Gridsome</code>\u9700\u8981 <code>gridsome.config.js</code> \u624D\u80FD\u5DE5\u4F5C\u3002\u63D2\u4EF6\u548C\u9879\u76EE\u8BBE\u7F6E\u4F4D\u4E8E\u6B64\u5904\u3002\u57FA\u672C\u914D\u7F6E\u6587\u4EF6\u5982\u4E0B\u6240\u793A\uFF1A <img src="'+r+'" alt="image.png"></li></ul><p>4\u3001\u6570\u636E\u9884\u5904\u7406</p><p>\u5982\u679C\u60A8\u8981\u5728\u7F51\u7AD9\u4E0A\u653E\u7F6E\u535A\u5BA2\u6587\u7AE0\uFF0C\u6807\u7B7E\uFF0C\u4EA7\u54C1\u7B49\uFF0C\u5219\u6536\u85CF\u5F88\u6709\u7528\u3002\u53EF\u4EE5\u4F7F\u7528 <a href="https://gridsome.org/plugins" target="_blank" rel="noreferrer">Source \u63D2\u4EF6</a>\u6216 <a href="https://gridsome.org/docs/data-store-api/" target="_blank" rel="noreferrer">Data Store API</a> \u4ECE\u4EFB\u4F55 Headless CMS\uFF0C\u5185\u5BB9 API \u6216 Markdown \u6587\u4EF6\u4E2D\u83B7\u53D6\u96C6\u5408 <img src="'+d+'" alt="image.png"></p><p>5\u3001\u9879\u76EE\u4E2D pages \u6587\u4EF6\u5939</p><p>\u901A\u8FC7\u5728<code>src/pages</code>\u6587\u4EF6\u5939\u4E2D\u6DFB\u52A0<code>Vue</code>\u7EC4\u4EF6\u6765\u521B\u5EFA\u9875\u9762\u3002\u4ED6\u4EEC\u4F7F\u7528\u57FA\u4E8E\u6587\u4EF6\u7684\u8DEF\u7531\u7CFB\u7EDF\u3002\u4F8B\u5982\uFF0C<code>src/pages/ About.vue</code>\u5C06\u662F <a href="http://mywebsite.com/about/" target="_blank" rel="noreferrer">mywebsite.com/about/</a><code>\u3002\u9875\u9762\u7528\u4E8E\u7B80\u5355\u9875\u9762\u548C\u5217\u51FA\u96C6\u5408\u7684\u9875\u9762\uFF08\u4F8B\u5982 </code>/blog/`\uFF09\u3002</p><h2 id="\u4E09\u3001\u4F7F\u7528-strapi-\u7BA1\u7406\u6570\u636E" tabindex="-1">\u4E09\u3001\u4F7F\u7528 Strapi \u7BA1\u7406\u6570\u636E <a class="header-anchor" href="#\u4E09\u3001\u4F7F\u7528-strapi-\u7BA1\u7406\u6570\u636E" aria-hidden="true">#</a></h2><ul><li>\u4ECB\u7ECD\u4E86\u9009\u62E9 <code>Gatsby</code> \u7684\u539F\u56E0\uFF0C\u5176\u4E2D\u63D0\u5230\u4E86 <code>Gatsby</code> \u4F7F\u7528 <code>GraphQL</code> \u3002\u5927\u5BB6\u53EF\u80FD\u4F1A\u6709\u7591\u60D1\uFF0C\u4E0D\u662F\u5EFA\u9759\u6001\u535A\u5BA2\u4E48\uFF0C\u600E\u4E48\u4F1A\u6709 <code>GraphQL</code>\uFF1F\u96BE\u9053\u8FD8\u8981\u90E8\u7F72\u670D\u52A1\u5668\uFF1F</li><li>\u5176\u5B9E\u8FD9\u91CC <code>GraphQL</code> \u5E76\u4E0D\u662F\u4F5C\u4E3A\u670D\u52A1\u5668\u7AEF\u90E8\u7F72\uFF0C\u800C\u662F\u4F5C\u4E3A <code>Gridsome</code> \u5728\u672C\u5730\u7BA1\u7406\u8D44\u6E90\u7684\u4E00\u79CD\u65B9\u5F0F\u3002</li><li>\u901A\u8FC7 <code>GraphQL</code> \u7EDF\u4E00\u7BA1\u7406\u5B9E\u9645\u4E0A\u975E\u5E38\u65B9\u4FBF\uFF0C\u56E0\u4E3A\u4F5C\u4E3A\u4E00\u4E2A\u6570\u636E\u5E93\u67E5\u8BE2\u8BED\u8A00\uFF0C\u5B83\u6709\u975E\u5E38\u5B8C\u5907\u7684\u67E5\u8BE2\u8BED\u53E5\uFF0C\u4E0E JSON \u76F8\u4F3C\u7684\u63CF\u8FF0\u7ED3\u6784\uFF0C\u518D\u7ED3\u5408 <code>Relay</code> \u7684 <code>Connections</code> \u65B9\u5F0F\u5904\u7406\u96C6\u5408\uFF0C\u7BA1\u7406\u8D44\u6E90\u4E0D\u518D\u9700\u8981\u81EA\u884C\u5F15\u5165\u5176\u5B83\u9879\u76EE\uFF0C\u5927\u5927\u51CF\u8F7B\u4E86\u7EF4\u62A4\u96BE\u5EA6\u3002</li></ul><p>1\u3001GraphQL \u6570\u636E\u5C42</p><p><img src="'+n+'" alt="image.png"></p><p>2\u3001GraphQL \u8D44\u6E90\u7BA1\u7406\u5668</p><ul><li>\u6BCF\u4E2A <code>Gridsome</code> \u9879\u76EE\u90FD\u6709\u4E00\u4E2A <code>GraphQL</code> \u8D44\u6E90\u7BA1\u7406\u5668\uFF0C\u53EF\u4EE5\u5728\u5F00\u53D1\u6A21\u5F0F\u4E0B\u4F7F\u7528\u5B83\u6765\u63A2\u7D22\u548C\u6D4B\u8BD5\u67E5\u8BE2\u3002</li><li>\u5728\u8FD9\u91CC\uFF0C\u60A8\u8FD8\u5C06\u83B7\u5F97\u6240\u6709\u53EF\u7528 <code>GraphQL</code> \u96C6\u5408\u7684\u5217\u8868\u3002</li><li>\u901A\u5E38\u53EF\u4EE5\u901A\u8FC7\u8F6C\u5230 <code>http:// localhost:8080/___explore</code> \u6765\u6253\u5F00\u5B83\u3002 <img src="'+l+'" alt="image.png"></li></ul><p>\u56DB\u3001\u90E8\u7F72 Strapi <a href="https://gitee.com/lagoufed/fed-e-questions/blob/master/part3/part3-4/01-%E5%AE%89%E8%A3%85strapi%E5%92%8Cmysql.md" target="_blank" rel="noreferrer">\u53C2\u8003</a></p><p>\u4E94\u3001\u90E8\u7F72 Gridsome \u5E94\u7528\uFF08\u91C7\u7528<a href="https://vercel.com/" target="_blank" rel="noreferrer">vercel</a>\u6258\u7BA1\uFF09</p>',29),i=[t];function g(m,h,_,u,b,f){return a(),s("div",null,i)}const S=e(p,[["render",g]]);export{k as __pageData,S as default};
