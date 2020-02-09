const Bluebird = require('bluebird');

const { Category } = require('../models');
const categories = require('./data/category.json');

module.exports = async () => {
    await Category.deleteMany({});

    await Bluebird.each(Object.values(categories), async category => {
        await Category.create(category);
    });
}
