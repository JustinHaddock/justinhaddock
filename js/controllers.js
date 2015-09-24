angular.module('mySite')

.controller('l1Controller', function() {
  this.sections = [
    {
      title: "Hire me",
      link: "hire",
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

.controller('hireController', function() {
  this.sections = [
      {
          "title": "Contact Book",
          "xlink": "http://justinhaddock.github.io/CremalabContacts",
          "num": "4"
      },
      {
          "title": "Psych Site",
          "xlink": "justinhaddock.github.io/DevelopmentalPsychology",
          "num": "5"
      },
      {
          "title": "Intern Project",
          "xlink": "http://justinhaddock.github.io/internproj",
          "num": "6"
      },
      {
          "title": "My Resume",
          "link": "l3({pNum: 1, cNum:4})",
          "num": "7"
      }
  ];
})

.controller('l3Controller', ['$stateParams', "promiseObj", function($stateParams, promiseObj) {
  this.pNum = $stateParams.pNum
  this.highLevel = promiseObj.data[$stateParams.pNum];
  this.sections = this.highLevel[$stateParams.cNum-1];

  this.paras = this.sections["paras"];
  this.title = this.sections["title"];
}])


.directive('box', function() {
    var Controller;

    Controller = function() {
      this.hasXlink = function(){
        console.log(this.title);
        console.log(this.xlink);
        console.log(this.link);
        if (this.xlink == undefined){
          return false
        }
        return true
      }
    };

    return {
        restrict: "E",
        controller: Controller,
        controllerAs: 'box',
        scope: true,
        bindToController: {
          title: "=boxTitle",
          num: "=boxNum",
          link: "=boxLink",
          xlink: "=boxXlink"
        },
        templateUrl: "partials/box.html"
    }
});
