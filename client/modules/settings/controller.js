define([], function() {

	'use strict';

	var SettingsCtrl = function($scope, SettingsService) {

		//////// FOR CONFIG TEST ////////
		$scope.makeTwo = function() {
			return 2;
		};
		//////// FOR CONFIG TEST ////////

		/////// CONTROLLER FUNCTION DEFINITIONS (BEGIN) ///////

		// Description: Saves settings to the factory.
		$scope.SaveSettings = function () {
			SettingsService.Tolerance = $scope.Tolerance;
		};

		/////// CONTROLLER FUNCTION DEFINITIONS (END) ///////

		/////// CONTROLLER INTIALIZATION (BEGIN) ///////

		$scope.Tolerance = SettingsService.Tolerance;

		/////// CONTROLLER INTIALIZATION (BEGIN) ///////

	};

	SettingsCtrl.$inject = ['$scope', 'SettingsService'];

	return SettingsCtrl;

});
