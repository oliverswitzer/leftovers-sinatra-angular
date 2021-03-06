'use strict';

var leftoversControllers = angular.module('leftoversControllers',[]);

leftoversControllers.controller('PickupListCtrl', ['$scope','$http', '$routeParams', '$timeout',
	function($scope, $http, $routeParams, $timeout){

    $scope.getPickups = function(){
      $http.get('/pickups.json').success(function(data, status, headers, config) {
          $scope.pickups = data
          console.log('Fetched data!');
        });
    };
    $scope.getDate = function(date){return new Date(date.replace("T"," ").replace("Z",""))}
    $scope.orderProp = '-closing_time';
    $scope.getPickups();
}]);

leftoversControllers.controller('PickupDetailCtrl', ['$scope','$http', '$routeParams',
	function($scope, $http, $routeParams){
		$http.get('/pickups/' + $routeParams.id + '.json').success(function(data){
			$scope.pickup = data;
      var closing_time = $scope.pickup.closing_time;
      $scope.pickup.closing_time = new Date(closing_time.replace("T"," ").replace("Z",""));
		});

}]);
































// var spacecatControllers = angular.module('spacecatControllers', []);

// spacecatApp.controller('CatListCtrl', ['$scope', '$http',
//   function($scope, $http){
//     $http.get('http://localhost:9393/spacecats').success(function(data) {
//       $scope.cats = data;
//     });
 
//     $scope.orderProp = 'name';
//   }]);

// spacecatControllers.controller('CatDetailCtrl', ['$scope', '$routeParams', '$http',
//   function($scope, $routeParams, $http) {
//     $http.get("cats/cats-" + $routeParams.catId + '.json').success(function(data) {
//       $scope.cat = data[0];
//       $scope.mainImg = data[0].images[0];
//     });

//     $scope.setImage = function(imageName) {
//       $scope.mainImg = imageName;
//     }
//   }]);