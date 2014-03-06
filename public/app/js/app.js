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
      // $(element).children().last().hide();  
      // scope.pickup.closing_time = scope.pickup.closing_time.replace("T", " ").replace("Z", "");
      element.on("click", function() {
        var $this = $(this);
        $this.addClass("lightblue");
        $("tr").not($this).removeClass("lightblue");
        $(".confirm-pickup-btn").hide() //hide all other buttons
        $this.find(".confirm-pickup-btn").show();
      });
    }
  });


leftoversApp.directive('jqueryLoad', function() {
    return function(scope, element, attrs) {
      var $sections = $('.section'),
          $bgimg = $('#angular-background'),
          $sectionContainer = $('#section_container'),
          windowHeight = $(window).height();

      $sectionContainer.css("top", windowHeight);
      $bgimg.css("height", windowHeight);

      if( /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) { //if on a mobile device
        $("body").css("font-size", "2em");
        $bgimg.remove();
        $(".container").css("margin-top", 0);
        $(".container").css("width", "100%")
        $sectionContainer.css("top", 0);
        $('label').css("font-size", "1.2em");
      } else {
        $(window).scroll(function() {   //for parallax effect on hero
          var yPos = -($(this).scrollTop() / 5);
          var coords = '50% ' + yPos + 'px';
          $bgimg.css("background-position", coords);
        }); 
      }
      
    };

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