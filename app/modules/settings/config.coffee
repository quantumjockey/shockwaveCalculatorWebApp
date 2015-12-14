define [], () ->

	'use strict';

	config = ($routeProvider) ->
		$routeProvider
			.when '/Settings'
				templateUrl: 'modules/settings/view'
				controller: 'SettingsCtrl'

	config.$inject = ['$routeProvider']

	config
