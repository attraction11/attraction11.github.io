# Vue3 源码解析

## 一、Vue3.0 源码

1、源码组织方式变化

-   采用`TypeScript`重写
-   使用[Monorepo](https://juejin.cn/post/6950561371394146318#heading-6) 管理项目结构

2、`Vue3.0`的不同构建版本

-   `Vue3.0`的构建版本分为 4 类：`cjs`、`global`、`browser`、`bundler`
-   `cjs`: `common.js`规范组织的代码，包含完整版本的`Vue`(其中有运行时和编译器)
-   `global`:可以直接在浏览器中使用，`global`标识全部，`prod`标识生产版本（代码被压缩），`runtime`标识运行时版本
-   `browser`：可以直接在浏览器中使用，`esm`标识采用`ESmodule`的规范
-   `bundler`：需要配合打包工具使用，`vue.runtime.esm-bundler.js`是`vue`的最小版本,只打包使用到的代码

3、项目目录结构变化
![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3c32e26d11f84419bf098d3f27ae6c52~tplv-k3u1fbpfcp-watermark.image?)

4、`Composition API`设计动机

-   `Vue2.0`中的`Options API`包含描述组件选项(`data`、`methods`等)的对象，在描述复杂组件时，同一功能的逻辑被拆分到不同的选项中，随着版本的迭代难以维护
-   `Vue3.0`中的`Compositon API`新增一组基于函数的`API`，可以更加灵活的组织同一个功能的代码片段

5、性能提升

-   响应式系统升级：`Vue2.0`是在数据初始化之后，遍历对象的属性通过`Object.defineProperty`监听属性的变化。`vue3.0`采用`Proxy`代理对象拦截对象的访问，可以监听动态新增的属性、删除的属性、数组的索引和 length 属性。
-   编译优化：`Vue2.0`中渲染的最小单位是组件，会标记静态根节点，优化`diff`的过程，但静态节点还要通过`diff`。`Vue2.0`中会标记所有的静态节点，`diff`的过程只需要对比动态节点内容。
    -   `Fragments`(片段)：组件内支持多个同级的根标签
    -   静态提升：标签中仅仅是纯文本的节点,会提升到`render`函数外，再次`render`无须再次创建
    -   Patch flag: 标记不同类型的节点（如动态文本节点、有动态属性的节点），优化`diff`的过程
    -   缓存事件处理函数、组件按需动态导入
-   源码体积优化
    -   `Vue3.0`中移除了一些不常用`API`,如：`inline-template`、`filter`
    -   `Tree-shaking`(依赖`ESmodule`的模块化规范)

6、`Vite`的原理浅析  
在`HTML`中以`ESmodule`的方式引入脚本，执行以下代码：

```js
  <script>
    window.addEventListener('DOMContentLoaded', () => {
      console.log('DOMContentLoaded')
    })

  </script>
  <script type="module" src="./modules/index.js"></script>
```

结论：加载模块并执行是在`DOM`树创建之后，并且在`DOMContentLoaded`事件之前执行的。

7、`Vite` vs `Vue-cli`的区别

-   `Vite`在开发模式下不需要打包就可以直接运行（依赖现代浏览器对`ESmodule`模块的支持）
-   `Vue-cli`在开发模式下必须打包后运行
-   `Vite`支持快速冷启动、按需编译、模块热更新、
-   `Vite`在生产环境下使用`Rollup`打包（基于`ESmodule`的方式打包），`Vue-cli`使用`webpack`打包

## 二、Composition API

1、`setup` API

```js
// 创建Vue对象
const app = createApp({
    // Composition API的入口
    setup() {
        // 第一个参数 props
        // 第二个参数 context，attrs、emit、slots
        // 将普通对象转换为响应式对象，并且该对象嵌套的对象也是响应式
        const { x, y } = reactive({
            x: 0,
            y: 0,
        });
        return {
            x,
            y,
        };
    },
});

app.mount("#app");
```

-   `return`的对象可以使用在模板、`methods`、生命周期钩子函数中
-   `setup`的执行时机是`props`解析完毕，组件实例被创建之前执行的,因此其中通过`this`获取到组件的实例

2、生命周期钩子函数
![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a7590141a0b8418c9494e454e84128d4~tplv-k3u1fbpfcp-watermark.image?)

3、`reactive`、`toRefs`、`ref`声明响应式对象

-   `toRefs`函数要求传入的对象必须是一个代理对象，它可以将一个响应式对象的所有属性转化为响应式数据
-   `ref`的作用是将普通数据转化为响应式数据，与`reactive`不同的是`ref`可以将普通类型的变量转化为响应式对象
-   `toRefs` 可以将 `reactive()` 创建出来的响应式对象中的每个属性节点都转化为响应式的

4、`computed`的用法
![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/cd348185f89242b2a6b036dbe542151a~tplv-k3u1fbpfcp-watermark.image?)

5、`watch` 与 `watchEffect`

-   `Watch`的三个参数
    -   要监听的数据
    -   监听到数据变化后执行的函数，这个函数有两个参数分别是新值和旧值
    -   选项对象，`deep`（深度监听）和 `immediate`(初始化后立即执行一次)
-   `Watch`的返回值
    -   取消监听的函数

```js
  setup () {
    const question = ref('')
    const answer = ref('')

    watch(question, async (newValue, oldValue) => {
      const response = await fetch('https://www.yesno.wtf/api')
      const data = await response.json()
      answer.value = data.answer
    })

    return {
      question,
      answer
    }
  }
```

-   `watchEffect`是`watch`函数的简化版本，也是用来监听数据的变化。不同的是没有它没有第二个回调函数的参数，返回值是取消监听的函数。`watchEffect`中的函数初始的时候会首先执行一次，然后监听函数内响应式数据的变化。当`stop`函数被执行后，会取消监听函数内响应式数据的变化了。

```js
  setup () {
    const count = ref(0)
    const stop = watchEffect(() => {
      console.log(count.value)
    })

    return {
      count,
      stop,
      increase: () => {
        count.value++
      }
    }
  }
```

三、响应式系统原理

1、`Vue3` 响应式回顾

-   `Proxy`对象实现属性监听
-   多层属性嵌套，在访问属性过程中处理下一级属性
-   默认监听动态添加的属性
-   默认监听属性的删除操作
-   默认监听数组索引和`length`属性
-   可以作为单独的模块使用

2、`reactive`函数的实现

-   接收一个参数，判断这参数是否是对象
-   创建拦截器对象`handler`，设置`get` 、`set` 、`deteteProperty`
-   返回`Proxy`对象

3、响应式系统-收集依赖

-   访问响应式对象属性时，去收集依赖(`track`)
    ![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/120e7804e5f441798a1dd6289c5ab035~tplv-k3u1fbpfcp-watermark.image?)

```js
export function track(target, key) {
    if (!activeEffect) return;
    let depsMap = targetMap.get(target);
    if (!depsMap) {
        targetMap.set(target, (depsMap = new Map()));
    }
    let dep = depsMap.get(key);
    if (!dep) {
        depsMap.set(key, (dep = new Set()));
    }
    dep.add(activeEffect);
}
```

4、响应式系统-触发更新

-   以`target`作为键，找对应的`depsMap`。找到后以`key`作为键，找到`dep`的集合遍历绑定的函数依次执行

```js
- 在设置响应式对象属性时，去触发更新（`trigger`）
export function trigger (target, key) {
  const depsMap = targetMap.get(target)
  if (!depsMap) return
  const dep = depsMap.get(key)
  if (dep) {
    dep.forEach(effect => {
      effect()
    })
  }
}
```

5、`ref`函数的实现

-   接收一个参数可以是原始值或对象，若是对象并且是`ref`创建的对象，则直接返回。若是普通对象，则内部会调用`reactive`

```js
export function ref(raw) {
    // 判断 raw 是否是ref 创建的对象，如果是的话直接返回
    if (isObject(raw) && raw.__v_isRef) {
        return;
    }
    let value = convert(raw);
    const r = {
        __v_isRef: true,
        get value() {
            track(r, "value");
            return value;
        },
        set value(newValue) {
            if (newValue !== value) {
                raw = newValue;
                value = convert(raw);
                trigger(r, "value");
            }
        },
    };
    return r;
}
```

6、对比 `reactive`和 `ref`

-   `ref` 可以把基本数据类型数据，转成响应式对象
-   `ref` 返回的对象，重新赋值成对象也是响应式的
-   `reactive` 返回的对象，重新赋值丢失响应式
-   `reactive` 返回的对象不可以解构

7、`computed` 函数的实现

-   `computed`内部定义一个`ref()`，使用`effect`监听传入`getter()`的变化，将值赋值给`result.value`并返回

```js
export function computed(getter) {
    const result = ref();

    effect(() => (result.value = getter()));

    return result;
}
```
