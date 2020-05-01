/////imports/////
const router = require('express').Router()
const Products = require('./products-model.js')

/////get all products/////
router.get('/', (req, res) => {
  Products.findProducts()
    .then(products => res.status(200).json(products))
    .catch(({ name, message, stack }) =>
      res.status(500).json({ name: name, message: message, stack: stack })
    )
})

/////get product by id/////
router.get('/:id', (req, res) => {
  Products.findProductById(req.params.id)
    .then(item => {
      res.status(200).json(item)
    })
    .catch(({ name, message, stack }) =>
    res.status(500).json({ name: name, message: message, stack: stack })
  )
})

/////add product/////
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