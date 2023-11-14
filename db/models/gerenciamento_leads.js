'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Gerenciamento_Leads extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Gerenciamento_Leads.init({
    Inscricao: DataTypes.STRING,
    Dt_Inscricao: DataTypes.STRING,
    Nome: DataTypes.STRING,
    Email: DataTypes.STRING,
    Num_Telefone: DataTypes.STRING,
    Classificacao: DataTypes.STRING,
    Dt_Classificacao: DataTypes.STRING,
    Curso: DataTypes.STRING,
    Duracao: DataTypes.STRING,
    CODCurso: DataTypes.STRING,
    Turno: DataTypes.STRING,
    Filial: DataTypes.STRING,
    Modalidade: DataTypes.STRING,
    Polo: DataTypes.STRING,
    Semestre: DataTypes.STRING,
    Valor_Matricula: DataTypes.STRING,
    ContratoAceito: DataTypes.STRING,
    Tipo_de_Aceite: DataTypes.STRING,
    IP_do_Aceite: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Gerenciamento_Leads',
  });
  return Gerenciamento_Leads;
};