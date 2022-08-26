const express = require('express')
const app = express()
const cookieSession = require('cookie-session');

let port = 3001

//session and cookie

//install cookieSession

//persist information from route to route



app.use(cookieSession ({
  name: 'session',
  keys: ['ffdafsfsfsfsfsfsfsfsfsafs'],
  maxAge: 14 * 24 * 60 *60 * 1000  //14 days in miliseconds
}))

// app.get('/', (req,res)=> {
//   res.send('home page')
// })


app.get('/', (req,res)=> {

  req.session.fName= "Christian"  // place this on cookied
  res.send('!hola mundo!')
  

})

app.get('/protected', (req,res)=>{

  res.send(`protected ${req.session.fName}`)
})


app.listen(port, () => {

  console.log(`Listening on port ${port}`)
})