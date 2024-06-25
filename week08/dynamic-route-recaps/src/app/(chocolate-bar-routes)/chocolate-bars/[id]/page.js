import { findChocoBySlug } from "@/utils/stores"
export default function DynamicRoute({params}) {
    /*
    params: {
        id: 'whatever-chocolate-bar'
    }
    */

    // we are using the dynamic route param - the [id] to 
    // get the correct chocolate information from the chololateBars array we made earlier. 
   const chocolate = findChocoBySlug(params.id)
    return (
        <div>
            <h2>{chocolate.name}</h2>
            <p>{chocolate.history}</p>
        </div>
    )
}