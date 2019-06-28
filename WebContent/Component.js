sap.ui.define([
	'sap/ui/core/UIComponent'
	], function(UIComponent) {
	"use strict";

	return UIComponent.extend("fioritraining.Component", {
		metadata : {
		    manifest: "json",
		    config: {
		    	"fullWidth": "true",
		    	"bundleName": "fioritraining/i18n/i18n.properties"
		    }
		},
		init: function() {
			//Initialise the ComponentContainer
			sap.ui.getCore().AppContext = new Object();
			sap.ui.getCore().AppContext.ComponentContainer = this;
			
			UIComponent.prototype.init.apply(this, arguments)
			
			var oRootPath = jQuery.sap.getModulePath("fioritraining");
			var mConfig = this.getMetadata().getConfig();
					
			this.initializei18nModel(oRootPath, mConfig);
		},
		
		initializei18nModel: function(oRootPath, mConfig) {
			var i18nModel = new sap.ui.model.resource.ResourceModel({
				bundleUrl : [oRootPath, mConfig.bundleName].join("/")
			});
			this.setModel(i18nModel, "i18n");
		}
	});
});
