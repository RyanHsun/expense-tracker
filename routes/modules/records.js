const express = require('express')
const router = express.Router()
const Record = require('../../models/record')
const Category = require('../../models/category')

// 設定新增一筆支出的路由 Create
router.get('/new', (req, res) => {
  Category.find()
    .lean()
    .sort({ _id: 'asc' })
    .then(categories => res.render('new', { categories }))
    .catch(error => console.error(error))
})
router.post('', (req, res) => {
  const record = req.body
  return Record.create(record)
    .then(() => res.redirect('/'))
    .catch(error => console.error(error))
})

// 設定編輯特定支出的路由 Update
router.get('/:id/edit', (req, res) => {
  const id = req.params.id
  return Record.findById(id)
    .lean()
    .then((record) => {
      Category.find()
        .lean()
        .sort({ _id: 'asc' })
        .then(categories => res.render('edit', { record, categories }))
        .catch(error => console.error(error))
    })
    .catch(error => console.error(error))
})
router.put('/:id', (req, res) => {
  const id = req.params.id
  return Record.findById(id)
    .then(record => {
      record.name = req.body.name
      record.category = req.body.category
      record.date = req.body.date
      record.amount = req.body.amount
      return record.save()
    })
    .then(() => res.redirect('/'))
    .catch(error => console.error(error))
})

// 設定刪除特定支出的路由 Delete
router.delete('/:id', (req, res) => {
  const id = req.params.id
  return Record.findById(id)
    .then(record => record.remove())
    .then(() => res.redirect('/'))
    .catch(error => console.error(error))
})


module.exports = router