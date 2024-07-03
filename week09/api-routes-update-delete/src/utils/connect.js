import pg from "pg"

export default function connect() {
    const db = new pg.Pool({
        connectionString: process.env.DB_URL
    })
    return db
}