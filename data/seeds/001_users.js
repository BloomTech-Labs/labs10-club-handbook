const bcrypt = require("bcryptjs");

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("users")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("users").insert([
        {
          username: "TestUser1",
          password: bcrypt.hashSync("pass", 12),
          email: "fake@fake.fake"
        },
        {
          username: "TestUser2",
          password: bcrypt.hashSync("pass", 12),
          email: "test@fake.fake"
        }
      ]);
    });
};
