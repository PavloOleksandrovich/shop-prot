const { Schema, model } = require('mongoose');

const schema = new Schema({
    name: {
        type: String,
        required: true
    },
    category: {
        type: Schema.Types.ObjectId, 
        ref: 'category',
        required: true
    }
});

module.exports = model('product', schema);
