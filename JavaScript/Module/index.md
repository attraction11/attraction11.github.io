# 模块检测一

## 1. 请说出下列最终执行结果，并解释为什么?

```javascript
var a = [];
for (var i = 0; i < 10; i++) {
    a[i] = function () {
        console.log(i);
    };
}
a[6]();
```

1. 答：10
2. 解析：
    - 首先建立`ECStack`执行环境栈，全局执行上下文`EC(G)`进栈执行。`a`的堆地址设为`0x001`，`i` 默认为`undefined`。
    - 然后`for`循环代码执行，依次开辟新的匿名函数堆内存，将堆内存地址储存在`a`的堆地址内存中
    - 然后执行 `a[6]()`，此时 a[6]指向堆内存地址`0x008`, 其中储存着字符串形式的函数，将它进栈执行
    - 函数执行时，确定作用域链为`<EC(AN1), EC(G)>`, 函数体中的 i 当前执行上下文不存在，
    - 然后沿着作用域链在`EC(G)`的变量对象`VO(G)`中找到了`i`, 此时的`i`经过`for`循环之后，已经变为`10`
    - 执行`console.log(i)`，打印结果为`10`
3. 图解执行过程：
   ![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/eefb18c53fef48e4a0d0b1769ccdb485~tplv-k3u1fbpfcp-watermark.image)

## 2. 请说出此案列最终执行结果，并解释为什么?

```javascript
var tmp = 123;
if (true) {
    console.log(tmp);
    let tmp;
}
```

1. 答：报错`Uncaught ReferenceError` 引用错误
2. 解析：
    - 首先全局作用域定义了变量`var tmp = 123`
    - 然后在`if`判断中通过`let`定义了同名变量`tmp`,因此这里形成了块级作用域
    - 在块级作用域中局部的变量`tmp`会覆盖全局的变量`tmp`，
    - 由于使用`let`定义的变量要等到程序流执行到定义变量的代码行时才会装载，
    - 因此在定义局部变量`tmp`之前访问它（存在暂时性死区），就会导致引用错误。

## 3. 结合 ES6 语法，用最简单的方式找出数组中的最小值

```javascript
var arr = [12, 34, 32, 89, 4];
```

1. 答：Math.min(...arr)
2. 解析：
    - Math.min()方法默认接收不定数量 number 类型的参数
    - 因此可以采用...扩展运算符的用法将 arr 数组元素依次传入 Math.min()方法中
    - 此外 ES5 也有类似的传参方式，Math.min.apply(null, arr),可以达到相同效果

## 4. 请详细说明 var、let、const 三种声明变量的方式之间的具体差别

### 表格区别差异：

|            |              var              |           let            |                               const                                |
| :--------: | :---------------------------: | :----------------------: | :----------------------------------------------------------------: |
|    语法    |           var a = 1           |        let a = 1         |                            const a = 1                             |
|  声明提升  | 声明提升，使用 undefined 定义 |    仅声明提升，未定义    |                         仅声明提升，未定义                         |
|   作用域   |       全局或函数作用域        |        块级作用域        |                             块级作用域                             |
|    定义    |       可以仅声明不定义        |     可以仅声明不定义     |                           必须声明时定义                           |
|  多次赋值  |             可以              |           可以           | 基本数据类型不可以，引用类型可以改变堆内存中的值（堆地址不能改变） |
| 声明前访问 |             可以              | 不可以（存在暂时性死区） |                      不可以（存在暂时性死区）                      |
|    特点    |       全局或函数作用域        |        块级作用域        |                             块级作用域                             |

解析差异：

1. `const`必须声明时定义,因为不定义后续就无法定义了，并且会报错`Uncaught SyntaxError: Missing initializer in const declaration`
2. `const`和`let`在`{}`花括号中使用时会形成块级作用域
3. `const`和`let`在声明前访问存在暂时性死区，即变量在定义之前是不能被使用。
4. `let`和`const`不会绑定全局作用域,`var`定义的全局变量会自动添加全局`window`对象的属性(浏览器环境)

### 实例分析：

```js
var name = "aaa";
function func() {
    console.log(name);
    let name = "bbb";
    console.log(name);
}
func();
// 报错：Uncaught ReferenceError: Cannot access 'name' before initialization
```

原因：`let`定义的变量不会提前装载, 使用`let`定义的变量要等到程序流执行到定义变量的代码行时才会装载。  
过程：上面代码定义了全局变量`name`, 然后在函数`func`中定义了同名的`name`变量，此时局部变量`name`会覆盖全局的`name`变量。但由于使用 let 定义的变量不会提前装载，在定义局部变量`name`之前访问它，就会导致错误。

## 5. 请说出下列代码最终输出结果，并解释为什么？

```javascript
var a = 10;
var obj = {
    a: 20,
    fn() {
        setTimeout(() => {
            console.log(this.a);
        });
    },
};
obj.fn();
```

1. 答：20
2. 解析：
    - 首先建立`ECStack`执行环境栈，全局执行上下文`EC(G)`进栈执行。`a`的值设为`10`，`obj` 设为`0x001`。
    - 然后执行`obj.fn()`,函数执行时，查看函数的前端有.,则点前面的对象就是执行主体`this`指向`obj`
    - 在`obj`的堆内存中找到属性`a`的值为`20`，因此打印`this.a`的值为`20`
3. 图解执行过程：
   ![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c09e6079140a413ab29f983a8cb9d565~tplv-k3u1fbpfcp-watermark.image)

## 6. 简述 Symbol 类型的用途

1. 常量枚举：JavaScript 没有枚举类型，常量概念也通常用字符串或数字表示。如果不小心有两个值重复会很难调试，但当用 Symbol 类型定义常量，并通过 Symbol('xxx')中的 xxx 添加对 Symbol 数据的描述, 就可以保证不会与其他常量重复。
2. 定义对象的私有属性：由于没有访问限制，一般以下划线起始来命名对象的私有属性,但这并不能从根本限制访问这些属性。Symbol 类型可以为对象添加一个独一无二的属性名并隐藏这些私有属性，因此 Symbol('xxx')属性适合作为对象的私有属性。

## 7. 说说什么是浅拷贝，什么是深拷贝？

1. 浅拷贝是拷贝一层，如果是基本类型数据会拷贝其本身的值，如果是引用类型数据则拷贝其引用地址，如果引用类型数据属性值也是引用类型，那么引用类型数据属性值的改变会反应到拷贝对象上。  
   对应基本数据类型，浅拷贝就是赋值，以下是部分引用类型数据的浅拷贝方法：

```js
// 数组
let arr = [1, 2, 3];
let arr1 = arr.slice();
let arr2 = [...arr];
let arr3 = [].concat(arr);
let arr4 = Array.from(arr);
// 对象
let obj = { a: 1, b: 2 };
let obj1 = Object.assign({}, obj);
let { ...obj2 } = obj;
let obj3 = {};
for (let key in obj) {
    obj3[key] = obj[key];
}
```

2. 深拷贝是拷贝多层，每一层的数据都会拷贝出来，对象的改变不会影响拷贝对象。  
   深拷贝的方法：
    - `JSON.parse(JSON.stringify(obj))`平常项目也常拿来使用,但要严格遵守`JSON`序列化规则。原对象中如果含有`Date`对象，`JSON.stringify()`会将其变为字符串，之后并不会将其还原为日期对象。或是含有`RegExp`对象，`JSON.stringify()`会将其变为空对象，属性中含有`NaN`、`Infinity`和`-Infinity`，则序列化的结果会变成`null`，如果属性中有函数,`undefined`,`symbol`则经过`JSON.stringify()`序列化后的`JSON`字符串中这个键值对会消失，因为不支持。
    - 递归实现深拷贝
      完整代码：

```js
// 手工实现一个JS深拷贝的函数（改进版）
const isCloneDataType = (obj) =>
    typeof obj === "object" && typeof obj !== "function" && obj !== null;

const deepClone = (obj, hash = new WeakMap()) => {
    if (obj instanceof Date) return new Date(obj);
    if (obj instanceof RegExp) return new RegExp(obj);
    if (hash.has(obj)) return hash.get(obj);

    let allDesc = Object.getOwnPropertyDescriptors(obj);
    let cloneObj = Object.create(Object.getPrototypeOf(obj), allDesc);
    hash.set(obj, cloneObj);
    // 重新使用循环赋值对象属性目的：WeakMap 防止内存泄漏，
    // 否则循环引用复制起来比较吃内存。
    for (let key of Reflect.ownKeys(obj)) {
        cloneObj[key] = isCloneDataType(obj[key])
            ? deepClone(obj[key], hash)
            : obj[key];
    }
    return cloneObj;
};
```

## 8. 请简述 TypeScript 与 JavaScript 之间的关系？

`TypeScript`是一种由微软开发的自由和开源的编程语言。它是`JavaScript`的一个超集，而且本质上向这个语言添加了可选的静态类型和基于类的面向对象编程，是一种给 `JavaScript` 添加特性的语言扩展。

## 9. 请谈谈你所认为的 TypeScript 优缺点

1. 优点：

-   `TypeScript`是`Javascript`的增强，它作为`Javascript`语言的超集，为`Javascript`添加了可选择的类型标注，提高了代码的可读性和可维护性。
-   增强了编辑器和 `IDE` 的功能，包括代码补全、接口提示、跳转到定义、重构等
-   可以使用到最新提供的`Javascript`特性，使我们的代码更加健壮。
-   `TypeScript`是未来前端开发的趋势，非常适合构建大型复杂应用，也利于编写基础的 JS 库和框架（如`Vue3.0`、`antdesign`、`vscode`等）

2. 缺点：

-   有一定的学习成本，需要理解接口（`Interfaces`）、泛型（`Generics`）、类（`Classes`）、枚举类型（`Enums`）
-   短期可能会增加一些开发成本，毕竟要多写一些类型的定义，长期 TypeScript 能够减少其维护成本

## 10. 描述引用计数的工作原理和优缺点

1. 引用计数工作原理：核心思想是利用引用计数器设置引数，当引用关系改变时修改引用数字，当引用数字为 0 时立即回收
2. 优点：发现垃圾立即回收，最大限度减少程序的暂停
3. 缺点：无法回收循环引用的对象；由于需要管理引用计数器，时间开销大。

## 11. 描述标记整理算法的工作流程

1. 标记整理的工作原理：第一步遍历所有对象标记活动对象，第二部遍历所有对象先执行整理，移动对象的位置整理并清除未标记的非活动对象，回收相应的空间。解决了循环引用对象不可回收的问题，但不会立即回收垃圾对象。
2. 图解过程: 首先遍历所有对象并标记活动对象，其中循环引用对象不可达不标记，然后对对象移动位置进行整理，最后回收图中蓝色区域（非活动对象）
   ![48f77fbcdd21504570670ec38b6468c.jpg](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c1254ef7c18e4210bc43b0cada6add60~tplv-k3u1fbpfcp-watermark.image)

## 12. 描述 V8 中新生代存储区垃圾回收的流程

1. V8 垃圾回收策略：采用分代回收的思想。将内存分为新生代、老生代，针对不同的对象采用不同的 GC 算法。
2. 新生代：指的是存活时间较短的对象（如函数内的局部作用域变量，当函数执行完后，就成为垃圾了）
3. 新生代对象的回收实现

    - 回收过程采用复制算法 + 标记整理
    - 新生代内存区分为两个等大的空间
    - 使用空间为`From`, 空闲空间为`To`
    - 当申请内存后的活动对象都储存在`From`空间，当达到一定量后触发`GC`回收
    - 经过标记整理后，将活动对象拷贝到`To`空间，然后将`From`空间内存释放
    - 将`From`和`To`交换空间，再次执行第`4`条，依次循环

    注意：在对象的拷贝过程中可能会出现对象的晋升，即一轮`GC`还存活的新生代需要晋升到老年代，此外当`To`空间使用率超过`25%`时，本次拷贝的活动对象都会被移动到老年代。

## 13. 描述增量标记算法在何时使用及工作原理

1. 增量标记算法：主要用在回收老生代对象时，进行效率优化。
2. 工作原理：当老生代储存区域，占用内存达到一定量后触发`GC`回收。增量标记采用分片进行标记和清除，让程序执行和垃圾回收交替执行，实现垃圾回收优化，让用户无感知，体验更好。
3. 图解过程
   ![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ddc2c74e3c1b43a7a58f8f3b6e00dbb9~tplv-k3u1fbpfcp-watermark.image)
