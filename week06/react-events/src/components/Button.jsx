import "./Button.css"

export function Button({joke}) {

    function handleClick(theJokeParameter) {
        alert(theJokeParameter)
    }

    return (
        <button onClick={function() {
            handleClick(joke)
        }} className="cool-button">Click me!</button>
    )
}
