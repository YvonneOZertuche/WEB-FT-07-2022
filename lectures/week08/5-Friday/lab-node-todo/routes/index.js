const express = require("express");
const router = express.Router();
const db = require('../models');

router.get("/", (req, res) => {
  res.render("index");
});


//! test endpoints using thunder client before messing with frontend
// GET /todos, displays all of the todos
router.get('/todos', async (req,res)=>{
  try {
    let records = await db.todos.findAll(); //*sends records to database>
    res.json(records)
    
  } catch (error) {
    console.log(error)
    res.json({})
  }
})

// GET /todos/:id , displays todos by id
router.get('/todos/:id', async (req, res)=>{
  try {
    let id = req.params.id 
    let records = await db.todos.findByPk(id) //*Pk = primary key found for each item found in the db 
    console.log(records)
    res.json(records) 
    
  } catch (error) {
    console.log(error)
  }

})


// POST /todos, creates a new todo

// const addTodos = async () => {
//   await db.todos.create({description: "Pitch a Fit"})
//   await db.todos.create({description: "Cry"})
//   await db.todos.create({description: "Take a Nap"})
// }
// addTodos()

router.post('/todos', async (req, res)=> {
  let todoItem = req.body.description //*what is 'req.body'
  //console.log(req.body)
  await db.todos.create({description: `${todoItem}`})
  let records = await db.todos.findAll()
  res.json(records)
})

// PUT /todos/:id, update a todo item
router.put('/todos/:id', async (req, res) => {
  let id = req.params.id
  let description = req.body.description
  await db.todos.update({ description: description }, { where: { id: id } })
  let records = await db.todos.findAll()
  res.json(records)
})


// DELETE /todos/:id, delete a todo
deleteRecord = (id) => {
  db.todos.destroy({where: {id:id}})
}

deleteRecord()

module.exports = router;
