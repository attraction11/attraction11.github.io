import{_ as s,c as a,o as n,a as e}from"./app.44b49aaa.js";const g=JSON.parse('{"title":"\u4F7F\u7528useState\u6CE8\u610F\u4E8B\u9879","description":"","frontmatter":{},"headers":[{"level":2,"title":"1.useState\u4E0D\u9002\u5408\u590D\u6742\u5BF9\u8C61\u7684\u66F4\u6539","slug":"_1-usestate\u4E0D\u9002\u5408\u590D\u6742\u5BF9\u8C61\u7684\u66F4\u6539","link":"#_1-usestate\u4E0D\u9002\u5408\u590D\u6742\u5BF9\u8C61\u7684\u66F4\u6539","children":[]},{"level":2,"title":"2.useState\u5F02\u6B65\u56DE\u8C03\u7684\u95EE\u9898","slug":"_2-usestate\u5F02\u6B65\u56DE\u8C03\u7684\u95EE\u9898","link":"#_2-usestate\u5F02\u6B65\u56DE\u8C03\u7684\u95EE\u9898","children":[]},{"level":2,"title":"3.\u6839\u636Ehook\u7684\u89C4\u5219\uFF0C\u4F7F\u7528useState\u7684\u4F4D\u7F6E\u6709\u9650\u5236","slug":"_3-\u6839\u636Ehook\u7684\u89C4\u5219-\u4F7F\u7528usestate\u7684\u4F4D\u7F6E\u6709\u9650\u5236","link":"#_3-\u6839\u636Ehook\u7684\u89C4\u5219-\u4F7F\u7528usestate\u7684\u4F4D\u7F6E\u6709\u9650\u5236","children":[]},{"level":2,"title":"4.\u4F7F\u7528useState\uFF0C\u56DE\u8C03\u51FD\u6570\u5F62\u5F0F\u66F4\u6539\u6570\u636E","slug":"_4-\u4F7F\u7528usestate-\u56DE\u8C03\u51FD\u6570\u5F62\u5F0F\u66F4\u6539\u6570\u636E","link":"#_4-\u4F7F\u7528usestate-\u56DE\u8C03\u51FD\u6570\u5F62\u5F0F\u66F4\u6539\u6570\u636E","children":[]},{"level":2,"title":"5.useState\u5B58\u5165\u7684\u503C\u53EA\u662F\u8BE5\u503C\u7684\u5F15\u7528\uFF08\u5F15\u7528\u7C7B\u578B\uFF09","slug":"_5-usestate\u5B58\u5165\u7684\u503C\u53EA\u662F\u8BE5\u503C\u7684\u5F15\u7528-\u5F15\u7528\u7C7B\u578B","link":"#_5-usestate\u5B58\u5165\u7684\u503C\u53EA\u662F\u8BE5\u503C\u7684\u5F15\u7528-\u5F15\u7528\u7C7B\u578B","children":[]},{"level":2,"title":"6.useState\uFF0C\u5982\u679C\u4FDD\u5B58\u5F15\u7528\u6570\u636E\uFF0CuseEffect\u68C0\u6D4B\u4E0D\u5230\u53D8\u5316\uFF1F","slug":"_6-usestate-\u5982\u679C\u4FDD\u5B58\u5F15\u7528\u6570\u636E-useeffect\u68C0\u6D4B\u4E0D\u5230\u53D8\u5316","link":"#_6-usestate-\u5982\u679C\u4FDD\u5B58\u5F15\u7528\u6570\u636E-useeffect\u68C0\u6D4B\u4E0D\u5230\u53D8\u5316","children":[]},{"level":2,"title":"7.useState\u65E0\u6CD5\u4FDD\u5B58\u4E00\u4E2A\u51FD\u6570","slug":"_7-usestate\u65E0\u6CD5\u4FDD\u5B58\u4E00\u4E2A\u51FD\u6570","link":"#_7-usestate\u65E0\u6CD5\u4FDD\u5B58\u4E00\u4E2A\u51FD\u6570","children":[]}],"relativePath":"Framework/React/UseStateNote.md"}'),l={name:"Framework/React/UseStateNote.md"},p=e(`<h1 id="\u4F7F\u7528usestate\u6CE8\u610F\u4E8B\u9879" tabindex="-1">\u4F7F\u7528useState\u6CE8\u610F\u4E8B\u9879 <a class="header-anchor" href="#\u4F7F\u7528usestate\u6CE8\u610F\u4E8B\u9879" aria-hidden="true">#</a></h1><h2 id="_1-usestate\u4E0D\u9002\u5408\u590D\u6742\u5BF9\u8C61\u7684\u66F4\u6539" tabindex="-1">1.useState\u4E0D\u9002\u5408\u590D\u6742\u5BF9\u8C61\u7684\u66F4\u6539 <a class="header-anchor" href="#_1-usestate\u4E0D\u9002\u5408\u590D\u6742\u5BF9\u8C61\u7684\u66F4\u6539" aria-hidden="true">#</a></h2><p>\u56E0\u4E3AuseState\u4E0D\u80FD\u50CFsetState\u90A3\u6837\u8FDB\u884C\u5408\u5E76\u66F4\u65B0\uFF0C\u5F53\u4F7F\u7528useState\u7B2C\u4E8C\u4E2A\u53C2\u6570\u8FDB\u884C\u6570\u636E\u66F4\u65B0\u7684\u65F6\u5019\uFF0C\u5FC5\u987B\u4F20\u5165\u4E00\u4E2A\u5B8C\u6574\u7684\u7ED3\u6784\uFF0C\u800C\u4E0D\u4EC5\u4EC5\u53EA\u662F\u6539\u53D8\u7684\u90A3\u4E00\u90E8\u5206\u3002</p><h2 id="_2-usestate\u5F02\u6B65\u56DE\u8C03\u7684\u95EE\u9898" tabindex="-1">2.useState\u5F02\u6B65\u56DE\u8C03\u7684\u95EE\u9898 <a class="header-anchor" href="#_2-usestate\u5F02\u6B65\u56DE\u8C03\u7684\u95EE\u9898" aria-hidden="true">#</a></h2><p>\u5F53\u4F7F\u7528usestate\u5BF9\u6570\u636E\u8FDB\u884C\u66F4\u65B0\uFF0C\u5E76\u4E0D\u80FD\u7ACB\u523B\u83B7\u53D6\u5230\u6700\u65B0\u7684\u6570\u636E\u3002</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki vp-code-dark"><code><span class="line"><span style="color:#dbd7caee;">const [name, setName] = useState(&#39;dx&#39;);</span></span>
<span class="line"><span style="color:#dbd7caee;">const handleTest = () =&gt; {</span></span>
<span class="line"><span style="color:#dbd7caee;">  console.log(name) // dx</span></span>
<span class="line"><span style="color:#dbd7caee;">  setName(&#39;dx1&#39;)</span></span>
<span class="line"><span style="color:#dbd7caee;">  console.log(name) // dx</span></span>
<span class="line"><span style="color:#dbd7caee;">}</span></span>
<span class="line"><span style="color:#dbd7caee;"></span></span></code></pre><pre class="shiki vp-code-light"><code><span class="line"><span style="color:#393a34;">const [name, setName] = useState(&#39;dx&#39;);</span></span>
<span class="line"><span style="color:#393a34;">const handleTest = () =&gt; {</span></span>
<span class="line"><span style="color:#393a34;">  console.log(name) // dx</span></span>
<span class="line"><span style="color:#393a34;">  setName(&#39;dx1&#39;)</span></span>
<span class="line"><span style="color:#393a34;">  console.log(name) // dx</span></span>
<span class="line"><span style="color:#393a34;">}</span></span>
<span class="line"><span style="color:#393a34;"></span></span></code></pre></div><p>\u89E3\u51B3\u65B9\u6848</p><h4 id="\u4E00\u3001\u914D\u5408useeffect\u4F7F\u7528" tabindex="-1">\u4E00\u3001\u914D\u5408useEffect\u4F7F\u7528 <a class="header-anchor" href="#\u4E00\u3001\u914D\u5408useeffect\u4F7F\u7528" aria-hidden="true">#</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki vp-code-dark"><code><span class="line"><span style="color:#dbd7caee;">const [name, setName] = useState(&#39;dx&#39;);</span></span>
<span class="line"><span style="color:#dbd7caee;">const handleTest = () =&gt; {</span></span>
<span class="line"><span style="color:#dbd7caee;">  console.log(name) //dx</span></span>
<span class="line"><span style="color:#dbd7caee;">  setName(&#39;dx1&#39;)</span></span>
<span class="line"><span style="color:#dbd7caee;">  console.log(name)//dx</span></span>
<span class="line"><span style="color:#dbd7caee;">}</span></span>
<span class="line"><span style="color:#dbd7caee;">  </span></span>
<span class="line"><span style="color:#dbd7caee;">useEffect(() =&gt; {</span></span>
<span class="line"><span style="color:#dbd7caee;">  console.log(name) //dx1</span></span>
<span class="line"><span style="color:#dbd7caee;">},[name])</span></span>
<span class="line"><span style="color:#dbd7caee;"></span></span></code></pre><pre class="shiki vp-code-light"><code><span class="line"><span style="color:#393a34;">const [name, setName] = useState(&#39;dx&#39;);</span></span>
<span class="line"><span style="color:#393a34;">const handleTest = () =&gt; {</span></span>
<span class="line"><span style="color:#393a34;">  console.log(name) //dx</span></span>
<span class="line"><span style="color:#393a34;">  setName(&#39;dx1&#39;)</span></span>
<span class="line"><span style="color:#393a34;">  console.log(name)//dx</span></span>
<span class="line"><span style="color:#393a34;">}</span></span>
<span class="line"><span style="color:#393a34;">  </span></span>
<span class="line"><span style="color:#393a34;">useEffect(() =&gt; {</span></span>
<span class="line"><span style="color:#393a34;">  console.log(name) //dx1</span></span>
<span class="line"><span style="color:#393a34;">},[name])</span></span>
<span class="line"><span style="color:#393a34;"></span></span></code></pre></div><h4 id="\u4E8C\u3001\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684\u53D8\u91CF\u4FDD\u5B58\u6700\u65B0\u7684\u6570\u636E" tabindex="-1">\u4E8C\u3001\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684\u53D8\u91CF\u4FDD\u5B58\u6700\u65B0\u7684\u6570\u636E <a class="header-anchor" href="#\u4E8C\u3001\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684\u53D8\u91CF\u4FDD\u5B58\u6700\u65B0\u7684\u6570\u636E" aria-hidden="true">#</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki vp-code-dark"><code><span class="line"><span style="color:#dbd7caee;">const [name, setName] = useState(&#39;dx&#39;);</span></span>
<span class="line"><span style="color:#dbd7caee;">const handleTest = () =&gt; {</span></span>
<span class="line"><span style="color:#dbd7caee;">  console.log(name) //dx</span></span>
<span class="line"><span style="color:#dbd7caee;">  const newName = &quot;dx1&quot;</span></span>
<span class="line"><span style="color:#dbd7caee;">  setName(newName)</span></span>
<span class="line"><span style="color:#dbd7caee;">  console.log(newName) //dx1</span></span>
<span class="line"><span style="color:#dbd7caee;">}</span></span>
<span class="line"><span style="color:#dbd7caee;"></span></span></code></pre><pre class="shiki vp-code-light"><code><span class="line"><span style="color:#393a34;">const [name, setName] = useState(&#39;dx&#39;);</span></span>
<span class="line"><span style="color:#393a34;">const handleTest = () =&gt; {</span></span>
<span class="line"><span style="color:#393a34;">  console.log(name) //dx</span></span>
<span class="line"><span style="color:#393a34;">  const newName = &quot;dx1&quot;</span></span>
<span class="line"><span style="color:#393a34;">  setName(newName)</span></span>
<span class="line"><span style="color:#393a34;">  console.log(newName) //dx1</span></span>
<span class="line"><span style="color:#393a34;">}</span></span>
<span class="line"><span style="color:#393a34;"></span></span></code></pre></div><h2 id="_3-\u6839\u636Ehook\u7684\u89C4\u5219-\u4F7F\u7528usestate\u7684\u4F4D\u7F6E\u6709\u9650\u5236" tabindex="-1">3.\u6839\u636Ehook\u7684\u89C4\u5219\uFF0C\u4F7F\u7528useState\u7684\u4F4D\u7F6E\u6709\u9650\u5236 <a class="header-anchor" href="#_3-\u6839\u636Ehook\u7684\u89C4\u5219-\u4F7F\u7528usestate\u7684\u4F4D\u7F6E\u6709\u9650\u5236" aria-hidden="true">#</a></h2><ul><li>\u4EC5\u9876\u5C42\u8C03\u7528 Hook \uFF1A\u4E0D\u80FD\u5728\u5FAA\u73AF\uFF0C\u6761\u4EF6\uFF0C\u5D4C\u5957\u51FD\u6570\u7B49\u4E2D\u8C03\u7528useState()\u3002</li><li>\u5728\u591A\u4E2AuseState()\u8C03\u7528\u4E2D\uFF0C\u6E32\u67D3\u4E4B\u95F4\u7684\u8C03\u7528\u987A\u5E8F\u5FC5\u987B\u76F8\u540C\u3002</li><li>\u4EC5\u4ECEReact \u51FD\u6570\u8C03\u7528 Hook:\u5FC5\u987B\u4EC5\u5728\u51FD\u6570\u7EC4\u4EF6\u6216\u81EA\u5B9A\u4E49\u94A9\u5B50\u5185\u90E8\u8C03\u7528useState()\u3002</li></ul><h2 id="_4-\u4F7F\u7528usestate-\u56DE\u8C03\u51FD\u6570\u5F62\u5F0F\u66F4\u6539\u6570\u636E" tabindex="-1">4.\u4F7F\u7528useState\uFF0C\u56DE\u8C03\u51FD\u6570\u5F62\u5F0F\u66F4\u6539\u6570\u636E <a class="header-anchor" href="#_4-\u4F7F\u7528usestate-\u56DE\u8C03\u51FD\u6570\u5F62\u5F0F\u66F4\u6539\u6570\u636E" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki vp-code-dark"><code><span class="line"><span style="color:#dbd7caee;">const [a, setA] = useState({c:1})</span></span>
<span class="line"><span style="color:#dbd7caee;">/** oldA\u4E3A\u4E4B\u524D\u7684a,return\u4E3A\u8BBE\u7F6E\u7684\u65B0\u503C */</span></span>
<span class="line"><span style="color:#dbd7caee;">setA((oldA) =&gt; {</span></span>
<span class="line"><span style="color:#dbd7caee;">  return {c: oldA.c + 1}</span></span>
<span class="line"><span style="color:#dbd7caee;">})</span></span>
<span class="line"><span style="color:#dbd7caee;"></span></span></code></pre><pre class="shiki vp-code-light"><code><span class="line"><span style="color:#393a34;">const [a, setA] = useState({c:1})</span></span>
<span class="line"><span style="color:#393a34;">/** oldA\u4E3A\u4E4B\u524D\u7684a,return\u4E3A\u8BBE\u7F6E\u7684\u65B0\u503C */</span></span>
<span class="line"><span style="color:#393a34;">setA((oldA) =&gt; {</span></span>
<span class="line"><span style="color:#393a34;">  return {c: oldA.c + 1}</span></span>
<span class="line"><span style="color:#393a34;">})</span></span>
<span class="line"><span style="color:#393a34;"></span></span></code></pre></div><h2 id="_5-usestate\u5B58\u5165\u7684\u503C\u53EA\u662F\u8BE5\u503C\u7684\u5F15\u7528-\u5F15\u7528\u7C7B\u578B" tabindex="-1">5.useState\u5B58\u5165\u7684\u503C\u53EA\u662F\u8BE5\u503C\u7684\u5F15\u7528\uFF08\u5F15\u7528\u7C7B\u578B\uFF09 <a class="header-anchor" href="#_5-usestate\u5B58\u5165\u7684\u503C\u53EA\u662F\u8BE5\u503C\u7684\u5F15\u7528-\u5F15\u7528\u7C7B\u578B" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki vp-code-dark"><code><span class="line"><span style="color:#dbd7caee;">const textObj = {name:&#39;dx&#39;}</span></span>
<span class="line"><span style="color:#dbd7caee;">const [useState1, setUseState1] = useState(textObj )</span></span>
<span class="line"><span style="color:#dbd7caee;">const [useState2, setUseState2] = useState(textObj )</span></span>
<span class="line"><span style="color:#dbd7caee;">/** usestate\u7684\u64CD\u4F5C\u4E0D\u8981\u653E\u5728\u51FD\u6570\u7684\u6700\u5916\u5C42\uFF0C\u8FD9\u91CC\u53EA\u662F\u7B80\u5355\u7684\u4EE3\u7801\u5C55\u793A\uFF0C\u4F60\u53EF\u4EE5\u5C06set\u64CD\u4F5C\u653E\u5728\u67D0\u4E2A\u51FD\u6570\u91CC\u9762 */</span></span>
<span class="line"><span style="color:#dbd7caee;">setUseState1((oldUseState1) =&gt; {</span></span>
<span class="line"><span style="color:#dbd7caee;">  oldUseState1.age = 18</span></span>
<span class="line"><span style="color:#dbd7caee;">  return {...oldUseState1}</span></span>
<span class="line"><span style="color:#dbd7caee;">})</span></span>
<span class="line"><span style="color:#dbd7caee;">useEffect(() =&gt; {</span></span>
<span class="line"><span style="color:#dbd7caee;">  /** \u6539\u53D8\u4E00\u4E2A\u4F1A\u5BFC\u81F4\u4E24\u4E2A\u90FD\u6539\u53D8,\u6DF1\u6D45\u62F7\u8D1D\u7684\u95EE\u9898 */</span></span>
<span class="line"><span style="color:#dbd7caee;">  console.log(useState1)  // {name: &quot;dx&quot;, age: 18}</span></span>
<span class="line"><span style="color:#dbd7caee;">  console.log(useState2)  // {name: &quot;dx&quot;, age: 18}</span></span>
<span class="line"><span style="color:#dbd7caee;">},[useState1])</span></span>
<span class="line"><span style="color:#dbd7caee;"></span></span></code></pre><pre class="shiki vp-code-light"><code><span class="line"><span style="color:#393a34;">const textObj = {name:&#39;dx&#39;}</span></span>
<span class="line"><span style="color:#393a34;">const [useState1, setUseState1] = useState(textObj )</span></span>
<span class="line"><span style="color:#393a34;">const [useState2, setUseState2] = useState(textObj )</span></span>
<span class="line"><span style="color:#393a34;">/** usestate\u7684\u64CD\u4F5C\u4E0D\u8981\u653E\u5728\u51FD\u6570\u7684\u6700\u5916\u5C42\uFF0C\u8FD9\u91CC\u53EA\u662F\u7B80\u5355\u7684\u4EE3\u7801\u5C55\u793A\uFF0C\u4F60\u53EF\u4EE5\u5C06set\u64CD\u4F5C\u653E\u5728\u67D0\u4E2A\u51FD\u6570\u91CC\u9762 */</span></span>
<span class="line"><span style="color:#393a34;">setUseState1((oldUseState1) =&gt; {</span></span>
<span class="line"><span style="color:#393a34;">  oldUseState1.age = 18</span></span>
<span class="line"><span style="color:#393a34;">  return {...oldUseState1}</span></span>
<span class="line"><span style="color:#393a34;">})</span></span>
<span class="line"><span style="color:#393a34;">useEffect(() =&gt; {</span></span>
<span class="line"><span style="color:#393a34;">  /** \u6539\u53D8\u4E00\u4E2A\u4F1A\u5BFC\u81F4\u4E24\u4E2A\u90FD\u6539\u53D8,\u6DF1\u6D45\u62F7\u8D1D\u7684\u95EE\u9898 */</span></span>
<span class="line"><span style="color:#393a34;">  console.log(useState1)  // {name: &quot;dx&quot;, age: 18}</span></span>
<span class="line"><span style="color:#393a34;">  console.log(useState2)  // {name: &quot;dx&quot;, age: 18}</span></span>
<span class="line"><span style="color:#393a34;">},[useState1])</span></span>
<span class="line"><span style="color:#393a34;"></span></span></code></pre></div><p>\u89E3\u51B3\u7684\u65B9\u6848</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki vp-code-dark"><code><span class="line"><span style="color:#dbd7caee;">const textObj = {name:&#39;dx&#39;}</span></span>
<span class="line"><span style="color:#dbd7caee;">const [useState1, setUseState1] = useState(textObj )</span></span>
<span class="line"><span style="color:#dbd7caee;">const [useState2, setUseState2] = useState(JSON.parse(JSON.stringify(textObj)))</span></span>
<span class="line"><span style="color:#dbd7caee;">/** usestate\u7684\u64CD\u4F5C\u4E0D\u8981\u653E\u5728\u51FD\u6570\u7684\u6700\u5916\u5C42\uFF0C\u8FD9\u91CC\u53EA\u662F\u7B80\u5355\u7684\u4EE3\u7801\u5C55\u793A\uFF0C\u4F60\u53EF\u4EE5\u5C06set\u64CD\u4F5C\u653E\u5728\u67D0\u4E2A\u51FD\u6570\u91CC\u9762 */</span></span>
<span class="line"><span style="color:#dbd7caee;">setUseState1((oldUseState1) =&gt; {</span></span>
<span class="line"><span style="color:#dbd7caee;">  oldUseState1.age = 18</span></span>
<span class="line"><span style="color:#dbd7caee;">  return {...oldUseState1}</span></span>
<span class="line"><span style="color:#dbd7caee;">})</span></span>
<span class="line"><span style="color:#dbd7caee;"></span></span>
<span class="line"><span style="color:#dbd7caee;">useEffect(() =&gt; {</span></span>
<span class="line"><span style="color:#dbd7caee;">  /** \u6539\u53D8\u4E00\u4E2A\u4F1A\u5BFC\u81F4\u4E24\u4E2A\u90FD\u6539\u53D8,\u6DF1\u6D45\u62F7\u8D1D\u7684\u95EE\u9898 */</span></span>
<span class="line"><span style="color:#dbd7caee;">  console.log(useState1)  // {name: &quot;dx&quot;, age: 18}</span></span>
<span class="line"><span style="color:#dbd7caee;">  console.log(useState2)  // {name: &quot;dx&quot;}</span></span>
<span class="line"><span style="color:#dbd7caee;">},[useState1])</span></span>
<span class="line"><span style="color:#dbd7caee;"></span></span></code></pre><pre class="shiki vp-code-light"><code><span class="line"><span style="color:#393a34;">const textObj = {name:&#39;dx&#39;}</span></span>
<span class="line"><span style="color:#393a34;">const [useState1, setUseState1] = useState(textObj )</span></span>
<span class="line"><span style="color:#393a34;">const [useState2, setUseState2] = useState(JSON.parse(JSON.stringify(textObj)))</span></span>
<span class="line"><span style="color:#393a34;">/** usestate\u7684\u64CD\u4F5C\u4E0D\u8981\u653E\u5728\u51FD\u6570\u7684\u6700\u5916\u5C42\uFF0C\u8FD9\u91CC\u53EA\u662F\u7B80\u5355\u7684\u4EE3\u7801\u5C55\u793A\uFF0C\u4F60\u53EF\u4EE5\u5C06set\u64CD\u4F5C\u653E\u5728\u67D0\u4E2A\u51FD\u6570\u91CC\u9762 */</span></span>
<span class="line"><span style="color:#393a34;">setUseState1((oldUseState1) =&gt; {</span></span>
<span class="line"><span style="color:#393a34;">  oldUseState1.age = 18</span></span>
<span class="line"><span style="color:#393a34;">  return {...oldUseState1}</span></span>
<span class="line"><span style="color:#393a34;">})</span></span>
<span class="line"><span style="color:#393a34;"></span></span>
<span class="line"><span style="color:#393a34;">useEffect(() =&gt; {</span></span>
<span class="line"><span style="color:#393a34;">  /** \u6539\u53D8\u4E00\u4E2A\u4F1A\u5BFC\u81F4\u4E24\u4E2A\u90FD\u6539\u53D8,\u6DF1\u6D45\u62F7\u8D1D\u7684\u95EE\u9898 */</span></span>
<span class="line"><span style="color:#393a34;">  console.log(useState1)  // {name: &quot;dx&quot;, age: 18}</span></span>
<span class="line"><span style="color:#393a34;">  console.log(useState2)  // {name: &quot;dx&quot;}</span></span>
<span class="line"><span style="color:#393a34;">},[useState1])</span></span>
<span class="line"><span style="color:#393a34;"></span></span></code></pre></div><h2 id="_6-usestate-\u5982\u679C\u4FDD\u5B58\u5F15\u7528\u6570\u636E-useeffect\u68C0\u6D4B\u4E0D\u5230\u53D8\u5316" tabindex="-1">6.useState\uFF0C\u5982\u679C\u4FDD\u5B58\u5F15\u7528\u6570\u636E\uFF0CuseEffect\u68C0\u6D4B\u4E0D\u5230\u53D8\u5316\uFF1F <a class="header-anchor" href="#_6-usestate-\u5982\u679C\u4FDD\u5B58\u5F15\u7528\u6570\u636E-useeffect\u68C0\u6D4B\u4E0D\u5230\u53D8\u5316" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki vp-code-dark"><code><span class="line"><span style="color:#dbd7caee;">const textObj = {name:&#39;dx&#39;}</span></span>
<span class="line"><span style="color:#dbd7caee;">const [useState1, setUseState1] = useState(textObj)</span></span>
<span class="line"><span style="color:#dbd7caee;">/** usestate\u7684\u64CD\u4F5C\u4E0D\u8981\u653E\u5728\u51FD\u6570\u7684\u6700\u5916\u5C42\uFF0C\u8FD9\u91CC\u53EA\u662F\u7B80\u5355\u7684\u4EE3\u7801\u5C55\u793A\uFF0C\u4F60\u53EF\u4EE5\u5C06set\u64CD\u4F5C\u653E\u5728\u67D0\u4E2A\u51FD\u6570\u91CC\u9762 */</span></span>
<span class="line"><span style="color:#dbd7caee;">setUseState1((oldUseState1) =&gt; {</span></span>
<span class="line"><span style="color:#dbd7caee;">  oldUseState1.age = 18</span></span>
<span class="line"><span style="color:#dbd7caee;">  return oldUseState1</span></span>
<span class="line"><span style="color:#dbd7caee;">}</span></span>
<span class="line"><span style="color:#dbd7caee;">useEffect(() =&gt; {</span></span>
<span class="line"><span style="color:#dbd7caee;">  console.log(useState1)  </span></span>
<span class="line"><span style="color:#dbd7caee;">},[useState1])</span></span>
<span class="line"><span style="color:#dbd7caee;">//\u7ED3\u679C\u662F\u6CA1\u6709\u4EFB\u4F55\u53CD\u5E94</span></span>
<span class="line"><span style="color:#dbd7caee;"></span></span></code></pre><pre class="shiki vp-code-light"><code><span class="line"><span style="color:#393a34;">const textObj = {name:&#39;dx&#39;}</span></span>
<span class="line"><span style="color:#393a34;">const [useState1, setUseState1] = useState(textObj)</span></span>
<span class="line"><span style="color:#393a34;">/** usestate\u7684\u64CD\u4F5C\u4E0D\u8981\u653E\u5728\u51FD\u6570\u7684\u6700\u5916\u5C42\uFF0C\u8FD9\u91CC\u53EA\u662F\u7B80\u5355\u7684\u4EE3\u7801\u5C55\u793A\uFF0C\u4F60\u53EF\u4EE5\u5C06set\u64CD\u4F5C\u653E\u5728\u67D0\u4E2A\u51FD\u6570\u91CC\u9762 */</span></span>
<span class="line"><span style="color:#393a34;">setUseState1((oldUseState1) =&gt; {</span></span>
<span class="line"><span style="color:#393a34;">  oldUseState1.age = 18</span></span>
<span class="line"><span style="color:#393a34;">  return oldUseState1</span></span>
<span class="line"><span style="color:#393a34;">}</span></span>
<span class="line"><span style="color:#393a34;">useEffect(() =&gt; {</span></span>
<span class="line"><span style="color:#393a34;">  console.log(useState1)  </span></span>
<span class="line"><span style="color:#393a34;">},[useState1])</span></span>
<span class="line"><span style="color:#393a34;">//\u7ED3\u679C\u662F\u6CA1\u6709\u4EFB\u4F55\u53CD\u5E94</span></span>
<span class="line"><span style="color:#393a34;"></span></span></code></pre></div><p>\u89E3\u51B3\u65B9\u6CD5</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki vp-code-dark"><code><span class="line"><span style="color:#dbd7caee;">const textObj = {name:&#39;dx&#39;}</span></span>
<span class="line"><span style="color:#dbd7caee;">const [useState1, setUseState1] = useState(textObj)</span></span>
<span class="line"><span style="color:#dbd7caee;">/** usestate\u7684\u64CD\u4F5C\u4E0D\u8981\u653E\u5728\u51FD\u6570\u7684\u6700\u5916\u5C42\uFF0C\u8FD9\u91CC\u53EA\u662F\u7B80\u5355\u7684\u4EE3\u7801\u5C55\u793A\uFF0C\u4F60\u53EF\u4EE5\u5C06set\u64CD\u4F5C\u653E\u5728\u67D0\u4E2A\u51FD\u6570\u91CC\u9762 */</span></span>
<span class="line"><span style="color:#dbd7caee;">setUseState1((oldUseState1) =&gt; {</span></span>
<span class="line"><span style="color:#dbd7caee;">  oldUseState1.age = 18</span></span>
<span class="line"><span style="color:#dbd7caee;">  /** \u8FD4\u56DE\u4E00\u4E2A\u65B0\u7684\u5BF9\u8C61,useEffectc\u624D\u80FD\u68C0\u6D4B\u5F97\u5230 */</span></span>
<span class="line"><span style="color:#dbd7caee;">  return {...oldUseState1}</span></span>
<span class="line"><span style="color:#dbd7caee;">}</span></span>
<span class="line"><span style="color:#dbd7caee;">useEffect(() =&gt; {</span></span>
<span class="line"><span style="color:#dbd7caee;">  console.log(useState1)  // {name: &quot;dx&quot;, age: 18}</span></span>
<span class="line"><span style="color:#dbd7caee;">},[useState1])</span></span>
<span class="line"><span style="color:#dbd7caee;"></span></span></code></pre><pre class="shiki vp-code-light"><code><span class="line"><span style="color:#393a34;">const textObj = {name:&#39;dx&#39;}</span></span>
<span class="line"><span style="color:#393a34;">const [useState1, setUseState1] = useState(textObj)</span></span>
<span class="line"><span style="color:#393a34;">/** usestate\u7684\u64CD\u4F5C\u4E0D\u8981\u653E\u5728\u51FD\u6570\u7684\u6700\u5916\u5C42\uFF0C\u8FD9\u91CC\u53EA\u662F\u7B80\u5355\u7684\u4EE3\u7801\u5C55\u793A\uFF0C\u4F60\u53EF\u4EE5\u5C06set\u64CD\u4F5C\u653E\u5728\u67D0\u4E2A\u51FD\u6570\u91CC\u9762 */</span></span>
<span class="line"><span style="color:#393a34;">setUseState1((oldUseState1) =&gt; {</span></span>
<span class="line"><span style="color:#393a34;">  oldUseState1.age = 18</span></span>
<span class="line"><span style="color:#393a34;">  /** \u8FD4\u56DE\u4E00\u4E2A\u65B0\u7684\u5BF9\u8C61,useEffectc\u624D\u80FD\u68C0\u6D4B\u5F97\u5230 */</span></span>
<span class="line"><span style="color:#393a34;">  return {...oldUseState1}</span></span>
<span class="line"><span style="color:#393a34;">}</span></span>
<span class="line"><span style="color:#393a34;">useEffect(() =&gt; {</span></span>
<span class="line"><span style="color:#393a34;">  console.log(useState1)  // {name: &quot;dx&quot;, age: 18}</span></span>
<span class="line"><span style="color:#393a34;">},[useState1])</span></span>
<span class="line"><span style="color:#393a34;"></span></span></code></pre></div><h2 id="_7-usestate\u65E0\u6CD5\u4FDD\u5B58\u4E00\u4E2A\u51FD\u6570" tabindex="-1">7.useState\u65E0\u6CD5\u4FDD\u5B58\u4E00\u4E2A\u51FD\u6570 <a class="header-anchor" href="#_7-usestate\u65E0\u6CD5\u4FDD\u5B58\u4E00\u4E2A\u51FD\u6570" aria-hidden="true">#</a></h2><p>\u4F60\u662F\u5426\u5C1D\u8BD5\u7740\u5C06\u51FD\u6570\u7684\u5F15\u7528\u4F5C\u4E3A\u4E00\u4E2A\u53D8\u91CF\u4FDD\u5B58\u5230useState\u4E2D\u53BB\u5462\uFF1F<br> \u6BD4\u5982\uFF1A</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki vp-code-dark"><code><span class="line"><span style="color:#dbd7caee;">const testFunciton1 = () =&gt; {</span></span>
<span class="line"><span style="color:#dbd7caee;">  console.log({name: &#39;dx&#39;,age: &#39;18&#39;})</span></span>
<span class="line"><span style="color:#dbd7caee;">}</span></span>
<span class="line"><span style="color:#dbd7caee;">/** usestate\u4FDD\u5B58\u51FD\u6570\u6D4B\u8BD5 */</span></span>
<span class="line"><span style="color:#dbd7caee;">const [stateFunction, setstateFunction] = useState&lt;() =&gt; void&gt;(testFunciton1);</span></span>
<span class="line"><span style="color:#dbd7caee;">useEffect(() =&gt; {</span></span>
<span class="line"><span style="color:#dbd7caee;"> console.log(stateFunction)// {name: &#39;dx&#39;, age: 18}</span></span>
<span class="line"><span style="color:#dbd7caee;">}, [stateFunction])</span></span>
<span class="line"><span style="color:#dbd7caee;"></span></span></code></pre><pre class="shiki vp-code-light"><code><span class="line"><span style="color:#393a34;">const testFunciton1 = () =&gt; {</span></span>
<span class="line"><span style="color:#393a34;">  console.log({name: &#39;dx&#39;,age: &#39;18&#39;})</span></span>
<span class="line"><span style="color:#393a34;">}</span></span>
<span class="line"><span style="color:#393a34;">/** usestate\u4FDD\u5B58\u51FD\u6570\u6D4B\u8BD5 */</span></span>
<span class="line"><span style="color:#393a34;">const [stateFunction, setstateFunction] = useState&lt;() =&gt; void&gt;(testFunciton1);</span></span>
<span class="line"><span style="color:#393a34;">useEffect(() =&gt; {</span></span>
<span class="line"><span style="color:#393a34;"> console.log(stateFunction)// {name: &#39;dx&#39;, age: 18}</span></span>
<span class="line"><span style="color:#393a34;">}, [stateFunction])</span></span>
<span class="line"><span style="color:#393a34;"></span></span></code></pre></div><p>\u4EE3\u7801\u4E2D\u4ECE\u672A\u8C03\u7528\u8FC7testFunciton1 \uFF0C\u7ED3\u679CtestFunciton1\u5374\u88AB\u6267\u884C\u4E86<br> useEffect\u6253\u5370\u51FA\u6765\u7684\u5374\u662F\u4E00\u4E2Aundefined\u3002</p><p>\u7A0D\u5FAE\u6539\u52A8\u4E00\u4E0B\u4EE3\u7801\uFF0C\u518D\u6D4B\u8BD5</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki vp-code-dark"><code><span class="line"><span style="color:#dbd7caee;">const testFunciton1 = () =&gt; {</span></span>
<span class="line"><span style="color:#dbd7caee;">  console.log({name: &#39;dx&#39;,age: &#39;18&#39;})</span></span>
<span class="line"><span style="color:#dbd7caee;">  return {</span></span>
<span class="line"><span style="color:#dbd7caee;">    name: &#39;yx&#39;,</span></span>
<span class="line"><span style="color:#dbd7caee;">    age: &#39;17&#39;</span></span>
<span class="line"><span style="color:#dbd7caee;">  }</span></span>
<span class="line"><span style="color:#dbd7caee;">}</span></span>
<span class="line"><span style="color:#dbd7caee;">/** usestate\u4FDD\u5B58\u51FD\u6570\u6D4B\u8BD5 */</span></span>
<span class="line"><span style="color:#dbd7caee;">const [stateFunction, setstateFunction] = useState&lt;() =&gt; void&gt;(testFunciton1);</span></span>
<span class="line"><span style="color:#dbd7caee;">useEffect(() =&gt; {</span></span>
<span class="line"><span style="color:#dbd7caee;"> console.log(stateFunction)// {name: &#39;dx&#39;, age: 18} // {name: &#39;yx&#39;, age: 17}</span></span>
<span class="line"><span style="color:#dbd7caee;">}, [stateFunction])</span></span>
<span class="line"><span style="color:#dbd7caee;"></span></span></code></pre><pre class="shiki vp-code-light"><code><span class="line"><span style="color:#393a34;">const testFunciton1 = () =&gt; {</span></span>
<span class="line"><span style="color:#393a34;">  console.log({name: &#39;dx&#39;,age: &#39;18&#39;})</span></span>
<span class="line"><span style="color:#393a34;">  return {</span></span>
<span class="line"><span style="color:#393a34;">    name: &#39;yx&#39;,</span></span>
<span class="line"><span style="color:#393a34;">    age: &#39;17&#39;</span></span>
<span class="line"><span style="color:#393a34;">  }</span></span>
<span class="line"><span style="color:#393a34;">}</span></span>
<span class="line"><span style="color:#393a34;">/** usestate\u4FDD\u5B58\u51FD\u6570\u6D4B\u8BD5 */</span></span>
<span class="line"><span style="color:#393a34;">const [stateFunction, setstateFunction] = useState&lt;() =&gt; void&gt;(testFunciton1);</span></span>
<span class="line"><span style="color:#393a34;">useEffect(() =&gt; {</span></span>
<span class="line"><span style="color:#393a34;"> console.log(stateFunction)// {name: &#39;dx&#39;, age: 18} // {name: &#39;yx&#39;, age: 17}</span></span>
<span class="line"><span style="color:#393a34;">}, [stateFunction])</span></span>
<span class="line"><span style="color:#393a34;"></span></span></code></pre></div><p>\u5F88\u660E\u663E\uFF0C\u5728useState\u4E2D\uFF0C\u51FD\u6570\u4F1A\u81EA\u52A8\u8C03\u7528\uFF0C\u5E76\u4E14\u4FDD\u5B58\u51FD\u6570\u8FD4\u56DE\u7684\u503C\uFF0C\u800C\u4E0D\u80FD\u4FDD\u5B58\u51FD\u6570\u672C\u8EAB\u3002</p><p>\u89E3\u51B3\u7684\u65B9\u6848<br> \u4F7F\u7528useState\u4E0D\u80FD\u4FDD\u5B58\u51FD\u6570\uFF0C\u90A3\u4E48\u53EF\u4EE5\u4F7F\u7528useCallback\u8FD9\u4E2Ahook\u3002</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki vp-code-dark"><code><span class="line"><span style="color:#dbd7caee;">/** useCallback,\u4F7F\u7528\u53C2\u6570\u4E0EuseEffect\u4E00\u81F4 */</span></span>
<span class="line"><span style="color:#dbd7caee;">const testFunction = useCallback(() =&gt; {</span></span>
<span class="line"><span style="color:#dbd7caee;">  // useCallback\u8FD4\u56DE\u7684\u51FD\u6570\u5728useCallbak\u4E2D\u6784\u5EFA</span></span>
<span class="line"><span style="color:#dbd7caee;">  const testFunciton1 = () =&gt; {</span></span>
<span class="line"><span style="color:#dbd7caee;">    console.log({ name: &#39;dx&#39;, age: &#39;18&#39; });</span></span>
<span class="line"><span style="color:#dbd7caee;">    return {</span></span>
<span class="line"><span style="color:#dbd7caee;">      name: &#39;yx&#39;,</span></span>
<span class="line"><span style="color:#dbd7caee;">      age: &#39;17&#39;,</span></span>
<span class="line"><span style="color:#dbd7caee;">    };</span></span>
<span class="line"><span style="color:#dbd7caee;">  };</span></span>
<span class="line"><span style="color:#dbd7caee;">  return testFunciton1;</span></span>
<span class="line"><span style="color:#dbd7caee;">}, []);</span></span>
<span class="line"><span style="color:#dbd7caee;">useEffect(() =&gt; {</span></span>
<span class="line"><span style="color:#dbd7caee;">  console.log(testFunction());// \u6253\u5370\u7684\u662F\u51FD\u6570</span></span>
<span class="line"><span style="color:#dbd7caee;">}, [testFunction]);</span></span>
<span class="line"><span style="color:#dbd7caee;"></span></span></code></pre><pre class="shiki vp-code-light"><code><span class="line"><span style="color:#393a34;">/** useCallback,\u4F7F\u7528\u53C2\u6570\u4E0EuseEffect\u4E00\u81F4 */</span></span>
<span class="line"><span style="color:#393a34;">const testFunction = useCallback(() =&gt; {</span></span>
<span class="line"><span style="color:#393a34;">  // useCallback\u8FD4\u56DE\u7684\u51FD\u6570\u5728useCallbak\u4E2D\u6784\u5EFA</span></span>
<span class="line"><span style="color:#393a34;">  const testFunciton1 = () =&gt; {</span></span>
<span class="line"><span style="color:#393a34;">    console.log({ name: &#39;dx&#39;, age: &#39;18&#39; });</span></span>
<span class="line"><span style="color:#393a34;">    return {</span></span>
<span class="line"><span style="color:#393a34;">      name: &#39;yx&#39;,</span></span>
<span class="line"><span style="color:#393a34;">      age: &#39;17&#39;,</span></span>
<span class="line"><span style="color:#393a34;">    };</span></span>
<span class="line"><span style="color:#393a34;">  };</span></span>
<span class="line"><span style="color:#393a34;">  return testFunciton1;</span></span>
<span class="line"><span style="color:#393a34;">}, []);</span></span>
<span class="line"><span style="color:#393a34;">useEffect(() =&gt; {</span></span>
<span class="line"><span style="color:#393a34;">  console.log(testFunction());// \u6253\u5370\u7684\u662F\u51FD\u6570</span></span>
<span class="line"><span style="color:#393a34;">}, [testFunction]);</span></span>
<span class="line"><span style="color:#393a34;"></span></span></code></pre></div>`,32),t=[p];function c(o,d,i,r,u,y){return n(),a("div",null,t)}const S=s(l,[["render",c]]);export{g as __pageData,S as default};
