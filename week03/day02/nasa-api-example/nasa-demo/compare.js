async function fetchImage() {
    const reponse = await fetch('https://api.nasa.gov/planetary/apod?api_key=5VuojJBFDbU4xbj9Tnr1cMTIx9PKGiHCyTOOWwp3')
    console.log(reponse)
    const image = await reponse.json()

    displayData(image)
}

function displayData(imageData) {
   console.log(imageData)
}

fetchImage()