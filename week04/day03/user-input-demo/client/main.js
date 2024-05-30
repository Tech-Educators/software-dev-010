// I want to fetch a comment from a server

const commentsDisplay = document.getElementById('comments')
const form = document.getElementById('commentForm')

//localhost/:1 Access to fetch at 'http://localhost:8080/comments' from origin 'http://localhost:5173' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource. If an opaque response serves your needs, set the request's mode to 'no-cors' to fetch the resource with CORS disabled.

// if you see the above error, we need to go back to our server code and install a package called cors
// import cors
// and use it


async function fetchComment() {
    let response = await fetch('http://localhost:8080/comments')
    let readAsJSON = await response.json()
    commentsDisplay.innerText = readAsJSON.comment
}

fetchComment()
// post data