define([
		materialsModule.module
	], function(
			materials
		) {

	'use strict';

	describe("Material data factory", function() {

		// Fields
		var MaterialsService;

		// Setup/Teardown
		beforeEach(function () {
			module('materials');
			angular.mock.inject(function ($injector) {
				MaterialsService = $injector.get('MaterialsService');
			})
		});

		// Requirements here

		it("returns a list of materials via request", function() {
			expect(true).toBe(false);
		});

	});

});
