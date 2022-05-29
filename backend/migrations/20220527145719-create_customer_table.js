'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('customers',{
      id:{
        type:Sequelize.INTEGER(11),
        allowNull:false,
        autoIncrement:true,
        primaryKey:true,
      },
      first_name:{
        type:Sequelize.STRING(40),
        allowNull:false,
      },
      last_name:{
        type:Sequelize.STRING(40),
        allowNull:false,
      },
      contact_number:{
        type:Sequelize.STRING(14),
        allowNull:false,
        unique:true,
      },
      email:{
        type:Sequelize.STRING(40),
        unique:true,
        allowNull:false,
      },
      password:{
        type:Sequelize.STRING(255),
        allowNull:false,
      },
      createdAt: {
        type:Sequelize.DATE,
        allowNull:false,
      },
      updatedAt:{
        type:Sequelize.DATE,
        allowNull:false,
      }

    });
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
