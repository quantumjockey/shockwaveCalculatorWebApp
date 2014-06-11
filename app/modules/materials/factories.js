'use strict';

angular
  .module('materials')
  .factory('materialsService', function ($http) {
    return $http.get('modules/materials/materials.json');
  });
