'use strict';

angular
  .module('shockwaveCalculatorWebApp')
  .controller('SettingsCtrl', function ($scope, settingsFactory) {

  /////// CONTROLLER FUNCTION DEFINITIONS (BEGIN) ///////

  // Description: Saves settings to the factory.
  $scope.SaveSettings = function () {
    settingsFactory.Tolerance = $scope.Tolerance;
  };

  /////// CONTROLLER FUNCTION DEFINITIONS (END) ///////

  /////// CONTROLLER INTIALIZATION (BEGIN) ///////

  // Initialize settings attributes
  $scope.Tolerance = settingsFactory.Tolerance;

  /////// CONTROLLER INTIALIZATION (BEGIN) ///////
});
