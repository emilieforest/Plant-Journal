const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PlantSchema = new Schema({
  sci_name: String,
  nickname: String,
  water: {
    type: Number, 
    max: 5
  },
  sun: {
    type: Number,
    max: 5
  },
  description: String,
  image: String
});

const Plant = mongoose.model('Plant', PlantSchema);
module.exports = Plant;