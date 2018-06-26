const express = require('express');
const router = express.Router();
const { User } = require('../db/schema')

/* GET users listing. */
router.get('/', async (req, res) => {
  try {
    const users = await User.find()
    res.send(users);
  } catch (err) {
    console.log(err);
  };
});

router.post('/', async (req, res) => {
  try {
    const newUser = req.body;
    const savedUser = await User.create(newUser);
    res.send(savedUser);
  } catch (err) {
    console.log(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id)
    res.send(user);
  } catch (err) {
    console.log(err);
  };
});

module.exports = router;
