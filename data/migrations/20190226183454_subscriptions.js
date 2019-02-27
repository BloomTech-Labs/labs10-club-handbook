exports.up = function(knex, Promise) {
  return knex.schema.createTable('subscriptions', tbl => {
    tbl.increments()

    tbl
      .integer('user_id')
      .unsigned()
      .references('id')
      .inTable('users')
      .notNullable()
    tbl.string('subscription')
    tbl.string('type')
    tbl.string('plan')
    tbl.string('product')
    tbl.string('customer')
    tbl.string('status')
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('subscriptions')
}
