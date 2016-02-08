// Begin loading library dependencies
requirejs.config({
	baseUrl: '/',
	paths: {
		angular: [
			'bower_components/angular/angular.min'
		],
		angularResource: [
			'bower_components/angular-resource/angular-resource.min'
		],
		angularRoute: [
			'bower_components/angular-route/angular-route.min'
		],
		paths: ['paths']
	},
	shim: {
		'angular': {
			exports: 'angular'
		},
		'angularResource': {
			deps: ['angular'],
			exports: 'angularResource'
		},
		'angularRoute': {
			deps: ['angular'],
			exports: 'angularRoute'
		},
		'paths': {
			exports: 'paths'
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
