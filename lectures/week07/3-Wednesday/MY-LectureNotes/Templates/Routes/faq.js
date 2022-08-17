const express = require('express')
const router = express.Router()

router.get('/faq', (req, res) => {
  res.send('faq')
})
module.exports = router
