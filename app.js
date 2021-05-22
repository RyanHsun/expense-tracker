const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('This is Web App!!')
})

app.listen(port, (req, res) => {
  console.log(`The server is listening on http://localhost${port}`)
})