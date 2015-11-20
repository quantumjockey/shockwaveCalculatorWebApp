define([
		materialsModule.config,
		materialsModule.controller,
		materialsModule.services.MaterialsService
	], function(
			config,
			MaterialsCtrl,
			MaterialsService
		) {

	'use strict';

	angular
		.module('materials', [])
		.config(config)
		.factory('MaterialsService', MaterialsService)
		.controller('MaterialsCtrl', MaterialsCtrl);

});
