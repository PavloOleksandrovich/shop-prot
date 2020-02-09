const { 
    GraphQLSchema, 
    GraphQLObjectType, 
    GraphQLString, 
    GraphQLID, 
    GraphQLList
} = require('graphql');

const { Category } = require('../models');

const CategoryType = new GraphQLObjectType({
    name: 'Category',
    fields: {
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        description: { type: GraphQLString },
        createdAt: { type: GraphQLString },
        updatedAt: { type: GraphQLString }
    }
});

const Query = new GraphQLObjectType({
    name: 'Query',
    fields: {
        Categories: {
            type: new GraphQLList(CategoryType),
            resolve: async () => {
                return await Category.find();
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: Query,
});
