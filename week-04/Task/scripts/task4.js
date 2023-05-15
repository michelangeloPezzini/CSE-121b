/* Lesson 4 */

/* DATA */

// Step 1: Declare a new variable to hold information about yourself
let mySelf = {};
// Step 2: Inside of the object, add a property named name with a value of your name as a string
mySelf.name = 'Michelangelo Pezzini';
// Step 3: Add another property named photo with a value of the image path and name (used in Task 2) as a string
mySelf.photo = 'images/me.jpg';
// Step 4: Add another property named favoriteFoods with a value of an array of your favorite foods as strings ( hint: [] )
mySelf.myFavoriteFoods = ['Pizza', 'Hamburguer', 'Milk Shake'];
// Step 5: Add another property named hobbies with a value of an array of your hobbies as strings

mySelf.hobbies = ['Videogames', 'Volleyball', 'Build things'];
// Step 6: Add another property named placesLived with a value of an empty array

mySelf.placesLived = [];

// Step 7: Inside of the empty array above, add a new object with two properties: place and length and values of an empty string

mySelf.placesLived.push({ place: '', length: '' });
// Step 8: For each property, add appropriate values as strings

mySelf.placesLived[0].place = 'Caxias do Sul';
mySelf.placesLived[0].length = '23 years';

// Step 9: Add additional objects with the same properties for each place you've lived
mySelf.placesLived.push({ place: 'Brasilia', length: '2 year' });
/* OUTPUT */

// Step 1: Assign the value of the name property (of the object declared above) to the HTML <span> element with an ID of name

document.getElementById('name').innerText = mySelf.name;
// Step 2: Assign the value of the photo property as the src attribute of the HTML <img> element with an ID of photo

document.getElementById('photo').src = mySelf.photo;
// Step 3: Assign the value of the name property as the alt attribute of the HTML <img> element with an ID of photo
document.getElementById('photo').alt = mySelf.name;

// Step 4: For each favorite food in the favoriteFoods property, create an HTML <li> element and place its value in the <li> element
let favoriteFoodList = document.getElementById('favorite-foods');

// Step 5: Append the <li> elements created above as children of the HTML <ul> element with an ID of favorite-foods
mySelf.myFavoriteFoods.forEach(function (food) {
  let li = document.createElement('li');
  li.textContent = food;
  favoriteFoodList.appendChild(li);
});

// Step 6: Repeat Step 4 for each hobby in the hobbies property
let hobbiesList = document.getElementById('hobbies');

// Step 7: Repeat Step 5 using the HTML <ul> element with an ID of hobbies

mySelf.hobbies.forEach(function (hobby) {
  let li = document.createElement('li');
  li.textContent = hobby;
  hobbiesList.appendChild(li);
});

// Step 8: For each object in the placesLived property:
mySelf.placesLived.forEach(function (place) {
  // Create an HTML <dt> element and put its place property in the <dt> element
  var dt = document.createElement('dt');
  dt.textContent = place.place;

  // Create an HTML <dd> element and put its length property in the <dd> element
  var dd = document.createElement('dd');
  dd.textContent = place.length;

  // Step 9: Append the HTML <dt> and <dd> elements created above to the HTML <dl> element with an ID of places-lived
  document.getElementById('places-lived').appendChild(dt);
  document.getElementById('places-lived').appendChild(dd);
});
