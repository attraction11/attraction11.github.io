import{_ as e,c as i,o as a,a as n}from"./app.a6f948a0.js";const o="/assets/image3.cd10ffa8.png",k=JSON.parse('{"title":"Webpack \u89E3\u6790","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4E00\u3001webpack \u6253\u5305\u6587\u4EF6","slug":"\u4E00\u3001webpack-\u6253\u5305\u6587\u4EF6","link":"#\u4E00\u3001webpack-\u6253\u5305\u6587\u4EF6","children":[]},{"level":2,"title":"\u4E8C\u3001webpack \u6E90\u7801\u5206\u6790\u8FC7\u7A0B","slug":"\u4E8C\u3001webpack-\u6E90\u7801\u5206\u6790\u8FC7\u7A0B","link":"#\u4E8C\u3001webpack-\u6E90\u7801\u5206\u6790\u8FC7\u7A0B","children":[]},{"level":2,"title":"\u603B\u7ED3","slug":"\u603B\u7ED3","link":"#\u603B\u7ED3","children":[]}],"relativePath":"JavaScript/Engineering/Webpack.md"}'),t={name:"JavaScript/Engineering/Webpack.md"},p=n('<h1 id="webpack-\u89E3\u6790" tabindex="-1">Webpack \u89E3\u6790 <a class="header-anchor" href="#webpack-\u89E3\u6790" aria-hidden="true">#</a></h1><h2 id="\u4E00\u3001webpack-\u6253\u5305\u6587\u4EF6" tabindex="-1">\u4E00\u3001webpack \u6253\u5305\u6587\u4EF6 <a class="header-anchor" href="#\u4E00\u3001webpack-\u6253\u5305\u6587\u4EF6" aria-hidden="true">#</a></h2><h4 id="_1\u3001\u8F93\u51FA\u6587\u4EF6\u6574\u4F53\u5206\u6790" tabindex="-1">1\u3001\u8F93\u51FA\u6587\u4EF6\u6574\u4F53\u5206\u6790\uFF1A <a class="header-anchor" href="#_1\u3001\u8F93\u51FA\u6587\u4EF6\u6574\u4F53\u5206\u6790" aria-hidden="true">#</a></h4><p><img src="'+o+`" alt="image.png"></p><ol><li>\u6253\u5305\u540E\u7684\u6587\u4EF6\u5C31\u662F\u4E00\u4E2A\u51FD\u6570\u81EA\u8C03\u7528\uFF0C\u5F53\u524D\u51FD\u6570\u8C03\u7528\u65F6\u4F20\u5165\u4E00\u4E2A\u5BF9\u8C61</li><li>\u8FD9\u4E2A\u5BF9\u8C61\u6211\u4EEC\u4E3A\u4E86\u65B9\u4FBF\u79F0\u4E4B\u4E3A\u662F\u6A21\u5757\u5B9A\u4E49\uFF0C\u5B83\u5C31\u662F\u4E00\u4E2A\u952E\u503C\u5BF9</li><li>\u8FD9\u4E2A\u952E\u540D\u5C31\u662F\u5F53\u524D\u88AB\u52A0\u8F7D\u6A21\u5757\u7684\u6587\u4EF6\u540D\u4E0E\u67D0\u4E2A\u76EE\u5F55\u7684\u62FC\u63A5</li><li>\u8FD9\u4E2A\u952E\u503C\u5C31\u662F\u4E00\u4E2A\u51FD\u6570\u548C node.js \u91CC\u7684\u6A21\u5757\u52A0\u8F7D\u6709\u4E00\u4E9B\u7C7B\u4F3C\uFF0C\u4F1A\u5C06\u88AB\u52A0\u8F7D\u7684\u6A21\u5757\u5185\u5BB9\u5305\u88F9\u5728\u4E00\u4E2A\u51FD\u6570\u4E2D</li><li>\u8FD9\u4E2A\u51FD\u6570\u5728\u5C06\u6765\u67D0\u4E2A\u65F6\u95F4\u70B9\u4E0A\u4F1A\u88AB\u8C03\u7528\uFF0C\u540C\u65F6\u63A5\u6536\u5230\u4E00\u5B9A\u7684\u53C2\u6570\uFF0C\u5229\u7528\u8FD9\u4E9B\u53C2\u6570\u5C31\u53EF\u4EE5\u5B9E\u73B0\u6A21\u5757\u7684\u52A0\u8F7D\u64CD\u4F5C</li><li>\u9488\u5BF9\u4E0A\u8FF0\u7684\u4EE3\u7801\u5C31\u76F8\u5F53\u4E8E\u662F\u5C06 {}(\u6A21\u5757\u5B9A\u4E49) \u4F20\u9012\u7ED9 modules</li></ol><h2 id="\u4E8C\u3001webpack-\u6E90\u7801\u5206\u6790\u8FC7\u7A0B" tabindex="-1">\u4E8C\u3001webpack \u6E90\u7801\u5206\u6790\u8FC7\u7A0B <a class="header-anchor" href="#\u4E8C\u3001webpack-\u6E90\u7801\u5206\u6790\u8FC7\u7A0B" aria-hidden="true">#</a></h2><p>01\u3001 cmd \u6587\u4EF6\u7684\u6838\u5FC3\u4F5C\u7528\u5C31\u662F\u7EC4\u88C5\u4E86 node ****/webpack/bin/webpack.js</p><p>02\u3001 webpack.js \u4E2D\u7684\u6838\u5FC3\u64CD\u4F5C\u662F require \u4E86 node_modules/webpack-cli/bin/cli.js</p><p>03\u3001 cli.js - \u6587\u4EF6\u6709 2 \u4E2A\u64CD\u4F5C\uFF1A\u5904\u7406\u53C2\u6570\u548C\u5C06\u53C2\u6570\u4EA4\u7ED9\u4E0D\u540C\u7684\u903B\u8F91\uFF08\u5206\u53D1\u4E1A\u52A1\uFF09 - options - complier - complier.run( \u81F3\u4E8E run \u91CC\u9762\u505A\u4E86\u4EC0\u4E48\uFF0C\u540E\u7EED\u518D\u5206\u6790\uFF0C \u5F53\u524D\u53EA\u5173\u6CE8\u4EE3\u7801\u5165\u53E3\u70B9)</p><p>04\u3001\u6587\u4EF6 node_modules\\webpack\\lib\\Compiler.js this.hooks \u4E2D\u5173\u952E\u6B65\u9AA4\u7684\u6267\u884C\u987A\u5E8F - beforeRun - run - thisCompilation - compilation - beforeCompile - compile - make - afterCompile</p><p>05\u3001WebpackOptionsApply ---&gt; process(options, compiler) ---&gt; EntryOptionPlugin ---&gt; entryOption (\u5728 EntryOptionPlugin \u5185\u90E8\u7684 apply \u65B9\u6CD5\u4E2D\u8C03\u7528\u4E86 tap \u6CE8\u518C\u4E86\u4E8B\u4EF6\u76D1\u542C.. ) \u4E0A\u8FF0\u7684\u4E8B\u4EF6\u76D1\u542C \u5728 new \u5B8C\u4E86 EntryOptionPlugin \u4E4B\u540E\u8C03\u7528 ---&gt; itemToPlugin (\u5B83\u662F\u4E00\u4E2A\u51FD\u6570 \u63A5\u6536\u4E09\u4E2A\u53C2\u6570 context\u3001 item(entry)\u3001&#39;main&#39;) ---&gt; SingleEntryPlugin (\u5728\u8C03\u7528 itemToPlugin \u7684\u65F6\u5019\u53C8\u8FD4\u56DE\u4E86\u4E00\u4E2A \u5B9E\u4F8B\u5BF9\u8C61) \u6709\u4E00\u4E2A\u6784\u9020\u51FD\u6570\uFF0C\u8D1F\u8D23\u63A5\u6536\u4E0A\u6587\u4E2D\u7684 context entry name apply \u51FD\u6570\u4E2D\u6CE8\u518C\u4E86 compilation\u3001make \u94A9\u5B50\u76D1\u542C &#39;SingleEntryPlugin&#39; \u4E8B\u4EF6</p><p>06\u3001\u5206\u6790 compile \u7684\u5B9E\u73B0 ---&gt;\u901A\u8FC7 newCompilationParams \u5904\u7406\u53C2\u6570 \u4EC5\u5173\u6CE8\u6B63\u5E38\u7684 createNormalModuleFactory \u4E0A\u8FF0\u64CD\u4F5C\u662F\u4E3A\u4E86\u83B7\u53D6\u53C2\u6570 ---&gt; \u63A5\u7740\u8C03\u7528 beforeCompile \u94A9\u5B50\u76D1\u542C\uFF0C \u5728\u5B83\u7684\u56DE\u8C03\u4E2D\u53C8\u89E6\u53D1\u4E86 compiler \u76D1\u542C ---&gt; \u8C03\u7528 newCompilation \u65B9\u6CD5\uFF0C \u4F20\u5165\u4E0A\u9762\u7684 params, \u8FD4\u56DE\u4E00\u4E2A compilation ---&gt; \u8C03\u7528\u4E86\u4E00\u4E2A createCompilation() (Compilation.js) \u4E0A\u8FF0\u64CD\u4F5C\u5B8C\u6210\u540E\u5C31\u53EF\u4EE5\u89E6\u53D1 make \u94A9\u5B50\u76D1\u542C</p><p>07\u3001\u6B65\u9AA4 ---&gt; \u5B9E\u4F8B\u5316 compiler \u5BF9\u8C61 \uFF08\u5B83\u4F1A\u8D2F\u7A7F\u6574\u4E2A webpack \u5DE5\u4F5C\u7684\u8FC7\u7A0B\uFF09 ---&gt; \u7531 compiler \u8C03\u7528 run \u65B9\u6CD5</p><p>08\u3001compiler \u5B9E\u4F8B\u5316\u64CD\u4F5C ---&gt; compiler \u7EE7\u627F tapable\uFF0C \u56E0\u6B64\u5B83\u5177\u5907\u94A9\u5B50\u7684\u64CD\u4F5C\u80FD\u529B\uFF08\u76D1\u542C\u4E8B\u4EF6\u3001\u89E6\u53D1\u4E8B\u4EF6\u3001webpack \u662F\u4E00\u4E2A\u4E8B\u4EF6\u6D41\uFF09 ---&gt; \u5728\u5B9E\u4F8B\u5316\u4E86 compiler \u5BF9\u8C61\u4E4B\u540E\u5C31\u5F80\u5B83\u7684\u8EAB\u4E0A\u6302\u8F7D\u5F88\u591A\u5C5E\u6027\uFF0C\u5176\u4E2D NodeEnvironmentPlugin \u6574\u4E2A\u64CD\u4F5C\u5C31\u662F\u8BA9\u5B83\u5177\u5907\u4E86 \u6587\u4EF6\u8BFB\u5199\u7684\u80FD\u529B\uFF08\u6211\u4EEC\u6A21\u62DF\u65F6\u91C7\u7528\u7684\u662F node \u81EA\u5E26\u7684 fs \u6A21\u5757\uFF09 ---&gt; \u5177\u5907\u4E86 fs \u64CD\u4F5C\u80FD\u529B\u4E4B\u540E\uFF0C\u53C8\u5C06 plugins \u4E2D\u7684\u63D2\u4EF6\u90FD\u6302\u8F7D\u5230 compiler \u5BF9\u8C61\u8EAB\u4E0A ---&gt; \u5C06\u5185\u90E8\u9ED8\u8BA4\u7684\u63D2\u4EF6\u4E0E compiler \u5EFA\u7ACB\u5173\u7CFB \u5176\u4E2D\u6709\u4E00\u4E2A EntryOptionPlugin \u5904\u7406\u5165\u53E3\u6A21\u5757\u7684 id ---&gt; \u4E0A\u8FF0\u7684\u5B9E\u4F8B\u5316 compiler \u7684\u65F6\u5019\u53EA\u662F\u76D1\u542C\u4E86 make \u94A9\u5B50 \uFF08SingleEntryPlugin\uFF09 1\u3001\u5728 SingleEntryPlugin \u6A21\u5757\u4E2D\u6709\u4E24\u4E2A\u94A9\u5B50\u7684\u76D1\u542C\uFF0C\u5176\u4E2D compilation \u94A9\u5B50 \u5C31\u662F\u8BA9 \u94A9\u5B50 \u5177\u5907\u5229\u7528 normalModuleFactory \u5DE5\u5382\u521B\u5EFA\u666E\u901A\u6A21\u5757\u7684\u80FD\u529B 2\u3001\u56E0\u4E3A \u5B83\u5C31\u662F\u5229\u7528\u4E00\u4E2A\u81EA\u5DF1\u521B\u5EFA\u7684\u6A21\u5757\u6765\u52A0\u8F7D\u9700\u8981\u6253\u5305\u7684\u6A21\u5757 3\u3001\u5176\u4E2D make \u94A9\u5B50 \u5728 compiler.run \u7684\u65F6\u5019\u4F1A\u88AB\u89E6\u53D1\uFF0C\u8D70\u5230\u8FD9\u91CC\u5C31\u610F\u5473\u5C31\u610F\u5473\u7740\u67D0\u4E2A\u6A21\u5757\u6267\u884C\u6253\u5305\u4E4B\u524D\u7684\u6240\u6709\u51C6\u5907\u5DE5\u4F5C\u5B8C\u6210\u4E86\u3002 4\u3001addEntry \u65B9\u6CD5\u8C03\u7528\uFF08\uFF09</p><p>09\u3001run \u65B9\u6CD5\u6267\u884C\uFF08\u5F53\u524D\u60F3\u770B\u4E00\u4E0B\u4EC0\u4E48\u65F6\u5019\u89E6\u53D1\u4E86 make \u94A9\u5B50\uFF09 ---&gt; run \u65B9\u6CD5\u91CC\u5C31\u662F\u4E00\u5806\u94A9\u5B50\u3001\u6309\u7167\u987A\u5E8F\u89E6\u53D1 \uFF08beforeRun\u3001Run\u3001compiler \u65B9\u6CD5\u8C03\u7528\uFF09 ----&gt; compiler \u65B9\u6CD5\u6267\u884C 1\u3001\u51C6\u5907\u53C2\u6570(\u5176\u4E2D NormalModuleFactory \u540E\u7EED\u7528\u4E8E\u521B\u5EFA\u6A21\u5757) 2\u3001\u89E6\u53D1 beforeCompile \u65B9\u6CD5 3\u3001\u5C06\u7B2C\u4E00\u6B65\u7684\u53C2\u6570\u4F20\u7ED9\u51FD\u6570\uFF0C\u5F00\u59CB\u521B\u5EFA\u4E00\u4E2A compilation 4\u3001\u5728\u8C03\u7528 newCompilation \u65B9\u6CD5\u7684\u5185\u90E8\uFF0C - \u8C03\u7528 createCompilation - \u89E6\u53D1\u4E86 this.compilation \u94A9\u5B50\u548C compilation \u94A9\u5B50\u7684\u76D1\u542C 5\u3001\u5F53\u521B\u5EFA\u4E86 compilation \u5BF9\u8C61\u4E4B\u540E\u5C31\u89E6\u53D1\u4E86 make \u94A9\u5B50 6\u3001\u5F53\u6211\u4EEC\u89E6\u53D1 make \u94A9\u5B50\u76D1\u542C\u7684\u65F6\u5019\uFF0C\u5C06 copilation \u5BF9\u8C61\u4F20\u9012\u8FC7\u53BB</p><h2 id="\u603B\u7ED3" tabindex="-1">\u603B\u7ED3 <a class="header-anchor" href="#\u603B\u7ED3" aria-hidden="true">#</a></h2><pre><code>1\u3001\u5B9E\u4F8B\u5316 compiler
2\u3001\u8C03\u7528 compile \u65B9\u6CD5
3\u3001newCompilation
4\u3001\u5B9E\u4F8B\u5316\u4E00\u4E2A compilation \u5BF9\u8C61\uFF08\u5B83 \u548C compiler \u662F\u6709\u5173\u7CFB\u7684\uFF09
5\u3001\u89E6\u53D1 make \u76D1\u542C
6\u3001addEntry \u65B9\u6CD5(\u8FD9\u4E2A\u65F6\u5019 \u5C31\u5E26\u7740 context name entry\u4E00\u5806\u4E1C\u897F)  \u5C31\u5954\u7740\u7F16\u8BD1\u53BB\u4E86
</code></pre><p>-------------------\u4F9D\u8D56\u6A21\u5757\u5904\u7406----------------------<br> 1\u3001\u9700\u8981\u5C06 index.js \u91CC\u9762\u7684 require \u65B9\u6CD5\u66FF\u6362\u6210 <code>__webpack_require__</code><br> 2\u3001\u5C06 ./title \u66FF\u6362\u6210 ./src/title.js<br> 3\u3001\u6587\u4EF6\u9012\u5F52\u64CD\u4F5C\uFF1A \u56E0\u6B64\u9700\u8981\u5C06\u4F9D\u8D56\u7684\u6A21\u5757\u4FE1\u606F\u4FDD\u5B58\u597D\uFF0C\u7B49\u5F85\u4E0B\u4E00\u6B21\u7684 create \u64CD\u4F5C</p>`,18),l=[p];function r(c,m,s,d,g,b){return a(),i("div",null,l)}const h=e(t,[["render",r]]);export{k as __pageData,h as default};
