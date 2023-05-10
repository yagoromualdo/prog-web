const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('futebol', 'teste', 'teste123', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;