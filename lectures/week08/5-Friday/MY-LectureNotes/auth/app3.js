const express = require('express');
const app = express()
let port = 3003

app.use(logger)
app.use(admin)

app.get('/', (req, res) => {
  
  console.log('inside of route')
  res.send('Home Page')
})

//middleware function
function logger(req, res, next){
  req.mySession = "Yvonne"
  console.log('Log')

  next()
}

function admin(req,res, next){
  console.log('inside of route admin')

  next()
}

app.listen(port, (req, res)=>{
  console.log(`Listening on port ${port}`)
})