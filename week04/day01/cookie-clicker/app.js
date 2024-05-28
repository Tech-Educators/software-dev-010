const cookieImg = document.getElementById("cookieImg");
const numberOfCookies = document.getElementById("numberOfCookies");
const cookiesPerSecond = document.getElementById("cookiesPerSecond");
const errorMessage = document.getElementById("errorMessage");
const resetButton = document.getElementById("resetButton");
const shop = document.getElementById('shop')

let cookies = 100;
let purchasedItems = []
let storeItems = []

cookieImg.addEventListener('click', function() {
    cookies += 1
})


async function fetchCookieData() {
    const response = await fetch('https://cookie-upgrade-api.vercel.app/api/upgrades') // get data/ get a response object
    // tell my javascript how to read the reponse object
    storeItems = await response.json()
    localStorage.setItem('storeItems', JSON.stringify(storeItems))
    renderShop(storeItems)
}


function save() {
    // im going to store the cookies, and the purchasedItems 
    let cookiesString = JSON.stringify(cookies)
    localStorage.setItem('cookies', cookiesString)
    localStorage.setItem('purchasedItems', JSON.stringify(purchasedItems))
}

function load() {
    // im going to load cookies and purchased items.
    cookies = JSON.parse(localStorage.getItem('cookies')) || 0
    purchasedItems = JSON.parse(localStorage.getItem('purchasedItems')) || []
}

function purchaseUpgrade(itemPurchased) {
    if (itemPurchased.cost > cookies) {
        alert(`You don't have enough cookies`)
        return
    }
    // subtract the amout of cookies from the player
    cookies -= itemPurchased.cost
    // add to an arary of purched items
    purchasedItems.push(itemPurchased)
    save()
    updateUI()
}

function renderShop(storeItems) {
    storeItems.forEach(function(item) {
        // create name slot
        let p = document.createElement('p')
        p.innerText = item.name
        // create price slot
        let pPrice = document.createElement('p')
        pPrice.innerText = item.cost + ' cookies'
        // create +cps slot (increase)
        let increase = document.createElement('p')
        increase.innerText = item.increase + ' +cps'

        let count = document.createElement('p')
        count.innerText = getItemCount(item) + 'bought'
        count.setAttribute('id', 'itemCount')

        let button = document.createElement('button')
        button.innerText = 'buy'
        button.addEventListener('click', function() {
            purchaseUpgrade(item)
        })
        let cookieStoreItem = document.createElement('div')
        cookieStoreItem.classList.add('cookie-store-card')
        cookieStoreItem.appendChild(p)
        cookieStoreItem.appendChild(pPrice)
        cookieStoreItem.appendChild(increase)
        cookieStoreItem.appendChild(count)
        cookieStoreItem.appendChild(button)
        shop.appendChild(cookieStoreItem)
    })
}

function getItemCount(item) {
    let total = 0
    for (let purchasedItem of purchasedItems) {
        if (purchasedItem.name === item.name) {
            total++
        }
    }
    return total
}

// we owe the player different amount of cookiesPerSecond depending on what they've bought
// lets figure that out.

//[{id: 1, name: "Auto-Clicker", cost: 100, increase: 1}, {} another one ect ect…]
// {id: 1, name: "Auto-Clicker", cost: 100, increase: 1}

function getCookiesPerSecond() {
    // this function will only return a number

    // if they've bought nothing, I owe them 1 cookie per second
    if (purchasedItems.length == 0) {
        return 1
    }
    let cps = 0
    // otherwise, I need to loop through the 'purchasedItems' array, and add up the total amount of 'increase' on each object in the array
    for (let item of purchasedItems) {
        cps += item.increase
    }
    return cps
}











// every second we want the cookies to go up by one
// when the game loads i need to load() 
// fetchData()

function game() {
    load()
    fetchCookieData()
    setInterval(function() {
        cookies += getCookiesPerSecond()
        console.log(cookies)
        save()
        updateUI()
    }, 1000)
}

function updateUI() {
    numberOfCookies.innerText = cookies
    cookiesPerSecond.innerText = getCookiesPerSecond()
    const storeItems = JSON.parse(localStorage.getItem('storeItems'))
    if (storeItems) {
        renderShop(storeItems)
    }
    // document.body.shop.cookieStoreItem.count = 
    
}

game()