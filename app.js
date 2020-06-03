const path = require('path')
const express = require('express')
const history = require('connect-history-api-fallback')

const app = express()
const port = process.env.PORT || 5000

app.use(history())

app.use(express.json())
app.use(express.static(__dirname + '/vue/dist'))
app.get(/.*/), (req,res) => res.sendFile(__dirname + '/vue/dist/index.html')

app.get('*', (req, res) => {
    res.status('404').json({
        message: 'Page not found.',
        name: 'Danube'
    })
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))