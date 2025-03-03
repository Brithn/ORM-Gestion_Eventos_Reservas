const { Sequelize, Model, DataTypes } = require('sequelize');
const { EVENT_TABLE } = require('./evento.model');
const { ASSISTANT_TABLE } = require('./asistente.model');

const RESERVA_TABLE = 'reservas';

const ReservaSchema = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },
  eventoId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'evento_id',
    references: {
      model: EVENT_TABLE,
      key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  },
  asistenteId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'asistente_id',
    references: {
      model: ASSISTANT_TABLE,
      key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  },
  fechaReserva: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'fecha_reserva',
    defaultValue: Sequelize.literal('NOW()'),
  },
};

class Reserva extends Model {
    static associate(models) {
      // Verifica que los modelos estén correctamente referenciados
      this.belongsTo(models.Evento, { foreignKey: 'eventoId', as: 'evento' });
      this.belongsTo(models.Asistente, { foreignKey: 'asistenteId', as: 'asistente' });
    }


  static config(sequelize) {
    return {
      sequelize,
      tableName: RESERVA_TABLE,
      modelName: 'Reserva',
      timestamps: false,
    };
  }
}

module.exports = { RESERVA_TABLE, Reserva, ReservaSchema };
