// var User = require('mongoose').model('User').schema

var User = require('../models/UserModel.js')

module.exports = {
	
	// users
	createUser: function(req, res){
		new User(req.body).save(function(err, data){
			if(err){
				res.status(500).json(err);
			} else {
				res.send(data);
			};
		});
	},

	getUsers: function(req, res){
		User.find(req.query)
		.populate('cart.product')
		.exec(function(err, data){
			if(err){
				res.error(500).send(err);
			} else {
				res.send(data);
			}
		})
	},

	updateUser: function(req, res){
		User.findByIdAndUpdate(req.query.id, req.body, function(err, data){
			if(err){
				res.error(500).send('you need to enter the user id');
			} else {
				res.send(data);
			}
		})
	},

	deleteUser: function(req, res){
		User.findByIdAndRemove(req.query.id)
		.exec(function(err, data){
			if(err){
				res.error(500).send('you need to enter user id')
			} else {
				res.send(data)
			}
		})
	},

	// cart

	addCartItem: function(req, res){
		User.findByIdAndUpdate(req.params.userId, 
			{ $push: { 'cart': req.body }},
			{ safe: true, upsert: true},
			function(err, data){
				if(err){
					return res.status(500).send(err)
				} else {
					return res.send(data)
				}
			}
		)
	},

	updateCartItemQuantity: function(req, res){
	// req.body needs to be in form:
	// {
	// 	cart.$.quantity: 'number'
	// }
		User.update( { 'cart._id': req.params.cartItemId },
			{ $set: req.body }, function(err, data){
				if(err){
					return res.status(500).send(err)
				} else {
					return res.send(data)
				}
			})

		// User.update( { 'cart._id': req.params.cartItemId },
		// 	{ $set: { 'cart': req.body }},
		// 	function(err, data){
		// 		if(err){
		// 			res.status(500).send(err)
		// 		} else {
		// 			res.send(data)
		// 		}
		// 	})
	},

	deleteCartItem: function(req, res){
  		User.findByIdAndUpdate(req.params.userId,
   			{ $pull: { 'cart': {  _id: req.params.cartItemId } } },
   			function(err, data){
				if(err){
					return res.status(500).send(err)
				} else {
					return res.send(data)
				}
			}
    	)
	}
}