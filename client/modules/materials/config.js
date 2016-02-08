define([], function() {

	'use strict';

	var config = function($routeProvider) {
		$routeProvider
			.when('/Materials', {
				templateUrl: 'modules/materials/view',
				controller: 'MaterialsCtrl'
			});
	};

	config.$inject = ['$routeProvider'];

	return config;

});
