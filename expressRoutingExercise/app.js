var express = require('express');
var app = express();


app.get("/", function(req, res) {
	res.send("Hi there! Welcome to my Express Routing Exercise!");
});

app.get("*", function(req, res) {
	res.send("Sorry, page is not found... What are you doing with your life?");
});

app.listen(3000, function() {
	console.log("Server starts now");
});