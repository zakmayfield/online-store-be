/////imports -> router and db model/////
const router = require('express').Router()
const Users = require('./users-model')

/////setting up our get requests to the endpoints/////
router.get('/', (req, res) => {
  Users.findUsers()
    .then(users => res.status(200).json(users))
    .catch(({ name, message, stack }) =>
      res.status(500).json({ name, message, stack })
    )
})

router.get('/:id', (req, res) => {
  let id = req.params.id
  Users.findUserById(id)
    .then(user => {
      res.status(200).json(user)
    })
    .catch(({ name, message, stack }) =>
      res.status(500).json({ name, message, stack })
    )
})

router.post('/', (req, res) => {
  let user = req.body
  Users.addUser(user)
    .then(user => {
      res.status(201).json(user)
    })
    .catch(({ name, message, stack }) =>
      res.status(500).json({ name, message, stack })
    )
})

/////export/////
module.exports = router
