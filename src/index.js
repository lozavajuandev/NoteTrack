//IMPORTARCION DE FRAMEWORKS NECESARIOS PARA EL DESARROLLO DEL PROYECTO

//FRAMEWORKS
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const {
  errorloger,
  errorClient,
  BoomerrorClient,
} = require("./middlewares/error.handler");

const ApiRouting = require("./routes/index");

const app = express();

//CORS


//app.use(cors(options));

//USO DE MODULOS
app.use(morgan("dev"));
app.use(express.json());
ApiRouting(app);

//MIDLEWARES DE ERRORES
app.use(errorloger);
app.use(BoomerrorClient);
app.use(errorClient);

const port = 8000;
app.listen(port);

console.log("Ejecutando en el puerto: " + port);
