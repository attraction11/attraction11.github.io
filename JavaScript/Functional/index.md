# 函数式编程范式

## 函数式编程的流行

1. 前端框架在使用函数式编程,随着 React 的流行受到越来越多的关注，Vue3 也开始拥抱函数式编程。
2. 改变编程方式，函数式编程可以抛弃 this。
3. 优化打包、测试、打包的过程、更好的利用 tree shaking 过滤无用代码、方便测试、方便并行处理。
4. 方便使用第三方库，有很多库可以帮助我们进行函数式开发：lodash、underscore、ramda

## 函数式编程概念

#### 常见的编程范式及区别

-   面向过程编程（`Process-oriented programming, POP`）：按照步骤来一步步实现想要的功能。
-   面向对象编程（`Object-oriented programming, OOP`）：把现实世界中的事物抽象成程序世界中的类和对象，通过封装、继承、多态来演示事物之间的联系。
-   函数式编程（`Function Programming, FP`）：把现实世界中的事物和事物之间的联系抽象到程序世界中（对运算过程的抽象）。

#### 函数式编程示例

-   程序的本质：根据输入通过某种运算获得相应的输出的函数

```js
// 非函数式
let a = 1;
let b = 2;
let sum = a + b;
// 函数式
function add(a, b) {
    return a + b;
}
let sum = add(a, b);
```

#### 函数式编程的优势

-   封装的函数可以重复利用，减少代码量
-   函数式编程抽象出的函数大多是细粒度的函数，这些函数可以进行组合出功能强大的函数

## 函数式编程的应用

#### 如何理解函数是一等公民?

-   函数可以存储在变量中
-   函数可以作为参数
-   函数可以作为返回值
    > 在 JS 中函数就是一个普通的对象

```js
// 把函数赋值给变量
var fn = function () {
    console.log('hello First-class Function');
};
fn();
```

#### 什么是高阶函数?

-   把函数作为参数传递给另一个函数（使函数变得更加灵活）

```js
let arr = [1, 3, 4, 7, 8];
// 简单模拟forEach
function forEach(array, fn) {
    for (let i = 0; i < array.length; i++) {
        fn(array[i]);
    }
}
// 测试forEach
forEach(arr, function (item) {
    console.log(item);
});
```

-   把函数作为另一个函数的返回结果

```js
// 场景：当用户在进行订单支付的时候，要求函数只执行一次
function once(fn) {
    let done = false; // 标记传入的函数是否被执行过
    return function () {
        // 函数作为返回值
        if (!done) {
            done = true;
            return fn.apply(this, arguments); // arguments指return的匿名函数的传参
        }
    };
}

let pay = once(function (money) {
    console.log(`支付：${money} RMB`);
});

pay(5);
pay(5);
pay(5);
```

#### 高阶函数使用的意义

-   高阶函数帮我们抽象一些通用的问题，屏蔽了细节，我们只需关注目标。

```js
// 面向过程的方式
let array = [1, 2, 3, 4];
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}
// 高阶高阶函数
let array = [1, 2, 3, 4];
forEach(array, (item) => {
    // 使用抽象的函数屏蔽细节实现，只关注目标
    console.log(item);
});
```

#### 常用的高阶函数

-   forEach、map、filter、every、some、find/findIndex、reduce、sort ...
