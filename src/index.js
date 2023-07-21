//CONFIGURACION INICIAL
const express = require("express");
const morgan = require("morgan");

const Taskrouter = require("./routes/tasks.routes");

const app = express();
app.use(morgan("dev"));
app.use(express.json());
app.use(Taskrouter);

app.use((err, req, res, next) => {
  return res.status(400).json({
    message: err.message,
  });
});

const port = 8000;
app.listen(port);

console.log("Ejecutando en el puerto: " + port);
