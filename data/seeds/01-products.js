
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('products').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('products').insert([
        {
          name: 'Star Wars Coffee Mug',
          description: 'May the grinds be with you',
          price: 8.99
        }
      ]);
    });
};
