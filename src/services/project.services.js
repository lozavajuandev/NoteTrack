//MODULOS
const express = require("express");
const { models } = require("../libs/sequelize");
const { ProjectSchema } = require("../../database/models/projects.model");
const boom = require('@hapi/boom');

//GLOBALS


//CRUD
const find = async (req, res) => {
  const result = await models.Project.findAll();
  res.json(result);
};

const findOne = async (req, res) => {
  const { id } = req.params;
  const project = await models.Project.findByPk(id);
  if (!project){
    throw boom.notFound('user not found')
  }
  res.json(project);
  return project
};

const create = async (req, res) => {
  const body = req.body;
  const newUser = await models.Project.create(body);
  res.json(newUser);
};

const deleate = async (req, res) => {
  const { id } = req.params;
  const project = await models.Project.findByPk(id);
  await project.destroy();
  res.json(id)

}

module.exports = {
  find,
  findOne,
  create,
  deleate
};
