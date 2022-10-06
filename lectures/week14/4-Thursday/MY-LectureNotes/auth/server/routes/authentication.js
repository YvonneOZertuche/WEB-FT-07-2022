const express = require('express')
const router = express.Router()
const jwt = require('jwt-simple')
const secrets = require('../secrets')

//this function returns JWT
//{id, email, password, createdAt, updatedAt}


const token = (userRecord) => {

  let timestamp = new Date().getTime()
  return jwt.encode({sub:userRecord.id, iat:timestamp},)

}




router.get('/', (req, res) => {

  res.send('Hello World')
})

module.exports = router