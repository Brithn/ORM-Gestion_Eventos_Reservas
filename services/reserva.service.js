const boom = require('boom');
const { models } = require('../libs/sequelize');

class ReservaService {
  async create(data) {
    const newReserva = await models.Reserva.create(data);
    return newReserva;
  }

  async find() {
    const reservas = await models.Reserva.findAll({
      include: [
        { model: models.Evento, as: 'evento' },
        { model: models.Asistente, as: 'asistente' },
      ],
    });
    return reservas;
  }

  async findOne(id) {
    const reserva = await models.Reserva.findByPk(id, {
      include: [
        { model: models.Evento, as: 'evento' },
        { model: models.Asistente, as: 'asistente' },
      ],
    });
    if (!reserva) {
      throw boom.notFound('Reserva no encontrada');
    }
    return reserva;
  }

  async update(id, changes) {
    const reserva = await this.findOne(id);
    await reserva.update(changes);
    return reserva;
  }

  async delete(id) {
    const reserva = await this.findOne(id);
    await reserva.destroy();
    return { id };
  }
}

module.exports = ReservaService;
