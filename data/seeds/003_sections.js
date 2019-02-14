const faker = require('faker')

exports.seed = function(knex, Promise) {
  //create some sections
  let sections = []
  for (let i = 1; i < 20; i++) {
    for (let n = 1; n <= 2; n++) {
      sections.push({
        club_id: `${i}`,
        title: faker.lorem.words(),
        body: faker.lorem.paragraphs(),
        img_url: faker.image.imageUrl(),
      })
    }
  }
  // Deletes ALL existing entries
  return knex('sections')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('sections').insert(sections)
    })
}
