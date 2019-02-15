exports.up = function(knex, Promise) {
  return knex.schema.createTable('clubs', tbl => {
    tbl.increments()

    tbl
      .integer('user_id')
      .unsigned()
      .references('id')
      .inTable('users')
      .notNullable()

    tbl.string('name', 255).notNullable()

    tbl.text('logo_url')

    tbl
      .integer('color_id')
      .unsigned()
      .references('id')
      .inTable('colors')

    tbl.text('handbook_url')
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('clubs')
}
