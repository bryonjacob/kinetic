var express = require('express');
var app = express();
var kinesis = require('kinesis');

app.get('/', function(req, res) {
    res.send('Hello, Node');
});

sink = kinesis.stream('kinetic');

app.get('/send', function(req, res) {
   sink.write('test message');    
});

app.listen(80);
