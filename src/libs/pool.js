const { Pool } = require("pg");
const { database } = require("../config");

const USER = encodeURIComponent(database.user);
const PASSWORD = encodeURIComponent(database.password);
const URI = `postgres://${USER}:${PASSWORD}@${database.host}:${database.port}/${database.database}`;

const pool = new Pool({
  connectionString: URI,
});

module.exports = pool;
