'use strict';

const { ASSISTANT_TABLE, AssistantSchema } = require('./../models/asistente.model');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.createTable(ASSISTANT_TABLE, AssistantSchema);
  },

  async down(queryInterface) {
    await queryInterface.dropTable(ASSISTANT_TABLE);
  },
};
