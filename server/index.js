const express = require('express')
const db = require('./models/index')
const bodyParser = require('body-parser')
const port = proccess.env.PORT || 3000

const app = express()

module.exports = app

app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.text())
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, "./public")))

app.use('/api', require('./api'))

// error handling endware
app.use((err, req, res, next) => {
	console.error(err)
	console.error(err.stack)
	res.status(err.status || 500).send(err.message || 'Internal server error.')
})

app.listen(port, () => {
	console.log(`listening on port ${port}`)
})

