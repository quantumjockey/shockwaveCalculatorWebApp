'use strict';

angular
  .module('materials')
  .factory('materialsFactory', function ($http) {
    return $http.get('modules/materials/materials.json');
  });
