
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          name: 'geralt',
          email: 'geralt@rivia.com',
          password: 'f@ck'
        }
      ]);
    });
};
