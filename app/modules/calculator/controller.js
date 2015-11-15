'use strict';

angular
  .module('calculator')
  .controller('CalculatorCtrl', ['$scope', 'LayerService', 'MaterialsService', 'SettingsService', function ($scope, LayerService, MaterialsService, SettingsService) {

  /////// CONTROLLER FUNCTION DEFINITIONS (BEGIN) ///////

  // Description: Calculates free-surface reflection for the object.
  function CalculateFreeSurfaceReflection(particleVelocity) {
    return 2 * particleVelocity;
  };

  // Description: Calculates the left side of the impedance-match equation.
  function CalculateImpedanceMatchLeft(flyerMaterial, flyerVelocity, particleVelocity, phase) {
    var firstPart = flyerMaterial.Density * (flyerVelocity - particleVelocity);
    var secondPart = phase.IsentropicBulkSoundSpeed;
    var thirdPart = phase.DimensionlessSparameter * (flyerVelocity - particleVelocity);
    return firstPart * (secondPart + thirdPart);
  };

  // Description: Calculates the right side of the impedance-match equation.
  function CalculateImpedanceMatchRight(targetMaterial, particleVelocity, phase) {
    var firstPart = targetMaterial.Density * particleVelocity;
    var secondPart = phase.IsentropicBulkSoundSpeed;
    var thirdPart = phase.DimensionlessSparameter * particleVelocity;
    return firstPart * (secondPart + thirdPart);
  };

  // Description: Calculates the particle velocity of the material according to impedance-matching equations.
  function CalculateParticleVelocity(flyerMaterial, flyerPhase, targetMaterial, targetPhase, velocityOfFlyer, tolerance) {
    var eqnLeftSide = 0.0;
    var eqnRightSide = 0.0;
    var particleVelocity = 0.0;

    if (velocityOfFlyer !== 0) {
      if ((flyerMaterial.Name === targetMaterial.Name) && (flyerMaterial.Density === targetMaterial.Density) && (flyerPhase === targetPhase)) {
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
  };

  // Description: Calculates shock duration for the given material.
  function CalculateShockDuration(shockVelocity, materialThickness) {
    if (shockVelocity === 0) {
      return 0.0;
    }
    else {
      return ((materialThickness / 1000) / (shockVelocity * 1000));
    }
  };

  // Description: Calculates shock pressure for the given material.
  function CalculateShockPressure(density, particleVelocity, shockVelocity) {
    return density * particleVelocity * shockVelocity;
  };

  // Description: Calculates the shock properties for each stage.
  $scope.CalculateShockProperties = function () {

    // calculate values for each layer
    var length = $scope.layers.length;
    for (var i = 0; i < length - 1; i++){

      var velocity = 0;

      if (i == 0){
        velocity = $scope.FlyerVelocity;
      }
      else {
        velocity = $scope.layers[i-1].ParticleVelocity;
      }

      $scope.layers[i].ParticleVelocity = CalculateParticleVelocity($scope.layers[i].SelectedMaterial, $scope.layers[i].SelectedPhase, $scope.layers[i+1].SelectedMaterial, $scope.layers[i+1].SelectedPhase, velocity, $scope.Tolerance);
      $scope.layers[i].ShockVelocity = CalculateShockVelocity($scope.layers[i].SelectedPhase.DimensionlessSparameter, $scope.layers[i].SelectedPhase.IsentropicBulkSoundSpeed, $scope.layers[i].ParticleVelocity);
      $scope.layers[i].ShockPressure = CalculateShockPressure($scope.layers[i].SelectedMaterial.Density, $scope.layers[i].ParticleVelocity, $scope.layers[i].ShockVelocity);
      $scope.layers[i].FreeSurfaceReflection = CalculateFreeSurfaceReflection($scope.layers[i].ParticleVelocity);
      $scope.layers[i].ShockDuration = CalculateShockDuration($scope.layers[i].ShockVelocity, $scope.layers[i].Thickness);
    }

  };

  // Description: Calculates shock velocity for the given material.
  function CalculateShockVelocity(dimensionlessSparameter, isoBulkSoundSpeed, particleVelocity) {
    if (particleVelocity === 0) {
      return 0.0;
    }
    else {
      return (isoBulkSoundSpeed + (dimensionlessSparameter * particleVelocity));
    }
  };

  /////// CONTROLLER FUNCTION DEFINITIONS (END) ///////

  /////// CONTROLLER INTIALIZATION (BEGIN) ///////
  MaterialsService.success(function(data){

    // Initialize materials
    $scope.materials = data;
    $scope.layers = [];

    var flyer = LayerService.createLayer('Flyer', $scope.materials, 0);
    var driver = LayerService.createLayer('Driver', $scope.materials, 1);
    var sample = LayerService.createLayer('Sample', $scope.materials, 2);
    var rearDriver = LayerService.createLayer('Rear Driver', $scope.materials, 3);
    var buffer = LayerService.createLayer('Buffer', $scope.materials, 4);

    $scope.layers.push(flyer);
    $scope.layers.push(driver);
    $scope.layers.push(sample);
    $scope.layers.push(rearDriver);
    $scope.layers.push(buffer);

    // Initialize calculation fields
    $scope.FlyerVelocity = 0;
    $scope.Tolerance = SettingsService.Tolerance;

    // Perform primary calculation to zero out property fields
    $scope.CalculateShockProperties();
  });
  /////// CONTROLLER INTIALIZATION (END) ///////
}]);
