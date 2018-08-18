/*
Terminal
cd desktop
touch echo.js
*/

function echo(message, num) {
	for (var i =0; i < num; i++) {
		console.log(message);
	}
}

echo("Echo!!", 10);
echo("Tater Tots", 3);

/*
Terminal
node echo.js
*/