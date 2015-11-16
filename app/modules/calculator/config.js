'use strict';

angular
	.module('calculator')
	.config(function ($routeProvider) {
		$routeProvider
			.when('/Calculator', {
				templateUrl: 'modules/calculator/view.html',
				controller: 'CalculatorCtrl'
			});
	});
