const express = require('express')
const app = express()
let port = 3000

app.use(express.static('public'))
app.set('view engine', 'ejs')


app.use(require('./routes/index'))
app.use(require('./routes/aboutus'))
app.use(require('./routes/faq'))










app.listen(port, () => {
  console.log(`Server is listening on port: ${port}.`)
})
