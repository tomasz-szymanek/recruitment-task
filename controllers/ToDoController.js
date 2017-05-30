const ToDo = require('../models/ToDoModel');

class ToDoController {
  constructor() {
  }

  static getAllTodos(req, res, next) {
    ToDo.find(function (err, todos) {
      if (err) return res.boom.badImplementation(`MongoDB Error ${err}`);

      res.jsonp(todos);
    });
  }

  static createTodo(req, res, next) {
    let newToDo = new ToDo(req.body);

    newToDo.save(function (err, todo) {
      if (err) return res.boom.badImplementation(`MongoDB Error ${err}`);

      res.jsonp({status: 'OK', todo });
    });
  }

  static updateTodo(req, res, next) {
    ToDo.findById(req.body.id, function (err, todo) {
      if (err) return res.boom.badImplementation(`MongoDB Error ${err}`);

      todo.value = req.body.value;
      todo.done = req.body.done;

      todo.save(function (err, todo) {
        if (err) return res.boom.badImplementation(`MongoDB Error ${err}`);

        res.jsonp({ status: 'OK', todo });
      });
    });
  }

  static removeTodo(req, res, next) {
    ToDo.findById(req.body.id, function (err, todo) {
      if (err) return res.boom.badImplementation(`MongoDB Error ${err}`);

      todo.remove(function (err, todo) {
        if (err) return res.boom.badImplementation(`MongoDB Error ${err}`);

        res.jsonp({ status: 'OK', todo });
      });
    });
  }
}

module.exports = ToDoController;
