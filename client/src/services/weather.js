const baseUrl = 'http://localhost:3001/api'

const getCurrent = async (cityName) => {

    const data = { cityName: cityName }
    const response = await fetch(`${baseUrl}/current/`, {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    return response.json()
}

const get5Day = async cityName => {

    const data = { cityName: cityName }
    const response = await fetch(`${baseUrl}/5day/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    return response.json()
}

export default {
    getCurrent,
    get5Day
}