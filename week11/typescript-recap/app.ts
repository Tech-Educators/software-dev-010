console.log('Hello')

// types of data
let string = 'string'
let number = 42
let boolean = true


// more complex types
let myArray = []
let myObject = {}


let myName:string = 'Sam'
let theTruth:boolean = true
let myFavNumber:number = 42

// typing arrays

let myNumbers: string[] = ['one', 'two', 'three']
// if you want the array to have multiple types
let myNumbers2: (string | number)[] = ['one', 'two', 'three', 4]

let myArray3: Array<string> = ['this', 'also', 'works']

// Objects

let myGames: gameType = {
    title: 'Morrowind', 
    yearReleased: 2001
}

// we can make something called 'types' 

// // something useful if you don't know that a property will exist for a particular object
// so we can say 'the object might have an image or not' 
type gameType = {
    title: string,
    yearReleased: number,
    img_url?: string,
}

// means we can reuse this type information in other places
// like in declaring what data an array should have!

let myGamesArray: gameType[] = [
    {
        title: 'Morrowind',
        yearReleased: 2001,
        img_url: 'somewebsite'
    }, {
        title: 'GTA5',
        yearReleased: 2015
    }
]


// we can also type functions - what their parameters are, and what they should return 

function sum(a: number, b: number):number {
    return a + b
}

sum(10, 10)

type classes = 'History' | 'Physics' | 'Art' | 'Science'

let myClasses: classes = 'Art'

type universityInfo = {
    classNames: classes,
    year: number
}

let mathsInfo: universityInfo = {
    classNames: 'Science',
    year: 2011
}

//@ts-ignore