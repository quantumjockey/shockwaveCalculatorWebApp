'use strict';

angular
  .module('settings')
	.factory('settingsService', function () {

    var factory = {};

    factory.Tolerance = 0.1;

    return factory;
	});
