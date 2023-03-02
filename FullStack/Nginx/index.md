# Nginx 问题解决


## 一、问题需求
1、 将80端口通过多个serve_name进行区分  
2、代理接口API，解决跨域问题

## 二、配置过程
服务1-前台页面配置(xxx.conf)：
```
server {
    listen 80;
    server_name  aaa.xiaoming.com;
    root /home/www/xxx;
    index index.html index.htm;

    location / {
        try_files $uri /index.html;
    }
}
```

服务1-接口配置
```
server {
    listen 80;
    server_name  api.xiaoming.com;
    root /home/www/xxx;
    index index.html index.htm;

    location / {
        proxy_pass http://api.xiaoming.com:8060;
        # Simple requests
        if ($request_method ~* "(GET|POST|HEAD)") {
            add_header "Access-Control-Allow-Origin"  $http_origin;
            # add_header "Access-Control-Allow-Credentials"  true; (当上面的值含有*时，这个字段就没卵用)
        }

        # Preflighted requests
        if ($request_method = OPTIONS ) {
            add_header "Access-Control-Allow-Origin"  $http_origin;
            add_header "Access-Control-Allow-Methods" "GET, POST, PUT, DELETE, OPTIONS, HEAD";
            add_header "Access-Control-Allow-Headers" "Authorization, Origin, X-Requested-With, Content-Type, Accept";
            return 200;
        }
    }
}
```

服务2-前台页面配置(yyy.conf)：
```
server {
    listen 80;
    server_name  bbb.xiaoming.com;
    root /home/www/yyy;
    index index.html index.htm;

    location / {
        try_files $uri /index.html;
    }
}
```
## 三、docker容器化
1、创建docker-compose.yml配置文件
```
version: "3"
services:
 nginx:
  restart: always
  container_name: nginx
  image: nginx
  #external_links:
   #- skywalking-ui
  ports:
   - 80:80
   - 443:443
  volumes:
   - /home/docker/nginx/conf.d:/etc/nginx/conf.d
   - /home/docker/nginx/logs/nginx:/var/log/nginx
   - /home/docker/nginx/html:/usr/share/nginx/html
   - /home/docker/nginx/conf:/etc/nginx/conf
   - /home/docker/nginx/nginx.conf:/etc/nginx/nginx.conf
   - /home/docker/nginx/letsencrypt:/etc/letsencrypt
   - /home/docker/nginx/cert:/etc/nginx/ssl
   - /home/docker/nginx/www:/var/www
   - /home/www/xxx:/home/www/xxx
   - /home/www/yyy:/home/www/yyy
```

## 四、坑点

1、当添加新的卷时，仅通过`docker-compose restart` 并不能创建新增的卷。需要执行以下命令：
```
docker-compose stop
docker-compose start
docker-compose up -d (为服务构建、（重新）创建、启动和附加到容器)
```
[命令详细查看](https://docs.docker.com/engine/reference/commandline/compose_up/)
