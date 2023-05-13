const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../../database');

const Time = sequelize.define('Time', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  estadoId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Estados', // nome da tabela no banco de dados
      key: 'id'
    }
  }
});

module.exports = Time;
