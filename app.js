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

// 路由設定
app.get('/', (req, res) => {
  Record
    .find()
    .lean()
    .then(records => res.render('index', { records }))
    .catch(error => console.error(error))
})

app.get('/records/new', (req, res) => {
  Category
    .find()
    .lean()
    .then(categories => res.render('new', { categories }))
    .catch(error => console.error(error))
})
app.post('/records', (req,res) => {
  const record = req.body
  // console.log(record)
  return Record
    .create( record )
    .then(() => res.redirect('/'))
    .catch(error => console.error(error))
})



// 伺服器監聽
app.listen(port, (req, res) => {
  console.log(`The server is listening on http://localhost${port}`)
})