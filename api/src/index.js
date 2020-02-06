const express = require('express');
const graphqlHTTP = require('express-graphql');
const cors = require('cors');

const config = require('./config');
const schema = require('./schemas');

const server = express();

server.use(cors());

server.use(config.API.GRAPHQL_ENDPOINT, graphqlHTTP({
    schema,
    graphiql: !config.SETTINGS.PRODUCTION
}));

server.listen(
    config.API.PORT,
    () => console.log(`Server running. Port [${config.API.PORT}], env [${config.SETTINGS.ENV}]`)
);
