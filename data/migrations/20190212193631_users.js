exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', tbl => {
    tbl.increments()

    tbl.string('firstname', 255)
    tbl.string('lastname', 255)

    tbl
      .string('email', 255)
      .notNullable()
      .unique()

    tbl.text('img_url')
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('users')
}
