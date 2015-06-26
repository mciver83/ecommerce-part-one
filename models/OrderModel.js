var mongoose = require('mongoose');
var User = require('../models/UserModel.js')
// var Cart = require('mongoose').model('Cart').schema

var OrderSchema = mongoose.Schema({
	user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
	products: [{}],
	order_date: { type: Date, default: Date.now }
})

module.exports = mongoose.model('Order', OrderSchema);