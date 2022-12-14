#### 1、Vue 3.0 性能提升主要是通过哪几方面体现的？

-   响应式系统升级：`Vue2.0`是在数据初始化之后，遍历对象的属性通过`Object.defineProperty`监听属性的变化。`vue3.0`采用`Proxy`代理对象拦截对象的访问，可以监听动态新增的属性、删除的属性、数组的索引和 length 属性。
-   编译优化：`Vue2.0`中渲染的最小单位是组件，会标记静态根节点，优化`diff`的过程，但静态节点还要通过`diff`。`Vue2.0`中会标记所有的静态节点，`diff`的过程只需要对比动态节点内容。
    -   `Fragments`(片段)：组件内支持多个同级的根标签
    -   静态提升：标签中仅仅是纯文本的节点,会提升到`render`函数外，再次`render`无须再次创建
    -   Patch flag: 标记不同类型的节点（如动态文本节点、有动态属性的节点），优化`diff`的过程
    -   缓存事件处理函数、组件按需动态导入
-   源码体积优化
    -   `Vue3.0`中移除了一些不常用`API`,如：`inline-template`、`filter`
    -   `Tree-shaking`(依赖`ESmodule`的模块化规范)

#### 2、Vue 3.0 所采用的 Composition Api 与 Vue 2.x 使用的 Options Api 有什么区别？

-   `Vue2.0`中的`Options API`包含描述组件选项(`data`、`methods`等)的对象，在描述复杂组件时，同一功能的逻辑被拆分到不同的选项中，随着版本的迭代难以维护
-   `Vue3.0`中的`Compositon API`新增一组基于函数的`API`，可以更加灵活的组织同一个功能的代码片段
-   `Vue3.0`中的`setup(props, context){}`在实例被初始化之前执行，故在`setup`中的`this`上没有任何东西

#### 3、Proxy 相对于 Object.defineProperty 有哪些优点？

-   `Proxy`直接监听对象而非属性,有多达`13`种拦截方法,如 `apply`、`ownKeys`、`has` 等等,这是`Object.defineProperty`不具备的
-   多层属性嵌套，在访问属性过程中处理下一级属性
-   默认监听动态添加的属性
-   默认监听属性的删除操作
-   默认监听数组索引和`length`属性



#### 4、Vue 3.0 在编译方面有哪些优化？

-   `Vue2.0`中渲染的最小单位是组件，会标记静态根节点，优化`diff`的过程，但静态节点还要通过`diff`。`Vue2.0`中会标记所有的静态节点，`diff`的过程只需要对比动态节点内容。
-   `Fragments`(片段)：组件内支持多个同级的根标签
-   静态提升：标签中仅仅是纯文本的节点,会提升到`render`函数外，再次`render`无须再次创建
-   Patch flag: 标记不同类型的节点（如动态文本节点、有动态属性的节点），优化`diff`的过程
-   缓存事件处理函数、组件按需动态导入

#### 5、Vue.js 3.0 响应式系统的实现原理？

-   `Vue3.0`使用`Proxy`对象重写响应式系统
-   `Proxy`代理拦截: - `reactive`函数执行，会将传入的`target`对象通过`Proxy`包装，拦截它的`get`，`set`等，并将代理的`target`缓存到`targetMap`，`targetMap.set(target, new Map())`。
    代理的`get`的时候会调用一个`track`函数，而`set`会调用一个`triger`函数。分别对应依赖收集和触发更新。

```js
export function reactive (target) {
  if (!isObject(target)) return target

  const handler = {
    get (target, key, receiver) {
      // 收集依赖
      track(target, key)
      const result = Reflect.get(target, key, receiver)
      return convert(result)
    },
    set (target, key, value, receiver) {
      const oldValue = Reflect.get(target, key, receiver)
      let result = true
      if (oldValue !== value) {
        result = Reflect.set(target, key, value, receiver)
        // 触发更新
        trigger(target, key)
      }
      return result
    },
    deleteProperty (target, key) {
      const hadKey = hasOwn(target, key)
      const result = Reflect.deleteProperty(target, key)
      if (hadKey && result) {
        // 触发更新
        trigger(target, key)
      }
      return result
    }
  }

  return new Proxy(target, handler)
```

-   依赖收集和触发更新:
    -   组件在`render`阶段，视图会读取数据对象上的值进行渲染，此时便触发了`Proxy`的`get`，由此触发对应的`track`函数，记录下了对应的`ReactiveEffect`，也就是依赖收集。
    -   `ReactiveEffect`其实就可以看作是组件的更新（`mount`是特殊的`update`），数据的变更触发`trigger`，`trigger`遍历调用`track`收集的对应的数据的`ReactiveEffect`，也就是对应有关联的组件的更新。`trigger`触发的组件的更新，在`render`阶段又触发了新一轮的`track`依赖收集，更新依赖


