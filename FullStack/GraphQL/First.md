# GraphQL 入门
## GraphQL 相关支持
查看：https://graphql.org/code/。
- 后端
- 客户端
- 工具
- 服务
## GraphQL.js
GraphQL.js 是一个 GraphQL 的参考实现。
- GitHub 仓库：https://github.com/graphql/graphql-js
- 使用指南：https://graphql.org/graphql-js/

为了处理 GraphQL 查询，我们需要定义一个 Query 类型的 schema。我们还需要一个 API 根节点，为每个 API 端点提供一个名为 resolver 的函数。对于只返回 Hello world! 的 API，我们可以将此代码放在名为 server.js 的文件中：
```js
const { graphql, buildSchema } = require('graphql')

// 1. 使用 GraphQL schema 语法构建一个 schema
const schema = buildSchema(`
  type Query {
    hello: String
  }
`)

// 2. 根节点为每个 API 入口端点提供一个 resolver 函数
const root = {
  hello: () => {
    return 'Hello world!'
  }
}

// 3. 运行 GraphQL query '{ hello }' ，输出响应
graphql(schema, '{ hello }', root).then(response => {
  console.log(response) // 输出结果：{ data: { hello: 'Hello world!' } }
})
```
## Express GraphQL
在实际应用中，你可能不会在命令行工具里执行 GraphQL，而是会想从一个 API 服务器运行 GraphQL 查询。比如 Node.js Express。

1、安装依赖
```Shell
npm install express express-graphql graphql
```
2、示例代码
```js
const express = require('express')
const { graphqlHTTP } = require('express-graphql')
const { buildSchema } = require('graphql')

// 使用 GraphQL Schema Language 创建一个 schema
const schema = buildSchema(`
  type Query {
    hello: String
  }
`)

// root 提供所有 API 入口端点相应的解析器函数
const root = {
  hello: () => {
    return 'Hello world!'
  }
}

const app = express()

app.use(
  '/graphql',
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
  })
)

app.listen(4000, () => {
  console.log('Running a GraphQL API server at http://localhost:4000/graphql')
})

```

总结：
- 服务端通过定义的数据类型规定了可以提供的各种形式的数据
- 类型的字段要有对应的 resolver 提供对应的解析
- 客户端可以根据服务端定义的数据类型选择性查询需要的字段信息
## GraphQL 客户端
在有了 express-graphql 的情况下，你可以向 GraphQL 服务器上的入口端点发送一个 HTTP POST 请求，其中将 GraphQL 查询作为 JSON 载荷的 query 字段，就能调用 GraphQL 服务器。

JavaScript 请求查询示例如下：
```JavaScript
fetch('/graphql', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
  body: JSON.stringify({query: "{ hello }"})
})
  .then(r => r.json())
  .then(data => console.log('data returned:', data));
```
传递参数：
```JavaScript
var dice = 3;
var sides = 6;
var query = `query RollDice($dice: Int!, $sides: Int) {
  rollDice(numDice: $dice, numSides: $sides)
}`;

fetch('/graphql', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
  body: JSON.stringify({
    query,
    variables: { dice, sides },
  })
})
  .then(r => r.json())
  .then(data => console.log('data returned:', data));
```
## GraphQL 浏览器测试工具
- 开启方式
- 基本使用
    - 编写
    - 验证
    - 测试
- 键盘快捷键
    - 格式化查询：Shift-Ctrl-P
    - 合并查询：Shift-Ctrl-M
    - 执行查询：Ctrl-Enter
    - 自动完成：Ctrl-Space
- 查询文档
