# JS 核心原理

## 参考

https://kaiwu.lagou.com/course/courseInfo.htm?courseId=601#/content

## JavaScript 的数据类型

有下图所示的 8 种
![image.png](./image/1.png)

其中，前 7 种类型为基础类型，最后 1 种（Object）为引用类型，也是你需要重点关注的，因为它在日常工作中是使用得最频繁，也是需要关注最多技术细节的数据类型。

而引用数据类型（Object）又分为图上这几种常见的类型：

-   Array - 数组对象、
-   RegExp - 正则对象、
-   Date - 日期对象、
-   Math - 数学函数、
-   Function - 函数对象。

在这里，我想先请你重点了解下面两点，因为各种 JavaScript 的数据类型最后都会在初始化之后放在不同的内存中，因此上面的数据类型大致可以分成两类来进行存储：

-   基础类型存储在栈内存，被引用或拷贝时，会创建一个完全相等的变量；
-   引用类型存储在堆内存，存储的是地址，多个引用指向同一个地址，这里会涉及一个“共享”的概念。

#### 小试牛刀

```js
let a = {
    name: 'Julia',
    age: 20,
};

function change(o) {
    o.age = 24;
    o = {
        name: 'Kath',
        age: 30,
    };
    return o;
}

let b = change(a); // 注意这里没有new，后面new相关会有专门文章讲解
console.log(b.age); // 第一个console
console.log(a.age); // 第二个console
```

解析：函数传参进来的 o，传递的是对象在堆中的内存地址值，通过调用 o.age = 24（第 7 行代码）确实改变了 a 对象的 age 属性；12 行把参数 o 的地址重新返回了，将 {name: "Kath", age: 30} 存入其中，最后返回 b 的值就变成了 {name: "Kath", age: 30}。而如果把第 12 行去掉，那么 b 就会返回 undefined。

## 数据类型检测

数据类型的判断方法其实有很多种，比如 typeof 和 instanceof，下面我来重点介绍三种在工作中经常会遇到的数据类型检测方法。

1. 第一种判断方法：typeof
   这是比较常用的一种，那么我们通过一段代码来快速回顾一下这个方法。

```js
typeof 1; // 'number'
typeof '1'; // 'string'
typeof undefined; // 'undefined'
typeof true; // 'boolean'
typeof Symbol(); // 'symbol'
typeof null; // 'object'
typeof []; // 'object'
typeof {}; // 'object'
typeof console; // 'object'
typeof console.log; // 'function'
```

你可以看到，前 6 个都是基础数据类型，而为什么第 6 个 null 的 typeof 是 'object' 呢？这里要和你强调一下，虽然 typeof null 会输出 object，但这只是 JS 存在的一个悠久 Bug，不代表 null 就是引用数据类型，并且 null 本身也不是对象。因此，null 在 typeof 之后返回的是有问题的结果，不能作为判断 null 的方法。如果你需要在 if 语句中判断是否为 null，直接通过 ‘===null’来判断就好。

此外还要注意，引用数据类型 Object，用 typeof 来判断的话，除了 function 会判断为 OK 以外，其余都是 'object'，是无法判断出来的。

2. 第二种判断方法：instanceof
   想必 instanceof 的方法你也听说过，我们 new 一个对象，那么这个新对象就是它原型链继承上面的对象了，通过 instanceof 我们能判断这个对象是否是之前那个构造函数生成的对象，这样就基本可以判断出这个新对象的数据类型。下面通过代码来了解一下。

```js
let Car = function () {};

let benz = new Car();
benz instanceof Car; // true

let car = new String('Mercedes Benz');
car instanceof String; // true

let str = 'Covid-19';
str instanceof String; // false
```

上面就是用 instanceof 方法判断数据类型的大致流程，那么如果让你自己实现一个 instanceof 的底层实现，应该怎么写呢？请看下面的代码。

```js
function myInstanceof(left, right) {
    // 这里先用typeof来判断基础数据类型，如果是，直接返回false
    if (typeof left !== 'object' || left === null) return false;

    // getProtypeOf是Object对象自带的API，能够拿到参数的原型对象
    let proto = Object.getPrototypeOf(left);

    while (true) {
        //循环往下寻找，直到找到相同的原型对象
        if (proto === null) return false;
        if (proto === right.prototype) return true; //找到相同原型对象，返回true
        proto = Object.getPrototypeof(proto);
    }
}

// 验证一下自己实现的myInstanceof是否OK
console.log(myInstanceof(new Number(123), Number)); // true
console.log(myInstanceof(123, Number)); // false
```

现在你知道了两种判断数据类型的方法，那么它们之间有什么差异呢？我总结了下面两点：

-   instanceof 可以准确地判断复杂引用数据类型，但是不能正确判断基础数据类型；
-   而 typeof 也存在弊端，它虽然可以判断基础数据类型（null 除外），但是引用数据类型中，除了 function 类型以外，其他的也无法判断。

总之，不管单独用 typeof 还是 instanceof，都不能满足所有场景的需求 3. 第三种判断方法：Object.prototype.toString
toString() 是 Object 的原型方法，调用该方法，可以统一返回格式为 “[object Xxx]” 的字符串，其中 Xxx 就是对象的类型。对于 Object 对象，直接调用 toString() 就能返回 [object Object]；而对于其他对象，则需要通过 call 来调用，才能返回正确的类型信息。我们来看一下代码。

```js
Object.prototype.toString({}); // "[object Object]"
Object.prototype.toString.call({}); // 同上结果，加上call也ok
Object.prototype.toString.call(1); // "[object Number]"
Object.prototype.toString.call('1'); // "[object String]"
Object.prototype.toString.call(true); // "[object Boolean]"
Object.prototype.toString.call(function () {}); // "[object Function]"
Object.prototype.toString.call(null); //"[object Null]"
Object.prototype.toString.call(undefined); //"[object Undefined]"
Object.prototype.toString.call(/123/g); //"[object RegExp]"
Object.prototype.toString.call(new Date()); //"[object Date]"
Object.prototype.toString.call([]); //"[object Array]"
Object.prototype.toString.call(document); //"[object HTMLDocument]"
Object.prototype.toString.call(window); //"[object Window]"
```

从上面这段代码可以看出，Object.prototype.toString.call() 可以很好地判断引用类型，甚至可以把 document 和 window 都区分开来。

但是在写判断条件的时候一定要注意，使用这个方法最后返回统一字符串格式为 "[object Xxx]" ，而这里字符串里面的 "Xxx" ，第一个首字母要大写（注意：使用 typeof 返回的是小写），这里需要多加留意。

那么下面来实现一个全局通用的数据类型判断方法，来加深你的理解，代码如下。

```js
function getType(obj) {
    let type = typeof obj;
    if (type !== 'object') {
        // 先进行typeof判断，如果是基础数据类型，直接返回
        return type;
    }
    // 对于typeof返回结果是object的，再进行如下的判断，正则返回结果
    return Object.prototype.toString
        .call(obj)
        .replace(/^\[object (\S+)\]$/, '$1'); // 注意正则中间有个空格
}

/* 代码验证，需要注意大小写，哪些是typeof判断，哪些是toString判断？思考下 */
getType([]); // "Array" typeof []是object，因此toString返回
getType('123'); // "string" typeof 直接返回
getType(window); // "Window" toString返回
getType(null); // "Null"首字母大写，typeof null是object，需toString来判断
getType(undefined); // "undefined" typeof 直接返回
getType(); // "undefined" typeof 直接返回
getType(function () {}); // "function" typeof能判断，因此首字母小写
getType(/123/g); //"RegExp" toString返回
```

## 数据类型的转换

经常会遇到 JavaScript 数据类型转换问题，有的时候需要我们主动进行强制转换，而有的时候 JavaScript 会进行隐式转换，隐式转换的时候就需要我们多加留心。

那么这部分都会涉及哪些内容呢？我们先看一段代码，了解下大致的情况。

```js
'123' == 123   // false or true?
'' == null    // false or true?
'' == 0        // false or true?
[] == 0        // false or true?
[] == ''       // false or true?
[] == ![]      // false or true?
null == undefined //  false or true?
Number(null)     // 返回什么？
Number('')      // 返回什么？
parseInt('');    // 返回什么？
{}+10           // 返回什么？

let obj = {
    [Symbol.toPrimitive]() {

       return 200;
    },
    valueOf() {
        return 300;
    },
    toString() {
        return 'Hello';
    }
}
console.log(obj + 200); // 这里打印出来是多少？
```

上面这 12 个问题相信你并不陌生，基本涵盖了我们平常容易疏漏的一些情况，这就是在做数据类型转换时经常会遇到的强制转换和隐式转换的方式

## 强制类型转换

强制类型转换方式包括 Number()、parseInt()、parseFloat()、toString()、String()、Boolean()，这几种方法都比较类似，通过字面意思可以很容易理解，都是通过自身的方法来进行数据类型的强制转换。

下面挑两个比较有代表性的方法进行讲解。

#### Number() 方法的强制转换规则

-   如果是布尔值，true 和 false 分别被转换为 1 和 0；
-   如果是数字，返回自身；
-   如果是 null，返回 0；
-   如果是 undefined，返回 NaN；
-   如果是字符串，遵循以下规则：如果字符串中只包含数字（或者是 0X / 0x 开头的十六进制数字字符串，允许包含正负号），则将其转换为十进制；如果字符串中包含有效的浮点格式，将其转换为浮点数值；如果是空字符串，将其转换为 0；如果不是以上格式的字符串，均返回 NaN；
-   如果是 Symbol，抛出错误；
-   如果是对象，并且部署了 [Symbol.toPrimitive] ，那么调用此方法，否则调用对象的 valueOf() 方法，然后依据前面的规则转换返回的值；如果转换的结果是 NaN ，则调用对象的 toString() 方法，再次依照前面的顺序转换返回对应的值（Object 转换规则会在下面细讲）。

下面通过一段代码来说明上述规则。

```js
Number(true); // 1
Number(false); // 0
Number('0111'); //111
Number(null); //0
Number(''); //0
Number('1a'); //NaN
Number(-0x11); //-17
Number('0X11'); //17
```

#### Boolean() 方法的强制转换规则

这个方法的规则是：除了 undefined、 null、 false、 ''、 0（包括 +0，-0）、 NaN 转换出来是 false，其他都是 true。

```js
Boolean(0); //false
Boolean(null); //false
Boolean(undefined); //false
Boolean(NaN); //false
Boolean(1); //true
Boolean(13); //true
Boolean('12'); //true
```

## 隐式类型转换

凡是通过逻辑运算符 (&&、 ||、 !)、运算符 (+、-、\*、/)、关系操作符 (>、 <、 <= 、>=)、相等运算符 (==) 或者 if/while 条件的操作，如果遇到两个数据类型不一样的情况，都会出现隐式类型转换。这里你需要重点关注一下。

下面着重讲解一下日常用得比较多的“==”和“+”这两个符号的隐式转换规则。

#### '==' 的隐式类型转换规则

-   如果类型相同，无须进行类型转换；
-   如果其中一个操作值是 null 或者 undefined，那么另一个操作符必须为 null 或者 undefined，才会返回 true，否则都返回 false；
-   如果其中一个是 Symbol 类型，那么返回 false；
-   两个操作值如果为 string 和 number 类型，那么就会将字符串转换为 number；
-   如果一个操作值是 boolean，那么转换成 number；
-   如果一个操作值为 object 且另一方为 string、number 或者 symbol，就会把 object 转为原始类型再进行判断（调用 object 的 valueOf/toString 方法进行转换）。

直接看代码，这样更容易理解一些，如下所示。

```js
null == undefined; // true  规则2
null == 0; // false 规则2
'' == null; // false 规则2
'' == 0; // true  规则4 字符串转隐式转换成Number之后再对比
'123' == 123; // true  规则4 字符串转隐式转换成Number之后再对比
0 == false; // true  e规则 布尔型隐式转换成Number之后再对比
1 == true; // true  e规则 布尔型隐式转换成Number之后再对比

var a = {
    value: 0,
    valueOf: function () {
        this.value++;
        return this.value;
    },
};

// 注意这里a又可以等于1、2、3
console.log(a == 1 && a == 2 && a == 3); //true f规则 Object隐式转换
// 注：但是执行过3遍之后，再重新执行a==3或之前的数字就是false，因为value已经加上去了，这里需要注意一下
```

#### '+' 的隐式类型转换规则

'+' 号操作符，不仅可以用作数字相加，还可以用作字符串拼接。仅当 '+' 号两边都是数字时，进行的是加法运算；如果两边都是字符串，则直接拼接，无须进行隐式类型转换。

除了上述比较常规的情况外，还有一些特殊的规则，如下所示。

-   如果其中有一个是字符串，另外一个是 undefined、null 或布尔型，则调用 toString() 方法进行字符串拼接；如果是纯对象、数组、正则等，则默认调用对象的转换方法会存在优先级（下一讲会专门介绍），然后再进行拼接。
-   如果其中有一个是数字，另外一个是 undefined、null、布尔型或数字，则会将其转换成数字进行加法运算，对象的情况还是参考上一条规则。
-   如果其中一个是字符串、一个是数字，则按照字符串规则进行拼接。

下面还是结合代码来理解上述规则，如下所示。

```js
1 + 2; // 3  常规情况
'1' + '2'; // '12' 常规情况
// 下面看一下特殊情况
'1' + undefined; // "1undefined" 规则1，undefined转换字符串
'1' + null; // "1null" 规则1，null转换字符串
'1' + true; // "1true" 规则1，true转换字符串
'1' + 1n; // '11' 比较特殊字符串和BigInt相加，BigInt转换为字符串
1 + undefined; // NaN  规则2，undefined转换数字相加NaN
1 + null; // 1    规则2，null转换为0
1 + true; // 2    规则2，true转换为1，二者相加为2
1 + 1n; // 错误  不能把BigInt和Number类型直接混合相加
'1' + 3; // '13' 规则3，字符串拼接
```

整体来看，如果数据中有字符串，JavaScript 类型转换还是更倾向于转换成字符串，因为第三条规则中可以看到，在字符串和数字相加的过程中最后返回的还是字符串，这里需要关注一下

## Object 的转换规则

对象转换的规则，会先调用内置的 [ToPrimitive] 函数，其规则逻辑如下：

-   如果部署了 Symbol.toPrimitive 方法，优先调用再返回；
-   调用 valueOf()，如果转换为基础类型，则返回；
-   调用 toString()，如果转换为基础类型，则返回；
-   如果都没有返回基础类型，会报错。

直接来看代码，你也可以在控制台自己敲一遍来加深印象。

```js
var obj = {
    value: 1,
    valueOf() {
        return 2;
    },
    toString() {
        return '3';
    },
    [Symbol.toPrimitive]() {
        return 4;
    },
};
console.log(obj + 1); // 输出5
// 因为有Symbol.toPrimitive，就优先执行这个；如果Symbol.toPrimitive这段代码删掉，则执行valueOf打印结果为3；如果valueOf也去掉，则调用toString返回'31'(字符串拼接)
// 再看两个特殊的case：
10 +
    {}[
        // "10[object Object]"，注意：{}会默认调用valueOf是{}，不是基础类型继续转换，调用toString，返回结果"[object Object]"，于是和10进行'+'运算，按照字符串拼接规则来，参考'+'的规则C
        (1, 2, undefined, 4, 5)
    ] +
    10;
// "1,2,,4,510"，注意[1,2,undefined,4,5]会默认先调用valueOf结果还是这个数组，不是基础数据类型继续转换，也还是调用toString，返回"1,2,,4,5"，然后再和10进行运算，还是按照字符串拼接规则，参考'+'的第3条规则
```
