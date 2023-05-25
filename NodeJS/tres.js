/**
 * 3. Create a RESTful API that allows users to perform CRUD operations on a simple todo list.
    1. Your API should have the following endpoints:
        1. GET /todos - Retrieves a list of all todos
        2. POST /todos - Adds a new todo to the list
        3. GET /todos/:id - Retrieves a specific todo by ID
        4. PUT /todos/:id - Updates a specific todo by ID
        5. DELETE /todos/:id - Deletes a specific todo by ID
    2. Each todo should have a unique ID, a title, and a completed flag (which should be a boolean). You can store the todos in an in-memory array for simplicity.
    You can use Postman or any other tool to test your API endpoints.
 */
// Solución
const express = require("express");
const app = express();
const PORT = 3000;
app.use(express.json());
const todos = [
  { id: 1, title: "Limpiar la casa", completed: false },
  { id: 2, title: "Tomar agua", completed: true },
  { id: 3, title: "Comer pizza", completed: false },
];
app.get("/todos", (req, res) => {
  res.json(todos);
});
app.post("/todos", (req, res) => {
  const { title } = req.body;
  if (!title) {
    res.status(400).json({ error: "Falta el campo título" });
    return;
  }
  const id = todos.length + 1;
  const todo = { id, title, completed: false };
  todos.push(todo);
  res.status(201).json(todo);
});
app.get("/todos/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const todo = todos.find((todo) => todo.id === id);
  if (!todo) {
    res.status(404).json({ error: `No se encontró el todo con id: ${id} ` });
    return;
  }
  res.json(todo);
});
app.put("/todos/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const { title, completed } = req.body;
  const todoIndex = todos.findIndex((todo) => todo.id === id);
  if (todoIndex === -1) {
    res.status(404).json({ error: `No se encontró el todo con id: ${id} ` });
    return;
  }
  const todo = todos[todoIndex];
  if (title) {
    todo.title = title;
  }
  if (completed !== undefined) {
    todo.completed = completed;
  }
  res.json(todo);
});
app.delete("/todos/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const todoIndex = todos.findIndex((todo) => todo.id === id);
  if (todoIndex === -1) {
    res.status(404).json({ error: "Todo not found" });
    return;
  }
  todos.splice(todoIndex, 1);
  res.status(204).end();
});
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
