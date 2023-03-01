import{_ as s,c as a,o as l,a as e}from"./app.0034e838.js";const n="/assets/image42.02fe5ad5.png",i="/assets/image43.cbcff0e4.png",t="/assets/image44.c9df4463.png",p="/assets/image39.1339416c.png",o="/assets/image40.19a272c9.png",r="/assets/image41.2104e3d7.png",c="/assets/image45.440a8033.png",d="/assets/image37.89c62978.png",h="/assets/image38.9eeed510.png",x=JSON.parse('{"title":"RN \u9879\u76EE\u5B9E\u8DF5","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u9879\u76EE\u89C4\u5212","slug":"\u9879\u76EE\u89C4\u5212","link":"#\u9879\u76EE\u89C4\u5212","children":[]},{"level":2,"title":"\u6570\u636E\u63A5\u53E3","slug":"\u6570\u636E\u63A5\u53E3","link":"#\u6570\u636E\u63A5\u53E3","children":[]},{"level":2,"title":"UI \u754C\u9762","slug":"ui-\u754C\u9762","link":"#ui-\u754C\u9762","children":[]},{"level":2,"title":"\u72B6\u6001\u7BA1\u7406","slug":"\u72B6\u6001\u7BA1\u7406","link":"#\u72B6\u6001\u7BA1\u7406","children":[]},{"level":2,"title":"\u8DEF\u7531\u9274\u6743","slug":"\u8DEF\u7531\u9274\u6743","link":"#\u8DEF\u7531\u9274\u6743","children":[]},{"level":2,"title":"\u9879\u76EE\u4F18\u5316","slug":"\u9879\u76EE\u4F18\u5316","link":"#\u9879\u76EE\u4F18\u5316","children":[]}],"relativePath":"PanClient/RN/ProjectDemo.md"}'),g={name:"PanClient/RN/ProjectDemo.md"},u=e('<h1 id="rn-\u9879\u76EE\u5B9E\u8DF5" tabindex="-1">RN \u9879\u76EE\u5B9E\u8DF5 <a class="header-anchor" href="#rn-\u9879\u76EE\u5B9E\u8DF5" aria-hidden="true">#</a></h1><h2 id="\u9879\u76EE\u89C4\u5212" tabindex="-1">\u9879\u76EE\u89C4\u5212 <a class="header-anchor" href="#\u9879\u76EE\u89C4\u5212" aria-hidden="true">#</a></h2><p>\u901A\u8FC7\u5B66\u8FC7\u7684 React Native \u57FA\u7840\u652F\u6301\uFF0C\u5B8C\u6210\u4E00\u6B3E\u63A5\u8FD1\u5B9E\u6218\u7684 App \u5F00\u53D1\u3002\u4E3B\u8981\u7684\u529F\u80FD\u70B9\u5305\u62EC\uFF1A</p><ul><li>\u8DEF\u7531\u89C4\u5212</li><li>\u6570\u636E\u63A5\u53E3 <ul><li>\u7533\u8BF7\u6570\u636E\u63A5\u53E3</li><li>\u8C03\u8BD5\u6570\u636E\u63A5\u53E3</li><li>\u8C03\u7528\u6570\u636E\u63A5\u53E3</li></ul></li><li>UI \u754C\u9762 <ul><li>\u9996\u9875</li><li>\u83B7\u53D6\u5730\u7406\u4F4D\u7F6E\uFF0C\u5E76\u6839\u636E\u5730\u7406\u4F4D\u7F6E\u8C03\u7528\u76F8\u5173\u63A5\u53E3</li><li>\u65B0\u95FB\u9875</li><li>\u8C03\u7528\u65B0\u95FB\u5217\u8868\u63A5\u53E3\uFF0C\u5E76\u5C55\u793A</li><li>\u7528\u6237\u9875</li><li>\u7528\u6237\u767B\u5F55\uFF0C\u6CE8\u518C\u4EE5\u53CA\u4E2A\u4EBA\u4E2D\u5FC3</li></ul></li><li>\u72B6\u6001\u7BA1\u7406 <ul><li>Redux</li><li>\u8DEF\u7531\u9274\u6743</li></ul></li></ul><h2 id="\u6570\u636E\u63A5\u53E3" tabindex="-1">\u6570\u636E\u63A5\u53E3 <a class="header-anchor" href="#\u6570\u636E\u63A5\u53E3" aria-hidden="true">#</a></h2><h4 id="\u7533\u8BF7\u63A5\u53E3" tabindex="-1">\u7533\u8BF7\u63A5\u53E3 <a class="header-anchor" href="#\u7533\u8BF7\u63A5\u53E3" aria-hidden="true">#</a></h4><p>\u7B2C\u4E09\u65B9\u63A5\u53E3\u7684\u7533\u8BF7\u65B9\u5F0F\u5927\u540C\u5C0F\u5F02\u3002\u8FD9\u91CC\uFF0C\u6211\u4EEC\u4EE5\u548C\u98CE\u5929\u6C14\u4E3A\u4F8B\u3002\u6765\u7533\u8BF7\u7B2C\u4E09\u65B9\u63A5\u53E3 \u548C\u98CE\u5929\u6C14\u63D0\u4F9B\u4E86\u514D\u8D39\u7684\u5929\u6C14\u9884\u62A5\u76F8\u5173\u7684 API\u3002\u4F46\u662F\uFF0C\u4F7F\u7528\u4E4B\u524D\uFF0C\u9700\u8981<a href="https://dev.qweather.com/docs/start/#documentation" target="_blank" rel="noreferrer">\u6CE8\u518C\u7533\u8BF7</a></p><h4 id="\u8C03\u8BD5\u63A5\u53E3" tabindex="-1">\u8C03\u8BD5\u63A5\u53E3 <a class="header-anchor" href="#\u8C03\u8BD5\u63A5\u53E3" aria-hidden="true">#</a></h4><p>\u6839\u636E\u63A5\u53E3\uFF08\u4F8B\u5982\uFF1A\u548C\u98CE\u5929\u6C14\u63A5\u53E3\uFF09\u7684\u4F7F\u7528\u89C4\u5219\uFF0C\u5728 APIfox \u4E2D\u8C03\u8BD5\u63A5\u53E3\u4E86\u3002</p><h4 id="\u8C03\u7528\u63A5\u53E3" tabindex="-1">\u8C03\u7528\u63A5\u53E3 <a class="header-anchor" href="#\u8C03\u7528\u63A5\u53E3" aria-hidden="true">#</a></h4><p>React Native \u63D0\u4F9B\u4E86\u548C web \u6807\u51C6\u4E00\u81F4\u7684 Fetch API\uFF0C\u7528\u4E8E\u6EE1\u8DB3\u5F00\u53D1\u8005\u8BBF\u95EE\u7F51\u7EDC\u7684\u9700\u6C42\u3002</p><h2 id="ui-\u754C\u9762" tabindex="-1">UI \u754C\u9762 <a class="header-anchor" href="#ui-\u754C\u9762" aria-hidden="true">#</a></h2><p>UI \u754C\u9762\u4E2D\u7528\u5230\u7684\u6280\u672F\uFF0C\u5927\u90E8\u5206\u90FD\u662F\u4E4B\u524D\u5B66\u4E60\u7684\u3002\u5305\u62EC RN \u6837\u5F0F\uFF0CRN \u7EC4\u4EF6\uFF0CRN \u8DEF\u7531\u7B49\u3002\u6309\u7167\u9879\u76EE\u529F\u80FD\u5212 \u5206\u3002\u5305\u62EC\uFF1A</p><ul><li>\u9996\u9875 <ul><li>Tab \u5BFC\u822A</li><li>header \u8BBE\u7F6E</li><li>\u54CD\u5E94\u5F0F\u6548\u679C\uFF08\u901A\u8FC7 Dimensions \u5B8C\u6210\uFF09</li><li>\u8F6E\u64AD\u56FE\uFF08react-native-swiper\uFF09</li><li>\u548C\u98CE\u5929\u6C14\u63A5\u53E3\uFF08\u83B7\u53D6\u5730\u7406\u4F4D\u7F6E\uFF0C\u8C03\u7528\u63A5\u53E3\uFF0CFlatList \u5C55\u793A\uFF0C\u7EBF\u6027\u6E10\u53D8\u5C55\u793A\u7B49\uFF09</li></ul></li><li>\u65B0\u95FB\u9875 <ul><li>\u8C03\u7528\u65B0\u95FB\u63A5\u53E3\uFF0C\u901A\u8FC7 FlatList \u5C55\u793A</li><li>\u901A\u8FC7 WebView\uFF0C\u5C55\u793A\u65B0\u95FB\u8BE6\u60C5\uFF08\u8DEF\u7531\u58F0\u660E\uFF0C\u8DEF\u7531\u8DF3\u8F6C\uFF0C\u8DEF\u7531\u4F20\u53C2\uFF09</li></ul></li><li>\u7528\u6237\u9875</li><li>\u7528\u6237\u4E2D\u5FC3 <ul><li>\u57FA\u672C\u9875\u9762\u5E03\u5C40</li><li>\u56FE\u6807\u5C55\u793A\uFF08Ionicons\uFF09</li><li>\u8DEF\u7531\u58F0\u660E\u4E0E\u8DF3\u8F6C</li></ul></li><li>\u7528\u6237\u767B\u5F55 <ul><li>\u80CC\u666F\u56FE\uFF08ImageBackground\uFF09</li><li>\u52A8\u753B\u6548\u679C\uFF08react-native-linear-gradient\uFF09</li><li>\u8868\u5355\uFF08\u5E38\u7528\u5C5E\u6027\u548C\u65B9\u6CD5\uFF0C\u6570\u636E\u9A8C\u8BC1\u4E0E\u63D0\u793A\uFF09</li></ul></li><li>\u7528\u6237\u6CE8\u518C - \u6240\u7528\u6280\u672F\u4E0E\u7528\u6237\u767B\u5F55\u9875\u9762\u4E00\u81F4</li></ul><p><img src="'+n+'" alt="image"><img src="'+i+'" alt="image"><img src="'+t+'" alt="image"><img src="'+p+'" alt="image"><img src="'+o+'" alt="image"><img src="'+r+'" alt="image"><img src="'+c+'" alt="image"></p><h2 id="\u72B6\u6001\u7BA1\u7406" tabindex="-1">\u72B6\u6001\u7BA1\u7406 <a class="header-anchor" href="#\u72B6\u6001\u7BA1\u7406" aria-hidden="true">#</a></h2><p>Redux \u662F React \u4E2D\u8FDB\u884C\u72B6\u6001\u7BA1\u7406\u7684\u5DE5\u5177\u3002</p><h2 id="\u8DEF\u7531\u9274\u6743" tabindex="-1">\u8DEF\u7531\u9274\u6743 <a class="header-anchor" href="#\u8DEF\u7531\u9274\u6743" aria-hidden="true">#</a></h2><p>\u5927\u591A\u6570\u5E94\u7528\u90FD\u6709\u7528\u6237\u9274\u6743\u7684\u8981\u6C42\uFF0C\u7528\u6237\u9274\u6743\u901A\u8FC7\u4E4B\u540E\uFF0C\u624D\u80FD\u8BBF\u95EE\u4E0E\u4E4B\u76F8\u5173\u7684\u79C1\u6709\u6570\u636E\u3002 \u5178\u578B\u7684\u9274\u6743\u6D41\u662F\u8FD9\u6837\u7684</p><ul><li>\u7528\u6237\u6253\u5F00\u5E94\u7528</li><li>\u5E94\u7528\u83B7\u53D6\u9274\u6743\u72B6\u6001 <ul><li>\u521D\u59CB\u4F1A\u6839\u636E\u767B\u5F55\u4FE1\u606F\uFF0C\u4ECE Redux \u4E2D\u83B7\u53D6\uFF08\u6B64\u65F6\u53EF\u4EE5\u5C06\u72B6\u6001\u4FE1\u606F\u6301\u4E45\u5316\u5B58\u50A8\uFF09</li><li>\u518D\u6B21\u8FDB\u5165 App\uFF0C\u4ECE\u6301\u4E45\u5316\u5B58\u50A8\uFF08\u4F8B\u5982\uFF1AAsyncStorage\uFF09\u4E2D\u83B7\u53D6\u9274\u6743\u72B6\u6001</li></ul></li><li>\u5F53\u72B6\u6001\u52A0\u8F7D\u540E\uFF0C\u5224\u65AD\u7528\u6237\u9274\u6743\u72B6\u6001\u662F\u5426\u5408\u6CD5\uFF0C\u5408\u6CD5\u8DF3\u8F6C\u5230\u9996\u9875\uFF0C\u5426\u5219\u5F39\u51FA\u9274\u6743\u9875\u9762</li><li>\u5F53\u7528\u6237\u9000\u51FA\u5E94\u7528\u540E\uFF0C\u6211\u4EEC\u6E05\u9664\u9274\u6743\u72B6\u6001\uFF0C\u5E76\u8DF3\u56DE\u9274\u6743\u9875\u9762</li></ul><h2 id="\u9879\u76EE\u4F18\u5316" tabindex="-1">\u9879\u76EE\u4F18\u5316 <a class="header-anchor" href="#\u9879\u76EE\u4F18\u5316" aria-hidden="true">#</a></h2><h4 id="\u4F7F\u7528\u7B2C\u4E09\u65B9-ui-\u7EC4\u4EF6" tabindex="-1">\u4F7F\u7528\u7B2C\u4E09\u65B9 UI \u7EC4\u4EF6 <a class="header-anchor" href="#\u4F7F\u7528\u7B2C\u4E09\u65B9-ui-\u7EC4\u4EF6" aria-hidden="true">#</a></h4><p>RN \u5B98\u65B9\u7EC4\u4EF6\u592A\u8FC7\u7B80\u5355\uFF0C\u800C\u81EA\u5DF1\u53BB\u5199\u6837\u5F0F\u53C8\u592A\u6D6A\u8D39\u65F6\u95F4\u3002\u800C\u9009\u62E9\u4E00\u4E9B\u6210\u719F\u7684\uFF0C\u7B2C\u4E09\u65B9 UI \u7EC4\u4EF6\u5E93\u3002\u4F1A\u8BA9\u6211 \u4EEC\u7684\u9879\u76EE\u5F00\u53D1\u4E8B\u534A\u529F\u500D\u3002 \u8FD9\u91CC\u5217\u51FA\u4E00\u4E9B\u6BD4\u8F83\u6D41\u884C\u7684</p><ul><li><a href="https://github.com/GeekyAnts/NativeBase" target="_blank" rel="noreferrer">NativeBase</a> \u76EE\u524D\u5728 Github \u4E0A\u6709 18.8k \u4E2A\u661F</li><li><a href="https://github.com/callstack/react-native-paper" target="_blank" rel="noreferrer">react-native-paper</a> \u76EE\u524D\u5728 Github \u4E0A\u6709 10.1k \u4E2A\u661F</li></ul><h4 id="\u4FEE\u6539\u5E94\u7528-logo" tabindex="-1">\u4FEE\u6539\u5E94\u7528 logo <a class="header-anchor" href="#\u4FEE\u6539\u5E94\u7528-logo" aria-hidden="true">#</a></h4><p>\u5E94\u7528\u56FE\u6807\u5BF9\u5C3A\u5BF8\u6709\u8981\u6C42\uFF0C\u6BD4\u8F83\u7B80\u5355\u5730\u65B9\u5F0F\u662F\uFF0C\u51C6\u5907\u4E00\u5F20 1024*1024 \u7684\u56FE\u7247\uFF0C\u7136\u540E <a href="https://icon.wuruihong.com/" target="_blank" rel="noreferrer">\u5728\u7EBF\u751F\u6210</a>\u3002\u751F\u6210\u4E4B\u540E\uFF0C\u6211\u4EEC\u53EF\u4EE5\u5C06\u751F\u6210\u7684\u56FE\u6807\u4E0B\u8F7D\u4E0B\u6765\u3002\u89E3\u538B\u540E\uFF0C\u6211\u4EEC\u4F1A\u5F97\u5230\u4E24\u4E2A\u76EE\u5F55\uFF1A</p><ul><li>\u5206\u522B\u5C06\u4E0A\u8FF0\u76EE\u5F55\uFF0C\u590D\u5236\u5230 RN \u9879\u76EE\u5BF9\u5E94\u7684\u4F4D\u7F6E\u4E2D <img src="'+d+'" alt="image"><img src="'+h+`" alt="image"></li></ul><ol><li>Android: \u66FF\u6362 android/app/src/main/res \u4E0B\u5BF9\u5E94\u7684\u5185\u5BB9\u3002</li><li>iOS: \u66FF\u6362 ios/\u9879\u76EE\u540D\u79F0/Images.xcassets/AppIcon.appiconset \u4E2D\u7684\u5185\u5BB9\u3002</li></ol><h4 id="\u4FEE\u6539\u5E94\u7528\u540D\u79F0" tabindex="-1">\u4FEE\u6539\u5E94\u7528\u540D\u79F0 <a class="header-anchor" href="#\u4FEE\u6539\u5E94\u7528\u540D\u79F0" aria-hidden="true">#</a></h4><ul><li>Android: \u7F16\u8F91 android/app/src/main/res/values/strings.xml</li></ul><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki vp-code-dark"><code><span class="line"><span style="color:#666666;">&lt;</span><span style="color:#4D9375;">resources</span><span style="color:#666666;">&gt;</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#666666;">&lt;</span><span style="color:#4D9375;">string</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">name</span><span style="color:#666666;">=</span><span style="color:#C98A7DAA;">&#39;</span><span style="color:#C98A7D;">app_name</span><span style="color:#C98A7DAA;">&#39;</span><span style="color:#666666;">&gt;</span><span style="color:#DBD7CAEE;">\u4F60\u7684\u5E94\u7528\u540D\u79F0</span><span style="color:#666666;">&lt;/</span><span style="color:#4D9375;">string</span><span style="color:#666666;">&gt;</span></span>
<span class="line"><span style="color:#666666;">&lt;/</span><span style="color:#4D9375;">resources</span><span style="color:#666666;">&gt;</span></span>
<span class="line"></span></code></pre><pre class="shiki vp-code-light"><code><span class="line"><span style="color:#999999;">&lt;</span><span style="color:#1E754F;">resources</span><span style="color:#999999;">&gt;</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#999999;">&lt;</span><span style="color:#1E754F;">string</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">name</span><span style="color:#999999;">=</span><span style="color:#B56959AA;">&#39;</span><span style="color:#B56959;">app_name</span><span style="color:#B56959AA;">&#39;</span><span style="color:#999999;">&gt;</span><span style="color:#393A34;">\u4F60\u7684\u5E94\u7528\u540D\u79F0</span><span style="color:#999999;">&lt;/</span><span style="color:#1E754F;">string</span><span style="color:#999999;">&gt;</span></span>
<span class="line"><span style="color:#999999;">&lt;/</span><span style="color:#1E754F;">resources</span><span style="color:#999999;">&gt;</span></span>
<span class="line"></span></code></pre></div><ul><li>iOS: \u7F16\u8F91 ios/\u9879\u76EE\u540D\u79F0/Info.plist \u6587\u4EF6\uFF0C\u5B9A\u4F4D\u5230 CFBundleDisplayName</li></ul><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki vp-code-dark"><code><span class="line"><span style="color:#666666;">&lt;</span><span style="color:#4D9375;">key</span><span style="color:#666666;">&gt;</span><span style="color:#DBD7CAEE;">CFBundleDisplayName</span><span style="color:#666666;">&lt;/</span><span style="color:#4D9375;">key</span><span style="color:#666666;">&gt;</span></span>
<span class="line"><span style="color:#666666;">&lt;</span><span style="color:#4D9375;">string</span><span style="color:#666666;">&gt;</span><span style="color:#DBD7CAEE;">\u4F60\u7684\u5E94\u7528\u540D\u79F0</span><span style="color:#666666;">&lt;/</span><span style="color:#4D9375;">string</span><span style="color:#666666;">&gt;</span></span>
<span class="line"><span style="color:#666666;">...</span></span>
<span class="line"></span></code></pre><pre class="shiki vp-code-light"><code><span class="line"><span style="color:#999999;">&lt;</span><span style="color:#1E754F;">key</span><span style="color:#999999;">&gt;</span><span style="color:#393A34;">CFBundleDisplayName</span><span style="color:#999999;">&lt;/</span><span style="color:#1E754F;">key</span><span style="color:#999999;">&gt;</span></span>
<span class="line"><span style="color:#999999;">&lt;</span><span style="color:#1E754F;">string</span><span style="color:#999999;">&gt;</span><span style="color:#393A34;">\u4F60\u7684\u5E94\u7528\u540D\u79F0</span><span style="color:#999999;">&lt;/</span><span style="color:#1E754F;">string</span><span style="color:#999999;">&gt;</span></span>
<span class="line"><span style="color:#999999;">...</span></span>
<span class="line"></span></code></pre></div>`,33),y=[u];function m(_,A,f,D,b,k){return l(),a("div",null,y)}const E=s(g,[["render",m]]);export{x as __pageData,E as default};
