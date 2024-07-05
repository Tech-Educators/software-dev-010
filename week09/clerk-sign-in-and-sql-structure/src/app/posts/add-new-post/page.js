import connect from '@/utils/connect'
import {auth} from '@clerk/nextjs/server'
import { notFound, redirect } from 'next/navigation'

export default function Page() {
    const {userId} = auth()

    async function handleCreatePost(formData) {
        "use server"
        const db = connect()
        const data = Object.fromEntries(formData)
        const {post_content} = data
        try {
            db.query(`INSERT INTO posts
            (post_content, clerk_id)
            VALUES
            ($1, $2)`,
            [post_content, userId])
            redirect('/posts')
        } catch (error) {
            
        }
    }
    return (
        <div>
            <form action={handleCreatePost}>
                <textarea name="post_content" placeholder="What are your thoughts?" />
                <button type="submit">Post them</button>
            </form>
        </div>
    )
}