const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class Jogo extends Model {}

Jogo.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  plataforma: {
    type: DataTypes.STRING,
    allowNull: false
  },
  genero: {
    type: DataTypes.STRING,
    allowNull: false
  },
  ano_lancamento: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'jogo',
  tableName: 'jogos',
  timestamps: false
});

module.exports = Jogo;