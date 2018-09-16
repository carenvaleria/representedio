const Sequelize = require('sequelize')
const db = require('./index')

const Employee = db.define('employee', {
	gender: {
		type: Sequelize.STRING
	},
	age: {
		type: Sequelize.INTEGER
	},
	race: {
		type: Sequelize.STRING
	},
	military: {
		type: Sequelize.BOOLEAN
	},
	disability: {
		type: Sequelize.BOOLEAN
	},
	lgbt: {
		type: Sequelize.BOOLEAN
	}
})

module.exports = Employee