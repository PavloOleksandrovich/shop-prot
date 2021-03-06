const Bluebird = require('bluebird');

const { Product, Category } = require('../models');
const products = require('./data/product.json');

module.exports = async () => {
    await Product.deleteMany({});

    await Bluebird.each(Object.keys(products), async name => {
        const category = await Category.findOne({name});

        await Bluebird.each(products[name], async body => {
            body.category = category;

            const product = await Product.create(body);

            category.products.push(product);
        });

        category.save();
    });
}
