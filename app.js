var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var jwt = require('jsonwebtoken');
var expressJWT = require('express-jwt');

mongoose.connect('mongodb://localhost:27017/test' , {useMongoClient: true});

// Create Express application
var app = module.exports = express();

var NODE_ENV = 'development';

app.set('env', process.env.NODE_ENV || 'production');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//app.use(expressJWT({secret:'kellton'}).unless({path:['/api/v1/login','/api/v1/users']}));

var routes = require('./routes/index')
app.use('/api', routes);
app.use(function(req,res,next){
    res.header('Access-Control-Allow-Origin', 'localhost:4200');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});
var port = process.env.PORT || 2000;

app.listen(port);
console.log('Insert getat on port ' + port);
