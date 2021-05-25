const mongoose = require('mongoose')
const Record = require('../record')
const records = require('../../records.json')
const Category = require('../category')
const categories = require('../../categories.json')

mongoose.connect('mongodb://localhost/expense-tracker', { useNewUrlParser: true, useUnifiedTopology: true})
const db = mongoose.connection

db.on('error', () => {
  console.log('mongodb error!')
})

db.once('open', () => {
  console.log('mongodb connected!')

  records.results.forEach( item => {
    const name = item.name
    const category = item.category
    const date = item.date
    const amount = item.amount

    return Record.create({ name, category, date, amount })
  })
  console.log('import records done')
  
  categories.results.forEach(item => {
    const name = item.name
    const name_en = item.name_en
    const icon = item.icon

    return Category.create({ name, name_en, icon })
  })
  console.log('import categories done!')
})