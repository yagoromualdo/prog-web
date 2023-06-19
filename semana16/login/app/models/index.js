const sequelize = require('../../database');
const User = require('./User');

const models = {
  User
};

sequelize.sync({ alter: true });

module.exports = models;
