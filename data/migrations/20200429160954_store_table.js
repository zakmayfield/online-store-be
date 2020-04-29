exports.up = function (knex) {
  return knex.schema.createTable('products', product => {
    product.increments()

    product.string('name', 128).notNullable()

    product.string('description', 1000).notNullable()

    product.integer('price', 128).notNullable()
  })
}

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('products')
}
