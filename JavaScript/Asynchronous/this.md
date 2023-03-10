# JS 中的 this

## 概念

JS 中的 this 是什么呢？

-   当前函数的执行主体（谁执行了这个函数），不等同于执行上下文，也不等同于作用域

举个例子：二狗子在教室讲课  
讲课是一个动作（函数）、教室是一个地点（执行上下文）、二狗子是主体（本次函数在当前执行上下文中的 this 指向）

## this 出现的场景

-   事件绑定
-   普通函数调用
-   构造函数
-   箭头函数（不具备 this)
-   基于 call/bind/apply 强制改变 this 的指向

## 判定 this 的规律

-   函数执行的时候需要查看函数的前端是否有 . 如果有，则点前面的对象就执行主体
-   方法调用模式下，this 总是指向调用它所在方法的对象，this 的指向与**所在方法的调用位置有关**，而与方法的声明位置无关（箭头函数特殊）；
-   setTimeout、匿名函数中的 this 是 window 或者 undefined
-   构造函数调用模式下，this 指向被构造的对象；
-   apply,call,bind 调用模式下，this 指向第一个参数；
-   箭头函数，在声明的时候绑定 this，而非取决于调用位置；
-   严格模式下，如果 this 没有被执行环境（execution context）定义，那 this 是 为 undefined；
-   小括号语法

## 实践一下

例子 1

```js
function a() {
    var user = "二狗子";
    console.log(this.user); //undefined
    console.log(this); //Window
}
a(); // 与所在方法的调用位置有关 this --> window
```

> 解析：上面的函数调用实际可以改写为 Window.a()。函数执行时，它内部的 this 指向调用它的主体对象。在本例中就是 Window。

例子 2

```js
const o = {
    user: "二狗子",
    fn: function () {
        console.log(this.user); //二狗子
    },
};
o.fn();
```

> 解析：这里的 this 指向的是对象 o，因为你调用这个 fn 是通过 o.fn()执行的，那自然指向就是对象 o  
> 注意：this 的指向在函数创建的时候是决定不了的，在调用的时候才能决定，谁调用的就指向谁。

例子 3

```js
var o = {
    a: 10,
    b: {
        a: 12,
        fn: function () {
            console.log(this.a); //12
        },
    },
};
o.b.fn();
```

> 解析：
>
> 1. 如果一个函数中有 this，但是它没有被上一级的对象所调用，那么 this 指向的就是 window，这里需要说明的是在 js 的严格版中 this 指向的不是 window
> 2. 如果一个函数中有 this，这个函数有被上一级的对象所调用，那么 this 指向的就是上一级的对象。
> 3. 如果一个函数中有 this，这个函数中包含多个对象，尽管这个函数是被最外层的对象所调用，this 指向的也只是它上一级的对象

要完全理解上面的 3 句话，可以看下面例子的执行结果。

例子 4

```js
var o = {
    a: 10,
    b: {
        // a:12,
        fn: function () {
            console.log(this.a); //undefined
        },
    },
};
o.b.fn();
```

> 解析：当我们注释掉 a:12 后，尽管对象 b 中没有属性 a，这个 this 指向的也是对象 b，
> 因为 this 只会指向它的上一级对象，不管这个对象中有没有 this 要的东西。

还有一种比较特殊的情况

例子 5

```js
const o = {
    a: 10,
    b: {
        a: 12,
        fn: function () {
            console.log(this.a); //undefined
            console.log(this); //window
        },
    },
};
var j = o.b.fn;
j();
```

这里 this 指向的是 window，是不是有些蒙了？

> 解析：this 永远指向的是最后调用它的对象，也就是看它执行的时候是谁调用的，本例子中虽然函数 fn 是被对象 b 所引用，
> 但是在将 fn 赋值给变量 j 的时候并没有执行所以最终指向的是 window，这和例子 4 是不一样的，例子 4 是直接执行了 fn。

## 构造函数版 this

```js
function Fn() {
    this.user = "二狗子";
}
var a = new Fn();
console.log(a.user); //二狗子
```

> 解析：这里之所以对象 a 可以点出函数 Fn 里面的 user 是因为 new 关键字可以改变 this 的指向，将这个 this 指向对象 a，为什么我说 a 是对象，因为用了 new 关键字就是创建一个对象实例，理解这句话可以想想我们的例子 3，我们这里用变量 a 创建了一个 Fn 的实例（相当于复制了一份 Fn 到对象 a 里面），此时仅仅只是创建，并没有执行，而调用这个函数 Fn 的是对象 a，那么 this 指向的自然是对象 a，那么为什么对象 a 中会有 user，因为你已经复制了一份 Fn 函数到对象 a 中，用了 new 关键字就等同于复制了一份。

## 构造函数版 this + return

```js
function Fn() {
    this.user = "二狗子";
    // return {}; // 有效
    // return function () {}; // 有效
    // return 1; // 无效
    // return undefined; // 无效
    return null; // 无效
}
var a = new Fn();
console.log(a.user); //二狗子
```

> 解析：如果返回值是一个对象，那么 this 指向的就是那个返回的对象，如果返回值不是一个对象那么 this 还是指向函数的实例。
> 有一点特殊的就是虽然 null 也是对象，但是在这里 this 还是指向那个函数的实例

## 补充知识点

-   在严格版中的默认的 this 不再是 window，而是 undefined。
-   new 操作符会改变函数 this 的指向问题，虽然我们上面讲解过了，但是并没有深入的讨论这个问题，网上也很少说，所以在这里有必要说一下。

```js
function Fn() {
    this.num = 1;
}
var a = new Fn();
console.log(a.num); //1
```

> 解析：为什么 this 会指向 a？首先 new 关键字会创建一个空的对象，然后会自动调用一个函数 apply 方法，将 this 指向这个空对象，这样的话函数内部的 this 就会被这个空的对象替代。
> 注意: 当你 new 一个空对象的时候,js 内部的实现并不一定是用的 apply 方法来改变 this 指向的,这里我只是打个比方而已。
