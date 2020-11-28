const db = require('../models');

const index = (res, req) => {
  db.Log.find({}).then((foundLog) => {
    res.json({logs: foundLog})
  }).catch((err) => {
    console.log("Error in log.index", err);
    res.json({Error: 'unable to get index data'})
  });
};

const show = (res, req) => {
  db.Log.findById(req.params.id).then((foundLog) => {
    res.json({log: foundLog})
  }).catch((err) => {
    console.log('Error in log.show', err);
    res.json({Error: 'unable to get show data'})
  });
};

const create = (res, req) => {
  db.Log.create(req.body).then((savedLog) => {
    res.status().json({log: savedLog});
  }).catch((err) => {
    console.log('Error in log.create', err);
    res.json({Error: 'unable to get create data'})
  });
};

const update = (res, req) => {
  db.Log.findByIdAndUpdate(
    req.params.id,
    {$set: req.body},
    {new: true})
    .then((updatedLog) => {
      res.json({log: updatedLog})
    }).catch((err) => {
      console.log('Error in log.update', err);
      res.json({Error: 'unable to update data'})
    });
};

const destroy = (res, req) => {
  db.Log.findbyIdAndDelete(req.params.id).then((deletedLog) => {
    res.json({log: deletedLog})
  }).catch((err) => {
    console.log('Error in log.destroy', err);
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