const { request } = require("express");
const Boom  = require("@hapi/boom");
const pool = require("../libs/pool");

const find = async (req, res, next) => {
  try {
    const result = await pool.query("SELECT * FROM tasks");
    res.json(result.rows);
    console.log(result);
  } catch (error) {
    next(error);
  }
};

const findOne = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await pool.query("SELECT * FROM tasks WHERE id = $1", [id]);
    if (result.rows.length === 0)
      throw Boom.notFound('Task Not Found');
    res.json(result.rows);
    console.log(result);
  } catch (error) {
    console.log(error.message);
  }
};

const Create = async (req, res, next) => {
  try {
    const { title, description } = req.body;
    const result = await pool.query(
      "INSERT INTO tasks (title, description) VALUES($1, $2) RETURNING *",
      [title, description]
    );

    console.log(result);
    res.json({
      message: "task created",
      data: result.rows,
    });
  } catch (error) {
    next(error);
  }
};

const deleate = async (req, res, next) => {
  const { id } = req.params;
  const result = await pool.query("DELETE FROM tasks WHERE id = $1", [id]);
  if (result.rowCount === 0)
    return res.status(404).json({
      message: "Task not found",
    });

  console.log(result.row);
  res.sendStatus(204);
};

const update = async (req, res, next) => {
  const { id } = req.params;
  const { title, description } = req.body;

  const result = await pool.query(
    "UPDATE tasks SET title= $1, description=$2 WHERE id = $3 RETURNING *",
    [title, description, id]
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
  Create,
  deleate,
  update,
};
