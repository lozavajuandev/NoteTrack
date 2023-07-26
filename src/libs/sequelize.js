const { Sequelize } = require("sequelize");
const { database } = require("../config");
const {} = require("../../database/index");
const ModelSetUp = require("../../database/index");

const USER = encodeURIComponent(database.user);
const PASSWORD = encodeURIComponent(database.password);
const URI = `postgres://${USER}:${PASSWORD}@${database.host}:${database.port}/${database.database}`;

const sequelize = new Sequelize(URI, {
  dialect: "postgres",
  logging: true,
});

ModelSetUp(sequelize);

sequelize.sync();

module.exports = sequelize;
