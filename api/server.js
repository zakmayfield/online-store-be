/////imports/////
require('dotenv').config()
const express = require('express')
const cors = require('cors')
const productsRouter = require('../api-products/products-router.js')

/////declare server/////
const server = express()

/////mw --> DONT FORGET THE BODY PARSER!!!!!!!/////
server.use(express.json())
server.use(cors())

/////routes/////
server.use('/api/store', productsRouter)

/////base api server/////
server.get('/', (req, res) => {
  res.status(200).json({ api: 'ON' })
})

/////exports/////
module.exports = server