const { loadEnv } = require('../utils')
const ENV = loadEnv();

module.exports = {
    SETTINGS: {
        ENV,
        PRODUCTION: process.env.REACT_APP_PRODUCTION
    },
    SERVER: require('./server')
};
