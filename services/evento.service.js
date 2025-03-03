const boom = require('boom');
const { models } = require('../libs/sequelize');

class EventoService {
  async create(data) {
    const newEvento = await models.Event.create(data); // Cambiado de Evento a Event
    return newEvento;
  }

  async find() {
    const eventos = await models.Event.findAll(); // Cambiado de Evento a Event
    return eventos;
  }

  async findOne(id) {
    const evento = await models.Event.findByPk(id); // Cambiado de Evento a Event
    if (!evento) {
      throw boom.notFound('Evento no encontrado');
    }
    return evento;
  }

  async update(id, changes) {
    const evento = await this.findOne(id);
    await evento.update(changes);
    return evento;
  }

  async delete(id) {
    const evento = await this.findOne(id);
    await evento.destroy();
    return { id };
  }
}

module.exports = EventoService;
