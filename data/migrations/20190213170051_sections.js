exports.up = function(knex, Promise) {
  return knex.schema.createTable('sections', tbl => {
    tbl.increments()

    tbl
      .integer('club_id')
      .unsigned()
      .references('id')
      .inTable('clubs')
      .notNullable()

    tbl.string('title')
    tbl.string('section_type')
    tbl.text('body')
    tbl.text('img_url')
    tbl.integer('img_placement').defaultTo(4)
    tbl.integer('order')
    tbl.string('contact_name')
    tbl.string('contact_info')

    tbl.string('bg_color')
    tbl.string('title_color')
    tbl.string('color_string')
    tbl.string('font')
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('sections')
}
