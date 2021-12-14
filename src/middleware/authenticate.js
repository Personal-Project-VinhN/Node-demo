// Library
const jwt       = require('jsonwebtoken');
// Util
const response  = require('../util/response');

class Authenticate {
  async verifyToken(req, res, next) {
    const bearerHeader = req.headers['authorization'];
    if(typeof bearerHeader != "undefined") {
      const bearerToken = bearerHeader.split(" ")[1];
      jwt.verify(bearerToken, 'secretkey', function(error, decoded) {
          if(error) {
            response.error(res, error.message, 401)
          } else {
            next();
          }
      });
    } else {
      response.error(res, 'Unauthorized!!!', 401)
    }
  }
}
module.exports = new Authenticate;