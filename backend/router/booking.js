const express = require("express");
const router = express.Router();
const Booking = require('../models/booking');
const CustomerAddress = require('../models/customer_address');
const Customer = require('../models/customer');
const Car = require('../models/cars');
const User = require('../models/users')
Booking.belongsTo(CustomerAddress, { as: 'pickUpAddress', foreignKey: "pickup_id" })
Booking.belongsTo(CustomerAddress, { as: 'dropAddress', foreignKey: "drop_id" })
Booking.belongsTo(Customer, { as: 'customerInfo', foreignKey: "customer_id" })
Booking.belongsTo(Car, { as: 'carInfo', foreignKey: "car_id" })
const fs = require("fs");
const { Op } = require("sequelize");
const path = require('path');
const moment = require("moment");
const directoryPath = path.join(__dirname, './log');
router.get('/getNewBookings', async function (req, res) {
    try {
        //getting new booking by checking today date from end_date
        const bookings = await Booking.findAll({
            where: { 'end_at': { [Op.gt]: Date.now() } }, include: [{
                model: CustomerAddress,
                as: 'pickUpAddress',
            }, {
                model: CustomerAddress,
                as: 'dropAddress',
            }
                , {
                model: Customer,
                as: 'customerInfo',
            }, {
                model: Car,
                as: 'carInfo',
            }]
        });
        if (bookings) {
            return res.status(200).send({ 'success': bookings });
        } else {
            return res.status(404).send({ '204': 'data not found' });
        }
    } catch (e) {
        if (!fs.existsSync(directoryPath)) {
            fs.mkdirSync(directoryPath, 0744);
        }
        let date_ob = new Date();
        fs.appendFile(directoryPath + '/bookings.log', `\n\n --- \t\t ${date_ob} --- \n\n` + e.toString(), (err) => {
            if (err) console.error(err)
        });
        return res.status(500).send({ 'error': 'something went wrong' });
    }
});

router.get('/getCurrentUserBooking/:user_id', async function (req, res) {
    try {
        const bookings = await Booking.findAll({
            where: { customer_id: req.params.user_id }, include: [{
                model: CustomerAddress,
                as: 'pickUpAddress',
            }, {
                model: CustomerAddress,
                as: 'dropAddress',
            }, {
                model: Car,
                as: 'carInfo',
            }]
        });
        if (bookings) {

            return res.status(200).send({ 'success': bookings });
        } else {
            return res.status(404).send({ '204': 'data not found' });
        }
    } catch (e) {
        if (!fs.existsSync(directoryPath)) {
            fs.mkdirSync(directoryPath, 0744);
        }
        let date_ob = new Date();
        fs.appendFile(directoryPath + '/bookings.log', `\n\n --- \t\t ${date_ob} --- \n\n` + e.toString(), (err) => {
            if (err) console.error(err)
        });
        return res.status(500).send({ 'error': 'something went wrong' });
    }
});

router.post('/checkCar', async function (req, res) {
    try {
        //converting datetime into unix time
        let arive_time = moment(req.body.ariv_time).unix(); 
        let dept_time = moment(req.body.dept_time).unix();
        if (req.body != null) {
            //getting available car booking by checking user given time from the start and end date time
            const bookings = await Booking.findAll({ where: { 'start_at': { [Op.lt]: arive_time }, 'end_at': { [Op.gt]: dept_time } }, where: { 'start_at': { [Op.gt]: dept_time }, 'end_at': { [Op.lt]: arive_time } }, include: [{ model: Car, as: 'carInfo', }] })
            if (bookings) {
                for (let i = 0; i < bookings.length; i++) {
                    const userData = await User.findOne({ where: { id: bookings[i].carInfo.user_id } });
                    bookings[i].carInfo.setDataValue('userInfo', userData);

                }
                console.log(bookings[0].carInfo);
                return res.status(200).send({ 'success': bookings });
            } else {
                return res.status(404).send({ 'error': 'data not found' });
            }
        } else {
            return res.status(404).send({ 'error': 'invalid data' });
        }
    } catch (e) {
        if (!fs.existsSync(directoryPath)) {
            fs.mkdirSync(directoryPath, 0744);
        }
        let date_ob = new Date();
        fs.appendFile(directoryPath + '/bookings.log', `\n\n --- \t\t ${date_ob} --- \n\n` + e.toString(), (err) => {
            if (err) console.error(err)
        });
        return res.status(500).send({ 'error': 'something went wrong' });
    }
});
module.exports = router;