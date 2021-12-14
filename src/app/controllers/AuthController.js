// Library
const jwt           = require('jsonwebtoken');
// personal
const UserServices  = require('../services/UserServices');
// Util
const response      = require('../../util/response');

class AuthController {
    // [POST] Login
    async login(req, res, next) {
        try {
          const email = req.body.email;
          const user  = await UserServices.getUserByEmail(email);
          if (user) {
            jwt.sign({ user : user }, 'secretkey', { expiresIn : 60*60 }, (err, token) => {
              response.success(res, {token : token}, 'Login success!!!', 200)
            })
          } else {
            response.error(res, 'User does not exist', 401)
          }
        } catch (error) {
            return res.json(error.message)
        }
    };
    logout(req, res, next) {
      try {
        const bearerHeader = req.headers['authorization'];
        res.json(bearerHeader);
      } catch (error) {
          return res.json(error.message)
      }
    };
}
module.exports = new AuthController;