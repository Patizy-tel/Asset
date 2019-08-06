const mongoose = require('../db/db')

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  username:{
    type:String,
    unique:true,
    required:true
  },
  email: {
    type: String,
    unique:true,
    required: true
  },
  role:{
    type:String
  },
  password: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});


module.exports = mongoose.model('User', UserSchema);
