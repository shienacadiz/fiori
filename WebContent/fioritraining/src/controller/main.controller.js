sap.ui.define([
	'sap/m/MessageToast',
	'sap/ui/core/mvc/Controller'
	], function(MessageToast, Controller) { "use strict";
		return Controller.extend("fioritraining.fioritraining.src.controller.main", {
	
		onPress: function () {
			MessageToast.show("SUCCESS!");
		}
	
	});
});
