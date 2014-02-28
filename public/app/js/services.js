var leftoverServices = angular.module('leftoverServices', ['ngResource']);

leftoverServices.factory('Pickup', ["$resource",
	return $resource('rescuisine.herokuapp.com/pickups.json'), {}, {
		query: {method: 'GET', params: {}, isArray:true}
	});
]);

// app.controller('MainCtrl', function($scope, Poller) {
//   $scope.name = 'World';
//   $scope.data = Poller.data;
// });
// app.controller('StartCtrl',function(){});
// app.run(function(Poller) {});

// app.factory('Poller', function($http, $timeout) {
//   var data = { response: {}, calls: 0 };
//   var poller = function() {
//     // $scope.cats = Spacecat.query();
//     $http.get('http://localhost:9292/pickups.json').then(function(r) {
//       data.response = r.data;
//       data.calls++;
//       $timeout(poller, 1000);
//     });
    
//   };
//   poller();
  
//   return {
//     data: data
//   };
// });