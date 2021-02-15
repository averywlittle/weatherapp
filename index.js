require('dotenv').config()
const express = require('express')
const cors = require('cors')
const fetch = require('node-fetch')
const app = express()

app.use(cors())
// Serves static pages from React build
app.use(express.static('build'))
app.use(express.json())

// Routes

app.post('/api/current/', (request, response, next) => {
    
    const cityName = request.body.cityName
    const reqUrl = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${process.env.API_KEY}`

    fetch(reqUrl)
        .then(res => res.json())
        .then(body => console.log(body));

})

app.post('/api/5day/', (request, response, next) => {
    
    // validate incoming data
    const cityName = request.body.cityName
    const reqUrl = `http://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${process.env.API_KEY}`

    fetch(reqUrl)
        .then(res => res.json())
        .then(body => console.log(body));

    // return data
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})