sap.ui.define([
	'sap/m/MessageToast',
	'fioritraining/src/controller/main'
	], function(MessageToast, Controller) { "use strict";
		return Controller.extend("fioritraining.src.controller.main", {
	
		onPress: function (evt) {
			MessageToast.show("Pressed");
		}
	
	});
});
