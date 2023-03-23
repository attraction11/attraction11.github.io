import{_ as s,c as n,o as a,a as e}from"./app.8b8db46f.js";const m=JSON.parse('{"title":"Nginx \u95EE\u9898\u89E3\u51B3","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4E00\u3001\u95EE\u9898\u9700\u6C42","slug":"\u4E00\u3001\u95EE\u9898\u9700\u6C42","link":"#\u4E00\u3001\u95EE\u9898\u9700\u6C42","children":[]},{"level":2,"title":"\u4E8C\u3001\u914D\u7F6E\u8FC7\u7A0B","slug":"\u4E8C\u3001\u914D\u7F6E\u8FC7\u7A0B","link":"#\u4E8C\u3001\u914D\u7F6E\u8FC7\u7A0B","children":[]},{"level":2,"title":"\u4E09\u3001docker\u5BB9\u5668\u5316","slug":"\u4E09\u3001docker\u5BB9\u5668\u5316","link":"#\u4E09\u3001docker\u5BB9\u5668\u5316","children":[]},{"level":2,"title":"\u56DB\u3001\u5751\u70B9","slug":"\u56DB\u3001\u5751\u70B9","link":"#\u56DB\u3001\u5751\u70B9","children":[]}],"relativePath":"FullStack/Nginx/index.md"}'),l={name:"FullStack/Nginx/index.md"},p=e(`<h1 id="nginx-\u95EE\u9898\u89E3\u51B3" tabindex="-1">Nginx \u95EE\u9898\u89E3\u51B3 <a class="header-anchor" href="#nginx-\u95EE\u9898\u89E3\u51B3" aria-hidden="true">#</a></h1><h2 id="\u4E00\u3001\u95EE\u9898\u9700\u6C42" tabindex="-1">\u4E00\u3001\u95EE\u9898\u9700\u6C42 <a class="header-anchor" href="#\u4E00\u3001\u95EE\u9898\u9700\u6C42" aria-hidden="true">#</a></h2><p>1\u3001 \u5C0680\u7AEF\u53E3\u901A\u8FC7\u591A\u4E2Aserve_name\u8FDB\u884C\u533A\u5206<br> 2\u3001\u4EE3\u7406\u63A5\u53E3API\uFF0C\u89E3\u51B3\u8DE8\u57DF\u95EE\u9898</p><h2 id="\u4E8C\u3001\u914D\u7F6E\u8FC7\u7A0B" tabindex="-1">\u4E8C\u3001\u914D\u7F6E\u8FC7\u7A0B <a class="header-anchor" href="#\u4E8C\u3001\u914D\u7F6E\u8FC7\u7A0B" aria-hidden="true">#</a></h2><p>\u670D\u52A11-\u524D\u53F0\u9875\u9762\u914D\u7F6E(xxx.conf)\uFF1A</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki vp-code-dark"><code><span class="line"><span style="color:#dbd7caee;">server {</span></span>
<span class="line"><span style="color:#dbd7caee;">    listen 80;</span></span>
<span class="line"><span style="color:#dbd7caee;">    server_name  aaa.xiaoming.com;</span></span>
<span class="line"><span style="color:#dbd7caee;">    root /home/www/xxx;</span></span>
<span class="line"><span style="color:#dbd7caee;">    index index.html index.htm;</span></span>
<span class="line"><span style="color:#dbd7caee;"></span></span>
<span class="line"><span style="color:#dbd7caee;">    location / {</span></span>
<span class="line"><span style="color:#dbd7caee;">        try_files $uri /index.html;</span></span>
<span class="line"><span style="color:#dbd7caee;">    }</span></span>
<span class="line"><span style="color:#dbd7caee;">}</span></span>
<span class="line"><span style="color:#dbd7caee;"></span></span></code></pre><pre class="shiki vp-code-light"><code><span class="line"><span style="color:#393a34;">server {</span></span>
<span class="line"><span style="color:#393a34;">    listen 80;</span></span>
<span class="line"><span style="color:#393a34;">    server_name  aaa.xiaoming.com;</span></span>
<span class="line"><span style="color:#393a34;">    root /home/www/xxx;</span></span>
<span class="line"><span style="color:#393a34;">    index index.html index.htm;</span></span>
<span class="line"><span style="color:#393a34;"></span></span>
<span class="line"><span style="color:#393a34;">    location / {</span></span>
<span class="line"><span style="color:#393a34;">        try_files $uri /index.html;</span></span>
<span class="line"><span style="color:#393a34;">    }</span></span>
<span class="line"><span style="color:#393a34;">}</span></span>
<span class="line"><span style="color:#393a34;"></span></span></code></pre></div><p>\u670D\u52A11-\u63A5\u53E3\u914D\u7F6E</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki vp-code-dark"><code><span class="line"><span style="color:#dbd7caee;">server {</span></span>
<span class="line"><span style="color:#dbd7caee;">    listen 80;</span></span>
<span class="line"><span style="color:#dbd7caee;">    server_name  api.xiaoming.com;</span></span>
<span class="line"><span style="color:#dbd7caee;">    root /home/www/xxx;</span></span>
<span class="line"><span style="color:#dbd7caee;">    index index.html index.htm;</span></span>
<span class="line"><span style="color:#dbd7caee;"></span></span>
<span class="line"><span style="color:#dbd7caee;">    location / {</span></span>
<span class="line"><span style="color:#dbd7caee;">        proxy_pass http://api.xiaoming.com:8060;</span></span>
<span class="line"><span style="color:#dbd7caee;">        # Simple requests</span></span>
<span class="line"><span style="color:#dbd7caee;">        if ($request_method ~* &quot;(GET|POST|HEAD)&quot;) {</span></span>
<span class="line"><span style="color:#dbd7caee;">            add_header &quot;Access-Control-Allow-Origin&quot;  $http_origin;</span></span>
<span class="line"><span style="color:#dbd7caee;">            # add_header &quot;Access-Control-Allow-Credentials&quot;  true; (\u5F53\u4E0A\u9762\u7684\u503C\u542B\u6709*\u65F6\uFF0C\u8FD9\u4E2A\u5B57\u6BB5\u5C31\u6CA1\u5375\u7528)</span></span>
<span class="line"><span style="color:#dbd7caee;">        }</span></span>
<span class="line"><span style="color:#dbd7caee;"></span></span>
<span class="line"><span style="color:#dbd7caee;">        # Preflighted requests</span></span>
<span class="line"><span style="color:#dbd7caee;">        if ($request_method = OPTIONS ) {</span></span>
<span class="line"><span style="color:#dbd7caee;">            add_header &quot;Access-Control-Allow-Origin&quot;  $http_origin;</span></span>
<span class="line"><span style="color:#dbd7caee;">            add_header &quot;Access-Control-Allow-Methods&quot; &quot;GET, POST, PUT, DELETE, OPTIONS, HEAD&quot;;</span></span>
<span class="line"><span style="color:#dbd7caee;">            add_header &quot;Access-Control-Allow-Headers&quot; &quot;Authorization, Origin, X-Requested-With, Content-Type, Accept&quot;;</span></span>
<span class="line"><span style="color:#dbd7caee;">            return 200;</span></span>
<span class="line"><span style="color:#dbd7caee;">        }</span></span>
<span class="line"><span style="color:#dbd7caee;">    }</span></span>
<span class="line"><span style="color:#dbd7caee;">}</span></span>
<span class="line"><span style="color:#dbd7caee;"></span></span></code></pre><pre class="shiki vp-code-light"><code><span class="line"><span style="color:#393a34;">server {</span></span>
<span class="line"><span style="color:#393a34;">    listen 80;</span></span>
<span class="line"><span style="color:#393a34;">    server_name  api.xiaoming.com;</span></span>
<span class="line"><span style="color:#393a34;">    root /home/www/xxx;</span></span>
<span class="line"><span style="color:#393a34;">    index index.html index.htm;</span></span>
<span class="line"><span style="color:#393a34;"></span></span>
<span class="line"><span style="color:#393a34;">    location / {</span></span>
<span class="line"><span style="color:#393a34;">        proxy_pass http://api.xiaoming.com:8060;</span></span>
<span class="line"><span style="color:#393a34;">        # Simple requests</span></span>
<span class="line"><span style="color:#393a34;">        if ($request_method ~* &quot;(GET|POST|HEAD)&quot;) {</span></span>
<span class="line"><span style="color:#393a34;">            add_header &quot;Access-Control-Allow-Origin&quot;  $http_origin;</span></span>
<span class="line"><span style="color:#393a34;">            # add_header &quot;Access-Control-Allow-Credentials&quot;  true; (\u5F53\u4E0A\u9762\u7684\u503C\u542B\u6709*\u65F6\uFF0C\u8FD9\u4E2A\u5B57\u6BB5\u5C31\u6CA1\u5375\u7528)</span></span>
<span class="line"><span style="color:#393a34;">        }</span></span>
<span class="line"><span style="color:#393a34;"></span></span>
<span class="line"><span style="color:#393a34;">        # Preflighted requests</span></span>
<span class="line"><span style="color:#393a34;">        if ($request_method = OPTIONS ) {</span></span>
<span class="line"><span style="color:#393a34;">            add_header &quot;Access-Control-Allow-Origin&quot;  $http_origin;</span></span>
<span class="line"><span style="color:#393a34;">            add_header &quot;Access-Control-Allow-Methods&quot; &quot;GET, POST, PUT, DELETE, OPTIONS, HEAD&quot;;</span></span>
<span class="line"><span style="color:#393a34;">            add_header &quot;Access-Control-Allow-Headers&quot; &quot;Authorization, Origin, X-Requested-With, Content-Type, Accept&quot;;</span></span>
<span class="line"><span style="color:#393a34;">            return 200;</span></span>
<span class="line"><span style="color:#393a34;">        }</span></span>
<span class="line"><span style="color:#393a34;">    }</span></span>
<span class="line"><span style="color:#393a34;">}</span></span>
<span class="line"><span style="color:#393a34;"></span></span></code></pre></div><p>\u670D\u52A12-\u524D\u53F0\u9875\u9762\u914D\u7F6E(yyy.conf)\uFF1A</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki vp-code-dark"><code><span class="line"><span style="color:#dbd7caee;">server {</span></span>
<span class="line"><span style="color:#dbd7caee;">    listen 80;</span></span>
<span class="line"><span style="color:#dbd7caee;">    server_name  bbb.xiaoming.com;</span></span>
<span class="line"><span style="color:#dbd7caee;">    root /home/www/yyy;</span></span>
<span class="line"><span style="color:#dbd7caee;">    index index.html index.htm;</span></span>
<span class="line"><span style="color:#dbd7caee;"></span></span>
<span class="line"><span style="color:#dbd7caee;">    location / {</span></span>
<span class="line"><span style="color:#dbd7caee;">        try_files $uri /index.html;</span></span>
<span class="line"><span style="color:#dbd7caee;">    }</span></span>
<span class="line"><span style="color:#dbd7caee;">}</span></span>
<span class="line"><span style="color:#dbd7caee;"></span></span></code></pre><pre class="shiki vp-code-light"><code><span class="line"><span style="color:#393a34;">server {</span></span>
<span class="line"><span style="color:#393a34;">    listen 80;</span></span>
<span class="line"><span style="color:#393a34;">    server_name  bbb.xiaoming.com;</span></span>
<span class="line"><span style="color:#393a34;">    root /home/www/yyy;</span></span>
<span class="line"><span style="color:#393a34;">    index index.html index.htm;</span></span>
<span class="line"><span style="color:#393a34;"></span></span>
<span class="line"><span style="color:#393a34;">    location / {</span></span>
<span class="line"><span style="color:#393a34;">        try_files $uri /index.html;</span></span>
<span class="line"><span style="color:#393a34;">    }</span></span>
<span class="line"><span style="color:#393a34;">}</span></span>
<span class="line"><span style="color:#393a34;"></span></span></code></pre></div><h2 id="\u4E09\u3001docker\u5BB9\u5668\u5316" tabindex="-1">\u4E09\u3001docker\u5BB9\u5668\u5316 <a class="header-anchor" href="#\u4E09\u3001docker\u5BB9\u5668\u5316" aria-hidden="true">#</a></h2><p>1\u3001\u521B\u5EFAdocker-compose.yml\u914D\u7F6E\u6587\u4EF6</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki vp-code-dark"><code><span class="line"><span style="color:#dbd7caee;">version: &quot;3&quot;</span></span>
<span class="line"><span style="color:#dbd7caee;">services:</span></span>
<span class="line"><span style="color:#dbd7caee;"> nginx:</span></span>
<span class="line"><span style="color:#dbd7caee;">  restart: always</span></span>
<span class="line"><span style="color:#dbd7caee;">  container_name: nginx</span></span>
<span class="line"><span style="color:#dbd7caee;">  image: nginx</span></span>
<span class="line"><span style="color:#dbd7caee;">  #external_links:</span></span>
<span class="line"><span style="color:#dbd7caee;">   #- skywalking-ui</span></span>
<span class="line"><span style="color:#dbd7caee;">  ports:</span></span>
<span class="line"><span style="color:#dbd7caee;">   - 80:80</span></span>
<span class="line"><span style="color:#dbd7caee;">   - 443:443</span></span>
<span class="line"><span style="color:#dbd7caee;">  volumes:</span></span>
<span class="line"><span style="color:#dbd7caee;">   - /home/docker/nginx/conf.d:/etc/nginx/conf.d</span></span>
<span class="line"><span style="color:#dbd7caee;">   - /home/docker/nginx/logs/nginx:/var/log/nginx</span></span>
<span class="line"><span style="color:#dbd7caee;">   - /home/docker/nginx/html:/usr/share/nginx/html</span></span>
<span class="line"><span style="color:#dbd7caee;">   - /home/docker/nginx/conf:/etc/nginx/conf</span></span>
<span class="line"><span style="color:#dbd7caee;">   - /home/docker/nginx/nginx.conf:/etc/nginx/nginx.conf</span></span>
<span class="line"><span style="color:#dbd7caee;">   - /home/docker/nginx/letsencrypt:/etc/letsencrypt</span></span>
<span class="line"><span style="color:#dbd7caee;">   - /home/docker/nginx/cert:/etc/nginx/ssl</span></span>
<span class="line"><span style="color:#dbd7caee;">   - /home/docker/nginx/www:/var/www</span></span>
<span class="line"><span style="color:#dbd7caee;">   - /home/www/xxx:/home/www/xxx</span></span>
<span class="line"><span style="color:#dbd7caee;">   - /home/www/yyy:/home/www/yyy</span></span>
<span class="line"><span style="color:#dbd7caee;"></span></span></code></pre><pre class="shiki vp-code-light"><code><span class="line"><span style="color:#393a34;">version: &quot;3&quot;</span></span>
<span class="line"><span style="color:#393a34;">services:</span></span>
<span class="line"><span style="color:#393a34;"> nginx:</span></span>
<span class="line"><span style="color:#393a34;">  restart: always</span></span>
<span class="line"><span style="color:#393a34;">  container_name: nginx</span></span>
<span class="line"><span style="color:#393a34;">  image: nginx</span></span>
<span class="line"><span style="color:#393a34;">  #external_links:</span></span>
<span class="line"><span style="color:#393a34;">   #- skywalking-ui</span></span>
<span class="line"><span style="color:#393a34;">  ports:</span></span>
<span class="line"><span style="color:#393a34;">   - 80:80</span></span>
<span class="line"><span style="color:#393a34;">   - 443:443</span></span>
<span class="line"><span style="color:#393a34;">  volumes:</span></span>
<span class="line"><span style="color:#393a34;">   - /home/docker/nginx/conf.d:/etc/nginx/conf.d</span></span>
<span class="line"><span style="color:#393a34;">   - /home/docker/nginx/logs/nginx:/var/log/nginx</span></span>
<span class="line"><span style="color:#393a34;">   - /home/docker/nginx/html:/usr/share/nginx/html</span></span>
<span class="line"><span style="color:#393a34;">   - /home/docker/nginx/conf:/etc/nginx/conf</span></span>
<span class="line"><span style="color:#393a34;">   - /home/docker/nginx/nginx.conf:/etc/nginx/nginx.conf</span></span>
<span class="line"><span style="color:#393a34;">   - /home/docker/nginx/letsencrypt:/etc/letsencrypt</span></span>
<span class="line"><span style="color:#393a34;">   - /home/docker/nginx/cert:/etc/nginx/ssl</span></span>
<span class="line"><span style="color:#393a34;">   - /home/docker/nginx/www:/var/www</span></span>
<span class="line"><span style="color:#393a34;">   - /home/www/xxx:/home/www/xxx</span></span>
<span class="line"><span style="color:#393a34;">   - /home/www/yyy:/home/www/yyy</span></span>
<span class="line"><span style="color:#393a34;"></span></span></code></pre></div><h2 id="\u56DB\u3001\u5751\u70B9" tabindex="-1">\u56DB\u3001\u5751\u70B9 <a class="header-anchor" href="#\u56DB\u3001\u5751\u70B9" aria-hidden="true">#</a></h2><p>1\u3001\u5F53\u6DFB\u52A0\u65B0\u7684\u5377\u65F6\uFF0C\u4EC5\u901A\u8FC7<code>docker-compose restart</code> \u5E76\u4E0D\u80FD\u521B\u5EFA\u65B0\u589E\u7684\u5377\u3002\u9700\u8981\u6267\u884C\u4EE5\u4E0B\u547D\u4EE4\uFF1A</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki vp-code-dark"><code><span class="line"><span style="color:#dbd7caee;">docker-compose stop</span></span>
<span class="line"><span style="color:#dbd7caee;">docker-compose start</span></span>
<span class="line"><span style="color:#dbd7caee;">docker-compose up -d (\u4E3A\u670D\u52A1\u6784\u5EFA\u3001\uFF08\u91CD\u65B0\uFF09\u521B\u5EFA\u3001\u542F\u52A8\u548C\u9644\u52A0\u5230\u5BB9\u5668)</span></span>
<span class="line"><span style="color:#dbd7caee;"></span></span></code></pre><pre class="shiki vp-code-light"><code><span class="line"><span style="color:#393a34;">docker-compose stop</span></span>
<span class="line"><span style="color:#393a34;">docker-compose start</span></span>
<span class="line"><span style="color:#393a34;">docker-compose up -d (\u4E3A\u670D\u52A1\u6784\u5EFA\u3001\uFF08\u91CD\u65B0\uFF09\u521B\u5EFA\u3001\u542F\u52A8\u548C\u9644\u52A0\u5230\u5BB9\u5668)</span></span>
<span class="line"><span style="color:#393a34;"></span></span></code></pre></div><p><a href="https://docs.docker.com/engine/reference/commandline/compose_up/" target="_blank" rel="noreferrer">\u547D\u4EE4\u8BE6\u7EC6\u67E5\u770B</a></p>`,17),o=[p];function c(t,i,r,d,y,h){return a(),n("div",null,o)}const g=s(l,[["render",c]]);export{m as __pageData,g as default};
