
const reallyCoolDataIWantToStore = {
    favAnimal: 'Darcy',
    favNumber: 42,
    favPlace: 'Tech Educators (Hawaii Campus)',
    favList: [1,2,3]
}

// STEP 1 : Put thing into local storage
const stringified = JSON.stringify(reallyCoolDataIWantToStore)

// STEP 2: Put the stringified data in local storage.

localStorage.setItem('myCoolData', stringified)


// READ DATA

// STEP 1:

const myRetrivedData = localStorage.getItem('myCoolData')


// STEP 2 TURN BACK INTO OBJECT SO ITS USEFUL

const myNormalObjectAtLast = JSON.parse(myRetrivedData)

console.log(myNormalObjectAtLast)