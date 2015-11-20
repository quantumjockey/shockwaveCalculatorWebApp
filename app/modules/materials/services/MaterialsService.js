define([], function() {

	'use strict';

	var MaterialsService = function ($http) {

		return $http.get('model/materials.json');

	};

	MaterialsService.$inject = ['$http'];

	return MaterialsService;

});
