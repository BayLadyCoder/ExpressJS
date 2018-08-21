var express = require('express');
var app = express();


app.get("/", function(req, res) {
	res.send("Hi there! Welcome to my Express Routing Exercise!");
});

app.get("/speak/:animal", function(req, res) {
	var animal = req.params.animal;

	if (animal === "pig") {
		res.send("The " + animal + " says 'Oink'");
	} else if (animal === "cow") {
		res.send("The " + animal + " says 'Moo'");
	} else if (animal === "dog") {
		res.send("The " + animal + " says 'Woof Woof!'");
	} else {
		res.send("The " + animal + " says 'MEEEEOOOOWWWW'");
	}

	
});

app.get("/", function(req, res) {
	res.send("");
});

app.get("*", function(req, res) {
	res.send("Sorry, page is not found... What are you doing with your life?");
});

app.listen(3000, function() {
	console.log("Server starts now");
});