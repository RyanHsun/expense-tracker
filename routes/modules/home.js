const express = require('express')
const router = express.Router()
const Record = require('../../models/record')
const Category = require('../../models/category')

// 設定瀏覽所有支出的路由 Read
router.get('/', (req, res) => {
  let totalAmount = 0
  Record.find()
    .lean()
    .sort({ date: 'desc' })
    .then((records) => {
      for (let i = 0; i < records.length; i++) {
        totalAmount += Number(records[i].amount)
      }
      Category.find()
        .lean()
        .sort({ _id: 'asc' })
        .then(categories => res.render('index', { records, categories, totalAmount }))
        .catch(error => console.error(error))
    })
    .catch(error => console.error(error))
})
module.exports = router
