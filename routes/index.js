const express = require('express');
const eventosRouter = require('./evento.router');
const asistentesRouter = require('./asistente.router');
const reservasRouter = require('./reserva.router');  // Importa el router de reservas

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/eventos', eventosRouter);
  router.use('/asistentes', asistentesRouter);
  router.use('/reservas', reservasRouter);  // Añade la ruta de reservas
}

module.exports = routerApi;
