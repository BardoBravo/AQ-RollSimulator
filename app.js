const http = require('http');
const appl = require('./AQS');

var express = require('express');
var app = express();

//const hostname= '127.0.0.1';
const port = 3000;

app.get('/', function (req, res) {    
    res.send('Hello');
})

app.get('/roll', function (req, res) {
    res.send('Roll:\n' + appl.rollOneDie());
})

app.get('/averageDistribution', function (req, res) {
    res.send('Roll:\n' + appl.averageDistribution(5,0,"Widow",100).toString());
})

var server = app.listen(port, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log("http://%s:%s", host, port);
})


