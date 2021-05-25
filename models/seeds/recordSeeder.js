const Record = require('../record')
const records = require('../../records.json')
const Category = require('../category')
const categories = require('../../categories.json')
const db = require('../../config/mongoose')

db.once('open', () => {
  records.results.forEach( item => {
    const name = item.name
    const category = item.category
    const date = item.date
    const amount = item.amount

    return Record.create({ name, category, date, amount })
  })
  console.log('import records, done!')
  
  categories.results.forEach(item => {
    const name = item.name
    const name_en = item.name_en
    const icon = item.icon

    return Category.create({ name, name_en, icon })
  })
  console.log('import categories, done!')
})