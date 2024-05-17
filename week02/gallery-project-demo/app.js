let images = [
    {
        url: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1174&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'A mountain in the sun, with a person standing on the summit'
    }, 
    {
        url: 'https://images.unsplash.com/photo-1715606785663-3fa3a08aadec?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'A cool-looking tunnel, not sure what the situation of this tunnel is'
    },
    {
        url: 'https://images.unsplash.com/photo-1464802686167-b939a6910659?q=80&w=1450&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'A galaxy'
    },
    {
        url: 'https://images.unsplash.com/photo-1557479231-e24a676eaa16?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'A beautiful cat looking off to the side'
    },
    {
        url: 'https://images.unsplash.com/photo-1583405584623-58f4b7d1380f?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'The great wall of china in the winter.'
    }
]

let thumbContainer = document.getElementById('thumb-container')
let displayImg = document.getElementById('display-img')

function createThumbnails(arrayOfImages) {
    for (let i = 0; i < arrayOfImages.length; i++) {
        // create an image tag
        let imgElem = document.createElement('img')

        // set the src and the alt text
        // go to my array of images, select the index that i is (first loop is 0, and select the url property of that object)
        imgElem.src = arrayOfImages[i].url
        imgElem.alt = arrayOfImages[i].alt

        // add a class to an element using javascript
        imgElem.classList.add('thumb-img')
        // 
        imgElem.addEventListener('click', function() {
            console.log(imgElem)
            console.log(arrayOfImages[i])
            // when the user click on an image, we're going to call the function responsible for creating the 'big' images - providing it with an argument of the image the user clicked on.
            createDisplayImg(arrayOfImages[i])
        })

        thumbContainer.appendChild(imgElem)
    }
}

createThumbnails(images)


function createDisplayImg(imageObj) {
    displayImg.innerHTML = ''
    // create an image elemnt
    let imgTag = document.createElement('img')
    // add a class
    imgTag.classList.add('hero-img')
    // set the src
    imgTag.src = imageObj.url
    // set the alt
    imgTag.alt = imageObj.alt
    // append child.
    displayImg.appendChild(imgTag)
}


// let myArray = ['tiger', 'boar', 'fox', 'ram', 'dragon']

// let x = 1
// console.log(myArray[x]) // 2

// for (let i = 0; i < myArray.length; i++) {
//     console.log(`We have looped ${i} times`)
//     console.log(`This is the current element in the array i'm looking at: ${myArray[i]}`)
// }


// got our images on the page.
// figure out how to make my images 'clickable'