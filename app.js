const express = require('express')
const mongoose = require('mongoose')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const Record = require('./models/record')
const Category = require('./models/category')

const app = express()
const port = 3000

// 資料庫連線
mongoose.connect('mongodb://localhost/expense-tracker', { useNewUrlParser: true, useUnifiedTopology: true})
const db = mongoose.connection
db.on('error', () => {
  console.log('mongodb error!')
})

db.once('open', () => {
  console.log('mongodb connected!')
})

// Handlebars 設定
app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')

// Body-Parser 設定
app.use(bodyParser.urlencoded({ extended: true }))

// 設定瀏覽所有支出的路由
app.get('/', (req, res) => {
  Record
    .find()
    .lean()
    .then(records => res.render('index', { records }))
    .catch(error => console.error(error))
})

// 設定新增一筆支出的路由 Create
app.get('/records/new', (req, res) => {
  Category
    .find()
    .lean()
    .then(categories => res.render('new', { categories }))
    .catch(error => console.error(error))
})
app.post('/records', (req,res) => {
  const record = req.body
  return Record
    .create( record )
    .then(() => res.redirect('/'))
    .catch(error => console.error(error))
})

// 設定編輯特定支出的路由 Update
app.get('/records/:id/edit', (req,res) => {
  const id = req.params.id
  return Record
    .findById(id)
    .lean()
    .then((record) => {
      Category
        .find()
        .lean()
        .then(categories => res.render('edit', { record, categories }))
        .catch(error => console.error(error))
    })
    .catch(error => console.error(error))
})
app.post('/todos/:id/edit', (req,res) => {
  const id = req.params.id
  return Record
    .findById(id)
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

// 社刪除特定支出的路由
app.post('/records/:id/delete', (req, res) => {
  const id =  req.params.id
  return Record
    .findById(id)
    .then(record => record. remove())
    .then(() => res.redirect('/'))
    .catch(error => console.error(error))
})


// 伺服器監聽
app.listen(port, (req, res) => {
  console.log(`The server is listening on http://localhost${port}`)
})