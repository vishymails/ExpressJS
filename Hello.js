var express = require('express');
var app = express();

app.get('/', function (req, res) {
   res.send('Welcome to Express JS');
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Server app listening at http://%s:%s", host, port)
})