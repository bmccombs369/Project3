require('dotenv').config();
const mongoose = require('mongoose');
const { User } = require('./schema');
const { Have } = require('./schema');
const { Want } = require('./schema');

mongoose.connect(process.env.MONGODB_URI);

User.remove({}).then(() => {
  const cocoMumba = new Have({
    flavor: 'Coco Mumba',
    maker: 'Bomb Sauce e-Liquid',
    nicotine: 3,
    estUsed: 10,
    imgUrl: 'https://bombsauceeliquid.com/wp-content/uploads/2017/04/IMG_6724-1024x683.jpg'
  });

  const puckerberry = new Want({
    flavor: 'Puckerberry',
    maker: 'Atlas Vapor',
    nicotine: 3,
    imgUrl: 'https://www.atlasvapor.com/wp-content/uploads/2014/08/puck-2.jpg'
  });

  const ben = new User({
    name: 'Ben',
    location: 'Sandy Springs',
    wants: [puckerberry],
    haves: [cocoMumba]
  });

  const users = [ben];

  return User.insertMany(users);

})
.then(() => {
  mongoose.connection.close();
});