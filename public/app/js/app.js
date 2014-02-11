'use strict';

//this used to be in our controllers 
// but now that we have more than one
// controller, it's going in here!

//the empty array argument also now holds
//2 items, these are the modules that the
//app depends on
// ngRoutes - allows us to use angular-route.js
// spacecatControllers - al
var spacecatApp = angular.module('spacecatApp', [
  'ngRoute',
  'spacecatControllers',
  'spacecatFilters'
]);

spacecatApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/cats', {
        templateUrl: 'partials/cat-list.html',
        controller: 'CatListCtrl'
      }).
      when('/cats/:catId', {
        templateUrl: 'partials/cat-detail.html',
        controller: 'CatDetailCtrl'
      }).
      otherwise({
        redirectTo: '/cats'
      });
  }]);