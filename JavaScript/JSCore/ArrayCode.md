 # 手写 JS 数组多个方法的底层实现
 我们都知道，比较常用的数组方法有 push、pop、slice、map 和 reduce 等。上一讲我带你剖析了 sort 方法以及 V8 源码中关于排序的内容，本讲则会围绕这几个常用方法，并结合 V8 的源代码带你手写这些方法的底层实现。

那么，为了方便你更好地理解本讲的内容，在课程开始前请你先回想一下：
- reduce 方法里面的参数都是什么作用？
- push 和 pop 的底层逻辑是什么样的呢？

## push 方法的底层实现
为了更好地实现 push 的底层方法，你可以先去 ECMA 的官网去查一下关于 push 的基本描述（链接：[ECMA 数组的 push 标准](https://tc39.es/ecma262/#sec-array.prototype.push)），根据它的描述，如下所示。
```js
Array.prototype.push = function(...items) {
	let O = Object(this);
	let len = this.length >>> 0;
	let argCount = items.length >>> 0;
	if (len + argCount > 2 * *53 - 1) {
		throw new TypeError("The number of array is over the max value")
	}
	for (let i = 0; i < argCount; i++) {
		O[len + i] = items[i]
	}
	let newLength = len + argCount;
	O.length = newLength;
	return newLength
}
```
从上面的代码可以看出，关键点就在于给数组本身循环添加新的元素 item，然后调整数组的长度 length 为最新的长度，即可完成 push 的底层实现。

其中关于长度的部分需要做无符号位移，无符号位移在很多源码中你都会看到。关于为什么一些变量要进行无符号位移，你可以自己研究一下，比如在 Stack Overflow 中有一些高票的回答，这里就不占用篇幅了。下面我们再看来一下 pop 的实现。

## pop 方法的底层实现
同样我们也一起来看下 pop 的底层实现，你也可以先去 ECMA 的官网去查一下关于 pop 的基本描述（链接：[ECMA 数组的 pop 标准](https://tc39.es/ecma262/#sec-array.prototype.pop)）,我们同样将其转换为可以理解的代码，如下所示。
```js
Array.prototype.pop = function() {
	let O = Object(this);
	let len = this.length >>> 0;
	if (len === 0) {
		O.length = 0;
		return undefined
	}
	len--;
	let value = O[len];
	delete O[len];
	O.length = len;
	return value
}
```
其核心思路还是在于删掉数组自身的最后一个元素，index 就是数组的 len 长度，然后更新最新的长度，最后返回的元素的值，即可达到想要的效果。另外就是在当长度为 0 的时候，如果执行 pop 操作，返回的是 undefined，需要做一下特殊处理。

## map 方法的底层实现
同样你可以去 ECMA 的官网去查一下关于 map 的基本描述（链接：[ECMA 数组的 map 标准](https://tc39.es/ecma262/#sec-array.prototype.map)），我们将其转换为可理解的代码，如下所示。
```js
Array.prototype.map = function(callbackFn, thisArg) {
	if (this === null || this === undefined) {
		throw new TypeError("Cannot read property 'map' of null");
	}
	if (Object.prototype.toString.call(callbackfn) != "[object Function]") {
		throw new TypeError(callbackfn + ' is not a function')
	}
	let O = Object(this);
	let T = thisArg;
	let len = O.length >>> 0;
	let A = new Array(len);
	for (let k = 0; k < len; k++) {
		if (k in O) {
			let kValue = O[k];
			let mappedValue = callbackfn.call(T, KValue, k, O);
			A[k] = mappedValue
		}
	}
	return A
}
```
有了上面实现 push 和 pop 的基础思路，map 的实现也不会太难了，基本就是再多加一些判断，循环遍历实现 map 的思路，将处理过后的 mappedValue 赋给一个新定义的数组 A，最后返回这个新数组 A，并不改变原数组的值。

## reduce 方法的底层实现
ECMA 官网关于 reduce 的基本描述（链接：[ECMA 数组的 pop 标准](https://tc39.es/ecma262/#sec-array.prototype.pop)），将其转换为我们自己的代码，如下所示。
```js
Array.prototype.reduce = function(callbackfn, initialValue) {
	if (this === null || this === undefined) {
		throw new TypeError("Cannot read property 'reduce' of null");
	}
	if (Object.prototype.toString.call(callbackfn) != "[object Function]") {
		throw new TypeError(callbackfn + ' is not a function')
	}
	let O = Object(this);
	let len = O.length >>> 0;
	let k = 0;
	let accumulator = initialValue;
	if (accumulator === undefined) {
		throw new Error('Each element of the array is empty');
		for (; k < len; k++) {
			if (k in O) {
				accumulator = O[k];
				k++;
				break
			}
		}
	}
	for (; k < len; k++) {
		if (k in O) {
			accumulator = callbackfn.call(undefined, accumulator, O[k], O)
		}
	}
	return accumulator
}
```
根据上面的代码及注释，有几个关键点你需要重点关注：
- 初始值默认值不传的特殊处理；
- 累加器以及 callbackfn 的处理逻辑。
