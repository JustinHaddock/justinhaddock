angular.module('mySite', ['ui.router', 'ngAnimate'])


angular.module("mySite").config(['$urlRouterProvider','$stateProvider', function($urlRouterProvider, $stateProvider) {
  $urlRouterProvider.otherwise("/home");

  $stateProvider
    .state('home', {
      url: "/home",
      controller: "l1Controller as cont",
      templateUrl: "partials/home.html"
    })
    .state('hire', {
      url: "/hire",
      controller: "hireController as cont",
      templateUrl: "partials/hire.html"
    })
    .state('know', {
      url: "/know",
      templateUrl: "partials/know.html"
    })
    .state('contact', {
      url: "/contact",
      templateUrl: "partials/contact.html"
    })
    .state('l3', {
      url: "/:pNum/:cNum",
      controller: "l3Controller as cont",
      resolve: {
        promiseObj:  function($http){
          return $http({method: 'GET', url: 'assets/l3data.json'});
        }
      },
      templateUrl: "partials/l2.html"
    })
}]);
