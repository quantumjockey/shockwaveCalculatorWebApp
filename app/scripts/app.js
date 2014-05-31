'use strict';

angular
  .module('shockwaveCalculatorWebApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
      $routeProvider
        .when('/Calculator',
          {
              templateUrl: 'views/calculator.html',
              controller: 'calculator'
          })
        .when('/Materials',
          {
              templateUrl: 'views/materials.html',
              controller: 'materials'
          })
        .when('/Settings',
          {
              templateUrl: 'views/settings.html',
              controller: 'settings'
          })
        .otherwise({ 
          redirectTo: '/Calculator' 
        });
  });