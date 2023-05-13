const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../../database');

const Estado = sequelize.define('Estado', {
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

module.exports = Estado;
