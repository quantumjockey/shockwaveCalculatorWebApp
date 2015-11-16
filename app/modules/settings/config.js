'use strict';

angular
	.module('settings')
	.config(function ($routeProvider) {
		$routeProvider
			.when('/Settings', {
				templateUrl: 'modules/settings/view.html',
				controller: 'SettingsCtrl'
			});
	});
