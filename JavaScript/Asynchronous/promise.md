# Promise 介绍

## 理解语法

> ES6 当中新增的一个类，Promise 是一种承诺、约定的模式，基于这种模式可以有效的处理异步编程
> 做为一种优秀的代码管理模式，可以有效的管理异步编程当中的代码，让代码开发起来更便捷，维护起来更方便，可读性更强

1. 执行 new 操作时必须传入函数做为参数（executor 函数）
    1. executor 函数接收两个函数做为参数，且会**立即执行**
    2. executor 函数一般用于管控异步操作（书写异步代码）
2. new 操作执行之后会返回一个 Promise 实例
    1. [[PromiseState]] promise 状态：pending（准备状态）fulfilled（成功态）  rejected（已拒绝）
    2. [[PromiseResult]] promise 值：默认的是 undefined， 一般用于存储成功的结果或者失败的原因
    3. **proto**：查找 Promise.prototype 原型，存在 then catch finally 三个常见的方法
3. 改变状态
    1. 执行 resolve 控制实例的状态改变为成功态，传递的值是成功的结果
    2. 执行 reject 控制实例的状态改变为 rejected, 传递的值就是失败的结果
    3. 如果 executor 函数中的代码执行报错，则状态也会切换至失败态，报错原因是 value 值
    4. 一旦状态从 pending 切到了 fulfilled 或者 rejected ，都无法再次改变其状态
4. 异步处理
    1. new Promise 之后立即执行 executor 函数
    2. 在 executor 函数中管理了一个异步编程代码，此时状态是 pending
    3. 当异步操作到达指定的时间，开始执行时（看做是异步操作成功）通过调用 resolve 修改 promise 状态为 fulfilled
    4. 状态明确之后就可以执行后续的代码， 成功态调用第一个方法，失败态调用第二个方法

```js
let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("ok");
    }, 1000);
});
```

5. 执行顺序
    1. 执行 new Promise
    2. 执行 executor 函数：设置定时器，不等待
    3. 执行 p1.then 注入两个方法（被注入的方法会被保存起来）
    4. 同步代码完成，等待异步到达执行时机
    5. 执行定时器回调：调用 resolve 或 reject 修改 promise 的状态和值
    6. 通知之前基于 then 注入的两个方法中的第一个执行

```js
let p1 = new Promise((resolve, reject) => {
    console.log(1);
    // 修改状态和值，这是同步操作，通知基于 then 注入的方法执行
    // 但代码执行到此时，方法还未注册，因此不知道通知谁来执行
    // 此时需要把“通知方法执行的操作保存起来”，这是一个异步操作
    resolve("ok"); //! 异步操作
    console.log("2");
});
// 注入方法是同步的
p1.then(
    (ret) => {
        console.log("成功态--->", ret);
    },
    (reason) => {
        console.log("失败态--->", reason);
    }
);
console.log(3);
```

## Promise 状态和值分析

1. new Promise 获取实例
    1. 通过调用 resolve 或 reject 控制[[PromiseState]] 和 [[PromiseResult]]
    2. executor 函数执行失败 ， 状态为 rejected ，值为报错信息
2. 执行 then 返回实例
    1. then 注入的两个方法不论哪一个执行，只要执行不报错，新实例的状态就是 fulfilled，反之就是 rejected, 新实例的值就是方法的返回值
    2. 如果方法执行返回新的 Promise 实例，则此实例最后的成功或者失败就决定了 then 拿到的实例是成功还是失败，值都是一样的

```js
let p1 = new Promise((resolve, reject) => {
    resolve("ok");
});

let p2 = p1.then(
    (result) => {
        console.log("成功-->", result);
        return 10;
    },
    (reason) => {
        console.log("失败-->", reason);
        return 20;
    }
);

p2.then(
    (result) => {
        console.log("成功-->", result);
    },
    (reason) => {
        console.log("失败-->", reason);
    }
);
```

## 失败 Promise 处理

1. 对于失败的 promise 实例，如果没有编写方法处理其结果，则会在控制台中抛出异常信息（但不阻碍其它代码执行）
2. then 链中的方法处理存在顺延机制,如果某个方法没有传递，则会顺延至下一个 then 中具备相同状态需要执行的函数

```js
// 此时浏览器会抛出语法异常
Promise.reject("NO").then((result) => {
    console.log("只添加了成功态");
});

// 顺延机制
Promise.reject("No")
    .then((result) => {
        console.log("成功的方法");
    })
    .then(null, (reason) => {
        console.log("第二个then当中的reject 处理方法", reason);
    });

// catch 使用
Promise.resolve("拉勾教育")
    .then((result) => {
        console.log("成功1-->", result);
        return 10;
    })
    .then((result) => {
        console.log("成功2-->", result);
        return Promise.reject("用 catch 最后来处理失败");
    })
    .catch((reason) => {
        console.log("失败原因是：", reason);
    });
```

## 处理多个 promise

1. promise.all 等待所有的 promise 实例都成功，整体返回的状态才成功，只要有一个失败，整体失败
2. promise.race 看多个实例谁先处理完，先处理完成的状态，不论失败还是成功，就是最后整体的状态
3. Promise.any()  执行所有 promise，使用最先返回的成功结果；全部失败才判定为失败； p.then("谁先成功就返回谁"，"失败了先存起来，都失败了才返回")
4. Promise.allSettled() 批处理 promise，返回 promise；存在失败结果也会拿到全部执行结果，不会走 catch；解决了 Promise.all 不能拿到失败执行结果的问题；全部执行完成，返回执行结果数组（下标与按执行顺序一致）

```js
Promise.allSettled([
  Promise.resolve(33),
  new Promise((resolve) => setTimeout(() => resolve(66), 0)),
  99,
  Promise.reject(new Error("an error")),
]).then((values) => console.log(values));

// [
//   { status: 'fulfilled', value: 33 },
//   { status: 'fulfilled', value: 66 },
//   { status: 'fulfilled', value: 99 },
//   { status: 'rejected', reason: Error: an error }
// ]
```

## promise 与微任务

1. .then 操作
    1. 当前实例的状态如果是明确的，则会创建一个异步微任务
    2. 当前实例的状态如果是 pending ，则只是将异步任务保存到，并没有创建微任务
2. resolve | reject 执行
    1. 此时会创建一个异步微任务，同步结束后基于状态执行 then 的相关操作

## async 与 await

async 特点

1. 用于修饰函数，默认让函数返回一个 promise 实例
2. 如果函数执行报错，则 promise 状态为 rejected ，值为报错原因
3. 如果函数执行正常，则实例状态为 fulfilled，值为函数返回，如果函数没有返回值则值为 undefined

```js
async function foo() {
    return 10;
}

console.log(foo());

foo().then((result) => {
    console.log("成功态-->", result);
});
```

await 特点

1. await 要基于 async 配合使用，一般不会单独使用 async
2. await 后面一般放置的是 promise 实例，如果不是，则会将它转为 new Promise.resolve()处理
3. await foo() 执行规则是立即执行 foo 函数，接收 foo 的返回值然后处理为 promise 实例
4. await 本身是一个异步微任务：把当前上下文中 await 下面要执行的代码整体存储到异步的微任务当中， 当 await 后面的 promise 实例状态为成功之后，再去执行下面的代码（也就是那个异步微任务）

```js
function foo() {
    console.log(3);
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(5);
        }, 1000);
    });
}

console.log(1);

async function fn() {
    console.log(2);
    let result = await foo();
    console.log(result);
    console.log(6);
}

fn();

console.log(4);
```

## 代码执行顺序

先贴代码一

```js
async function async1() {
    console.log("2");
    await async2();
    console.log("6");
}

async function async2() {
    console.log("3");
}

console.log("1");

setTimeout(() => {
    console.log("8");
}, 0);

async1();

new Promise((resolve) => {
    console.log("4");
    resolve();
}).then(() => {
    console.log("7");
});

console.log("5");
```

> 解析：async 函数中 await 语句前的代码，属于同步代码立即执行。new Promise() 中的 executor 函数会立即，属于同步代码。
> 执行 then 回调函数将在下次事件循环中执行。

再贴代码二

```js
console.log("1");
let timer;
Promise.resolve()
    .then(() => {
        console.log("2");
    })
    .then(() => {
        console.log("3");
    });

setTimeout(() => {
    Promise.resolve()
        .then(() => {
            console.log("5");
        })
        .then(() => {
            console.log("6");
        });
    timer = setInterval(() => {
        console.log("7");
    }, 4000);
    console.log("4");
}, 0);
```

> 解析：代码执行的过程中是先依据外层的代码执行的优先级划分，
> 然后对内层的代码划分为同步代码、异步宏任务、异步微任务，再做本轮宏任务或微任务的处理。

再贴代码三

```js
setTimeout(function foo1() {
    console.log("4");
});

Promise.resolve()
    .then(function foo2() {
        console.log("1");
    })
    .then(function foo3() {
        return Promise.resolve("xxx").then(function foo4(data) {
            setTimeout(function foo5() {
                console.log("5");
            });
            console.log("2");
            return data;
        });
    })
    .then(function foo6(ret) {
        console.log("3");
    });
```

> 解析：在微任务执行的过程中又触发了微任务，则执行依次执行微任务队列。
> 若在微任务执行的过程中又触发了宏任务，则等当前微任务队列执行结束后，再执行宏任务队列。
