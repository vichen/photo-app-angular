angular.module('app')
  .controller('NewImageController', function($scope, imageHelper) {
    $scope.imageArtist;
    $scope.imageUrl;
    $scope.imageTitle;

    $scope.addImage = function(url, title, artist) {
      imageHelper.addImage(url, title, artist)
        .then(function(success) {
          console.log('success', success);
        });
    }
  });