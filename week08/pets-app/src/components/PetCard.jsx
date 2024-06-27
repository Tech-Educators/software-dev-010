// we're going to pass information about each of the pets to this card

import Image from "next/image"
import Link from "next/link"

// do putting it as a parameter
export function PetCard({pet}) {
    console.log(pet)
    return (
        <div className="relative h-52 w-52 overflow-hidden">
            <Link href={`/${pet.id}`}>
                <Image
                src={pet.img_url} 
                alt={`${pet.pet_name}, a ${pet.breed}`} 
                className="object-cover object-center"
                layout="fill"
                />
                <h2 className="relative top-36 left-2 z-10">{pet.pet_name}</h2>
                <p className="relative top-36 left-2 z-10">{pet.breed}</p>
            </Link>
        </div>
    )
}