const { Schema, model } = require('mongoose');

const schema = new Schema({
    name: {
        type: String,
        required: true
    },
    products: [{ 
        type: Schema.Types.ObjectId, 
        ref: 'product'
    }]
});

module.exports = model('category', schema);
