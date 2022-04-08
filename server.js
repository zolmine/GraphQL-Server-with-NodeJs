const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { query } = require('./schema/query')
const { mutation } = require('./schema/mutation')

const schema = require('./schema/schema');
const { db } = require('./db');
db.once('open', () => {
    console.log('Connected to MongoDB');
});

db.on('error', (err) => {
    console.log('Error connecting to MongoDB', err);
    process.exit(1);
});

const resolvers = {
  query,
  mutation
}

const app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: resolvers,
  graphiql: true,
}));

app.listen(4000);
console.log('Running a GraphQL API server at http://localhost:4000/graphql');