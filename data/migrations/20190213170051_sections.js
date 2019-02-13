exports.up = function(knex, Promise) {
  return knex.schema.createTable("sections", tbl => {
    tbl.increments();

    tbl
      .integer("club_id")
      .unsigned()
      .references("id")
      .inTable("clubs")
      .notNullable();

    tbl.string("title").notNullable();
    tbl.text("body").notNullable();
    tbl.text("img_url");
    tbl.integer("img_placement").defaultTo(1);
    tbl.integer("order");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("sections");
};
