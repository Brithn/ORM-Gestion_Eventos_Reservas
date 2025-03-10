const Joi = require('joi');

const id = Joi.number().integer();
const eventoId = Joi.number().integer().required();
const asistenteId = Joi.number().integer().required();
const fechaReserva = Joi.date().iso().required();

const createReservaSchema = Joi.object({
  eventoId: eventoId.required(),
  asistenteId : asistenteId.required(),
  fecha_reserva : fechaReserva.required(),
});

const updateReservaSchema = Joi.object({
  eventoId : eventoId,
  asistenteId : asistenteId,
  fecha_reserva : fechaReserva,
});

const getReservaSchema = Joi.object({
  id: id.required(),
});

const queryReservaSchema = Joi.object({
  eventoId,
  asistenteId,
});

module.exports = {
  createReservaSchema,
  updateReservaSchema,
  getReservaSchema,
  queryReservaSchema,
};

