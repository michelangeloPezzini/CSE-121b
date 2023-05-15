/* Lesson 2 */

/* VARIABLES */

// Step 1: declare and instantiate a variable to hold your name
let name = 'Michelangelo Pezzini';

// Step 2: place the value of the name variable into the HTML file (hint: document.querySelector())
document.querySelector('#name').innerText = name;
// Step 3: declare and instantiate a variable to hold the current year
let date = new Date();
let currentYear = date.getFullYear();

// Step 4: place the value of the current year variable into the HTML file
document.querySelector('#year').innerText = currentYear;
// Step 5: declare and instantiate a variable to hold the name of your picture
const imageName = 'images/goodDay.jpg';

// Step 6: copy your image into the "images" folder
//I did this only copynt to the paste
// Step 7: place the value of the picture variable into the HTML file (hint: document.querySelector().setAttribute())
document.querySelector('img').setAttribute('src', imageName);
/* ARRAYS */

// Step 1: declare and instantiate an array variable to hold your favorite foods
let favoriteFoods = ['Pizza', 'Hamburguer', 'Milk Shake'];
// Step 2: place the values of the favorite foods variable into the HTML file
document.querySelector('#food').innerText = favoriteFoods;
// Step 3: declare and instantiate a variable to hold another favorite food
let newFavoriteFood = 'Lasanha';
// Step 4: add the variable holding another favorite food to the favorite food array
favoriteFoods.push(newFavoriteFood);
// Step 5: repeat Step 2
document.querySelector('#food').innerText = favoriteFoods;
// Step 6: remove the first element in the favorite foods array
favoriteFoods.shift(newFavoriteFood);
// Step 7: repeat Step 2
document.querySelector('#food').innerText = favoriteFoods;
// Step 8: remove the last element in the favorite foods array
favoriteFoods.pop(newFavoriteFood);
// Step 7: repeat Step 2
document.querySelector('#food').innerText = favoriteFoods;
