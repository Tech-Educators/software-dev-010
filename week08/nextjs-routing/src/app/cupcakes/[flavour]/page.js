export default function CupcakeFlavours({params}) {
    // I can get the information about *what* particular route the user visited
    return (
        <div>
            <h2>If the user goes to *anything* after the /cupckaes route, it will show this page</h2>
            <p>You're on the page for the: {params.flavour}</p>
        </div>
    )
}

// cupcakes/vanilla : {flavour: 'vanilla'}
// cupcakes/pumpkin : {flavour: 'pumpkin'}
// cupcakes/almond: {flavour: 'almond'}

