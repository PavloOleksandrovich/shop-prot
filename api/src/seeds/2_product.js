const Bluebird = require('bluebird');

const { Product, Category } = require('../models');
const products = require('./data/product.json');

module.exports = async () => {
    await Product.deleteMany({});

    await Bluebird.each(Object.keys(products), async name => {
        const category = await Category.findOne({name});

        await Bluebird.each(products[name], async product => {
            product.category = category
            const dbProduct = await Product.create(product);

            category.products.push(dbProduct);
        });

       category.save();
    });
}
