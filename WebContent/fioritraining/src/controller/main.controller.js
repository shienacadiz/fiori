sap.ui.define([
	'sap/m/MessageToast',
	'sap/ui/core/mvc/Controller',
	'sap/ui/model/json/JSONModel'
	], function(MessageToast, Controller, JSONModel) { "use strict";
		return Controller.extend("fioritraining.fioritraining.src.controller.main", {
	
		onInit : function(){
			var oMembersModel = new JSONModel({
				"Members": [
					{
						"Key": "fam1",
						"Value": "Family Member 1"
					},
					{
						"Key": "fam2",
						"Value": "Family Member 2"
					},
					{
						"Key": "fam2",
						"Value": "Family Member 3"
					}]			
			});
			this.getView().setModel(oMembersModel, "memberModel");
		},
		
		onPress: function () {
			var oComponentContainer = sap.ui.getCore().AppContext.ComponentContainer;
			var i18nResourceBundle = oComponentContainer.getModel("i18n").getResourceBundle();
			MessageToast.show(i18nResourceBundle.getText("msgClearComboBox"));
			var oView = this.getView();
			oView.getModel("memberModel").setProperty("/Members", "");
		}
	});
});
