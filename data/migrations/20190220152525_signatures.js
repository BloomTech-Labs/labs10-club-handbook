exports.up = function(knex, Promise) {
  return knex.schema.createTable('signatures', tbl => {
    tbl.increments()

    tbl
      .integer('user_id')
      .unsigned()
      .references('id')
      .inTable('users')
      .notNullable()

    tbl.string('signature').notNullable()

    tbl.string('iss')
    tbl.string('sub')
    tbl.string('iat')
    tbl.string('exp')
    tbl.string('azp')

    tbl.string('ip')

    tbl.timestamps(true, true)
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('signatures')
}
