var http = require('http');
var express = require('express');
var server = express();
var fs = require('fs');
var count = 0;

server.get('/', function(req, res){
    res.send('homepage');
    fs.writeFileSync("writeMe.txt", "writed!")
    console.log('request '+count);
    count ++;
});



var port=Number(process.env.PORT || 9000);
server.listen(port);
