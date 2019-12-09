import { GraphQLServer, PubSub } from "graphql-yoga";
import db from './db';
import Query from './resolvers/Query';
import User from './resolvers/User';
import Comment from './resolvers/Comment';
import Mutation from './resolvers/Mutation';
import Post from './resolvers/Post';
import Subscription from './resolvers/Subscription';

const pubsub = new PubSub();

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers: {
    Query,
    User,
    Mutation,
    Comment,
    Post,
    Subscription   
  },
  context: {
    db,
    pubsub
  }
});

server.start(() => {
  console.log("The server is up!");
});