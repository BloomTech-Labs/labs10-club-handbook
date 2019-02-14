exports.up = function(knex, Promise) {
  return knex.schema.createTable("admins", tbl => {
    tbl.increments();

    tbl
      .integer("club_id")
      .unsigned()
      .references("id")
      .inTable("clubs")
      .notNullable();

    tbl
      .integer("user_id")
      .unsigned()
      .references("id")
      .inTable("users")
      .notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("admins");
};
