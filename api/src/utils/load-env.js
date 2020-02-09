const dotenv = require('dotenv');

const { root } = require('./helpers');

const loadEnv = () => {
    const { NODE_ENV } = process.env;
    
    const env =  NODE_ENV
        ? `${NODE_ENV}.env`
        : '.env';

    dotenv.config({ path: root(env) });

    return env;
};

module.exports = {
    loadEnv
};
