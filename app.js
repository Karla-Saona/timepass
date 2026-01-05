import express from "express";

import horaMiddleware from "./middlewares/horaMiddleware.js";
import validarHora from "./middlewares/validarHora.js";

import indexRouter from "./routes/index.js";
import endrouteRouter from "./routes/endroute.js";

const app = express();

app.use(horaMiddleware);

// Rutas
app.use("/", indexRouter);

app.use("/endroute", validarHora, endrouteRouter);

app.listen(3000, () => {
  console.log("el servidor esta escuchando en el puerto 3000");
});
