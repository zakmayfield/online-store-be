/////imports/////
const router = require('express').Router()
const Products = require('./products-model.js')

/////sending data from this endpoint/////
router.get('/', (req, res) => {
  Products.findProducts()
    .then(products => res.status(200).json(products))
    .catch(({ name, message, stack }) =>
      res.status(500).json({ name: name, message: message, stack: stack })
    )
})

router.post('/', (req, res) => {
  let product = req.body
  Products.addProduct(product)
    .then(item => {
      res.status(201).json(item)
    })
    .catch(({ name, message, stack }) =>
      res.status(500).json({ name: name, message: message, stack: stack })
    )
})

/////exports/////
module.exports = router
