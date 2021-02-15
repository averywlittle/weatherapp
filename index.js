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
    
    if (request.body.cityName) {
        const cityName = request.body.cityName
        const reqUrl = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${process.env.API_KEY}`
    
        fetch(reqUrl)
            .then(res => res.json())
            .then(body => response.json(body))
            .catch(error => next(error))
            
    } else {
        response.status(400).send({ error: 'must include valid city name' })
    }

})

app.post('/api/5day/', (request, response, next) => {
    
    if (request.body.cityName) {
        const cityName = request.body.cityName
        const reqUrl = `http://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${process.env.API_KEY}`

        fetch(reqUrl)
            .then(res => res.json())
            .then(body => response.json(body))
            .catch(error => next(error))

    } else {
        response.status(400).send({ error: 'must include valid city name' })
    }
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})