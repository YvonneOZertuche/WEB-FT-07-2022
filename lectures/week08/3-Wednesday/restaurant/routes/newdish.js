const express = require('express')
const router = express.Router()
const db = require('../models/database')


//pulling catagories from database for drop down menu
router.get('/newdish', async (req, res) => {
 
  try{
    let records = await db.query('SELECT * FROM categories')

    res.render('newdish', {//this sends to ejs file
      categories: records,
    })
  }  
  catch{

    res.render('newdish', {
      categories: []
    })
  }
 
})

//collect data from form 
router.post('/newdish', async (req,res) => {

  try{

      let {name, description, price, course, imageURL, category } = req.body // needs to match the form on the ejs file

      category = parseInt(category)// convert to string

      price = parseFloat(price)

      let result = await db.result(`INSERT INTO menuitem (name, category, fooddescription, price, course, imageurl) VALUES($1, $2, $3, $4, $5, $6)`, [name, category,description, price, course, imageURL]) //this needs to match the req.body - data base
}
catch(error){

console.log(error)
}
 
 
 
})



module.exports = router