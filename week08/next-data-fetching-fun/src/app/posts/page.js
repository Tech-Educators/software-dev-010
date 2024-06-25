import Link from "next/link"

/*
{
    params: {

    },
    searchParams: {

    }
}
*/
export default async function Posts({searchParams}) {
    // searchParams are the things in a route following a question mark?
    // /posts?colour=blue&shirt=nice&price=cheap
    // will be 
    // { colour: 'blue', shirt: 'nice', price: 'cheap' }
    // eg: { sortby: 'desc' }
    console.log(searchParams)
    const result = await fetch(`https://jsonplaceholder.typicode.com/posts/`)
    const posts = await result.json()
    // console.log(posts)

    if (searchParams.sortby == 'desc') {
        // does what it says on the tin
        posts.reverse()
    }

    return (
        <div>
            <Link href='/posts?sortby=desc'>Sort by desc</Link>
            <Link href='/posts'>Sort by asc</Link>
            <h2>This is the posts route:</h2>
            {posts.map((post) => {
                return (
                    <div>
                        <Link href={`/posts/${post.id}`}>{post.id}: {post.title}</Link>
                    </div>
                )
            })}
        </div>
    )
}