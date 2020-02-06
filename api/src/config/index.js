const { loadEnv } = require('../utils')
const ENV = loadEnv();

module.exports = {
    SETTINGS: {
        ENV,
        PRODUCTION: JSON.parse(process.env.REACT_APP_PRODUCTION) || false
    },
    API: require('./server')
};
