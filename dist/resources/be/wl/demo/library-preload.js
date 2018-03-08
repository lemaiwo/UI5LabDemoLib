jQuery.sap.registerPreloadedModules({
	"version": "2.0",
	"name": "be.wl.demo.library-preload",
	"modules": {
		"be/wl/demo/library.js": "sap.ui.define([\"jquery.sap.global\",\"sap/ui/core/library\"],function(e,r){\"use strict\";return sap.ui.getCore().initLibrary({name:\"be.wl.demo\",dependencies:[\"sap.ui.core\"],types:[],interfaces:[],controls:[\"be.wl.demo.MyFirstControl\"],elements:[],noLibraryCSS:!1,version:\"${version}\"}),be.wl.demo});",
		"be/wl/demo/MyFirstControl.js": "sap.ui.define([\"sap/ui/core/Control\",\"./library\"],function(t,e){\"use strict\";return t.extend(\"be.wl.demo.MyFirstControl\",{metadata:{library:\"be.wl.demo\",properties:{prop1:\"string\"},events:{}},init:function(){},onAfterRendering:function(t){},setProp1:function(t){return this.setProperty(\"prop1\",t,!0),this}})});",
		"be/wl/demo/MyFirstControlRenderer.js": "sap.ui.define([],function(){\"use strict\";var r={};return r.render=function(r,t){r.write(\"<div\"),r.writeControlData(t),r.addClass(\"MyFirstControl-intro\"),r.writeClasses(),r.write(\">\"),r.writeEscaped(t.getProp1()),r.write(\"</div>\")},r},!0);"
	}
});