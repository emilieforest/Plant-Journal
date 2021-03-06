const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: {
    type: String,
    // minlength: 5
  },
  email: String,
  plants: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Plant'
  }]
});

const User = mongoose.model('User', UserSchema);
module.exports = User;