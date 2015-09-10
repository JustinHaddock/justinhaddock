var myApp = angular.module('mySite', [
	'ngRoute'
])


myApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
  when('/0', {
    templateUrl: 'partials/main.html'
  }).
  otherwise({
    redirectTo: '/0'
  });
}]);
