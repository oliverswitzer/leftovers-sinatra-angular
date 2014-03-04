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

leftoversApp.directive('repeatDone', function() {
    return function(scope, element, attrs) {
      // if (scope.$last) { // all are rendered
        element.on("click", function() {
          var $this = $(this);
          $this.addClass("lightblue");
          $("tr").not($this).removeClass("lightblue");
          $(".confirm-pickup-btn").hide() //hide all other buttons
          $this.find(".confirm-pickup-btn").show();

        })
        //$('a[data-toggle="tooltip"]').tooltip(); // NOT CORRECT!
        // $timeout(function() {
        //   $(".table").on("click", "tr", function(){
        //     $this = $(this);
        //     $this.addClass("lightblue");
        //     $("tr").not($this).removeClass("lightblue");

        //     //Add sbutton to selected row/pickup
        //     $(".confirm-pickup-btn").hide() //hide all other buttons
            
        //     //var element = $("<a href='#'><input type='button'>Confirm</button></a>");
        //     // element.prop({
        //     //     'href': '#/pickups/' + $this.data("id"),
        //     //     'id': 'pickup-confirm-button',
        //     //     'class': 'btn'
        //     // }); 
        //     $this.find("table button").show();
        //     // element.text("Confirm Pickup");
        //     // element.appendTo($this);
        //     // element.click(function(){ });
        //   });
        // }, 0); // wait...
  
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