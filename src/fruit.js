const mongoose = require('mongoose')
const Schema = mongoose.Schema

mongoose.connect('mongodb://localhost/mongoose_demo');

const fruitSchema = new Schema({

	index: {
		type: Number,
		required: true
	},
	name: {
		type: String,
		required: true
	},
	price: {
		type: Number,
		required: true
	},
	quantity: {
		type: Number,
		required: true
	}

})

module.exports = mongoose.model('Fruit', fruitSchema);