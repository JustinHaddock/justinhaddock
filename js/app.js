angular.module('mySite', ['ui.router'])


angular.module("mySite").config(['$urlRouterProvider','$stateProvider', function($urlRouterProvider, $stateProvider) {
  $urlRouterProvider.otherwise("/home");

  $stateProvider
    .state('home', {
      url: "/home",
      controller: "l1Controller as cont",
      templateUrl: "/justinhaddock/partials/l0.html"
    })
    .state('l2', {
      url: "/:pNum",
      controller: "l2Controller as cont",
      resolve: {
        promiseObj:  function($http){
          return $http({method: 'GET', url: '/justinhaddock/assets/l2data.json'});
        }
      },
      templateUrl: "/justinhaddock/partials/l1.html"
    })
      .state('l3', {
      url: "/:pNum/:cNum",
      controller: "l3Controller as cont",
      resolve: {
        promiseObj:  function($http){
          return $http({method: 'GET', url: '/justinhaddock/assets/l3data.json'});
        }
      },
      templateUrl: "/justinhaddock/partials/l2.html"
    })
}]);
