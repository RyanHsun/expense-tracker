const mongoose = require('mongoose')
const Schema = mongoose.Schema
const recordSchema = new Schema({
  name: {
    type: String,
    requires: true
  },
  category: {
    type: String,
    requires: true
  },
  date: {
    type: String,
    requires: true
  },
  amount: {
    type: String,
    requires: true
  },
  totalAmount: {
    type: String,
    requires: true
  }
})
module.exports = mongoose.model('Record', recordSchema)

