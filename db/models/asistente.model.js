const { Sequelize, Model, DataTypes } = require('sequelize');

const ASSISTANT_TABLE = 'asistentes';
const AssistantSchema = {
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
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: Sequelize.literal('NOW()'),
  },
};

class Assistant extends Model {
  static associate(models) {
    // Puedes agregar asociaciones aquí si es necesario en el futuro
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: ASSISTANT_TABLE,
      modelName: 'Assistant',
      timestamps: false,
    };
  }
}

module.exports = { ASSISTANT_TABLE, Assistant, AssistantSchema };
