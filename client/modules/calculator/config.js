define([], function() {

	'use strict';

	var config = function($routeProvider) {
		$routeProvider
			.when('/Calculator', {
				templateUrl: 'modules/calculator/view',
				controller: 'CalculatorCtrl'
			});
	};

	config.$inject = ['$routeProvider'];

	return config;

});
