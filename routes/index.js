const express = require('express');
const router = express.Router();

const ToDoController = require('../controllers/ToDoController');

router.get('/todo', ToDoController.getAllTodos);

router.post('/todo', ToDoController.createTodo);

router.put('/todo', ToDoController.updateTodo);

router.delete('/todo', ToDoController.removeTodo);

module.exports = router;
