var mongoose = require('mongoose');

var imageSchema = new mongoose.Schema({
  url: {type: String, required: true, unique: true},
  title: {type: String, required: true},
  artist: {type: String, required: true},
  rating: Number
})

module.exports = mongoose.model('Image', imageSchema);