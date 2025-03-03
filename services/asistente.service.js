const boom = require('boom');
const { models } = require('../libs/sequelize');

class AsistenteService {
  async create(data) {
    const newAsistente = await models.Asistente.create(data);
    return newAsistente;
  }

  async find() {
    const asistentes = await models.Asistente.findAll();
    return asistentes;
  }

  async findOne(id) {
    const asistente = await models.Asistente.findByPk(id);
    if (!asistente) {
      throw boom.notFound('Asistente no encontrado');
    }
    return asistente;
  }

  async update(id, changes) {
    const asistente = await this.findOne(id);
    await asistente.update(changes);
    return asistente;
  }

  async delete(id) {
    const asistente = await this.findOne(id);
    await asistente.destroy();
    return { id };
  }
}

module.exports = AsistenteService;
