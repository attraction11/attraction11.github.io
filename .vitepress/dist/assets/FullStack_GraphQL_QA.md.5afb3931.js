import{_ as s,c as n,o as a,a as l}from"./app.547186f3.js";const B=JSON.parse('{"title":"QA \u95EE\u7B54","description":"","frontmatter":{"outline":"deep"},"headers":[{"level":2,"title":"\u4E00\u3001\u7B80\u7B54\u9898","slug":"\u4E00\u3001\u7B80\u7B54\u9898","link":"#\u4E00\u3001\u7B80\u7B54\u9898","children":[{"level":3,"title":"1. \u7B80\u8FF0 Graphql \uFF08\u7ED3\u5408Express \uFF09\u662F\u5982\u4F55\u4F7F\u7528\u7684\uFF1F","slug":"_1-\u7B80\u8FF0-graphql-\u7ED3\u5408express-\u662F\u5982\u4F55\u4F7F\u7528\u7684","link":"#_1-\u7B80\u8FF0-graphql-\u7ED3\u5408express-\u662F\u5982\u4F55\u4F7F\u7528\u7684","children":[]},{"level":3,"title":"2. \u7B80\u8FF0 Apollo server \u7684\u57FA\u672C\u4F7F\u7528\u3002","slug":"_2-\u7B80\u8FF0-apollo-server-\u7684\u57FA\u672C\u4F7F\u7528\u3002","link":"#_2-\u7B80\u8FF0-apollo-server-\u7684\u57FA\u672C\u4F7F\u7528\u3002","children":[]},{"level":3,"title":"3. \u4ECE MongoDB \u4E2D\u83B7\u53D6\u6570\u636E\u7684\u6D41\u7A0B\u3002","slug":"_3-\u4ECE-mongodb-\u4E2D\u83B7\u53D6\u6570\u636E\u7684\u6D41\u7A0B\u3002","link":"#_3-\u4ECE-mongodb-\u4E2D\u83B7\u53D6\u6570\u636E\u7684\u6D41\u7A0B\u3002","children":[]},{"level":3,"title":"\u4E8C\u3001\u4EE3\u7801\u9898","slug":"\u4E8C\u3001\u4EE3\u7801\u9898","link":"#\u4E8C\u3001\u4EE3\u7801\u9898","children":[]},{"level":3,"title":"\u793A\u4F8B\u7528\u6237","slug":"\u793A\u4F8B\u7528\u6237","link":"#\u793A\u4F8B\u7528\u6237","children":[]},{"level":3,"title":"\u67E5\u8BE2\u63A5\u53E3\u8BED\u53E5","slug":"\u67E5\u8BE2\u63A5\u53E3\u8BED\u53E5","link":"#\u67E5\u8BE2\u63A5\u53E3\u8BED\u53E5","children":[]}]}],"relativePath":"FullStack/GraphQL/QA.md"}'),p={name:"FullStack/GraphQL/QA.md"},o=l(`<h1 id="qa-\u95EE\u7B54" tabindex="-1">QA \u95EE\u7B54 <a class="header-anchor" href="#qa-\u95EE\u7B54" aria-hidden="true">#</a></h1><h2 id="\u4E00\u3001\u7B80\u7B54\u9898" tabindex="-1">\u4E00\u3001\u7B80\u7B54\u9898 <a class="header-anchor" href="#\u4E00\u3001\u7B80\u7B54\u9898" aria-hidden="true">#</a></h2><h3 id="_1-\u7B80\u8FF0-graphql-\u7ED3\u5408express-\u662F\u5982\u4F55\u4F7F\u7528\u7684" tabindex="-1">1. \u7B80\u8FF0 Graphql \uFF08\u7ED3\u5408Express \uFF09\u662F\u5982\u4F55\u4F7F\u7528\u7684\uFF1F <a class="header-anchor" href="#_1-\u7B80\u8FF0-graphql-\u7ED3\u5408express-\u662F\u5982\u4F55\u4F7F\u7528\u7684" aria-hidden="true">#</a></h3><ul><li>\u8FD0\u884C\u4E00\u4E2A Express GraphQL \u670D\u52A1\u5668\uFF0C\u9996\u5148\u9700\u8981\u5B89\u88C5\u4E24\u4E2A\u4F9D\u8D56\u5E93</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki vp-code-dark"><code><span class="line"><span style="color:#dbd7caee;">    npm install express express-graphql graphql --save</span></span>
<span class="line"><span style="color:#dbd7caee;"></span></span></code></pre><pre class="shiki vp-code-light"><code><span class="line"><span style="color:#393a34;">    npm install express express-graphql graphql --save</span></span>
<span class="line"><span style="color:#393a34;"></span></span></code></pre></div><ul><li>\u4F7F\u7528 express \u6A21\u5757\u6765\u8FD0\u884C\u4E00\u4E2A\u670D\u52A1\u5668\uFF0C\u7136\u540E\u4E0D\u518D\u76F4\u63A5\u8C03\u7528 graphql \u51FD\u6570\u8FDB\u884C\u67E5\u8BE2\uFF0C\u800C\u662F\u4F7F\u7528 express-graphql \u5E93\u6765\u6784\u5EFA GraphQL API \u670D\u52A1\u5668\uFF0C\u54CD\u5E94\u5165\u53E3\u7AEF\u70B9\u4E3A \u201C/graphql\u201D \u7684 HTTP \u8BF7\u6C42</li></ul><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki vp-code-dark"><code><span class="line"><span style="color:#CB7676;">var</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">express</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">=</span><span style="color:#DBD7CAEE;"> </span><span style="color:#80A665;">require</span><span style="color:#666666;">(</span><span style="color:#C98A7DAA;">&#39;</span><span style="color:#C98A7D;">express</span><span style="color:#C98A7DAA;">&#39;</span><span style="color:#666666;">);</span></span>
<span class="line"><span style="color:#CB7676;">var</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">graphqlHTTP</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">}</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">=</span><span style="color:#DBD7CAEE;"> </span><span style="color:#80A665;">require</span><span style="color:#666666;">(</span><span style="color:#C98A7DAA;">&#39;</span><span style="color:#C98A7D;">express-graphql</span><span style="color:#C98A7DAA;">&#39;</span><span style="color:#666666;">);</span></span>
<span class="line"><span style="color:#CB7676;">var</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">buildSchema</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">}</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">=</span><span style="color:#DBD7CAEE;"> </span><span style="color:#80A665;">require</span><span style="color:#666666;">(</span><span style="color:#C98A7DAA;">&#39;</span><span style="color:#C98A7D;">graphql</span><span style="color:#C98A7DAA;">&#39;</span><span style="color:#666666;">);</span></span>
<span class="line"><span style="color:#DBD7CAEE;"> </span></span>
<span class="line"><span style="color:#758575DD;">// \u4F7F\u7528 GraphQL Schema Language \u521B\u5EFA\u4E00\u4E2A schema</span></span>
<span class="line"><span style="color:#CB7676;">var</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">schema</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">=</span><span style="color:#DBD7CAEE;"> </span><span style="color:#80A665;">buildSchema</span><span style="color:#666666;">(</span><span style="color:#C98A7DAA;">\`</span></span>
<span class="line"><span style="color:#C98A7D;">  type Query {</span></span>
<span class="line"><span style="color:#C98A7D;">    hello: String</span></span>
<span class="line"><span style="color:#C98A7D;">  }</span></span>
<span class="line"><span style="color:#C98A7DAA;">\`</span><span style="color:#666666;">);</span></span>
<span class="line"><span style="color:#DBD7CAEE;"> </span></span>
<span class="line"><span style="color:#758575DD;">// root \u63D0\u4F9B\u6240\u6709 API \u5165\u53E3\u7AEF\u70B9\u76F8\u5E94\u7684\u89E3\u6790\u5668\u51FD\u6570</span></span>
<span class="line"><span style="color:#CB7676;">var</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">root</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">=</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#80A665;">hello</span><span style="color:#666666;">:</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">()</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">=&gt;</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#4D9375;">return</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7DAA;">&#39;</span><span style="color:#C98A7D;">Hello world!</span><span style="color:#C98A7DAA;">&#39;</span><span style="color:#666666;">;</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#666666;">},</span></span>
<span class="line"><span style="color:#666666;">};</span></span>
<span class="line"><span style="color:#DBD7CAEE;"> </span></span>
<span class="line"><span style="color:#CB7676;">var</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">app</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">=</span><span style="color:#DBD7CAEE;"> </span><span style="color:#80A665;">express</span><span style="color:#666666;">();</span></span>
<span class="line"><span style="color:#BD976A;">app</span><span style="color:#666666;">.</span><span style="color:#80A665;">use</span><span style="color:#666666;">(</span><span style="color:#C98A7DAA;">&#39;</span><span style="color:#C98A7D;">/graphql</span><span style="color:#C98A7DAA;">&#39;</span><span style="color:#666666;">,</span><span style="color:#DBD7CAEE;"> </span><span style="color:#80A665;">graphqlHTTP</span><span style="color:#666666;">({</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#B8A965;">schema</span><span style="color:#666666;">:</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">schema</span><span style="color:#666666;">,</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#B8A965;">rootValue</span><span style="color:#666666;">:</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">root</span><span style="color:#666666;">,</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#B8A965;">graphiql</span><span style="color:#666666;">:</span><span style="color:#DBD7CAEE;"> </span><span style="color:#4D9375;">true</span><span style="color:#666666;">,</span></span>
<span class="line"><span style="color:#666666;">}));</span></span>
<span class="line"><span style="color:#BD976A;">app</span><span style="color:#666666;">.</span><span style="color:#80A665;">listen</span><span style="color:#666666;">(</span><span style="color:#4C9A91;">4000</span><span style="color:#666666;">);</span></span>
<span class="line"><span style="color:#BD976A;">console</span><span style="color:#666666;">.</span><span style="color:#80A665;">log</span><span style="color:#666666;">(</span><span style="color:#C98A7DAA;">&#39;</span><span style="color:#C98A7D;">Running a GraphQL API server at http://localhost:4000/graphql</span><span style="color:#C98A7DAA;">&#39;</span><span style="color:#666666;">);</span></span>
<span class="line"></span></code></pre><pre class="shiki vp-code-light"><code><span class="line"><span style="color:#AB5959;">var</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">express</span><span style="color:#393A34;"> </span><span style="color:#999999;">=</span><span style="color:#393A34;"> </span><span style="color:#59873A;">require</span><span style="color:#999999;">(</span><span style="color:#B56959AA;">&#39;</span><span style="color:#B56959;">express</span><span style="color:#B56959AA;">&#39;</span><span style="color:#999999;">);</span></span>
<span class="line"><span style="color:#AB5959;">var</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">graphqlHTTP</span><span style="color:#393A34;"> </span><span style="color:#999999;">}</span><span style="color:#393A34;"> </span><span style="color:#999999;">=</span><span style="color:#393A34;"> </span><span style="color:#59873A;">require</span><span style="color:#999999;">(</span><span style="color:#B56959AA;">&#39;</span><span style="color:#B56959;">express-graphql</span><span style="color:#B56959AA;">&#39;</span><span style="color:#999999;">);</span></span>
<span class="line"><span style="color:#AB5959;">var</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">buildSchema</span><span style="color:#393A34;"> </span><span style="color:#999999;">}</span><span style="color:#393A34;"> </span><span style="color:#999999;">=</span><span style="color:#393A34;"> </span><span style="color:#59873A;">require</span><span style="color:#999999;">(</span><span style="color:#B56959AA;">&#39;</span><span style="color:#B56959;">graphql</span><span style="color:#B56959AA;">&#39;</span><span style="color:#999999;">);</span></span>
<span class="line"><span style="color:#393A34;"> </span></span>
<span class="line"><span style="color:#A0ADA0;">// \u4F7F\u7528 GraphQL Schema Language \u521B\u5EFA\u4E00\u4E2A schema</span></span>
<span class="line"><span style="color:#AB5959;">var</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">schema</span><span style="color:#393A34;"> </span><span style="color:#999999;">=</span><span style="color:#393A34;"> </span><span style="color:#59873A;">buildSchema</span><span style="color:#999999;">(</span><span style="color:#B56959AA;">\`</span></span>
<span class="line"><span style="color:#B56959;">  type Query {</span></span>
<span class="line"><span style="color:#B56959;">    hello: String</span></span>
<span class="line"><span style="color:#B56959;">  }</span></span>
<span class="line"><span style="color:#B56959AA;">\`</span><span style="color:#999999;">);</span></span>
<span class="line"><span style="color:#393A34;"> </span></span>
<span class="line"><span style="color:#A0ADA0;">// root \u63D0\u4F9B\u6240\u6709 API \u5165\u53E3\u7AEF\u70B9\u76F8\u5E94\u7684\u89E3\u6790\u5668\u51FD\u6570</span></span>
<span class="line"><span style="color:#AB5959;">var</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">root</span><span style="color:#393A34;"> </span><span style="color:#999999;">=</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#59873A;">hello</span><span style="color:#999999;">:</span><span style="color:#393A34;"> </span><span style="color:#999999;">()</span><span style="color:#393A34;"> </span><span style="color:#999999;">=&gt;</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#1E754F;">return</span><span style="color:#393A34;"> </span><span style="color:#B56959AA;">&#39;</span><span style="color:#B56959;">Hello world!</span><span style="color:#B56959AA;">&#39;</span><span style="color:#999999;">;</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#999999;">},</span></span>
<span class="line"><span style="color:#999999;">};</span></span>
<span class="line"><span style="color:#393A34;"> </span></span>
<span class="line"><span style="color:#AB5959;">var</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">app</span><span style="color:#393A34;"> </span><span style="color:#999999;">=</span><span style="color:#393A34;"> </span><span style="color:#59873A;">express</span><span style="color:#999999;">();</span></span>
<span class="line"><span style="color:#B07D48;">app</span><span style="color:#999999;">.</span><span style="color:#59873A;">use</span><span style="color:#999999;">(</span><span style="color:#B56959AA;">&#39;</span><span style="color:#B56959;">/graphql</span><span style="color:#B56959AA;">&#39;</span><span style="color:#999999;">,</span><span style="color:#393A34;"> </span><span style="color:#59873A;">graphqlHTTP</span><span style="color:#999999;">({</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#998418;">schema</span><span style="color:#999999;">:</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">schema</span><span style="color:#999999;">,</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#998418;">rootValue</span><span style="color:#999999;">:</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">root</span><span style="color:#999999;">,</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#998418;">graphiql</span><span style="color:#999999;">:</span><span style="color:#393A34;"> </span><span style="color:#1E754F;">true</span><span style="color:#999999;">,</span></span>
<span class="line"><span style="color:#999999;">}));</span></span>
<span class="line"><span style="color:#B07D48;">app</span><span style="color:#999999;">.</span><span style="color:#59873A;">listen</span><span style="color:#999999;">(</span><span style="color:#2F798A;">4000</span><span style="color:#999999;">);</span></span>
<span class="line"><span style="color:#B07D48;">console</span><span style="color:#999999;">.</span><span style="color:#59873A;">log</span><span style="color:#999999;">(</span><span style="color:#B56959AA;">&#39;</span><span style="color:#B56959;">Running a GraphQL API server at http://localhost:4000/graphql</span><span style="color:#B56959AA;">&#39;</span><span style="color:#999999;">);</span></span>
<span class="line"></span></code></pre></div><ul><li>\u7528\u4EE5\u4E0B\u547D\u4EE4\u542F\u52A8\u8BE5 GraphQL \u670D\u52A1\u5668</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki vp-code-dark"><code><span class="line"><span style="color:#dbd7caee;">node server.js</span></span>
<span class="line"><span style="color:#dbd7caee;"></span></span></code></pre><pre class="shiki vp-code-light"><code><span class="line"><span style="color:#393a34;">node server.js</span></span>
<span class="line"><span style="color:#393a34;"></span></span></code></pre></div><p>\u7531\u4E8E\u6211\u4EEC\u5BF9 graphqlHTTP \u8BBE\u7F6E graphiql: true\uFF0C\u4F60\u53EF\u4EE5\u4F7F\u7528 GraphiQL \u5DE5\u5177\u6765\u624B\u52A8\u6267\u884C GraphQL \u67E5\u8BE2\u3002\u82E5\u4F7F\u7528\u6D4F\u89C8\u5668\u6D4F\u89C8 <code>http://localhost:4000/graphql</code>\uFF0C\u4F60\u4F1A\u770B\u5230\u4E00\u4E2A\u754C\u9762\u80FD\u8BA9\u4F60\u8F93\u5165\u67E5\u8BE2\u8BED\u53E5\u3002\u5411 GraphQL \u67E5\u8BE2 { hello }\uFF0C\u8FD4\u56DE\u7ED3\u679C\u4E3A { data: { hello: &#39;Hello world!&#39; } }</p><p>\u53C2\u8003\uFF1A<a href="https://graphql.bootcss.com/graphql-js/running-an-express-graphql-server/" target="_blank" rel="noreferrer">https://graphql.bootcss.com/graphql-js/running-an-express-graphql-server/</a></p><h3 id="_2-\u7B80\u8FF0-apollo-server-\u7684\u57FA\u672C\u4F7F\u7528\u3002" tabindex="-1">2. \u7B80\u8FF0 Apollo server \u7684\u57FA\u672C\u4F7F\u7528\u3002 <a class="header-anchor" href="#_2-\u7B80\u8FF0-apollo-server-\u7684\u57FA\u672C\u4F7F\u7528\u3002" aria-hidden="true">#</a></h3><ul><li><a href="https://www.apollographql.com/docs/apollo-server/getting-started" target="_blank" rel="noreferrer">apollo-server</a>\u662F\u4E00\u4E2A\u5728nodejs\u4E0A\u6784\u5EFAgrqphql\u670D\u52A1\u7AEF\u7684web\u4E2D\u95F4\u4EF6\u3002\u652F\u6301express\uFF0Ckoa \uFF0Chapi\u7B49\u6846\u67B6\uFF0C\u6839\u636E\u4E0D\u540C\u7684web\u6846\u67B6\u8FDB\u884C\u5B89\u88C5\u3002</li><li>\u5BFC\u5165 apollo-server</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki vp-code-dark"><code><span class="line"><span style="color:#dbd7caee;">const { ApolloServer, gql } = require(&quot;apollo-server&quot;);</span></span>
<span class="line"><span style="color:#dbd7caee;"></span></span></code></pre><pre class="shiki vp-code-light"><code><span class="line"><span style="color:#393a34;">const { ApolloServer, gql } = require(&quot;apollo-server&quot;);</span></span>
<span class="line"><span style="color:#393a34;"></span></span></code></pre></div><ul><li>\u5B9A\u4E49 schema \u548C resolver</li></ul><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki vp-code-dark"><code><span class="line"><span style="color:#758575DD;">// \u5B9A\u4E49schema</span></span>
<span class="line"><span style="color:#CB7676;">const</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">typeDefs</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">=</span><span style="color:#DBD7CAEE;"> </span><span style="color:#80A665;">gql</span><span style="color:#C98A7DAA;">\`</span></span>
<span class="line"><span style="color:#C98A7D;">  type Query {</span></span>
<span class="line"><span style="color:#C98A7D;">    foo: String</span></span>
<span class="line"><span style="color:#C98A7D;">  }</span></span>
<span class="line"><span style="color:#C98A7DAA;">\`</span><span style="color:#666666;">;</span></span>
<span class="line"><span style="color:#758575DD;">// \u5B9A\u4E49resolver</span></span>
<span class="line"><span style="color:#CB7676;">const</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">resolver</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">=</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span></span>
<span class="line"><span style="color:#666666;">  </span><span style="color:#758575DD;">// \u6240\u4EE5schema\u4E2DQuery\u5185\u90E8\u7684\u5B57\u6BB5\u90FD\u4F1A\u8C03\u7528\u8FD9\u91CC\u7684Query\u5BF9\u8C61\u5185\u90E8\u5BF9\u5E94\u7684\u65B9\u6CD5</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#B8A965;">Query</span><span style="color:#666666;">:</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#80A665;">foo</span><span style="color:#666666;">:</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">()</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">=&gt;</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span></span>
<span class="line"><span style="color:#DBD7CAEE;">      </span><span style="color:#4D9375;">return</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7DAA;">&quot;</span><span style="color:#C98A7D;">bar</span><span style="color:#C98A7DAA;">&quot;</span><span style="color:#666666;">;</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#666666;">},</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#666666;">},</span></span>
<span class="line"><span style="color:#666666;">};</span></span>
<span class="line"></span></code></pre><pre class="shiki vp-code-light"><code><span class="line"><span style="color:#A0ADA0;">// \u5B9A\u4E49schema</span></span>
<span class="line"><span style="color:#AB5959;">const</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">typeDefs</span><span style="color:#393A34;"> </span><span style="color:#999999;">=</span><span style="color:#393A34;"> </span><span style="color:#59873A;">gql</span><span style="color:#B56959AA;">\`</span></span>
<span class="line"><span style="color:#B56959;">  type Query {</span></span>
<span class="line"><span style="color:#B56959;">    foo: String</span></span>
<span class="line"><span style="color:#B56959;">  }</span></span>
<span class="line"><span style="color:#B56959AA;">\`</span><span style="color:#999999;">;</span></span>
<span class="line"><span style="color:#A0ADA0;">// \u5B9A\u4E49resolver</span></span>
<span class="line"><span style="color:#AB5959;">const</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">resolver</span><span style="color:#393A34;"> </span><span style="color:#999999;">=</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span></span>
<span class="line"><span style="color:#999999;">  </span><span style="color:#A0ADA0;">// \u6240\u4EE5schema\u4E2DQuery\u5185\u90E8\u7684\u5B57\u6BB5\u90FD\u4F1A\u8C03\u7528\u8FD9\u91CC\u7684Query\u5BF9\u8C61\u5185\u90E8\u5BF9\u5E94\u7684\u65B9\u6CD5</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#998418;">Query</span><span style="color:#999999;">:</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#59873A;">foo</span><span style="color:#999999;">:</span><span style="color:#393A34;"> </span><span style="color:#999999;">()</span><span style="color:#393A34;"> </span><span style="color:#999999;">=&gt;</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span></span>
<span class="line"><span style="color:#393A34;">      </span><span style="color:#1E754F;">return</span><span style="color:#393A34;"> </span><span style="color:#B56959AA;">&quot;</span><span style="color:#B56959;">bar</span><span style="color:#B56959AA;">&quot;</span><span style="color:#999999;">;</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#999999;">},</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#999999;">},</span></span>
<span class="line"><span style="color:#999999;">};</span></span>
<span class="line"></span></code></pre></div><ul><li>\u521B\u5EFA GraphQL Server\uFF0C\u5F00\u542F web \u670D\u52A1</li></ul><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki vp-code-dark"><code><span class="line"><span style="color:#CB7676;">const</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">server</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">=</span><span style="color:#DBD7CAEE;"> </span><span style="color:#CB7676;">new</span><span style="color:#DBD7CAEE;"> </span><span style="color:#80A665;">ApolloServer</span><span style="color:#666666;">({</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">typeDefs</span><span style="color:#666666;">,</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">resolvers</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BD976A;">server</span><span style="color:#666666;">.</span><span style="color:#80A665;">listen</span><span style="color:#666666;">().</span><span style="color:#80A665;">then</span><span style="color:#666666;">(({</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">url</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">})</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">=&gt;</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#BD976A;">console</span><span style="color:#666666;">.</span><span style="color:#80A665;">log</span><span style="color:#666666;">(</span><span style="color:#C98A7DAA;">\`</span><span style="color:#C98A7D;">\u{1F680}  Server ready at </span><span style="color:#666666;">\${</span><span style="color:#C98A7D;">url</span><span style="color:#666666;">}</span><span style="color:#C98A7DAA;">\`</span><span style="color:#666666;">)</span></span>
<span class="line"><span style="color:#666666;">})</span></span>
<span class="line"></span></code></pre><pre class="shiki vp-code-light"><code><span class="line"><span style="color:#AB5959;">const</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">server</span><span style="color:#393A34;"> </span><span style="color:#999999;">=</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">new</span><span style="color:#393A34;"> </span><span style="color:#59873A;">ApolloServer</span><span style="color:#999999;">({</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">typeDefs</span><span style="color:#999999;">,</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">resolvers</span><span style="color:#393A34;"> </span><span style="color:#999999;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B07D48;">server</span><span style="color:#999999;">.</span><span style="color:#59873A;">listen</span><span style="color:#999999;">().</span><span style="color:#59873A;">then</span><span style="color:#999999;">(({</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">url</span><span style="color:#393A34;"> </span><span style="color:#999999;">})</span><span style="color:#393A34;"> </span><span style="color:#999999;">=&gt;</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#B07D48;">console</span><span style="color:#999999;">.</span><span style="color:#59873A;">log</span><span style="color:#999999;">(</span><span style="color:#B56959AA;">\`</span><span style="color:#B56959;">\u{1F680}  Server ready at </span><span style="color:#999999;">\${</span><span style="color:#B56959;">url</span><span style="color:#999999;">}</span><span style="color:#B56959AA;">\`</span><span style="color:#999999;">)</span></span>
<span class="line"><span style="color:#999999;">})</span></span>
<span class="line"></span></code></pre></div><h3 id="_3-\u4ECE-mongodb-\u4E2D\u83B7\u53D6\u6570\u636E\u7684\u6D41\u7A0B\u3002" tabindex="-1">3. \u4ECE MongoDB \u4E2D\u83B7\u53D6\u6570\u636E\u7684\u6D41\u7A0B\u3002 <a class="header-anchor" href="#_3-\u4ECE-mongodb-\u4E2D\u83B7\u53D6\u6570\u636E\u7684\u6D41\u7A0B\u3002" aria-hidden="true">#</a></h3><ul><li>pollo Server \u53EF\u4EE5\u4ECE\u591A\u7ED9\u4F4D\u7F6E\u83B7\u53D6\u6570\u636E\u3002Apollo\u63D0\u4F9B\u4E86\u4E00\u4E2A DataSource \u7C7B\uFF0C\u6211\u4EEC\u53EF\u4EE5\u6269\u5C55\u8BE5\u7C7B\u4EE5\u5904\u7406\u7279\u5B9A\u7C7B\u578B\u7684\u6570\u636E\u6E90\u7684\u4EA4\u4E92\u903B\u8F91\u3002</li><li>\u8FDE\u63A5\u5230\u6570\u636E\u5E93\u53EF\u4EE5\u91C7\u7528<a href="https://github.com/GraphQLGuide/apollo-datasource-mongodb/" target="_blank" rel="noreferrer">apollo-datasource-mongodb</a>\u3002\u8FD9\u4E2A\u5305\u4F7F\u7528DataLoader\u8FDB\u884C\u6279\u5904\u7406\u548C\u6BCF\u4E2A\u8BF7\u6C42\u7684\u8BB0\u5FC6\u7F13\u5B58\u3002\u5B83\u8FD8\u53EF\u4EE5\u9009\u62E9\uFF08\u5982\u679C\u60A8\u63D0\u4F9B a ttl\uFF09\u5171\u4EAB\u5E94\u7528\u7A0B\u5E8F\u7EA7\u7F13\u5B58\u3002</li><li>\u4F7F\u7528 apollo-datasource-mongodb \u5305\u5C06 MongoDB \u6570\u636E\u6620\u5C04\u5230 GraphQL \u6570\u636E\u5C42</li></ul><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki vp-code-dark"><code><span class="line"><span style="color:#CB7676;">const</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">MongoDataSource</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">}</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">=</span><span style="color:#DBD7CAEE;"> </span><span style="color:#80A665;">require</span><span style="color:#666666;">(</span><span style="color:#C98A7DAA;">&#39;</span><span style="color:#C98A7D;">apollo-datasource-mongodb</span><span style="color:#C98A7DAA;">&#39;</span><span style="color:#666666;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CB7676;">class</span><span style="color:#DBD7CAEE;"> </span><span style="color:#5DA9A7;">Users</span><span style="color:#DBD7CAEE;"> </span><span style="color:#CB7676;">extends</span><span style="color:#DBD7CAEE;"> </span><span style="color:#80A665;">MongoDataSource</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#80A665;">getUser</span><span style="color:#666666;">(</span><span style="color:#BD976A;">userId</span><span style="color:#666666;">)</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#4D9375;">return</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C99076;">this</span><span style="color:#666666;">.</span><span style="color:#80A665;">findOneById</span><span style="color:#666666;">(</span><span style="color:#BD976A;">userId</span><span style="color:#666666;">)</span></span>
<span class="line"><span style="color:#666666;">    </span><span style="color:#758575DD;">// this.model // \u8BBF\u95EE\u6570\u636E\u6A21\u578B\u5BF9\u8C61</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#666666;">}</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#80A665;">getUsers</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">()</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#4D9375;">return</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C99076;">this</span><span style="color:#666666;">.</span><span style="color:#BD976A;">model</span><span style="color:#666666;">.</span><span style="color:#80A665;">find</span><span style="color:#666666;">()</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#666666;">}</span></span>
<span class="line"><span style="color:#666666;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B8A965;">module</span><span style="color:#666666;">.</span><span style="color:#B8A965;">exports</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">=</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">Users</span></span>
<span class="line"></span></code></pre><pre class="shiki vp-code-light"><code><span class="line"><span style="color:#AB5959;">const</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">MongoDataSource</span><span style="color:#393A34;"> </span><span style="color:#999999;">}</span><span style="color:#393A34;"> </span><span style="color:#999999;">=</span><span style="color:#393A34;"> </span><span style="color:#59873A;">require</span><span style="color:#999999;">(</span><span style="color:#B56959AA;">&#39;</span><span style="color:#B56959;">apollo-datasource-mongodb</span><span style="color:#B56959AA;">&#39;</span><span style="color:#999999;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#AB5959;">class</span><span style="color:#393A34;"> </span><span style="color:#2E808F;">Users</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">extends</span><span style="color:#393A34;"> </span><span style="color:#59873A;">MongoDataSource</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#59873A;">getUser</span><span style="color:#999999;">(</span><span style="color:#B07D48;">userId</span><span style="color:#999999;">)</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#1E754F;">return</span><span style="color:#393A34;"> </span><span style="color:#A65E2B;">this</span><span style="color:#999999;">.</span><span style="color:#59873A;">findOneById</span><span style="color:#999999;">(</span><span style="color:#B07D48;">userId</span><span style="color:#999999;">)</span></span>
<span class="line"><span style="color:#999999;">    </span><span style="color:#A0ADA0;">// this.model // \u8BBF\u95EE\u6570\u636E\u6A21\u578B\u5BF9\u8C61</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#999999;">}</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#59873A;">getUsers</span><span style="color:#393A34;"> </span><span style="color:#999999;">()</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#1E754F;">return</span><span style="color:#393A34;"> </span><span style="color:#A65E2B;">this</span><span style="color:#999999;">.</span><span style="color:#B07D48;">model</span><span style="color:#999999;">.</span><span style="color:#59873A;">find</span><span style="color:#999999;">()</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#999999;">}</span></span>
<span class="line"><span style="color:#999999;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#998418;">module</span><span style="color:#999999;">.</span><span style="color:#998418;">exports</span><span style="color:#393A34;"> </span><span style="color:#999999;">=</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">Users</span></span>
<span class="line"></span></code></pre></div><ul><li>\u5B9A\u4E49mongoose\u7684\u6570\u636E\u6A21\u578Bscheme\uFF0C\u4E3B\u8981\u9488\u5BF9\u6570\u636E\u5E93\u7684\u3002\uFF08\u4E0D\u540C\u4E8EGraphQL\u7684scheme\uFF0C\u9488\u5BF9\u5BA2\u6237\u7AEF\u7528\u6237\u7684\uFF09</li></ul><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki vp-code-dark"><code><span class="line"><span style="color:#758575DD;">// 08\\data-sources\\user.js</span></span>
<span class="line"><span style="color:#CB7676;">const</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">mongoose</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">=</span><span style="color:#DBD7CAEE;"> </span><span style="color:#80A665;">require</span><span style="color:#666666;">(</span><span style="color:#C98A7DAA;">&#39;</span><span style="color:#C98A7D;">mongoose</span><span style="color:#C98A7DAA;">&#39;</span><span style="color:#666666;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CB7676;">const</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">userSchema</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">=</span><span style="color:#DBD7CAEE;"> </span><span style="color:#CB7676;">new</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">mongoose</span><span style="color:#666666;">.</span><span style="color:#80A665;">Schema</span><span style="color:#666666;">({</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#B8A965;">name</span><span style="color:#666666;">:</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">String</span><span style="color:#666666;">,</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#B8A965;">age</span><span style="color:#666666;">:</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">Number</span></span>
<span class="line"><span style="color:#666666;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B8A965;">module</span><span style="color:#666666;">.</span><span style="color:#B8A965;">exports</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">=</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">mongoose</span><span style="color:#666666;">.</span><span style="color:#80A665;">model</span><span style="color:#666666;">(</span><span style="color:#C98A7DAA;">&#39;</span><span style="color:#C98A7D;">User</span><span style="color:#C98A7DAA;">&#39;</span><span style="color:#666666;">,</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">userSchema</span><span style="color:#666666;">)</span></span>
<span class="line"></span></code></pre><pre class="shiki vp-code-light"><code><span class="line"><span style="color:#A0ADA0;">// 08\\data-sources\\user.js</span></span>
<span class="line"><span style="color:#AB5959;">const</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">mongoose</span><span style="color:#393A34;"> </span><span style="color:#999999;">=</span><span style="color:#393A34;"> </span><span style="color:#59873A;">require</span><span style="color:#999999;">(</span><span style="color:#B56959AA;">&#39;</span><span style="color:#B56959;">mongoose</span><span style="color:#B56959AA;">&#39;</span><span style="color:#999999;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#AB5959;">const</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">userSchema</span><span style="color:#393A34;"> </span><span style="color:#999999;">=</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">new</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">mongoose</span><span style="color:#999999;">.</span><span style="color:#59873A;">Schema</span><span style="color:#999999;">({</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#998418;">name</span><span style="color:#999999;">:</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">String</span><span style="color:#999999;">,</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#998418;">age</span><span style="color:#999999;">:</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">Number</span></span>
<span class="line"><span style="color:#999999;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#998418;">module</span><span style="color:#999999;">.</span><span style="color:#998418;">exports</span><span style="color:#393A34;"> </span><span style="color:#999999;">=</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">mongoose</span><span style="color:#999999;">.</span><span style="color:#59873A;">model</span><span style="color:#999999;">(</span><span style="color:#B56959AA;">&#39;</span><span style="color:#B56959;">User</span><span style="color:#B56959AA;">&#39;</span><span style="color:#999999;">,</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">userSchema</span><span style="color:#999999;">)</span></span>
<span class="line"></span></code></pre></div><ul><li>\u4F7F\u7528mongoose\u8FDB\u884C\u6570\u636E\u7684\u7BA1\u7406</li></ul><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki vp-code-dark"><code><span class="line"><span style="color:#758575DD;">// 08\\models\\index.js</span></span>
<span class="line"><span style="color:#CB7676;">const</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">mongoose</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">=</span><span style="color:#DBD7CAEE;"> </span><span style="color:#80A665;">require</span><span style="color:#666666;">(</span><span style="color:#C98A7DAA;">&#39;</span><span style="color:#C98A7D;">mongoose</span><span style="color:#C98A7DAA;">&#39;</span><span style="color:#666666;">)</span></span>
<span class="line"><span style="color:#BD976A;">mongoose</span><span style="color:#666666;">.</span><span style="color:#80A665;">connect</span><span style="color:#666666;">(</span><span style="color:#C98A7DAA;">&#39;</span><span style="color:#C98A7D;">mongodb://localhost/test</span><span style="color:#C98A7DAA;">&#39;</span><span style="color:#666666;">,</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#B8A965;">useNewUrlParser</span><span style="color:#666666;">:</span><span style="color:#DBD7CAEE;"> </span><span style="color:#4D9375;">true</span><span style="color:#666666;">,</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#B8A965;">useUnifiedTopology</span><span style="color:#666666;">:</span><span style="color:#DBD7CAEE;"> </span><span style="color:#4D9375;">true</span></span>
<span class="line"><span style="color:#666666;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CB7676;">const</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">db</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">=</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">mongoose</span><span style="color:#666666;">.</span><span style="color:#BD976A;">connection</span></span>
<span class="line"><span style="color:#BD976A;">db</span><span style="color:#666666;">.</span><span style="color:#80A665;">on</span><span style="color:#666666;">(</span><span style="color:#C98A7DAA;">&#39;</span><span style="color:#C98A7D;">error</span><span style="color:#C98A7DAA;">&#39;</span><span style="color:#666666;">,</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">console</span><span style="color:#666666;">.</span><span style="color:#BD976A;">error</span><span style="color:#666666;">.</span><span style="color:#80A665;">bind</span><span style="color:#666666;">(</span><span style="color:#BD976A;">console</span><span style="color:#666666;">,</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7DAA;">&#39;</span><span style="color:#C98A7D;">connection error:</span><span style="color:#C98A7DAA;">&#39;</span><span style="color:#666666;">))</span></span>
<span class="line"><span style="color:#BD976A;">db</span><span style="color:#666666;">.</span><span style="color:#80A665;">once</span><span style="color:#666666;">(</span><span style="color:#C98A7DAA;">&#39;</span><span style="color:#C98A7D;">open</span><span style="color:#C98A7DAA;">&#39;</span><span style="color:#666666;">,</span><span style="color:#DBD7CAEE;"> </span><span style="color:#CB7676;">function</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">()</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span></span>
<span class="line"><span style="color:#666666;">  </span><span style="color:#758575DD;">// we&#39;re connected!</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#BD976A;">console</span><span style="color:#666666;">.</span><span style="color:#80A665;">log</span><span style="color:#666666;">(</span><span style="color:#C98A7DAA;">&#39;</span><span style="color:#C98A7D;">\u8FDE\u63A5\u6570\u636E\u5E93\u6210\u529F</span><span style="color:#C98A7DAA;">&#39;</span><span style="color:#666666;">)</span></span>
<span class="line"><span style="color:#666666;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B8A965;">module</span><span style="color:#666666;">.</span><span style="color:#B8A965;">exports</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">=</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#B8A965;">User</span><span style="color:#666666;">:</span><span style="color:#DBD7CAEE;"> </span><span style="color:#80A665;">require</span><span style="color:#666666;">(</span><span style="color:#C98A7DAA;">&#39;</span><span style="color:#C98A7D;">./user</span><span style="color:#C98A7DAA;">&#39;</span><span style="color:#666666;">)</span></span>
<span class="line"><span style="color:#666666;">}</span></span>
<span class="line"></span></code></pre><pre class="shiki vp-code-light"><code><span class="line"><span style="color:#A0ADA0;">// 08\\models\\index.js</span></span>
<span class="line"><span style="color:#AB5959;">const</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">mongoose</span><span style="color:#393A34;"> </span><span style="color:#999999;">=</span><span style="color:#393A34;"> </span><span style="color:#59873A;">require</span><span style="color:#999999;">(</span><span style="color:#B56959AA;">&#39;</span><span style="color:#B56959;">mongoose</span><span style="color:#B56959AA;">&#39;</span><span style="color:#999999;">)</span></span>
<span class="line"><span style="color:#B07D48;">mongoose</span><span style="color:#999999;">.</span><span style="color:#59873A;">connect</span><span style="color:#999999;">(</span><span style="color:#B56959AA;">&#39;</span><span style="color:#B56959;">mongodb://localhost/test</span><span style="color:#B56959AA;">&#39;</span><span style="color:#999999;">,</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#998418;">useNewUrlParser</span><span style="color:#999999;">:</span><span style="color:#393A34;"> </span><span style="color:#1E754F;">true</span><span style="color:#999999;">,</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#998418;">useUnifiedTopology</span><span style="color:#999999;">:</span><span style="color:#393A34;"> </span><span style="color:#1E754F;">true</span></span>
<span class="line"><span style="color:#999999;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#AB5959;">const</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">db</span><span style="color:#393A34;"> </span><span style="color:#999999;">=</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">mongoose</span><span style="color:#999999;">.</span><span style="color:#B07D48;">connection</span></span>
<span class="line"><span style="color:#B07D48;">db</span><span style="color:#999999;">.</span><span style="color:#59873A;">on</span><span style="color:#999999;">(</span><span style="color:#B56959AA;">&#39;</span><span style="color:#B56959;">error</span><span style="color:#B56959AA;">&#39;</span><span style="color:#999999;">,</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">console</span><span style="color:#999999;">.</span><span style="color:#B07D48;">error</span><span style="color:#999999;">.</span><span style="color:#59873A;">bind</span><span style="color:#999999;">(</span><span style="color:#B07D48;">console</span><span style="color:#999999;">,</span><span style="color:#393A34;"> </span><span style="color:#B56959AA;">&#39;</span><span style="color:#B56959;">connection error:</span><span style="color:#B56959AA;">&#39;</span><span style="color:#999999;">))</span></span>
<span class="line"><span style="color:#B07D48;">db</span><span style="color:#999999;">.</span><span style="color:#59873A;">once</span><span style="color:#999999;">(</span><span style="color:#B56959AA;">&#39;</span><span style="color:#B56959;">open</span><span style="color:#B56959AA;">&#39;</span><span style="color:#999999;">,</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">function</span><span style="color:#393A34;"> </span><span style="color:#999999;">()</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span></span>
<span class="line"><span style="color:#999999;">  </span><span style="color:#A0ADA0;">// we&#39;re connected!</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#B07D48;">console</span><span style="color:#999999;">.</span><span style="color:#59873A;">log</span><span style="color:#999999;">(</span><span style="color:#B56959AA;">&#39;</span><span style="color:#B56959;">\u8FDE\u63A5\u6570\u636E\u5E93\u6210\u529F</span><span style="color:#B56959AA;">&#39;</span><span style="color:#999999;">)</span></span>
<span class="line"><span style="color:#999999;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#998418;">module</span><span style="color:#999999;">.</span><span style="color:#998418;">exports</span><span style="color:#393A34;"> </span><span style="color:#999999;">=</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#998418;">User</span><span style="color:#999999;">:</span><span style="color:#393A34;"> </span><span style="color:#59873A;">require</span><span style="color:#999999;">(</span><span style="color:#B56959AA;">&#39;</span><span style="color:#B56959;">./user</span><span style="color:#B56959AA;">&#39;</span><span style="color:#999999;">)</span></span>
<span class="line"><span style="color:#999999;">}</span></span>
<span class="line"></span></code></pre></div><ul><li>ApolloServer\u4E2D\u4F7F\u7528\uFF0C\u5728\u521B\u5EFA server \u65F6\uFF0C\u4F20\u5165 dataSources \u9009\u9879</li></ul><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki vp-code-dark"><code><span class="line"><span style="color:#758575DD;">// 1. \u5B9A\u4E49 schema</span></span>
<span class="line"><span style="color:#CB7676;">const</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">typeDefs</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">=</span><span style="color:#DBD7CAEE;"> </span><span style="color:#80A665;">gql</span><span style="color:#C98A7DAA;">\`</span></span>
<span class="line"><span style="color:#C98A7D;">  type User {</span></span>
<span class="line"><span style="color:#C98A7D;">    _id: ID!,</span></span>
<span class="line"><span style="color:#C98A7D;">    name: String!,</span></span>
<span class="line"><span style="color:#C98A7D;">    age: Int</span></span>
<span class="line"><span style="color:#C98A7D;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C98A7D;">  type Query {</span></span>
<span class="line"><span style="color:#C98A7D;">    users: [User!]</span></span>
<span class="line"><span style="color:#C98A7D;">    user(id: ID!): User</span></span>
<span class="line"><span style="color:#C98A7D;">  }</span></span>
<span class="line"><span style="color:#C98A7DAA;">\`</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575DD;">// 2. \u5B9A\u4E49 resolver</span></span>
<span class="line"><span style="color:#CB7676;">const</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">resolvers</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">=</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span></span>
<span class="line"><span style="color:#666666;">  </span><span style="color:#758575DD;">// \u6240\u6709\u7684 Query \u90FD\u8D70\u8FD9\u91CC</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#B8A965;">Query</span><span style="color:#666666;">:</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#CB7676;">async</span><span style="color:#DBD7CAEE;"> </span><span style="color:#80A665;">users</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">(</span><span style="color:#BD976A;">parent</span><span style="color:#666666;">,</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">args</span><span style="color:#666666;">,</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">dataSources</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">})</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span></span>
<span class="line"><span style="color:#DBD7CAEE;">      </span><span style="color:#CB7676;">const</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">users</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">=</span><span style="color:#DBD7CAEE;"> </span><span style="color:#4D9375;">await</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">dataSources</span><span style="color:#666666;">.</span><span style="color:#BD976A;">users</span><span style="color:#666666;">.</span><span style="color:#80A665;">getUsers</span><span style="color:#666666;">()</span></span>
<span class="line"><span style="color:#DBD7CAEE;">      </span><span style="color:#4D9375;">return</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">users</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#666666;">},</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#CB7676;">async</span><span style="color:#DBD7CAEE;"> </span><span style="color:#80A665;">user</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">(</span><span style="color:#BD976A;">parent</span><span style="color:#666666;">,</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">id</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">},</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">dataSources</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">})</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span></span>
<span class="line"><span style="color:#DBD7CAEE;">      </span><span style="color:#CB7676;">const</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">user</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">=</span><span style="color:#DBD7CAEE;"> </span><span style="color:#4D9375;">await</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">dataSources</span><span style="color:#666666;">.</span><span style="color:#BD976A;">users</span><span style="color:#666666;">.</span><span style="color:#80A665;">getUser</span><span style="color:#666666;">(</span><span style="color:#BD976A;">id</span><span style="color:#666666;">)</span></span>
<span class="line"><span style="color:#DBD7CAEE;">      </span><span style="color:#4D9375;">return</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">user</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#666666;">}</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#666666;">}</span></span>
<span class="line"><span style="color:#666666;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CB7676;">const</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">server</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">=</span><span style="color:#DBD7CAEE;"> </span><span style="color:#CB7676;">new</span><span style="color:#DBD7CAEE;"> </span><span style="color:#80A665;">ApolloServer</span><span style="color:#666666;">({</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#BD976A;">typeDefs</span><span style="color:#666666;">,</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#BD976A;">resolvers</span><span style="color:#666666;">,</span></span>
<span class="line"><span style="color:#666666;">  </span><span style="color:#758575DD;">// \u4EFB\u4F55 GraphQL \u8BF7\u6C42\u90FD\u4F1A\u7ECF\u8FC7\u8FD9\u91CC</span></span>
<span class="line"><span style="color:#666666;">  </span><span style="color:#758575DD;">// \u8BE5\u51FD\u6570\u63A5\u6536\u4E00\u4E2A\u53C2\u6570\uFF1ARequest \u8BF7\u6C42\u5BF9\u8C61</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#80A665;">context</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">(</span><span style="color:#BD976A;">req</span><span style="color:#666666;">)</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#4D9375;">return</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span><span style="color:#DBD7CAEE;"> </span><span style="color:#758575DD;">// \u8FD4\u56DE\u5BF9\u8C61\uFF0C\u81EA\u5B9A\u4E49\u6570\u636E\uFF0C\u540E\u7EED\u7684\u6BCF\u4E2A resolver \u90FD\u53EF\u4EE5\u76F4\u63A5\u83B7\u53D6</span></span>
<span class="line"><span style="color:#DBD7CAEE;">      </span><span style="color:#B8A965;">foo</span><span style="color:#666666;">:</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7DAA;">&#39;</span><span style="color:#C98A7D;">bar</span><span style="color:#C98A7DAA;">&#39;</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#666666;">}</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#666666;">},</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#80A665;">dataSources</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">()</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#4D9375;">return</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span></span>
<span class="line"><span style="color:#DBD7CAEE;">      </span><span style="color:#B8A965;">users</span><span style="color:#666666;">:</span><span style="color:#DBD7CAEE;"> </span><span style="color:#CB7676;">new</span><span style="color:#DBD7CAEE;"> </span><span style="color:#80A665;">Users</span><span style="color:#666666;">(</span><span style="color:#BD976A;">User</span><span style="color:#666666;">)</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#666666;">}</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#666666;">}</span></span>
<span class="line"><span style="color:#666666;">})</span></span>
<span class="line"></span></code></pre><pre class="shiki vp-code-light"><code><span class="line"><span style="color:#A0ADA0;">// 1. \u5B9A\u4E49 schema</span></span>
<span class="line"><span style="color:#AB5959;">const</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">typeDefs</span><span style="color:#393A34;"> </span><span style="color:#999999;">=</span><span style="color:#393A34;"> </span><span style="color:#59873A;">gql</span><span style="color:#B56959AA;">\`</span></span>
<span class="line"><span style="color:#B56959;">  type User {</span></span>
<span class="line"><span style="color:#B56959;">    _id: ID!,</span></span>
<span class="line"><span style="color:#B56959;">    name: String!,</span></span>
<span class="line"><span style="color:#B56959;">    age: Int</span></span>
<span class="line"><span style="color:#B56959;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B56959;">  type Query {</span></span>
<span class="line"><span style="color:#B56959;">    users: [User!]</span></span>
<span class="line"><span style="color:#B56959;">    user(id: ID!): User</span></span>
<span class="line"><span style="color:#B56959;">  }</span></span>
<span class="line"><span style="color:#B56959AA;">\`</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;">// 2. \u5B9A\u4E49 resolver</span></span>
<span class="line"><span style="color:#AB5959;">const</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">resolvers</span><span style="color:#393A34;"> </span><span style="color:#999999;">=</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span></span>
<span class="line"><span style="color:#999999;">  </span><span style="color:#A0ADA0;">// \u6240\u6709\u7684 Query \u90FD\u8D70\u8FD9\u91CC</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#998418;">Query</span><span style="color:#999999;">:</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#AB5959;">async</span><span style="color:#393A34;"> </span><span style="color:#59873A;">users</span><span style="color:#393A34;"> </span><span style="color:#999999;">(</span><span style="color:#B07D48;">parent</span><span style="color:#999999;">,</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">args</span><span style="color:#999999;">,</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">dataSources</span><span style="color:#393A34;"> </span><span style="color:#999999;">})</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span></span>
<span class="line"><span style="color:#393A34;">      </span><span style="color:#AB5959;">const</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">users</span><span style="color:#393A34;"> </span><span style="color:#999999;">=</span><span style="color:#393A34;"> </span><span style="color:#1E754F;">await</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">dataSources</span><span style="color:#999999;">.</span><span style="color:#B07D48;">users</span><span style="color:#999999;">.</span><span style="color:#59873A;">getUsers</span><span style="color:#999999;">()</span></span>
<span class="line"><span style="color:#393A34;">      </span><span style="color:#1E754F;">return</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">users</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#999999;">},</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#AB5959;">async</span><span style="color:#393A34;"> </span><span style="color:#59873A;">user</span><span style="color:#393A34;"> </span><span style="color:#999999;">(</span><span style="color:#B07D48;">parent</span><span style="color:#999999;">,</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">id</span><span style="color:#393A34;"> </span><span style="color:#999999;">},</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">dataSources</span><span style="color:#393A34;"> </span><span style="color:#999999;">})</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span></span>
<span class="line"><span style="color:#393A34;">      </span><span style="color:#AB5959;">const</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">user</span><span style="color:#393A34;"> </span><span style="color:#999999;">=</span><span style="color:#393A34;"> </span><span style="color:#1E754F;">await</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">dataSources</span><span style="color:#999999;">.</span><span style="color:#B07D48;">users</span><span style="color:#999999;">.</span><span style="color:#59873A;">getUser</span><span style="color:#999999;">(</span><span style="color:#B07D48;">id</span><span style="color:#999999;">)</span></span>
<span class="line"><span style="color:#393A34;">      </span><span style="color:#1E754F;">return</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">user</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#999999;">}</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#999999;">}</span></span>
<span class="line"><span style="color:#999999;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#AB5959;">const</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">server</span><span style="color:#393A34;"> </span><span style="color:#999999;">=</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">new</span><span style="color:#393A34;"> </span><span style="color:#59873A;">ApolloServer</span><span style="color:#999999;">({</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#B07D48;">typeDefs</span><span style="color:#999999;">,</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#B07D48;">resolvers</span><span style="color:#999999;">,</span></span>
<span class="line"><span style="color:#999999;">  </span><span style="color:#A0ADA0;">// \u4EFB\u4F55 GraphQL \u8BF7\u6C42\u90FD\u4F1A\u7ECF\u8FC7\u8FD9\u91CC</span></span>
<span class="line"><span style="color:#999999;">  </span><span style="color:#A0ADA0;">// \u8BE5\u51FD\u6570\u63A5\u6536\u4E00\u4E2A\u53C2\u6570\uFF1ARequest \u8BF7\u6C42\u5BF9\u8C61</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#59873A;">context</span><span style="color:#393A34;"> </span><span style="color:#999999;">(</span><span style="color:#B07D48;">req</span><span style="color:#999999;">)</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#1E754F;">return</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span><span style="color:#393A34;"> </span><span style="color:#A0ADA0;">// \u8FD4\u56DE\u5BF9\u8C61\uFF0C\u81EA\u5B9A\u4E49\u6570\u636E\uFF0C\u540E\u7EED\u7684\u6BCF\u4E2A resolver \u90FD\u53EF\u4EE5\u76F4\u63A5\u83B7\u53D6</span></span>
<span class="line"><span style="color:#393A34;">      </span><span style="color:#998418;">foo</span><span style="color:#999999;">:</span><span style="color:#393A34;"> </span><span style="color:#B56959AA;">&#39;</span><span style="color:#B56959;">bar</span><span style="color:#B56959AA;">&#39;</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#999999;">}</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#999999;">},</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#59873A;">dataSources</span><span style="color:#393A34;"> </span><span style="color:#999999;">()</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#1E754F;">return</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span></span>
<span class="line"><span style="color:#393A34;">      </span><span style="color:#998418;">users</span><span style="color:#999999;">:</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">new</span><span style="color:#393A34;"> </span><span style="color:#59873A;">Users</span><span style="color:#999999;">(</span><span style="color:#B07D48;">User</span><span style="color:#999999;">)</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#999999;">}</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#999999;">}</span></span>
<span class="line"><span style="color:#999999;">})</span></span>
<span class="line"></span></code></pre></div><h3 id="\u4E8C\u3001\u4EE3\u7801\u9898" tabindex="-1">\u4E8C\u3001\u4EE3\u7801\u9898 <a class="header-anchor" href="#\u4E8C\u3001\u4EE3\u7801\u9898" aria-hidden="true">#</a></h3><ul><li>\u5B9E\u73B0\u4E00\u4E2A GraphQL \u7248\u672C\u7684\u5B8C\u6574 realworld API\u3002 <ul><li>\u4EE3\u7801\u5730\u5740\uFF1A<a href="https://github.com/attraction11/lagoufed-e-task/tree/master/part5/fed-e-task-05-04/code/realworld-graphql" target="_blank" rel="noreferrer">https://github.com/attraction11/lagoufed-e-task/tree/master/part5/fed-e-task-05-04/code/realworld-graphql</a></li><li>\u7EBF\u4E0A\u63A5\u53E3\u67E5\u8BE2\u5730\u5740\uFF1A<a href="http://106.75.75.186:7003/graphql" target="_blank" rel="noreferrer">http://106.75.75.186:7003/graphql</a></li></ul></li></ul><h3 id="\u793A\u4F8B\u7528\u6237" tabindex="-1">\u793A\u4F8B\u7528\u6237 <a class="header-anchor" href="#\u793A\u4F8B\u7528\u6237" aria-hidden="true">#</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki vp-code-dark"><code><span class="line"><span style="color:#dbd7caee;">{</span></span>
<span class="line"><span style="color:#dbd7caee;">  &quot;user&quot;: {  </span></span>
<span class="line"><span style="color:#dbd7caee;">    &quot;username&quot;: &quot;aaa&quot;,</span></span>
<span class="line"><span style="color:#dbd7caee;">    &quot;email&quot;: &quot;aaa@163.com&quot;,</span></span>
<span class="line"><span style="color:#dbd7caee;">    &quot;password&quot;: &quot;11111111&quot;</span></span>
<span class="line"><span style="color:#dbd7caee;">  }</span></span>
<span class="line"><span style="color:#dbd7caee;">}</span></span>
<span class="line"><span style="color:#dbd7caee;"></span></span></code></pre><pre class="shiki vp-code-light"><code><span class="line"><span style="color:#393a34;">{</span></span>
<span class="line"><span style="color:#393a34;">  &quot;user&quot;: {  </span></span>
<span class="line"><span style="color:#393a34;">    &quot;username&quot;: &quot;aaa&quot;,</span></span>
<span class="line"><span style="color:#393a34;">    &quot;email&quot;: &quot;aaa@163.com&quot;,</span></span>
<span class="line"><span style="color:#393a34;">    &quot;password&quot;: &quot;11111111&quot;</span></span>
<span class="line"><span style="color:#393a34;">  }</span></span>
<span class="line"><span style="color:#393a34;">}</span></span>
<span class="line"><span style="color:#393a34;"></span></span></code></pre></div><h3 id="\u67E5\u8BE2\u63A5\u53E3\u8BED\u53E5" tabindex="-1">\u67E5\u8BE2\u63A5\u53E3\u8BED\u53E5 <a class="header-anchor" href="#\u67E5\u8BE2\u63A5\u53E3\u8BED\u53E5" aria-hidden="true">#</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki vp-code-dark"><code><span class="line"><span style="color:#dbd7caee;"># \u6CE8\u518C\u7528\u6237</span></span>
<span class="line"><span style="color:#dbd7caee;"># mutation createUser($user: CreateUserInput) {</span></span>
<span class="line"><span style="color:#dbd7caee;">#   createUser(user: $user) {</span></span>
<span class="line"><span style="color:#dbd7caee;">#     user {</span></span>
<span class="line"><span style="color:#dbd7caee;">#       email</span></span>
<span class="line"><span style="color:#dbd7caee;">#       username</span></span>
<span class="line"><span style="color:#dbd7caee;">#       token</span></span>
<span class="line"><span style="color:#dbd7caee;">#     }</span></span>
<span class="line"><span style="color:#dbd7caee;">#   }</span></span>
<span class="line"><span style="color:#dbd7caee;"># }</span></span>
<span class="line"><span style="color:#dbd7caee;"></span></span>
<span class="line"><span style="color:#dbd7caee;"># \u767B\u5F55\u7528\u6237</span></span>
<span class="line"><span style="color:#dbd7caee;"># mutation login($user: LoginInput) {</span></span>
<span class="line"><span style="color:#dbd7caee;">#   login(user: $user) {</span></span>
<span class="line"><span style="color:#dbd7caee;">#     user {</span></span>
<span class="line"><span style="color:#dbd7caee;">#       email</span></span>
<span class="line"><span style="color:#dbd7caee;">#       username</span></span>
<span class="line"><span style="color:#dbd7caee;">#       token</span></span>
<span class="line"><span style="color:#dbd7caee;">#     }</span></span>
<span class="line"><span style="color:#dbd7caee;">#   }</span></span>
<span class="line"><span style="color:#dbd7caee;"># }</span></span>
<span class="line"><span style="color:#dbd7caee;"></span></span>
<span class="line"><span style="color:#dbd7caee;"># \u67E5\u8BE2\u5F53\u524D\u7528\u6237</span></span>
<span class="line"><span style="color:#dbd7caee;"># query {</span></span>
<span class="line"><span style="color:#dbd7caee;">#   currentUser {</span></span>
<span class="line"><span style="color:#dbd7caee;">#     email</span></span>
<span class="line"><span style="color:#dbd7caee;">#     username</span></span>
<span class="line"><span style="color:#dbd7caee;">#   }</span></span>
<span class="line"><span style="color:#dbd7caee;"># }</span></span>
<span class="line"><span style="color:#dbd7caee;"></span></span>
<span class="line"><span style="color:#dbd7caee;"># \u66F4\u65B0\u7528\u6237\u4FE1\u606F</span></span>
<span class="line"><span style="color:#dbd7caee;"># mutation updateUser ($user: UpdateUserInput) {</span></span>
<span class="line"><span style="color:#dbd7caee;">#   updateUser(user: $user) {</span></span>
<span class="line"><span style="color:#dbd7caee;">#     user {</span></span>
<span class="line"><span style="color:#dbd7caee;">#       username </span></span>
<span class="line"><span style="color:#dbd7caee;">#     	bio</span></span>
<span class="line"><span style="color:#dbd7caee;">#     }</span></span>
<span class="line"><span style="color:#dbd7caee;">#   }</span></span>
<span class="line"><span style="color:#dbd7caee;"># }</span></span>
<span class="line"><span style="color:#dbd7caee;">     </span></span>
<span class="line"><span style="color:#dbd7caee;"># \u521B\u5EFA\u6587\u7AE0</span></span>
<span class="line"><span style="color:#dbd7caee;"># mutation createArticle($article: CreateArticleInput) {</span></span>
<span class="line"><span style="color:#dbd7caee;">#   createArticle(article: $article) {</span></span>
<span class="line"><span style="color:#dbd7caee;">#     article {</span></span>
<span class="line"><span style="color:#dbd7caee;">#       _id</span></span>
<span class="line"><span style="color:#dbd7caee;">#       title</span></span>
<span class="line"><span style="color:#dbd7caee;">#       description</span></span>
<span class="line"><span style="color:#dbd7caee;">#       body</span></span>
<span class="line"><span style="color:#dbd7caee;">#       author {</span></span>
<span class="line"><span style="color:#dbd7caee;">#         email</span></span>
<span class="line"><span style="color:#dbd7caee;">#       }</span></span>
<span class="line"><span style="color:#dbd7caee;">#     }</span></span>
<span class="line"><span style="color:#dbd7caee;">#   }</span></span>
<span class="line"><span style="color:#dbd7caee;"># }</span></span>
<span class="line"><span style="color:#dbd7caee;"></span></span>
<span class="line"><span style="color:#dbd7caee;"># \u83B7\u53D6\u6587\u7AE0\u5217\u8868</span></span>
<span class="line"><span style="color:#dbd7caee;"># query {</span></span>
<span class="line"><span style="color:#dbd7caee;">#   articles (offset: 0, limit: 2) {</span></span>
<span class="line"><span style="color:#dbd7caee;">#     articles {</span></span>
<span class="line"><span style="color:#dbd7caee;">#       _id</span></span>
<span class="line"><span style="color:#dbd7caee;">#       title</span></span>
<span class="line"><span style="color:#dbd7caee;">#     }</span></span>
<span class="line"><span style="color:#dbd7caee;">#     articlesCount</span></span>
<span class="line"><span style="color:#dbd7caee;">#   }</span></span>
<span class="line"><span style="color:#dbd7caee;"># }</span></span>
<span class="line"><span style="color:#dbd7caee;"></span></span>
<span class="line"><span style="color:#dbd7caee;"># \u67E5\u8BE2\u5355\u4E2A\u6587\u7AE0</span></span>
<span class="line"><span style="color:#dbd7caee;"># query {</span></span>
<span class="line"><span style="color:#dbd7caee;">#   article (id: &quot;631efd1214d14060ccf8ad77&quot;) {</span></span>
<span class="line"><span style="color:#dbd7caee;">#     title</span></span>
<span class="line"><span style="color:#dbd7caee;">#   } </span></span>
<span class="line"><span style="color:#dbd7caee;"># }</span></span>
<span class="line"><span style="color:#dbd7caee;"></span></span>
<span class="line"><span style="color:#dbd7caee;"># \u66F4\u65B0\u5355\u4E2A\u6587\u7AE0</span></span>
<span class="line"><span style="color:#dbd7caee;"># mutation updateArticle($article: CreateArticleInput) {</span></span>
<span class="line"><span style="color:#dbd7caee;">#   updateArticle(id: &quot;631efd1214d14060ccf8ad77&quot;, article: $article) {</span></span>
<span class="line"><span style="color:#dbd7caee;">#     article {</span></span>
<span class="line"><span style="color:#dbd7caee;">#       _id</span></span>
<span class="line"><span style="color:#dbd7caee;">#       title</span></span>
<span class="line"><span style="color:#dbd7caee;">#       description</span></span>
<span class="line"><span style="color:#dbd7caee;">#       body</span></span>
<span class="line"><span style="color:#dbd7caee;">#       author {</span></span>
<span class="line"><span style="color:#dbd7caee;">#         email</span></span>
<span class="line"><span style="color:#dbd7caee;">#       }</span></span>
<span class="line"><span style="color:#dbd7caee;">#     }</span></span>
<span class="line"><span style="color:#dbd7caee;">#   }</span></span>
<span class="line"><span style="color:#dbd7caee;"># }</span></span>
<span class="line"><span style="color:#dbd7caee;"></span></span>
<span class="line"><span style="color:#dbd7caee;"># \u5220\u9664\u5355\u4E2A\u6587\u7AE0</span></span>
<span class="line"><span style="color:#dbd7caee;"># mutation {</span></span>
<span class="line"><span style="color:#dbd7caee;">#   deleteArticle(id: &quot;631efe3514d14060ccf8ad80&quot;) {</span></span>
<span class="line"><span style="color:#dbd7caee;">#     article {</span></span>
<span class="line"><span style="color:#dbd7caee;">#       title</span></span>
<span class="line"><span style="color:#dbd7caee;">#     }</span></span>
<span class="line"><span style="color:#dbd7caee;">#   }</span></span>
<span class="line"><span style="color:#dbd7caee;"># }</span></span>
<span class="line"><span style="color:#dbd7caee;"></span></span></code></pre><pre class="shiki vp-code-light"><code><span class="line"><span style="color:#393a34;"># \u6CE8\u518C\u7528\u6237</span></span>
<span class="line"><span style="color:#393a34;"># mutation createUser($user: CreateUserInput) {</span></span>
<span class="line"><span style="color:#393a34;">#   createUser(user: $user) {</span></span>
<span class="line"><span style="color:#393a34;">#     user {</span></span>
<span class="line"><span style="color:#393a34;">#       email</span></span>
<span class="line"><span style="color:#393a34;">#       username</span></span>
<span class="line"><span style="color:#393a34;">#       token</span></span>
<span class="line"><span style="color:#393a34;">#     }</span></span>
<span class="line"><span style="color:#393a34;">#   }</span></span>
<span class="line"><span style="color:#393a34;"># }</span></span>
<span class="line"><span style="color:#393a34;"></span></span>
<span class="line"><span style="color:#393a34;"># \u767B\u5F55\u7528\u6237</span></span>
<span class="line"><span style="color:#393a34;"># mutation login($user: LoginInput) {</span></span>
<span class="line"><span style="color:#393a34;">#   login(user: $user) {</span></span>
<span class="line"><span style="color:#393a34;">#     user {</span></span>
<span class="line"><span style="color:#393a34;">#       email</span></span>
<span class="line"><span style="color:#393a34;">#       username</span></span>
<span class="line"><span style="color:#393a34;">#       token</span></span>
<span class="line"><span style="color:#393a34;">#     }</span></span>
<span class="line"><span style="color:#393a34;">#   }</span></span>
<span class="line"><span style="color:#393a34;"># }</span></span>
<span class="line"><span style="color:#393a34;"></span></span>
<span class="line"><span style="color:#393a34;"># \u67E5\u8BE2\u5F53\u524D\u7528\u6237</span></span>
<span class="line"><span style="color:#393a34;"># query {</span></span>
<span class="line"><span style="color:#393a34;">#   currentUser {</span></span>
<span class="line"><span style="color:#393a34;">#     email</span></span>
<span class="line"><span style="color:#393a34;">#     username</span></span>
<span class="line"><span style="color:#393a34;">#   }</span></span>
<span class="line"><span style="color:#393a34;"># }</span></span>
<span class="line"><span style="color:#393a34;"></span></span>
<span class="line"><span style="color:#393a34;"># \u66F4\u65B0\u7528\u6237\u4FE1\u606F</span></span>
<span class="line"><span style="color:#393a34;"># mutation updateUser ($user: UpdateUserInput) {</span></span>
<span class="line"><span style="color:#393a34;">#   updateUser(user: $user) {</span></span>
<span class="line"><span style="color:#393a34;">#     user {</span></span>
<span class="line"><span style="color:#393a34;">#       username </span></span>
<span class="line"><span style="color:#393a34;">#     	bio</span></span>
<span class="line"><span style="color:#393a34;">#     }</span></span>
<span class="line"><span style="color:#393a34;">#   }</span></span>
<span class="line"><span style="color:#393a34;"># }</span></span>
<span class="line"><span style="color:#393a34;">     </span></span>
<span class="line"><span style="color:#393a34;"># \u521B\u5EFA\u6587\u7AE0</span></span>
<span class="line"><span style="color:#393a34;"># mutation createArticle($article: CreateArticleInput) {</span></span>
<span class="line"><span style="color:#393a34;">#   createArticle(article: $article) {</span></span>
<span class="line"><span style="color:#393a34;">#     article {</span></span>
<span class="line"><span style="color:#393a34;">#       _id</span></span>
<span class="line"><span style="color:#393a34;">#       title</span></span>
<span class="line"><span style="color:#393a34;">#       description</span></span>
<span class="line"><span style="color:#393a34;">#       body</span></span>
<span class="line"><span style="color:#393a34;">#       author {</span></span>
<span class="line"><span style="color:#393a34;">#         email</span></span>
<span class="line"><span style="color:#393a34;">#       }</span></span>
<span class="line"><span style="color:#393a34;">#     }</span></span>
<span class="line"><span style="color:#393a34;">#   }</span></span>
<span class="line"><span style="color:#393a34;"># }</span></span>
<span class="line"><span style="color:#393a34;"></span></span>
<span class="line"><span style="color:#393a34;"># \u83B7\u53D6\u6587\u7AE0\u5217\u8868</span></span>
<span class="line"><span style="color:#393a34;"># query {</span></span>
<span class="line"><span style="color:#393a34;">#   articles (offset: 0, limit: 2) {</span></span>
<span class="line"><span style="color:#393a34;">#     articles {</span></span>
<span class="line"><span style="color:#393a34;">#       _id</span></span>
<span class="line"><span style="color:#393a34;">#       title</span></span>
<span class="line"><span style="color:#393a34;">#     }</span></span>
<span class="line"><span style="color:#393a34;">#     articlesCount</span></span>
<span class="line"><span style="color:#393a34;">#   }</span></span>
<span class="line"><span style="color:#393a34;"># }</span></span>
<span class="line"><span style="color:#393a34;"></span></span>
<span class="line"><span style="color:#393a34;"># \u67E5\u8BE2\u5355\u4E2A\u6587\u7AE0</span></span>
<span class="line"><span style="color:#393a34;"># query {</span></span>
<span class="line"><span style="color:#393a34;">#   article (id: &quot;631efd1214d14060ccf8ad77&quot;) {</span></span>
<span class="line"><span style="color:#393a34;">#     title</span></span>
<span class="line"><span style="color:#393a34;">#   } </span></span>
<span class="line"><span style="color:#393a34;"># }</span></span>
<span class="line"><span style="color:#393a34;"></span></span>
<span class="line"><span style="color:#393a34;"># \u66F4\u65B0\u5355\u4E2A\u6587\u7AE0</span></span>
<span class="line"><span style="color:#393a34;"># mutation updateArticle($article: CreateArticleInput) {</span></span>
<span class="line"><span style="color:#393a34;">#   updateArticle(id: &quot;631efd1214d14060ccf8ad77&quot;, article: $article) {</span></span>
<span class="line"><span style="color:#393a34;">#     article {</span></span>
<span class="line"><span style="color:#393a34;">#       _id</span></span>
<span class="line"><span style="color:#393a34;">#       title</span></span>
<span class="line"><span style="color:#393a34;">#       description</span></span>
<span class="line"><span style="color:#393a34;">#       body</span></span>
<span class="line"><span style="color:#393a34;">#       author {</span></span>
<span class="line"><span style="color:#393a34;">#         email</span></span>
<span class="line"><span style="color:#393a34;">#       }</span></span>
<span class="line"><span style="color:#393a34;">#     }</span></span>
<span class="line"><span style="color:#393a34;">#   }</span></span>
<span class="line"><span style="color:#393a34;"># }</span></span>
<span class="line"><span style="color:#393a34;"></span></span>
<span class="line"><span style="color:#393a34;"># \u5220\u9664\u5355\u4E2A\u6587\u7AE0</span></span>
<span class="line"><span style="color:#393a34;"># mutation {</span></span>
<span class="line"><span style="color:#393a34;">#   deleteArticle(id: &quot;631efe3514d14060ccf8ad80&quot;) {</span></span>
<span class="line"><span style="color:#393a34;">#     article {</span></span>
<span class="line"><span style="color:#393a34;">#       title</span></span>
<span class="line"><span style="color:#393a34;">#     }</span></span>
<span class="line"><span style="color:#393a34;">#   }</span></span>
<span class="line"><span style="color:#393a34;"># }</span></span>
<span class="line"><span style="color:#393a34;"></span></span></code></pre></div>`,33),e=[o];function c(r,t,y,A,i,D){return a(),n("div",null,e)}const E=s(p,[["render",c]]);export{B as __pageData,E as default};
