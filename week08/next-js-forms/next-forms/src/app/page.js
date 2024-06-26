import pg from "pg"
import { PetCard } from "@/components/PetCard"
export default async function Home() {

  const db = new pg.Pool({
    connectionString: 'postgresql://postgres.pvjaijaugvkwxizzxnzy:0iFj0zfyMkRhVA2ZNuTF@aws-0-eu-central-1.pooler.supabase.com:6543/postgres'
  })

  const pets = (await db.query(`SELECT * FROM pets`)).rows
  // console.log(pets)
  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {pets.map((pet) => {
        return (
          <PetCard pet={pet} />
        )
      })}
    </div>
  )
}