'use strict';

/**
 */

var config = {
};

angular.module(
    'tz-ui',
    [ 'ngResource', 'ngRoute' ]).constant('config', config).config(
    function($routeProvider, $locationProvider) {

      $locationProvider.hashPrefix("");

      $routeProvider.when('/', {
        templateUrl : 'views/home.html',
        controller : 'HomeCtrl',
      }).when('/view1', {
        templateUrl : 'views/view1.html',
        controller : 'View1Ctrl',
        controllerAs : 'view1'
      }).when('/view2', {
        templateUrl : 'views/view2.html',
        controller : 'View2Ctrl',
        controllerAs : 'view2'
      }).otherwise({
        redirectTo : '/'
      });

    });
