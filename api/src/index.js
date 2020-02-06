const express = require('express');

const config = require('./config');

const server = express();

server.use('/', (req, res) => {
    res.send('ok')
});

server.listen(
    config.SERVER.PORT,
    () => console.log(`Server running. Port [${config.SERVER.PORT}], env [${config.SETTINGS.ENV}]`)
);
