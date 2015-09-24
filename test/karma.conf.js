// Karma configuration
// http://karma-runner.github.io/0.12/config/configuration-file.html
// Generated on 2015-09-23 using
// generator-karma 1.0.0

module.exports = function(config) {
  'use strict';

  config.set({
    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // base path, that will be used to resolve files and exclude
    basePath: '',

    // testing framework to use (jasmine/mocha/qunit/...)
    // as well as any additional frameworks (requirejs/chai/sinon/...)
    frameworks: [
      "jasmine"
    ],

    // list of files / patterns to load in the browser
    files: [
      "app/**/*.js"
    ],

    // list of files / patterns to exclude
    exclude: [
    ],

    // web server port
    port: 8080,

    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - PhantomJS
    // - IE (only Windows)
    browsers: [
      "PhantomJS"
    ],

    // Which plugins to enable
    plugins: [
      "karma-phantomjs-launcher",
      "karma-jasmine"
    ],

    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: false,

    colors: true,

    // level of logging
    // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
    logLevel: config.LOG_INFO,

    // Uncomment the following lines if you are using grunt's server to run the tests
    // proxies: {
    //   '/': 'http://localhost:9000/'
    // },
    // URL root prevent conflicts with the site root
    // urlRoot: '_karma_'
  });
};


describe('l1Controller', function() {
    var scope, createController;

    beforeEach(inject(function ($rootScope, $controller) {
        scope = $rootScope.$new();

        createController = function() {
            return $controller('l1Controller', {
                '$scope': scope
            });
        };
    }));

    it('Should return the appropriate data', function() {
        var controller = createController();
        expect(scope.sections[0].title.toBe("Hire me");
        expect(scope.sections[1].link.toBe("l2({pNum: 2})");
    });
});

describe('directive: box', function() {
  var element, scope;

  beforeEach(module('app'));

  beforeEach(inject(function($rootScope, $compile) {
    scope = $rootScope.$new();

    element =
        '<box box-title="box_title" box-num="box_num" box-link="box_link"></box>';


    element = $compile(element)(scope);
    scope.$digest();

    it("should print out correct names", function() {
      expect(element.title).toBe("box_title");
      expect(element.num).toBe("box_num");
      expect(element.link).toBe("box_link");
    })
  }));
});
