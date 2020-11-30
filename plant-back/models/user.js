const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: {
    type: String,
    minlength: 5
  },
  email: String,
  first_name: String,
  last_name: String
});

const User = mongoose.model('User', UserSchema);
module.exports = User;