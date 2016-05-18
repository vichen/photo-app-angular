
angular.module('app')
  .config(function($routeProvider){

  $routeProvider
    .when('/', {
      templateUrl: './Photoview/photoView.html',
      controller: 'PhotoViewController'
    })
    .otherwise({
      redirectTo: '/'
    })
});