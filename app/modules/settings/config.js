define([], function() {

	'use strict';

	var config = function($routeProvider) {
		$routeProvider
			.when('/Settings', {
				templateUrl: 'modules/settings/view',
				controller: 'SettingsCtrl'
			});
	};

	config.$inject = ['$routeProvider'];

	return config;

});
