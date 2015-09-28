angular.module('mySite')

.controller('l1Controller', function() {
  this.sections = [
    {
      title: "My Work",
      link: "hire",
      num: "1"
    },
    {
      title: "know me",
      link: "know",
      num: "2"
    },
    {
      title: "contact me",
      link: "contact",
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
          "xlink": "http://justinhaddock.github.io/DevelopmentalPsychology",
          "num": "5"
      },
      {
          "title": "Intern Project",
          "xlink": "http://justinhaddock.github.io/internproj",
          "num": "6"
      },
      {
          "title": "My Resume",
          "xlink": "assets/resume.pdf",
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
        console.log(this.xlink);
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
