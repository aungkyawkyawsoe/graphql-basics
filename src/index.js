import { GraphQLServer } from 'graphql-yoga'
import uuid from 'uuid/v4';


const users = [
    {
        id: '1',
        name: 'Aung Aung',
        email: 'aung@gmail.com',
        age: 18
    },
    {
        id: '2',
        name: 'Maung Maung',
        email: 'mg@gmail.com',
        age: 20
    },
    {
        id: '3',
        name: 'Soe Soe',
        email: 'soe@gmail.com',
        age: 21
    },
    {
        id: '4',
        name: 'Yadana',
        email: 'yadana@gmail.com',
        age: 20
    },
    {
        id: '5',
        name: 'Alice',
        email: 'alice@gmail.com',
        age: 19
    }
];

const posts = [
    {
        id: '10',
        title: 'GraphQL',
        body: 'This is a query language.',
        published: true,
        author: '1'
    },
    {
        id: '11',
        title: 'PHP',
        body: 'Server side language and stands for PHP hyper text processor',
        published: false,
        author: '3'

    },
    {
        id: '12',
        title: 'Android',
        body: 'Android is a mobile phone OS, can develop with Android Studio.',
        published: true,
        author: '1'

    },
    {
        id: '13',
        title: 'Javascript',
        body: 'JavaScript is scripting language for both server and client side applications.',
        published: false,
        author: '2'
    }
];

const comments = [
    {
        id: '101',
        text: 'This is great!',
        author: '1',
        post: '10'
    },
    {
        id: '102',
        text: 'A little bit tricky',
        author: '3',
        post: '11'
    },
    {
        id: '103',
        text: 'Awesome! I love it.',
        author: '2',
        post: '12'
    },
    {
        id: '104',
        text: 'Not bad, this is a trending language!',
        author: '4',
        post: '13'
    },
    {
        id: '105',
        text: 'PHP, now we don\'t want to use this, because we want to write the code both server and client side application with one programming language.',
        author: '5',
        post: '11'
    }
]


// Types defnitions (schema)
const typeDefs = `
    type Query {  
        users(query: String): [User!]!
        posts(query: String): [Post!]!      
        comments: [Comment!]!
        me: User!         
        post: Post!     
    } 

    type User {
        id: ID!
        name: String!
        email: String!
        age: Int
        posts: [Post!]!
        comments: [Comment!]!
    }

    type Mutation {
        createUser(name: String!, email: String!, age: Int): User!  
        createPost(title: String!, body: String!, published: Boolean!, author: ID!): Post!
    }
   

    type Post {
        id: ID!
        title: String!
        body: String!
        published: Boolean!        
        author: User!
        comments: [Comment!]!
    }

    type Comment {
        id: ID!,
        text: String!
        author: User!
        post: Post!
    }
`

// Resolvers 
const resolvers = {
    Query: {
        users(parent, args, context, info) {
            if (!args.query) return users;
            return users.filter(user => user.name.toLowerCase().includes(args.query.toLowerCase()));
        },
        posts(parent, args, context, info) {
            if (!args.query) return posts;
            return posts.filter(post => (post.title + post.body).toLowerCase().includes(args.query.toLowerCase()));
        },
        me() {
            return {
                id: '123089',
                name: "Aung",
                email: "aung@test.com"
            }
        },
        post() {
            return {
                id: 'ps-01',
                title: 'Some post title',
                body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione mollitia alias expedita aspernatur quod, quam architecto aliquid cupiditate harum labore, perferendis qui ducimus voluptates dolores quia, consequuntur et maxime esse!',
                published: false
            }
        },
        comments() {
            return comments
        }
    },
    Mutation: {
        createUser(parent, args, context, info) {
            const emailTaken = users.some(user => user.email === args.email)

            if (emailTaken) {
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
        },
        createPost(parent, args, context, info) {
            const userExists = users.some(user => user.id === args.author)

            if(!userExists) {
                throw new Error('User not found')
            }

            const post = {
                id: uuid(),
                title: args.title,
                body: args.body,
                published: args.published,
                author: args.author
            }

            posts.push(post)

            return post
        }
    },
    Post: {
        author(parent, args, context, info) {
            return users.find(user => user.id === parent.author)
        },
        comments(parent, args, context, info) {
            return comments.filter(comment => comment.post === parent.id)
        }
    },
    User: {
        posts(parent, args, context, info) {
            return posts.filter(post => post.author === parent.id)
        },
        comments(parent, args, context, info) {
            return comments.filter(comment => comment.author === parent.id)
        }
    },
    Comment: {
        author(parent, args, context, info) {
            return users.find(user => user.id === parent.author)
        },
        post(parent, args, context, info) {
            return posts.find(post => post.id === parent.post)
        }
    }
}

const server = new GraphQLServer({
    typeDefs,
    resolvers
})

server.start(() => {
    console.log('The server is up!')
})


