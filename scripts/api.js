export const indexPlayer = () => {
    return fetch(`http://localhost:8000/player`)
}

export const createPlayer = (data) => {
    return fetch(`http://localhost:8000/player`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
}

export const showPlayer = (id) => {
    return fetch(`http://localhost:8000/player/${id}`)
}

export const updatePlayer = (data, id) => {
    return fetch(`http://localhost:8000/player/${id}`, {
			method: 'PATCH',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		})
}

export const deletePlayer= (id) => {
    return fetch(`http://localhost:8000/player/${id}`, {
			method: 'DELETE'
		})
}
