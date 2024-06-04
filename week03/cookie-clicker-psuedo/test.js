async function fetchData() {
    let response = await fetch('https://cookie-upgrade-api.vercel.app/api/upgrades')
    let final = await response.json()
    console.log(final)

}

fetchData()


