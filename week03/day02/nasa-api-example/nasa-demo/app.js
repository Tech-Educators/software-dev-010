async function fetchImage() {
    // const reponse = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${process.env.nasa_api}`)

    const reponse = await fetch(`https://api.nasa.gov/planetary/apod?api_key=somethingsomething}`)
    const image = await reponse.json()
    return image
}

async function displayData() {
    const imageData = await fetchImage()
    console.log(imageData)

    // p tag for explination
    const pTag = document.createElement('p')
    // img tag for the url
    const imageTag = document.createElement('img')

    pTag.innerText = imageData.explanation
    imageTag.src = imageData.hdurl

    const div = document.getElementById('app')

    div.appendChild(imageTag)
    div.appendChild(pTag)
}

displayData()


