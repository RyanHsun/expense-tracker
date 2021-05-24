const mongoose = require('mongoose')
const Schema = mongoose.Schema
const categorySchema = new Schema({
  name: {
    type: String,
    requires: true
  },
  name_en: {
    type: String,
    requires: true
  }
})
module.exports = mongoose.model('Category', categorySchema)