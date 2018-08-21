var express = require('express');
var app = express();


app.get("/", function(req, res) {
	res.send("Hi there! Welcome to my Express Routing Exercise!");
});

app.get("/speak/:animal", function(req, res) {
	var animal = req.params.animal.toLowerCase();

	// if (animal === "pig") {
	// 	res.send("The " + animal + " says 'Oink'");
	// } else if (animal === "cow") {
	// 	res.send("The " + animal + " says 'Moo'");
	// } else if (animal === "dog") {
	// 	res.send("The " + animal + " says 'Woof Woof!'");
	// } else {
	// 	res.send("The " + animal + " says 'MEEEEOOOOWWWW'");
	// }

	// Another way to do it using js object
	var sounds = {
		pig: "Oink",
		cow: "Moo",
		dog: "Woof Woof!",
		cat: "MEEEEOOOOWWWW",
		goldfish: "..."
	};

	var sound = sounds[animal];
	res.send("The " + animal + " says \'" + sound + "\'");

	
});


app.get("/repeat/:word/:number", function(req, res) {
	var word = req.params.word;
	var numberString = req.params.number;
	var number = Number(numberString);
	var stringText = "";

	for (var i = 1 ; i < number+1 ; i++) {
		stringText += i + " " + word + " ";
	}

	res.send(stringText);
	stringText = "";
});

app.get("*", function(req, res) {
	res.send("Sorry, page is not found... What are you doing with your life?");
});

app.listen(3000, function() {
	console.log("Server starts now");
});