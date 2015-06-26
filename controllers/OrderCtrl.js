var Order = require('../models/OrderModel.js');
var User = require('../models/UserModel.js');

module.exports = {
	
	// users
	createOrder: function(req, res){
		new Order({ 'user': req.params.userId,  'products': req.body }).save(function(err, data){
			if(err){
				res.status(500).json(err);
			} else {
				res.send(data);
			};
		});
	},

	getOrder: function(req, res){
		Order.find(req.query)
		.exec(function(err, data){
			if(err){
				res.error(500).send(err);
			} else {
				res.send(data);
			}
		})
	}

	// updateOrder: function(req, res){
	// 	User.findByIdAndUpdate(req.query.id, req.body, function(err, data){
	// 		if(err){
	// 			res.error(500).send('you need to enter the user id');
	// 		} else {
	// 			res.send(data);
	// 		}
	// 	})
	// },

	// deleteOrder: function(req, res){
	// 	User.findByIdAndRemove(req.query.id)
	// 	.exec(function(err, data){
	// 		if(err){
	// 			res.error(500).send('you need to enter user id')
	// 		} else {
	// 			res.send(data)
	// 		}
	// 	})
	// }
}
