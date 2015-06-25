var Product = require('../models/ProductModel.js')





module.exports = {
	

	createProduct: function(req, res){
		new Product(req.body).save(function(err, data){
			if(err){
				res.status(500).json(err);
			} else {
				res.send(data);
			};
		});
	},

	getProducts: function(req, res){
		Product.find(req.query)
		.exec(function(err, data){
			if(err){
				res.error(500).send(err);
			} else {
				res.send(data);
			}
		})
	},

	updateProduct: function(req, res){
		Product.findByIdAndUpdate(req.query.id, req.body, function(err, data){
			if(err){
				res.error(500).send('you need to enter the products id');
			} else {
				res.send(data);
			}
		})
	},

	deleteProduct: function(req, res){
		Product.findByIdAndRemove(req.query.id)
		.exec(function(err, data){
			if(err){
				res.error(500).send('you need to enter product id')
			} else {
				res.send(data)
			}
		})
	}
}