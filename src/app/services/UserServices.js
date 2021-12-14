// Personal
const User  = require('../../models/user');

class UserServices {
    // [GET] getOne
    async getUserByEmail(email) {
        try {
          return await User.findOne({ email : email });
        } catch (error) {
            throw new Error(error.message);
        }
    };
    async getUserById(id) {
        try {
          return await User.findOne({ _id : id });
        } catch (error) {
            throw new Error(error.message);
        }
    };
}
module.exports = new UserServices;