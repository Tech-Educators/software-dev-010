// 0. Preview
// remove the first element from the array. 
let flowers = ['lilly', 'rose', 'sunflower', 'tulips']
flowers.shift()
console.log(flowers)

// JavaScript Code Quiz

// 1. Add an element to the end of an array
let fruits = ["apple", "banana"];
// Add "orange" to the end of the array
// Your code here
console.log(fruits); // Output should be ["apple", "banana", "orange"]

// 2. Remove the last element from an array
let numbers = [10, 20, 30, 40];
// Your code here
console.log(numbers); // Output should be [10, 20, 30]

// 3. Use the `map` method to double the numbers in an array
let nums = [1, 2, 3, 4];
// Double each number in the array
// Your code here
//
// console.log(newNums); // Output should be [2, 4, 6, 8]

// 4. Combine two arrays into one
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
// Combine array1 and array2 into a new array
// Your code here
// console.log(combinedArray); // Output should be [1, 2, 3, 4, 5, 6]

// 5. Convert a string to uppercase
let greeting = "hello world";
// Convert the string to uppercase
// 
// console.log(upperGreeting); // Output should be "HELLO WORLD"

// 6. Extract a substring from a string
let sentence = "JavaScript is fun!";
// Extract "JavaScript" from the string
// complete this line, uncomment it. 
// let substring = 
// console.log(substring); // Output should be "JavaScript"

// 7. Copy an array using the spread operator
let originalArray = [1, 2, 3];
// Copy the array using the spread operator
// useful in react! Or when you don't want to modify the orignal array when doing sorting. 
// console.log(copiedArray); // Output should be [1, 2, 3]

// 8. Merge two arrays using the spread operator
let arr1 = ["a", "b"];
let arr2 = ["c", "d"];
// Merge arr1 and arr2 using the spread operator
// maybe you needed to combine two sql queries on the clientside?
// console.log(mergedArray); // Output should be ["a", "b", "c", "d"]

// 9. Destructure an array into variables
let colors = ["red", "green", "blue"];
// Destructure the array into variables
// your code here
// console.log(firstColor); // Output should be "red"
// console.log(secondColor); // Output should be "green"

// 10. Destructure an object into variables
let person = {userName: "John", age: 25};
// Destructure the object into variables
// guess what, your code goes here. 

// console.log(userName); // Output should be "John"
// console.log(age); // Output should be 25

// Challenge: Combine array and string methods with spread operator and destructuring
// Task: Given an array of strings, convert all strings to uppercase, filter out strings that include 'A', 
//       combine the result with another array, and finally destructure the first two elements.

let stringArray = ["apple", "banana", "cherry", "avocado"];
let anotherArray = ["orange", "grape"];

// Convert all strings to uppercase


// Filter out strings that include 'A'


// Combine the result with another array


// Destructure the first two elements


// console.log(finalArray); // Output should be an array without "APPLE" and "AVOCADO" and include elements from anotherArray
// console.log(firstElement); // Output should be "BANANA"
// console.log(secondElement); // Output should be "CHERRY"


// 11. Bonus round
// Research the 'ternary operator' and the 'modulo' operator in javascript. 
// write a function that accepts a number as an argument. It should return the string 'Even' if the number is even, and 'Odd' if the number is odd. 

function typeOfNumber(number) {

    return 'something'
}

// console.log(typeOfNumber(5)) // Odd
// console.log(typeOfNumber(2)) // Even