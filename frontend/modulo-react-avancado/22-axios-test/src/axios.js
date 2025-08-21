import axios from 'axios'

export async function fetchUserDetails(element, userName) {
    try {
        // const response = await fetch(`https://api.github.com/users/${userName}`)
        const response = await axios.get(`https://api.github.com/users/${userName}`)

    //     if (!response.ok) {
    //         throw new Error(`Github API returned status code ${response.status} `)
    //     }

    //     const user = await response.json()

        const user = response.data

        element.innerHTML = `
          <img src="${user.avatar_url}" alt=${user.name} />
          <h1>${user.name ? user.name : "No name"}</h1>
          <p>${user.bio ? user.bio : "No Bio"}</p>
       `

    } catch (error) {
        console.error(`Error fetching Github user: ${error.message}`)
        element.innerHTML = `<p>Error loading user data</p>`
    }
}