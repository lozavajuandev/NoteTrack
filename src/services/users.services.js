const express = require("express");
const pool = require("../libs/pool");
const { Boom } = require("@hapi/boom");

const find = async (req, res, next) => {
  const result = await pool.query("SELECT * FROM users");
  console.log(result);
  res.send(result.rows);
};

const findOne = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await pool.query("SELECT * FROM users WHERE id = $1", [id]);
    if (result.rows.length === 0)
      return res.status(404).json({
        message: "User not found",
      });
    console.log(result);
    res.status(200).json({
      message: "User found",
      data: result.rows,
    });
  } catch (error) {
    next(error);
  }
};

const create = async (req, res, next) => {
  const { name, age } = req.body;
  const result = await pool.query(
    "INSERT into users (name, age) VALUES($1, $2)",
    [name, age]
  );
  console.log(result);
  res.json(result.rows);
};

const del = async (req, res, next) => {
  const { id } = req.params;
  result = await pool.query("DELETE FROM users WHERE id = $1", [id]);
  if (result.rowCount === 0)
    return res.status(404).json({
      message: "User not found",
    });
  res.status(200).json({
    message: "Users sucesfully deleted id Number: " + id,
  });
};

const update = async (req, res, next) => {
  const { id } = req.params;
  const { name, age } = req.body;
  const result = pool.query(
    "UPDATE users SET name = $1, age = $2 WHERE id = $3",
    [name, age, id]
  );
  if (result.rowCount === 0)
    return res.status(404).json({
      message: "Task not found",
    });
  console.log(result);
  res.json(result.rows[0]);
};

module.exports = {
  find,
  findOne,
  create,
  del,
  update,
};
