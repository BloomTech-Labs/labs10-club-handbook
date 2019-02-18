exports.up = function(knex, Promise) {
  return knex.schema.createTable('fonts', tbl => {
    tbl.increments()

    tbl.string('font')
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('fonts')
}
