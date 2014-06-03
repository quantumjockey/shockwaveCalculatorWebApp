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
          templateUrl: 'modules/calculator/view.html',
          controller: 'CalculatorCtrl'
        })
        .when('/Materials', {
          templateUrl: 'modules/materials/view.html',
          controller: 'MaterialsCtrl'
        })
        .when('/Settings', {
          templateUrl: 'modules/settings/view.html',
          controller: 'SettingsCtrl'
        })
        .otherwise({
          redirectTo: '/Calculator'
        });
    });
  