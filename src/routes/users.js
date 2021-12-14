// Library
const express           = require('express');
const router            = express.Router();
// Personal
const usersControllers  = require('../app/controllers/UsersController');
const { create, edit }  = require('../app/validation/UserRequest');
const userServices      = require('../app/services/UserServices');
const response          = require('../util/response');

// [POST] create user
router.post('/create', create(), usersControllers.create);
// [PUT]  Edit user
router.put('/edit/:id', edit(), async function(req, res, next) {
   const email = req.body.email;
   const user  = await userServices.getUserByEmail(email);
   if(user && user._id != req.params.id) {
     return response.error(res, 'Email already in use', 400);
   } else {
     next();
   }
},  usersControllers.update);
// [DELETE] Edit user
router.delete('/delete/:id', usersControllers.delete);
// [GET] Edit user
router.get('/', usersControllers.index);
module.exports = router; 