import { PetCard } from "@/components/PetCard"
import { connect } from "@/utils/connect"
export default async function Page() {
  const db = connect()
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