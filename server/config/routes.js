var path = require('path');
var imageController = require('./imageController.js');

var rootPath = path.join(__dirname, '../..');

module.exports = function(app, express) {

  app.get('/api/getImages', imageControoler.getImages);
  app.post('/api/addImage', imageController.addImage);
  
  app.get('/', function(req, res) {
    res.sendFile(rootPath + '/client/index.html');
  });
  
  app.get('/*', function(req, res) {
    res.sendFile(rootPath + '/client/index.html');
  });
  
}
