# 使用useState注意事项

## 1.useState不适合复杂对象的更改

因为useState不能像setState那样进行合并更新，当使用useState第二个参数进行数据更新的时候，必须传入一个完整的结构，而不仅仅只是改变的那一部分。

## 2.useState异步回调的问题

当使用usestate对数据进行更新，并不能立刻获取到最新的数据。

```
const [name, setName] = useState('dx');
const handleTest = () => {
  console.log(name) // dx
  setName('dx1')
  console.log(name) // dx
}
```

解决方案

#### 一、配合useEffect使用

```
const [name, setName] = useState('dx');
const handleTest = () => {
  console.log(name) //dx
  setName('dx1')
  console.log(name)//dx
}
  
useEffect(() => {
  console.log(name) //dx1
},[name])
```

#### 二、创建一个新的变量保存最新的数据

```
const [name, setName] = useState('dx');
const handleTest = () => {
  console.log(name) //dx
  const newName = "dx1"
  setName(newName)
  console.log(newName) //dx1
}
```

## 3.根据hook的规则，使用useState的位置有限制

-   仅顶层调用 Hook ：不能在循环，条件，嵌套函数等中调用useState()。
-   在多个useState()调用中，渲染之间的调用顺序必须相同。
-   仅从React 函数调用 Hook:必须仅在函数组件或自定义钩子内部调用useState()。

## 4.使用useState，回调函数形式更改数据

```
const [a, setA] = useState({c:1})
/** oldA为之前的a,return为设置的新值 */
setA((oldA) => {
  return {c: oldA.c + 1}
})
```

## 5.useState存入的值只是该值的引用（引用类型）

```
const textObj = {name:'dx'}
const [useState1, setUseState1] = useState(textObj )
const [useState2, setUseState2] = useState(textObj )
/** usestate的操作不要放在函数的最外层，这里只是简单的代码展示，你可以将set操作放在某个函数里面 */
setUseState1((oldUseState1) => {
  oldUseState1.age = 18
  return {...oldUseState1}
})
useEffect(() => {
  /** 改变一个会导致两个都改变,深浅拷贝的问题 */
  console.log(useState1)  // {name: "dx", age: 18}
  console.log(useState2)  // {name: "dx", age: 18}
},[useState1])
```

解决的方案

```
const textObj = {name:'dx'}
const [useState1, setUseState1] = useState(textObj )
const [useState2, setUseState2] = useState(JSON.parse(JSON.stringify(textObj)))
/** usestate的操作不要放在函数的最外层，这里只是简单的代码展示，你可以将set操作放在某个函数里面 */
setUseState1((oldUseState1) => {
  oldUseState1.age = 18
  return {...oldUseState1}
})

useEffect(() => {
  /** 改变一个会导致两个都改变,深浅拷贝的问题 */
  console.log(useState1)  // {name: "dx", age: 18}
  console.log(useState2)  // {name: "dx"}
},[useState1])
```

## 6.useState，如果保存引用数据，useEffect检测不到变化？

```
const textObj = {name:'dx'}
const [useState1, setUseState1] = useState(textObj)
/** usestate的操作不要放在函数的最外层，这里只是简单的代码展示，你可以将set操作放在某个函数里面 */
setUseState1((oldUseState1) => {
  oldUseState1.age = 18
  return oldUseState1
}
useEffect(() => {
  console.log(useState1)  
},[useState1])
//结果是没有任何反应
```

解决方法

```
const textObj = {name:'dx'}
const [useState1, setUseState1] = useState(textObj)
/** usestate的操作不要放在函数的最外层，这里只是简单的代码展示，你可以将set操作放在某个函数里面 */
setUseState1((oldUseState1) => {
  oldUseState1.age = 18
  /** 返回一个新的对象,useEffectc才能检测得到 */
  return {...oldUseState1}
}
useEffect(() => {
  console.log(useState1)  // {name: "dx", age: 18}
},[useState1])
```

## 7.useState无法保存一个函数

你是否尝试着将函数的引用作为一个变量保存到useState中去呢？\
比如：

```
const testFunciton1 = () => {
  console.log({name: 'dx',age: '18'})
}
/** usestate保存函数测试 */
const [stateFunction, setstateFunction] = useState<() => void>(testFunciton1);
useEffect(() => {
 console.log(stateFunction)// {name: 'dx', age: 18}
}, [stateFunction])
```

代码中从未调用过testFunciton1 ，结果testFunciton1却被执行了\
useEffect打印出来的却是一个undefined。

稍微改动一下代码，再测试

```
const testFunciton1 = () => {
  console.log({name: 'dx',age: '18'})
  return {
    name: 'yx',
    age: '17'
  }
}
/** usestate保存函数测试 */
const [stateFunction, setstateFunction] = useState<() => void>(testFunciton1);
useEffect(() => {
 console.log(stateFunction)// {name: 'dx', age: 18} // {name: 'yx', age: 17}
}, [stateFunction])
```

很明显，在useState中，函数会自动调用，并且保存函数返回的值，而不能保存函数本身。

解决的方案\
使用useState不能保存函数，那么可以使用useCallback这个hook。

```
/** useCallback,使用参数与useEffect一致 */
const testFunction = useCallback(() => {
  // useCallback返回的函数在useCallbak中构建
  const testFunciton1 = () => {
    console.log({ name: 'dx', age: '18' });
    return {
      name: 'yx',
      age: '17',
    };
  };
  return testFunciton1;
}, []);
useEffect(() => {
  console.log(testFunction());// 打印的是函数
}, [testFunction]);
```