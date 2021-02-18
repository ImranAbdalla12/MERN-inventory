const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const TaksSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users',
    required: true,
  },
  taskName: {
    type: String,
    required: true,
  },
  taskDesc: {
    type: String,
    required: true,
  },
  dateAssigned: {
    type: Date,
    default: Date.now,
  },
  requiredDate: {
    type: Date,
  },
  completed: { type: Boolean, default: false },
});

// Export Schema
module.exports = Tasks = mongoose.model('tasks', TaksSchema);
