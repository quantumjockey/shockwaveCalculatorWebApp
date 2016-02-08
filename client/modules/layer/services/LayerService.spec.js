define([
		layerModule.module
	], function(
			layer
		) {

	'use strict';

	describe("Layer object factory", function() {

		// Fields
		var LayerService;

		// Setup/Teardown
		beforeEach(function () {
			module('layer');
			angular.mock.inject(function ($injector) {
				LayerService = $injector.get('LayerService');
			})
		});

		// Requirements here

		it("contains a configuration-testing spec that returns 2", function() {
			expect(LayerService.makeTwo()).toBe(2);
		});

	});

});
