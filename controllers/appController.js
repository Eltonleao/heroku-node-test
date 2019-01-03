
var mysql = require('mysql');
var db = mysql.createConnection({
    host: "db4free.net",
    user: "eltonleao",
    password: "hello_universe",
    database: "multiverso"
});

var query = 'SELECT * FROM person';
var data = [];

db.connect(function(err){
    db.query(query, function(err, result){
        if(err){console.log(err)}
        else{
            data = result;
            console.log(data);
        }
    })
});

module.exports = function(app){

    app.get('/mysql', function(req, res){
        res.render('mysql', {person: data });
    });

};