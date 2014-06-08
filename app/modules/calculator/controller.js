'use strict';

angular
  .module('calculator')
  .controller('CalculatorCtrl', function ($scope, materialsFactory, settingsFactory) {

  /////// OBJECT PROTOTYPES (BEGIN) ///////

  function Layer(title, materials) {

    // Material Attributes
    this.Name = title;
    this.Thickness = 0;

    // Select Attributes
    this.SelectedMaterial = materials[0];
    this.SelectedPhase = this.SelectedMaterial.Phases[0];

    // Shock Attributes
    this.FreeSurfaceReflection = 0;
    this.ShockDuration = 0;
    this.ShockPressure = 0;
    this.ShockVelocity = 0;

  }

  // Description: Resets layer material for calculations.
  Layer.prototype.Reset = function () {
    this.SelectedPhase = this.SelectedMaterial.Phases[0];
    $scope.CalculateShockProperties();
  };

  /////// OBJECT PROTOTYPES (END) ///////

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

    // Calculate Flyer Properties
    $scope.FlyerDriverParticleVelocity = CalculateParticleVelocity($scope.Flyer.SelectedMaterial, $scope.Flyer.SelectedPhase, $scope.Driver.SelectedMaterial, $scope.Driver.SelectedPhase, $scope.FlyerVelocity, $scope.Tolerance);
    $scope.Flyer.ShockVelocity = CalculateShockVelocity($scope.Flyer.SelectedPhase.DimensionlessSparameter, $scope.Flyer.SelectedPhase.IsentropicBulkSoundSpeed, $scope.FlyerDriverParticleVelocity);
    $scope.Flyer.ShockPressure = CalculateShockPressure($scope.Flyer.SelectedMaterial.Density, $scope.FlyerDriverParticleVelocity, $scope.Flyer.ShockVelocity);
    $scope.Flyer.FreeSurfaceReflection = CalculateFreeSurfaceReflection($scope.FlyerDriverParticleVelocity);
    $scope.Flyer.ShockDuration = CalculateShockDuration($scope.Flyer.ShockVelocity, $scope.Flyer.Thickness);

    // Calculate Driver Properties
    $scope.DriverSampleParticleVelocity = CalculateParticleVelocity($scope.Driver.SelectedMaterial, $scope.Driver.SelectedPhase, $scope.Sample.SelectedMaterial, $scope.Sample.SelectedPhase, $scope.FlyerDriverParticleVelocity, $scope.Tolerance);
    $scope.Driver.ShockVelocity = CalculateShockVelocity($scope.Driver.SelectedPhase.DimensionlessSparameter, $scope.Driver.SelectedPhase.IsentropicBulkSoundSpeed, $scope.DriverSampleParticleVelocity);
    $scope.Driver.ShockPressure = CalculateShockPressure($scope.Driver.SelectedMaterial.Density, $scope.DriverSampleParticleVelocity, $scope.Driver.ShockVelocity);
    $scope.Driver.FreeSurfaceReflection = CalculateFreeSurfaceReflection($scope.DriverSampleParticleVelocity);
    $scope.Driver.ShockDuration = CalculateShockDuration($scope.Driver.ShockVelocity, $scope.Driver.Thickness);

    // Calculate Sample Properties
    $scope.SampleRearDriverParticleVelocity = CalculateParticleVelocity($scope.Sample.SelectedMaterial, $scope.Sample.SelectedPhase, $scope.RearDriver.SelectedMaterial, $scope.RearDriver.SelectedPhase, $scope.DriverSampleParticleVelocity, $scope.Tolerance);
    $scope.Sample.ShockVelocity = CalculateShockVelocity($scope.Sample.SelectedPhase.DimensionlessSparameter, $scope.Sample.SelectedPhase.IsentropicBulkSoundSpeed, $scope.SampleRearDriverParticleVelocity);
    $scope.Sample.ShockPressure = CalculateShockPressure($scope.Sample.SelectedMaterial.Density, $scope.SampleRearDriverParticleVelocity, $scope.Sample.ShockVelocity);
    $scope.Sample.FreeSurfaceReflection = CalculateFreeSurfaceReflection($scope.SampleRearDriverParticleVelocity);
    $scope.Sample.ShockDuration = CalculateShockDuration($scope.Sample.ShockVelocity, $scope.Sample.Thickness);

    // Calculate Rear-Driver Properties
    $scope.RearDriverBufferParticleVelocity = CalculateParticleVelocity($scope.RearDriver.SelectedMaterial, $scope.RearDriver.SelectedPhase, $scope.Buffer.SelectedMaterial, $scope.Buffer.SelectedPhase, $scope.SampleRearDriverParticleVelocity, $scope.Tolerance);
    $scope.RearDriver.ShockVelocity = CalculateShockVelocity($scope.RearDriver.SelectedPhase.DimensionlessSparameter, $scope.RearDriver.SelectedPhase.IsentropicBulkSoundSpeed, $scope.RearDriverBufferParticleVelocity);
    $scope.RearDriver.ShockPressure = CalculateShockPressure($scope.RearDriver.SelectedMaterial.Density, $scope.RearDriverBufferParticleVelocity, $scope.RearDriver.ShockVelocity);
    $scope.RearDriver.FreeSurfaceReflection = CalculateFreeSurfaceReflection($scope.RearDriverBufferParticleVelocity);
    $scope.RearDriver.ShockDuration = CalculateShockDuration($scope.RearDriver.ShockVelocity, $scope.RearDriver.Thickness);

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

  // Initialize materials array
  $scope.materials = materialsFactory.getMaterials();

  // Initialize material layers
  $scope.Flyer = new Layer('Flyer', $scope.materials);
  $scope.Driver = new Layer('Driver', $scope.materials);
  $scope.Sample = new Layer('Sample', $scope.materials);
  $scope.RearDriver = new Layer('Rear Driver', $scope.materials);
  $scope.Buffer = new Layer('Buffer', $scope.materials);

  // Initialize calculation fields
  $scope.FlyerVelocity = 0;
  $scope.Tolerance = settingsFactory.Tolerance;

  // Perform primary calculation to zero out property fields
  $scope.CalculateShockProperties();

  /////// CONTROLLER INTIALIZATION (END) ///////
});
