const Sequelize = require('sequelize');
module.exports=sequelize.define('CustomerAddress',{
    id:{
        type:Sequelize.INTEGER,
        allowNull:false,
        autoIncrement:true,
        primaryKey:true,
      },
      customer_id:{
        type:Sequelize.STRING,
        allowNull:false,
      },
      state:{
        type:Sequelize.STRING,
        allowNull:false,
      },
      city:{
        type:Sequelize.STRING,
        allowNull:false,
      },
      pincode:{
        type:Sequelize.STRING,
        allowNull:false,
      },
      address:{
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

},{
  tableName: 'customer_address'});