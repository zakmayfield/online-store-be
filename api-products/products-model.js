/////imports/////
const db = require('../data/dbConfig.js')

/////exports/////
module.exports = {
  findProducts,
  findProductById,
  addProduct,
}

/////functions/////
function findProducts () {
  return db('products')
}

function addProduct (item) {
  return db('products').insert(item, 'id')
}

function findProductById (id) {
  return db('products')
    .where('id', id)
    .first()
}
