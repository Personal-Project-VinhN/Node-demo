// Library
const express        = require('express');
const router         = express.Router();
// Personal
const AuthController = require('../app/controllers/AuthController');

router.post('/login', AuthController.login);
router.get('/logout', AuthController.logout);
module.exports = router; 