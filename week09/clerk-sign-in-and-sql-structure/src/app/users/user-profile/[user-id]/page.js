import connect from "@/utils/connect";
import {auth} from '@clerk/nextjs/server'

export default async function Page() {

    const {userId} = auth()
    const db = connect()

    const userInfo = (await db.query(`select * from users where clerk_id=$1`, [userId])).rows[0]

    return (
        <div>
            <h2>Your profile:</h2>
            <p>{userInfo.username}</p>
        </div>
    )
}