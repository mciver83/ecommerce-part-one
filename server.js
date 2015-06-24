var express = require('express'),
	app = express(),
	bodyParser = require('body-parser'),
	cors = require('cors'),
	mongojs = require('mongojs'),
	port = 9001;
	

var db = mongojs('ecommerce', ['products']);



app.use(bodyParser.json());
app.use(cors());

app.post('/api/products', function(req, res){

	db.products.save(req.body, function(err, response){
		if(err){
			res.status(500).json(err);
		} else {
			res.send(response);
		};
	});
});

app.get('/api/products', function(req, res){
	if(req.query._id){
    	req.query._id = mongojs.ObjectId(req.query._id);
    }
	db.products.find(req.query, function(err, response){
		if(err){
			res.status(500).json(err);
		} else {
			res.send(response);
		};
	});
});

app.put('/api/products', function(req, res){
	if(!req.query.id){
		res.status(500).send('you must enter the id of the product you wnat to update')
	} else {
		db.products.findAndModify({
			query: { _id: mongojs.ObjectId(req.query.id)},
			update: { $set: req.body }
		}, function(err, response){
			if(err){
				res.status(500).json(err);
			} else {
				res.send(response);
			}
		});
	};
});

app.delete('/api/products', function(req, res){
	if(!req.query.id){
		res.status(500).json(err);
	} else {
		db.products.remove({
			_id: mongojs.ObjectId(req.query.id)
		}, function(err, response){
			if(err){
				res.status(500).json(err);
			} else {
				res.send(response);
			};
		});
	};
});


app.listen(port, function(){
	console.log('listening on ' + port);
});