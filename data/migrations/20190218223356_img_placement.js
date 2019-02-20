exports.up = function(knex, Promise) {
  return knex.schema.createTable('img_placement', tbl => {
    tbl.increments()

    tbl.string('placement_type')
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('img_placement')
}
