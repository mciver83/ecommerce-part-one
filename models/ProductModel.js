var mongoose = require('mongoose');

var ProductSchema = mongoose.Schema({
	product: { type: String, lowercase: true, required: true },
	description: { type: String, maxlength: 100, required: true},
	price: { type: Number, required: true, minimum: 0},
	date_created: { type: Date, default: Date.now}
})


module.exports = mongoose.model('Product', ProductSchema)





