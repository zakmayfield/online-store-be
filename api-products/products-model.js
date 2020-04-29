/////imports/////
const db = require('../data/dbConfig.js')

/////exports/////
module.exports = {
  findProducts,
  addProduct,
}

function findProducts () {
  return db('products')
}

function addProduct (item) {
  return db('products').insert(item, "id")
}
