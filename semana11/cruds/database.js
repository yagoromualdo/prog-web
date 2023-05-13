const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('futebol', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;