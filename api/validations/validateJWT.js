const jwt = require('jsonwebtoken');

module.exports = function validateJWT(req, res, next) {
  try {
    let token = req.headers.authorization.split(' ')[1]; // Bearer <token>
    let result = jwt.verify(token, 'secret');
    req.user = result;
    next();
  } catch (err) {
    console.log(err);
    res.status(401).json({ msg: 'Token is not valid' });
  }
};
