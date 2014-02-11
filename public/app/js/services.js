var leftoverServices = angular.module('leftoverServices', ['ngResource']);

leftoverServices.factory('Pickup', ["$resource",
	return $resource('http://localhost:9393/pickups'), {}, {
		query: {method: 'GET', params: {}, isArray:true}
	});
]);