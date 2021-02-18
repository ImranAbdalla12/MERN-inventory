const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  gender: { type: String },
  location: { type: String },
  phone: { type: String, required: true, unique: true },
  creationDate: { type: Date, default: Date.now },
  isAdmin: { type: Boolean },
  isSeller: { type: Boolean },
  isCustomer: { type: Boolean },
  isShipper: { type: Boolean },
  isRestricted: { type: Boolean },
});

// Export Schema
module.exports = User = mongoose.model('users', UserSchema);
