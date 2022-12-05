# 纯函数

## 概念

-   相同的输入永远会得到相同的输出
-   没有任何可观察的副作用

> 纯函数就类似数学中的函数（用来描述输入和输出之间的关系），y = f(x)

## 纯函数与不纯函数

```js
let numbers = [1, 2, 3, 4, 5];
// 纯函数
numbers.slice(0, 3); // => [1, 2, 3]
numbers.slice(0, 3); // => [1, 2, 3]
numbers.slice(0, 3); // => [1, 2, 3]

// 不纯的函数（不满足相同的输入永远会得到相同的输出）
numbers.splice(0, 3); // => [1, 2, 3]
numbers.splice(0, 3); // => [4, 5]
numbers.splice(0, 3); // => []
```

## 纯函数的应用过程

```js
// 自定义纯函数
function sum(n1, n2) {
    return n1 + n2;
}
console.log(sum(1 + 2)); // 3
console.log(sum(1 + 2)); // 3
console.log(sum(1 + 2)); // 3
```

-   现象：函数式编程不会保留计算中间的结果，所以变量是不可变（无状态的）
-   结论：因此我们可以把一个函数的执行结果交给另一个函数去处理。

## 纯函数的好处

-   可缓存

```js
function getArea(r) {
    console.log(r);
    return Math.PI * r * r;
}

// 模拟一个 memoize 函数（场景：缓存圆面积）
function memoize(f) {
    let cache = {};
    return function () {
        let key = JSON.stringify(arguments);
        cache[key] = cache[key] || f.apply(f, arguments);
        return cache[key];
    };
}

let getAreaWithMemory = memoize(getArea);
console.log(getAreaWithMemory(4));
console.log(getAreaWithMemory(4));
```

> 解析：因为纯函数对相同的输入始终有相同的结果。
> 对一些运算耗时和复杂的纯函数，可以缓存结果,提升性能。（空间换时间）

-   可测试：因为纯函数始终有输入和输出，而单元测试就是在断言函数执行的结果
-   并行处理
    -   场景：在多线程环境下同时去操作共享内存数据（比如全局变量）的时候，可能会发生意外的情况，不确定最终的结果。
    -   思路：纯函数是一个封闭的空间，纯函数不需要访问共享的数据，只依赖于传入的参数，因此在并行环境下可以任意运行纯函数。
    -   方案：虽然 JavaScript 是单线程执行的，但是 ES6 新增了一个对象 Web Worker。因此在 ES6 之后，我们可以开启多线程执行以提升性能（不常用）
-   副作用
    -   纯函数：相同的输入永远会得到相同的输出，而且**没有任何可观察的副作用**
    -   示例（加深理解）

```js
// 不纯的
let mini = 18;
// 函数checkAge的返回结果，受全局变量mini的影响（所谓的副作用）
function checkAge(age) {
    return age >= mini;
}

// 纯的(有硬编码，后续可以通过柯里化解决)
function checkAge(age) {
    let mini = 18;
    return age >= mini;
}
```

> 解析：副作用让一个函数变得不纯（如上例），纯函数是根据相同的输入返回相同的输出，如果函数依赖于外部的状态就无法保证输出相同，就会带来副作用。

## 副作用的来源

-   配置文件
-   数据库
-   获取的用户输入

## 副作用的危害

-   所有外部交互都可能产生副作用，副作用会使方法的通用性下降、不适合扩展、重用性下降
-   副作用还会给程序到来一定的安全隐患（如外部交互用户的输入可能存在跨站脚本攻击）
-   副作用不可能完全禁止，但应尽可能控制它们在可控的范围中发生
