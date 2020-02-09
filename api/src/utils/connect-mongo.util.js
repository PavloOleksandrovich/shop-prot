const mongoose = require('mongoose')

module.exports = (config, callback) => {
    mongoose.connect(config.DATABASE.URI, {
        dbName: config.DATABASE.NAME,
        user: config.DATABASE.USERNAME,
        pass: config.DATABASE.PASSWORD,
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
        .then(() => {
            console.log('Mongo connected');

            if (!config.SETTINGS.PRODUCTION) {
                console.log(
                    `DB NAME: ${config.DATABASE.NAME}\n` +
                    `DB USER: ${config.DATABASE.USERNAME}\n` +
                    `DB PASSWORD: ${config.DATABASE.PASSWORD}`
                );
            }
            
            callback();
        })
        .catch((err) => {
            console.log('Cannot connect to mongo');
            console.log(err);
            process.exit(1);
        });
}
