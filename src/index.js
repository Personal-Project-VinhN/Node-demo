// Library
const express       = require('express');
const morgan        = require('morgan'); 
const handlebars    = require('express-handlebars');
// Config
const app           = express();
const port          = 3000;
// Connect
const route         = require('./routes');
const database      = require('./config/database/connect');
// Connect database
database.connect();
app.use(express.json());
// Log http request
app.use(morgan('combined'));
// Route init 
route(app);
// localhost => 127.0.0.1 server listening
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})

      