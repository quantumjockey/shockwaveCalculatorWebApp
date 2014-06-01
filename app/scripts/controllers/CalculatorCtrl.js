'use strict';

angular
    .module('shockwaveCalculatorWebApp')
    .controller('CalculatorCtrl', function ($scope, materialsFactory, settingsFactory) {

    /////// CONTROLLER FUNCTION DEFINITIONS (BEGIN) ///////

    // Description: Calculates free-surface reflection for the object.
    var CalculateFreeSurfaceReflection = function (particleVelocity) {
        return 2 * particleVelocity;
    }

    // Description: Calculates the left side of the impedance-match equation.
    var CalculateImpedanceMatchLeft = function (flyerMaterial, flyerVelocity, particleVelocity, phase) {
        var firstPart = flyerMaterial.Density * (flyerVelocity - particleVelocity);
        var secondPart = phase.IsentropicBulkSoundSpeed;
        var thirdPart = phase.DimensionlessSparameter * (flyerVelocity - particleVelocity);
        return firstPart * (secondPart + thirdPart);
    }

    // Description: Calculates the right side of the impedance-match equation.
    var CalculateImpedanceMatchRight = function (targetMaterial, particleVelocity, phase) {
        var firstPart = targetMaterial.Density * particleVelocity;
        var secondPart = phase.IsentropicBulkSoundSpeed;
        var thirdPart = phase.DimensionlessSparameter * particleVelocity;
        return firstPart * (secondPart + thirdPart);
    }

    // Description: Calculates the particle velocity of the material according to impedance-matching equations.
    var CalculateParticleVelocity = function (flyerMaterial, flyerPhase, targetMaterial, targetPhase, velocityOfFlyer, tolerance) {
        var eqnLeftSide = 0.0;
        var eqnRightSide = 0.0;
        var particleVelocity = 0.0;

        if (velocityOfFlyer !== 0) {
            if ((flyerMaterial.Name == targetMaterial.Name) && (flyerMaterial.Density == targetMaterial.Density) && (flyerPhase == targetPhase)) {
                particleVelocity = 0.5 * velocityOfFlyer;
            }
            else {
                particleVelocity = velocityOfFlyer;
                do {
                    eqnLeftSide = CalculateImpedanceMatchLeft(flyerMaterial, velocityOfFlyer, particleVelocity, flyerPhase);
                    eqnRightSide = CalculateImpedanceMatchRight(targetMaterial, particleVelocity, targetPhase);
                    particleVelocity -= (tolerance / 1000.0);
                }
                while (Math.abs(eqnLeftSide - eqnRightSide) > tolerance);
            }
        }

        return particleVelocity;
    }

    // Description: Calculates shock duration for the given material.
    var CalculateShockDuration = function (shockVelocity, materialThickness) {
        if (shockVelocity == 0) {
            return 0.0;
        }
        else {
            return ((materialThickness / 1000) / (shockVelocity * 1000));
        }
    }

    // Description: Calculates shock pressure for the given material.
    var CalculateShockPressure = function (density, particleVelocity, shockVelocity) {
        return density * particleVelocity * shockVelocity;
    }

    // Description: Calculates the shock properties for each stage.
    $scope.CalculateShockProperties = function () {

        // Calculate Flyer Properties
        $scope.FlyerDriverParticleVelocity = CalculateParticleVelocity($scope.SelectedFlyerMaterial, $scope.SelectedFlyerPhase, $scope.SelectedDriverMaterial, $scope.SelectedDriverPhase, $scope.FlyerVelocity, $scope.Tolerance);
        $scope.ShockVelocityInFlyer = CalculateShockVelocity($scope.SelectedFlyerPhase.DimensionlessSparameter, $scope.SelectedFlyerPhase.IsentropicBulkSoundSpeed, $scope.FlyerDriverParticleVelocity);
        $scope.ShockPressureInFlyer = CalculateShockPressure($scope.SelectedFlyerMaterial.Density, $scope.FlyerDriverParticleVelocity, $scope.ShockVelocityInFlyer);
        $scope.FreeSurfaceReflectionInFlyer = CalculateFreeSurfaceReflection($scope.FlyerDriverParticleVelocity);
        $scope.ShockDurationInFlyer = CalculateShockDuration($scope.ShockVelocityInFlyer, $scope.FlyerThickness);

        // Calculate Driver Properties
        $scope.DriverSampleParticleVelocity = CalculateParticleVelocity($scope.SelectedDriverMaterial, $scope.SelectedDriverPhase, $scope.SelectedSampleMaterial, $scope.SelectedSamplePhase, $scope.FlyerDriverParticleVelocity, $scope.Tolerance);
        $scope.ShockVelocityInDriver = CalculateShockVelocity($scope.SelectedDriverPhase.DimensionlessSparameter, $scope.SelectedDriverPhase.IsentropicBulkSoundSpeed, $scope.DriverSampleParticleVelocity);
        $scope.ShockPressureInDriver = CalculateShockPressure($scope.SelectedDriverMaterial.Density, $scope.DriverSampleParticleVelocity, $scope.ShockVelocityInDriver);
        $scope.FreeSurfaceReflectionInDriver = CalculateFreeSurfaceReflection($scope.DriverSampleParticleVelocity);
        $scope.ShockDurationInDriver = CalculateShockDuration($scope.ShockVelocityInDriver, $scope.DriverThickness);

        // Calculate Sample Properties
        $scope.SampleRearDriverParticleVelocity = CalculateParticleVelocity($scope.SelectedSampleMaterial, $scope.SelectedSamplePhase, $scope.SelectedRearDriverMaterial, $scope.SelectedRearDriverPhase, $scope.DriverSampleParticleVelocity, $scope.Tolerance);
        $scope.ShockVelocityInSample = CalculateShockVelocity($scope.SelectedSamplePhase.DimensionlessSparameter, $scope.SelectedSamplePhase.IsentropicBulkSoundSpeed, $scope.SampleRearDriverParticleVelocity);
        $scope.ShockPressureInSample = CalculateShockPressure($scope.SelectedSampleMaterial.Density, $scope.SampleRearDriverParticleVelocity, $scope.ShockVelocityInSample);
        $scope.FreeSurfaceReflectionInSample = CalculateFreeSurfaceReflection($scope.SampleRearDriverParticleVelocity);
        $scope.ShockDurationInSample = CalculateShockDuration($scope.ShockVelocityInSample, $scope.SampleThickness);

        // Calculate Rear-Driver Properties
        $scope.RearDriverBufferParticleVelocity = CalculateParticleVelocity($scope.SelectedRearDriverMaterial, $scope.SelectedRearDriverPhase, $scope.SelectedBufferMaterial, $scope.SelectedBufferPhase, $scope.SampleRearDriverParticleVelocity, $scope.Tolerance);
        $scope.ShockVelocityInRearDriver = CalculateShockVelocity($scope.SelectedRearDriverPhase.DimensionlessSparameter, $scope.SelectedRearDriverPhase.IsentropicBulkSoundSpeed, $scope.RearDriverBufferParticleVelocity);
        $scope.ShockPressureInRearDriver = CalculateShockPressure($scope.SelectedRearDriverMaterial.Density, $scope.RearDriverBufferParticleVelocity, $scope.ShockVelocityInRearDriver);
        $scope.FreeSurfaceReflectionInRearDriver = CalculateFreeSurfaceReflection($scope.RearDriverBufferParticleVelocity);
        $scope.ShockDurationInRearDriver = CalculateShockDuration($scope.ShockVelocityInRearDriver, $scope.RearDriverThickness);
    }

    // Description: Calculates shock velocity for the given material.
    var CalculateShockVelocity = function (dimensionlessSparameter, isoBulkSoundSpeed, particleVelocity) {
        if (particleVelocity == 0) {
            return 0.0;
        }
        else {
            return (isoBulkSoundSpeed + (dimensionlessSparameter * particleVelocity));

        }
    }

    // Description: Resets Buffer material for calculations.
    $scope.ResetBuffer = function () {
        $scope.SelectedBufferPhase = $scope.SelectedBufferMaterial.Phases[0];
        $scope.CalculateShockProperties();
    }

    // Description: Resets Driver material for calculations.
    $scope.ResetDriver = function () {
        $scope.SelectedDriverPhase = $scope.SelectedDriverMaterial.Phases[0];
        $scope.CalculateShockProperties();
    }

    // Description: Resets Flyer material for calculations.
    $scope.ResetFlyer = function () {
        $scope.SelectedFlyerPhase = $scope.SelectedFlyerMaterial.Phases[0];
        $scope.CalculateShockProperties();
    }

    // Description: Resets Rear Driver material for calculations.
    $scope.ResetRearDriver = function () {
        $scope.SelectedRearDriverPhase = $scope.SelectedRearDriverMaterial.Phases[0];
        $scope.CalculateShockProperties();
    }

    // Description: Resets Sample material for calculations.
    $scope.ResetSample = function () {
        $scope.SelectedSamplePhase = $scope.SelectedSampleMaterial.Phases[0];
        $scope.CalculateShockProperties();
    }

    /////// CONTROLLER FUNCTION DEFINITIONS (END) ///////

    /////// CONTROLLER INTIALIZATION (BEGIN) ///////

    // Initialize materials array
    $scope.materials = materialsFactory.getMaterials();

    // Initialize materials for use in calculations
    $scope.SelectedFlyerMaterial = $scope.materials[0];
    $scope.SelectedDriverMaterial = $scope.materials[0];
    $scope.SelectedSampleMaterial = $scope.materials[0];
    $scope.SelectedRearDriverMaterial = $scope.materials[0];
    $scope.SelectedBufferMaterial = $scope.materials[0];

    // Initialize phase selects
    $scope.SelectedFlyerPhase = $scope.SelectedFlyerMaterial.Phases[0];
    $scope.SelectedDriverPhase = $scope.SelectedDriverMaterial.Phases[0];
    $scope.SelectedSamplePhase = $scope.SelectedSampleMaterial.Phases[0];
    $scope.SelectedRearDriverPhase = $scope.SelectedRearDriverMaterial.Phases[0];
    $scope.SelectedBufferPhase = $scope.SelectedBufferMaterial.Phases[0];

    // Initialize material thicknesses
    $scope.FlyerThickness = 0;
    $scope.DriverThickness = 0;
    $scope.SampleThickness = 0;
    $scope.RearDriverThickness = 0;

    // Initialize calculation fields
    $scope.FlyerVelocity = 0;
    $scope.Tolerance = settingsFactory.Tolerance;

    // Perform primary calculation to zero out property fields
    $scope.CalculateShockProperties();

    /////// CONTROLLER INTIALIZATION (END) ///////
});
