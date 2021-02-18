const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CompanyOrerSchema = new Schema({
  orderName: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  orderQuantity: {
    type: String,
    required: true,
  },
  orderSupplier: {
    type: String,
    required: true,
  },
  orderCost: {
    type: String,
    required: true,
  },
  oderTax: {
    type: String,
  },
  supplierInfo: [
    {
      name: {
        type: String,
      },
      location: {
        type: String,
      },
      phone: {
        type: String,
      },
      email: {
        type: String,
      },
    },
  ],
  oderReceived: {
    type: Boolean,
    default: false,
  },
});
// Export Schema
module.exports = Tasks = mongoose.model('companyorders', CompanyOrerSchema);
