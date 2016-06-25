var express = require('express');
var app = express();
var config = require('./config');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


app.use(express.static('public'));


//mongoose.connect(config.database);

app.listen(config.port,function () {
    console.log('app listening on port '+config.port);
});