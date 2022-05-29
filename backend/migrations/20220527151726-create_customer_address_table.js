'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('customer_address',{
      id:{
        type:Sequelize.INTEGER(11),
        allowNull:false,
        autoIncrement:true,
        primaryKey:true,
      },
      customer_id:{
        type:Sequelize.STRING(40),
        allowNull:false,
      },
      state:{
        type:Sequelize.STRING(40),
        allowNull:false,
      },
      city:{
        type:Sequelize.STRING(40),
        allowNull:false,
      },
      pincode:{
        type:Sequelize.STRING(40),
        allowNull:false,
      },
      address:{
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
