var express = require("express");
var app = express();

app.set('view engine', 'jade');

app.get("/", function(req, res){
  res.render("index", {title:"Oops!", palette: ["#cc7790", "#ff5512", "#75d709"]});	

});

app.listen(8080);