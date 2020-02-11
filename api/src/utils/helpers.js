const { join } = require('path');

const root = join.bind(this, __dirname, '../../');
const duplicate = (subject) => JSON.parse(JSON.stringify(subject));

module.exports = {
    root,
    duplicate
};
