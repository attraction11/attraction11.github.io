# Redis 设置远程连接
> 注意：为了保护数据安全，开放远程连接需谨慎操作。
Redis 默认是不允许远程连接的，通过下面的配置可以开启远程连接。

将 redis.conf 配置文件的 bind 和 protected-mode 修改如下：
```Shell

# 绑定的端口号
bind 0.0.0.0

# 关闭保护模式
protected-mode no
```
除此之外还需要检查服务器防火墙是否开放了 Redis 服务占用的端口号。

修改之后重启 Redis 服务即可生效。