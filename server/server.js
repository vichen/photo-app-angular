var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');


var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/photoAlbum');
require('./config/imageModel');

var app = express();
app.use(morgan('dev'));
app.use(bodyParser.json());

// mongoose.connect('mongodb://localhost/shopper');
require('./config/middleware')(app, express);
require('./config/routes')(app, express);


var port = process.env.PORT || 3000;

console.log('Server is listening on ' + port);
app.listen(port);

module.exports = app;