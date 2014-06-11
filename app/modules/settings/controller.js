'use strict';

angular
  .module('settings')
  .controller('SettingsCtrl', function ($scope, settingsService) {

  /////// CONTROLLER FUNCTION DEFINITIONS (BEGIN) ///////

  // Description: Saves settings to the factory.
  $scope.SaveSettings = function () {
    settingsService.Tolerance = $scope.Tolerance;
  };

  /////// CONTROLLER FUNCTION DEFINITIONS (END) ///////

  /////// CONTROLLER INTIALIZATION (BEGIN) ///////

  $scope.Tolerance = settingsService.Tolerance;

  /////// CONTROLLER INTIALIZATION (BEGIN) ///////
});
