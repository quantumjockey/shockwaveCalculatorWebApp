define [], () ->

	'use strict';

	config = ($routeProvider) ->
		$routeProvider
			.when '/Materials'
				templateUrl: 'modules/materials/view'
				controller: 'MaterialsCtrl'

	config.$inject = ['$routeProvider']

	config
