const express = require ('express')
const app = express()
let port = 3001


app.listen(port, (req, res) => {
   console.log(`Listening on port: ${port}`)
})