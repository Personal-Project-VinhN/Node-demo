// Library
const bcrypt                = require('bcrypt');
// Personal
const User                  = require('../../models/user');
// Util
const response              = require('../../util/response');

const { validationResult } = require('express-validator');
// config
const saltRounds            = 10;

class UsersController {
    // [GET] Get list user
    index(req, res, next) {
        try {
            return  User.find({}).then(users => response.success(res, users, 'get list user success', 200))
                        .catch(error => response.error(res, error, 500) )
        } catch (error) {
            return response.error(res, error.message, 404);
        }
    };
    // [POST] create user
    create(req, res, next) {
        try { 
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return response.error(res, errors.array(), 400);
            }
            let dataReq          = req.body;
            bcrypt.hash(dataReq.password, saltRounds).then(function(hash) {
                // Store hash in your password DB.
                dataReq.password = hash;
                const user       = new User(dataReq);
                return  user.save().then(data => response.success(res, data, 'Create user success!!!', 200))
                            .catch(error => response.error(res, error.message, 400) )
            });  
        } catch (error) {
            return response.error(res, error.message, 500);
        }
    };
    // [PUT] update user
    update(req, res, next) {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return response.error(res, errors.array(), 400);
            }
            let id = req.params.id ? req.params.id : 0;
            if(!id) {
                throw new Error('user id not found');
            }
            let dataReq = req.body;
            // new = true return new document when updated else return {}
            User.findOneAndUpdate({ _id: id }, dataReq, {new: true})
                .then(data => response.success(res, data, 'Update user success!!!', 200))
                .catch(error => response.error(res, error, 500) )
        } catch (error) {
            return response.error(res, error.message, 500);
        }
    };  
    // [DELETE] delete user
    delete(req, res, next) {
        try {
            let id = req.params.id ? req.params.id : 0;
            if(!id) {
                throw new Error('id not found');
            }
            User.deleteOne({ _id: id })
                .then(() => response.success(res, null, 'Delete user success!!!', 200))
                .catch(error => response.error(res, error, 500) )
        } catch (error) {
            return response.error(res, error.message, 500);
        }
    }; 

}
module.exports = new UsersController;