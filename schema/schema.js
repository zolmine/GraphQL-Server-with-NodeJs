const graphql = require('graphql');

// const pendingTransactions = require('./Transactions');
 
const {
    GraphQLObjectType, GraphQLString,
    GraphQLID, GraphQLInt,GraphQLSchema,
    GraphQLList,GraphQLNonNull
 } = graphql;

 

const pending = new GraphQLObjectType({
    name: 'pendingTransactions',
    //We are wrapping fields in the function as we don’t want to execute this until
    //everything is inilized. For example below code will throw an error AuthorType not
    //found if not wrapped in a function
    fields: () => ({
        id: { type: GraphQLID  },
        hash: { type: GraphQLString },
        toAdd: { type: GraphQLInt },
        gas: { type: GraphQLInt },
        gasPrice: { type: GraphQLInt },
        maxFeePerGas: { type: GraphQLInt },
        maxPriorityFeePerGas: { type: GraphQLInt },
        time: { type: GraphQLInt },
    })
 });
 
//Creating a new GraphQL Schema, with options query which defines query
//we will allow users to use it when they are making requests.
module.exports = new GraphQLSchema({
   query: pending
});