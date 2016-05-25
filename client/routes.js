
angular.module('app')
  .config(function($routeProvider){

  $routeProvider
    .when('/', {
      templateUrl: './Photoview/photoView.html',
      controller: 'PhotoViewController'
    })
    .when('/newimage', {
      templateUrl: './NewImage/newImagePage.html',
      controller: 'NewImageController'
    })
    .otherwise({
      redirectTo: '/'
    })
});