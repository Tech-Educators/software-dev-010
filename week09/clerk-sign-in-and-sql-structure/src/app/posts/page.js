import connect from "@/utils/connect"
import Link from "next/link"

export default async function Posts() {
    const db = connect()
    const posts = (await db.query(`
    SELECT posts.post_content, posts.created_at, users.username, posts.clerk_id
    FROM posts
    INNER JOIN 
    users
    ON posts.clerk_id = users.clerk_id
    `)).rows
    console.log(posts)
    return (
        <div>
            {posts.map((post) => {
                return (
                    <div key={post.id}>
                        <Link href={`/users/user-profile/${post.clerk_id}`}> {post.username} writes...</Link>
                        <p>{post.post_content}</p>
                    </div>
                )
            })}
        </div>
    )
}