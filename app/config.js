define([], function() {

	'use strict';

	return angular
		.module('shockwaveCalculator', [
			'ngResource',
			'ngRoute',
			'calculator',
			'materials',
			'settings'
		])
		.config(function ($routeProvider) {
			$routeProvider
				.otherwise({
					redirectTo: '/Calculator'
				});
		});

});
