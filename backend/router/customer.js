const express = require("express");
const router = express.Router();
const Customer=require('../models/customer');

const Booking=require('../models/booking');
const CustomerAddress=require('../models/customer_address');
const fs = require("fs");
const path = require('path');
const directoryPath = path.join(__dirname, './log');
Customer.hasMany(Booking,{ foreignKey: "customer_id"});
Customer.hasMany(CustomerAddress,{ foreignKey: "customer_id"});
router.get('/getAllCustomers',async function (req, res) {
    try {
        const customers=await Customer.findAll();
        if(customers){
            return res.status(200).send({ 'success': customers });
        }else{
            return res.status(404).send({ '204': 'data not found' });
        }
    } catch (e) {
        if (!fs.existsSync(directoryPath)) {
            fs.mkdirSync(directoryPath, 0744);
        }
        let date_ob = new Date();
        fs.appendFile(directoryPath + '/customers.log', `\n\n --- \t\t ${date_ob} --- \n\n` + e.toString(), (err) => {
            if (err) console.error(err)
        });
        return res.status(500).send({ 'error': 'something went wrong' });
    }
});

// router.get('/getCurrentCustomers/:customer_id', async function (req, res) {
//     try {
//         const customers=await Customer.findOne({where:{id:req.params.customer_id},include:[
//             Booking,CustomerAddress]});
            
//          if(customers){
//             for(let i=0;i<customers['Bookings'].length;i++){
//                 const pickUp=await CustomerAddress.findOne({where:{id:customers.Bookings[i].pickup_id}});
//                 const drop=await CustomerAddress.findOne({where:{id:customers.Bookings[i].drop_id}});
//                 customers.Bookings[i]['pickUpAddress']=pickUp;
//                 customers.Bookings[i]['dropAddress']=drop
//             }
//             return res.status(200).send({ 'success': customers });
//         }else{
//             return res.status(404).send({ '204': 'data not found' });
//         }  
//     } catch (e) {
//         if (!fs.existsSync(directoryPath)) {
//             fs.mkdirSync(directoryPath, 0744);
//         }
//         let date_ob = new Date();
//         fs.appendFile(directoryPath + '/customers.log', `\n\n --- \t\t ${date_ob} --- \n\n` + e.toString(), (err) => {
//             if (err) console.error(err)
//         });
//         return res.status(500).send({ 'error': 'something went wrong' });
//     }
// });
module.exports = router;