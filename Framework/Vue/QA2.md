## 1、当我们点击按钮的时候动态给 data 增加的成员是否是响应式数据，如果不是的话，如何把新增成员设置成响应式数据，它的内部原理是什么。

```js
let vm = new Vue({
 el: '#el'
 data: {
  o: 'object',
  dog: {}
 },
 method: {
  clickHandler () {
   // 该 name 属性是否是响应式的
   this.dog.name = 'Trump'
  }
 }
})
```

答：动态给 data 增加的成员不是响应式数据。  
因为`data`中的成员是在创建`Vue`对象的时候，通过`new Observer`将其设置为响应式数据的。内部利用`Object.defineProperty()`方法监听数据的变化。当`Vue`实例化完成后，再添加一个成员，此时仅仅是给`vm`上增加了一个对象属性，并不是响应式数据。

`Vue`官方给出的解决方案：  
对于已经创建的实例，`Vue`不允许动态添加根级别的响应式属性。但是可以使用`Vue.set(object, propertyName, value)`方法给已经定义过的对象添加响应式属性。在组件中还可以使用`vm.$set`实例方法。

`Vue.set`内部原理的源码位置是：`vue/src/core/observer/index.js`

```js
export function set (target: Array<any> | Object, key: any, val: any): any {
  ...
  // 判断当前target是不是数组，并且key的值是有效的数组索引
  // 这块代码意思是在修改数组时调用set方法时让我们能够触发响应的代码
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    // 类似$vm.set(vm.$data.arr, 0, 3)
    // 修改数组的长度, 避免索引>数组长度导致splcie()执行有误
    target.length = Math.max(target.length, key)
    // 利用数组的splice变异方法触发响应式
    target.splice(key, 1, val)
    return val
  }
  // target为对象, key在target或者target.prototype上。
  // 并且key不是Object原型上的属性
  // 说明这个key本来就在对象上面已经定义过了的，直接修改值就可以了，可以自动触发响应
  if (key in target && !(key in Object.prototype)) {
    target[key] = val
    return val
  }
  // 以上都不成立, 即开始给target创建一个全新的属性
  // vue给响应式对象都加了一个__ob__属性，如果一个对象有这个__ob__属性，
  // 那么就说明这个对象是响应式对象，我们修改对象已有属性的时候就会触发页面渲染
  // 获取Observer实例
  const ob = (target: any).__ob__
  // Vue 实例对象拥有 _isVue 属性, 即不允许给 Vue 实例对象添加属性
  // 也不允许Vue.set/$set 函数为根数据对象(vm.$data)添加属性
  // 即 当前的target对象是vue实例对象或者是根数据对象，那么就会抛出错误警告
  if (target._isVue || (ob && ob.vmCount)) {
    process.env.NODE_ENV !== 'production' && warn(
      'Avoid adding reactive properties to a Vue instance or its root $data ' +
      'at runtime - declare it upfront in the data option.'
    )
    return val
  }
  // target本身就不是响应式数据, 不需要响应，那么直接赋值返回即可
  if (!ob) {
    target[key] = val
    return val
  }
  // 进行响应式处理
  // 给新加的属性添加依赖，以后再直接修改这个新的属性的时候就会触发页面渲染
  defineReactive(ob.value, key, val)
  // 触发当前的依赖（这里的依赖依然可以理解成渲染函数），所以页面就会进行重新渲染
  ob.dep.notify()
  return val
}
```

## 2、请简述 Diff 算法的执行过程

`Diff`算法是一种通过同层的树节点进行比较的高效算法，避免了对树进行逐层搜索遍历。  
执行流程：  
1、执行`patch`函数传入新旧两个节点如：`patch(oldVnode, vnode)`  
2、判断两个新旧节点`oldVnode, vnode`是否相同。即将新旧节点`oldVnode, vnode`转化为`VNode`对象，判断节点的
`vnode.key`与`vnode.key`是否都相同。  
3、若两个节点不相同，在父节点插入新节点`vnode`，然后删除老节点`oldVnode`  
4、如果两个节点的`vnode.key`与`vnode.key`相同，就需要对比两个节点的文本、子节点（数组）是否相同，找出差异点。  
5、如果新老节点的文本不相同，只需要更新文本内容，同时判断老节点的子节点数组不为空的，删除老节点的所有子节点  
6、如果只有新节点有子节点数组，重置老节点的文本为空，添加新节点数组。  
7、如果只有老节点有子节点数组，删除所有子节点数组  
8、如果新老节点都有子节点数组，且子节点不相同（`vnode.key`与`vnode.key`都相同，但子节点数组不同）--复杂的逻辑  
9、这一步会发现是新老子节点数组对比，那么必定是一个循环遍历。以下是简单的伪代码实现流程如下，代码注释可能会帮助理解流程：  

```js
function init () {
    function updateChildren (oldCh, newCh) {
        // 以下参数有助于帮助理解遍历是下标的移动过程
        let oldStartIdx = 0;
        let newStartIdx = 0;
        let oldEndIdx = oldCh.length - 1;
        let oldStartVnode = oldCh[0];
        let oldEndVnode = oldCh[oldEndIdx];
        let newEndIdx = newCh.length - 1;
        let newStartVnode = newCh[0];
        let newEndVnode = newCh[newEndIdx];
        let oldKeyToIdx: KeyToIndexMap | undefined;
        let idxInOld: number;
        let elmToMove: VNode;
        let before: any;

        //同级别节点比较
        while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
            if (oldStartVnode == null) {
                oldStartVnode = oldCh[++oldStartIdx]; // Vnode might have been moved left
            } else if (oldEndVnode == null) {
                oldEndVnode = oldCh[--oldEndIdx];
            } else if (newStartVnode == null) {
                newStartVnode = newCh[++newStartIdx];
            } else if (newEndVnode == null) {
                newEndVnode = newCh[--newEndIdx];
            } else if (sameVnode(oldStartVnode, newStartVnode)) {
                // 同级节点且新、旧开始位置相同 比较好理解
                patchVnode(oldStartVnode, newStartVnode);
                oldStartVnode = oldCh[++oldStartIdx];
                newStartVnode = newCh[++newStartIdx];
            } else if (sameVnode(oldEndVnode, newEndVnode)) {
                // 同级节点且新、旧开始位置相同 比较好理解
                patchVnode(oldEndVnode, newEndVnode);
                oldEndVnode = oldCh[--oldEndIdx];
                newEndVnode = newCh[--newEndIdx];
            } else if (sameVnode(oldStartVnode, newEndVnode)) {
                // 同级节点且新、旧开始位置不同，如果相同交互位置
                // Vnode moved right
                patchVnode(oldStartVnode, newEndVnode);
                api.insertBefore();
                oldStartVnode = oldCh[++oldStartIdx];
                newEndVnode = newCh[--newEndIdx];
            } else if (sameVnode(oldEndVnode, newStartVnode)) {
                / 同级节点且新、旧开始位置不同，如果相同交互位置
                // Vnode moved left
                patchVnode(oldEndVnode, newStartVnode);
                api.insertBefore();
                oldEndVnode = oldCh[--oldEndIdx];
                newStartVnode = newCh[++newStartIdx];
            } else {
                // createKeyToOldIdx 获取所有老节点子节点数组的key  这可能是最麻烦的对比的位置
                if (oldKeyToIdx === undefined) {
                    oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx);
                }
                // 最后的理论场景还是将新节点插入到老节点的父元素
                // 找到老节点子节点数组key
                // 找到新开始节点位置的key 不为空 然后插入父元素
                idxInOld = oldKeyToIdx[newStartVnode.key as string];
                if (isUndef(idxInOld)) {
                    // New element
                    api.insertBefore();
                } else {
                    elmToMove = oldCh[idxInOld];
                    if (elmToMove.sel !== newStartVnode.sel) {
                        api.insertBefore();
                    } else {
                        patchVnode(elmToMove, newStartVnode);
                        oldCh[idxInOld] = undefined as any;
                        api.insertBefore();
                    }
                }
                newStartVnode = newCh[++newStartIdx];
            }
        }
        //循环结束的收尾工作
        if (oldStartIdx <= oldEndIdx || newStartIdx <= newEndIdx) {
            if (oldStartIdx > oldEndIdx) {
                before = newCh[newEndIdx + 1] == null ? null : newCh[newEndIdx + 1].elm;
                addVnodes();
            } else {
                removeVnodes(parentElm, oldCh, oldStartIdx, oldEndIdx);
            }
        }
    }

    function patchVnode (oldVnode, vnode) {
        if (oldVnode === vnode) return;
        if (isUndef(vnode.text)) {
            if (isDef(oldCh) && isDef(ch)) {
                // 新旧节点的子节点存在且不相同是，逐个对比子节点，如要遍历
                if (oldCh !== ch) updateChildren(elm, oldCh, ch, insertedVnodeQueue);
            } else if (isDef(ch)) {
                // 只有新节点的子节点数组有值，添加所有子节点
                // 重置文本参数
                if (isDef(oldVnode.text)) api.setTextContent(elm, "");
                addVnodes();
            } else if (isDef(oldCh)) {
                // 只有老节点的子节点数组有值 删除所有子节点
                removeVnodes();
            } else if (isDef(oldVnode.text)) {
                // 只有老节点的文本有值 重置参数
                api.setTextContent(elm, "");
            }
        } else if (oldVnode.text !== vnode.text) {
            if (isDef(oldCh)) {
                // 若老节点的子节点数组不为空 删除
                removeVnodes()
            }
            api.setTextContent(elm, vnode.text!);
        }
    }

    return patch(oldVnode, vnode) {
        if (!isVnode(oldVnode)) {
            // 初次将oldVnode转换成VNode节点
            oldVnode = emptyNodeAt(oldVnode)
        }
        // 比较两个节点是否相同 key && sel (即两个节点的标识是否相同)
        if (sameVnode(oldVnode, vnode)) {
            // 详情对比新旧两个节点参数
            patchVnode(oldVnode, vnode);
        } else {
            // 找到父元素是否存在
            // 创建新节点
            createElm(vnode);
            // 插入新节点，移除老节点
            if (parent !== null) {
                api.insertBefore(parent, vnode.elm!, api.nextSibling(elm));
                removeVnodes(parent, [oldVnode], 0, 0);
            }
        }
        return vnode
    }
}
```

梳理整个`Diff`对比流程：

## 3、模拟 VueRouter 的 hash 模式的实现，实现思路和 History 模式类似，把 URL 中的 # 后面的内容作为路由的地址，可以通过 hashchange 事件监听路由地址的变化。

`SPA(single page application)`:单一页面应用程序，只有一个完整的页面；它在加载页面时，不会加载整个页面，而是只更新某个指定的容器中内容。
单页面应用(`SPA`)的核心之一是: 更新视图而不重新请求页面;`vue-router`在实现单页面前端路由时，
提供了两种方式：`Hash`模式和`History`模式；根据`mode`参数来决定采用哪一种方式。

#### Hash 模式与 History 模式

-   `hash` 模式是基于锚点， 以及`onhashchange` 事件
-   `history` 模式是基于 `HTML5` 中的 `History API`
    `history.pushState()` `IE10` 以后才支持
    `history.replaceState()` \
-   `History` 需要服务器的支持,单页应用中，如果刷新页面，会向服务器发起请求，而服务器不存在这样的地址就会返回找不到该页面从而出现`404`, 在服务端应该除了静态资源外都返回单页应用的 `index.html`

#### 类图构造

#### 属性

-   `options`：记录构造函数中传入对象
-   `data`：一个响应式对象（`obeerver`实现），该对象中有一个属性`current`（记录当前路由地址，当路径改变的时候通过当前路径在 `routerMap` 对象中找到对应的组件，渲染 `router-view`）
-   `routeMap`：一个对象，记录路由地址和组件间的对应关系，路由规则会解析到这个对象中

#### 方法

-   `install`：静态方法，用来实现`vue`的插件机制并调用`init`方法
-   `constructor`：初始化上述属性
-   `init`：调用`createRouteMap`、`initComponents`、`initCurrent`、`initEvents`四个方法，目的是把不同使用途径的代码分割到不同的方法中实现
-   `createRouteMap`：把构造函数中传入的规则转化为键值对的模式存储到`routeMap`中，在`router-view`组件中会使用到`routeMap`
-   `initComponents`：用来创建`route-link`和`route-view`这两个组件
-   `initCurrent`：初始化不同模式下的当前路由地址（设置`this.data.current`属性）
-   `initEvents`：注册 `hashchange`、`popstate`事件。`hashchange`：监听 hash 改变,`popstate`: 监听浏览器的的历史记录 当历史记录条目更改时，将触发 popstate 事件

#### 代码实现

项目代码路径：`part3\fed-e-task-03-01\code\01-vue-router-code`

## 4、在模拟 Vue.js 响应式源码的基础上实现 v-html 指令，以及 v-on 指令。

-   `v-html`指令与`v-text`指令相似，将 `textContent` 更改为 `innerHTML`
-   `v-on` 指令在 `compiler.js`文件 将`/^@|^v-on:/` 修改为空,只保留后面的事件再处理相应指令

项目代码路径：`part3\fed-e-task-03-01\code\02-vue-reactive-code`

## 5、参考 Snabbdom 提供的电影列表的示例，利用 Snabbdom 实现类似的效果，如图：

项目代码路径：`part3\fed-e-task-03-01\code\03-snabbdom-demo`

## 6、Vue 3.0 性能提升主要是通过哪几方面体现的？

-   响应式系统升级：`Vue2.0`是在数据初始化之后，遍历对象的属性通过`Object.defineProperty`监听属性的变化。`vue3.0`采用`Proxy`代理对象拦截对象的访问，可以监听动态新增的属性、删除的属性、数组的索引和 length 属性。
-   编译优化：`Vue2.0`中渲染的最小单位是组件，会标记静态根节点，优化`diff`的过程，但静态节点还要通过`diff`。`Vue2.0`中会标记所有的静态节点，`diff`的过程只需要对比动态节点内容。
    -   `Fragments`(片段)：组件内支持多个同级的根标签
    -   静态提升：标签中仅仅是纯文本的节点,会提升到`render`函数外，再次`render`无须再次创建
    -   Patch flag: 标记不同类型的节点（如动态文本节点、有动态属性的节点），优化`diff`的过程
    -   缓存事件处理函数、组件按需动态导入
-   源码体积优化
    -   `Vue3.0`中移除了一些不常用`API`,如：`inline-template`、`filter`
    -   `Tree-shaking`(依赖`ESmodule`的模块化规范)

## 7、Vue 3.0 所采用的 Composition Api 与 Vue 2.x 使用的 Options Api 有什么区别？

-   `Vue2.0`中的`Options API`包含描述组件选项(`data`、`methods`等)的对象，在描述复杂组件时，同一功能的逻辑被拆分到不同的选项中，随着版本的迭代难以维护
-   `Vue3.0`中的`Compositon API`新增一组基于函数的`API`，可以更加灵活的组织同一个功能的代码片段
-   `Vue3.0`中的`setup(props, context){}`在实例被初始化之前执行，故在`setup`中的`this`上没有任何东西

## 8、Proxy 相对于 Object.defineProperty 有哪些优点？

-   `Proxy`直接监听对象而非属性,有多达`13`种拦截方法,如 `apply`、`ownKeys`、`has` 等等,这是`Object.defineProperty`不具备的
-   多层属性嵌套，在访问属性过程中处理下一级属性
-   默认监听动态添加的属性
-   默认监听属性的删除操作
-   默认监听数组索引和`length`属性



## 9、Vue 3.0 在编译方面有哪些优化？

-   `Vue2.0`中渲染的最小单位是组件，会标记静态根节点，优化`diff`的过程，但静态节点还要通过`diff`。`Vue2.0`中会标记所有的静态节点，`diff`的过程只需要对比动态节点内容。
-   `Fragments`(片段)：组件内支持多个同级的根标签
-   静态提升：标签中仅仅是纯文本的节点,会提升到`render`函数外，再次`render`无须再次创建
-   Patch flag: 标记不同类型的节点（如动态文本节点、有动态属性的节点），优化`diff`的过程
-   缓存事件处理函数、组件按需动态导入

## 10、Vue.js 3.0 响应式系统的实现原理？

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



