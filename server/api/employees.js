const router = require('express').Router()
const Employee = require('../models/employees')
module.exports = router

router.get('/:category', async (req, res, next) => {
  try {
    let results = await Employee.findAll({
      attributes: [req.params.category]
    })
    const percentages = {}
    for (let i = 0; i < results.length; i++) {
      if (percentages[results[i]]) {
        percentages[results[i]]++
      } else {
        percentages[results[i]] = 1
      }
    }
    for (let key in percentages) {
      percentages[key] = percentages[key] / results.length * 100
    }
  } catch (err) {
    next(err)
  }
})