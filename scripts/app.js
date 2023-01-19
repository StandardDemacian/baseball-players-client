
import { indexPlayer, createPlayer, showPlayer} from './api.js'
import {
	onIndexPlayerSuccess,
	onFailure,
	onCreatePlayerSuccess,
	onShowPlayerSuccess,
} from './ui.js'

const createPlayerForm = document.querySelector('#create-player-form')
const indexPlayerContainer = document.querySelector('#index-player-container')

indexPlayer()
    .then(res => res.json())
    .then(res => {
        console.log(res)
        onIndexPlayerSuccess(res.player)
    })
    .catch(onFailure)


createPlayerForm.addEventListener('submit', (event) => {
    event.preventDefault()

    const playerData = {
			player: {
				firstName: event.target['firstName'].value,
				lastName: event.target['lastName'].value,
				position: event.target['position'].value,
				Number: event.target['number'].value,
                Team: event.target['team'].value
			},
		}

    createPlayer(playerData)
			.then(onCreatePlayerSuccess)
			.catch(onFailure)
})

indexPlayerContainer.addEventListener('click', (event) => {
    const id = event.target.getAttribute('data-id')
    showPlayer(id)
			.then((res) => res.json())
			.then((res) => onShowPlayerSuccess(res.player))
			.catch(onFailure)
})