/////import db/////
const db = require('../data/dbConfig')

/////export/////
module.exports = {
  findUsers,
  findUserById,
  addUser
}

/////functions/////
function findUsers () {
  return db('users')
}

function findUserById (id) {
  return db('users')
    .where('id', id)
    .first()
}

function addUser (user) {
  return db('users').insert(user, 'id')
}
