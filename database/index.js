const { ProjectSchema, Project } = require("./models/projects.model");

function ModelSetUp(sequelize) {
  Project.init(ProjectSchema, Project.config(sequelize));
}

module.exports = ModelSetUp;
