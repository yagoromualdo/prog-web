const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../../database');

const Agenda = sequelize.define('Agenda', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  horario: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  pacienteId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Pacientes',
      key: 'id'
    }
  }
});

module.exports = Agenda;
