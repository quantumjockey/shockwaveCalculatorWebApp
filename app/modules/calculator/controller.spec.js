define([
		calculatorModule.module
	], function(
			calculator
		) {

	'use strict';

	describe("Layered shockwave properties calculation", function() {

		// Fields
		var CalculatorCtrl;

		// Setup/Teardown
		beforeEach(function () {
			module('calculator');
			angular.mock.inject(function ($injector) {
				CalculatorCtrl = $injector.get('CalculatorCtrl');
			})
		});

		// Requirements here

		it("contains a configuration-testing spec that returns 2", function() {
			expect(CalculatorCtrl.makeTwo()).toBe(2);
		});

	});

});
