const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');
const mongoose = require('mongoose');

// Construct a schema, using GraphQL schema language
const schema = require('./schema/schema')

// The root provides a resolver function for each API endpoint
const root = {
  hello: () => {
    return 'Hello world!';
  },
};



const app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));

mongoose.connect("mongodb://127.0.0.1:27017", { useNewUrlParser: true, useUnifiedTopology: true ,  useUnifiedTopology: true  }, (d,err) => {
    // console.log();
    console.log('Database Connected') 
})
mongoose.connection.once('open', () => {
 
  console.log('connected to database');

});
app.listen(4000);
console.log('Running a GraphQL API server at http://localhost:4000/graphql');