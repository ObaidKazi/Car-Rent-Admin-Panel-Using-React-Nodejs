var jwt = require('jsonwebtoken');

module.exports= function verifyToken(req, res, next) {
    // Get auth header value
    const bearerHeader = req.headers['authorization'];
    // Check if bearer is undefined
    if(typeof bearerHeader !== 'undefined') {
      // Split at the space
      const bearer = bearerHeader.split(' ');
      // Get token from array
      const bearerToken = bearer[1];
      // Set the token
      jwt.verify(bearerToken, 'manage@Well_Mumbra-kausa-400612', function(err, decoded) {
        decoded=>{
            console.log(decoded);
        },
        err=>{
            return res.status(403).send({ 'error': err });
        }
      });
      // Next middleware
      next();
    } else {
      // Forbidden
     return res.sendStatus(403);
    }
}  