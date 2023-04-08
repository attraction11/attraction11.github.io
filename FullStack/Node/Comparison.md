# Node.js框架对比

## 参考：  
https://tangly1024.com/article/nodejs-framework-compare#7a8488df782b4eef9d28aea4cc784fbc

## 1. Express.js
Express.js 是 Node.JS 诞生之初，最早出现的一款框架，现在仍然很流行，作者是TJ。

Express是基于回调，也是node中最常见的Error-First的模式（第一个参数是error对象）

一个简单的Express服务器
```js
const express = require('express');
const app = express();

/* 中间件 */
app.use((req, res, next) => {
    console.log('middleware');
    next();
    console.log('middleware call');
});

/* 路由部分 */
const router = express.Router();
router.get('/', (req, res) => {
    res.send('Home');
});

app.use(router);

/* 静态文件 */
app.use(express.static('./'));

app.listen(3000);
```

随着ECMAScript的发展，推出了generator yield 语法，JS向同步方式写异步代码迈出了一步，作为回应，TJ大神推出了Koa.js。
## 2. Koa.js
Koa 是一个新的 web 框架，由 Express 幕后的原班人马打造， 致力于成为 web 应用和 API 开发领域中的一个更小、更富有表现力、更健壮的基石。 通过利用 async 函数，Koa 帮你丢弃回调函数，并有力地增强错误处理。 Koa 并没有捆绑任何中间件， 而是提供了一套优雅的方法，帮助您快速而愉快地编写服务端应用程序。

不同于Express，Koa是使用的号称异步终极解决方案的Async/Await，也就是基于Promise，使用Try-Catch来捕获错误。koa与express 提供的API大致相同，express是大而全，内置了大多数的中间件，更让人省心，koa2不绑定任何的框架，干净简洁，小而精，更容易实现定制化，扩展性好。

Koa.js是一款微型Web框架，写一个hello world很简单，但web应用离不开session，视图模板，路由，文件上传，日志管理。这些 Koa 都不提供，需要自行去官方的 Middleware 寻找。然而，100个人可能找出100种搭配。

一个简单的Koa服务器
```js
const Koa = require('koa');
const Router = require('koa-router');
const serve = require('koa-static');

const app = new Koa();
const router = Router();

/* 中间件 */
app.use(async (ctx, next) => {
    console.log('middleware');
    next();
    console.log('middleware call');
});

/* 路由部分 */
router.get('/', (ctx) => {
    ctx.body = 'Home';
});
app.use(router.routes());

/* 静态文件 */
app.use(serve('./'));

app.listen(3000);
```
#### Koa 对比 Koa2
koa2与koa1的最大区别是koa2实现异步是通过async/await，使用await next()进入下一个中间件；koa1实现异步是通过使用generator函数，yield next进入下一个中间件，而express实现异步是通过回调函数的方式。
## 3. EGG.js
Egg.js是基于Koa.js，解决了上述问题，将社区最佳实践整合进了Koa.js，另取名叫Egg.js，并且将多进程启动，开发时的热更新等问题一并解决了。这对开发者很友好，开箱即用，开箱即是最(较)佳配置。

Egg.js 是一个约定大于配置的框架

> Egg 奉行『约定优于配置』，按照一套统一的约定进行应用开发，团队内部采用这种方式可以减少开发人员的学习成本，开发人员不再是『钉子』，可以流动起来。

正因为如此，Egg.js 中对于目录的规范是有一个约束的，一个基础的 Egg.js 项目的目录结构如下：
```
egg-project
├── package.json
├── app.js (可选)
├── agent.js (可选)
├── app
|   ├── router.js
│   ├── controller
│   |   └── home.js
│   ├── service (可选)
│   |   └── user.js
│   ├── middleware (可选)
│   |   └── response_time.js
│   ├── schedule (可选)
│   |   └── my_task.js
│   ├── public (可选)
│   |   └── reset.css
│   ├── view (可选)
│   |   └── home.tpl
│   └── extend (可选)
│       ├── helper.js (可选)
│       ├── request.js (可选)
│       ├── response.js (可选)
│       ├── context.js (可选)
│       ├── application.js (可选)
│       └── agent.js (可选)
├── config
|   ├── plugin.js
|   ├── config.default.js
│   ├── config.prod.js
|   ├── config.test.js (可选)
|   ├── config.local.js (可选)
|   └── config.unittest.js (可选)
└── test
    ├── middleware
    |   └── response_time.test.js
    └── controller
        └── home.test.js
```
#### egg缺点：
- 单实例多进程模式，架构异常复杂，为了提升一点点性能，所增加的复杂度完全不可接受。如今serverless的时代，为了性能容器化部署，多实例才是主流。
- 开发体验，egg调试体验不太好，打个断点也很困难，调试需要依赖console打印。
- 插件机制，万物挂ctx，且不带类型提示（靠别人自觉写d.ts）。插件机制异常黑盒，只能靠配置文件。
- 约定大于配置，处处是约定，想整理目录比较困难。如果你更喜欢代码组织以模块为单位，可能会有些不适应。
- 生态维护力度很低，完善度也很低，很多插件使用方式很不优雅，不成体系，几乎是在hack。
- Egg.js没有原生提供的TypeScript支持， 开发时需要用egg-ts-helper 来帮助自动生成 d.ts 文件

可以尝试一下Nestjs，了解一下ioc，你会发现很多以前组织不好的东西都可以用ioc搞定，这是一套开发逻辑异常统一的工具，理解它会打开新世界的大门。从此就对egg这类不成体系的web框架再无好感，甚至你还顺便理解了Angular的组织方式，去学习使用ng会有豁然开朗的感觉。
## 4. Nest.js
Nestjs 是一个将 Typescript 与 Nodejs Framework 结合的产物。
 
Nestjs 不是一个新轮子，它是基于 Express、socket.io 封装的 nodejs 后端开发框架，对 Typescript 开发者提供类型支持，也能优雅降级供 Js 使用，拥有诸多特性。Nest是基于Express实现的，需要的话可以取到底层的对象，如request和response。

初看 NestJS ，对于 Vue 和 React 技术栈的人来说，NestJS 的思维方式确实不那么容易理解。但是假如你接触过 AngularJS，也许会有一些熟悉感。那要是你曾经是一个后端开发人员，熟练使用 Java 和 Spring 的话，可能就会跳起来大喊一声：这不就是个 Spring boot 吗！

你的直觉没错，NestJS 和 AngularJS，Spring 类似，都是基于控制反转（IoC = Inversion of Control）原则来设计的框架，并且都使用了依赖注入（DI = Dependency Injection）的方式来解决耦合的问题。
#### Modules, Controllers, Components
Nestjs 开发围绕着这三个单词，Modules 是最大粒度的拆分，表示应用或者模块。Controllers 是传统意义的控制器，一个 Module 拥有多个 Controller。Components 一般用于做 Services，比如将数据库 CRUD 封装在 Services 中，每个 Service 就是一个 Component。

#### 装饰器路由
装饰器路由是个好东西，路由直接标志在函数头上，做到了路由去中心化: 
```js 
@Controller()
export class UsersController {
    @Get('users')
    getAllUsers() {}

    @Get('users/:id')
    getUser() {}

    @Post('users')
    addUser() {}
}
```

装饰器的用法，几乎和java的Spring注解一模一样。以前用过 Go 语言框架 Beego，就是采用了中心化路由管理方式，虽然引入了 namespace 概念，但当协作者多、模块体量巨大时，路由管理成本直线上升。

Nestjs 类似 namespace 的概念通过装饰器实现：
```js
@Controller('users')
export class UsersController {
    @Get()
    getAllUsers(req: Request, res: Response, next: NextFunction) {}
}
```

访问 /users 时会进入 getAllUsers 函数。可以看到其 namespace 也是去中心化的。
#### 模块间依赖注入
Modules, Controllers, Components 之间通过依赖注入相互关联，它们通过同名的 @Module @Controller @Component 装饰器申明，如：
```js
@Controller()
export class UsersController {
    @Get('users')
    getAllUsers() {}
}
@Component()
export class UsersService {
    getAllUsers() {
        return []
    }
}
@Module({
    controllers: [ UsersController ],
    components: [ UsersService ],
})
export class ApplicationModule {}
```

在 ApplicationModule 申明其内部 Controllers 与 Components 后，就可以在 Controllers 中注入 Components 了：
```js
@Controller()
export class UsersController {
	constructor(private usersService: UsersService) {}

    @Get('users')
    getAllUsers() {
    	return this.usersService.getAllUsers()
    }
}
```

#### 装饰器参数
与大部分框架从 this.req 或 this.context 等取请求参数不同，Nestjs 通过装饰器获取请求参数：

```js
@Get('/:id')
public async getUser(
	@Response() res,
	@Param('id') id,
) {
    const user = await this.usersService.getUser(id);
    res.status(HttpStatus.OK).json(user);
}
```
@Response 获取 res，@Param 获取路由参数，@Query 获取 url query 参数，@Body 获取 Http body 参数。
 
## 6. Midway
Midway 是阿里巴巴 - 淘宝前端架构团队，基于渐进式理念研发的 Node.js 框架。

Midway 基于 TypeScript 开发，结合了面向对象（OOP + Class + IoC）与函数式（FP + Function + Hooks）两种编程范式，并在此之上支持了 Web / 全栈 / 微服务 / RPC / Socket / Serverless 等多种场景，致力于为用户提供简单、易用、可靠的 Node.js 服务端研发体验

#### 为什么要有 Midway
社区上也有很多类似的框架，那为什么还需要 Midway ？

原因有三点
1. Midway 是阿里内部一直持续在研发的框架，之前 egg 是作为底层框架，需要有面向应用层面的框架来和集团场景对接
2. 全量使用 TypeScript 是未来一段时间的趋势，面向未来去迭代和研发是作为架构组创新的要求
3. 虽然社区已经有 nest 这样的框架，但是这些产品的维护、协作、修改都会受到商业化产品的制约，也无法做到需求的快速迭代和安全性保障，整体的研发理念也和我们不同，为此，我们需要有一套自研的框架体系

#### 优势
1. Midway 框架是在内部已经使用 5 年以上的 Node.js 框架，有着长期投入和持续维护的团队做后盾。
2. 已经在每年的大促场景经过考验，稳定性无须担心
3. 丰富的组件和扩展能力，例如数据库，缓存，定时任务，进程模型，部署以及 Web，Socket 甚至 Serverless 等新场景的支持
4. 一体化调用方案可以方便快捷和前端页面协同开发
5. 良好的 TypeScript 定义支持
6. 国产化文档和沟通容易简单
 
#### 面向对象（OOP + Class + IoC）
Midway 支持面向对象的编程范式，为应用提供更优雅的架构。
下面是基于面向对象，开发路由的示例。
```js
// src/controller/home.ts
import { Controller, Get } from '@midwayjs/decorator';
import { Context } from '@midwayjs/koa';
@Controller('/')
export class HomeController {

  @Inject()  ctx: Context

  @Get('/')  async home() {
    return {
      message: 'Hello Midwayjs!',
      query: this.ctx.ip
    }
	}
}
```

#### 函数式（FP + Function + Hooks）
Midway 也支持函数式的编程范式，为应用提供更高的研发效率。
下面是基于函数式，开发路由接口的示例。
```js
// src/api/index.ts

import { useContext } from '@midwayjs/hooks'
import { Context } from '@midwayjs/koa';

export default async function home () {
  const ctx = useContext<Context>()

  return {
    message: 'Hello Midwayjs!',
    query: ctx.ip
  }
}
``` 
 
## NodeJS后端与Java后端对比
NodeJS用于后端开发，对比传统的Java服务端开发有哪些异同。
#### 优势与劣势
- 优势：占用内存小，启动迅速，不用处理多线程问题，非阻塞高并发，少了Setter Getter和Java各种List/ArrayList/HashMap等...代码编写更简易。
- 劣势：运行时类型的检查，严谨的类型判断，TypeScript对反射与Decorator功能的支持不足导致框架无法更完善的封装高级功能。
#### 性能 
动态语言原来无法和静态语言比性能。 但是nodejs出现 直接把动态语言的性能提升了好几个数量级。V8就是快， 结合跑多个nodejs进程 竟然性能非常好。PHP现在也追了上来，比以前PHP强的多，虽然比nodejs还是差点。
 
## 总结
NodeJS后端已经有很好生态，各类工程化与微服务需要功能都有了npm版本，内部数据通过TypeScript验证保证类型无误，只要处理好输入数据的验证和转换问题，是可以在实际项目中发挥力量的。

如果您必须选择一种服务器端技术（Node.js或Spring Boot）来为未来十年的业务提供动力，那会是什么？

人们会说这取决于。如果要构建依赖于大量I / O的应用程序（FinTech，预订系统，媒体应用程序等），则将使用Node.js；但是，如果需要执行大量的计算（物联网，电子商务平台，大数据），那么会使用Spring Boot。

如果赢家只有一个怎么选？Node.js。