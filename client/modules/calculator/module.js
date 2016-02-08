define([
		calculatorModule.config,
		calculatorModule.controller,
		layerModule.module,
		materialsModule.module,
		settingsModule.module
	], function(
			config,
			CalculatorCtrl,
			layer,
			materials,
			settings
		) {

	'use strict';

	angular
		.module('calculator', ['layer', 'materials', 'settings'])
		.config(config)
		.controller('CalculatorCtrl', CalculatorCtrl);

});
