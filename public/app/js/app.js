'use strict';

//this used to be in our controllers 
// but now that we have more than one
// controller, it's going in here!

//the empty array argument also now holds
//2 items, these are the modules that the
//app depends on
// ngRoutes - allows us to use angular-route.js
// spacecatControllers - al

var leftoversApp = angular.module('leftoversApp',['ngRoute',
'leftoversControllers']);



leftoversApp.config(['$routeProvider', function($routeProvider){
	$routeProvider.when("/pickups", {
		templateUrl: "partials/pickups.html",
		controller: "PickupListCtrl"
	}).when("/pickups/:id",{
			templateUrl: "partials/pickups-show.html",
			controller: "PickupDetailCtrl"
	}).otherwise({redirectTo: "/pickups"});

}]);

leftoversApp.directive('confirmButton', function() {
    return function(scope, element, attrs) {
      console.log(scope);
      element.on("click", function() {
        var $this = $(this);
        $this.addClass("lightblue");
        $("tr").not($this).removeClass("lightblue");
        $(".confirm-pickup-btn").hide() //hide all other buttons
        $this.find(".confirm-pickup-btn").show();
      });
    }
  });





























// var spacecatApp = angular.module('spacecatApp', [
//   'ngRoute',
//   'spacecatControllers',
//   'spacecatFilters'
// ]);

// spacecatApp.config(['$routeProvider',
//   function($routeProvider) {
//     $routeProvider.
//       when('/cats', {
//         templateUrl: 'partials/cat-list.html',
//         controller: 'CatListCtrl'
//       }).
//       when('/cats/:catId', {
//         templateUrl: 'partials/cat-detail.html',
//         controller: 'CatDetailCtrl'
//       }).
//       otherwise({
//         redirectTo: '/cats'
//       });
//   }]);