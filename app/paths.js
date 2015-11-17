// List of RequireJS-compliant urls for Angular app modules

var appModule = {
	config: 'config'
};

var calculatorModule = {
	config: 'modules/calculator/config',
	controller: 'modules/calculator/controller',
	module: 'modules/calculator/module'
};

var layerModule = {
	config: 'modules/layer/config',
	module: 'modules/layer/module',
	services: {
		LayerService: 'modules/layer/services/LayerService',
	}
};

var materialsModule = {
	config: 'modules/materials/config',
	controller: 'modules/materials/controller',
	module: 'modules/materials/module',
	services: {
		MaterialsService: 'modules/materials/services/MaterialsService',
	}
};

var settingsModule = {
	config: 'modules/settings/config',
	controller: 'modules/settings/controller',
	module: 'modules/settings/module',
	services: {
		SettingsService: 'modules/settings/services/SettingsService',
	}
};
