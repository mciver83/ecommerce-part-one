var express = require('express'),
	app = express(),
	bodyParser = require('body-parser'),
	cors = require('cors'),
	mongoose = require('mongoose'),
	port = 9001;
	

var mongoUri = 'mongodb://localhost:27017/ecommerce';
var ProductCtrl = require('./controllers/ProductCtrl')

mongoose.connect(mongoUri);
mongoose.connection.once('open', function(){
	console.log('Connected to Mongo at' + mongoUri);
})



app.use(bodyParser.json());
app.use(cors());

app.use(express.static(__dirname + '/public'))



app.post('/api/products', ProductCtrl.createProduct);

app.get('/api/products', ProductCtrl.getProducts);

app.put('/api/products', ProductCtrl.updateProduct);

app.delete('/api/products', ProductCtrl.deleteProduct);


app.listen(port, function(){
	console.log('listening on ' + port);
});