// allow the user to set their theme - light vs dark mode
console.log(typeof localStorage.getItem('darkMode?')); // its a string! boo

let isDarkMode = localStorage.getItem('darkMode?') // reutrns a string or either 'true' or 'false'

let booleanDarkMode = JSON.parse(isDarkMode) // converting into a boolean value

if (booleanDarkMode) {
    console.log('running');
    document.body.classList.add('dark')
}
// need to check if anything in local storage.
// update document body color

// when the user clicks a button, set the theme.

const themeButton = document.getElementById('theme')

themeButton.addEventListener('click', function () {
    let hmm = document.body.classList.toggle('dark')
    let stringTheme = JSON.stringify(hmm)
    localStorage.setItem('darkMode?', stringTheme)
})