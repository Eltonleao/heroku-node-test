var http = require('http');
var express = require('express');
var app = express();
var fs = require('fs');
var count = 0;

app.get('/', function(req, res){
    res.send('homepage');
    fs.writeFileSync("writeMe.txt", "writed!")
    console.log('request '+count);
    count ++;
});


app.listen(8080);