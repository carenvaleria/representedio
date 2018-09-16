const router = require('express').Router()
const Employees = require('../models/employees')
const db = require('../models/index')
module.exports = router


router.get('/:category', async (req, res, next) => {
  try {
    let results = await Employees.findAll({
      attributes: [req.params.category]
    })
    const percentages = {}
    for (let i = 0; i < results.length; i++) {
      const category = results[i].dataValues[req.params.category]
      if (percentages[category]) {
        percentages[category]++
      } else {
        percentages[category] = 1
      }
    }
    for (let key in percentages) {
      percentages[key] = percentages[key] / results.length * 100
    }
    res.json(percentages)
  } catch (err) {
    next(err)
  }
})