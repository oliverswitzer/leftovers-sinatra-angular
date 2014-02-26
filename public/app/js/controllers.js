'use strict';

var leftoversControllers = angular.module('leftoversControllers',[]);

leftoversControllers.controller('PickupListCtrl', ['$scope','$http', '$routeParams',
	function($scope, $http, $routeParams){
		// navigator.geolocation.getCurrentPosition(function(position){ latlng = position.coords.longitude + ',' + position.coords.latitude });
    // $routeParams.latlng = latlng;
    $scope.getPickups = function(){
      $http.get('http://localhost:9292/pickups.json').success(function(data, status, headers, config) {
          $scope.pickups = data
          console.log('Fetched data!');
        });
    };

    $scope.orderProp = 'closing_time';
    $scope.getPickups();
}]);

leftoversControllers.controller('PickupDetailCtrl', ['$scope','$http', '$routeParams',
	function($scope, $http, $routeParams){
		$http.get('http://localhost:9292/pickups/' + $routeParams.id + '.json').success(function(data){
			$scope.pickup = data;
		});
}]);

// app.controller('MainCtrl', function($scope, Poller) {
//   $scope.name = 'World';
//   $scope.data = Poller.data;
// });
// app.controller('StartCtrl',function(){});
// app.run(function(Poller) {});
































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