var express = require('express'),
	app = express(),
	bodyParser = require('body-parser'),
	cors = require('cors'),
	mongoose = require('mongoose'),
	port = 9001;
	

var mongoUri = 'mongodb://localhost:27017/ecommerce';
var ProductCtrl = require('./controllers/ProductCtrl');
var UserCtrl = require('./controllers/UserCtrl');
var OrderCtrl = require('./controllers/OrderCtrl');

mongoose.connect(mongoUri);
mongoose.connection.once('open', function(){
	console.log('Connected to Mongo at' + mongoUri);
})



app.use(bodyParser.json());
app.use(cors());

app.use(express.static(__dirname + '/public'))


// prodcuts
app.post('/api/products', ProductCtrl.createProduct);

app.get('/api/products', ProductCtrl.getProducts);

app.put('/api/products', ProductCtrl.updateProduct);

app.delete('/api/products', ProductCtrl.deleteProduct);

// users
app.post('/api/users', UserCtrl.createUser);

app.get('/api/users', UserCtrl.getUsers);

app.put('/api/users', UserCtrl.updateUser);

app.delete('/api/users', UserCtrl.deleteUser);

// cart
app.post('/api/users/:userId', UserCtrl.addCartItem);

app.put('/api/users/:userId/:cartItemId', UserCtrl.updateCartItemQuantity);

app.delete('/api/users/:userId/:cartItemId', UserCtrl.deleteCartItem);

//orders

app.post('/api/orders/:userId', OrderCtrl.createOrder);

app.get('/api/orders', OrderCtrl.getOrder);




app.listen(port, function(){
	console.log('listening on ' + port);
});