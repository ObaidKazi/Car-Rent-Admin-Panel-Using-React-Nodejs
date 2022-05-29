require('./database/connection');
const express=require('express');

const cors = require('cors');
const bodyParser = require('body-parser');
const customer=require('./router/customer');
const cars=require('./router/cars');
const users=require('./router/users');
const booking=require('./router/booking');
const auth=require('./router/auth');
const verifyToken=require('./jwt_verify_token');
const app=express();
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());

app.listen(3021,function(){
    console.log('server is listening');
});
app.use(express.static(__dirname));
app.use('/api',auth);
app.use('/api',verifyToken,cars);
app.use('/api',verifyToken,customer);
app.use('/api',verifyToken,users);
app.use('/api',verifyToken,booking);
// app.use('/api',cars);
// app.use('/api',customer);
// app.use('/api',users);
// app.use('/api',booking);


