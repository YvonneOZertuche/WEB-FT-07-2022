
const express = require('express');
const app = express();
const port = 3000;

const db = require('./models')
app.use(express.static('public'));

app.set('view engine', 'ejs');

//routes
app.use(require('./routes/index'));

//! test endpoints using thunder client before messing with frontend
// GET /todos, displays all of the todos

// GET /todos/:id , displays todos by id

// POST /todos, creates a new todo

const createTodo = async () => {
  await db.todos.create({ description: 'Pitch a Fit' })
  await db.todos.create({ description: 'Cry' })
  await db.todos.create({ description: 'Take a Nap' })
}

createTodo()
// PUT /todos/:id, update a todo item

// DELETE /todos/:id, delete a todo

// module.exports = router


app.listen(port, ()=>{
    console.log(`listening on port ${port}`);
})