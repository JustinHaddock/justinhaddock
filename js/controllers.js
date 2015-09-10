var psychController = angular.module('psychController', []);

psychController.controller('HomeController', ['$scope', function($scope) {
    $scope.view = 1;

    this.setView = function(newView){
        $scope.view = newView;
    },

    this.isView = function(viewNum){
        return $scope.view == viewNum;
    }
}]);
