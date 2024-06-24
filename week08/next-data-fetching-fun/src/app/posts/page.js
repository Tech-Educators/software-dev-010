import Link from "next/link"

export default async function Posts() {
    const result = await fetch(`https://jsonplaceholder.typicode.com/posts/`)
    const posts = await result.json()
    // console.log(posts)
    return (
        <div>
            <h2>This is the posts route:</h2>
            {posts.map((post) => {
                return (
                    <div>
                        <Link href={`/posts/${post.id}`}>{post.title}</Link>
                    </div>
                )
            })}
        </div>
    )
}