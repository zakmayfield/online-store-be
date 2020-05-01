exports.up = function (knex) {
  return knex.schema.createTable('users', product => {
    product.increments()

    product
      .string('name', 128)
      .notNullable()
      .unique()

    product
      .string('email', 1000)
      .notNullable()
      .unique()

    product.string('password', 128).notNullable()
  })
}

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('users')
}
