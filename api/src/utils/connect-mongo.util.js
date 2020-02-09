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
            let message = 'Mongo connected'

            if (!config.SETTINGS.PRODUCTION) {
                message += 
                    `.Name [${config.DATABASE.NAME}], ` +
                    `user [${config.DATABASE.USERNAME}], ` +
                    `password: [${config.DATABASE.PASSWORD}]`
            }

            console.log(message);
            
            callback();
        })
        .catch((err) => {
            console.log('Cannot connect to mongo');
            console.log(err);
            process.exit(1);
        });
}
