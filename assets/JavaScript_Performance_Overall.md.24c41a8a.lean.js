import{_ as e,c as n,d as a,a as s,b as l,o as i}from"./app.417e51bc.js";const x=JSON.parse('{"title":"\u524D\u7AEF\u6027\u80FD\u4F18\u5316\u65B9\u6CD5\u4E0E\u5B9E\u6218","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u53C2\u8003","slug":"\u53C2\u8003","link":"#\u53C2\u8003","children":[]},{"level":2,"title":"\u5177\u4F53\u5B9E\u8DF5","slug":"\u5177\u4F53\u5B9E\u8DF5","link":"#\u5177\u4F53\u5B9E\u8DF5","children":[]},{"level":2,"title":"1. \u52A0\u8F7D\u4F18\u5316","slug":"_1-\u52A0\u8F7D\u4F18\u5316","link":"#_1-\u52A0\u8F7D\u4F18\u5316","children":[]},{"level":2,"title":"2. \u6267\u884C\u4F18\u5316","slug":"_2-\u6267\u884C\u4F18\u5316","link":"#_2-\u6267\u884C\u4F18\u5316","children":[]},{"level":2,"title":"3. \u6E32\u67D3\u4F18\u5316","slug":"_3-\u6E32\u67D3\u4F18\u5316","link":"#_3-\u6E32\u67D3\u4F18\u5316","children":[]},{"level":2,"title":"4. \u6837\u5F0F\u4F18\u5316","slug":"_4-\u6837\u5F0F\u4F18\u5316","link":"#_4-\u6837\u5F0F\u4F18\u5316","children":[]},{"level":2,"title":"5. \u811A\u672C\u4F18\u5316","slug":"_5-\u811A\u672C\u4F18\u5316","link":"#_5-\u811A\u672C\u4F18\u5316","children":[]},{"level":2,"title":"\u96C5\u864E\u519B\u89C4","slug":"\u96C5\u864E\u519B\u89C4","link":"#\u96C5\u864E\u519B\u89C4","children":[]},{"level":2,"title":"\u5B98\u7F51\u4F18\u5316\uFF0C\u6709\u54EA\u4E9B\u6027\u80FD\u6307\u6807\uFF0C\u5982\u4F55\u91CF\u5316","slug":"\u5B98\u7F51\u4F18\u5316-\u6709\u54EA\u4E9B\u6027\u80FD\u6307\u6807-\u5982\u4F55\u91CF\u5316","link":"#\u5B98\u7F51\u4F18\u5316-\u6709\u54EA\u4E9B\u6027\u80FD\u6307\u6807-\u5982\u4F55\u91CF\u5316","children":[]},{"level":2,"title":"\u5C3E\u8C03\u7528\u4F18\u5316","slug":"\u5C3E\u8C03\u7528\u4F18\u5316","link":"#\u5C3E\u8C03\u7528\u4F18\u5316","children":[]}],"relativePath":"JavaScript/Performance/Overall.md"}'),p={name:"JavaScript/Performance/Overall.md"},t=s("",38),o=l("link",{rel:"stylesheet",href:"//example.css",media:"none",onload:"this.media='all'"},null,-1),c=l("ul",null,[l("li",null,"preconnent")],-1),r=l("p",null,"lighthouse\u5EFA\u8BAE\u5BF9\u4E8E\u63A5\u4E0B\u6765\u4F1A\u8BBF\u95EE\u7684\u5730\u5740\u53EF\u4EE5\u63D0\u524D\u5EFA\u7ACB\u8FDE\u63A5\u3002\u4E00\u822C\u6709\u4E00\u4E0B\u51E0\u79CD\u65B9\u5F0F\u3002",-1),d=l("ul",null,[l("li",null,"dns-prefetch \u57DF\u540D\u9884\u89E3\u6790")],-1),u=l("link",{rel:"dns-prefetch",href:"//example.com"},null,-1),h=l("ul",null,[l("li",null,"preconnet \u9884\u8FDE\u63A5")],-1),m=l("link",{rel:"preconnect",href:"//example.com"},null,-1),y=l("link",{rel:"preconnect",href:"//cdn.example.com",crossorigin:""},null,-1),g=l("ul",null,[l("li",null,"prefetch \u9884\u52A0\u8F7D")],-1),b=l("link",{rel:"prefetch",href:"//example.com/next-page.html",as:"html",crossorigin:"use-credentials"},null,-1),f=l("link",{rel:"prefetch",href:"library.js",as:"script"},null,-1),S=l("ul",null,[l("li",null,"prerender \u9884\u6E32\u67D3")],-1),_=l("link",{rel:"prerender",href:"//example.com/next-page.html"},null,-1),v=s("",17);function C(k,w,M,D,T,O){return i(),n("div",null,[t,o,a(" \u8FD9\u91CC\u7528\u7684\u662F\u7B2C\u4E8C\u79CD\u65B9\u6CD5\u3002\u4F46\u662Fwebpack\u6CE8\u5165\u5230html\u4E2D\u7684\u5916\u94FEcss\u8FD8\u6CA1\u627E\u5230\u5F02\u6B65\u52A0\u8F7D\u7684\u65B9\u6CD5\u3002 "),c,r,d,u,h,m,y,g,b,f,S,_,a(" \u8FD9\u56DB\u79CD\u5C42\u5C42\u9012\u8FDB\uFF0C\u4F46\u662F\u4E0D\u8981\u8FDE\u63A5\u4E0D\u9700\u8981\u7684\u8D44\u6E90\uFF0C\u53CD\u800C\u635F\u8017\u6027\u80FD\u3002\u6211\u5728\u9875\u9762\u4E0A\u5BF9\u67D0\u4E9B\u8D44\u6E90\u7528\u4E86preconnect\uFF0C\u4F46\u5E76\u6CA1\u6709\u660E\u663E\u7684\u6548\u679C\u3002\u5E94\u8BE5\u5BF9\u4E8E\u5728\u7EBF\u5C0F\u8BF4\uFF0C\u5728\u7EBF\u6F2B\u753B\u8FD9\u79CD\u573A\u666F\u9884\u52A0\u8F7D\u4F1A\u66F4\u9002\u7528\u3002 "),v])}const P=e(p,[["render",C]]);export{x as __pageData,P as default};