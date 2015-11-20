define([
		calculatorModule.config,
		calculatorModule.controller
	], function(
			config,
			CalculatorCtrl
		) {

	'use strict';

	angular
		.module('calculator', [])
		.config(config)
		.controller('CalculatorCtrl', CalculatorCtrl);

});
