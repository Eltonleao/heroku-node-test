var http = require('http');
var express = require('express');
var app = express();
var ejs = require('ejs');

var appController = require('./controllers/appController');
appController(app);

app.set('view engine', 'ejs');
app.use('/public', express.static(__dirname+'/public'));


app.get('/', function(req, res){
    res.render(__dirname + '/views/home.ejs');
});

app.get('/contact', function(req, res){
    res.render(__dirname + '/views/contact.ejs');
});

app.get('/profile/:id', function(req, res){
    res.render(__dirname + '/views/profile', {person:req.params.id});
});

var port=Number(process.env.PORT || 9000);
app.listen(port);
console.log('running at port: 9000');