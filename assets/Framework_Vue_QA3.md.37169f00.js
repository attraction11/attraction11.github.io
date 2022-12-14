import{_ as s,c as a,o as n,a as l}from"./app.9fd00f02.js";const B=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"Framework/Vue/QA3.md"}'),o={name:"Framework/Vue/QA3.md"},p=l(`<h4 id="_1\u3001vue-3-0-\u6027\u80FD\u63D0\u5347\u4E3B\u8981\u662F\u901A\u8FC7\u54EA\u51E0\u65B9\u9762\u4F53\u73B0\u7684" tabindex="-1">1\u3001Vue 3.0 \u6027\u80FD\u63D0\u5347\u4E3B\u8981\u662F\u901A\u8FC7\u54EA\u51E0\u65B9\u9762\u4F53\u73B0\u7684\uFF1F <a class="header-anchor" href="#_1\u3001vue-3-0-\u6027\u80FD\u63D0\u5347\u4E3B\u8981\u662F\u901A\u8FC7\u54EA\u51E0\u65B9\u9762\u4F53\u73B0\u7684" aria-hidden="true">#</a></h4><ul><li>\u54CD\u5E94\u5F0F\u7CFB\u7EDF\u5347\u7EA7\uFF1A<code>Vue2.0</code>\u662F\u5728\u6570\u636E\u521D\u59CB\u5316\u4E4B\u540E\uFF0C\u904D\u5386\u5BF9\u8C61\u7684\u5C5E\u6027\u901A\u8FC7<code>Object.defineProperty</code>\u76D1\u542C\u5C5E\u6027\u7684\u53D8\u5316\u3002<code>vue3.0</code>\u91C7\u7528<code>Proxy</code>\u4EE3\u7406\u5BF9\u8C61\u62E6\u622A\u5BF9\u8C61\u7684\u8BBF\u95EE\uFF0C\u53EF\u4EE5\u76D1\u542C\u52A8\u6001\u65B0\u589E\u7684\u5C5E\u6027\u3001\u5220\u9664\u7684\u5C5E\u6027\u3001\u6570\u7EC4\u7684\u7D22\u5F15\u548C length \u5C5E\u6027\u3002</li><li>\u7F16\u8BD1\u4F18\u5316\uFF1A<code>Vue2.0</code>\u4E2D\u6E32\u67D3\u7684\u6700\u5C0F\u5355\u4F4D\u662F\u7EC4\u4EF6\uFF0C\u4F1A\u6807\u8BB0\u9759\u6001\u6839\u8282\u70B9\uFF0C\u4F18\u5316<code>diff</code>\u7684\u8FC7\u7A0B\uFF0C\u4F46\u9759\u6001\u8282\u70B9\u8FD8\u8981\u901A\u8FC7<code>diff</code>\u3002<code>Vue2.0</code>\u4E2D\u4F1A\u6807\u8BB0\u6240\u6709\u7684\u9759\u6001\u8282\u70B9\uFF0C<code>diff</code>\u7684\u8FC7\u7A0B\u53EA\u9700\u8981\u5BF9\u6BD4\u52A8\u6001\u8282\u70B9\u5185\u5BB9\u3002 <ul><li><code>Fragments</code>(\u7247\u6BB5)\uFF1A\u7EC4\u4EF6\u5185\u652F\u6301\u591A\u4E2A\u540C\u7EA7\u7684\u6839\u6807\u7B7E</li><li>\u9759\u6001\u63D0\u5347\uFF1A\u6807\u7B7E\u4E2D\u4EC5\u4EC5\u662F\u7EAF\u6587\u672C\u7684\u8282\u70B9,\u4F1A\u63D0\u5347\u5230<code>render</code>\u51FD\u6570\u5916\uFF0C\u518D\u6B21<code>render</code>\u65E0\u987B\u518D\u6B21\u521B\u5EFA</li><li>Patch flag: \u6807\u8BB0\u4E0D\u540C\u7C7B\u578B\u7684\u8282\u70B9\uFF08\u5982\u52A8\u6001\u6587\u672C\u8282\u70B9\u3001\u6709\u52A8\u6001\u5C5E\u6027\u7684\u8282\u70B9\uFF09\uFF0C\u4F18\u5316<code>diff</code>\u7684\u8FC7\u7A0B</li><li>\u7F13\u5B58\u4E8B\u4EF6\u5904\u7406\u51FD\u6570\u3001\u7EC4\u4EF6\u6309\u9700\u52A8\u6001\u5BFC\u5165</li></ul></li><li>\u6E90\u7801\u4F53\u79EF\u4F18\u5316 <ul><li><code>Vue3.0</code>\u4E2D\u79FB\u9664\u4E86\u4E00\u4E9B\u4E0D\u5E38\u7528<code>API</code>,\u5982\uFF1A<code>inline-template</code>\u3001<code>filter</code></li><li><code>Tree-shaking</code>(\u4F9D\u8D56<code>ESmodule</code>\u7684\u6A21\u5757\u5316\u89C4\u8303)</li></ul></li></ul><h4 id="_2\u3001vue-3-0-\u6240\u91C7\u7528\u7684-composition-api-\u4E0E-vue-2-x-\u4F7F\u7528\u7684-options-api-\u6709\u4EC0\u4E48\u533A\u522B" tabindex="-1">2\u3001Vue 3.0 \u6240\u91C7\u7528\u7684 Composition Api \u4E0E Vue 2.x \u4F7F\u7528\u7684 Options Api \u6709\u4EC0\u4E48\u533A\u522B\uFF1F <a class="header-anchor" href="#_2\u3001vue-3-0-\u6240\u91C7\u7528\u7684-composition-api-\u4E0E-vue-2-x-\u4F7F\u7528\u7684-options-api-\u6709\u4EC0\u4E48\u533A\u522B" aria-hidden="true">#</a></h4><ul><li><code>Vue2.0</code>\u4E2D\u7684<code>Options API</code>\u5305\u542B\u63CF\u8FF0\u7EC4\u4EF6\u9009\u9879(<code>data</code>\u3001<code>methods</code>\u7B49)\u7684\u5BF9\u8C61\uFF0C\u5728\u63CF\u8FF0\u590D\u6742\u7EC4\u4EF6\u65F6\uFF0C\u540C\u4E00\u529F\u80FD\u7684\u903B\u8F91\u88AB\u62C6\u5206\u5230\u4E0D\u540C\u7684\u9009\u9879\u4E2D\uFF0C\u968F\u7740\u7248\u672C\u7684\u8FED\u4EE3\u96BE\u4EE5\u7EF4\u62A4</li><li><code>Vue3.0</code>\u4E2D\u7684<code>Compositon API</code>\u65B0\u589E\u4E00\u7EC4\u57FA\u4E8E\u51FD\u6570\u7684<code>API</code>\uFF0C\u53EF\u4EE5\u66F4\u52A0\u7075\u6D3B\u7684\u7EC4\u7EC7\u540C\u4E00\u4E2A\u529F\u80FD\u7684\u4EE3\u7801\u7247\u6BB5</li><li><code>Vue3.0</code>\u4E2D\u7684<code>setup(props, context){}</code>\u5728\u5B9E\u4F8B\u88AB\u521D\u59CB\u5316\u4E4B\u524D\u6267\u884C\uFF0C\u6545\u5728<code>setup</code>\u4E2D\u7684<code>this</code>\u4E0A\u6CA1\u6709\u4EFB\u4F55\u4E1C\u897F</li></ul><h4 id="_3\u3001proxy-\u76F8\u5BF9\u4E8E-object-defineproperty-\u6709\u54EA\u4E9B\u4F18\u70B9" tabindex="-1">3\u3001Proxy \u76F8\u5BF9\u4E8E Object.defineProperty \u6709\u54EA\u4E9B\u4F18\u70B9\uFF1F <a class="header-anchor" href="#_3\u3001proxy-\u76F8\u5BF9\u4E8E-object-defineproperty-\u6709\u54EA\u4E9B\u4F18\u70B9" aria-hidden="true">#</a></h4><ul><li><code>Proxy</code>\u76F4\u63A5\u76D1\u542C\u5BF9\u8C61\u800C\u975E\u5C5E\u6027,\u6709\u591A\u8FBE<code>13</code>\u79CD\u62E6\u622A\u65B9\u6CD5,\u5982 <code>apply</code>\u3001<code>ownKeys</code>\u3001<code>has</code> \u7B49\u7B49,\u8FD9\u662F<code>Object.defineProperty</code>\u4E0D\u5177\u5907\u7684</li><li>\u591A\u5C42\u5C5E\u6027\u5D4C\u5957\uFF0C\u5728\u8BBF\u95EE\u5C5E\u6027\u8FC7\u7A0B\u4E2D\u5904\u7406\u4E0B\u4E00\u7EA7\u5C5E\u6027</li><li>\u9ED8\u8BA4\u76D1\u542C\u52A8\u6001\u6DFB\u52A0\u7684\u5C5E\u6027</li><li>\u9ED8\u8BA4\u76D1\u542C\u5C5E\u6027\u7684\u5220\u9664\u64CD\u4F5C</li><li>\u9ED8\u8BA4\u76D1\u542C\u6570\u7EC4\u7D22\u5F15\u548C<code>length</code>\u5C5E\u6027</li></ul><h4 id="_4\u3001vue-3-0-\u5728\u7F16\u8BD1\u65B9\u9762\u6709\u54EA\u4E9B\u4F18\u5316" tabindex="-1">4\u3001Vue 3.0 \u5728\u7F16\u8BD1\u65B9\u9762\u6709\u54EA\u4E9B\u4F18\u5316\uFF1F <a class="header-anchor" href="#_4\u3001vue-3-0-\u5728\u7F16\u8BD1\u65B9\u9762\u6709\u54EA\u4E9B\u4F18\u5316" aria-hidden="true">#</a></h4><ul><li><code>Vue2.0</code>\u4E2D\u6E32\u67D3\u7684\u6700\u5C0F\u5355\u4F4D\u662F\u7EC4\u4EF6\uFF0C\u4F1A\u6807\u8BB0\u9759\u6001\u6839\u8282\u70B9\uFF0C\u4F18\u5316<code>diff</code>\u7684\u8FC7\u7A0B\uFF0C\u4F46\u9759\u6001\u8282\u70B9\u8FD8\u8981\u901A\u8FC7<code>diff</code>\u3002<code>Vue2.0</code>\u4E2D\u4F1A\u6807\u8BB0\u6240\u6709\u7684\u9759\u6001\u8282\u70B9\uFF0C<code>diff</code>\u7684\u8FC7\u7A0B\u53EA\u9700\u8981\u5BF9\u6BD4\u52A8\u6001\u8282\u70B9\u5185\u5BB9\u3002</li><li><code>Fragments</code>(\u7247\u6BB5)\uFF1A\u7EC4\u4EF6\u5185\u652F\u6301\u591A\u4E2A\u540C\u7EA7\u7684\u6839\u6807\u7B7E</li><li>\u9759\u6001\u63D0\u5347\uFF1A\u6807\u7B7E\u4E2D\u4EC5\u4EC5\u662F\u7EAF\u6587\u672C\u7684\u8282\u70B9,\u4F1A\u63D0\u5347\u5230<code>render</code>\u51FD\u6570\u5916\uFF0C\u518D\u6B21<code>render</code>\u65E0\u987B\u518D\u6B21\u521B\u5EFA</li><li>Patch flag: \u6807\u8BB0\u4E0D\u540C\u7C7B\u578B\u7684\u8282\u70B9\uFF08\u5982\u52A8\u6001\u6587\u672C\u8282\u70B9\u3001\u6709\u52A8\u6001\u5C5E\u6027\u7684\u8282\u70B9\uFF09\uFF0C\u4F18\u5316<code>diff</code>\u7684\u8FC7\u7A0B</li><li>\u7F13\u5B58\u4E8B\u4EF6\u5904\u7406\u51FD\u6570\u3001\u7EC4\u4EF6\u6309\u9700\u52A8\u6001\u5BFC\u5165</li></ul><h4 id="_5\u3001vue-js-3-0-\u54CD\u5E94\u5F0F\u7CFB\u7EDF\u7684\u5B9E\u73B0\u539F\u7406" tabindex="-1">5\u3001Vue.js 3.0 \u54CD\u5E94\u5F0F\u7CFB\u7EDF\u7684\u5B9E\u73B0\u539F\u7406\uFF1F <a class="header-anchor" href="#_5\u3001vue-js-3-0-\u54CD\u5E94\u5F0F\u7CFB\u7EDF\u7684\u5B9E\u73B0\u539F\u7406" aria-hidden="true">#</a></h4><ul><li><code>Vue3.0</code>\u4F7F\u7528<code>Proxy</code>\u5BF9\u8C61\u91CD\u5199\u54CD\u5E94\u5F0F\u7CFB\u7EDF</li><li><code>Proxy</code>\u4EE3\u7406\u62E6\u622A: - <code>reactive</code>\u51FD\u6570\u6267\u884C\uFF0C\u4F1A\u5C06\u4F20\u5165\u7684<code>target</code>\u5BF9\u8C61\u901A\u8FC7<code>Proxy</code>\u5305\u88C5\uFF0C\u62E6\u622A\u5B83\u7684<code>get</code>\uFF0C<code>set</code>\u7B49\uFF0C\u5E76\u5C06\u4EE3\u7406\u7684<code>target</code>\u7F13\u5B58\u5230<code>targetMap</code>\uFF0C<code>targetMap.set(target, new Map())</code>\u3002 \u4EE3\u7406\u7684<code>get</code>\u7684\u65F6\u5019\u4F1A\u8C03\u7528\u4E00\u4E2A<code>track</code>\u51FD\u6570\uFF0C\u800C<code>set</code>\u4F1A\u8C03\u7528\u4E00\u4E2A<code>triger</code>\u51FD\u6570\u3002\u5206\u522B\u5BF9\u5E94\u4F9D\u8D56\u6536\u96C6\u548C\u89E6\u53D1\u66F4\u65B0\u3002</li></ul><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki vp-code-dark"><code><span class="line"><span style="color:#4D9375;">export</span><span style="color:#DBD7CAEE;"> </span><span style="color:#CB7676;">function</span><span style="color:#DBD7CAEE;"> </span><span style="color:#80A665;">reactive</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">(</span><span style="color:#BD976A;">target</span><span style="color:#666666;">)</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#4D9375;">if</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">(</span><span style="color:#CB7676;">!</span><span style="color:#80A665;">isObject</span><span style="color:#666666;">(</span><span style="color:#BD976A;">target</span><span style="color:#666666;">))</span><span style="color:#DBD7CAEE;"> </span><span style="color:#4D9375;">return</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">target</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#CB7676;">const</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">handler</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">=</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#80A665;">get</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">(</span><span style="color:#BD976A;">target</span><span style="color:#666666;">,</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">key</span><span style="color:#666666;">,</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">receiver</span><span style="color:#666666;">)</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span></span>
<span class="line"><span style="color:#666666;">      </span><span style="color:#758575DD;">// \u6536\u96C6\u4F9D\u8D56</span></span>
<span class="line"><span style="color:#DBD7CAEE;">      </span><span style="color:#80A665;">track</span><span style="color:#666666;">(</span><span style="color:#BD976A;">target</span><span style="color:#666666;">,</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">key</span><span style="color:#666666;">)</span></span>
<span class="line"><span style="color:#DBD7CAEE;">      </span><span style="color:#CB7676;">const</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">result</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">=</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">Reflect</span><span style="color:#666666;">.</span><span style="color:#80A665;">get</span><span style="color:#666666;">(</span><span style="color:#BD976A;">target</span><span style="color:#666666;">,</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">key</span><span style="color:#666666;">,</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">receiver</span><span style="color:#666666;">)</span></span>
<span class="line"><span style="color:#DBD7CAEE;">      </span><span style="color:#4D9375;">return</span><span style="color:#DBD7CAEE;"> </span><span style="color:#80A665;">convert</span><span style="color:#666666;">(</span><span style="color:#BD976A;">result</span><span style="color:#666666;">)</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#666666;">},</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#80A665;">set</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">(</span><span style="color:#BD976A;">target</span><span style="color:#666666;">,</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">key</span><span style="color:#666666;">,</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">value</span><span style="color:#666666;">,</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">receiver</span><span style="color:#666666;">)</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span></span>
<span class="line"><span style="color:#DBD7CAEE;">      </span><span style="color:#CB7676;">const</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">oldValue</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">=</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">Reflect</span><span style="color:#666666;">.</span><span style="color:#80A665;">get</span><span style="color:#666666;">(</span><span style="color:#BD976A;">target</span><span style="color:#666666;">,</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">key</span><span style="color:#666666;">,</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">receiver</span><span style="color:#666666;">)</span></span>
<span class="line"><span style="color:#DBD7CAEE;">      </span><span style="color:#CB7676;">let</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">result</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">=</span><span style="color:#DBD7CAEE;"> </span><span style="color:#4D9375;">true</span></span>
<span class="line"><span style="color:#DBD7CAEE;">      </span><span style="color:#4D9375;">if</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">(</span><span style="color:#BD976A;">oldValue</span><span style="color:#DBD7CAEE;"> </span><span style="color:#CB7676;">!==</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">value</span><span style="color:#666666;">)</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span></span>
<span class="line"><span style="color:#DBD7CAEE;">        </span><span style="color:#BD976A;">result</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">=</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">Reflect</span><span style="color:#666666;">.</span><span style="color:#80A665;">set</span><span style="color:#666666;">(</span><span style="color:#BD976A;">target</span><span style="color:#666666;">,</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">key</span><span style="color:#666666;">,</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">value</span><span style="color:#666666;">,</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">receiver</span><span style="color:#666666;">)</span></span>
<span class="line"><span style="color:#666666;">        </span><span style="color:#758575DD;">// \u89E6\u53D1\u66F4\u65B0</span></span>
<span class="line"><span style="color:#DBD7CAEE;">        </span><span style="color:#80A665;">trigger</span><span style="color:#666666;">(</span><span style="color:#BD976A;">target</span><span style="color:#666666;">,</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">key</span><span style="color:#666666;">)</span></span>
<span class="line"><span style="color:#DBD7CAEE;">      </span><span style="color:#666666;">}</span></span>
<span class="line"><span style="color:#DBD7CAEE;">      </span><span style="color:#4D9375;">return</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">result</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#666666;">},</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#80A665;">deleteProperty</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">(</span><span style="color:#BD976A;">target</span><span style="color:#666666;">,</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">key</span><span style="color:#666666;">)</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span></span>
<span class="line"><span style="color:#DBD7CAEE;">      </span><span style="color:#CB7676;">const</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">hadKey</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">=</span><span style="color:#DBD7CAEE;"> </span><span style="color:#80A665;">hasOwn</span><span style="color:#666666;">(</span><span style="color:#BD976A;">target</span><span style="color:#666666;">,</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">key</span><span style="color:#666666;">)</span></span>
<span class="line"><span style="color:#DBD7CAEE;">      </span><span style="color:#CB7676;">const</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">result</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">=</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">Reflect</span><span style="color:#666666;">.</span><span style="color:#80A665;">deleteProperty</span><span style="color:#666666;">(</span><span style="color:#BD976A;">target</span><span style="color:#666666;">,</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">key</span><span style="color:#666666;">)</span></span>
<span class="line"><span style="color:#DBD7CAEE;">      </span><span style="color:#4D9375;">if</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">(</span><span style="color:#BD976A;">hadKey</span><span style="color:#DBD7CAEE;"> </span><span style="color:#CB7676;">&amp;&amp;</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">result</span><span style="color:#666666;">)</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span></span>
<span class="line"><span style="color:#666666;">        </span><span style="color:#758575DD;">// \u89E6\u53D1\u66F4\u65B0</span></span>
<span class="line"><span style="color:#DBD7CAEE;">        </span><span style="color:#80A665;">trigger</span><span style="color:#666666;">(</span><span style="color:#BD976A;">target</span><span style="color:#666666;">,</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">key</span><span style="color:#666666;">)</span></span>
<span class="line"><span style="color:#DBD7CAEE;">      </span><span style="color:#666666;">}</span></span>
<span class="line"><span style="color:#DBD7CAEE;">      </span><span style="color:#4D9375;">return</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">result</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#666666;">}</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#666666;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#4D9375;">return</span><span style="color:#DBD7CAEE;"> </span><span style="color:#CB7676;">new</span><span style="color:#DBD7CAEE;"> </span><span style="color:#80A665;">Proxy</span><span style="color:#666666;">(</span><span style="color:#BD976A;">target</span><span style="color:#666666;">,</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">handler</span><span style="color:#666666;">)</span></span>
<span class="line"></span></code></pre><pre class="shiki vp-code-light"><code><span class="line"><span style="color:#1E754F;">export</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">function</span><span style="color:#393A34;"> </span><span style="color:#59873A;">reactive</span><span style="color:#393A34;"> </span><span style="color:#999999;">(</span><span style="color:#B07D48;">target</span><span style="color:#999999;">)</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#1E754F;">if</span><span style="color:#393A34;"> </span><span style="color:#999999;">(</span><span style="color:#AB5959;">!</span><span style="color:#59873A;">isObject</span><span style="color:#999999;">(</span><span style="color:#B07D48;">target</span><span style="color:#999999;">))</span><span style="color:#393A34;"> </span><span style="color:#1E754F;">return</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">target</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#AB5959;">const</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">handler</span><span style="color:#393A34;"> </span><span style="color:#999999;">=</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#59873A;">get</span><span style="color:#393A34;"> </span><span style="color:#999999;">(</span><span style="color:#B07D48;">target</span><span style="color:#999999;">,</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">key</span><span style="color:#999999;">,</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">receiver</span><span style="color:#999999;">)</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span></span>
<span class="line"><span style="color:#999999;">      </span><span style="color:#A0ADA0;">// \u6536\u96C6\u4F9D\u8D56</span></span>
<span class="line"><span style="color:#393A34;">      </span><span style="color:#59873A;">track</span><span style="color:#999999;">(</span><span style="color:#B07D48;">target</span><span style="color:#999999;">,</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">key</span><span style="color:#999999;">)</span></span>
<span class="line"><span style="color:#393A34;">      </span><span style="color:#AB5959;">const</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">result</span><span style="color:#393A34;"> </span><span style="color:#999999;">=</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">Reflect</span><span style="color:#999999;">.</span><span style="color:#59873A;">get</span><span style="color:#999999;">(</span><span style="color:#B07D48;">target</span><span style="color:#999999;">,</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">key</span><span style="color:#999999;">,</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">receiver</span><span style="color:#999999;">)</span></span>
<span class="line"><span style="color:#393A34;">      </span><span style="color:#1E754F;">return</span><span style="color:#393A34;"> </span><span style="color:#59873A;">convert</span><span style="color:#999999;">(</span><span style="color:#B07D48;">result</span><span style="color:#999999;">)</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#999999;">},</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#59873A;">set</span><span style="color:#393A34;"> </span><span style="color:#999999;">(</span><span style="color:#B07D48;">target</span><span style="color:#999999;">,</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">key</span><span style="color:#999999;">,</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">value</span><span style="color:#999999;">,</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">receiver</span><span style="color:#999999;">)</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span></span>
<span class="line"><span style="color:#393A34;">      </span><span style="color:#AB5959;">const</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">oldValue</span><span style="color:#393A34;"> </span><span style="color:#999999;">=</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">Reflect</span><span style="color:#999999;">.</span><span style="color:#59873A;">get</span><span style="color:#999999;">(</span><span style="color:#B07D48;">target</span><span style="color:#999999;">,</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">key</span><span style="color:#999999;">,</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">receiver</span><span style="color:#999999;">)</span></span>
<span class="line"><span style="color:#393A34;">      </span><span style="color:#AB5959;">let</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">result</span><span style="color:#393A34;"> </span><span style="color:#999999;">=</span><span style="color:#393A34;"> </span><span style="color:#1E754F;">true</span></span>
<span class="line"><span style="color:#393A34;">      </span><span style="color:#1E754F;">if</span><span style="color:#393A34;"> </span><span style="color:#999999;">(</span><span style="color:#B07D48;">oldValue</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">!==</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">value</span><span style="color:#999999;">)</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span></span>
<span class="line"><span style="color:#393A34;">        </span><span style="color:#B07D48;">result</span><span style="color:#393A34;"> </span><span style="color:#999999;">=</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">Reflect</span><span style="color:#999999;">.</span><span style="color:#59873A;">set</span><span style="color:#999999;">(</span><span style="color:#B07D48;">target</span><span style="color:#999999;">,</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">key</span><span style="color:#999999;">,</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">value</span><span style="color:#999999;">,</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">receiver</span><span style="color:#999999;">)</span></span>
<span class="line"><span style="color:#999999;">        </span><span style="color:#A0ADA0;">// \u89E6\u53D1\u66F4\u65B0</span></span>
<span class="line"><span style="color:#393A34;">        </span><span style="color:#59873A;">trigger</span><span style="color:#999999;">(</span><span style="color:#B07D48;">target</span><span style="color:#999999;">,</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">key</span><span style="color:#999999;">)</span></span>
<span class="line"><span style="color:#393A34;">      </span><span style="color:#999999;">}</span></span>
<span class="line"><span style="color:#393A34;">      </span><span style="color:#1E754F;">return</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">result</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#999999;">},</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#59873A;">deleteProperty</span><span style="color:#393A34;"> </span><span style="color:#999999;">(</span><span style="color:#B07D48;">target</span><span style="color:#999999;">,</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">key</span><span style="color:#999999;">)</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span></span>
<span class="line"><span style="color:#393A34;">      </span><span style="color:#AB5959;">const</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">hadKey</span><span style="color:#393A34;"> </span><span style="color:#999999;">=</span><span style="color:#393A34;"> </span><span style="color:#59873A;">hasOwn</span><span style="color:#999999;">(</span><span style="color:#B07D48;">target</span><span style="color:#999999;">,</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">key</span><span style="color:#999999;">)</span></span>
<span class="line"><span style="color:#393A34;">      </span><span style="color:#AB5959;">const</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">result</span><span style="color:#393A34;"> </span><span style="color:#999999;">=</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">Reflect</span><span style="color:#999999;">.</span><span style="color:#59873A;">deleteProperty</span><span style="color:#999999;">(</span><span style="color:#B07D48;">target</span><span style="color:#999999;">,</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">key</span><span style="color:#999999;">)</span></span>
<span class="line"><span style="color:#393A34;">      </span><span style="color:#1E754F;">if</span><span style="color:#393A34;"> </span><span style="color:#999999;">(</span><span style="color:#B07D48;">hadKey</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">&amp;&amp;</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">result</span><span style="color:#999999;">)</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span></span>
<span class="line"><span style="color:#999999;">        </span><span style="color:#A0ADA0;">// \u89E6\u53D1\u66F4\u65B0</span></span>
<span class="line"><span style="color:#393A34;">        </span><span style="color:#59873A;">trigger</span><span style="color:#999999;">(</span><span style="color:#B07D48;">target</span><span style="color:#999999;">,</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">key</span><span style="color:#999999;">)</span></span>
<span class="line"><span style="color:#393A34;">      </span><span style="color:#999999;">}</span></span>
<span class="line"><span style="color:#393A34;">      </span><span style="color:#1E754F;">return</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">result</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#999999;">}</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#999999;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#1E754F;">return</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">new</span><span style="color:#393A34;"> </span><span style="color:#59873A;">Proxy</span><span style="color:#999999;">(</span><span style="color:#B07D48;">target</span><span style="color:#999999;">,</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">handler</span><span style="color:#999999;">)</span></span>
<span class="line"></span></code></pre></div><ul><li>\u4F9D\u8D56\u6536\u96C6\u548C\u89E6\u53D1\u66F4\u65B0: <ul><li>\u7EC4\u4EF6\u5728<code>render</code>\u9636\u6BB5\uFF0C\u89C6\u56FE\u4F1A\u8BFB\u53D6\u6570\u636E\u5BF9\u8C61\u4E0A\u7684\u503C\u8FDB\u884C\u6E32\u67D3\uFF0C\u6B64\u65F6\u4FBF\u89E6\u53D1\u4E86<code>Proxy</code>\u7684<code>get</code>\uFF0C\u7531\u6B64\u89E6\u53D1\u5BF9\u5E94\u7684<code>track</code>\u51FD\u6570\uFF0C\u8BB0\u5F55\u4E0B\u4E86\u5BF9\u5E94\u7684<code>ReactiveEffect</code>\uFF0C\u4E5F\u5C31\u662F\u4F9D\u8D56\u6536\u96C6\u3002</li><li><code>ReactiveEffect</code>\u5176\u5B9E\u5C31\u53EF\u4EE5\u770B\u4F5C\u662F\u7EC4\u4EF6\u7684\u66F4\u65B0\uFF08<code>mount</code>\u662F\u7279\u6B8A\u7684<code>update</code>\uFF09\uFF0C\u6570\u636E\u7684\u53D8\u66F4\u89E6\u53D1<code>trigger</code>\uFF0C<code>trigger</code>\u904D\u5386\u8C03\u7528<code>track</code>\u6536\u96C6\u7684\u5BF9\u5E94\u7684\u6570\u636E\u7684<code>ReactiveEffect</code>\uFF0C\u4E5F\u5C31\u662F\u5BF9\u5E94\u6709\u5173\u8054\u7684\u7EC4\u4EF6\u7684\u66F4\u65B0\u3002<code>trigger</code>\u89E6\u53D1\u7684\u7EC4\u4EF6\u7684\u66F4\u65B0\uFF0C\u5728<code>render</code>\u9636\u6BB5\u53C8\u89E6\u53D1\u4E86\u65B0\u4E00\u8F6E\u7684<code>track</code>\u4F9D\u8D56\u6536\u96C6\uFF0C\u66F4\u65B0\u4F9D\u8D56</li></ul></li></ul>`,12),e=[p];function c(t,r,y,D,A,d){return n(),a("div",null,e)}const E=s(o,[["render",c]]);export{B as __pageData,E as default};