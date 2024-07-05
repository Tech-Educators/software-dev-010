import connect from "@/utils/connect"

export default async function Posts() {
    const db = connect()
    const posts = (await db.query(`SELECT * FROM posts`)).rows
    return (
        <div>
            {posts.map((post) => {
                return (
                    <div key={post.id}>
                        <p>{post.post_content}</p>
                    </div>
                )
            })}
        </div>
    )
}