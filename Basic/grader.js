/*
Terminal
cd desktop
touch grader.js
*/

function average(arr) {
	var average = 0;
	var totalScore = 0;
	var totalStudent = arr.length;

	for (var i = 0; i< arr.length; i++) {
		totalScore += arr[i];
	}

	average = Math.round(totalScore/totalStudent); 

	console.log(average);
}

var scores = [90, 98, 89, 100, 100, 86, 94];
average(scores);

var scores2 = [45, 65, 77, 82, 80, 54, 73, 63, 95, 49];
average(scores2);

/*
Terminal
node grader.js
*/