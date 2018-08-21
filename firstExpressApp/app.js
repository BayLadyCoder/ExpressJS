var express = require('express');
var app = express();

// "/" => "Hi there!"
app.get("/", function(request, response) {
	response.send("Hi there!");
});

// "/bye" => "Goodbye!"
app.get("/bye", function(req, res) {
	res.send("Goodbye!");
});

// "/dog" => "MEOW!"
app.get("/dog", function(req, res) {
	console.log("Someone is making a request to /dog");
	res.send("MEOW!");
});


// Route Parameters using :
app.get("/r/:subredditName", function(req, res) {
	console.log(req.params);
	var subreddit = req.params.subredditName;
	res.send("Welcome to the " + subreddit + " Subreddit");
});

app.get("/r/:subredditName/comments/:id/:title", function(req, res) {
	console.log(req.params);
	res.send("Welcome to the comments page!")
});


// Page not found route 
// "*" route is used for when user request any urls that are not defined
// According to route order, the * should be the last route in the  order,
// So that it will search for all the defined routes before it goes to * 
app.get("*", function(req, res) {
	res.send("You are a Star!!");
});


// Tell Express to listen for requests (start server)


app.listen(3000, function() {
	console.log("Server has started!!!");
})