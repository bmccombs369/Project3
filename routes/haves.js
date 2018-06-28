const express = require('express');
const router = express.Router();
const { User, Have } = require('../db/schema');

/* GET users listing. */
router.get('/', async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    const haves = user.haves;
    res.send(haves);
  } catch (err) {
    res.send(err);
  }
});

router.post('/', (req, res) => {
  User.findById(req.params.userId)
    .then((user) => {
      const newHave = new Have(req.body);
      user.haves.push(newHave);
      return user.save();
    }).catch((err) => res.send(err))
    .then(savedUser => {
      res.send({
        user: savedUser
      })
    })
})

router.delete('/:id', (req, res) => {
  User.findById(req.params.userId)
    .then((user) => {
      user.haves.id(req.params.id).remove();
      return user.save();
    })
    .then(savedUser => {
      res.send({
        user: savedUser
      });
    });
});


module.exports = router;
