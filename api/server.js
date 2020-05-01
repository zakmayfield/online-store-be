/////imports/////
require('dotenv').config()
const express = require('express')
const cors = require('cors')

/////importing routes/////
const productsRouter = require('../api-products/products-router.js')
const usersRouter = require('../api-users/users-router');

/////declare server/////
const server = express()

/////mw --> DONT FORGET THE BODY PARSER!!!!!!!/////
server.use(express.json())
server.use(cors())

/////routes/////
server.use('/api/store', productsRouter)
server.use('/api/users', usersRouter)

/////base api server/////
server.get('/', (req, res) => {
  res.status(200).json({ api: 'ON' })
})

/////exports/////
module.exports = server