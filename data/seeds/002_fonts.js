exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return (
    // knex('fonts')
    //   .truncate()
    knex.raw('TRUNCATE TABLE fonts RESTART IDENTITY CASCADE').then(function() {
      // Inserts seed entries
      return knex('fonts').insert([
        { font: 'Roboto' },
        { font: 'Open Sans' },
        { font: 'Lato' },
        { font: 'Montserrat' },
        { font: 'Roboto Condensed' },
        { font: 'Source Sans Pro' },
        { font: 'Oswald' },
        { font: 'Raleway' },
        { font: 'Merriweather' },
        { font: 'PT Sans' },
        { font: 'Roboto Slab' },
        { font: 'Poppins' },
      ])
    })
  )
}
