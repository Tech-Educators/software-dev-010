export default async function Post({params}) {
    const result = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
    const post = await result.json()
    console.log(params.id)
    return (
        <div>
            <h2>This is the post: {post.title}</h2>
            <p>{post.body}</p>
        </div>
    )
}

// /posts/1
// /posts/2
// /posts/3