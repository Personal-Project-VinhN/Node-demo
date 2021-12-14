// Library
const mongoose = require('mongoose');
const Schema = mongoose.Schema; 

const User = new Schema({
  full_name : { 
    type : String,   
  },
  email : { 
    type: String ,
  },
  password : { 
    type : String , 
  },
},{ timestamps: true, versionKey : false });

module.exports = mongoose.model('User', User);