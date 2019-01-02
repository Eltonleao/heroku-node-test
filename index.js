var http = require('http');
var express = require('express');
var app = express();
var fs = require('fs');

app.get('/', function(req, res){
    res.send('homepage');
    fs.writeFileSync("writeMe.txt", "writed!")
});

var port=Number(process.env.PORT || 9000);
app.listen(port);