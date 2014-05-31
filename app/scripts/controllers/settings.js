'use strict';

angular.module('shockwaveCalculatorWebApp')
    .controller('settings', function ($scope, settingsFactory) {

    /////// CONTROLLER FUNCTION DEFINITIONS (BEGIN) ///////

    // Description: Saves settings to the factory.
    $scope.SaveSettings = function () {
        settingsFactory.OpticsSeparation = $scope.OpticsSeparation;
        settingsFactory.Tolerance = $scope.Tolerance;
    }

    /////// CONTROLLER FUNCTION DEFINITIONS (END) ///////

    /////// CONTROLLER INTIALIZATION (BEGIN) ///////

    // Initialize materials array
    $scope.OpticsSeparation = settingsFactory.OpticsSeparation;
    $scope.Tolerance = settingsFactory.Tolerance;

    /////// CONTROLLER INTIALIZATION (BEGIN) ///////

    $scope.number = 4;
});