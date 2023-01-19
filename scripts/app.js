
import { indexPlayer, createPlayer, showPlayer, updatePlayer, deletePlayer} from './api.js'
import {
	onIndexPlayerSuccess,
	onFailure,
	onCreatePlayerSuccess,
	onShowPlayerSuccess,
	onUpdatePlayerSuccess,
	onDeletePlayerSuccess,
} from './ui.js'

const createPlayerForm = document.querySelector('#create-player-form')
const indexPlayerContainer = document.querySelector('#index-player-container')
const showPlayerContainer = document.querySelector('#show-player-container')


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

showPlayerContainer.addEventListener('submit', (event) => {
	event.preventDefault()
	const id = event.target.getAttribute('data-id')
	const playerData = {
		player: {
			firstName: event.target['firstName'].value,
			lastName: event.target['lastName'].value,
			position: event.target['position'].value,
			number: event.target['number'].value,
			team: event.target['team'].value
		},
	}
	updatePlayer(playerData, id)
		.then(console.log)
		.catch(console.error)

	updatePlayer(playerData, id)
		.then(onUpdatePlayerSuccess)
		.catch(console.error)

	updatePlayer(playerData, id)
		.then(onUpdatePlayerSuccess)
		.catch(onFailure)
})

showPlayerContainer.addEventListener('click', (event) => {
	const id = event.target.getAttribute('data-id')

	if (!id) return

	deletePlayer(id)
		.then(onDeletePlayerSuccess)
		.catch(console.error)

	deletePlayer(id)
		.then(onDeletePlayerSuccess)
		.catch(onFailure)
})