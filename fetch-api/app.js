
async function fetchComments() {
    // // if we do the line below, the actual code won't come in - we just get a IOU (promise)
    // let comments = fetch('https://jsonplaceholder.typicode.com/comments')

    let response = await fetch('https://api.github.com/repos/slouloudis/gallery-project')
    console.log(response)
    // I have my book - now I need to tell my code what language to read it in.
    let comments = await response.json()
    console.log(comments)
    // we don't need to tell javascript how to deal with JSON, it will make the conversion on it's own.
    return comments
}


// async function displayComment() {
//     // get container by id

//     const comments = await fetchComments()

//     comments.forEach(function (comment) {
//         // make html for each comment
//     })
// }

// displayComment()