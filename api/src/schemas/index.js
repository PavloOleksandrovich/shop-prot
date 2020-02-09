const { 
    GraphQLSchema, 
    GraphQLObjectType, 
    GraphQLString, 
    GraphQLID, 
    GraphQLList
} = require('graphql');

const { Category, Product } = require('../models');

const ProductType = new GraphQLObjectType({
    name: 'Product',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        category: {
            type: CategoryType,
            resolve: async (parent) => {
                return await Category.findOne({_id: parent.category});
            }
        }
    })
});

const CategoryType = new GraphQLObjectType({
    name: 'Category',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        products: {
            type: new GraphQLList(ProductType),
            resolve: async (parent) => {
                return await Product.find({category: parent._id});
            }
        }
    })
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
