// Update with your config settings.

module.exports = {
  development: {
    client: "sqlite3",
    connection: {
      filename: "./data/devDB.db3"
    },
    useNullAsDefault: true,
    migrations: {
      directory: "./data/migrations"
    },
    seeds: {
      directory: "./data/seeds"
    }
  },

  // development: {
  //   client: 'pg',
  //   connection: {
  //     host : '127.0.0.1',
  //     user : '[db_username]',
  //     password : '[db_password]',
  //     database : '[db_name]',
  //     charset: 'utf8'
  //   },
  //   migrations: {
  //     directory: __dirname + '/knex/migrations',
  //   },
  //   seeds: {
  //     directory: __dirname + '/knex/seeds'
  //   }
  // },

  staging: {
    client: "postgresql1",
    connection: {
      database: "my_db",
      user: "username",
      password: "password"
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations",
      directory: "./data/migrations"
    },
    seeds: {
      directory: "./data/seeds"
    }
  },

  production: {
    client: "postgresql1",
    connection: {
      database: "my_db",
      user: "username",
      password: "password"
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations",
      directory: "./data/migrations"
    },
    seeds: {
      directory: "./data/seeds"
    }
  }
};
