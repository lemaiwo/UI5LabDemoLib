sap.ui.define(['jquery.sap.global', 'sap/ui/core/library'],
	function(jQuery, library1) {
		"use strict";

		sap.ui.getCore().initLibrary({
			name: "be.wl.demo",
			dependencies: ["sap.ui.core"],
			types: [],
			interfaces: [],
			controls: [
				"be.wl.demo.MyFirstControl"
			],
			elements: [],
			noLibraryCSS: false,
			version: "${version}"
		});
		return be.wl.demo;
	});