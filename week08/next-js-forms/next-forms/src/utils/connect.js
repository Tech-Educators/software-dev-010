import pg from "pg"

export function connect() {
    const db = new pg.Pool({
        connectionString: 'postgresql://postgres.pvjaijaugvkwxizzxnzy:0iFj0zfyMkRhVA2ZNuTF@aws-0-eu-central-1.pooler.supabase.com:6543/postgres'
      })
      return db
}