const Sequelize = require('sequelize');
module.exports=sequelize.define('Customer',{
    id:{
        type:Sequelize.INTEGER,
        allowNull:false,
        autoIncrement:true,
        primaryKey:true,
      },
      first_name:{
        type:Sequelize.STRING,
        allowNull:false,
      },
      last_name:{
        type:Sequelize.STRING,
        allowNull:false,
      },
      contact_number:{
        type:Sequelize.STRING,
        allowNull:false,
        unique:true,
      },
      email:{
        type:Sequelize.STRING,
        unique:true,
        allowNull:false,
      },
      password:{
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


});