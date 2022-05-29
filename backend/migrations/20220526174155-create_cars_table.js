'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('cars',{
      id:{
        type:Sequelize.INTEGER(11),
        allowNull:false,
        autoIncrement:true,
        primaryKey:true,
      },
      car_name:{
        type:Sequelize.STRING(40),
        allowNull:false,
      },
      description:{
        type:Sequelize.STRING(40),
        allowNull:false,
      },
      car_thumbnail_path_1:{
        type:Sequelize.STRING(40),
        allowNull:false,
      },
      car_thumbnail_path_2:{
        type:Sequelize.STRING(40),
        allowNull:true,
      },
      brand:{
        type:Sequelize.STRING(40),
        allowNull:false,
      },
      build:{
        type:Sequelize.STRING(14),
        allowNull:true,
      },
      year:{
        type:Sequelize.STRING(40),
        allowNull:false,
      },
      mode:{
        type:Sequelize.STRING(40),
        allowNull:false,
      },
      user_id:{
        type:Sequelize.STRING(12),
        allowNull:false,
      },
      day_price:{
        type:Sequelize.STRING(12),
        allowNull:false,
      },
      current_location:{
        type:Sequelize.STRING(12),
        allowNull:false,
      },
      is_featured:{
        type:Sequelize.BOOLEAN(1),
        allowNull:false,
      },
      fuel_type:{
        type:Sequelize.STRING(40),
        allowNull:false,
      },
      fuel_capacity:{
        type:Sequelize.STRING(40),
        allowNull:false,
      },
      car_mileage:{
        type:Sequelize.STRING(40),
        allowNull:false,
      },
      car_capacity:{
        type:Sequelize.STRING(40),
        allowNull:false,
      },
      car_color:{
        type:Sequelize.STRING(40),
        allowNull:false,
      },
      car_variant_type:{
        type:Sequelize.STRING(40),
        allowNull:false,
      },
      total_driven:{
        type:Sequelize.STRING(40),
        allowNull:false,
      },
      plate_number:{
        type:Sequelize.STRING(20),
        allowNull:false,
      },
      status:{
        type:Sequelize.BOOLEAN(1),
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
