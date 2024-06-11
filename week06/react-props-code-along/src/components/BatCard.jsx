// we do not have to write the word props
// what ever we write in the ()'s will always be an object of whatever information we passs to the BatCard Component
export function BatCard(props) {
    // img_url
    // bat_name
    // bat_location

    // props = 
    // {
    //    img_url: 'Whatever I said in the Container.jsx'
    //    bat_name: 'Whatever I said in the Container.jsx'
    //    bat_location: 'Whatever I said in the Container.jsx'
    // }

    return (
        <div>
            <h2>{props.bat_name}</h2>
            <img src={props.img_url} alt={`A photo of ${props.bat_name}`} />
            <p>{props.bat_location}</p>
        </div>
    )
}

