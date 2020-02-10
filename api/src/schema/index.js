const { 
    GraphQLSchema, 
    GraphQLObjectType, 
    GraphQLString, 
    GraphQLID, 
    GraphQLList
} = require('graphql');

const { Category } = require('../models');

const ProductType = new GraphQLObjectType({
    name: 'Product',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        category: {
            type: CategoryType,
            resolve: (parent) => {
                return parent
                    .populate('category')
                    .execPopulate()
                    .then((product => {
                        return product.category;
                    }));
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
            resolve: (parent) => {
                return parent
                    .populate('products')
                    .execPopulate()
                    .then((category) => {
                        return category.products;
                    });
            }
        }
    })
});

const Query = new GraphQLObjectType({
    name: 'Query',
    fields: {
        Categories: {
            type: new GraphQLList(CategoryType),
            resolve: () => {
                return Category.find();
            }
        },

        // TODO try catch if category exist
        Category: {
            type: CategoryType,
            args: { name: { type: GraphQLString } },
            resolve: (parent, { name }) => {
                return Category.findOne({name});
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: Query,
});
