exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return (
    // knex('colors')
    //   .truncate()
    knex
      .raw('TRUNCATE TABLE colors RESTART IDENTITY CASCADE')

      .then(function() {
        // Inserts seed entries
        return knex('colors').insert([
          { color: 'red' },
          { color: 'crimson' },
          { color: 'blue' },
          { color: 'navy' },
          { color: 'aqua' },
          { color: 'black' },
          { color: 'darkgray' },
          { color: 'darkviolet' },
          { color: 'deeppink' },
          { color: 'pink' },
          { color: 'green' },
          { color: 'seagreen' },
          { color: 'lime' },
        ])
      })
  )
}
