var express = require("express");
var app = express();
var bodyParser = require('body-parser');
var fs = require('fs');

var server = app.listen(3000, function() {
    console.log("Kakao chatbot server has started on port 3000");
})

app.use(bodyParser.json());

var router = require('./router/main')(app, fs);