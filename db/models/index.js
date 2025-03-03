const { Event, EventSchema } = require('./evento.model');
const { Assistant, AssistantSchema } = require('./asistente.model');
const { Reserva, ReservaSchema } = require('./reserva.model'); 
function initModels(sequelize) {
  Event.init(EventSchema, Event.config(sequelize));
  Assistant.init(AssistantSchema, Assistant.config(sequelize));
  Reserva.init(ReservaSchema, Reserva.config(sequelize));

  // Asocia los modelos
  Event.associate(sequelize.models);
  Assistant.associate(sequelize.models);
  Reserva.associate(sequelize.models);
}

module.exports = initModels;
