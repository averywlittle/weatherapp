const baseUrl = '/api'

const getCurrent = async ({ cityName, coords }) => {

  const data = { cityName: cityName, coords: coords }
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

const get5Day = async ({ cityName, coords }) => {

  const data = { cityName: cityName, coords: coords }
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