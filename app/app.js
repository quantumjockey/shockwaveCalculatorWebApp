'use strict';

angular.module('materials',[]);
angular.module('settings',[]);
angular.module('calculator', [ 'materials', 'settings' ]);

angular
  .module('shockwaveCalculatorWebApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'calculator',
    'materials',
    'settings'
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
  