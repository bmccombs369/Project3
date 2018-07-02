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

  const bajaBreeze = new Have({
    imgUrl: 'https://cdn6.bigcommerce.com/s-ls5jvj13/products/80/images/295/_SH12153-Edit__63186.1476135758.500.500.jpg?c=2',
    flavor: 'Baja Breeze',
    maker: 'Vaporham Lincoln',
    nicotine: 3,
    estUsed: 15
  })

  const puckerberry = new Want({
    flavor: 'Puckerberry',
    maker: 'Atlas Vapor',
    nicotine: 3,
    imgUrl: 'https://www.atlasvapor.com/wp-content/uploads/2014/08/puck-2.jpg'
  });

  const banana = new Want({
    imgUrl: 'https://glasvapor.com/pub/media/catalog/product/cache/image/1000x1240/e9c3970ab036de70892d86c6d221abfe/b/a/basix-60ml-banana-cream-pie-3000x3000-no-logo_4_6.jpg',
    flavor: 'Banana Cream Pie',
    maker: 'Glas Vapor',
    nicotine: 3
  })

  const ben = new User({
    name: 'Ben',
    location: 'Sandy Springs',
    wants: [puckerberry, banana],
    haves: [cocoMumba, bajaBreeze]
  });

  const hal = new User({
    name: 'Hal',
    location: 'Inman Park',
    wants: [],
    haves: [banana]
  })

  const users = [ben, hal];

  return User.insertMany(users);

})
.then(() => {
  mongoose.connection.close();
});