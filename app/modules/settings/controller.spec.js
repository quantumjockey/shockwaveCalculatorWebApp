define([
		settingsModule.module
	], function(
			settings
		) {

	'use strict';

	describe("Settings display panel", function() {

		// Fields
		var SettingsCtrl;

		// Setup/Teardown
		beforeEach(function () {
			module('settings');
			angular.mock.inject(function ($injector) {
				SettingsCtrl = $injector.get('SettingsCtrl');
			})
		});

		// Requirements here

		it("contains a configuration-testing spec that returns 2", function() {
			expect(SettingsCtrl.makeTwo()).toBe(2);
		});

	});

});
