const express = require("express");
// const pool = require("../libs/pool");
const sequelize = require('../libs/sequelize')

// const find = async (req, res) => {
//   const result = await pool.query("SELECT * FROM tasks");
//   res.json(result.rows);
//   console.log(result);
// };

const find = async (req, res) => {
  const query = 'SELECT * FROM tasks';
  const [data, metadata] = await sequelize.query(query);
  res.json (data);
}

module.exports = {
  find,
};
