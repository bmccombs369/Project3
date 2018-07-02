const express = require('express');
const router = express.Router({ mergeParams: true });
const { User, Want } = require('../db/schema');

/* GET users listing. */
router.get('/', async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    const wants = user.wants;
    res.send(wants);
  } catch (err) {
    res.send(err);
  }
});

router.post('/', async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    const newWant = new Want(req.body);
    user.wants.push(newWant);
    const savedUser = await user.save();
    res.send(savedUser)
  } catch (err) {
    res.send(err);
  }
})

router.delete('/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    user.wants.id(req.params.id).remove();
    const savedUser = await user.save();
    res.send(savedUser);
  } catch (err) {
    res.send(err);
  }
});

module.exports = router;
