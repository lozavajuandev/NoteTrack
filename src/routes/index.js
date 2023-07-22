const express = require("express");

const tasksRouting = require("./tasks.routes");
const usersRouting = require("./users.routes");

function ApiRouting(app) {
  app.use("/tasks", tasksRouting);
  app.use("/users", usersRouting);
}

module.exports = ApiRouting;
