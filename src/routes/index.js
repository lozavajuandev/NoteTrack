const express = require("express");

const tasksRouting = require("./tasks.routes");
const usersRouting = require("./users.routes");
const projectsRouting = require("./project.routes");

function ApiRouting(app) {
  app.use("/tasks", tasksRouting);
  app.use("/users", usersRouting);
  app.use("/projects", projectsRouting);
}

module.exports = ApiRouting;
