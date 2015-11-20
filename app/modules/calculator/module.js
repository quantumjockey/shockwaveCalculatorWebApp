define([
		calculatorModule.config,
		calculatorModule.controller
	], function(
			config,
			CalculatorCtrl
		) {

	'use strict';

	angular
		.module('settings', [])
		.config(config)
		.controller('CalculatorCtrl', CalculatorCtrl);

});
