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
  db.Plant.create(req.body).then((savedPlant, userId) => {
    res.status(201).json({plant: savedPlant});
  }).catch((err) => {
    console.log('Error in plant.create', err);
    res.json({Error: 'unable to get create data'})
  });
};
//help 
const addPlant = (plantId, userId) => {
  return db.User.findByIdAndUpdate(
    plantId,
    {user: userId},
    {new: true, useFindAndModify: false}
  );
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

const graveyard = (req,res) => {
  db.Plant.find({is_dead: true}).then((foundPlant) => {
    res.json({gip: foundPlant})
  }).catch((err) => {
    console.log('Error in plant.graveyard', err);
    res.json({Error: 'unable to find data'})
  })
}

module.exports = {
  index,
  show,
  create,
  update,
  destroy,
  graveyard
};