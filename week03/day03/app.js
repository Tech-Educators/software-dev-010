// https://api.unsplash.com/search/photos?page=1&query=winter&client_id=OmG0FZqCP8A7GhQjYOIs8mqplMHO4OD0xWwoopV1CaA

const div = document.getElementById('app')
const form = document.getElementById('form')
// async/await
async function fetchImages(query) {
    const response = await fetch(`https://api.unsplash.com/search/photos?page=1&query=${query}&client_id=OmG0FZqCP8A7GhQjYOIs8mqplMHO4OD0xWwoopV1CaA`)
    const final = await response.json()
    // console.log(final.results[0]) // this is an image object from unplash
    displayImage(final.results[0]) // final.results[0] becomes the value of 'imageObject'
}

// fetchImages()

form.addEventListener('submit', function(event) {
    event.preventDefault()
    const formData = new FormData(form)
    const userInput = Object.fromEntries(formData)
    fetchImages(userInput.query)
})
// write some code to get the user input.
// when the user types and submitsthe form, that eventListener callback would call the fetchImage with the query

function displayImage(imageObject) {
    div.innerHTML = ''
    console.log(imageObject)
    const image = document.createElement('img')
    image.setAttribute('src', imageObject.urls.regular)
    image.setAttribute('class', 'image')
    document.body.style.backgroundColor = imageObject.color
    div.appendChild(image)
}

// using the github link I sent - or googling 'free APIs' find something you're interested in, and make a request for data to that url and log it in the console

// remember to use .json(), async/await and fetch!

// nasa is nice
// unsplash api is nice