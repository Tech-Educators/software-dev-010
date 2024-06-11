export default function Image(props) {
    console.log(props)
    // {
    //     thisIsProperty1: 'value1',
    //     thisIsProperty2: 'value2',
    // }
    return (
        <img src={props.img_src} alt={props.alt_text}/>
    )
}




function sayHello(someonesInfo) {
    console.log(`Hello. ${someonesInfo.name}`)
}

sayHello({name: 'Sam'})
sayHello({name: 'Jez'})
sayHello({name: 'Rich'})