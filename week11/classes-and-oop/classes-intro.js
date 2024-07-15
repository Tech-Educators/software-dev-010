class Animal {
    constructor(animalName, amountOfLegs) {
        // think of this is a hidden step thats happening. 
        // let this = {};
        this.name = animalName,
        this.legs = amountOfLegs
    }
    speak() {
        console.log(`${this.name} says hello! They have ${this.legs} legs`)
    }
}

// instantiate our new objects by using the 'new' keyword
const bunny = new Animal('Rabbit', 4)
const kangaroo = new Animal('Roo', 2)

kangaroo.speak()

// console.log(bunny, kangaroo)

// we can extend classes to make them more customisable 

class Bird extends Animal {
    constructor(name, legs, wingLengthParam) {
        super(name, legs)
        this.wingLength = wingLengthParam
    }
    fly() {
        console.log(`${this.name} soars through the air`)
    }
}

const chicken = new Bird('Camilla', 2, 4)
chicken.fly()