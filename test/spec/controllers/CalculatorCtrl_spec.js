'use strict';

describe('Controller: CalculatorCtrl', function () {

  // load the controller's module
  beforeEach(module('shockwaveCalculatorWebApp'));

  var CalculatorCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CalculatorCtrl = $controller('CalculatorCtrl', {
      $scope: scope
    });
  }));

  it('should calculate particle velocity via impedance matching for each layer', function () {

  });

  it('should calculate shock velocity for each layer', function () {

  });

  it('should calculate shock pressure for each layer', function () {

  });

  it('should calculate shock duration for each layer', function () {

  });

  it('should calculate free surface reflection for each layer', function () {

  });
});
