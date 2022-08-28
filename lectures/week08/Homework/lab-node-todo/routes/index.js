const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("index");
});


//! test endpoints using thunder client before messing with frontend
// GET /todos, displays all of the todos

// GET /todos/:id , displays todos by id

// POST /todos, creates a new todo

// PUT /todos/:id, update a todo item

// DELETE /todos/:id, delete a todo

module.exports = router;
