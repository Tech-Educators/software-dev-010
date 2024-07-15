console.log('Hello, typescript!')

let myAge: number = 25;


// strings
const string = 'string'
// numbers
const number = 5;
// booleans
const boolean = true;
// arrays
const array = [];
// objects
const objects = {};


// how do we 'type' these things?

let number1: number = 0;
let string2: string = 'All the words'
let boooolians: boolean = true;
let notBoooolians: boolean = false;

// both of these are ways to type an array. 
let myArray: number[] = [1,2,3]
let mySecondArray: Array<string> = ['hello', 'world']

// if we want multiple types in the array
let myMixedArray: (number|string)[] = [2, 'two']

const darcy: petType = {
    name: 'Darcy',
    age: 6,
    colour: 'brown',
    cute: false
}

const charlie: petType = {
    name: 'Charlie',
    age: 8,
    colour: 'Tan',
    cute: true
}

export type petType = {
    name: string,
    age: number,
    colour: string,
    cute: boolean
}

// more simple example

const game: {
    title: string, 
    releaseDate: number[]
} = {
    title: 'Morrowind',
    releaseDate: [2001, 2029]
}


// We can also type function parameters

function sum(a: number, b:number) {
    return a + b
}
// will error because i've said the parameter a should be a number
// sum('string', 2001)
sum(2000, 2001)

// types infered

// typescript infered something as being a number 
let something = 5

// something= 'string'


// this is infered as having 'any' type
let noValue;
noValue = 5;
noValue = 'this'


// union types

type uniClasses = 'physics' | 'art' | 'keyboard class'

// no good - myCourse has to be equal to one of the options in the uniClasses type
//const myCourse: uniClasses = 'Physics'

const myCourse: uniClasses = 'art'


// I'm going to define a template each of my 'tree' objects need to follow 
// by creating a 'type' 

type treeTypes = {
    treeType: 'fir' | 'oak' | 'willow' | 'cherry' | 'silver maple',
    evergreen: boolean,
    age: number,
    img_url?: string
}

// typing an array of objects
const myArrayOfTrees: treeTypes[] = [
    {
        treeType: 'cherry',
        evergreen: false,
        age: 50,
    },
    {
        treeType: 'silver maple',
        evergreen: false,
        age: 77,
        img_url: 'https://images.unsplash.com/photo-1671164616508-a12e4dee7cb3?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }
]