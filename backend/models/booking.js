const Sequelize=require('sequelize');
module.exports=sequelize.define('Booking',{
    id:{
        type:Sequelize.INTEGER,
        allowNull:false,
        autoIncrement:true,
        primaryKey:true,
      },
      car_id:{
        type:Sequelize.STRING,
        allowNull:false,
      },
      start_at:{
        type:Sequelize.STRING,
        allowNull:false,
      },
      end_at:{
        type:Sequelize.STRING,
        allowNull:false,
      },
      customer_id:{
        type:Sequelize.STRING,
        allowNull:false,
      }, 
      pickup_id:{
        type:Sequelize.STRING,
        allowNull:false,
      },
      drop_id:{
        type:Sequelize.STRING,
        allowNull:false,
      },
      status:{
        type:Sequelize.STRING,
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
})