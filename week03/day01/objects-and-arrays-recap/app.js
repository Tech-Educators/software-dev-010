const trees = [
    {
        name: "Oak",
        scientificName: "Quercus",
        height: "70-100 feet",
        nativeRegions: ["Northern Hemisphere"],
        leafType: "Deciduous",
        lifespan: "200-300 years",
    },
    {
        name: "Maple",
        scientificName: "Acer",
        height: "30-145 feet",
        nativeRegions: ["Asia", "Europe", "North America", "Northern Africa"],
        leafType: "Deciduous",
        lifespan: "100-200 years",
    },
    {
        name: "Pine",
        scientificName: "Pinus",
        height: "50-150 feet",
        nativeRegions: ["Northern Hemisphere"],
        leafType: "Evergreen",
        lifespan: "100-1000 years",
    },
    {
        name: "Birch",
        scientificName: "Betula",
        height: "40-70 feet",
        nativeRegions: ["Northern Hemisphere"],
        leafType: "Deciduous",
        lifespan: "30-50 years",
    },
    {
        name: "Cherry",
        scientificName: "Prunus",
        height: "20-30 feet",
        nativeRegions: ["Northern Hemisphere"],
        leafType: "Deciduous",
        lifespan: "20-30 years",
    },
];



let myTestArray = [
    {
        name: 'Sam',
        species: 'Human'
    },
    {
        name: 'Darcy',
        species: 'Dog'
    },
    {
        name: 'Tulip',
        species: 'Cat'
    }
]

// forEach is like a for loop

// on the name of the array I want to loop throught.
let animalInfoContainer = document.getElementById('animal-info')

myTestArray.forEach(function(object) {
    let nameTag = document.createElement('p')
    let speciesTag = document.createElement('p')

    nameTag.innerText = object.name
    speciesTag.innerText = object.species

    animalInfoContainer.appendChild(nameTag)
    animalInfoContainer.appendChild(speciesTag)
}) 

// create an array of three objects
// the three objects should share the same properties

// use .forEach to create a p tag for each property, set the content of the p tag to be the current objects information, and append to the page.