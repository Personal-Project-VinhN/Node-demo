// Library
const { check, body } = require('express-validator');
const UserServices  = require('../services/UserServices');

module.exports = {
    create() {
      return [
        // check email
        check('email').not().isEmpty().withMessage('Email is not required'),
        check('email').isEmail().withMessage('Email is not correct'),
        // Validate email in use or not
        check('email').custom(async (email) => {
          const existingEmail = await UserServices.getUserByEmail(email);
          if (existingEmail) {
              throw new Error('Email already in use');
          }
        }),
        // check full name
        check('full_name').not().isEmpty().withMessage('Full Name is not required'),
        // check password
        check('password').not().isEmpty().withMessage('Password is not required'),
        
      ]; 
    },
    edit() {
      return [
        check('email').not().isEmpty().withMessage('Email is not required'),
        check('email').isEmail().withMessage('Email is not correct'),
        check('full_name').not().isEmpty().withMessage('Full Name is not required'),
      ]; 
    },
}; 

