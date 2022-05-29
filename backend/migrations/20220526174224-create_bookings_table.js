'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('bookings',{
      id:{
        type:Sequelize.INTEGER(11),
        allowNull:false,
        autoIncrement:true,
        primaryKey:true,
      },
      car_id:{
        type:Sequelize.STRING(12),
        allowNull:false,
      },
      start_at:{
        type:Sequelize.STRING(40),
        allowNull:false,
      },
      end_at:{
        type:Sequelize.STRING(40),
        allowNull:false,
      },
      customer_id:{
        type:Sequelize.STRING(40),
        allowNull:false,
      }, 
      pickup_id:{
        type:Sequelize.STRING(40),
        allowNull:false,
      },
      drop_id:{
        type:Sequelize.STRING(12),
        allowNull:false,
      },
      status:{
        type:Sequelize.STRING(40),
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
