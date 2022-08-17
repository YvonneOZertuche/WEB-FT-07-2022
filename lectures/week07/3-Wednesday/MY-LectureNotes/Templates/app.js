const express = require('express')
const app = express()
let port = 3000

app.use(express.static('public'))//hold all of our static resources

app.listen(port, () => {
  console.log(`Server is listening on port: ${port}.`)
});

// app.get('/', (req,res) => {
//   res.send('Hola Mundo')
// })