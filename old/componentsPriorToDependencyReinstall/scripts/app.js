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
              templateUrl: 'views/calculatorView.html',
              controller: 'calculatorController'
          })
        .when('/Materials',
          {
              templateUrl: 'views/materialsView.html',
              controller: 'materialsController'
          })
        .when('/Settings',
          {
              templateUrl: 'views/settingsView.html',
              controller: 'settingsController'
          })
        .otherwise({ 
          redirectTo: '/Calculator' 
        });
  });