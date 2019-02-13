exports.up = function(knex, Promise) {
  return knex.schema.createTable("colors", tbl => {
    tbl.increments();

    tbl.string("color");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("colors");
};
