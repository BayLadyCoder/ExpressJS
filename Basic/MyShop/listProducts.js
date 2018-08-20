/*
Use 'faker' to print out 10 random product names and prices
*/

/*
Terminal
cd desktop
mkdir myShop
touch listProducts.js
npm install faker
*/

var faker = require('faker');

for (var i = 0; i < 10; i++) {
	console.log(faker.commerce.productName() + " - $" + faker.commerce.price());
}

/*
Terminal
node listProducts.js
*/