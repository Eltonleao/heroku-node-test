var http = require('http');

var server = http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end("<style>body{background:skyblue;}*{color: white;text-align:center;font-size:100px}</style><h1>Why did the chicken crossed the universe?</h1>");
});


var port=Number(process.env.PORT || 9000);
server.listen(port);
