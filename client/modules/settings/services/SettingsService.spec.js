define([
		settingsModule.module
	], function(
			settings
		) {

	'use strict';

	describe("Storage of calculation parameters", function() {

		// Fields
		var SettingsService;

		// Setup/Teardown
		beforeEach(function () {
			module('settings');
			angular.mock.inject(function ($injector) {
				SettingsService = $injector.get('SettingsService');
			})
		});

		// Requirements here

		it("contains a configuration-testing spec that returns 2", function() {
			expect(SettingsService.makeTwo()).toBe(2);
		});

	});

});
