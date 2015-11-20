define([
		calculatorModule.module,
		layerModule.module,
		materialsModule.module,
		settingsModule.module
	], function(
			calculator,
			layer,
			materials,
			settings
		) {

	'use strict';

	return angular
		.module('shockwaveCalculator', [
			'ngResource',
			'ngRoute',
			'calculator',
			'layer',
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
