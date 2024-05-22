// https://api.unsplash.com/search/photos?page=1&query=winter&client_id=OmG0FZqCP8A7GhQjYOIs8mqplMHO4OD0xWwoopV1CaA

// async/await
async function fetchImages() {
    const response = await fetch('https://api.unsplash.com/search/photos?page=1&query=winter&client_id=OmG0FZqCP8A7GhQjYOIs8mqplMHO4OD0xWwoopV1CaA')
    const final = await response.json()
    // console.log(final.results[0]) // this is an image object from unplash
    displayImage(final.results[0]) // final.results[0] becomes the value of 'imageObject'
}

fetchImages()

function displayImage(imageObject) {
    console.log(imageObject)
}

// using the github link I sent - or googling 'free APIs' find something you're interested in, and make a request for data to that url

// nasa is nice
// unsplash api is nice