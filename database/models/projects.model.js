const { Model, DataTypes, Sequelize } = require("sequelize");

const PROJECT_TABLE = "projects";

const ProjectSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  title: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: "created_at",
    defaultValue: Sequelize.NOW,
  },
};

class Project extends Model {
  static associate() {}

  static config(sequelize) {
    return {
      sequelize,
      tableName: PROJECT_TABLE,
      modelName: "Project",
      timestamps: false,
    };
  }
}

module.exports = { PROJECT_TABLE, ProjectSchema, Project };
