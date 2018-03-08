sap.ui.define(['sap/ui/core/Control', './library'],
	function(Control, library) {
		"use strict";
		var MyFirstControl = Control.extend("be.wl.demo.MyFirstControl", {
			metadata: {
				library: "be.wl.demo",
				properties: {
					prop1: "string"
				},
				events: {}
			},
			init: function() {},
			onAfterRendering: function(evt) {},
			setProp1: function(value) {
				this.setProperty("prop1", value, true);
				return this;
			}
		});
		return MyFirstControl;
	});