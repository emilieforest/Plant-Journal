const db = require('../models');

const index = (req, res) => {
  db.User.find({}).then((foundUser) => {
    res.json({user: foundUser})
  }).catch((err) => {
    console.log('Error in user.index', err);
    res.json({Error: 'unable to get index data'})
  });
};

const show = (req, res) => {
  db.User.findById(req.params.id).then((foundUser) => {
    res.json({user: foundUser})
  }).catch((err) => {
    console.log('Error user.show', err);
    res.json({Error: 'unable to get show data'})
  });
};

const create = (req, res) => {
  db.User.create(req.body).then((savedUser) => {
    res.status().json({user: savedUser});
  }).catch((err) => {
    console.log('Error in user.create', err);
    res.json({Error: 'unable to create data'})
  });
};

const update = (req, res) => {
  db.User.findByIdAndUpdate(
    req.params.id,
    {$set: req.body},
    {new: true})
  .then((updatedUser) => {
    res.json({updatedUser})
  }).catch((err) => {
    console.log('Error in user.update', err);
    res.json({Error: 'unable to update data'})
  });
};

const destroy = (req, res) => {
  db.User.findByIdAndDelete(req.params.id, (err, deletedUser) => {
    if (err) return console.log(err);
    db.Plant.deleteMany({_id: {$in: deletedUser.plants}}, (err) => {
      if (err) return console.log(err);
      res.json(deletedUser)
    })
  })
};

module.exports = {
  index,
  show,
  create,
  update,
  destroy
};