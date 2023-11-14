'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Gerenciamento_Leads', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Inscricao: {
        type: Sequelize.STRING
      },
      Dt_Inscricao: {
        type: Sequelize.STRING
      },
      Nome: {
        type: Sequelize.STRING
      },
      Email: {
        type: Sequelize.STRING
      },
      Num_Telefone: {
        type: Sequelize.STRING
      },
      Classificacao: {
        type: Sequelize.STRING
      },
      Dt_Classificacao: {
        type: Sequelize.STRING
      },
      Curso: {
        type: Sequelize.STRING
      },
      Duracao: {
        type: Sequelize.STRING
      },
      CODCurso: {
        type: Sequelize.STRING
      },
      Turno: {
        type: Sequelize.STRING
      },
      Filial: {
        type: Sequelize.STRING
      },
      Modalidade: {
        type: Sequelize.STRING
      },
      Polo: {
        type: Sequelize.STRING
      },
      Semestre: {
        type: Sequelize.STRING
      },
      Valor_Matricula: {
        type: Sequelize.STRING
      },
      ContratoAceito: {
        type: Sequelize.STRING
      },
      Tipo_de_Aceite: {
        type: Sequelize.STRING
      },
      IP_do_Aceite: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Gerenciamento_Leads');
  }
};