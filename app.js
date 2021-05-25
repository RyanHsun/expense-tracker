const express = require('express')
const mongoose = require('mongoose')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const helpers = require('handlebars-helpers')()
const Record = require('./models/record')
const Category = require('./models/category')

const routes = require('./routes')
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

// Method-Override 設定
app.use(methodOverride('_method'))

// 設定路由
app.use(routes)

// 伺服器監聽
app.listen(port, (req, res) => {
  console.log(`The server is listening on http://localhost${port}`)
})