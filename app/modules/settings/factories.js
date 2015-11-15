'use strict';

angular
  .module('settings')
	.factory('SettingsService', function () {

    var factory = {};

    factory.Tolerance = 0.1;

    return factory;
	});
