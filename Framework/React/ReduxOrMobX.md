# redux 还是 mobx？

## **redux的缺点：**

1）繁重的代码模板：修改一个state可能要动四五个文件，可谓牵一发而动全身；

2）store里状态残留：多组件共用store里某个状态时要注意初始化清空问题；

3）无脑的发布订阅：每次dispatch一个action都会遍历所有的reducer，重新计算connect，这无疑是一种损耗；

4）交互频繁时会有卡顿：如果store较大时，且频繁地修改store，会明显看到页面卡顿；

5）不支持typescript；

关于如何优化，网上有很多优秀的案例，redux官方也提供了很多方法，这里不再赘述。redux未来不会有太大的变化，那些弊端还是会继续保留，但是这依然不会妨碍忠爱它的用户去使用它。

如果说redux那种强硬的函数式编程模式让很多人难以接受，那么当他们开始mobx的使用的时候，无疑是一种解脱。

最开始接触mobx也是因为redux作者DanAbramov的那句：Unhappywith redux？try mobx，我相信很多人也是因为这句话而开始了解学习并使用它的。


下面列举一些**mobx的优势**（和redux进行一个对比）

1）redux不允许直接修改state，而mobx可随意修改；

2）redux修改状态必须走一套指定的流程较麻烦，而mobx可以在任何地方直接修改（非严格模式下）；

3）redux模板代码文件多，而mobx非常简洁，就一个文件；

4）redux只有一个store，state orstore难以取舍，而mobx多store，你可以把所有的state都放入store中，完全交给mobx来管理，减少顾虑；

5）redux需要对监听的组件做SCU优化，减少重复render；而mobx都是SmartComponent，不用我们手动做SCU；

****

## **mobx的设计思想：**

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/601b5bdf491d45abb3f830a4d0e5f696~tplv-k3u1fbpfcp-zoom-1.image)

说了这么多，如果你是第一次了解mobx，是不是听着就感觉很爽！没错，这就是mobx的魅力，那它是如何实现这些功能的呢？

这里以mobx 5版本为例，实际上它是利用了ES6的proxy来追踪属性（旧版本是用Object.defineProperty来实现的）通过隐式订阅，自动追踪被监听的对象变化，然后触发组件的UI更新。

如果说redux是把要做的事情都交给了用户，来保证自己的纯净，那么mobx就是把最简易的操作给了用户，其它的交给mobx内部去实现。用户不必关心这个过程，Model和View完全分离，我们完全可以将业务逻辑写在action里，用户只需要操作Observabledata就行了。

Observerview会自动做出响应，这就是mobx主打的响应式设计，但是编程风格依然是传统的面向对象的OO范式。（熟悉Vue的朋友一定对这种响应式设计不陌生，Vue就是利用了数据劫持来实现双向绑定，其实React +Mobx就是一个复杂点的Vue，Vue 3版本一个重大改变也是将代理交给了proxy）

刚刚mobx的优势说得比较多了，这边再总结一下：

1）代码量少；

2）基于数据劫持来实现精准定位（真正意义上的局部更新）；

3）多store抽离业务逻辑（Model View分离）；

4）响应式性能良好（频繁的交互依然可以胜任）；

5）完全可以替代react自身的状态管理；

6）支持typescript；

但是mobx真的这么完美吗，当然也有**缺陷**：

1）没有状态回溯能力：mobx是直接修改对象引用，所以很难去做状态回溯；（这点redux的优势就瞬间体现出来了）

2）没有中间件：和redux一样，mobx也没有很好地办法处理异步数据流，没办法更精细地去控制数据流动；（redux虽然自己不做，但是它提供了applyMiddleware！）

3）store太多：随着store数的增多，维护成本也会增加，而且多store之间的数据共享以及相互引用也会容易出错

4）副作用：mobx直接修改数据，和函数式编程模式强调的纯函数相反，这也导致了数据的很多未知性

其实现在主流的数据流管理分为两大派，一类是以redux为首的函数式库，还有一类是以mobx为首的响应式库，其实通过刚刚的介绍，我们会发现，redux和mobx有一个共同的短板，那就是在处理异步数据流的时候，没有一个很好的解决方案，至少仅仅依靠自身比较吃力，那么接下来给大家介绍一个处理异步数据流的高手：rxjs。

