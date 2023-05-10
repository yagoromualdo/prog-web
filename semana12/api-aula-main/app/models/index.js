const sequelize = require('../../database');
const Time = require('./Time');
const Estado = require('./Estado');

const models = {
  Time,
  Estado
};

Time.belongsTo(Estado, { foreignKey: 'estadoId', as: 'estado' });
Estado.hasMany(Time, { foreignKey: 'estadoId', as: 'times' });

sequelize.sync({ alter: true });

module.exports = models;
