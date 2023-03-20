---
outline: deep
---

# QA 问答

##  一、简答题

###  1. 简述 Graphql （结合Express ）是如何使用的？
- 运行一个 Express GraphQL 服务器，首先需要安装两个依赖库
```
    npm install express express-graphql graphql --save
```

- 使用 express 模块来运行一个服务器，然后不再直接调用 graphql 函数进行查询，而是使用 express-graphql 库来构建 GraphQL API 服务器，响应入口端点为 “/graphql” 的 HTTP 请求
```js
var express = require('express');
var { graphqlHTTP } = require('express-graphql');
var { buildSchema } = require('graphql');
 
// 使用 GraphQL Schema Language 创建一个 schema
var schema = buildSchema(`
  type Query {
    hello: String
  }
`);
 
// root 提供所有 API 入口端点相应的解析器函数
var root = {
  hello: () => {
    return 'Hello world!';
  },
};
 
var app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));
app.listen(4000);
console.log('Running a GraphQL API server at http://localhost:4000/graphql');
```

- 用以下命令启动该 GraphQL 服务器
```
node server.js
```
由于我们对 graphqlHTTP 设置 graphiql: true，你可以使用 GraphiQL 工具来手动执行 GraphQL 查询。若使用浏览器浏览 `http://localhost:4000/graphql`，你会看到一个界面能让你输入查询语句。向 GraphQL 查询 { hello }，返回结果为 { data: { hello: 'Hello world!' } }

参考：https://graphql.bootcss.com/graphql-js/running-an-express-graphql-server/

###  2. 简述 Apollo server 的基本使用。
- [apollo-server](https://www.apollographql.com/docs/apollo-server/getting-started)是一个在nodejs上构建grqphql服务端的web中间件。支持express，koa ，hapi等框架，根据不同的web框架进行安装。
- 导入 apollo-server
```
const { ApolloServer, gql } = require("apollo-server");
```
- 定义 schema 和 resolver
```js
// 定义schema
const typeDefs = gql`
  type Query {
    foo: String
  }
`;
// 定义resolver
const resolver = {
  // 所以schema中Query内部的字段都会调用这里的Query对象内部对应的方法
  Query: {
    foo: () => {
      return "bar";
    },
  },
};
```
- 创建 GraphQL Server，开启 web 服务
```js
const server = new ApolloServer({ typeDefs, resolvers })

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`)
})
```

###  3. 从 MongoDB 中获取数据的流程。
- pollo Server 可以从多给位置获取数据。Apollo提供了一个 DataSource 类，我们可以扩展该类以处理特定类型的数据源的交互逻辑。
- 连接到数据库可以采用[apollo-datasource-mongodb](https://github.com/GraphQLGuide/apollo-datasource-mongodb/)。这个包使用DataLoader进行批处理和每个请求的记忆缓存。它还可以选择（如果您提供 a ttl）共享应用程序级缓存。
- 使用 apollo-datasource-mongodb 包将 MongoDB 数据映射到 GraphQL 数据层
```js
const { MongoDataSource } = require('apollo-datasource-mongodb')

class Users extends MongoDataSource {
  getUser(userId) {
    return this.findOneById(userId)
    // this.model // 访问数据模型对象
  }
  getUsers () {
    return this.model.find()
  }
}

module.exports = Users
```
- 定义mongoose的数据模型scheme，主要针对数据库的。（不同于GraphQL的scheme，针对客户端用户的）
```js 
// 08\data-sources\user.js
const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  name: String,
  age: Number
})

module.exports = mongoose.model('User', userSchema)
```
- 使用mongoose进行数据的管理
```js
// 08\models\index.js
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/test', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function () {
  // we're connected!
  console.log('连接数据库成功')
})

module.exports = {
  User: require('./user')
}
```
- ApolloServer中使用，在创建 server 时，传入 dataSources 选项
```js 
// 1. 定义 schema
const typeDefs = gql`
  type User {
    _id: ID!,
    name: String!,
    age: Int
  }

  type Query {
    users: [User!]
    user(id: ID!): User
  }
`

// 2. 定义 resolver
const resolvers = {
  // 所有的 Query 都走这里
  Query: {
    async users (parent, args, { dataSources }) {
      const users = await dataSources.users.getUsers()
      return users
    },
    async user (parent, { id }, { dataSources }) {
      const user = await dataSources.users.getUser(id)
      return user
    }
  }
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
  // 任何 GraphQL 请求都会经过这里
  // 该函数接收一个参数：Request 请求对象
  context (req) {
    return { // 返回对象，自定义数据，后续的每个 resolver 都可以直接获取
      foo: 'bar'
    }
  },
  dataSources () {
    return {
      users: new Users(User)
    }
  }
})
```

###  二、代码题

- 实现一个 GraphQL 版本的完整 realworld API。
    - 代码地址：https://github.com/attraction11/lagoufed-e-task/tree/master/part5/fed-e-task-05-04/code/realworld-graphql
    - 线上接口查询地址：http://106.75.75.186:7003/graphql


###  示例用户
```
{
  "user": {  
    "username": "aaa",
    "email": "aaa@163.com",
    "password": "11111111"
  }
}
```

###  查询接口语句
```
# 注册用户
# mutation createUser($user: CreateUserInput) {
#   createUser(user: $user) {
#     user {
#       email
#       username
#       token
#     }
#   }
# }

# 登录用户
# mutation login($user: LoginInput) {
#   login(user: $user) {
#     user {
#       email
#       username
#       token
#     }
#   }
# }

# 查询当前用户
# query {
#   currentUser {
#     email
#     username
#   }
# }

# 更新用户信息
# mutation updateUser ($user: UpdateUserInput) {
#   updateUser(user: $user) {
#     user {
#       username 
#     	bio
#     }
#   }
# }
     
# 创建文章
# mutation createArticle($article: CreateArticleInput) {
#   createArticle(article: $article) {
#     article {
#       _id
#       title
#       description
#       body
#       author {
#         email
#       }
#     }
#   }
# }

# 获取文章列表
# query {
#   articles (offset: 0, limit: 2) {
#     articles {
#       _id
#       title
#     }
#     articlesCount
#   }
# }

# 查询单个文章
# query {
#   article (id: "631efd1214d14060ccf8ad77") {
#     title
#   } 
# }

# 更新单个文章
# mutation updateArticle($article: CreateArticleInput) {
#   updateArticle(id: "631efd1214d14060ccf8ad77", article: $article) {
#     article {
#       _id
#       title
#       description
#       body
#       author {
#         email
#       }
#     }
#   }
# }

# 删除单个文章
# mutation {
#   deleteArticle(id: "631efe3514d14060ccf8ad80") {
#     article {
#       title
#     }
#   }
# }
```

