const express = require('express');

const tasksRouting = require('./tasks.routes');

function ApiRouting(app) {
    app.use('/tasks', tasksRouting)
}

module.exports = ApiRouting;

