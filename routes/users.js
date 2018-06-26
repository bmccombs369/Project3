const express = require('express');
const router = express.Router();
const {User} = require('../db/schema')

/* GET users listing. */
router.get('/', function(req, res, next) {
  User.find()
  .then((users) => {
    res.send(users);
  }).catch((err) => {
    console.log(err);
  });
});

module.exports = router;
