const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const helpers = require('handlebars-helpers')()
const Record = require('./models/record')
const Category = require('./models/category')

const routes = require('./routes')

require('./config/mongoose')

const app = express()
const PORT = process.env.PORT || 3000

// 設定可以使用靜態檔案路徑
app.use(express.static('public'))

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
app.listen(PORT, (req, res) => {
  console.log(`The server is listening on http://localhost${PORT}`)
})