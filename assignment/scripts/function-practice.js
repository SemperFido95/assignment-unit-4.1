console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('1. Test - should say "Hello World!"', hello());


// 2. Function to return a personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName( name ) {
  return `Hello, ${name}!`;
}
// Remember to call the function to test
console.log('2. Test - should say "Hello, Bailey!":', helloName('Bailey'));

// 3. Function to add two numbers together & return the result
function addNumbers( firstNumber, secondNumber ) {
  return firstNumber + secondNumber;
}

console.log('3. Test - should output the number 12:', addNumbers(8, 4));

// 4. Function to multiply three numbers & return the result
function multiplyThree( firstNumber, secondNumber, thirdNumber ){
  return firstNumber * secondNumber * thirdNumber;
}

console.log('4. Test - should output the number 48:', multiplyThree(8, 3, 2));

// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive( number ) {
  if ( number > 0 ) {
    return true;
  } else {
    return false;
  }
}

// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome
console.log( '5. isPositive - should say true', isPositive(3) );
console.log( '5. isPositive - should say false', isPositive(0) );
console.log( '5. isPositive - should say false', isPositive(-3) );


// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
function getLast( array ) {
  if (array.length > 0) {
    return array[array.length - 1];
  } else {
    return undefined;
  }
}

let testArray1 = ['orange', 'banana', 'apple'];
let testArray2 = {};

console.log('6. Test - should return the word "apple"', getLast(testArray1));
console.log('6. Test - should return undefined', getLast(testArray2))

// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 

// This is the original function I wrote.
// I'm keeping it even though I rewrote it below
// so I can see my progress :) 

// function find( value, array ){
//   for (let i = 0; i <= array.length; i++) {
//     if (array[i] === value) {
//       return true;
//     } else if (i === array.length) {
//       return false;
//     }
//   } return false;
// }

function find(value, array) {
  for(let i of array) {
    if (i === value) {
      return true;
    }
  }
  return false;
}


console.log('7. Test - should return true:', find('apple', testArray1));
console.log('7. Test - should return false', find('grape', testArray1));

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise

let isFirstLetter = (letter, string) => letter === string[0] ? true : false;
//arrow function and ternary operator to make code as concise as possible :)

console.log( '8. Test - isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( '8. Test - isFirstLetter - should say false', isFirstLetter('z', 'apple') );

// 9. Function to return the sum of all numbers in an array

let numArray = [1, 2, 7, 4];

function sumAll(array) {
  let sum = 0
  // TODO: loop to add items
  for (let i of array) {
    sum += i;
  }
  return sum;
}

console.log('9. Test - should return the number 14:', sumAll(numArray));

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.

let allNums = [1, -8, 0, -10, 54];
let noPositives = [0, -1, -4];

function getPositiveNums (array) {
  let positiveNums = [];
  for (let i of array) {
    if (i > 0) {
      positiveNums.push(i);
    }
  }
  return positiveNums;
}

console.log('10. Test - Should return array of positive numbers', getPositiveNums(allNums));
console.log('10. Test - should return an empty array', getPositiveNums(noPositives));


// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!

// Write a function that will return the count of distinct case-insensitive alphabetic characters
// and numeric digits that occur more than once in the input string. 
// The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

// Example
// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice

function duplicateCount(string) {
  let counter = 0;
  string = string.toUpperCase();
  for (let character of string) {
    if (string.indexOf(character) !== string.lastIndexOf(character)) {
      string = string.replaceAll(character, '');
      counter ++;
    } else {
      continue;
    }
  } return counter;
}

console.log('11. Test - should return the number 3', duplicateCount('aA!5!5'));
