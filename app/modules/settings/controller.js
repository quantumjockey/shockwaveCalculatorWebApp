define([], function() {

	'use strict';

	angular
		.module('settings')
		.controller('SettingsCtrl', [ '$scope', 'SettingsService', function ($scope, SettingsService) {

		/////// CONTROLLER FUNCTION DEFINITIONS (BEGIN) ///////

		// Description: Saves settings to the factory.
		$scope.SaveSettings = function () {
			SettingsService.Tolerance = $scope.Tolerance;
		};

		/////// CONTROLLER FUNCTION DEFINITIONS (END) ///////

		/////// CONTROLLER INTIALIZATION (BEGIN) ///////

		$scope.Tolerance = SettingsService.Tolerance;

		/////// CONTROLLER INTIALIZATION (BEGIN) ///////
	}]);

});
