const Joi = require('joi');

const id = Joi.number().min(1).max(50000);
const title = Joi.string().min(2).max(250);
const description = Joi.string().min(5).max(250);

const createTaskSchema ({
    title: title.required(),
    description: description.required(),
});

const getTaskSchema ({
    id: id.required()
})

module.exports = { createTaskSchema, getTaskSchema }




