let country = {
    name: 'England',
    weather: 'Too hot/Too cold',
    cities: [
        ['London', 'Mayfair'],
        ['Liverpool', 'Baltic'],
        ['Hull', 'Willaby']
    ]
}

// to access a 'simple' property, we just use '.' and then the property name

console.log(country.name) // 'England'

console.log(country.cities) //[['London', 'Mayfair'],['Liverpool', 'Baltic'],['Hull', 'Willaby']]

console.log(country.cities[1]) // '[Liverpool, Baltic]'

console.log(country.cities[2][1]) // Willaby



// lets pretend that we know how to fetch data.

let fetchedData = {
    pages: 10,
    totalResults: 100,
    results: [
        {
            alt: 'A busy street in tokyo taken at night',
            url: 'https://images.unsplash.com/photo-1542051841857-5f90071e7989?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NDAwMzB8MHwxfHNlYXJjaHwxfHxqYXBhbnxlbnwwfHx8fDE3MTU3ODI2ODB8MA&ixlib=rb-4.0.3&q=80&w=1080',
            author: 'Unsplash',
            color: '#0c5973'
        },
        {
            alt: 'An orange looking photo of a alley in japan',
            url: 'https://images.unsplash.com/photo-1554797589-7241bb691973?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NDAwMzB8MHwxfHNlYXJjaHwxMHx8amFwYW58ZW58MHx8fHwxNzE1NzgyNjgwfDA&ixlib=rb-4.0.3&q=80&w=1080',
            author: 'Unsplash_sam',
            color: '#0c5973'
        }
    ]
}

let imgTag = document.getElementById('img')
imgTag.src = fetchedData.results[0].url


let myBlogPost = {
    title: `What's the difference between java and javascript???`,
    tags: ['coding', 'java', 'javascript']
}

for (let i = 0; i < myBlogPost.tags.length; i++) {
    console.log(myBlogPost.tags[i])
}
