const Bluebird = require('bluebird');

const { Product } = require('../models');
const products = require('./data/product.json');

module.exports = async () => {
    await Product.deleteMany({});

    await Bluebird.each(Object.keys(products), async category => {
        await Bluebird.each(products[category], async product => {
            await Product.create(product);
        });
    });
}
