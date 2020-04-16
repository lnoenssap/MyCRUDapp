jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

sap.ui.require([
	"sap/ui/test/Opa5",
	"com/sap/mycrudapp/MyCRUDApp/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"com/sap/mycrudapp/MyCRUDApp/test/integration/pages/App",
	"com/sap/mycrudapp/MyCRUDApp/test/integration/pages/Browser",
	"com/sap/mycrudapp/MyCRUDApp/test/integration/pages/Master",
	"com/sap/mycrudapp/MyCRUDApp/test/integration/pages/Detail",
	"com/sap/mycrudapp/MyCRUDApp/test/integration/pages/NotFound"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "com.sap.mycrudapp.MyCRUDApp.view."
	});

	sap.ui.require([
		"com/sap/mycrudapp/MyCRUDApp/test/integration/NavigationJourneyPhone",
		"com/sap/mycrudapp/MyCRUDApp/test/integration/NotFoundJourneyPhone",
		"com/sap/mycrudapp/MyCRUDApp/test/integration/BusyJourneyPhone"
	], function () {
		QUnit.start();
	});
});