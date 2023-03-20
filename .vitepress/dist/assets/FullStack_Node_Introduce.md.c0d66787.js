import{_ as e,c as l,o as i,a}from"./app.2a51697e.js";const r="/assets/1.e432ea81.png",o="/assets/2.8ee37f8e.png",t="/assets/3.135e4492.png",v=JSON.parse('{"title":"Node.js \u4ECB\u7ECD","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u8D44\u6599\uFF1A","slug":"\u8D44\u6599","link":"#\u8D44\u6599","children":[]},{"level":2,"title":"\u5B66\u4E60\u76EE\u6807","slug":"\u5B66\u4E60\u76EE\u6807","link":"#\u5B66\u4E60\u76EE\u6807","children":[]},{"level":2,"title":"Node.js \u662F\u4EC0\u4E48","slug":"node-js-\u662F\u4EC0\u4E48","link":"#node-js-\u662F\u4EC0\u4E48","children":[]},{"level":2,"title":"Node \u7684\u7279\u70B9","slug":"node-\u7684\u7279\u70B9","link":"#node-\u7684\u7279\u70B9","children":[]},{"level":2,"title":"Node \u7684\u8FD0\u884C\u673A\u5236","slug":"node-\u7684\u8FD0\u884C\u673A\u5236","link":"#node-\u7684\u8FD0\u884C\u673A\u5236","children":[]},{"level":2,"title":"Event Loop\uFF08\u4E8B\u4EF6\u5FAA\u73AF\uFF09","slug":"event-loop-\u4E8B\u4EF6\u5FAA\u73AF","link":"#event-loop-\u4E8B\u4EF6\u5FAA\u73AF","children":[]},{"level":2,"title":"Node \u53D1\u5C55\u5386\u53F2","slug":"node-\u53D1\u5C55\u5386\u53F2","link":"#node-\u53D1\u5C55\u5386\u53F2","children":[]},{"level":2,"title":"\u4E3A\u4EC0\u4E48\u8981\u5B66\u4E60 Node","slug":"\u4E3A\u4EC0\u4E48\u8981\u5B66\u4E60-node","link":"#\u4E3A\u4EC0\u4E48\u8981\u5B66\u4E60-node","children":[]},{"level":2,"title":"Node \u80FD\u505A\u4EC0\u4E48","slug":"node-\u80FD\u505A\u4EC0\u4E48","link":"#node-\u80FD\u505A\u4EC0\u4E48","children":[]},{"level":2,"title":"\u7ED3\u8BED","slug":"\u7ED3\u8BED","link":"#\u7ED3\u8BED","children":[]},{"level":2,"title":"\u76F8\u5173\u94FE\u63A5","slug":"\u76F8\u5173\u94FE\u63A5","link":"#\u76F8\u5173\u94FE\u63A5","children":[]}],"relativePath":"FullStack/Node/Introduce.md"}'),n={name:"FullStack/Node/Introduce.md"},d=a('<h1 id="node-js-\u4ECB\u7ECD" tabindex="-1">Node.js \u4ECB\u7ECD <a class="header-anchor" href="#node-js-\u4ECB\u7ECD" aria-hidden="true">#</a></h1><h2 id="\u8D44\u6599" tabindex="-1">\u8D44\u6599\uFF1A <a class="header-anchor" href="#\u8D44\u6599" aria-hidden="true">#</a></h2><ul><li><a href="https://github.com/i0natan/nodebestpractices" target="_blank" rel="noreferrer">Node.js \u6700\u4F73\u5B9E\u8DF5</a></li><li><a href="https://github.com/ElemeFE/node-interview" target="_blank" rel="noreferrer">Node \u9762\u8BD5\u8D44\u6E90</a></li><li><a href="https://www.yuque.com/lipengzhou/nodejs-tutorial" target="_blank" rel="noreferrer">Node \u9AD8\u7EA7\u7F16\u7A0B</a></li><li><a href="https://github.com/airbnb/javascript" target="_blank" rel="noreferrer">airbnb JS\u89C4\u8303</a></li></ul><h2 id="\u5B66\u4E60\u76EE\u6807" tabindex="-1">\u5B66\u4E60\u76EE\u6807 <a class="header-anchor" href="#\u5B66\u4E60\u76EE\u6807" aria-hidden="true">#</a></h2><ul><li>\u77E5\u9053 Node.js \u662F\u4EC0\u4E48</li><li>\u7406\u89E3 Node.js \u7684\u8FD0\u884C\u539F\u7406</li><li>\u4E86\u89E3 Node.js \u7684\u8FD0\u884C\u673A\u5236</li></ul><h2 id="node-js-\u662F\u4EC0\u4E48" tabindex="-1">Node.js \u662F\u4EC0\u4E48 <a class="header-anchor" href="#node-js-\u662F\u4EC0\u4E48" aria-hidden="true">#</a></h2><ul><li>\u4E0D\u662F\u7F16\u7A0B\u8BED\u8A00, \u4E5F\u4E0D\u662F\u6846\u67B6\u548C\u5E93</li><li>\u662F\u4E00\u4E2A JavaScript \u8FD0\u884C\u65F6\uFF08\u73AF\u5883\uFF09 <ul><li>\u80FD\u89E3\u6790\u548C\u6267\u884C JavaScript \u4EE3\u7801\uFF08\u4E25\u683C\u6765\u8BF4\u5E94\u8BE5\u662F ECMAScript \u4EE3\u7801\uFF09</li></ul></li><li>\u6784\u5EFA\u4E8E Chrome V8 JavaScript \u5F15\u64CE\u4E4B\u4E0A</li><li>\u4E3A JavaScript \u63D0\u4F9B\u4E86\u670D\u52A1\u7AEF\u7F16\u7A0B\u7684\u80FD\u529B <ul><li>\u6587\u4EF6 IO</li><li>\u7F51\u7EDC IO</li></ul></li><li>\u4ECE\u6280\u672F\u89D2\u5EA6\u5B83\u7684\u80FD\u529B\u548C Java\u3001PHP\u3001Python\u3001Perl\u3001Ruby \u7B49\u670D\u52A1\u7AEF\u6280\u672F\u7C7B\u4F3C</li></ul><h2 id="node-\u7684\u7279\u70B9" tabindex="-1">Node \u7684\u7279\u70B9 <a class="header-anchor" href="#node-\u7684\u7279\u70B9" aria-hidden="true">#</a></h2><ul><li>\u4E8B\u4EF6\u9A71\u52A8</li><li>\u975E\u963B\u585E IO\uFF08\u5F02\u6B65\uFF09 \u6A21\u578B</li><li>\u5355\u7EBF\u7A0B</li><li>\u8DE8\u5E73\u53F0</li></ul><h2 id="node-\u7684\u8FD0\u884C\u673A\u5236" tabindex="-1">Node \u7684\u8FD0\u884C\u673A\u5236 <a class="header-anchor" href="#node-\u7684\u8FD0\u884C\u673A\u5236" aria-hidden="true">#</a></h2><p>\u591A\u7EBF\u7A0B\u5904\u7406\u673A\u5236\uFF1A</p><p><img src="'+r+'" alt="img"></p><p>\u4F20\u7EDF\u7684 Web \u670D\u52A1\u5668\uFF08Apache\u3001Tomcat\u3001IIS\uFF09\uFF1A</p><ul><li>\u8BF7\u6C42\u8FDB\u6765</li><li>Web \u670D\u52A1\u5668\u5F00\u542F\u4E00\u4E2A\u7EBF\u7A0B\u6765\u5904\u7406\u7528\u6237\u8BF7\u6C42</li><li>\u540C\u4E00\u65F6\u95F4\u6709 n \u8BF7\u6C42\uFF0C\u670D\u52A1\u5668\u5C31\u9700\u8981\u5F00\u542F n \u4E2A\u7EBF\u7A0B <ul><li>\u4E00\u4E2A\u7EBF\u7A0B\u6700\u5C11\u5F97\u6D88\u8017 8MB \u5185\u5B58</li><li>\u5BF9\u4E8E\u4E00\u4E2A 8GB \u5185\u5B58\u7684\u670D\u52A1\u5668\u6765\u8BF4\uFF0C\u5B83\u80FD\u5E94\u5BF9\u7684\u5E76\u53D1\u6570\u662F 1024 * 8 / 8 = 1024 \u4E2A\u5E76\u53D1</li></ul></li></ul><p>\u4E8B\u4EF6\u9A71\u52A8\u5904\u7406\u6A21\u578B\uFF1A</p><ul><li>Node \u4E2D\u4F4E\u5C42\u5C01\u88C5\u4E86\u4E00\u5806\u7684\u5F02\u6B65\u64CD\u4F5C API <ul><li>\u6587\u4EF6\u64CD\u4F5C</li><li>\u7F51\u7EDC\u64CD\u4F5C</li><li>...</li></ul></li><li>JavaScript \u8BED\u8A00\u672C\u8EAB\u662F\u5355\u7EBF\u7A0B\u7684</li></ul><p><img src="'+o+'" alt="img"></p><h2 id="event-loop-\u4E8B\u4EF6\u5FAA\u73AF" tabindex="-1">Event Loop\uFF08\u4E8B\u4EF6\u5FAA\u73AF\uFF09 <a class="header-anchor" href="#event-loop-\u4E8B\u4EF6\u5FAA\u73AF" aria-hidden="true">#</a></h2><ul><li><a href="https://youtu.be/8aGhZQkoFbQ" target="_blank" rel="noreferrer">\u83F2\u5229\u666E\xB7\u7F57\u4F2F\u8328\uFF1A\u5230\u5E95\u4EC0\u4E48\u662F Event Loop \u5462\uFF1F</a></li><li><a href="https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick/" target="_blank" rel="noreferrer">The Node.js Event Loop, Timers, and process.nextTick()</a></li><li><a href="http://www.ruanyifeng.com/blog/2014/10/event-loop.html" target="_blank" rel="noreferrer">\u962E\u4E00\u5CF0 - JavaScript \u8FD0\u884C\u673A\u5236\u8BE6\u89E3\uFF1A\u518D\u8C08 Event Loop</a></li></ul><h2 id="node-\u53D1\u5C55\u5386\u53F2" tabindex="-1">Node \u53D1\u5C55\u5386\u53F2 <a class="header-anchor" href="#node-\u53D1\u5C55\u5386\u53F2" aria-hidden="true">#</a></h2><p>\u4EE5\u4E0B\u5185\u5BB9\u8282\u9009\u81EA\uFF1A<a href="https://cnodejs.org/topic/555d3d54e684c4c8088a0d78" target="_blank" rel="noreferrer">\u6765\u81EA\u6734\u7075\u5927\u5927\u7684 -- Node.js \u7B80\u53F2</a></p><p>Node.js \u4E0D\u662F\u51ED\u7A7A\u51FA\u73B0\u7684\u9879\u76EE\uFF0C\u4E5F<strong>\u4E0D\u662F\u67D0\u4E2A Web \u524D\u7AEF\u5DE5\u7A0B\u5E08\u4E3A\u4E86\u5B8C\u6210\u5C06 JavaScript \u5E94\u7528\u5230\u670D\u52A1\u7AEF\u7684\u7406\u60F3\u800C\u5728\u5B9E\u9A8C\u5BA4\u91CC\u6363\u9F13\u51FA\u6765\u7684</strong>\u3002\u5B83\u7684\u51FA\u73B0\u4E3B\u8981\u5F52\u529F\u4E8E<strong>Ryan Dahl \u5386\u65F6\u591A\u5E74\u7684\u7814\u7A76</strong>\uFF0C\u4EE5\u53CA\u4E00\u4E2A\u6070\u5230\u597D\u5904\u7684\u8282\u70B9\u30022008 \u5E74<strong>V8 \u968F\u7740 Chrome \u6D4F\u89C8\u5668\u7684\u51FA\u4E16</strong>\uFF0CJavaScript \u811A\u672C\u8BED\u8A00\u7684\u6267\u884C\u6548\u7387\u5F97\u5230\u8D28\u7684\u63D0\u5347\uFF0C\u8FD9\u7ED9 Ryan Dahl \u5E26\u6765\u65B0\u7684\u542F\u793A\uFF0C\u4ED6\u539F\u672C\u7684\u7814\u7A76\u5DE5\u4F5C\u4E0E V8 \u4E4B\u95F4\u78B0\u649E\u51FA\u706B\u82B1\uFF0C\u4E8E\u662F\u5E26\u6765\u4E86\u4E00\u4E2A\u57FA\u4E8E\u4E8B\u4EF6\u7684\u9AD8\u6027\u80FD Web \u670D\u52A1\u5668\u3002</p><p><img src="'+t+'" alt="img"></p><p>\u4E0A\u56FE\u4E3A Node.js \u521B\u59CB\u4EBA Ryan Dahl\u3002</p><p>Ryan Dahl \u7684\u7ECF\u5386\u6BD4\u8F83\u5947\u7279\uFF0C\u4ED6\u5E76\u975E\u79D1\u73ED\u51FA\u8EAB\u7684\u5F00\u53D1\u8005\uFF0C\u5728 2004 \u5E74\u7684\u65F6\u5019\u4ED6\u8FD8\u5728\u7EBD\u7EA6\u7684\u7F57\u5F7B\u65AF\u7279\u5927\u5B66\u6570\u5B66\u7CFB\u8BFB\u535A\u58EB\uFF0C\u671F\u95F4\u6709\u7814\u7A76\u4E00\u4E9B\u5206\u5F62\u3001\u5206\u7C7B\u4EE5\u53CA p-adic \u5206\u6790\uFF0C\u8FD9\u4E9B\u90FD\u8DDF\u5F00\u6E90\u548C\u7F16\u7A0B\u6CA1\u5565\u5173\u7CFB\u30022006 \u5E74\uFF0C\u4E5F\u8BB8\u662F\u538C\u5026\u4E86\u8BFB\u535A\u7684\u65E0\u804A\uFF0C\u4ED6\u4EA7\u751F\u4E86\u300E\u4E16\u754C\u90A3\u4E48\u5927\uFF0C\u6211\u60F3\u53BB\u770B\u770B\u300F\u7684\u5FF5\u5934\uFF0C\u505A\u51FA\u4E86\u9000\u5B66\u7684\u51B3\u5B9A\uFF0C\u7136\u540E\u4E00\u4E2A\u4EBA\u6765\u5230\u667A\u5229\u7684 Valparaiso \u5C0F\u9547\u3002\u90A3\u65F6\u5019\u4ED6\u5C1A\u4E0D\u77E5\u9053\u627E\u4E00\u4E2A\u4EC0\u4E48\u6837\u7684\u5DE5\u4F5C\u6765\u7CCA\u53E3\uFF0C\u671F\u95F4\u4ED6\u66FE\u71AC\u591C\u505A\u4E86\u4E00\u4E9B\u4E0D\u5207\u5B9E\u9645\u7684\u7814\u7A76\uFF0C\u5982\u5982\u4F55\u901A\u8FC7\u4E91\u8FDB\u884C\u901A\u4FE1\u3002\u4E0B\u9762\u662F\u8FD9\u4E2A\u9636\u6BB5\u4ED6\u4EA7\u51FA\u7684\u4E2D\u95F4\u4EA7\u7269\uFF0C\u4E0E\u540E\u6765\u82F9\u679C\u53D1\u5E03\u7684 iCloud \u4F3C\u4E4E\u6709\u90A3\u4E48\u70B9\u76F8\u4F3C\u3002</p><p>\u4ECE\u90A3\u8D77\uFF0CRyan Dahl \u4E0D\u77E5\u9053\u662F\u5426\u56E0\u4E3A\u751F\u6D3B\u7684\u5173\u7CFB\uFF0C\u4ED6\u5F00\u59CB\u5B66\u4E60\u7F51\u7AD9\u5F00\u53D1\u4E86\uFF0C\u8D70\u4E0A\u4E86\u7801\u519C\u7684\u9053\u8DEF\u3002\u90A3\u65F6\u5019 Ruby on Rails \u5F88\u706B\uFF0C\u4ED6\u4E5F\u4E0D\u4F8B\u5916\u7684\u5B66\u4E60\u4E86\u5B83\u3002\u4ECE\u90A3\u65F6\u5019\u5F00\u59CB\uFF0CRyan Dahl \u7684\u751F\u6D3B\u65B9\u5F0F\u5C31\u662F\u63A5\u9879\u76EE\uFF0C\u7136\u540E\u53BB\u5BA2\u6237\u7684\u5730\u65B9\u5DE5\u4F5C\uFF0C\u5728\u4ED6\u773C\u4E2D\uFF0C\u62FF\u5DE5\u8D44\u548C\u4E0A\u73ED\u5176\u5B9E\u5C31\u662F\u53BB\u90A3\u91CC\u65C5\u884C\u3002\u6B64\u540E\u4ED6\u53BB\u8FC7\u5F88\u591A\u5730\u65B9\uFF0C\u5982\u963F\u6839\u5EF7\u7684\u5E03\u5B9C\u8BFA\u65AF\u827E\u5229\u65AF\u3001\u5FB7\u56FD\u7684\u79D1\u9686\u3001\u5965\u5730\u5229\u7684\u7EF4\u4E5F\u7EB3\u3002</p><p>Ryan Dahl \u7ECF\u8FC7\u4E24\u5E74\u7684\u5DE5\u4F5C\u540E\uFF0C\u6210\u4E3A\u4E86\u9AD8\u6027\u80FD Web \u670D\u52A1\u5668\u7684\u4E13\u5BB6\uFF0C\u4ECE\u63A5\u5F00\u53D1\u5E94\u7528\u5230\u53D8\u6210\u4E13\u95E8\u5E2E\u5BA2\u6237\u89E3\u51B3\u6027\u80FD\u95EE\u9898\u7684\u4E13\u5BB6\u3002\u671F\u95F4\u4ED6\u5F00\u59CB\u5199\u4E00\u4E9B\u5F00\u6E90\u9879\u76EE\u5E2E\u52A9\u5BA2\u6237\u89E3\u51B3Web \u670D\u52A1\u5668\u7684\u9AD8\u5E76\u53D1\u6027\u80FD\u95EE\u9898\uFF0C\u5C1D\u8BD5\u8FC7\u7684\u8BED\u8A00\u6709 Ruby\u3001C\u3001Lua\u3002\u5F53\u7136\u8FD9\u4E9B\u5C1D\u8BD5\u90FD\u6700\u7EC8\u5931\u8D25\u4E86\uFF0C\u53EA\u6709\u5176\u4E2D\u901A\u8FC7 C \u5199\u7684 HTTP \u670D\u52A1\u5E93 libebb \u9879\u76EE\u7565\u6709\u8D77\u8272\uFF0C\u57FA\u672C\u4E0A\u7B97\u4F5C libuv \u7684\u524D\u8EAB\u3002\u8FD9\u4E9B\u5931\u8D25\u5404\u6709\u5404\u7684\u539F\u56E0\uFF0CRuby \u56E0\u4E3A\u865A\u62DF\u673A\u6027\u80FD\u592A\u70C2\u800C\u65E0\u6CD5\u89E3\u51B3\u6839\u672C\u95EE\u9898\uFF0CC \u4EE3\u7801\u7684\u6027\u80FD\u9AD8\uFF0C\u4F46\u662F\u8BA9\u4E1A\u52A1\u901A\u8FC7 C \u8FDB\u884C\u5F00\u53D1\u663E\u7136\u662F\u4E0D\u592A\u73B0\u5B9E\u7684\u4E8B\u60C5\uFF0CLua \u5219\u662F\u5DF2\u6709\u7684\u540C\u6B65 I/O \u5BFC\u81F4\u65E0\u6CD5\u53D1\u6325\u6027\u80FD\u4F18\u52BF\u3002\u867D\u7136\u7ECF\u5386\u4E86\u5931\u8D25\uFF0C\u4F46 Ryan Dahl \u5927\u81F4\u7684\u611F\u89C9\u5230\u4E86\u89E3\u51B3\u95EE\u9898\u7684\u5173\u952E\u662F\u8981<strong>\u901A\u8FC7\u4E8B\u4EF6\u9A71\u52A8\u548C\u5F02\u6B65 I/O</strong>\u6765\u8FBE\u6210\u76EE\u7684\u3002</p><p>\u5728\u4ED6\u5FEB\u7EDD\u671B\u7684\u65F6\u5019\uFF0CV8 \u5F15\u64CE\u6765\u4E86\u3002V8 \u6EE1\u8DB3\u4ED6\u5173\u4E8E\u9AD8\u6027\u80FD Web \u670D\u52A1\u5668\u7684\u60F3\u8C61\uFF1A</p><ul><li>\u6CA1\u6709\u5386\u53F2\u5305\u88B1\uFF0C\u6CA1\u6709\u540C\u6B65 I/O\u3002\u4E0D\u4F1A\u51FA\u73B0\u4E00\u4E2A\u540C\u6B65 I/O \u5BFC\u81F4\u4E8B\u4EF6\u5FAA\u73AF\u6027\u80FD\u6025\u5267\u964D\u4F4E\u7684\u60C5\u51B5\u3002</li><li>V8 \u6027\u80FD\u8DB3\u591F\u597D\uFF0C\u8FDC\u8FDC\u6BD4 Python\u3001Ruby \u7B49\u5176\u4ED6\u811A\u672C\u8BED\u8A00\u7684\u5F15\u64CE\u5FEB\u3002</li><li>JavaScript \u8BED\u8A00\u7684\u95ED\u5305\u7279\u6027\u975E\u5E38\u65B9\u4FBF\uFF0C\u6BD4 C \u4E2D\u7684\u56DE\u8C03\u51FD\u6570\u597D\u7528\u3002</li></ul><p>\u4E8E\u662F\u5728 2009 \u5E74\u7684 2 \u6708\uFF0C\u6309\u65B0\u7684\u60F3\u6CD5\u4ED6\u63D0\u4EA4\u4E86\u9879\u76EE\u7684\u7B2C\u4E00\u884C\u4EE3\u7801\uFF0C\u8FD9\u4E2A\u9879\u76EE\u7684\u540D\u5B57\u6700\u7EC8\u88AB\u5B9A\u540D\u4E3A node\u3002</p><p>2009 \u5E74 5 \u6708\uFF0CRyan Dahl \u6B63\u5F0F\u5411\u5916\u754C\u5BA3\u5E03\u4ED6\u505A\u7684\u8FD9\u4E2A\u9879\u76EE\u30022009 \u5E74\u5E95\uFF0CRyan Dahl \u5728\u67CF\u6797\u4E3E\u884C\u7684 JSConf EU \u4F1A\u8BAE\u4E0A\u53D1\u8868\u5173\u4E8E Node.js \u7684\u6F14\u8BB2\uFF0C\u4E4B\u540E Node.js \u9010\u6E10\u6D41\u884C\u4E8E\u4E16\u3002</p><p>\u4EE5\u4E0A\u5C31\u662FNode.js \u9879\u76EE\u7684\u7531\u6765\uFF0C\u662F\u4E00\u4E2A\u4E13\u6CE8\u4E8E\u5B9E\u73B0\u9AD8\u6027\u80FD Web \u670D\u52A1\u5668\u4F18\u5316\u7684\u4E13\u5BB6\uFF0C\u51E0\u7ECF\u63A2\u7D22\uFF0C\u51E0\u7ECF\u632B\u6298\u540E\uFF0C\u9047\u5230 V8 \u800C\u8BDE\u751F\u7684\u9879\u76EE\u3002</p><ul><li>2009 \u5E74 5 \u6708\uFF0CRyan Dahl \u5728 github \u4E0A\u53D1\u5E03\u4E86\u6700\u521D\u7684 Node \u7248\u672C</li><li>2010 \u5E74\u5E95\uFF0CRyan Dahl \u52A0\u5165 Joyent \u516C\u53F8\u5168\u804C\u8D1F\u8D23 Node \u7684\u53D1\u5C55</li><li>2011 \u5E74 7 \u6708\uFF0CNode \u5728\u5FAE\u8F6F\u7684\u652F\u6301\u4E0B\u53D1\u5E03\u4E86 Windows \u7248</li><li>2012 \u5E74 1 \u6708\u5E95\uFF0CRyan Dahl \u5C06\u638C\u95E8\u4EBA\u8EAB\u4EFD\u8F6C\u4EA4\u7ED9\u4E86 Isaac Z.Schlueter\uFF0C\u81EA\u5DF1\u8F6C\u5411\u4E00\u4E9B\u7814\u7A76\u9879\u76EE</li><li>2014 \u5E74 12 \u6708\uFF0C\u591A\u4E3A\u91CD\u91CF\u7EA7 Node \u5F00\u53D1\u8005\u4E0D\u6EE1 Joyent \u5BF9 Node \u7684\u7BA1\u7406\uFF0C\u81EA\u7ACB\u95E8\u6237\u521B\u5EFA\u4E86 io.js</li><li>2015 \u5E74 9 \u6708\uFF0CNode \u4E0E io.js \u5408\u5E76\uFF0CNode \u7684\u7248\u672C\u4ECE 0.12.7 \u76F4\u63A5\u5347\u7EA7\u5230\u4E86 4.0.0 \u5408\u5E76\u540E\u7684 io.js \u548C Node \u5728 Joyent \u516C\u53F8\u7684\u7EF4\u62A4\u4E0B\u5E76\u884C\u4E86\u4E24\u4E2A\u7248\u672C\uFF1A <ul><li>\u4E00\u4E2A\u662F 4.x.x \u8FD8\u662F\u539F\u6765\u7684 Node\uFF0C\u8FD9\u4E2A\u7248\u672C\u662F\u7A33\u5B9A\u7248</li><li>\u4E00\u4E2A\u662F 5.x.x\uFF0C\u76EE\u524D\u5DF2\u7ECF\u66F4\u65B0\u5230\u4E86 6.8.1\uFF0C\u5176\u5B9E\u5C31\u662F io.js\uFF0C\u6700\u65B0\u7279\u6027\u7248\uFF0C\u4E0D\u5EFA\u8BAE\u751F\u4EA7\u73AF\u5883\u4F7F\u7528</li></ul></li><li>Node \u8BA1\u5212\u5728 2016 \u5E74 10 \u6708\u5E95\u6B63\u5F0F\u53D1\u5E03 Node 7.0 <ul><li>7.0 \u5DF2\u7ECF\u6700\u5927\u9650\u5EA6\u7684\u652F\u6301\u4E86\u5F88\u591A\u7684 ES6 \u65B0\u8BED\u6CD5</li><li>\u800C\u4E14\u63D0\u9AD8\u4E86\u6574\u4F53\u7684\u6267\u884C\u6027\u80FD\uFF0C\u63D0\u4F9B\u4E86\u4E00\u4E9B\u522B\u7684 API</li></ul></li></ul><p>Node \u5404\u4E2A\u91CD\u8981\u7248\u672C\u53D1\u5C55\u9636\u6BB5\uFF1A</p><p>1.0 \u4E4B\u524D\u7B49\u4E86 6 \u5E74\uFF0C\u800C\u4ECE 1.0 \u5230 8.0\uFF0C\u53EA\u7528\u4E86 2 \u5E74\u65F6\u95F4\u3002</p><ul><li>\u4ECE v0.1 \u5230 0.12 \u7528\u4E86 6 \u5E74</li><li>2015-01-14 \u53D1\u5E03\u4E86 v1.0.0 \u7248\u672C\uFF08io.js\uFF09</li><li>2.x\uFF08io.js\uFF09</li><li>3.x\uFF08io.js\uFF09</li><li>2015 \u5E74 09 \u6708 Node.js \u57FA\u91D1\u4F1A\u5DF2\u53D1\u5E03 Node.js V4.0 \u7248 \u4E0E io.js \u5408\u5E76\u540E\u7684\u7B2C\u4E00\u4E2A\u7248\u672C</li><li>2015 \u5E74 10 \u6708 Node.jsv4.2.0 \u5C06\u662F\u9996\u4E2A lts \u957F\u671F\u652F\u6301\u7248\u672C</li><li>2016 \u5E74\u5E95\u53D1\u5E03\u5230 4.2.4 &amp;&amp; 5.4.0</li><li>2016 \u5E74 3 \u6708 20 \u65E5 v4.4.0 LTS\uFF08\u957F\u671F\u652F\u6301\u7248\u672C\uFF09\u548C v5.9.0 Stable\uFF08\u7A33\u5B9A\u7248\u672C\uFF09</li><li>2016 \u5E74\u5E95 v6.0 \u652F\u6301 95%\u4EE5\u4E0A\u7684 es6 \u7279\u6027 \uFF0C v7.0 \u901A\u8FC7 flag \u652F\u6301 async \u51FD\u6570\uFF0C99%\u7684 es6 \u7279\u6027</li><li>2017 \u5E74 2 \u6708\u53D1\u5E03 v7.6 \u7248\u672C\uFF0C\u53EF\u4EE5\u4E0D\u901A\u8FC7 flag \u4F7F\u7528 async \u51FD\u6570</li></ul><h2 id="\u4E3A\u4EC0\u4E48\u8981\u5B66\u4E60-node" tabindex="-1">\u4E3A\u4EC0\u4E48\u8981\u5B66\u4E60 Node <a class="header-anchor" href="#\u4E3A\u4EC0\u4E48\u8981\u5B66\u4E60-node" aria-hidden="true">#</a></h2><ul><li>\u589E\u52A0\u804C\u4E1A\u7ADE\u4E89\u529B</li><li>\u4F01\u4E1A\u9700\u6C42</li><li>\u8FDB\u4E00\u6B65\u7406\u89E3 Web</li><li>\u5927\u524D\u7AEF\u5FC5\u5907\u6280\u80FD</li><li>\u4E3A\u4E86\u66F4\u597D\u7684\u5B66\u4E60\u524D\u7AEF\u6846\u67B6</li><li>...</li></ul><h2 id="node-\u80FD\u505A\u4EC0\u4E48" tabindex="-1">Node \u80FD\u505A\u4EC0\u4E48 <a class="header-anchor" href="#node-\u80FD\u505A\u4EC0\u4E48" aria-hidden="true">#</a></h2><blockquote><p>Node \u6253\u7834\u4E86\u8FC7\u53BB JavaScript \u53EA\u80FD\u5728\u6D4F\u89C8\u5668\u4E2D\u8FD0\u884C\u7684\u5C40\u9762 \u524D\u540E\u7AEF\u7F16\u7A0B\u73AF\u5883\u7EDF\u4E00\uFF0C\u5927\u5927\u964D\u4F4E\u4E86\u524D\u540E\u7AEF\u8BED\u8A00\u5207\u6362\u7684\u4EE3\u4EF7 \u77E5\u4E4E - JavaScript \u80FD\u505A\u4EC0\u4E48\uFF0C\u8BE5\u505A\u4EC0\u4E48\uFF1F Atwood&#39;s Law: any application that can be written in JavaScript, will eventually be written in JavaScript. \u51E1\u662F\u80FD\u7528 JavaScript \u5199\u51FA\u6765\u7684\uFF0C\u6700\u7EC8\u90FD\u4F1A\u7528 JavaScript \u5199\u51FA\u6765\u3002</p></blockquote><ul><li>Web \u670D\u52A1\u5668</li><li>\u547D\u4EE4\u884C\u5DE5\u5177</li><li>\u7F51\u7EDC\u722C\u866B</li><li>\u684C\u9762\u5E94\u7528\u7A0B\u5E8F\u5F00\u53D1\uFF08Electron\uFF09</li><li>...</li></ul><h2 id="\u7ED3\u8BED" tabindex="-1">\u7ED3\u8BED <a class="header-anchor" href="#\u7ED3\u8BED" aria-hidden="true">#</a></h2><p>JavaScript \u957F\u4E45\u4EE5\u6765\u4E00\u76F4\u88AB\u9650\u5236\u5728\u6D4F\u89C8\u5668\u7684\u6C99\u7BB1\u4E2D\u8FD0\u884C\uFF0C \u5B83\u7684\u80FD\u529B\u53D6\u51B3\u4E8E\u6D4F\u89C8\u5668\u4E2D\u95F4\u5C42\u63D0\u4F9B\u7684\u652F\u6301\u591A\u5C11\u3002 Node \u5C06\u9AD8\u6027\u80FD\u7684 V8 \u5E26\u5230\u4E86\u670D\u52A1\u5668\u7AEF\uFF0C\u4F7F JavaScript \u4E5F\u53EF\u4EE5\u5F00\u53D1\u51FA\u5B9E\u65F6\u9AD8\u6027\u80FD\u7684\u670D\u52A1\u5668\u3002 \u5728 Node \u4E2D\uFF0C\u4E0D\u518D\u4E0E CSS \u6837\u5F0F\u8868\uFF0CDOM \u6811\u6253\u4EA4\u9053\uFF0C \u53EF\u4EE5\u968F\u610F\u7684\u8BBF\u95EE\u672C\u5730\u6587\u4EF6\uFF0C\u642D\u5EFA WebSocket \u670D\u52A1\u5668\uFF0C\u8FDE\u63A5\u6570\u636E\u5E93\u7B49\u7CFB\u7EDF\u7EA7\u5E95\u5C42\u64CD\u4F5C\u3002 Node \u4E0D\u5904\u7406 UI\uFF0C\u53EA\u5173\u5FC3\u6570\u636E\uFF0C\u65E0\u8BBA\u662F\u672C\u5730\u6570\u636E\u8FD8\u662F\u7F51\u7EDC\u6570\u636E\u3002 \u524D\u540E\u7AEF\u7F16\u7A0B\u7EDF\u4E00\uFF0C\u5927\u5927\u964D\u4F4E\u4E86\u524D\u540E\u7AEF\u7F16\u7A0B\u5207\u6362\u7684\u4EE3\u7801\u3002</p><p>\u5BF9\u4E8E\u524D\u7AEF\u5DE5\u7A0B\u5E08\u800C\u8A00\uFF0C\u81EA\u5DF1\u719F\u6089\u7684 JavaScript \u5982\u4ECA\u7ADF\u7136\u53EF\u4EE5\u5728\u53E6\u4E00\u4E2A\u5730\u65B9\u5927\u653E\u5F02\u5F69\uFF0C \u4E0D\u8C08\u5176\u4ED6\u539F\u56E0\uFF0C\u4EC5\u4EC5\u56E0\u4E3A\u597D\u5947\uFF0C\u4E5F\u503C\u5F97\u53BB\u5173\u6CE8\u548C\u63A2\u7A76\u5B83\u3002</p><h2 id="\u76F8\u5173\u94FE\u63A5" tabindex="-1">\u76F8\u5173\u94FE\u63A5 <a class="header-anchor" href="#\u76F8\u5173\u94FE\u63A5" aria-hidden="true">#</a></h2><ul><li><a href="https://nodejs.org/en/docs/" target="_blank" rel="noreferrer">Node.js \u5B98\u65B9\u6587\u6863</a></li><li><a href="http://nodejs.cn/" target="_blank" rel="noreferrer">Node.js \u4E2D\u6587\u6587\u6863\uFF08\u975E\u5B98\u65B9\uFF09</a></li><li><a href="https://read.douban.com/ebook/12053349/" target="_blank" rel="noreferrer">\u6DF1\u5165\u6D45\u51FA Node.js</a></li><li><a href="https://book.douban.com/subject/25892704/" target="_blank" rel="noreferrer">Node.js \u6743\u5A01\u6307\u5357</a></li><li><a href="https://book.douban.com/subject/25870705/" target="_blank" rel="noreferrer">Node.js \u5B9E\u6218</a></li><li><a href="https://book.douban.com/subject/25867920/" target="_blank" rel="noreferrer">Node.js \u5B9E\u6218</a></li><li><a href="https://book.douban.com/subject/26642320/" target="_blank" rel="noreferrer">Node.js \u5B9E\u6218\uFF08\u7B2C 2 \u5B63\uFF09</a></li><li><a href="http://cnodejs.org/" target="_blank" rel="noreferrer">Node.js \u4E2D\u6587\u793E\u533A</a></li><li><a href="https://github.com/alsotang/node-lessons" target="_blank" rel="noreferrer">Node.js \u5305\u6559\u4E0D\u5305\u4F1A</a></li><li><a href="http://es6.ruanyifeng.com/" target="_blank" rel="noreferrer">EcmaScript 6 \u5165\u95E8</a></li><li><a href="https://github.com/nqdeng/7-days-nodejs" target="_blank" rel="noreferrer">\u4E03\u5929\u5B66\u4F1A NodeJS</a></li></ul>',46),s=[d];function h(c,p,u,b,g,f){return i(),l("div",null,s)}const j=e(n,[["render",h]]);export{v as __pageData,j as default};
