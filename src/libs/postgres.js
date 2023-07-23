const { Client } = require('pg');
const database = require('../config');


 async function getConnection() {
    const client = new Client ({
        user: database.user,
        password: database.password,
        host: database.host,
        port: database.port,
        database: database.database,
    });
    await client.connect();
    return client;
};

module.exports = getConnection;
