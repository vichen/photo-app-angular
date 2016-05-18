var path = require('path');

var rootPath = path.join(__dirname, '../..');

module.exports = function(app, express) {
  
  app.get('/', function(req, res) {
    res.sendFile(rootPath + '/client/index.html');
  });
  
  app.get('/*', function(req, res) {
    res.sendFile(rootPath + '/client/index.html');
  });
  
}
