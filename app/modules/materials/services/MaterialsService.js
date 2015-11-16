'use strict';

angular
	.module('materials')
	.factory('MaterialsService', [ '$http', function ($http) {
		return $http.get('model/materials.json');
	}]);
