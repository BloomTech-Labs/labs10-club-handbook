exports.up = function(knex, Promise) {
  // return knex.schema.createTable('members', tbl => {
  //   tbl.increments()
  //   tbl
  //     .integer('club_id')
  //     .unsigned()
  //     .references('id')
  //     .inTable('clubs')
  //     .notNullable()
  //   tbl
  //     .integer('user_id')
  //     .unsigned()
  //     .references('id')
  //     .inTable('users')
  //     .notNullable()
  //   tbl.boolean('admin').defaultTo(false)
  //   tbl.boolean('signed').defaultTo(false)
  // })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('members')
}
