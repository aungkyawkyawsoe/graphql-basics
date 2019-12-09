## Configure Babel In Your Project
```
npm i babel-cli babel-preset-env
npm i babel-plugin-transform-object-rest-spread
```
and then we gonna create a file with the name of `.babelrc` within the this file write this a little lines of code to configure `babel`

```
{
    "presets": [
        "env"
    ],
    "plugins": [
        "transform-object-rest-spread"
    ]
}
```
---

## Graphql 
#### Graphql schema eg:
```
const typeDefs = `
    type Query {
        hello: String!
        name: String!
        location: String!
        bio: String!
        // Url parameter
        greeting(name: String!, position: String!): String!
    }
`  
```
We can catch it!
```
greeting(parent, args, context, info) {
            if (args.name && args.position) return `Hello ${args.name}! You are my favorite ${args.position}`
            return 'Hello!'
        }
```

Here `!`, you have to return the respective data type value without `null` value

#### GraphQL types
- Scalar Types
    - `Integer`
    - `Boolean`
    - `Int`
    - `Float`
    - `ID`

### GraphQL Mutation
GraphQL is supported for `CREATE`,`READ`, `UPDATE` and `DELETE` data by using `Mutation`
#### TypeDefs
Type Definitons like this
```
    type Mutation {
        createUser(name: String!, email: String!, age: Int): User!  
    }

```

#### Resolvers
- Mutation is like a query, for resolvers like this
    - ```
        Mutation: { 
            createUser(parent, args, context, info) {
            const emailTaken = users.some(user => user.email === args.email)

                if(emailTaken) {
                    throw new Error('Email taken.')
                }

                const user = { 
                    id: uuid(),
                    name: args.name,
                    email: args.email,
                    age: args.age
                }

                users.push(user)

                return user
            }
        }
        ```
---
### Restart Server
File Changes restart server with `babel-node` and `nodemon`
In `package.json`
- `"start": "nodemon src/index.js --exec babel-node"`
---
### Nodemon file watcher extension add
We can add custom extensions
in the package.json 
- `-e ` or `--ext`
```
start: "nodemon server.js -e js,graphql"
```