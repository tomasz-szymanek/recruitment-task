const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

const Schema = mongoose.Schema;

let ToDoSchema = new Schema({
  value: {
    type: String,
    required: true
  },
  done: {
    type: Boolean,
    default: false
  }
});

const ToDo = mongoose.model('ToDo', ToDoSchema);

module.exports = ToDo;