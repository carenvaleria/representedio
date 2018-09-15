const Sequelize = require('sequelize')
const db = require('./index')

const Employee = db.define('employee', {
	Gender: {
		type: Sequelize.STRING
	},
	Age: {
		type: Sequelize.INTEGER
	},
	Race: {
		type: Sequelize.STRING
	},
	Military: {
		type: Sequelize.BOOLEAN
	},
	Disability: {
		type: Sequelize.BOOLEAN
	},
	LGBTQ: {
		type: Sequelize.BOOLEAN
	}
})

module.exports = Employee