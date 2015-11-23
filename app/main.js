// List of library dependencies (Url paths)
var angularLibUrl = 'bower_components/angular/angular.min';
var angularResourceLibUrl = 'bower_components/angular-resource/angular-resource.min';
var angularRouteLibUrl = 'bower_components/angular-route/angular-route.min';

// Begin loading library dependencies
requirejs.config({
	baseUrl: '/',
	paths: {
		angular: [
			angularLibUrl
		],
		angularResource: [
			angularResourceLibUrl
		],
		angularRoute: [
			angularRouteLibUrl
		],
		paths: ['paths']
	},
	shim: {
		'angular': {
			'exports': 'angular'
		},
		'angularResource': {
			deps: ['angular']
		},
		'angularRoute': {
			deps: ['angular']
		},
		'paths': {
			'exports': 'paths'
		}
	}
});

// Begin RequireJS module-load
requirejs(
	[
		'angular',
		'angularResource',
		'angularRoute',
		'paths'
	], function(
			angular
		) {

		requirejs([appModule.config], function(shockwaveCalculator) {
			angular.element(document).ready(function() {
				angular.bootstrap(document.body, ['shockwaveCalculator']);
			});
		});

});
