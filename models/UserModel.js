var mongoose = require('mongoose');
var Product = require('../models/ProductModel.js');
var Cart = require('../models/CartModel.js')

var UserSchema = mongoose.Schema({
	name: { type: String, required: true },
	cart: [{
		product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
		quantity: {  type: Number, min: 1, default: 1 }
	}],
	createdAt: { type: Date, default: Date.now },
	updatedAt: { type: Date, default: Date.now }
})

module.exports = mongoose.model('User', UserSchema);