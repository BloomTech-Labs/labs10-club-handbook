const faker = require('faker')

exports.seed = function(knex, Promise) {
  //create arrays to insert
  let users1 = []
  let users2 = []
  let users3 = []
  let seedLimit = 167
  for (let i = 1; i <= seedLimit; i++) {
    users1.push({
      email: `user${i}@test.fake`,
      firstname: faker.name.firstName(),
      lastname: faker.name.lastName(),
      img_url: faker.internet.avatar(),
    })
    users2.push({
      email: `user${i + seedLimit}@test.fake`,
      firstname: faker.name.firstName(),
      lastname: faker.name.lastName(),
      img_url: faker.internet.avatar(),
    })
    users3.push({
      email: `user${i + 2 * seedLimit}@test.fake`,
      firstname: faker.name.firstName(),
      lastname: faker.name.lastName(),
      img_url: faker.internet.avatar(),
    })
  }
  // Deletes ALL existing entries
  return (
    // knex('users')
    //   .truncate()
    knex
      .raw('TRUNCATE TABLE users RESTART IDENTITY CASCADE')

      .then(function() {
        // Inserts seed entries
        return knex('users')
          .insert(users1)
          .then(function() {
            return knex('users')
              .insert(users2)
              .then(function() {
                return knex('users').insert(users3)
              })
          })
      })
  )
}
