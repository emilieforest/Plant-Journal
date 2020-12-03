const db = require('../models');


//All Plants
const index = (req, res) => {
  db.Plant.find({}).then((foundPlant) => {
    res.json({plants: foundPlant})
  }).catch((err) => {
    console.log("Error in plant.index", err);
    res.json({Error: 'unable to get index data'})
  });
};

//Plant by Id
const show = (req, res) => {
  console.log("!!!!!!!!",req.params.id);
  db.Plant.findById(req.params.id).then((foundPlant) => {
    res.json({plant: foundPlant})
  }).catch((err) => {
    console.log('Error in plant.show', err);
    res.json({Error: 'unable to get show data'})
  });
};

//Create Plant
const create = (req, res) => {
  console.log(req.body);
  db.Plant.create(req.body)
  .then((savedPlant) => {
    db.User.findById(req.body.userId)
    .then((foundUser) => {
      foundUser.plants.push(foundUser)
      foundUser.save(() => res.json('plant: savedPlant'))
    })
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
      res.json({plant: updatedPlant})
    }).catch((err) => {
      console.log('Error in plant.update', err);
      res.json({Error: 'unable to update data'})
    });
};

const destroy = (req, res) => {
  db.Plant.findByIdAndDelete(req.params.id).then((deletedPlant) => {
    res.json({plant: deletedPlant})
  }).catch((err) => {
    console.log('Error in plant.destroy', err);
    res.json({Error: 'unable to delete data'})
  });
};

const graveyard = (req,res) => {
  db.Plant.find({is_dead: true}).then((foundPlant) => {
    res.json({plant: foundPlant})
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