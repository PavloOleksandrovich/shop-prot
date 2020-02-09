const Bluebird = require('bluebird');
const fs = require('fs');
const path = require('path');
const util = require('util');
const mongoose = require('mongoose');

const config = require('../config');
const { connectMongo } = require('../utils');

const readdir = util.promisify(fs.readdir);

connectMongo(config, async () => {
	const files = (await readdir(__dirname))
		.filter(file => {
			return file !== path.basename(__filename) && file !== 'data';
		});

	await Bluebird.each(files, async file => {
		await require(`./${file}`)();
	});

	mongoose.disconnect();
});
