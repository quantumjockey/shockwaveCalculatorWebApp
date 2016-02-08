define([
		layerModule.config,
		layerModule.services.LayerService
	], function(
			config,
			LayerService
		) {

	'use strict';

	angular
		.module('layer', [])
		.config(config)
		.factory('LayerService', LayerService);;

});
