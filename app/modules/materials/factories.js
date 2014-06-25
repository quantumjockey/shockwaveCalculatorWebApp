'use strict';

angular
  .module('materials')
  .factory('MaterialsService', function ($http) {
    return $http.get('model/materials.json');
  });
