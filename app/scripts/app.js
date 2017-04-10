'use strict';

/**
 * @ngdoc overview
 * @name SodaTransferUI
 * @description # SodaTransferUI
 * 
 * Main module of the application.
 */

// for local
var config = {
  domain : 'http://localhost:8080/',
  baseUrl : 'http://localhost:8080/',
  NODE_ENV : 'development',
  socketLogined : false,
  socket_domain : 'http://localhost:8080/',
  defaultKRW : '1,000,000',
  dafaultUSD : '1,000',
  maxKRW : 3000000,
  maxUSD : 3000,
  minKRW : 100000,
  minUSD : 100
};

// var socketUrl = document.location.protocol + '//' +
// document.location.hostname
// + ':3002' + '/socket.io/socket.io.js';
// document.write('\x3Cscript src="' + socketUrl + '">\x3C/script>');

angular.module(
    'SodaTransferUI',
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
