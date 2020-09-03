const express = require('express')
const path = require('path')

const urllib = require('urllib')
const bodyParser = require('body-parser')

const app = express()

app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'node_modules')))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: false
}))

const port = 8080
app.listen(port, function () {
    console.log(`Running server on port ${port}`)
})

const data = {}

app.get('/recipes/:receipeID',

urllib.request('https://recipes-goodness.herokuapp.com/recipes/oil', function (err, res) {
            const data = JSON.parse(res.toString())
            return data
        }),

function (request, response) {
        let receipeID = request.params.receipeID
        response.send(data[receipeID])
    })