const express = require('express');
const Todo = require('../models/Todo');

const router = express.Router();

// Get all todos for a user
router.get('/', async (req, res) => {
  try {
    const { userId } = req.query;
    const todos = await Todo.find({ userId });
    res.json(todos);
  } catch (err) {
    res.status(500).json({ message: 'Server Error' });
  }
});

// Add a new todo
router.post('/', async (req, res) => {
  try {
    const { task, status, priority, userId } = req.body;
    const newTodo = new Todo({ task, status, priority, userId });
    await newTodo.save();
    res.status(201).json(newTodo);
  } catch (err) {
    res.status(500).json({ message: 'Server Error' });
  }
});

// Update a todo
router.patch('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { task, status, priority } = req.body;
    const updatedTodo = await Todo.findByIdAndUpdate(id, { task, status, priority }, { new: true });
    res.json(updatedTodo);
  } catch (err) {
    res.status(500).json({ message: 'Server Error' });
  }
});

// Delete a todo
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await Todo.findByIdAndDelete(id);
    res.json({ message: 'Todo deleted' });
  } catch (err) {
    res.status(500).json({ message: 'Server Error' });
  }
});

module.exports = router;