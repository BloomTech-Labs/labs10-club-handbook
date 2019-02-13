const bcrypt = require("bcryptjs");

exports.seed = function(knex, Promise) {
  //create arrays to insert
  let users1 = [];
  let users2 = [];
  let users3 = [];
  let seedLimit = 167;
  for (let i = 1; i <= seedLimit; i++) {
    users1.push({
      username: `TestUser${i}`,
      email: `user${i}@test.fake`,
      password: bcrypt.hashSync("pass", 12)
    });
    users2.push({
      username: `TestUser${i + seedLimit}`,
      email: `user${i + seedLimit}@test.fake`,
      password: bcrypt.hashSync("pass", 12)
    });
    users3.push({
      username: `TestUser${i + 2 * seedLimit}`,
      email: `user${i + 2 * seedLimit}@test.fake`,
      password: bcrypt.hashSync("pass", 12)
    });
  }
  // Deletes ALL existing entries
  return knex("users")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("users")
        .insert(users1)
        .then(function() {
          return knex("users")
            .insert(users2)
            .then(function() {
              return knex("users").insert(users3);
            });
        });
    });
};
