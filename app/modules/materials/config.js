'use strict';

angular
	.module('materials')
	.config(function ($routeProvider) {
		$routeProvider
			.when('/Materials', {
				templateUrl: 'modules/materials/view.html',
				controller: 'MaterialsCtrl'
			});
	});
