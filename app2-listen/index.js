var express = require('express');
var bodyParser = require('body-Parser');
var port = 3030;


var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



app.listen(port, function() {
    console.log('Listening on port ', port)
})

