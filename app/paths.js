// List of RequireJS-compliant LibUrls

const angularLib = 'bower_components/angular/angular.min';
const angularMocksLib = 'bower_components/angular-mocks/angular-mocks.min';
const angularResourceLib = 'bower_components/angular-resource/angular-resource.min';
const angularRouteLib = 'bower_components/angular-route/angular-route.min';

// List of RequireJS-compliant urls for Angular app modules

const appModule = {
	config: 'config'
};

const calculatorModule = {
	config: 'modules/calculator/config',
	controller: 'modules/calculator/controller',
	module: 'modules/calculator/module'
};

const layerModule = {
	config: 'modules/layer/config',
	module: 'modules/layer/module',
	services: {
		LayerService: 'modules/layer/services/LayerService',
	}
};

const materialsModule = {
	config: 'modules/materials/config',
	controller: 'modules/materials/controller',
	module: 'modules/materials/module',
	services: {
		MaterialsService: 'modules/materials/services/MaterialsService',
	}
};

const settingsModule = {
	config: 'modules/settings/config',
	controller: 'modules/settings/controller',
	module: 'modules/settings/module',
	services: {
		SettingsService: 'modules/settings/services/SettingsService',
	}
};
