exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', tbl => {
    tbl.increments()

    tbl.string('sub_id').unique()

    tbl.string('email', 255).notNullable()

    tbl.string('firstname', 255)
    tbl.string('lastname', 255)

    tbl.integer('club_id')
    // .unsigned()
    // .references('id')
    // .inTable('clubs')

    tbl.boolean('admin').defaultTo(false)

    tbl.boolean('signed').defaultTo(false)

    tbl.text('img_url')
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('users')
}
