var express = require('express');
var app = express();
var fs = require('fs');

//endpoint to get list of users
app.get('/getNSPData',function(req,res){
    fs.readFile(__dirname + "/" + "users.json", "utf8", function(err,data){
        console.log(data);
        res.send(data);
    });
})

//listening to port 8080
var server =app.listen(8080,function(){
    var host = server.address().address
    var port = server.address().port
    console.log("REST API demo app listening at http://%s:%s", host, port)
})
