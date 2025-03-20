/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"y4cr2ro20e249/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
