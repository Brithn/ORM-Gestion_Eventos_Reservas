'use strict';
const { EVENT_TABLE, EventSchema } = require('./../models/evento.model');
const { ASSISTANT_TABLE,AssistantSchema } = require('./../models/asistente.model');
const { RESERVA_TABLE, ReservaSchema } = require('./../models/reserva.model');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.createTable(EVENT_TABLE, EventSchema);
    await queryInterface.createTable(ASSISTANT_TABLE, AssistantSchema);
    await queryInterface.createTable(RESERVA_TABLE, ReservaSchema);
  },

  async down(queryInterface) {
    await queryInterface.dropTable(EVENT_TABLE);
    await queryInterface.dropTable(ASSISTANT_TABLE);
    await queryInterface.dropTable(RESERVA_TABLE);
  },
};

