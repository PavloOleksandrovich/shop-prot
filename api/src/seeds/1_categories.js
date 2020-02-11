const Bluebird = require('bluebird');

const { duplicate } = require('../utils');
const { Category } = require('../models');
const categories = require('./data/category.json');

module.exports = async () => {
    await Category.deleteMany({});

    // create categories and set parent
    await Bluebird.mapSeries(Object.values(categories), async body => {
        const copied = duplicate(body);

        copied.parent = copied.parent
            ? await Category.findOne({name: copied.parent}) 
            : undefined;

        await Category.create(copied);
    });

    // set children
    return Bluebird.each(Object.values(categories), async ({name}) => {
        const category = await Category.findOne({name});
        
        category.children = await Category.find({parent: category});

        category.save();
    });
}
