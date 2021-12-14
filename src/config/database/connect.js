// Library
const mongoose = require('mongoose');

async function connect() {
  try {
     await mongoose.connect('mongodb://localhost:27017/NodeJs_demo', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true
     });
     console.log('connect success!!!!');
  } catch (error) {
     console.log('connect error!!!!');
  }
}
module.exports = { connect };