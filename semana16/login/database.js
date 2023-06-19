const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('teste_login', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;