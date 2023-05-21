const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../../database');

const Paciente = sequelize.define('Paciente', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  }
});

module.exports = Paciente;
