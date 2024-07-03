import connect from "@/utils/connect";

// how we do the get route in nexjs.
export async function GET(request) {
    return new Response(JSON.stringify({foo: 'bar'}))
}

export async function POST(request) {
    const data = await request.json()
    console.log(data)
    return new Response(JSON.stringify({data}))
}
// in EXPRESS
// app.get('/pets', (req, res) => {
//     res.json({foo: 'bar'})
// })