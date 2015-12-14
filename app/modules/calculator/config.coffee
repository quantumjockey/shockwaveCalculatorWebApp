define [], () ->

	'use strict';

	config = ($routeProvider) ->
		$routeProvider
			.when '/Calculator'
				templateUrl: 'modules/calculator/view'
				controller: 'CalculatorCtrl'

	config.$inject = ['$routeProvider']

	config
