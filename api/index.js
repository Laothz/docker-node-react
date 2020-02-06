var express = require('express');
var app = express();
var mongo = require("mongoose");

mongo.connect("mongodb://localhost:27017/local", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});