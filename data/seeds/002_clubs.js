const faker = require('faker')

exports.seed = function(knex, Promise) {
  //create some clubs
  let clubs = []
  for (let i = 1; i < 20; i++) {
    clubs.push({
      user_id: `${i}`,
      name: faker.company.companyName(),
      logo_url: faker.image.avatar(),
    })
  }
  // Deletes ALL existing entries
  return knex('clubs')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('clubs').insert(clubs)
    })
}
