/*global QUnit*/

sap.ui.define([
	"ccn_accept/workflow-ui-module/controller/ccn_accept.controller"
], function (Controller) {
	"use strict";

	QUnit.module("ccn_accept Controller");

	QUnit.test("I should test the ccn_accept controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
