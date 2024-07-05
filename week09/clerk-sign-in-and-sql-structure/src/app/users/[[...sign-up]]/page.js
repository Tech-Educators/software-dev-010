import connect from "@/utils/connect"
import {auth} from '@clerk/nextjs/server'

export default function Page() {
    // get the current users informtion = we're destructuring out the userID from clerk.
    const {userId} = auth()
    console.log(userId)

    async function handleCreateUser(formData) {
        'use server'
        const db = connect()
        // make an normal object out of my formData
        const data = Object.fromEntries(formData)
        const {username, bio, location} = data

        try {
            db.query(`INSERT INTO users 
            (clerk_id, username, bio, location) 
            VALUES 
            ($1, $2, $3, $4)`,
            [userId, username, bio, location]
            )
        } catch (error) {

        }

    }
    //
    return (
        <div className="text-black">
            <p>this is the sign up page</p>
            <form action={handleCreateUser}>
                <input name="username" placeholder="enter a username"/>
                <input name="bio" placeholder="a small bio..." />
                <input name="location" placeholder="where are you?"/>
                <button className='text-white' type="submit">submit</button>
            </form>
        </div>
    )
}