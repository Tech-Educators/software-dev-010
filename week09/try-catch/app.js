// try catch should be used wheen ever you're doing a database call or a fetch function.

try {
    console.log(sum())
} catch (error) {
    console.log(error.message)
}

function sum(a,b) {
    if (!a || !b) {
        throw new Error('sum() has to have two numbers provided in the arguments list.')
    }
    return a + b
}