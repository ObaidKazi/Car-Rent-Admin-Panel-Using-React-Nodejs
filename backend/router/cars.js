const express = require("express");
const router = express.Router();
const Car = require('../models/cars');
const User = require('../models/users');
Car.belongsTo(User, { foreignKey: 'user_id' })
const fs = require("fs");
const path = require('path');
const directoryPath = path.join(__dirname, './log');
router.get('/getAllCars', async function (req, res) {
    try {
        const cars = await Car.findAll({ include: [User] });
        if (cars) {
            return res.status(200).send({ 'success': cars });
        } else {
            return res.status(404).send({ '204': 'data not found' });
        }
    } catch (e) {
        if (!fs.existsSync(directoryPath)) {
            fs.mkdirSync(directoryPath, 0744);
        }
        let date_ob = new Date();
        fs.appendFile(directoryPath + '/cars.log', `\n\n --- \t\t ${date_ob} --- \n\n` + e.toString(), (err) => {
            if (err) console.error(err)
        });
        return res.status(500).send({ 'error': 'something went wrong' });
    }
});
router.get('/getCurrentUserCar/:user_id',async function (req, res) {
    try {
        const cars=await Car.findAll({where:{user_id:req.params.user_id}});
         if(cars){
            return res.status(200).send({ 'success': cars });
        }else{
            return res.status(404).send({ '204': 'data not found' });
        }  
    } catch (e) {
        if (!fs.existsSync(directoryPath)) {
            fs.mkdirSync(directoryPath, 0744);
        }
        let date_ob = new Date();
        fs.appendFile(directoryPath + '/cars.log', `\n\n --- \t\t ${date_ob} --- \n\n` + e.toString(), (err) => {
            if (err) console.error(err)
        });
        return res.status(500).send({ 'error': 'something went wrong' });
    }
});


module.exports = router;