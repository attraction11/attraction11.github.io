# Redis 安装

## 关于 Redis 的版本

Redis 借鉴了 Linux 操作系统对于版本号的命名规则：
- 版本号第二位如果是奇数，则为非稳定版本（例如2.7、2.9、3.1）
- 如果是偶数，则为稳定版本（例如2.6、2.8、3.0、3.2）

当前奇数版本就是下一个稳定版本的开发版本，例如 2.9 版本是 3.0 版本的开发版本。所以我们在生产环境通常选取偶数版本的Redis，如果对于某些新的特性想提前了解和使用，可以选择最新的奇数版本。

## 获取 Redis 的方式

获取 Redis 的方式有很多种：
- 安装到自己电脑上
- 安装到虚拟机上
- 安装到远程服务器上
- 可以从 Docker Hub 获取 Redis 的 Docker 镜像
- ...

## 在 macOS 中安装 Redis

在 macOS 中有两种方式：
- 方式一：编译安装
- 方式二（推荐）：使用 Homebrew 安装

macOS 系统下的软件包管理工具 Homebrew 提供了较新版本的 Redis 包，所以我们可以直接使用它们来安装 Redis，省去了在 Linux 上需要手动编译的麻烦。

1、安装 Homebrew

```Shell
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"
```

2、通过 Homebrew 安装 Redis

```Shell
brew install redis
```

## 在 Windows 中安装 Redis

Redis 官方不支持 Windows。2011 年微软向 Redis 提交了一个补丁，以使 Redis 可以在 Windows 下编译运行。但被作者拒绝了，原因是在服务器领域上 Linux 已经得到了广泛的使用，让 Redis 能在 Windows 下运行相比而言显得不那么重要。并且 Redis 使用了如写时复制等很多操作系统相关的特性，兼容 Windows 会耗费天大的精力而影响 Redis 的开发。

尽管如此微软还是发布了一个可以在 Windows 下的 Redis 版本，但是这个项目已经不再维护。

如果你实在想要在 Windows 上学习使用 Redis 的话可以尝试一下 Memurai，它是一个 Redis for Windows 的替代品，它的核心基于 Redis 源代码并且完全兼容 Redis，但是该项目并未得到微软官方的认可，有兴趣的话可以尝试一下。

## 在 Linux 中安装 Redis
```Shell
# 下载 Redis 源码
wget https://download.redis.io/releases/redis-6.0.9.tar.gz

# 解压 Redis 压缩包
tar xzf redis-6.0.9.tar.gz

# 进入 Redis 源码目录
cd redis-6.0.9

# 编译安装
make
```

现在已编译的二进制文件位于 src 目录中。使用以下命令运行 Redis：
```Shell
$ ./src/redis-server
```

要将 Redis 二进制文件安装到 /usr/local/bin 中，只需使用：
```Shell
make install
```

## 运行 Redis

编译后在 Redis 源代码目录的 src 文件夹中会有以下几个可执行文件：
| 可执行文件 | 说明 |
| ---  | --- |
| redis-server | Redis 服务器 |
| redis-cli | Redis 命令行客户端 |
| redis-benchmark | Redis 性能测试工具 |
| redis-check-aof | AOF 文件修复工具 |
| redis-check-dump | RDB 文件检查工具 |
| redis-sentinel | 哨兵模式工具 |

> 注意：通过编译源码安装的话，也会产生一个 redis.conf 的配置文件。

我们最常用是 redis-server 和 redis-cli。

最简单的，直接运行 redis-server 即可启动 Redis：
```Shell
redis-server
```
Redis 默认使用 6379 端口，我们也可以通过 --port 参数指定启动端口：
```Shell
redis-server --port 1234
```

如果需要在后端运行 Redis：
```
redis-server --daemonize yes
```
查看 Redis 运行状态：

```Shell
# 查看 Redis 后端运行进程
ps -ef | grep -i redis
```

## 停止 Redis

考虑到 Redis 有可能正在将内存中的数据同步到硬盘中，强行终止 Redis 进程可能会导致数据丢失。
所有正确停止 Redis 的方式应该是向 Redis 发送 SHUTDOWN  命令：

```Shell
redis-cli shutdown
```
当 Redis 手动 Shutdown 命令后，会先断开所有客户端连接，然后根据配置执行持久化，最后完成退出。

Redis 可以妥善处理 SIGTERM 信号，所有使用 kill Redis 进程的 PID 也可以正常结束 Redis，效果与发送 SHUTDOWN 命令一样。

```Shell
# 通过进程号停止 Redis
kill -9 4684
```

## 连接 Redis

redis-cli 是 Redis 自带的基于命令行的 Redis 客户端，也是我们学习和测试 Redis 的重要工具。

运行 redis-cli 即可连接数据库：
```Shell
redis-cli
```
也可以指定服务器地址和端口连接：
```Shell
redis-cli -h 127.0.0.1 -p 1234
```
不出差错的话，此时已经连接上 Redis 数据库，我们通过 Redis 提供的 PING 命令来测试与 Redis 是否连接正常：
```Shell
127.0.0.1:6379> PING
PONG
127.0.0.1:6379>
```
Redis 返回 PONG，证明连接正常。

如果想要断开连接：
- 命令：quit
- 快捷键：Ctrl + C