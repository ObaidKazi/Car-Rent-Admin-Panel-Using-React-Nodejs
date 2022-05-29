const express = require("express");
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
const router = express.Router();
const User = require('../models/users')
router.post('/login', async function (req, res) {
    try {
        let userData = await User.findOne({ where: { email: req.body.email, role: 'admin' }, });
        if (userData != null) {
            const isPasswordSame = await bcrypt.compare(req.body.password, userData.password);
            if (isPasswordSame) {
                var token = jwt.sign({
                    'role': userData.role,
                    'email': userData.email,
                    'userId': userData.id,
                }, 'socar@Malaysia_Kuala_Lumpur');
                let data = {
                    'token': token,
                }
                return res.status(200).send({
                    'success': data
                });
            } else {
                return res.status(203).send({ 'error': 'invalid password' });
            }
        } else {
            return res.status(404).send({ 'error': 'user not found' });
        }
    } catch (e) {
        console.log(e);
    }
})
module.exports = router;