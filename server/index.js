const express = require('express')
const db = require('./models/index')
const bodyParser = require('body-parser')
const port = process.env.PORT || 3000
const path = require('path')


const app = express()

module.exports = app

app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.text())
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, "./client")))

app.use('/api', require('./api'))

// error handling endware
app.use((err, req, res, next) => {
	console.error(err)
	console.error(err.stack)
	res.status(err.status || 500).send(err.message || 'Internal server error.')
})


db.sync()

app.listen(port, () => {
	console.log(`listening on port ${port}`)
})




