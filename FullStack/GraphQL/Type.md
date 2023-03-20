# GraphQL 模式和类型
每一个 GraphQL 服务都会定义一套类型，用以描述你可能从那个服务查询到的数据。每当查询到来，服务器就会根据 schema 验证并执行查询。

GraphQL 定义了自己的类型语言，称之为 “GraphQL schema language” —— 它和 GraphQL 的查询语言很相似，让我们能够和 GraphQL schema 之间可以无语言差异地沟通。
## Query 类型
- Query 类型是客户端默认的查询类型
- Query 类型必须存在
- Query 是唯一的，不能重复定义
## 标量类型
> 所谓的标量类型也就是基本类型。
GraphQL schema language 支持的标量类型有
- Int：有符号 32 位整数。
- Float：有符号双精度浮点值。
- String：UTF‐8 字符序列。
- Boolean：true 或者 false。
- ID：ID 标量类型表示一个唯一标识符，通常用以重新获取对象或者作为缓存中的键。ID 类型使用和 String 一样的方式序列化；然而将其定义为 ID 意味着并不需要人类可读性。

类型的作用：
- 约束数据格式，防止出现不合理数据
- 如果数据可以合理的转换为对应的数据类型则不会报错，例如字符串 "123" 可以被合理的转换为数字 123

这些类型都直接映射 JavaScript，所以你可以直接返回原本包含这些类型的原生 JavaScript 对象。下面是一个展示如何使用这些基本类型的示例：
```js
var express = require('express');
var graphqlHTTP = require('express-graphql');
var { buildSchema } = require('graphql');

// 使用 GraphQL schema language 构建一个 schema
var schema = buildSchema(`
  type Query {
    quoteOfTheDay: String
    random: Float!
    rollThreeDice: [Int]
  }
`);

// root 将会提供每个 API 入口端点的解析函数
var root = {
  quoteOfTheDay: () => {
    return Math.random() < 0.5 ? 'Take it easy' : 'Salvation lies within';
  },
  random: () => {
    return Math.random();
  },
  rollThreeDice: () => {
    return [1, 2, 3].map(_ => 1 + Math.floor(Math.random() * 6));
  },
};

var app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));
app.listen(4000);
console.log('Running a GraphQL API server at localhost:4000/graphql');
```
## 对象类型
服务端：
```js
var express = require('express');
var graphqlHTTP = require('express-graphql');
var { buildSchema } = require('graphql');

// 用 GraphQL schema language 构造一个 schema
var schema = buildSchema(`
  type RandomDie {
    numSides: Int!
    rollOnce: Int!
    roll(numRolls: Int!): [Int]
  }

  type Query {
    getDie(numSides: Int): RandomDie
  }
`);

// 该类继承 RandomDie GraphQL 类型
class RandomDie {
  constructor(numSides) {
    this.numSides = numSides;
  }

  rollOnce() {
    return 1 + Math.floor(Math.random() * this.numSides);
  }

  roll({numRolls}) {
    var output = [];
    for (var i = 0; i < numRolls; i++) {
      output.push(this.rollOnce());
    }
    return output;
  }
}

// root 规定了顶层的 API 入口端点
var root = {
  getDie: ({numSides}) => {
    return new RandomDie(numSides || 6);
  }
}

var app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));
app.listen(4000);
console.log('Running a GraphQL API server at localhost:4000/graphql');
```
总结：
- 花括号中是对象的字段信息
- 属性名称是自定义的
- 属性名后面的类型为 GraphQL 内置的标量类型
- GraphQL 使用 # 注释
查询语法示例：
```GraphQL
{
  getDie(numSides: 6) {
    rollOnce
    roll(numRolls: 3)
  }
}
```
## 列表类型
```GraphQL
# 这表示数组本身可以为空，但是其不能有任何空值成员。
myField: [String!]

# 不可为空的字符串数组
myField: [String]!

# 数组本身不能为空，其中的数据也不能为空
myField: [String!]!
```
## 非空类型
- 默认情况下，每个类型都是可以为空的，意味着所有的标量类型都可以返回 null
- 使用感叹号可以标记一个类型不可为空，如 String! 表示非空字符串
- 如果是列表类型，使用方括号将对应类型包起来，如 [Int] 就表示一个整数列表。
## 枚举类型
也称作枚举（enum），枚举类型是一种特殊的标量，它限制在一个特殊的可选值集合内。这让你能够：
1. 验证这个类型的任何参数是可选值的的某一个
2. 与类型系统沟通，一个字段总是一个有限值集合的其中一个值。

下面是一个用 GraphQL schema 语言表示的 enum 定义：
```GraphQL
enum Episode {
  NEWHOPE
  EMPIRE
  JEDI
}
```
这表示无论我们在 schema 的哪处使用了 Episode，都可以肯定它返回的是 NEWHOPE、EMPIRE 和 JEDI 之一。

注意，各种语言实现的 GraphQL 服务会有其独特的枚举处理方式。对于将枚举作为一等公民的语言，它的实现就可以利用这个特性；而对于像 JavaScript 这样没有枚举支持的语言，这些枚举值可能就被内部映射成整数值。当然，这些细节都不会泄漏到客户端，客户端会根据字符串名称来操作枚举值。
## 传递参数
- 基本用法
- 非空参数
- 查询多个参数
- 参数的默认值
- 客户端请求带有参数的查询

```js
var express = require('express');
var graphqlHTTP = require('express-graphql');
var { buildSchema } = require('graphql');

// 使用 GraphQL schema language 构造一个 schema
var schema = buildSchema(`
  type Query {
    rollDice(numDice: Int!, numSides: Int): [Int]
  }
`);

// root 为每个端点入口 API 提供一个解析器
var root = {
  rollDice: ({numDice, numSides}) => {
    var output = [];
    for (var i = 0; i < numDice; i++) {
      output.push(1 + Math.floor(Math.random() * (numSides || 6)));
    }
    return output;
  }
};

var app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));
app.listen(4000);
console.log('Running a GraphQL API server at localhost:4000/graphql');
```
客户端请求示例：
```js
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
## Mutation 类型
## Input 类型
## 客户端操作
获取所有文章列表：
```js
axios({
  method: 'POST', // GraphQL 的请求方法必须是 POST
  url: 'http://localhost:4000/graphql',
  data: {
    query: `
      query getArticles {
        articles {
          title
        }
      }
		`
  }
}).then(res => {
  console.log(res.data)
})

```
获取单个文章：
```js
axios({
  method: 'POST', // GraphQL 的请求方法必须是 POST
  url: 'http://localhost:4000/graphql',
  data: {
    query: `
      query getArticles($id: ID!) {
	      article(id: $id) {
	      id
	      title
	      }
	    }
		`,
    variables: {
      id: 2
    }
  }
}).then(res => {
  console.log(res.data)
})

```
添加文章：
```js
axios({
  method: 'POST', // GraphQL 的请求方法必须是 POST
  url: 'http://localhost:4000/graphql',
  data: {
    query: `
      mutation createArteicle($article: CreateArticleInput) {
        createArticle(article: $article) {
          id
          title
          body
        }
      }
    `,
    variables: {
      article: {
        title: 'aaa',
        body: 'bbb'
      }
    }
  }
}).then(res => {
  console.log(res.data)
})


```
更新文章：
```js
axios({
  method: 'POST', // GraphQL 的请求方法必须是 POST
  url: 'http://localhost:4000/graphql',
  data: {
    query: `
      mutation updateArteicle($id: ID!, $article: UpdateArticleInput) {
        updateArticle(id: $id, article: $article) {
          id
          title
          body
        }
      }
    `,
    variables: {
      id: 2,
      article: {
        title: 'aaa',
        body: 'bbb'
      }
    }
  }
}).then(res => {
  console.log(res.data)
})


```

删除文章：
```JavaScript
axios({
  method: 'POST', // GraphQL 的请求方法必须是 POST
  url: 'http://localhost:4000/graphql',
  data: {
    query: `
      mutation deleteArteicle($id: ID!) {
        deleteArticle(id: $id) {
          success
        }
      }
    `,
    variables: {
      id: 2
    }
  }
}).then(res => {
  console.log(res.data)
})
```
