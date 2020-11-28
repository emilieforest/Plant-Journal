const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PlantSchema = new Schema({
  sci_name: String,
  water: Number,
  sun: Number,
});

const Plant = mongoose.model('Plant', PlantSchema);
module.exports = Plant;