const express = require('express')
const app = express()
let port = 3150

app.get('/', (req,res)=>{

  res.send('home page')
console.log('!Hola Mundo!')

})

app.get('/dashboard', (req,res)=>{
  console.log('dashboard')
})

function countLog(req, res, next){

  count++;
  next()
}
app.listen('port', (req,res)=> {
  console.log(`Listening on port ${port}`)
})