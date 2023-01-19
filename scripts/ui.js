const indexPlayerContainer = document.querySelector('#index-player-container')
const messageContainer = document.querySelector('#message-container')
const showPlayerContainer = document.querySelector('#show-player-container')

export const onIndexPlayerSuccess = (player) => {
    player.forEach(player => {
        const div = document.createElement('div')
        div.innerHTML = `
            <h3>${player.firstName}  ${player.lastName}</h3>
            <button data-id="${player._id}" >Show Player Info</button>
        `

        indexPlayerContainer.appendChild(div)
    })
}

export const onFailure = (error) => {
    messageContainer.innerHTML = `
        <h3>You've got an error! :(</h3>
        <p>${error}</p>
    `
}

export const onCreatePlayerSuccess = () => {
    messageContainer.innerText = 'You have created a player!! :)'
}

export const onShowPlayerSuccess = (player) => {
    const div = document.createElement('div')
    div.innerHTML = `
        <h3>${player.firstName}  ${player.lastName}</h3>
        <p>${player.Number}</p>
        <p>${player.position}</p>
        <p>${player.Team}</p>
        <p>${player._id}</p>
    `
    while(showPlayerContainer.firstChild) {
        showPlayerContainer.removeChild(showPlayerContainer.firstChild)
    }
    showPlayerContainer.appendChild(div)
}