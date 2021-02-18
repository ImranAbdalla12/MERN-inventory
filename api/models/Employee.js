const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const EmployeeSchema = new Schema({
  name: [
    {
      firstName: { type: String, required: true },
      secondName: { type: String, required: true },
    },
  ],
  gender: {
    type: String,
    required: true,
  },
  hireDate: {
    type: Date,
    default: Date.now,
  },
  department: {
    type: String,
    required: true,
  },
  salaryInfo: [
    {
      salary: {
        type: String,
        required: true,
      },
      from: {
        type: Date,
        required: true,
      },
      to: {
        type: Date,
      },
      current: {
        type: Boolean,
        default: false,
      },
    },
  ],
  title: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
  },
  address: [
    {
      POB: {
        type: String,
        required: true,
      },
      location: {
        type: String,
        required: true,
      },
      homePhone: {
        type: String,
        required: true,
      },
      workPhone: {
        type: String,
        required: true,
      },
    },
  ],
  experience: [
    {
      title: {
        type: String,
        required: true,
      },
      company: {
        type: String,
        required: true,
      },
      from: {
        type: Date,
        required: true,
      },
      to: {
        type: Date,
      },
      current: {
        type: Boolean,
        default: false,
      },
      description: {
        type: String,
      },
    },
  ],
  social: {
    twitter: {
      type: String,
    },
    facebook: {
      type: String,
    },
    linkedin: {
      type: String,
    },
  },
});

// Export Schema
module.exports = User = mongoose.model('users', UserSchema);
