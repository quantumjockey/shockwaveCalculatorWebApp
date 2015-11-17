// List of library dependencies (Url paths)
var angularLibUrl = 'bower_components/angular/angular.min';
var angularResourceLibUrl = 'bower_components/angular-resource/angular-resource.min';
var angularRouteLibUrl = 'bower_components/angular-route/angular-route.min';
var jQueryLibUrl = 'bower_components/jquery/dist/jquery.min';

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
		jQuery: [
			jQueryLibUrl
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
		'jQuery': {
			'exports': 'jQuery'
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
		'jQuery'
	], function(
			angular
		) {

		requirejs([], function(shockwaveCalculator) {
			angular.element(document).ready(function() {
				angular.bootstrap(document.body, ['shockwaveCalculator']);
			});
		});

});
