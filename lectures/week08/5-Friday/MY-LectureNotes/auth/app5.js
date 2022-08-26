const express = require('express')
const app = express()
const cookieSession = require('cookie-session');

app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.use(cookieSession({
  name: 'session',
  keys: ['sdfsfsdfssfsfsdfsfsfs'],
  maxAge: 12 * 24 * 60 * 60 * 1000
}))

let users = [
  { username: 'Matt', password: '1234' },
  { username: 'Jake', password: '4567' },
  { username: 'Brandon', password: '8901' },
  { username: 'Jose', password: '1122' }
]

app.get('/', (req, res) => {

  res.render('index')
})

app.all('/admin/*', auth)


app.get('/admin/dashboard', (req, res) => {
  res.render('dashboard')
})


app.get('/admin/metrics', (req,res)=> {

  res.render('metrics')
  
})

app.get('/admin/users', (req,res)=> {

  res.render('users')
})

app.get('/admin/stats', (req,res)=> {

  res.render('stats')
})

app.post('/login', (req, res) => {
  //username, password
  //check db for correct username, pwd

  //place the user's id on the session 


let {userID, password} = req.body

let user = users.find(userRecord => {
  return userRecord.username == userID && userRecord.password == password
})

if(user){
  req.session.isAuthenticated = true
}
else {
  res.redirect('/')
}

})

app.get('protected', auth, (req, res) => {

  res.send('protected')
})

function auth(req, res, next){
  if(req.session.isAuthenticated){
    next()
  }
  else{
    res.direct('/')
  }
}

app.get('/', (req, res)=> {
  res.send('hey everyone')
})




app.listen(3200, () => console.log('Server Started'))