define([
		settingsModule.config,
		settingsModule.controller,
		settingsModule.services.SettingsService
	], function(
			config,
			SettingsCtrl,
			SettingsService
		) {

	'use strict';

	angular
		.module('settings', [])
		.config(config)
		.factory('SettingsService', SettingsService)
		.controller('SettingsCtrl', SettingsCtrl);

});
