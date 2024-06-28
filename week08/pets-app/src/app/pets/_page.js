import { PetCard } from "@/components/PetCard"
import { connect } from "@/utils/connect"
import Link from "next/link"
export default async function Page({searchParams}) {
  const db = connect()
  const pets = (await db.query(`SELECT * FROM pets`)).rows

    // we have to make a copy so that when the user chooses not to sort by anything we have a 'clean' array that hasn't been modified preivously. 
    // usig the spread operator to make a copy of the array
    // remember that ramble I went on about passing by reference vs value?
    // this is why we have to do that. 
    // google this phrase 'passing by reference vs value javascript' 
    // to learn more.
    const copy = [...pets]
    const query = searchParams.sortBy

    if (query == 'alphaAsc') {
      // sort works by comparing two elements in an array one by one and either swapping their positions or not swapping. We can provide a callback function to it to gain more control over how the sort works. We call the first element 'a' and the second 'b'. 
      // inside the callback function, I'm calling the string method 'localCompare' on element 'a'. 
      // localeCompare compares two strings to eachother and returns either a positive or negative number (or 0 if they're the same)
      // the 'en' is to say 'compare these as strings of english
      // and the ignorePunctiuation does what it says on the tin.

      // if the number is 1, a should go after b
      // if the number is -1, a should be before b
      // if the number is 0, they're equal. 

      // javascript will call this several times to verify everything is in the correct place. 
      // .sort is really complex. 
      // my advice is to just google what you need to do 
      // 'js sort array alphabetically' 
      // 'js sort array numerically'
      // 'js sort array ignore uppercase difference' 
      copy.sort((a,b) => {
        console.log(`comparing ${a.pet_name}, and ${b.pet_name}. result: ${a.pet_name.localeCompare(b.pet_name, "en", {ignorePunctuation: true })})}`)
        return a.pet_name.localeCompare(b.pet_name, "en", {ignorePunctuation: true })});
    } else if (query == 'alphaDesc') {
      // same but comparing b to a, so the results are reversed. 
      copy.sort((a,b) => b.pet_name.localeCompare(a.pet_name, "en", {ignorePunctuation: true }));
    } else if (query == 'timeAsc') {
      copy.reverse()
  }



  return (
    <div className="flex flex-wrap gap-4 justify-center">
      <Link href='/pets?sortBy=alphaAsc'>Sort Alphabetically</Link>
      <Link href='/pets?sortBy=alphaDesc'>Sort Aphabetically Desc</Link>
      <Link href='/pets?sortBy=timeAsc'>Show newest</Link>
      {copy.map((pet) => {
        return (
          <PetCard pet={pet} />
        )
      })}
    </div>
  )
}