const { Schema, model } = require('mongoose');

const schema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    }
});

module.exports = model('category', schema);
