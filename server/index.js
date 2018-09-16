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
app.use(express.static(path.join(__dirname, "/index.html")))

app.use('/api', require('./api'))

app.use('/login', (req, res) => {
	res.sendFile(path.join(__dirname, '..', '/signin.html'))	
})

app.use('/data', (req, res) => {
	res.sendFile(path.join(__dirname, '..', '/barchart.html'))
})

app.use('*', (req, res) => {
	res.sendFile(path.join(__dirname, '..', '/index.html'))
})

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




