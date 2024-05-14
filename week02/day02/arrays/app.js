// primative data types
let myNumber = 42
let myString = 'this is a string'
let myBoolean = true

// arrays & objects are a type of 'complex' data

// How do we make arrays?

let myArray = [42, 'this is a string', true, ['list']]

// Arrays are a list of data. We can store multiple types of data in the array.

// How do we access things in an array?
console.log(myArray)
console.log(myArray[0]) // this is how to get the first thing out of the array. 
// Arrays are 'zero-indexed' 
console.log(myArray[1])

let zero = 0;

console.log(myArray[zero], 'we can use variables to access elements too! As long as the varible is a number')


// get the length of the array
console.log('The legnth of the array: ', myArray.length)
console.log('The last element', myArray[myArray.length - 1])

// blogs post

let blogPostTitles = ['Blog Post 1', 'Blog two', 'blog3']