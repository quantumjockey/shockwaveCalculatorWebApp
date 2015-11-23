define([
		materialsModule.module
	], function(
			materials
		) {

	'use strict';

	describe("Materials management and display panel", function() {

		// Fields
		var MaterialsCtrl;

		// Setup/Teardown
		beforeEach(function () {
			module('materials');
			angular.mock.inject(function ($injector) {
				MaterialsCtrl = $injector.get('MaterialsCtrl');
			})
		});

		// Requirements here

		it("contains a configuration-testing spec that returns 2", function() {
			expect(MaterialsCtrl.makeTwo()).toBe(2);
		});

	});

});
