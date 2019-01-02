var http = require('http');
var express = require('express');
var app = express();

app.use('/public', express.static('public'));

app.get('/', function(req, res){
    res.sendFile(__dirname + '/home.html');
});

var port=Number(process.env.PORT || 9000);
app.listen(port);