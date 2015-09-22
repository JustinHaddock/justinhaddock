angular.module('mySite')

.controller('l1Controller', function() {
  this.sections = [
    {
      title: "Hire me",
      link: "l2({pNum: 1})",
      num: "1"
    },
    {
      title: "know me",
      link: "l2({pNum: 2})",
      num: "2"
    },
    {
      title: "contact me",
      link: "l2({pNum: 3})",
      num: "3"
    }
  ];
})

.controller('l2Controller', ['$stateParams', "promiseObj", function($stateParams, promiseObj) {
  this.sections = promiseObj.data[$stateParams.pNum];
}])

.controller('l3Controller', ['$stateParams', "promiseObj", function($stateParams, promiseObj) {
  this.pNum = $stateParams.pNum
  this.highLevel = promiseObj.data[$stateParams.pNum];
  this.sections = this.highLevel[$stateParams.cNum-1];
  console.log(this.sections)
  this.paras = this.sections["paras"];
  this.title = this.sections["title"];
}])


.directive('box', function() {
    var Controller;

    Controller = function() {
      var j = this.boxTitle;
      //use j
    };

    return {
        restrict: "E",
        controller: Controller,
        controllerAs: 'box',
        scope: true,
        bindToController: {
          title: "=boxTitle",
          num: "=boxNum",
          link: "=boxLink"
        },
        templateUrl: "partials/box.html"
    }
});
