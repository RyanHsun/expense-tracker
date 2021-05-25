const express = require('express')
const router = express.Router()
const Record = require('../../models/record')
const Category = require('../../models/category')

// 設定瀏覽所有支出的路由 Read
router.get('/', (req, res) => {
  Record.find()
    .lean()
    .sort({ _id: 'desc' })
    .then(records => {
      Category.find()
        .lean()
        .sort({ _id: 'asc' })
        .then(categories => res.render('index', { records, categories }))
        .catch(error => console.error(error))
    })
    .catch(error => console.error(error))
})


module.exports = router