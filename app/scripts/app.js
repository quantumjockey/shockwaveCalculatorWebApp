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
              controller: 'CalculatorCtrl'
          })
        .when('/Materials',
          {
              templateUrl: 'views/materials.html',
              controller: 'MaterialsCtrl'
          })
        .when('/Settings',
          {
              templateUrl: 'views/settings.html',
              controller: 'SettingsCtrl'
          })
        .otherwise({ 
          redirectTo: '/Calculator' 
        });
  });
  