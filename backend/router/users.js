const express = require("express");
const router = express.Router();
const User=require('../models/users')
const Car=require('../models/cars')
User.hasMany(Car,{foreignKey:'user_id'})
const fs = require("fs");
const path = require('path');
const directoryPath = path.join(__dirname, './log');
router.get('/getAllUsers',async function (req, res) {
    try {
        const users=await User.findAll({where:{role:'owner'},include:[Car]});
        if(users){
            return res.status(200).send({ 'success': users });
        }else{
            return res.status(404).send({ '204': 'data not found' });
        }
    } catch (e) {
        if (!fs.existsSync(directoryPath)) {
            fs.mkdirSync(directoryPath, 0744);
        }
        let date_ob = new Date();
        fs.appendFile(directoryPath + '/users.log', `\n\n --- \t\t ${date_ob} --- \n\n` + e.toString(), (err) => {
            if (err) console.error(err)
        });
        return res.status(500).send({ 'error': 'something went wrong' });
    }
});

module.exports = router;