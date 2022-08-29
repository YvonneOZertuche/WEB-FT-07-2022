const express = require('express');
const app = express();
const helmet = require('helmet');
const port = 3000;

app.use(express.static('public'));
app.use(helmet())
app.set('view engine', 'ejs');

//routes 
app.use(require('./routes/index.js'))
app.use(require('./routes/lectures.js'))
app.use(require('./routes/login.js'))
app.use(require('./routes/registration.js'))
app.use(require('./routes/roster.js'))

app.listen(port, () => {
    console.log(`listening on ort ${port}`);
})