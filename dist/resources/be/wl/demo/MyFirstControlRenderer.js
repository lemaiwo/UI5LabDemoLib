sap.ui.define([], function() {
	"use strict";
	var MyFirstControlRenderer = {};

	MyFirstControlRenderer.render = function(oRm, oControl) {
		oRm.write("<div");
		oRm.writeControlData(oControl);
		oRm.addClass("MyFirstControl-intro");
		oRm.writeClasses();
		oRm.write(">");

		oRm.writeEscaped(oControl.getProp1());

		oRm.write("</div>");
	};

	return MyFirstControlRenderer;

}, /* bExport= */ true);