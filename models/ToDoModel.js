const mongoose = require('mongoose');
var mongoAddr = process.env.MONGO_ADDR || 'localhost'
mongoose.connect('mongodb://' + mongoAddr + '/test');

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
