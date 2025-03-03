const { Sequelize, Model, DataTypes } = require('sequelize');

const EVENT_TABLE = 'eventos';
const EventSchema = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  fecha: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  lugar: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: Sequelize.literal('NOW()'),
  },
};

class Event extends Model {
  static associate(models) {
    // Puedes agregar asociaciones aquí si es necesario en el futuro
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: EVENT_TABLE,
      modelName: 'Event',
      timestamps: false,
    };
  }
}

module.exports = { EVENT_TABLE, Event, EventSchema };
