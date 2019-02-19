exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex
    .raw('TRUNCATE TABLE img_placement RESTART IDENTITY CASCADE')
    .then(function() {
      // Inserts seed entries
      return knex('img_placement').insert([
        { id: 1, placement_type: 'background' },
        { id: 2, placement_type: 'left' },
        { id: 3, placement_type: 'right' },
        { id: 4, placement_type: 'no image' },
      ])
    })
}
