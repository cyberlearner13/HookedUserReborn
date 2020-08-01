const express = require('express');
const mongoose = require('mongoose');

const router = new express.Router();
const User = mongoose.model('users');

router.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // update to match the domain you will make the request from
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

router.post('/users/signup', async (req, res) => {
  const { username, password } = req.body;
  let user = new User({
    username,
    password,
  });
  try {
    user = await user.save();
    const token = await user.generateAuthToken();
    res.status(201).send({ user, token });
  } catch (err) {
    return res.status(422).send(err);
  }

  res.send(user);
});

module.exports = router;
