const express = require('express')
const router = express.Router()

router.get('/index', (req, res) =>{

  
  res.render('index', {
    firstName: 'Yvonne',
    lastName: 'Zertuche',
    year: 2022,
    nums: [1, 2, 3, 4],
    contacts: {year: 2022}

  })
  //second argument of render is how we pass information to our template
})

module.exports = router
