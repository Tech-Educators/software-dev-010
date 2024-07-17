console.log('Hello');
// types of data
var string = 'string';
var number = 42;
var boolean = true;
// more complex types
var myArray = [];
var myObject = {};
var myName = 'Sam';
var theTruth = true;
var myFavNumber = 42;
// typing arrays
var myNumbers = ['one', 'two', 'three'];
// if you want the array to have multiple types
var myNumbers2 = ['one', 'two', 'three', 4];
var myArray3 = ['this', 'also', 'works'];
// Objects
var myGames = {
    title: 'Morrowind',
    yearReleased: 2001
};
// means we can reuse this type information in other places
// like in declaring what data an array should have!
var myGamesArray = [
    {
        title: 'Morrowind',
        yearReleased: 2001,
        img_url: 'somewebsite'
    }, {
        title: 'GTA5',
        yearReleased: 2015
    }
];
// we can also type functions - what their parameters are, and what they should return 
function sum(a, b) {
    return a + b;
}
sum(10, 10);
var myClasses = 'art';
