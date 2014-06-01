'use strict';

describe('Controller: MaterialsCtrl', function () {

  // load the controller's module
  beforeEach(module('shockwaveCalculatorWebApp'));

  var MaterialsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MaterialsCtrl = $controller('MaterialsCtrl', {
      $scope: scope
    });
  }));

  it('should interpret alphanumeric phase identifiers', function () {

  });

  it('should interpret alphanumeric measurement condition identifiers', function () {

  });
});
