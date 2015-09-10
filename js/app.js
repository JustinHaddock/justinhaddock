var myApp = angular.module('mySite', [
	'ngRoute'
])


myApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
  when('/home', {
    templateUrl: 'partials/main.html'
  }).
  otherwise({
    redirectTo: '/home'
  });
}]);
