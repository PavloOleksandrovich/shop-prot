const Bluebird = require('bluebird');

const { Category } = require('../models');
const categories = require('./data/category.json');

// TODO refactoring

const createRelations = async (body) => {
    if (!body.categories) {
        return;
    }

    const category = await Category.findOne({name: body.name});

    await Bluebird.each(Object.values(body.categories), async subBody => {
        category.children.push(category);
    });

    await category.save();

    return Bluebird.each(Object.values(body.categories), async subBody => {
        createRelations(subBody);
    });
};

const createCategory = async (body) => {
    if (body.category) {
        body.parent = await Category.findOne({name: body.category});
    }

    await Category.create(body);

    if (!body.categories) {
        return;
    }

    return Bluebird.each(Object.values(body.categories), async subBody => {
        createCategory(subBody);
    });
};

module.exports = async () => {
    await Category.deleteMany({});

    await Bluebird.each(Object.values(categories), async category => {
        createCategory(category);
    });

    return Bluebird.each(Object.values(categories), async category => {
        createRelations(category);
    });
}
