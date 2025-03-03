const Joi = require('joi');

const id = Joi.number().integer();
const nombre = Joi.string().min(3).max(50);
const fecha = Joi.date().iso();
const lugar = Joi.string().min(3).max(100);

const limit = Joi.number().integer();
const offset = Joi.number().integer();

const createEventoSchema = Joi.object({
  nombre: nombre.required(),
  fecha: fecha.required(),
  lugar: lugar.required(),
});

const updateEventoSchema = Joi.object({
  nombre: nombre,
  fecha: fecha,
  lugar: lugar,
});

const getEventoSchema = Joi.object({
  id: id.required(),
});

const queryEventoSchema = Joi.object({
  limit,
  offset,
});

module.exports = {
  createEventoSchema,
  updateEventoSchema,
  getEventoSchema,
  queryEventoSchema,
};
