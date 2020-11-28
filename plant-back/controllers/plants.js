const db = require('../models');

const index = (req, res) => {
  db.Plant.find({}).then((foundPlant) => {
    res.json({plants: foundPlant})
  }).catch((err) => {
    console.log("Error in plant.index", err);
    res.json({Error: 'unable to get index data'})
  });
};

const show = (req, res) => {
  db.Plant.findById(req.params.id).then((foundPlant) => {
    res.json({plant: foundPlant})
  }).catch((err) => {
    console.log('Error in plant.show', err);
    res.json({Error: 'unable to get show data'})
  });
};

const create = (req, res) => {
  db.Plant.create(req.body).then((savedPlant) => {
    res.status().json({plant: savedPlant});
  }).catch((err) => {
    console.log('Error in plant.create', err);
    res.json({Error: 'unable to get create data'})
  });
};

const update = (req, res) => {
  db.Plant.findByIdAndUpdate(
    req.params.id,
    {$set: req.body},
    {new: true})
    .then((updatedPlant) => {
      res.json({log: updatedPlant})
    }).catch((err) => {
      console.log('Error in plant.update', err);
      res.json({Error: 'unable to update data'})
    });
};

const destroy = (req, res) => {
  db.Plant.findbyIdAndDelete(req.params.id).then((deletedPlant) => {
    res.json({log: deletedPlant})
  }).catch((err) => {
    console.log('Error in plant.destroy', err);
    res.json({Error: 'unable to delete data'})
  });
};

module.exports = {
  index,
  show,
  create,
  update,
  destroy
};