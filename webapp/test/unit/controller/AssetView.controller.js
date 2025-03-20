/*global QUnit*/

sap.ui.define([
	"y4cr2ro20e249/controller/AssetView.controller"
], function (Controller) {
	"use strict";

	QUnit.module("AssetView Controller");

	QUnit.test("I should test the AssetView controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
