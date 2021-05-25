const express = require('express')
const router = express.Router()
const Record = require('../../models/record')
const Category = require('../../models/category')

// 設定使用分類篩選支出的路由
router.get('/', (req, res) => {
  const category = req.query.category
  let totalAmount = 0

  Record.find({ category: category })
    .lean()
    .then((records) => {
      for (let i = 0; i < records.length; i++) {
        totalAmount += Number(records[i].amount)
      }
      Category.find()
        .lean()
        .sort({ _id: 'asc' })
        .then(categories => {
          if (records == 0) {
            res.render('error', { categories, category })
          } else {
            res.render('index', { records, categories, category, totalAmount })
          }
        })
    })
    .catch(error => console.error(error))
})

module.exports = router
