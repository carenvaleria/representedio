const router = require('express').Router()
module.exports = router

router.use('/employees', require('./employees'))

router.use((res, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})