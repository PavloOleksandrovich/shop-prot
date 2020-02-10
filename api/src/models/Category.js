const { Schema, model } = require('mongoose');

const schema = new Schema({
    name: {
        type: String,
        required: true
    },
    parent: {
        type: Schema.Types.ObjectId, 
        ref: 'category'
    },
    children: [{ 
        type: Schema.Types.ObjectId, 
        ref: 'category' 
    }],
    products: [{ 
        type: Schema.Types.ObjectId, 
        ref: 'product' 
    }]
});

module.exports = model('category', schema);
