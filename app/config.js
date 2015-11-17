'use strict';

angular.module('layer',[]);
angular.module('materials',[]);
angular.module('settings',[]);
angular.module('calculator', [ 'layer', 'materials', 'settings' ]);

angular
	.module('shockwaveCalculatorWebApp', [
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