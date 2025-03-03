const express = require('express');

const EventosService = require('./../services/evento.service');
const validatorHandler = require('./../middlewares/validator.handler');
const {
  createEventoSchema,
  updateEventoSchema,
  getEventoSchema,
} = require('./../schemas/evento.schema');

const router = express.Router();
const service = new EventosService();

router.get('/', async (req, res, next) => {
  try {
    const eventos = await service.find();
    res.json(eventos);
  } catch (error) {
    next(error);
  }
});

router.get(
  '/:id',
  validatorHandler(getEventoSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const evento = await service.findOne(id);
      res.json(evento);
    } catch (error) {
      next(error);
    }
  },
);

router.post(
  '/',
  validatorHandler(createEventoSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newEvento = await service.create(body);
      res.status(201).json(newEvento);
    } catch (error) {
      next(error);
    }
  },
);

router.patch(
  '/:id',
  validatorHandler(getEventoSchema, 'params'),
  validatorHandler(updateEventoSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const evento = await service.update(id, body);
      res.json(evento);
    } catch (error) {
      next(error);
    }
  },
);

router.delete(
  '/:id',
  validatorHandler(getEventoSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      await service.delete(id);
      res.status(201).json({ id });
    } catch (error) {
      next(error);
    }
  },
);

module.exports = router;
