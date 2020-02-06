const dotenv = require('dotenv');

const { root } = require('./helpers');

const loadEnv = () => {
    const { REACT_APP_NODE_ENV } = process.env;

    const env =  REACT_APP_NODE_ENV
        ? `${REACT_APP_NODE_ENV}.env`
        : '.env';

    dotenv.config({ path: root(env) });

    return env;
};

module.exports = {
    loadEnv
};
