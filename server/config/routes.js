var path = require('path');
var imageController = require('./imageController.js');

var rootPath = path.join(__dirname, '../..');

module.exports = function(app, express) {

  app.get('/api/images', imageController.getImages);
  app.post('/api/images', imageController.addImage);
  
  app.get('/', function(req, res) {
    res.sendFile(rootPath + '/client/index.html');
  });
  
  app.get('/*', function(req, res) {
    res.sendFile(rootPath + '/client/index.html');
  });
  
}
