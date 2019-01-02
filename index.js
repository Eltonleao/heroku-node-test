var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end("<style>body{background:skyblue;}*{color: white;text-align:center;font-size:100px}</style><h1>Changed</h1>");
});
console.log("testando writeFile");
fs.writeFileSync("writeMe.txt", 'Tudo ok');
var writeMe = fs.readFileSync('writeMe.txt', 'utf8');
console.log(writeMe);

var port=Number(process.env.PORT || 9000);
server.listen(port);
console.log("teste ok");
