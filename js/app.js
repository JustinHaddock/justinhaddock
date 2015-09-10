var myApp = angular.module('mySite', [
	'ngRoute'
])


myApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
  when('/home', {
    templateUrl: 'partials/home.html',
    controller: 'HomeController as home'
  }).
  otherwise({
    redirectTo: '/slide-1'
  });
}]);
