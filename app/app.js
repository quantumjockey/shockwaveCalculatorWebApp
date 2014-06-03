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
        .when('/Calculator', {
          templateUrl: 'modules/calculator/calculator.html',
          controller: 'CalculatorCtrl'
        })
        .when('/Materials', {
          templateUrl: 'modules/materials/materials.html',
          controller: 'MaterialsCtrl'
        })
        .when('/Settings', {
          templateUrl: 'modules/settings/settings.html',
          controller: 'SettingsCtrl'
        })
        .otherwise({
          redirectTo: '/Calculator'
        });
    });
  