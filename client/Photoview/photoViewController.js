angular.module('app')
  .controller('PhotoViewController', function($scope, imageHelper) {
    console.log('app');
    
    imageHelper.getImages()
      .then(function(images) {
        $scope.images = images;
      })

    $scope.selectImage = function(image) {
      $scope.selected = image;
    }
});