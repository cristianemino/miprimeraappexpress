const express = require("express");

var app = express();

app.use('/', function(req,res){
    res.send('<h1>Hola Mundo</h1>');
})

app.listen(3000);
console.log("El server esta en línea");