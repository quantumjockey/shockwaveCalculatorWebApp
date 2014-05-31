// Define shell module
var shockCalculator = angular.module('shockCalculator', []);

// Define module options
// (currently none)

// Define application routes within shell
shockCalculator.config(function ($routeProvider) {
    $routeProvider
		.when('/Calculator',
			{
			    controller: 'calculatorController',
			    templateUrl: '/app/views/calculatorView.html'
			})
		.when('/Materials',
			{
			    controller: 'materialsPageController',
			    templateUrl: '/app/views/materialsPageView.html'
			})
		.when('/Settings',
			{
			    controller: 'settingsPageController',
			    templateUrl: '/app/views/settingsPageView.html'
			})
		.otherwise({ redirectTo: '/Calculator' });
});
