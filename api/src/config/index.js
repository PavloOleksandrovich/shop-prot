const { loadEnv } = require('../utils')
const ENV = loadEnv();

module.exports = {
    SETTINGS: {
        ENV,
        PRODUCTION: JSON.parse(process.env.PRODUCTION) || false
    },
    API: require('./server')
};
