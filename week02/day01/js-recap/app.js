// please get the h2 from my HTML and store it in a variableCalled headerVar
let headerVar = document.getElementById('header')


let imgTag = document.getElementById('image')

// querySelector is another way of getting elements. querySelectorAll()
let funTag = document.querySelector('fun')

// we can use the .src property to assign a new image source to img Tags

// we can also use .innerText to change the text of element. 

headerVar.textContent  = 'Whoa its a seal '

// .textContent also works!

// this function changes the a value of the source attribute.

function changeImage() {
    imgTag.src = 'https://images.unsplash.com/photo-1565413294262-fa587c396965?q=80&w=2835&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
}



// when we call a function
// changeImage()


// headerVar is now assigned the value of the h2 from our html
// we can use JS to edit the values. 


// CREATING ELEMENTS

// step 1: create it
const h1 = document.createElement('h1')
// step 2: modify it
h1.innerText = 'pandas r so cool'
// step 3: add it to HTML
document.body.appendChild(h1)


// REMOVE ELEMENTS

// step 1: select the element
let oops = document.getElementById('oops')
oops.remove()