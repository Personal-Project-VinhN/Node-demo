// Personal
const userRouter    = require('./users');
const authRouter    = require('./auth');
const authenticate  = require('../middleware/authenticate');

function route(app) {
  app.use('/api/auth', authRouter);
  app.use('/api/users', authenticate.verifyToken, userRouter);
}

module.exports = route;
// , authenticate.verifyToken