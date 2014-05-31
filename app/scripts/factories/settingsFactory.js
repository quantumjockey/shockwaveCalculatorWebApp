'use strict';

angular
	.module('shockwaveCalculatorWebApp')
	.factory('settingsFactory', function () {

    var factory = {};

    factory.OpticsSeparation = 18.2;
    factory.Tolerance = 0.1;

    return factory;
});