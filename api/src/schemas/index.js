const { 
    GraphQLSchema, 
    GraphQLObjectType, 
    GraphQLString, 
    GraphQLID, 
    GraphQLList
} = require('graphql');

const categories = [
    {
        name: 'Clothes for Men',
        description: 'A monthly supply of trendy clothes for men.',
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        name: 'Clothes for Women',
        description: 'A monthly supply of trendy clothes for women.',
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        name: 'Accessories for Men',
        description: 'A monthly supply of trendy accessories for men',
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        name: 'Accessories for Women',
        description: 'A monthly supply of trendy accessories for women',
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        name: 'Clothes and Accessories for Men',
        description: 'A monthly supply of trendy clothes and accessories for men',
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        name: 'Clothes and Accessories for Women',
        description: 'A monthly supply of trendy clothes and accessories for women',
        createdAt: new Date(),
        updatedAt: new Date()
    }
];

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
            resolve() {
                return categories;
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: Query,
});
