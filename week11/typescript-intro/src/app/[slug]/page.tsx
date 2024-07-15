type pageParams = {
    params: 
        {
            slug : string
        }
}

export default function Page({params}: pageParams) {
    console.log(params)
    return (
        <div>
            <h2>This is the dynamic games page!</h2>
            <p>{params.slug}</p>
        </div>
    )
}