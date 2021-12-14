// Library
const { validationResult } = require('express-validator');
// Util
const response             = require('./response');

module.exports = {
  // show message validate request param fail
  validationResult(req, res) {
     const errors = validationResult(req);
     if (!errors.isEmpty()) {
      return response.error(res, errors.array(), 400);
     }
  }

}