const Sequelize = require("sequelize");

const sequelize=new Sequelize('socar','root','root',{
    host:'127.0.0.1',port:'8889',dialect:'mysql'
});
module.exports=sequelize;
global.sequelize=sequelize;