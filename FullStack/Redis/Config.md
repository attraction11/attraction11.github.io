# Redis 配置
我们在之前介绍过可以通过 redis-server 的启动参数 port 设置了 Redis 服务的端口号，除此之外 Redis 还支持其他配置选项，如是否开启持久化、日志级别等。
## 通过命令行传递参数
最简单的方式就是在启动 redis-server 的时候直接传递命令参数。
```Shell
redis-server --port 6380 --host 127.0.0.1
```
## 配置文件
由于可以配置的选项较多，通过启动参数设置这些选项并不方便，所以 Redis 支持通过配置文件来设置这些选项。
Redis 提供了一个配置文件的模板 redis.conf，位于源代码目录的根目录中。
我们建议把该文件放到 /etc/redis 目录中（该目录需要手动创建），以端口号命令，例如 6379.conf。
启用配置文件的方法是在启动时将配置文件的路径作为启动参数传递给 redis-server：
```Shell
redis-server 配置文件路径
```
通过启动参数传递同名的配置选项会覆盖配置文件中的相应的参数，就像这样：
```Shell
redis-server 配置文件路径 --port 3000
```
## 在服务器运行时更改 Redis 配置
还可以在 Redis 运行时通过 CONFIG SET 命令在不重新启动 Redis 的清空下动态修改部分 Redis 配置。就像这样：
```Shell
CONFIG SET logLevel warning
```
同样在运行的时候也可以使用 CONFIG GET 命令获得 Redis 当前的配置情况：
```Shell
CONFIG GET logLevel
```