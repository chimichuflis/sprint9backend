const knex = require("knex")({
  client: "pg",
  connection: {
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "myPassword",
    database: "sprint9",
  },
});

module.exports = knex;
