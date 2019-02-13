exports.up = function(knex, Promise) {
  return knex.schema.createTable("users", tbl => {
    tbl.increments();

    tbl
      .string("username", 255)
      .notNullable()
      .unique();
    tbl.string("firstname", 255);
    tbl.string("lastname", 255);

    tbl.boolean("admin");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("users");
};
