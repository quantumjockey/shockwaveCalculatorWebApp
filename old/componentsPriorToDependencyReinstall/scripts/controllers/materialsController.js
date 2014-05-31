'use strict';

angular.module('shockwaveCalculatorWebApp')
    .controller('materialsController', function ($scope, materialsFactory) {

    /////// CONTROLLER FUNCTION DEFINITIONS (BEGIN) ///////

    // Description: Gets the measurment condition for the selected material.
    $scope.GetMeasurementCondition = function (value) {
        var condition;
        switch (value.toLowerCase())
        {
            case 'a':
                condition = "Starting temperature 5K";
                break;
            case 'b':
                condition = "Starting temperature 20K";
                break;
            case 'c':
                condition = "Starting temperature 75-86K";
                break;
            case 'd':
                condition = "Starting temperature 111K";
                break;
            case 'e':
                condition = "Starting temperature 122K";
                break;
            case 'f':
                condition = "Starting temperature 148K; compressed gas";
                break;
            case 'g':
                condition = "Starting temperature 165K";
                break;
            case 'h':
                condition = "Starting temperature 196K";
                break;
            case 'i':
                condition = "Starting temperature 203-230K";
                break;
            case 'j':
                condition = "Starting temperature 258-263K";
                break;
            case 'k':
                condition = "Starting temperature 273-298K";
                break;
            case 'l':
                condition = "Starting temperature 300K; compressed gas";
                break;
            case 'm':
                condition = "Starting temperature 1673K";
                break;
            case 'n':
                condition = "Starting temperature 1773K";
                break;
            case'o':
                condition = "Starting temperature 1923K";
                break;
            case 'p':
                condition = "5% Cobalt";
                break;
            case 'q':
                condition = "Raw data not provided";
                break;
            case 'r':
                condition = "With impurities";
                break;
            case 's':
                condition = "Composition in weight percent oxides";
                break;
            default:
                condition="(None)";
                break;
        }
        return condition;
    }

    // Description: Gets a description for the phase displayed.
    $scope.GetPhaseType = function (value) {
        var condition;
        switch (value)
        {
            case "1":
            case "1a":
            case "1b":
                condition = "Elastic Shock";
                break;
            case "2":
            case "2a":
            case "2b":
                condition = "Low Pressure Phase";
                break;
            case "3":
            case "3a":
            case "3b":
                condition = "Mixed Region";
                break;
            case "4":
            case "4a":
            case "4b":
                condition = "High Pressure Phase";
                break;
            default:
                condition = "Unrecognized";
                break;
        }
        return condition;
    }

    /////// CONTROLLER FUNCTION DEFINITIONS (END) ///////

    /////// CONTROLLER INTIALIZATION (BEGIN) ///////

    // Initialize materials array
    $scope.materials = materialsFactory.getMaterials();

    // Initialize material select
    $scope.SelectedMaterial = $scope.materials[0];

    /////// CONTROLLER INTIALIZATION (END) ///////
});