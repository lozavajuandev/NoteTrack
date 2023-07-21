//CONFIGURACION INICIAL
const express = require('express');
const morgan = require('morgan');

const Taskrouter = require('./routes/tasks.routes');

const app = express();
app.use(morgan('dev'));
app.use(Taskrouter);


const port = 3000;
app.listen(port);

console.log('Ejecutando en el puerto: ' + port);

