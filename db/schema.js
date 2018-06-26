const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WantSchema = new Schema({
  flavor: String,
  maker: String,
  imgUrl: {
    type: String,
    default: '#'
  }
});

const HaveSchema = new Schema({
  flavor: String,
  maker: String,
  estUsed: String,
  imgUrl: {
    type: String,
    default: '#'
  }
});

const UserSchema = new Schema({
  name: String,
  location: String,
  wants: [WantSchema],
  haves: [HaveSchema]
});

const Want = mongoose.model('Want', WantSchema);
const Have = mongoose.model('Have', HaveSchema);
const User = mongoose.model('User', UserSchema);


module.exports = {
  Want, Have, User
}