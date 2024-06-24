export default function Game({params}) {
    console.log(params)

    // pg.query(`SELECT * FROM VIDEOGAMES WHERE name= ${params.name}`)
    //{ params: { game: 'morrowind' }, searchParams: {} }
    return (
        <div>
            <h2>This is a page about: {params.id}</h2>
        </div>
    )
}

// route parameter = game

// dynamic routes: 
// dynamic/video-games/starfield
// dynamic/video-games/morrowind
// dyanmic/video-games/bg3 