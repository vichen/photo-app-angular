angular.module('app')
  .controller('NewImageController', function($scope, imageHelper) {

    $scope.addImage = function(url, title, artist) {
      imageHelper.addImage(url, title, artist)
        .then(function(success) {
          console.log('success', success);
        });
    }
  });