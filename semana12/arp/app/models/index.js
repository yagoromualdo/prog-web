const sequelize = require('../../database');
const Agenda = require('./Agenda');
const Paciente = require('./Paciente');

const models = {
  Agenda,
  Paciente
};

Agenda.belongsTo(Paciente, { foreignKey: 'pacienteId', as: 'paciente' });
Paciente.hasMany(Agenda, { foreignKey: 'pacienteId', as: 'agendas' });

sequelize.sync({ alter: true });

module.exports = models;
