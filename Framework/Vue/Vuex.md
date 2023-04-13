---
outline: deep
---
# Vuex

## 一、VueX 回顾

#### 1、vuex 是什么？

-   `Vuex`是专门为`Vue.js`设计的状态管理库
-   `Vuex`采用集中式的方式存储需要共享的状态
-   `Vuex`的作用是进行状态管理，解决复杂组件通信，数据共享
-   `Vuex`集成到了`devtools`中，提供了`time-travel`时光旅行,历史回滚功能

#### 2、Vuex 核心概念

-   `state`:提供唯一的公共数据源，所有共享的数据都要统一放到`Store` 的 `State` 中进行存储。
-   `mutation`:用于变更 `Store`中 的数据。只能通过 `mutation` 变更 `Store` 数据，不可以直接操作 `Store` 中的数据。通过这种方式虽然操作起来稍微繁琐一些，但是可以集中监控所有数据的变化。
-   `action`:用于处理异步任务。如果通过异步操作变更数据，必须通过 `Action`，而不能使用 `Mutation`，但是在 `Action` 中还是要通过触发 `Mutation` 的方式间接变更数据。
-   `Getter`:用于对 `Store` 中的数据进行加工处理形成新的数据。`Getter` 可以对 `Store` 中已有的数据加工处理之后形成新的数据，类似 `Vue` 的**计算属性**。`Store` 中数据发生变化，`Getter` 的数据也会跟着变化。

#### 3、总结使用

-   `mutations`中的函数第一个参数都是`state`,后面只能接收一个参数,如果要传递多个参数,可以使用对象来传递参数,使用时使用解构获取参数
-   `actions`中接收参数`context`代表`new`出来的`new Vuex.Store`实例
-   `getters`中接收参数`state`
-   `state`相当于`vue`中的`data`
-   `mutations`相当于`vue`中的`methods`
-   `actions`是异步的`methods`,
-   `getters`相当于`vue`中的`computed`属性
-   `state`,`getters`可以放到`vue`的`computed`中
-   `mutations`,`actions`放在`vue`的`methods`中

#### 4、Vuex 严格模式

```js
export default new Vuex.Store({
    strict: process.env.NODE_ENV !== "production",
    state: {
        count: 0,
        msg: "Hello Vuex",
    },
    getters: {
        reverseMsg(state) {
            return state.msg.split("").reverse().join("");
        },
    },
    mutations: {
        increate(state, payload) {
            state.count += payload;
        },
    },
    actions: {
        increateAsync(context, payload) {
            setTimeout(() => {
                context.commit("increate", payload);
            }, 2000);
        },
    },
    modules: {
        products,
        cart,
    },
});
```

严格模式会深度检查状态树，查找不合规的状态改变，耗性能，不建议生产环境开启。

## 二、模拟 Vuex

#### 1、实现思路

-   实现`install`方法
    -   `Vuex`是`Vue`的一个插件，所以和模拟`VueRouter`类似，先实现`Vue`插件约定的 `install`方法,Vue.use 的时候会调用这个方法。
-   实现`Store`类
    -   实现构造函数，接收`options`
    -   `state`的响应化处理
    -   `getter`的实现
    -   在视图中修改状态可以直接调用`$store.commit`提交`mutation`
    -   在视图中执行异步操作可以调用`$store.dispatch`分发`action`

#### 2、实现过程

-   `install`中需要做的事情
    -   需要把创建 `Vue` 实例的时候传入的 `store` 对象注入到 `Vue` 原型上的 `$store`, 在所有组件中可以直接通过 `this.$store` 来获取到`vuex`中的仓库, 从而可以在所有组件中共享状态.
    -   在 `install` 中我们获取不到 `Vue` 实例, 所以这里通过混入 `beforeCreate` 来获取 `Vue` 实例从而拿到选项中的 `store` 对象
    -   注册插件的时候会混入`beforeCreate`, 当创建`Vue`的根实例的时候就会把`store`注入到所有`Vue`实例上
-   完整代码

```js
let _Vue = null;
class Store {
    constructor(options) {
        // 解构options参数
        const {
            // 防止用户未传入 设置默认对象
            state = {},
            getters = {},
            mutations = {},
            actions = {},
        } = options;
        // 设置state的响应式
        this.state = _Vue.observable(state);
        this.getters = Object.create(null);
        /* 
      此处不直接 this.getters = getters，是因为下面的代码中要方法 getters 中的 key
      如果这么写的话，会导致 this.getters 和 getters 指向同一个对象
      当访问 getters 的 key 的时候，实际上就是访问 this.getters 的 key 会触发 key 属性的 getter
      会产生死递归
    */
        Object.keys(getters).forEach((key) => {
            Object.defineProperty(this.getters, key, {
                // 返回指定getter方法，并传递state参数
                get: () => getters[key](state),
            });
        });
        // 初始化mutations
        this._mutations = mutations;
        // 初始化actions
        this._actions = actions;
    }

    commit(type, payload) {
        this._mutations[type](this.state, payload);
    }

    dispatch(type, payload) {
        this._actions[type](this, payload);
    }
}

function install(Vue) {
    _Vue = Vue;
    _Vue.mixin({
        // 混入到beforeCreate阶段
        beforeCreate() {
            // 如果是组件实例 没有store选项就不需要挂载原型
            if (this.$options.store) {
                _Vue.prototype.$store = this.$options.store;
            }
        },
    });
}

export default {
    Store,
    install,
};
```
