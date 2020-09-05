const express = require('express')
const path = require('path')
const urllib = require('urllib')

const app = express()

app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'node_modules')))

const port = 8080
app.listen(port, function () {
    console.log(`Running server on port ${port}`)
})

app.get('/recipes/:receipeID', function (request, response) {
    urllib.request('https://recipes-goodness.herokuapp.com/recipes/cheese', function (err, data) {
        let result = JSON.parse(data.toString())
        console.log(result)    
    
    })
})
