const ToDo = require('../models/ToDoModel');

class ToDoController {
  constructor() {
  }

  static getAllTodos(req, res, next) {
    ToDo.find(function (err, todos) {
      if (err) {
        console.log(err);
        res.jsonp({error: err});
        return;
      }

      res.jsonp(todos);
    });
  }

  static createTodo(req, res, next) {
    let newToDo = new ToDo(req.body);
    newToDo.save(function (err) {
      if (err) {
        res.jsonp({status: 'ERROR'});
      } else {
        res.jsonp({status: 'OK'});
      }
    });
  }

  static updateTodo(req, res, next) {
    ToDo.findById(req.body.id, function (err, todo) {
      if (err) {
        res.jsonp({error: err});
        return;
      }

      todo.value = req.body.value;
      todo.done = req.body.done;

      todo.save(function (err, todo) {
        if(err) {
          res.jsonp({ status: 'ERROR' });
          return;
        }

        res.jsonp({ status: 'OK' });
      });
    });
  }

  static removeTodo(req, res, next) {
    ToDo.findById(req.body.id, function (err, todo) {
      if (err) {
        res.jsonp({error: err});
        return;
      }

      todo.remove(function (err, todo) {
        if(err) {
          res.jsonp({ status: 'ERROR' });
          return;
        }

        res.jsonp({ status: 'OK' });
      });
    });
  }
}

module.exports = ToDoController;
