import{_ as s,c as a,o as n,a as p}from"./app.a6f948a0.js";const B=JSON.parse('{"title":"","description":"","frontmatter":{"outline":"deep"},"headers":[{"level":2,"title":"React Redux","slug":"react-redux","link":"#react-redux","children":[]},{"level":2,"title":"\u7EC4\u4EF6","slug":"\u7EC4\u4EF6","link":"#\u7EC4\u4EF6","children":[{"level":3,"title":"UI \u7EC4\u4EF6","slug":"ui-\u7EC4\u4EF6","link":"#ui-\u7EC4\u4EF6","children":[]},{"level":3,"title":"\u5BB9\u5668\u7EC4\u4EF6","slug":"\u5BB9\u5668\u7EC4\u4EF6","link":"#\u5BB9\u5668\u7EC4\u4EF6","children":[]}]},{"level":2,"title":"Connect","slug":"connect","link":"#connect","children":[]},{"level":2,"title":"mapStateToProps()","slug":"mapstatetoprops","link":"#mapstatetoprops","children":[]},{"level":2,"title":"mapDispatchToProps()","slug":"mapdispatchtoprops","link":"#mapdispatchtoprops","children":[]},{"level":2,"title":"Provider \u7EC4\u4EF6","slug":"provider-\u7EC4\u4EF6","link":"#provider-\u7EC4\u4EF6","children":[]}],"relativePath":"Framework/React/ReactRedux.md"}'),o={name:"Framework/React/ReactRedux.md"},l=p(`<h2 id="react-redux" tabindex="-1">React Redux <a class="header-anchor" href="#react-redux" aria-hidden="true">#</a></h2><p><code>React-Redux</code>\u8FD9\u662F\u4E00\u4E2A React \u751F\u6001\u4E2D\u5E38\u7528\u7EC4\u4EF6\uFF0C\u5B83\u53EF\u4EE5\u7B80\u5316<code>Redux</code>\u6D41\u7A0B</p><p><code>React-Redux</code> \u89C4\u5B9A\uFF0C\u6240\u6709\u7684 <code>UI</code> \u7EC4\u4EF6\u90FD\u7531\u7528\u6237\u63D0\u4F9B\uFF0C\u5BB9\u5668\u7EC4\u4EF6\u5219\u662F\u7531 <code>React-Redux</code> \u81EA\u52A8\u751F\u6210\u3002\u4E5F\u5C31\u662F\u8BF4\uFF0C\u7528\u6237\u8D1F\u8D23\u89C6\u89C9\u5C42\uFF0C\u72B6\u6001\u7BA1\u7406\u5219\u662F\u5168\u90E8\u4EA4\u7ED9\u5B83\u3002</p><p><code>UI</code> \u7EC4\u4EF6\u8D1F\u8D23 <code>UI</code> \u7684\u5448\u73B0\uFF0C\u5BB9\u5668\u7EC4\u4EF6\u8D1F\u8D23\u7BA1\u7406\u6570\u636E\u548C\u903B\u8F91</p><p>\u5B89\u88C5 <code>react-redux</code>\u4E4B\u524D\u786E\u4FDD\u5B89\u88C5\u4E86 <code>redux</code></p><ul><li><code>npm install react-redux --save</code></li></ul><h2 id="\u7EC4\u4EF6" tabindex="-1">\u7EC4\u4EF6 <a class="header-anchor" href="#\u7EC4\u4EF6" aria-hidden="true">#</a></h2><p><code>React-Redux </code>\u5C06\u6240\u6709\u7EC4\u4EF6\u5206\u6210\u4E24\u5927\u7C7B\uFF1A<code>UI</code> \u7EC4\u4EF6\uFF08Presentational Component\uFF09\u548C\u5BB9\u5668\u7EC4\u4EF6\uFF08Container Component\uFF09\u3002</p><h3 id="ui-\u7EC4\u4EF6" tabindex="-1">UI \u7EC4\u4EF6 <a class="header-anchor" href="#ui-\u7EC4\u4EF6" aria-hidden="true">#</a></h3><ul><li>\u53EA\u8D1F\u8D23 UI \u7684\u5448\u73B0\uFF0C\u4E0D\u5E26\u6709\u4EFB\u4F55\u4E1A\u52A1\u903B\u8F91</li><li>\u6CA1\u6709\u72B6\u6001\uFF08\u5373\u4E0D\u4F7F\u7528<code>this.state</code>\u8FD9\u4E2A\u53D8\u91CF\uFF09</li><li>\u6240\u6709\u6570\u636E\u90FD\u7531\u53C2\u6570\uFF08<code>this.props</code>\uFF09\u63D0\u4F9B</li><li>\u4E0D\u4F7F\u7528\u4EFB\u4F55 Redux \u7684 API</li></ul><h3 id="\u5BB9\u5668\u7EC4\u4EF6" tabindex="-1">\u5BB9\u5668\u7EC4\u4EF6 <a class="header-anchor" href="#\u5BB9\u5668\u7EC4\u4EF6" aria-hidden="true">#</a></h3><ul><li>\u8D1F\u8D23\u7BA1\u7406\u6570\u636E\u548C\u4E1A\u52A1\u903B\u8F91\uFF0C\u4E0D\u8D1F\u8D23 UI \u7684\u5448\u73B0</li><li>\u5E26\u6709\u5185\u90E8\u72B6\u6001</li><li>\u4F7F\u7528 Redux \u7684 API</li></ul><h2 id="connect" tabindex="-1">Connect <a class="header-anchor" href="#connect" aria-hidden="true">#</a></h2><p><code>React-Redux</code> \u63D0\u4F9B <code>connect</code> \u65B9\u6CD5\uFF0C\u7528\u4E8E\u4ECE UI \u7EC4\u4EF6\u751F\u6210\u5BB9\u5668\u7EC4\u4EF6\u3002<code>connect</code> \u7684\u610F\u601D\uFF0C\u5C31\u662F\u5C06\u8FD9\u4E24\u79CD\u7EC4\u4EF6\u8FDE\u8D77\u6765\u3002</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki vp-code-dark"><code><span class="line"><span style="color:#4D9375;">import</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">connect</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">}</span><span style="color:#DBD7CAEE;"> </span><span style="color:#4D9375;">from</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7DAA;">&quot;</span><span style="color:#C98A7D;">react-redux</span><span style="color:#C98A7DAA;">&quot;</span><span style="color:#666666;">;</span></span>
<span class="line"><span style="color:#CB7676;">const</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">VisibleTodoList</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">=</span><span style="color:#DBD7CAEE;"> </span><span style="color:#80A665;">connect</span><span style="color:#666666;">()(</span><span style="color:#BD976A;">TodoList</span><span style="color:#666666;">);</span></span>
<span class="line"><span style="color:#758575DD;">// \u4E0A\u9762\u4EE3\u7801\u4E2D\uFF0CTodoList\u662F UI \u7EC4\u4EF6\uFF0CVisibleTodoList\u5C31\u662F\u7531 React-Redux\u901A\u8FC7connect\u65B9\u6CD5\u81EA\u52A8\u751F\u6210\u7684\u5BB9\u5668\u7EC4\u4EF6</span></span>
<span class="line"></span></code></pre><pre class="shiki vp-code-light"><code><span class="line"><span style="color:#1E754F;">import</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">connect</span><span style="color:#393A34;"> </span><span style="color:#999999;">}</span><span style="color:#393A34;"> </span><span style="color:#1E754F;">from</span><span style="color:#393A34;"> </span><span style="color:#B56959AA;">&quot;</span><span style="color:#B56959;">react-redux</span><span style="color:#B56959AA;">&quot;</span><span style="color:#999999;">;</span></span>
<span class="line"><span style="color:#AB5959;">const</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">VisibleTodoList</span><span style="color:#393A34;"> </span><span style="color:#999999;">=</span><span style="color:#393A34;"> </span><span style="color:#59873A;">connect</span><span style="color:#999999;">()(</span><span style="color:#B07D48;">TodoList</span><span style="color:#999999;">);</span></span>
<span class="line"><span style="color:#A0ADA0;">// \u4E0A\u9762\u4EE3\u7801\u4E2D\uFF0CTodoList\u662F UI \u7EC4\u4EF6\uFF0CVisibleTodoList\u5C31\u662F\u7531 React-Redux\u901A\u8FC7connect\u65B9\u6CD5\u81EA\u52A8\u751F\u6210\u7684\u5BB9\u5668\u7EC4\u4EF6</span></span>
<span class="line"></span></code></pre></div><p>\u56E0\u4E3A\u6CA1\u6709\u5B9A\u4E49\u4E1A\u52A1\u903B\u8F91\uFF0C\u4E0A\u9762\u7684\u5BB9\u5668\u7EC4\u4EF6\u6BEB\u65E0\u610F\u4E49\uFF0C\u53EA\u662F UI \u7EC4\u4EF6\u7684\u4E00\u4E2A\u5355\u7EAF\u7684\u5305\u88C5\u5C42\u3002\u4E3A\u4E86\u5B9A\u4E49\u4E1A\u52A1\u903B\u8F91\uFF0C\u9700\u8981\u7ED9\u51FA\u4E0B\u9762\u4E24\u65B9\u9762\u7684\u4FE1\u606F\u3002</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki vp-code-dark"><code><span class="line"><span style="color:#dbd7caee;">\uFF081\uFF09\u8F93\u5165\u903B\u8F91\uFF1A\u5916\u90E8\u7684\u6570\u636E\uFF08\u5373state\u5BF9\u8C61\uFF09\u5982\u4F55\u8F6C\u6362\u4E3A UI \u7EC4\u4EF6\u7684\u53C2\u6570</span></span>
<span class="line"><span style="color:#dbd7caee;"></span></span>
<span class="line"><span style="color:#dbd7caee;">\uFF082\uFF09\u8F93\u51FA\u903B\u8F91\uFF1A\u7528\u6237\u53D1\u51FA\u7684\u52A8\u4F5C\u5982\u4F55\u53D8\u4E3A Action \u5BF9\u8C61\uFF0C\u4ECE UI \u7EC4\u4EF6\u4F20\u51FA\u53BB\u3002</span></span>
<span class="line"><span style="color:#dbd7caee;"></span></span></code></pre><pre class="shiki vp-code-light"><code><span class="line"><span style="color:#393a34;">\uFF081\uFF09\u8F93\u5165\u903B\u8F91\uFF1A\u5916\u90E8\u7684\u6570\u636E\uFF08\u5373state\u5BF9\u8C61\uFF09\u5982\u4F55\u8F6C\u6362\u4E3A UI \u7EC4\u4EF6\u7684\u53C2\u6570</span></span>
<span class="line"><span style="color:#393a34;"></span></span>
<span class="line"><span style="color:#393a34;">\uFF082\uFF09\u8F93\u51FA\u903B\u8F91\uFF1A\u7528\u6237\u53D1\u51FA\u7684\u52A8\u4F5C\u5982\u4F55\u53D8\u4E3A Action \u5BF9\u8C61\uFF0C\u4ECE UI \u7EC4\u4EF6\u4F20\u51FA\u53BB\u3002</span></span>
<span class="line"><span style="color:#393a34;"></span></span></code></pre></div><p>\u6240\u4EE5\uFF0C conect \u65B9\u6CD5\u7684\u5B8C\u6574 API \u5982\u4E0B</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki vp-code-dark"><code><span class="line"><span style="color:#4D9375;">import</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">connect</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">}</span><span style="color:#DBD7CAEE;"> </span><span style="color:#4D9375;">from</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7DAA;">&quot;</span><span style="color:#C98A7D;">react-redux</span><span style="color:#C98A7DAA;">&quot;</span><span style="color:#666666;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CB7676;">const</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">VisibleTodoList</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">=</span><span style="color:#DBD7CAEE;"> </span><span style="color:#80A665;">connect</span><span style="color:#666666;">(</span><span style="color:#BD976A;">mapStateToProps</span><span style="color:#666666;">,</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">mapDispatchToProps</span><span style="color:#666666;">)(</span><span style="color:#BD976A;">TodoList</span><span style="color:#666666;">);</span></span>
<span class="line"><span style="color:#758575DD;">// mapStateToProps\u548CmapDispatchToProps\u3002\u5B83\u4EEC\u5B9A\u4E49\u4E86 UI \u7EC4\u4EF6\u7684\u4E1A\u52A1\u903B\u8F91\u3002\u524D\u8005\u8D1F\u8D23\u8F93\u5165\u903B\u8F91\uFF0C\u5373\u5C06state\u6620\u5C04\u5230 UI \u7EC4\u4EF6\u7684\u53C2\u6570\uFF08props\uFF09\uFF0C\u540E\u8005\u8D1F\u8D23\u8F93\u51FA\u903B\u8F91\uFF0C\u5373\u5C06\u7528\u6237\u5BF9 UI \u7EC4\u4EF6\u7684\u64CD\u4F5C\u6620\u5C04\u6210 Action</span></span>
<span class="line"></span></code></pre><pre class="shiki vp-code-light"><code><span class="line"><span style="color:#1E754F;">import</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">connect</span><span style="color:#393A34;"> </span><span style="color:#999999;">}</span><span style="color:#393A34;"> </span><span style="color:#1E754F;">from</span><span style="color:#393A34;"> </span><span style="color:#B56959AA;">&quot;</span><span style="color:#B56959;">react-redux</span><span style="color:#B56959AA;">&quot;</span><span style="color:#999999;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#AB5959;">const</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">VisibleTodoList</span><span style="color:#393A34;"> </span><span style="color:#999999;">=</span><span style="color:#393A34;"> </span><span style="color:#59873A;">connect</span><span style="color:#999999;">(</span><span style="color:#B07D48;">mapStateToProps</span><span style="color:#999999;">,</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">mapDispatchToProps</span><span style="color:#999999;">)(</span><span style="color:#B07D48;">TodoList</span><span style="color:#999999;">);</span></span>
<span class="line"><span style="color:#A0ADA0;">// mapStateToProps\u548CmapDispatchToProps\u3002\u5B83\u4EEC\u5B9A\u4E49\u4E86 UI \u7EC4\u4EF6\u7684\u4E1A\u52A1\u903B\u8F91\u3002\u524D\u8005\u8D1F\u8D23\u8F93\u5165\u903B\u8F91\uFF0C\u5373\u5C06state\u6620\u5C04\u5230 UI \u7EC4\u4EF6\u7684\u53C2\u6570\uFF08props\uFF09\uFF0C\u540E\u8005\u8D1F\u8D23\u8F93\u51FA\u903B\u8F91\uFF0C\u5373\u5C06\u7528\u6237\u5BF9 UI \u7EC4\u4EF6\u7684\u64CD\u4F5C\u6620\u5C04\u6210 Action</span></span>
<span class="line"></span></code></pre></div><h2 id="mapstatetoprops" tabindex="-1">mapStateToProps() <a class="header-anchor" href="#mapstatetoprops" aria-hidden="true">#</a></h2><blockquote><p><code>mapStateToProps</code>\u662F\u4E00\u4E2A\u51FD\u6570\u3002\u5B83\u7684\u4F5C\u7528\u5C31\u662F\u50CF\u5B83\u7684\u540D\u5B57\u90A3\u6837\uFF0C<strong>\u5EFA\u7ACB\u4E00\u4E2A\u4ECE\uFF08\u5916\u90E8\u7684\uFF09<code>state</code>\u5BF9\u8C61\u5230\uFF08UI \u7EC4\u4EF6\u7684\uFF09<code>props</code>\u5BF9\u8C61\u7684\u6620\u5C04\u5173\u7CFB\u3002</strong></p><p>\u4F5C\u4E3A\u51FD\u6570\uFF0C<code>mapStateToProps</code>\u6267\u884C\u540E\u5E94\u8BE5\u8FD4\u56DE\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u91CC\u9762\u7684\u6BCF\u4E00\u4E2A\u952E\u503C\u5BF9\u5C31\u662F\u4E00\u4E2A\u6620\u5C04\u3002</p><p><code>mapStateToProps</code>\u7684\u7B2C\u4E00\u4E2A\u53C2\u6570\u603B\u662F<code>state</code>\u5BF9\u8C61\uFF0C\u8FD8\u53EF\u4EE5\u4F7F\u7528\u7B2C\u4E8C\u4E2A\u53C2\u6570\uFF0C\u4EE3\u8868\u5BB9\u5668\u7EC4\u4EF6\u7684<code>props</code>\u5BF9\u8C61\u3002</p></blockquote><div class="language-jsx"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki vp-code-dark"><code><span class="line"><span style="color:#CB7676;">const</span><span style="color:#DBD7CAEE;"> </span><span style="color:#80A665;">mapStateToProps</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">=</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">(</span><span style="color:#BD976A;">state</span><span style="color:#666666;">)</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">=&gt;</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#4D9375;">return</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#B8A965;">todos</span><span style="color:#666666;">:</span><span style="color:#DBD7CAEE;"> </span><span style="color:#80A665;">getVisibleTodos</span><span style="color:#666666;">(</span><span style="color:#BD976A;">state</span><span style="color:#666666;">.</span><span style="color:#BD976A;">todos</span><span style="color:#666666;">,</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">state</span><span style="color:#666666;">.</span><span style="color:#BD976A;">visibilityFilter</span><span style="color:#666666;">),</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#666666;">};</span></span>
<span class="line"><span style="color:#666666;">};</span></span>
<span class="line"><span style="color:#758575DD;">// mapStateToProps\u4F1A\u8BA2\u9605 Store\uFF0C\u6BCF\u5F53state\u66F4\u65B0\u7684\u65F6\u5019\uFF0C\u5C31\u4F1A\u81EA\u52A8\u6267\u884C\uFF0C\u91CD\u65B0\u8BA1\u7B97 UI \u7EC4\u4EF6\u7684\u53C2\u6570\uFF0C\u4ECE\u800C\u89E6\u53D1 UI \u7EC4\u4EF6\u7684\u91CD\u65B0\u6E32\u67D3</span></span>
<span class="line"></span></code></pre><pre class="shiki vp-code-light"><code><span class="line"><span style="color:#AB5959;">const</span><span style="color:#393A34;"> </span><span style="color:#59873A;">mapStateToProps</span><span style="color:#393A34;"> </span><span style="color:#999999;">=</span><span style="color:#393A34;"> </span><span style="color:#999999;">(</span><span style="color:#B07D48;">state</span><span style="color:#999999;">)</span><span style="color:#393A34;"> </span><span style="color:#999999;">=&gt;</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#1E754F;">return</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#998418;">todos</span><span style="color:#999999;">:</span><span style="color:#393A34;"> </span><span style="color:#59873A;">getVisibleTodos</span><span style="color:#999999;">(</span><span style="color:#B07D48;">state</span><span style="color:#999999;">.</span><span style="color:#B07D48;">todos</span><span style="color:#999999;">,</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">state</span><span style="color:#999999;">.</span><span style="color:#B07D48;">visibilityFilter</span><span style="color:#999999;">),</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#999999;">};</span></span>
<span class="line"><span style="color:#999999;">};</span></span>
<span class="line"><span style="color:#A0ADA0;">// mapStateToProps\u4F1A\u8BA2\u9605 Store\uFF0C\u6BCF\u5F53state\u66F4\u65B0\u7684\u65F6\u5019\uFF0C\u5C31\u4F1A\u81EA\u52A8\u6267\u884C\uFF0C\u91CD\u65B0\u8BA1\u7B97 UI \u7EC4\u4EF6\u7684\u53C2\u6570\uFF0C\u4ECE\u800C\u89E6\u53D1 UI \u7EC4\u4EF6\u7684\u91CD\u65B0\u6E32\u67D3</span></span>
<span class="line"></span></code></pre></div><h2 id="mapdispatchtoprops" tabindex="-1">mapDispatchToProps() <a class="header-anchor" href="#mapdispatchtoprops" aria-hidden="true">#</a></h2><blockquote><p><code>mapDispatchToProps</code>\u662F<code>connect</code>\u51FD\u6570\u7684\u7B2C\u4E8C\u4E2A\u53C2\u6570\uFF0C\u7528\u6765\u5EFA\u7ACB UI \u7EC4\u4EF6\u7684\u53C2\u6570\u5230<code>store.dispatch</code>\u65B9\u6CD5\u7684\u6620\u5C04\u3002</p><p>\u4E5F\u5C31\u662F\u8BF4\uFF0C\u5B83\u5B9A\u4E49\u4E86\u54EA\u4E9B\u7528\u6237\u7684\u64CD\u4F5C\u5E94\u8BE5\u5F53\u4F5C Action\uFF0C\u4F20\u7ED9 Store\u3002\u5B83\u53EF\u4EE5\u662F\u4E00\u4E2A\u51FD\u6570\uFF0C\u4E5F\u53EF\u4EE5\u662F\u4E00\u4E2A\u5BF9\u8C61\u3002</p><p>\u5982\u679C \u662F\u4E00\u4E2A\u51FD\u6570 \u4F1A\u6709\u4E24\u4E2A\u53C2\u6570\u3002 <code>dispatch</code> \u548C <code>ownProps</code>\uFF08\u5BB9\u5668\u7EC4\u4EF6\u7684<code>props</code>\u5BF9\u8C61\uFF09</p></blockquote><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki vp-code-dark"><code><span class="line"><span style="color:#758575DD;">// \u51FD\u6570 </span></span>
<span class="line"><span style="color:#CB7676;">const</span><span style="color:#DBD7CAEE;"> </span><span style="color:#80A665;">mapDispatchToProps</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">=</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">(</span><span style="color:#BD976A;">dispatch</span><span style="color:#666666;">,</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">ownProps</span><span style="color:#666666;">)</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">=&gt;</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#4D9375;">return</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#80A665;">onClick</span><span style="color:#666666;">:</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">()</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">=&gt;</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span></span>
<span class="line"><span style="color:#DBD7CAEE;">      </span><span style="color:#80A665;">dispatch</span><span style="color:#666666;">({</span><span style="color:#B8A965;">type</span><span style="color:#666666;">:</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7DAA;">&#39;</span><span style="color:#C98A7D;">SET_VISIBILITY_FILTER</span><span style="color:#C98A7DAA;">&#39;</span><span style="color:#666666;">,</span><span style="color:#DBD7CAEE;"> </span><span style="color:#B8A965;">filter</span><span style="color:#666666;">:</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">ownProps</span><span style="color:#666666;">.</span><span style="color:#BD976A;">filter</span><span style="color:#666666;">});</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#666666;">}</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#666666;">}</span></span>
<span class="line"><span style="color:#666666;">}</span></span>
<span class="line"><span style="color:#758575DD;">// \u5BF9\u8C61</span></span>
<span class="line"><span style="color:#CB7676;">const</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">mapDispatchToProps</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">=</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#80A665;">onClick</span><span style="color:#666666;">:</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">(</span><span style="color:#BD976A;">filter</span><span style="color:#666666;">)</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">=&gt;</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span><span style="color:#DBD7CAEE;"> </span><span style="color:#80A665;">type</span><span style="color:#666666;">:</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7DAA;">&#39;</span><span style="color:#C98A7D;">SET_VISIBILITY_FILTER</span><span style="color:#C98A7DAA;">&#39;</span><span style="color:#666666;">,</span><span style="color:#DBD7CAEE;"> </span><span style="color:#80A665;">filter</span><span style="color:#666666;">:</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">filter</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">}</span></span>
<span class="line"><span style="color:#666666;">}</span></span>
<span class="line"></span></code></pre><pre class="shiki vp-code-light"><code><span class="line"><span style="color:#A0ADA0;">// \u51FD\u6570 </span></span>
<span class="line"><span style="color:#AB5959;">const</span><span style="color:#393A34;"> </span><span style="color:#59873A;">mapDispatchToProps</span><span style="color:#393A34;"> </span><span style="color:#999999;">=</span><span style="color:#393A34;"> </span><span style="color:#999999;">(</span><span style="color:#B07D48;">dispatch</span><span style="color:#999999;">,</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">ownProps</span><span style="color:#999999;">)</span><span style="color:#393A34;"> </span><span style="color:#999999;">=&gt;</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#1E754F;">return</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#59873A;">onClick</span><span style="color:#999999;">:</span><span style="color:#393A34;"> </span><span style="color:#999999;">()</span><span style="color:#393A34;"> </span><span style="color:#999999;">=&gt;</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span></span>
<span class="line"><span style="color:#393A34;">      </span><span style="color:#59873A;">dispatch</span><span style="color:#999999;">({</span><span style="color:#998418;">type</span><span style="color:#999999;">:</span><span style="color:#393A34;"> </span><span style="color:#B56959AA;">&#39;</span><span style="color:#B56959;">SET_VISIBILITY_FILTER</span><span style="color:#B56959AA;">&#39;</span><span style="color:#999999;">,</span><span style="color:#393A34;"> </span><span style="color:#998418;">filter</span><span style="color:#999999;">:</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">ownProps</span><span style="color:#999999;">.</span><span style="color:#B07D48;">filter</span><span style="color:#999999;">});</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#999999;">}</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#999999;">}</span></span>
<span class="line"><span style="color:#999999;">}</span></span>
<span class="line"><span style="color:#A0ADA0;">// \u5BF9\u8C61</span></span>
<span class="line"><span style="color:#AB5959;">const</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">mapDispatchToProps</span><span style="color:#393A34;"> </span><span style="color:#999999;">=</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#59873A;">onClick</span><span style="color:#999999;">:</span><span style="color:#393A34;"> </span><span style="color:#999999;">(</span><span style="color:#B07D48;">filter</span><span style="color:#999999;">)</span><span style="color:#393A34;"> </span><span style="color:#999999;">=&gt;</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span><span style="color:#393A34;"> </span><span style="color:#59873A;">type</span><span style="color:#999999;">:</span><span style="color:#393A34;"> </span><span style="color:#B56959AA;">&#39;</span><span style="color:#B56959;">SET_VISIBILITY_FILTER</span><span style="color:#B56959AA;">&#39;</span><span style="color:#999999;">,</span><span style="color:#393A34;"> </span><span style="color:#59873A;">filter</span><span style="color:#999999;">:</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">filter</span><span style="color:#393A34;"> </span><span style="color:#999999;">}</span></span>
<span class="line"><span style="color:#999999;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="provider-\u7EC4\u4EF6" tabindex="-1"><strong>Provider \u7EC4\u4EF6</strong> <a class="header-anchor" href="#provider-\u7EC4\u4EF6" aria-hidden="true">#</a></h2><blockquote><p>connect \u65B9\u6CD5\u751F\u6210\u5BB9\u5668\u7EC4\u4EF6\u4EE5\u540E\uFF0C\u9700\u8981\u8BA9\u5BB9\u5668\u7EC4\u4EF6\u62FF\u5230 state \u5BF9\u8C61\uFF0C\u624D\u80FD\u751F\u6210 UI \u7EC4\u4EF6\u7684\u53C2\u6570\u3002 React-Redux \u63D0\u4F9B Provider \u7EC4\u4EF6\uFF0C\u53EF\u4EE5\u8BA9\u5BB9\u5668\u7EC4\u4EF6\u62FF\u5230 state\u3002</p></blockquote><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki vp-code-dark"><code><span class="line"><span style="color:#4D9375;">import</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">Provider</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">}</span><span style="color:#DBD7CAEE;"> </span><span style="color:#4D9375;">from</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7DAA;">&quot;</span><span style="color:#C98A7D;">react-redux</span><span style="color:#C98A7DAA;">&quot;</span><span style="color:#666666;">;</span></span>
<span class="line"><span style="color:#4D9375;">import</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">createStore</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">}</span><span style="color:#DBD7CAEE;"> </span><span style="color:#4D9375;">from</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7DAA;">&quot;</span><span style="color:#C98A7D;">redux</span><span style="color:#C98A7DAA;">&quot;</span><span style="color:#666666;">;</span></span>
<span class="line"><span style="color:#4D9375;">import</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">todoApp</span><span style="color:#DBD7CAEE;"> </span><span style="color:#4D9375;">from</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7DAA;">&quot;</span><span style="color:#C98A7D;">./reducers</span><span style="color:#C98A7DAA;">&quot;</span><span style="color:#666666;">;</span></span>
<span class="line"><span style="color:#4D9375;">import</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">App</span><span style="color:#DBD7CAEE;"> </span><span style="color:#4D9375;">from</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7DAA;">&quot;</span><span style="color:#C98A7D;">./components/App</span><span style="color:#C98A7DAA;">&quot;</span><span style="color:#666666;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CB7676;">let</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">store</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">=</span><span style="color:#DBD7CAEE;"> </span><span style="color:#80A665;">createStore</span><span style="color:#666666;">(</span><span style="color:#BD976A;">todoApp</span><span style="color:#666666;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#80A665;">render</span><span style="color:#666666;">(</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#666666;">&lt;</span><span style="color:#B8A965;">Provider</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">store</span><span style="color:#666666;">={</span><span style="color:#BD976A;">store</span><span style="color:#666666;">}&gt;</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  	</span><span style="color:#666666;">&lt;</span><span style="color:#B8A965;">App</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">/&gt;</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#666666;">&lt;/</span><span style="color:#B8A965;">Provider</span><span style="color:#666666;">&gt;,</span></span>
<span class="line"><span style="color:#DBD7CAEE;">	</span><span style="color:#BD976A;">document</span><span style="color:#666666;">.</span><span style="color:#80A665;">getElementById</span><span style="color:#666666;">(</span><span style="color:#C98A7DAA;">&quot;</span><span style="color:#C98A7D;">root</span><span style="color:#C98A7DAA;">&quot;</span><span style="color:#666666;">)</span></span>
<span class="line"><span style="color:#666666;">);</span></span>
<span class="line"><span style="color:#758575DD;">// Provider\u5728\u6839\u7EC4\u4EF6\u5916\u9762\u5305\u4E86\u4E00\u5C42\uFF0C\u8FD9\u6837\u4E00\u6765\uFF0CApp\u7684\u6240\u6709\u5B50\u7EC4\u4EF6\u5C31\u9ED8\u8BA4\u90FD\u53EF\u4EE5\u62FF\u5230state\u4E86</span></span>
<span class="line"></span></code></pre><pre class="shiki vp-code-light"><code><span class="line"><span style="color:#1E754F;">import</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">Provider</span><span style="color:#393A34;"> </span><span style="color:#999999;">}</span><span style="color:#393A34;"> </span><span style="color:#1E754F;">from</span><span style="color:#393A34;"> </span><span style="color:#B56959AA;">&quot;</span><span style="color:#B56959;">react-redux</span><span style="color:#B56959AA;">&quot;</span><span style="color:#999999;">;</span></span>
<span class="line"><span style="color:#1E754F;">import</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">createStore</span><span style="color:#393A34;"> </span><span style="color:#999999;">}</span><span style="color:#393A34;"> </span><span style="color:#1E754F;">from</span><span style="color:#393A34;"> </span><span style="color:#B56959AA;">&quot;</span><span style="color:#B56959;">redux</span><span style="color:#B56959AA;">&quot;</span><span style="color:#999999;">;</span></span>
<span class="line"><span style="color:#1E754F;">import</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">todoApp</span><span style="color:#393A34;"> </span><span style="color:#1E754F;">from</span><span style="color:#393A34;"> </span><span style="color:#B56959AA;">&quot;</span><span style="color:#B56959;">./reducers</span><span style="color:#B56959AA;">&quot;</span><span style="color:#999999;">;</span></span>
<span class="line"><span style="color:#1E754F;">import</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">App</span><span style="color:#393A34;"> </span><span style="color:#1E754F;">from</span><span style="color:#393A34;"> </span><span style="color:#B56959AA;">&quot;</span><span style="color:#B56959;">./components/App</span><span style="color:#B56959AA;">&quot;</span><span style="color:#999999;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#AB5959;">let</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">store</span><span style="color:#393A34;"> </span><span style="color:#999999;">=</span><span style="color:#393A34;"> </span><span style="color:#59873A;">createStore</span><span style="color:#999999;">(</span><span style="color:#B07D48;">todoApp</span><span style="color:#999999;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#59873A;">render</span><span style="color:#999999;">(</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#999999;">&lt;</span><span style="color:#998418;">Provider</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">store</span><span style="color:#999999;">={</span><span style="color:#B07D48;">store</span><span style="color:#999999;">}&gt;</span></span>
<span class="line"><span style="color:#393A34;">  	</span><span style="color:#999999;">&lt;</span><span style="color:#998418;">App</span><span style="color:#393A34;"> </span><span style="color:#999999;">/&gt;</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#999999;">&lt;/</span><span style="color:#998418;">Provider</span><span style="color:#999999;">&gt;,</span></span>
<span class="line"><span style="color:#393A34;">	</span><span style="color:#B07D48;">document</span><span style="color:#999999;">.</span><span style="color:#59873A;">getElementById</span><span style="color:#999999;">(</span><span style="color:#B56959AA;">&quot;</span><span style="color:#B56959;">root</span><span style="color:#B56959AA;">&quot;</span><span style="color:#999999;">)</span></span>
<span class="line"><span style="color:#999999;">);</span></span>
<span class="line"><span style="color:#A0ADA0;">// Provider\u5728\u6839\u7EC4\u4EF6\u5916\u9762\u5305\u4E86\u4E00\u5C42\uFF0C\u8FD9\u6837\u4E00\u6765\uFF0CApp\u7684\u6240\u6709\u5B50\u7EC4\u4EF6\u5C31\u9ED8\u8BA4\u90FD\u53EF\u4EE5\u62FF\u5230state\u4E86</span></span>
<span class="line"></span></code></pre></div>`,28),e=[l];function t(c,r,y,A,i,D){return n(),a("div",null,e)}const E=s(o,[["render",t]]);export{B as __pageData,E as default};
