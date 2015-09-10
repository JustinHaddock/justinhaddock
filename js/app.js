var myApp = angular.module('mySite', [
	'ngRoute'
])


myApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
  when('/home', {
    templateUrl: 'partials/main.html'
  }).
	when('/1', {
		templateUrl: 'partials/1/1.html'
	}).
	when('/1-1', {
		templateUrl: 'partials/1/1-1.html'
	}).
	when('/1-2', {
		templateUrl: 'partials/1/1-2.html'
	}).
	when('/1-3', {
		templateUrl: 'partials/1/1-3.html'
	}).
	when('/1-4', {
		templateUrl: 'partials/1/1-4.html'
	}).
	when('/2', {
		templateUrl: 'partials/2/2.html'
	}).
	when('/3', {
		templateUrl: 'partials/3/3.html'
	}).
  otherwise({
    redirectTo: '/home'
  });
}]);
