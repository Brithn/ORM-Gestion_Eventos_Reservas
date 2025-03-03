const { Event, EventSchema } = require('./evento.model');
const { Assistant, AssistantSchema } = require('./asistente.model');
const { Reserva, ReservaSchema } = require('./reserva.model');  // Importa el modelo de reserva

function initModels(sequelize) {
  Event.init(EventSchema, Event.config(sequelize));
  Assistant.init(AssistantSchema, Assistant.config(sequelize));
  Reserva.init(ReservaSchema, Reserva.config(sequelize));
}

module.exports = initModels;
