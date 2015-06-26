var mongoose = require('mongoose');
var Product = require('mongoose').model('Product').schema

var CartSchema = mongoose.Schema({
	product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
	quantity: {  type: Number, min: 1, default: 1 }
})
// var CartSchema = mongoose.Schema({
// 	products: [ product: { type: mongoose.Schema.Type.ObjectId, ref: 'Product' },
// 		quantity: {  type: Number, min: 1 }
// 	],
// 	updatedAt: { type: Date, default: Date.now }
// })

module.exports = mongoose.model('Cart', CartSchema);