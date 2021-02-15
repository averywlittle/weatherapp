require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())
// Serves static pages from React build
app.use(express.static('build'))
app.use(express.json())

// Routes



const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})