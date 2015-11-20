define([], function() {

	'use strict';

	var LayerService = function () {

		var _service = {};

		// Description: Representation of a material layer in shockwave experiments.
		function Layer(title, materials, id) {

			// Layer Attributes
			this.ID = id;
			this.Name = title;
			this.Thickness = 0;

			// Material Attributes
			this.SelectedMaterial = materials[0];
			this.SelectedPhase = this.SelectedMaterial.Phases[0];

			// Shock Attributes
			this.FreeSurfaceReflection = 0;
			this.ParticleVelocity = 0;
			this.ShockDuration = 0;
			this.ShockPressure = 0;
			this.ShockVelocity = 0;

		}

		// Description: Resets layer material for calculations.
		Layer.prototype.Reset = function () {
			this.SelectedPhase = this.SelectedMaterial.Phases[0];
		};

		// Description: Generates a layer object.
		_service.createLayer = function(title, materials, id) {
			return new Layer(title, materials, id);
		};

		return _service;

	};

	LayerService.$inject = [];

	return LayerService;

});
