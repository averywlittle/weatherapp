const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
}

const success = async (pos) => {

    const dataObj = { 
        cityName: null, 
        coords: {
        longitude: pos.coords.longitude,
        latitude: pos.coords.latitude
        } 
    }

    const currentData = await weatherService.getCurrent(dataObj)
    setCurrent(currentData)

    const fiveData = await weatherService.get5Day(dataObj)

    setMessage(`Weather data for ${currentData.name} retrieved`)
    setTimeout(() => {
        setMessage('')
    }, 5000)
}

const error = (err) => {
    setError('Could not retrieve your location, please type the city you want')
    setTimeout(() => {
        setError('')
    }, 5000)
}

// get the user location from browser
navigator.geolocation.getCurrentPosition(success, error, options)