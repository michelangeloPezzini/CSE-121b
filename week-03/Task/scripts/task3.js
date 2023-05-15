//Add
function add(n1, n2) {
  return n1 + n2;
}

function addNumbers() {
  const numberOne = document.getElementById('addend1').value;
  const numbertwo = document.getElementById('addend2').value;
  const sum = add(Number(numberOne), Number(numbertwo));
  document.getElementById('sum').value = sum;
}

const addButton = document.getElementById('addNumbers');
addButton.addEventListener('click', addNumbers);

//Subtract

function subtract(s1, s2) {
  return s1 - s2;
}

function subtractNumbers() {
  const numberOne = document.getElementById('minuend').value;
  const numberTwo = document.getElementById('subtrahend').value;
  const sub = subtract(Number(numberOne), Number(numberTwo));
  document.getElementById('difference').value = sub;
}

const subtractButton = document.getElementById('subtractNumbers');
subtractButton.addEventListener('click', subtractNumbers);

//Multiplication
const multiply = (m1, m2) => m1 * m2;

const multiplyNumbers = () => {
  const factor1 = document.getElementById('factor1').value;
  const factor2 = document.getElementById('factor2').value;

  const mult = multiply(Number(factor1), Number(factor2));
  document.getElementById('product').value = mult;
};

const multipleButton = document.getElementById('multiplyNumbers');
multipleButton.addEventListener('click', multiplyNumbers);

// Step 8: Using any of the three function declaration types, repeat Steps 1-5 with new functions named divide and divideNumbers and HTML form controls with IDs of dividend, divisor, quotient and divideNumbers

const division = (d1, d2) => d1 / d2;

const divisionNumbers = () => {
  const dividend = document.getElementById('dividend').value;
  const divisor = document.getElementById('divisor').value;

  const div = division(dividend, divisor);
  document.getElementById('quotient').value = div;
};

const divButton = document.getElementById('divideNumbers');
divButton.addEventListener('click', divisionNumbers);

/* BUILT-IN METHODS */

const currentDate = new Date();
const currentYear = currentDate.getFullYear();
document.getElementById('year').innerText = currentYear;

/* ARRAY METHODS */

// Step 1: Declare and instantiate an array variable to hold the numbers 1 through 25
const numbersArray = [];

for (let i = 1; i <= 25; i++) {
  numbersArray.push(i);
}

// Step 2: Assign the value of the array variable to the HTML element with an ID of "array"

document.getElementById('array').innerText = numbersArray;
// Step 3: Use the filter array method to find all of the odd numbers of the array variable and assign the reult to the HTML element with an ID of "odds" ( hint: % (modulus operartor) )

const oddNumbers = numbersArray.filter((num) => num % 2 !== 0);
document.getElementById('odds').innerText = oddNumbers;

// Step 4: Use the filter array method to find all of the even numbers of the array variable and assign the result to the HTML element with an ID of "evens"

const evenNumbers = numbersArray.filter((num) => num % 2 == 0);
document.getElementById('evens').innerText = evenNumbers;

// Step 5: Use the reduce array method to sum the array variable elements and assign the result to the HTML element with an ID of "sumOfArray"

const sumOfArray = numbersArray.reduce((acumulator, currentValue) => {
  return acumulator + currentValue;
}, 0); //you can start the sum with value zero

document.getElementById('sumOfArray').innerText = sumOfArray;
// Step 6: Use the map array method to multiple each element in the array variable by 2 and assign the result to the HTML element with an ID of "multiplied"

const multipliedArray = numbersArray.map((num) => num * 2);
document.getElementById('multiplied').innerText = multipliedArray;
// Step 7: Use the map and reduce array methods to sum the array elements after multiplying each element by two.  Assign the result to the HTML element with an ID of "sumOfMultiplied"

const multipliedArrayAgain = numbersArray.map((num) => num * 2);

const sumOfMultipliedArray = multipliedArrayAgain.reduce(
  (acumulator, currentValue) => {
    return acumulator + currentValue;
  },
  0,
); //you can start the sum with value zero

document.getElementById('sumOfMultiplied').innerText = sumOfMultipliedArray;
