import{_ as e,c as s,o as t,a}from"./app.0034e838.js";const k=JSON.parse('{"title":"\u8C08\u8C08react hooks\u7684\u4F18\u7F3A\u70B9","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4F18\u70B9\uFF1A","slug":"\u4F18\u70B9","link":"#\u4F18\u70B9","children":[]},{"level":2,"title":"\u7F3A\u70B9\uFF1A","slug":"\u7F3A\u70B9","link":"#\u7F3A\u70B9","children":[]}],"relativePath":"Framework/React/ReactHooks\u4F18\u7F3A\u70B9.md"}'),o={name:"Framework/React/ReactHooks\u4F18\u7F3A\u70B9.md"},n=a(`<h1 id="\u8C08\u8C08react-hooks\u7684\u4F18\u7F3A\u70B9" tabindex="-1">\u8C08\u8C08react hooks\u7684\u4F18\u7F3A\u70B9 <a class="header-anchor" href="#\u8C08\u8C08react-hooks\u7684\u4F18\u7F3A\u70B9" aria-hidden="true">#</a></h1><h2 id="\u4F18\u70B9" tabindex="-1">\u4F18\u70B9\uFF1A <a class="header-anchor" href="#\u4F18\u70B9" aria-hidden="true">#</a></h2><h4 id="\u66F4\u5BB9\u6613\u590D\u7528\u4EE3\u7801" tabindex="-1">\u66F4\u5BB9\u6613\u590D\u7528\u4EE3\u7801 <a class="header-anchor" href="#\u66F4\u5BB9\u6613\u590D\u7528\u4EE3\u7801" aria-hidden="true">#</a></h4><p>\u8FD9\u70B9\u5E94\u8BE5\u662F<code>react hooks</code>\u6700\u5927\u7684\u4F18\u70B9\uFF0C\u5B83\u901A\u8FC7\u81EA\u5B9A\u4E49hooks\u6765\u590D\u7528\u72B6\u6001\uFF0C\u4ECE\u800C\u89E3\u51B3\u4E86\u7C7B\u7EC4\u4EF6\u6709\u4E9B\u65F6\u5019\u96BE\u4EE5\u590D\u7528\u903B\u8F91\u7684\u95EE\u9898\u3002hooks\u662F\u600E\u4E48\u89E3\u51B3\u8FD9\u4E2A\u590D\u7528\u7684\u95EE\u9898\u5462\uFF0C\u5177\u4F53\u5982\u4E0B\uFF1A</p><ol><li>\u6BCF\u8C03\u7528useHook\u4E00\u6B21\u90FD\u4F1A\u751F\u6210\u4E00\u4EFD\u72EC\u7ACB\u7684\u72B6\u6001\uFF0C\u8FD9\u4E2A\u6CA1\u6709\u4EC0\u4E48\u9ED1\u9B54\u6CD5\uFF0C\u51FD\u6570\u6BCF\u6B21\u8C03\u7528\u90FD\u4F1A\u5F00\u8F9F\u4E00\u4EFD\u72EC\u7ACB\u7684\u5185\u5B58\u7A7A\u95F4\u3002</li><li>\u867D\u7136\u72B6\u6001(from useState)\u548C\u526F\u4F5C\u7528(<code>useEffect</code>)\u7684\u5B58\u5728\u4F9D\u8D56\u4E8E\u7EC4\u4EF6\uFF0C\u4F46\u5B83\u4EEC\u53EF\u4EE5\u5728\u7EC4\u4EF6\u5916\u90E8\u8FDB\u884C\u5B9A\u4E49\u3002\u8FD9\u70B9\u662F<code>class component</code>\u505A\u4E0D\u5230\u7684\uFF0C\u4F60\u65E0\u6CD5\u5728\u5916\u90E8\u58F0\u660Estate\u548C\u526F\u4F5C\u7528\uFF08\u5982<code>componentDidMount</code>\uFF09\u3002</li><li>\u7EC4\u4EF6\u6811\u5C42\u7EA7\u53D8\u6D45\u3002\u5728\u539F\u672C\u7684\u4EE3\u7801\u4E2D\uFF0C\u6211\u4EEC\u7ECF\u5E38\u4F7F\u7528 HOC/render props \u7B49\u65B9\u5F0F\u6765\u590D\u7528\u7EC4\u4EF6\u7684\u72B6\u6001\uFF0C\u589E\u5F3A\u529F\u80FD\u7B49\uFF0C\u65E0\u7591\u589E\u52A0\u4E86\u7EC4\u4EF6\u6811\u5C42\u6570\u53CA\u6E32\u67D3\uFF0C\u5728 React DevTools \u4E2D\u89C2\u5BDF\u8FC7 React \u5E94\u7528\uFF0C\u4F60\u4F1A\u53D1\u73B0\u7531 providers\uFF0Cconsumers\uFF0C\u9AD8\u9636\u7EC4\u4EF6\uFF0Crender props \u7B49\u5176\u4ED6\u62BD\u8C61\u5C42\u7EC4\u6210\u7684\u7EC4\u4EF6\u4F1A\u5F62\u6210\u201C\u5D4C\u5957\u5730\u72F1\u201D\u3002\u800C\u5728 React Hooks \u4E2D\uFF0C\u8FD9\u4E9B\u529F\u80FD\u90FD\u53EF\u4EE5\u901A\u8FC7\u5F3A\u5927\u7684\u81EA\u5B9A\u4E49\u7684 Hooks \u6765\u5B9E\u73B0\u3002\\</li><li>\u4E0D\u7528\u518D\u53BB\u8003\u8651 this \u7684\u6307\u5411\u95EE\u9898\u3002\u5728\u7C7B\u7EC4\u4EF6\u4E2D\uFF0C\u4F60\u5FC5\u987B\u53BB\u7406\u89E3 JavaScript \u4E2D this \u7684\u5DE5\u4F5C\u65B9\u5F0F\u3002</li></ol><p>\u4E0A\u9762\u8FD9\u4E24\u70B9\uFF0C\u9AD8\u9636\u7EC4\u4EF6\u4E5F\u80FD\u505A\u5230\u3002\u4F46\u9AD8\u9636\u7EC4\u4EF6\u7684\u7F3A\u70B9\u662F\uFF1A</p><ol><li><p>\u6765\u6E90\u4E0D\u6E05\u6670\uFF1A\u9AD8\u9636\u7EC4\u4EF6\u662F\u901A\u8FC7\u589E\u5F3A\u7EC4\u4EF6\u7684props\uFF08\u8D4B\u4E88\u4E00\u4E2A\u65B0\u7684\u5C5E\u6027\u6216\u8005\u65B9\u6CD5\u5230\u7EC4\u4EF6\u7684props\u5C5E\u6027\uFF09\uFF0C \u5B9E\u73B0\u8D77\u6765\u6BD4\u8F83\u9690\u5F0F\u3002\u4F60\u96BE\u4EE5\u533A\u5206\u8FD9\u4E2Aprops\u662F\u6765\u81EA\u54EA\u4E2A\u9AD8\u9636\u7EC4\u4EF6\u3002</p></li><li><p>\u9AD8\u9636\u7EC4\u4EF6\u9700\u8981\u5B9E\u4F8B\u5316\u4E00\u4E2A\u7236\u7EC4\u4EF6\u6765\u5B9E\u73B0\uFF0C\u4E0D\u7BA1\u662F\u5728\u4EE3\u7801\u91CF\u8FD8\u662F\u6027\u80FD\u4E0A\uFF0C\u90FD\u4E0D\u5982hooks\u3002</p></li><li><p>\u4F9D\u8D56\u4E0D\u6E05\u6670\uFF1A\u9AD8\u9636\u7EC4\u4EF6\u5BF9\u5165\u53C2\u7684\u4F9D\u8D56\u662F\u9690\u5F0F\u7684\uFF0C\u5165\u53C2\u53D1\u751F\u5728\u770B\u4E0D\u5230\u7684\u4E0A\u5C42\u7684\u9AD8\u9636\u7EC4\u4EF6\u91CC\u9762\u3002</p></li><li><p>\u547D\u540D\u51B2\u7A81\uFF1A\u9AD8\u9636\u7EC4\u4EF6\u592A\u591A\u65F6\uFF0C\u5BB9\u6613\u53D1\u751F\u547D\u540D\u51B2\u7A81\u3002</p></li></ol><h2 id="\u7F3A\u70B9" tabindex="-1">\u7F3A\u70B9\uFF1A <a class="header-anchor" href="#\u7F3A\u70B9" aria-hidden="true">#</a></h2><h4 id="\u7B80\u8FF0" tabindex="-1">\u7B80\u8FF0 <a class="header-anchor" href="#\u7B80\u8FF0" aria-hidden="true">#</a></h4><p>\u72B6\u6001\u4E0D\u540C\u6B65<br> \u4E0D\u597D\u7528\u7684useEffect\uFF0C</p><p>\u8FD9\u7EDD\u5BF9\u53EF\u4EE5\u6210\u4E3A\u6452\u5F03react hooks\u7684\u7406\u7531\u3002\u51FD\u6570\u7684\u8FD0\u884C\u662F\u72EC\u7ACB\u7684\uFF0C\u6BCF\u4E2A\u51FD\u6570\u90FD\u6709\u4E00\u4EFD\u7236\u7EA7\u4F5C\u7528\u57DF\u3002\u5F53\u6211\u4EEC\u5904\u7406\u590D\u6742\u903B\u8F91\u7684\u65F6\u5019\uFF0C\u7ECF\u5E38\u4F1A\u78B0\u5230\u72B6\u6001\u4E0D\u540C\u6B65\u7684\u95EE\u9898</p><p>\u526F\u4F5C\u7528\u4EE3\u7801\u4ECE\u4E3B\u52A8\u5F0F\u53D8\u6210\u54CD\u5E94\u5F0F<br> \u5199\u51FD\u6570\u7EC4\u4EF6\u65F6\uFF0C\u4F60\u4E0D\u5F97\u4E0D\u6539\u53D8\u4E00\u4E9B\u5199\u6CD5\u4E60\u60EF\u3002\u4F60\u5FC5\u987B\u628A\u6DF1\u5165\u7406\u89E3useEffect\u548CuseCallback\u8FD9\u4E9Bapi\u7684\u7B2C\u4E8C\u4E2A\u53C2\u6570\u7684\u4F5C\u7528\u3002\u5176\u6B21\uFF0C\u8FD8\u6709\u4E0B\u9762\u51E0\u70B9\uFF1A</p><p>useEffect\u7684\u4F9D\u8D56\u53C2\u6570\u5E76\u4E0D\u597D\u5199\uFF0C\u4F60\u9700\u8981\u82B1\u65F6\u95F4\u53BB\u5224\u65AD\u8BE5\u628A\u4EC0\u4E48\u53D8\u91CF\u52A0\u5165\u5230\u4F9D\u8D56\u6570\u7EC4\uFF0C\u5E78\u8FD0\u7684\u662Feslint-plugin-react-hooks\u5F88\u591A\u573A\u666F\u53EF\u4EE5\u5E2E\u4F60\u89E3\u51B3\u8FD9\u70B9\uFF0C\u4F46\u6709\u65F6\u5F97\u9760\u4F60\u81EA\u5DF1\u52A0\u4EE5\u5224\u65AD<br> useEffect\u5F88\u5BB9\u6613\u51FA\u9519\uFF0C\u5B83\u662F\u54CD\u5E94\u5F0F\u7684\uFF0C\u5F53\u67D0\u4E2A\u4F9D\u8D56\u9879\u53D8\u5316\u65F6\u5B83\u624D\u4F1A\u88AB\u8C03\u7528\u3002\u4F60\u5FC5\u987B\u53BB\u7406\u89E3\u5B83\u7684\u8C03\u7528\u65F6\u673A\u3001\u8C03\u7528\u65F6\u7684\u72B6\u6001\u8001\u65E7\u95EE\u9898\uFF0C\u8FD9\u4E0D\u76F4\u89C2\uFF0C\u4E5F\u96BE\u4EE5\u7EF4\u62A4\u3002\u6709\u65F6\uFF0CuseEffect\u4F1A\u53D1\u751F\u6BD4\u4F60\u9884\u671F\u66F4\u591A\u7684\u8C03\u7528\u6B21\u6570<br> \u600E\u4E48\u907F\u514Dreact hooks\u7684\u5E38\u89C1\u95EE\u9898<br> \u4E0D\u8981\u5728useEffect\u91CC\u9762\u5199\u592A\u591A\u7684\u4F9D\u8D56\u9879\uFF0C\u5212\u5206\u8FD9\u4E9B\u4F9D\u8D56\u9879\u6210\u591A\u4E2AuseEffect\uFF0C\u8FD9\u6837\u66F4\u597D\u7EF4\u62A4</p><h4 id="hook-api" tabindex="-1">Hook API <a class="header-anchor" href="#hook-api" aria-hidden="true">#</a></h4><table><thead><tr><th>\u540D\u79F0</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>useState</td><td>\u5728\u51FD\u6570\u7EC4\u4EF6\u4E2D\u7EF4\u62A4\u81EA\u5DF1\u7684\u72B6\u6001</td></tr><tr><td>useEffect</td><td>\u5728\u51FD\u6570\u7EC4\u4EF6\u4E2D\u5B9E\u73B0\u751F\u547D\u5468\u671F\u94A9\u5B50\u51FD\u6570</td></tr><tr><td>useContext</td><td>\u7528\u6765\u5904\u7406\u591A\u5C42\u7EA7\u4F20\u9012\u6570\u636E\u7684\u65B9\u5F0F\uFF0C\u51CF\u5C11\u7EC4\u4EF6\u5D4C\u5957</td></tr><tr><td>useReducer</td><td>\u8DDFreact-redux\u7684\u4F7F\u7528\u65B9\u5F0F\u4E00\u6837\uFF0C\u7B97\u662F\u63D0\u4F9B\u4E00\u4E2A mini \u7684 Redux \u7248\u672C</td></tr><tr><td>useCallback</td><td>\u83B7\u5F97\u4E00\u4E2A\u8BB0\u5FC6\u51FD\u6570\uFF0C\u907F\u514D\u5728\u67D0\u4E9B\u60C5\u51B5\u4E0B\u91CD\u65B0\u6E32\u67D3\u5B50\u7EC4\u4EF6\uFF0C\u7528\u6765\u505A\u6027\u80FD\u4F18\u5316</td></tr><tr><td>useMemo</td><td>\u83B7\u5F97\u4E00\u4E2A\u8BB0\u5FC6\u7EC4\u4EF6\uFF0C\u548CuseCallback\u975E\u5E38\u7C7B\u4F3C\uFF0C\u5B83\u9002\u7528\u4E8E\u8FD4\u56DE\u786E\u5B9A\u7684\u503C</td></tr><tr><td>useRef</td><td>\u751F\u6210\u5BF9 DOM \u5BF9\u8C61\u7684\u5F15\u7528\uFF0C\u5B83\u662F\u4E00\u4E2A\u771F\u6B63\u7684\u5F15\u7528\uFF0C\u800C\u4E0D\u662F\u628A\u503C\u62F7\u8FC7\u53BB</td></tr><tr><td>useImperativeHandle</td><td>\u900F\u4F20ref\uFF0C\u7528\u4E8E\u8BA9\u7236\u7EC4\u4EF6\u83B7\u53D6\u5B50\u7EC4\u4EF6\u5185\u7684\u5F15\u7528</td></tr><tr><td>useLayoutEffect</td><td>\u540C\u6B65\u6267\u884C\u526F\u4F5C\u7528\uFF0C\u5728\u9875\u9762\u5B8C\u5168\u6E32\u67D3\u5B8C\u6210\u540E\uFF0C\u64CD\u4F5CDOM</td></tr></tbody></table><p>\u5199\u51FD\u6570\u7EC4\u4EF6\u65F6\uFF0C\u4F60\u4E0D\u5F97\u4E0D\u6539\u53D8\u4E00\u4E9B\u5199\u6CD5\u4E60\u60EF\u3002\u4F60\u5FC5\u987B\u6E05\u695A\u4EE3\u7801\u4E2D<code>useEffect</code>\u548C<code>useCallback</code>\u7684\u201C\u4F9D\u8D56\u9879\u6570\u7EC4\u201D\u7684\u6539\u53D8\u65F6\u673A\u3002\u6709\u65F6\u5019\uFF0C\u4F60\u7684useEffect\u4F9D\u8D56\u67D0\u4E2A\u51FD\u6570\u7684\u4E0D\u53EF\u53D8\u6027\uFF0C\u8FD9\u4E2A\u51FD\u6570\u7684\u4E0D\u53EF\u53D8\u6027\u53C8\u4F9D\u8D56\u4E8E\u53E6\u4E00\u4E2A\u51FD\u6570\u7684\u4E0D\u53EF\u53D8\u6027\uFF0C\u8FD9\u6837\u4FBF\u5F62\u6210\u4E86\u4E00\u6761\u4F9D\u8D56\u94FE\u3002\u4E00\u65E6\u8FD9\u6761\u4F9D\u8D56\u94FE\u7684\u67D0\u4E2A\u8282\u70B9\u610F\u5916\u5730\u88AB\u6539\u53D8\u4E86\uFF0C\u4F60\u7684useEffect\u5C31\u88AB\u610F\u5916\u5730\u89E6\u53D1\u4E86\uFF0C\u5982\u679C\u4F60\u7684useEffect\u662F\u5E42\u7B49\u7684\u64CD\u4F5C\uFF0C\u53EF\u80FD\u5E26\u6765\u7684\u662F\u6027\u80FD\u5C42\u6B21\u7684\u95EE\u9898\uFF0C\u5982\u679C\u662F\u975E\u5E42\u7B49\uFF0C\u90A3\u5C31\u7CDF\u7CD5\u4E86\u3002</p><p>\u6240\u4EE5\uFF0C\u5BF9\u6BD4<code>componentDidmount</code>\u548C<code>componentDidUpdate</code>\uFF0CuseEffect\u5E26\u6765\u7684\u5FC3\u667A\u8D1F\u62C5\u66F4\u5927\u3002</p><h4 id="\u907F\u514Dreact-hooks\u7684\u5E38\u89C1\u95EE\u9898" tabindex="-1">\u907F\u514Dreact hooks\u7684\u5E38\u89C1\u95EE\u9898 <a class="header-anchor" href="#\u907F\u514Dreact-hooks\u7684\u5E38\u89C1\u95EE\u9898" aria-hidden="true">#</a></h4><ol><li>\u4E0D\u8981\u5728<code>useEffect</code>\u91CC\u9762\u5199\u592A\u591A\u7684\u4F9D\u8D56\u9879\uFF0C\u5212\u5206\u8FD9\u4E9B\u4F9D\u8D56\u9879\u6210\u591A\u4E2A\u5355\u4E00\u529F\u80FD\u7684<code>useEffect</code>\u3002\u5176\u5B9E\u8FD9\u70B9\u662F\u9075\u5FAA\u4E86\u8F6F\u4EF6\u8BBE\u8BA1\u7684\u201C\u5355\u4E00\u804C\u8D23\u6A21\u5F0F\u201D\u3002</li><li>\u5982\u679C\u4F60\u78B0\u5230\u72B6\u6001\u4E0D\u540C\u6B65\u7684\u95EE\u9898\uFF0C\u53EF\u4EE5\u8003\u8651\u4E0B\u624B\u52A8\u4F20\u9012\u53C2\u6570\u5230\u51FD\u6570\u3002\u5982\uFF1A</li></ol><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki vp-code-dark"><code><span class="line"><span style="color:#dbd7caee;">   // showCount\u7684count\u6765\u81EA\u7236\u7EA7\u4F5C\u7528\u57DF </span></span>
<span class="line"><span style="color:#dbd7caee;">   const [count,setCount] = useState(xxx); </span></span>
<span class="line"><span style="color:#dbd7caee;">   function showCount(){ console.log(count) } </span></span>
<span class="line"><span style="color:#dbd7caee;">   </span></span>
<span class="line"><span style="color:#dbd7caee;">   // showCount\u7684count\u6765\u81EA\u53C2\u6570 </span></span>
<span class="line"><span style="color:#dbd7caee;">   const [count,setCount] = useState(xxx); </span></span>
<span class="line"><span style="color:#dbd7caee;">   function showCount(c){ console.log(c) }</span></span>
<span class="line"><span style="color:#dbd7caee;"></span></span></code></pre><pre class="shiki vp-code-light"><code><span class="line"><span style="color:#393a34;">   // showCount\u7684count\u6765\u81EA\u7236\u7EA7\u4F5C\u7528\u57DF </span></span>
<span class="line"><span style="color:#393a34;">   const [count,setCount] = useState(xxx); </span></span>
<span class="line"><span style="color:#393a34;">   function showCount(){ console.log(count) } </span></span>
<span class="line"><span style="color:#393a34;">   </span></span>
<span class="line"><span style="color:#393a34;">   // showCount\u7684count\u6765\u81EA\u53C2\u6570 </span></span>
<span class="line"><span style="color:#393a34;">   const [count,setCount] = useState(xxx); </span></span>
<span class="line"><span style="color:#393a34;">   function showCount(c){ console.log(c) }</span></span>
<span class="line"><span style="color:#393a34;"></span></span></code></pre></div><p>\u4F46\u8FD9\u4E2A\u4E5F\u53EA\u80FD\u89E3\u51B3\u4E00\u90E8\u5206\u95EE\u9898\uFF0C\u5F88\u591A\u65F6\u5019\u4F60\u4E0D\u5F97\u4E0D\u4F7F\u7528\u4E0A\u8FF0\u7684<code>useRef</code>\u65B9\u6848\u3002</p><ol start="3"><li>\u62C6\u5206\u7EC4\u4EF6\uFF0C\u7EC6\u5316\u7EC4\u4EF6\u7684\u7C92\u5EA6\u3002\u590D\u6742\u4E1A\u52A1\u573A\u666F\u4E2D\u4F7F\u7528hooks\uFF0C\u5E94\u5C3D\u53EF\u80FD\u5730\u7EC6\u5206\u7EC4\u4EF6\uFF0C\u4F7F\u5F97\u7EC4\u4EF6\u7684\u529F\u80FD\u5C3D\u53EF\u80FD\u5355\u4E00\uFF0C\u8FD9\u6837\u7684hooks\u7EC4\u4EF6\u66F4\u597D\u7EF4\u62A4\u3002</li><li><code>hooks</code>\u5F88\u597D\u7528\u5F88\u5F3A\u5927\uFF0C\u4F46\u5B83\u4E0D\u64C5\u957F\u5F02\u6B65\u3002\u4F46\u5728\u6709\u592A\u591A\u5F02\u6B65\u903B\u8F91\u7684\u4EE3\u7801\u65F6\uFF0Cclass\u6BD4\u5B83\u66F4\u9002\u5408\u3001\u66F4\u7A33\u3001\u66F4\u597D\u7EF4\u62A4\u3002</li><li>\u4E00\u5B9A\u8981\u52A0\u5165eslint-plugin-react-hooks\u8FD9\u4E2A\u63D2\u4EF6\uFF0C\u5E76\u4E14\u91CD\u89C6\u5B83\u7684\u8B66\u544A\uFF01</li></ol>`,22),c=[n];function l(d,r,p,i,h,u){return t(),s("div",null,c)}const b=e(o,[["render",l]]);export{k as __pageData,b as default};
