import { PetCard } from "@/components/PetCard"
import { connect } from "@/utils/connect"
import Link from "next/link"
export default async function Page({searchParams}) {
  const db = connect()
  const pets = (await db.query(`SELECT * FROM pets`)).rows

  if (searchParams.sortBy == 'desc') {
    pets.reverse()
  }

  return (
    <div className="flex flex-wrap gap-4 justify-center">
      <Link href='/pets?sortBy=desc'>sort by decending</Link>
      {pets.map((pet) => {
        return (
          <PetCard pet={pet} />
        )
      })}
    </div>
  )
}