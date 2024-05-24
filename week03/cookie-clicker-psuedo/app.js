// some global varible to store my cookies in. this is so we can edit the amount of cookies when we need to.

// i might also do some setup in my html

// create bits of html for the total cookie count, cps, and image and get each of them by their id and store in variables. 
let purchedItems = []

imgTag.addEventListener('click', function() {
    cookies++
})
let items = ''
async function fetchUpgrades() {
    let response = await fetch('')
    let store = await response.json()
    items = store
}

// have all the below in a game function.
// see if anything in local storage
// load()
// fetch myUpgrades()
//  render the shop.
// setInterval(function() {
//  cookie += 1
//  updateUI()
//  save()
//}, 1000)

function save() {
    localStorage.setItem('cookies', JSON.stringify(cookies))
    localStorage.setItem('purchases', )
}

function updateUI() {
    // update the html element i made to have the current cookies per second 
    // update to have the current total cookie count
}

function renderShop() {
    // could call function in here 
    // create element for each item in the shop
    shopArray.forEach(function(item) {

    })
}

