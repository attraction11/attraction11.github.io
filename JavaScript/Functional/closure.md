# 闭包介绍

## 简要定义

-   由函数以及声明该函数的词法环境组合而成的。

## 核心原理

-   将所需的数据，构成 Closure 对象储存在堆（Heap）上，然后函数引用这个对象，不会随着函数调用结束而被回收。

## 示例

```js
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
```

> 解析：当 once()被执行后，它会从执行栈上移除，但 once 函数中定义的 done 变量正被 pay 函数中引用，因此不能释放堆中 done 的内存。

## 优点

-   Closure 对象是私有的，不影响全局，可以用作私有变量。

> 开发者通常使用下划线作为私有变量的前缀, js 没有私有变量的概念。我们可以用闭包来模拟私有变量。

```js
// 需求：实现一个计数器，不依赖于外部变量。每次执行打印一个加1的数字
function count() {
    let num = 0;
    function add() {
        num++;
        return num;
    }
    function reset() {
        num = 0;
        return num;
    }
    return {
        add,
        reset,
    };
}

let { add, reset } = count();

console.log(add());
console.log(add());
console.log(reset());
console.log(add());
console.log(add());
```

-   可以外部读取局部变量
-   让变量的值始终保持在内存中

## 缺点

-   处理速度和内存消耗方面对脚本的性能有负面的影响
-   由于数据被 Closure 对象引用，无法被释放回收，也容易出现内存泄漏的问题

## 用途

-   解决命名空间污染问题（立即执行函数 + 闭包）
    > 闭包就是能够读取其他函数内部变量的函数，局部变量无法共享和长久的保存，而全局变量可能造成变量污染，造成数据的不安全。
    > 因此我们希望有一种机制，既可以长久的保存变量，又不会造成全局污染保证数据的安全。

```js
let count = 0; // 全局会造成污染
function demo() {
    count++;
    console.log(count);
}
demo();
demo();

let demo1 = (() => {
    // 闭包确实可以解决污染的问题
    let count = 3;
    return () => {
        count++;
        console.log(count);
    };
})();
demo1();
```

-   模拟类的私有属性或方法、

```js
// 基于functin 形式模拟
var Person = function (name) {
    var _name = name;
    this.getName = function () {
        return _name;
    };
    this.setName = function (str) {
        _name = str;
    };
};
var person = new Person('hugh');

person.name; // undefined, name是Person函数内的变量,外部无法直接访问
person.getName(); // 'hugh'
person.setName('test');
// 存在问题：需要为每个变量定义getter和setter，当你定义了getter，外部也可以通过这个getter来获取私有变量。
```

> 我们知道，要实现私有属性，只要外部无法知道这个属性名，只有内部知道属性名，
> 就可以做到外部无法访问的特性，基于 ES6 的新语法 symbol 和 weakMap，我们可以去实现这个能力。

```js
// 基于symbol 形式模拟
var Person = (function () {
    const _name = Symbol('name');
    class Person {
        constructor(name) {
            this[_name] = name;
        }
        get name() {
            return this[_name];
        }
    }
    return Person;
})();

let person = new Person('hugh');
person.name; // hugh
```

```js
// 基于WeakMap
var Person = (function () {
    const _name = new WeakMap();
    class Person {
        constructor(name) {
            _name.set(this, name);
        }
        get name() {
            return _name.get(this);
        }
    }
    return Person;
})();

let person = new Person('hugh');
person.name; // hugh
```

-   模拟的块级作用域

```js
for (var i = 0; i < 5; i++) {
    (function (j) {
        setTimeout(() => {
            console.log(j);
        }, j * 1000);
    })(i);
}
```

-   高阶函数
-   函数柯里化
-   节流防抖
-   有状态的函数

## 内存泄漏

-   在退出函数前，将不使用的局部变量赋值为 null

```js
//  这段代码会导致内存泄露
window.onload = function () {
    var el = document.getElementById('id');
    el.onclick = function () {
        alert(el.id);
    };
};
// 解决方法为
window.onload = function () {
    var el = document.getElementById('id');
    var id = el.id; //解除循环引用
    el.onclick = function () {
        alert(id);
    };
    el = null; // 将闭包引用的外部函数中活动对象清除
};
```

-   将闭包函数赋值为 null，解除引用关系

```js
function foo() {
    var name = 'foo';
    function bar() {
        console.log(name);
    }
    return bar;
}

var fn = foo();
fn();
fn = null;
```
