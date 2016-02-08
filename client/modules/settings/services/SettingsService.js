define([], function() {

	'use strict';

	var SettingsService = function () {

		var factory = {};

		factory.Tolerance = 0.1;

		return factory;

	};

	SettingsService.$inject = [];

	return SettingsService;

});
