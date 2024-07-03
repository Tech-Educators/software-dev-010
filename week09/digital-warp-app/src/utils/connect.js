import pg from "pg"

export default function connect() {
    console.log('whats this', process.env.DB_Connection)
    const db = new pg.Pool({
        connectionString: process.env.DB_Connection
    })
    return db
}
