import connect from "@/utils/connect";

export default async function Page({params}) {
    // switched to using params instead of user auth so we can show other user information
    const db = connect()

    const userInfo = (await db.query(`select * from users where clerk_id=$1`, [params.user_id])).rows[0]

    return (
        <div>
            <h2>profile:</h2>
            <p>{userInfo.username}</p>
            <p>{userInfo.location}</p>
        </div>
    )
}