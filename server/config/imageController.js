var mongoose = require('mongoose');
var Mongo = require('mongodb');
var Image = mongoose.model('Image');

module.exports = {



  addImage: function(req, res, next) {
    var data = { url: req.body.url, title: req.body.title,
                artist: req.body.artist };

    var promise = Image.create(data);
    promise.then(function(newImage) {
      res.send(newImage);
    })
      .catch(function(error) {
        console.log(error);
        res.status(500).send('There was an error');
      })
  },

  getImages: function(req, res, next) {
    Image.find({}).exec()
      .then(function(images) {
        res.send(images);
      })
      .catch(function(error) {
        console.log(error);
        res.status(500).send('error getting images');
      })
  }

}



