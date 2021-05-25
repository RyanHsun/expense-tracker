const express = require('express')
const router = express.Router()

const home = require('./modules/home')
router.use('/', home)

const records = require('./modules/records')
router.use('/records', records)

const filters = require('./modules/filters')
router.use('/filters', filters)

module.exports = router