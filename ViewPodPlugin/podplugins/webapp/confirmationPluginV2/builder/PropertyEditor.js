sap.ui.define([
    "sap/dm/dme/podfoundation/control/PropertyEditor"
], function (PropertyEditor) {
    "use strict";

    var oPropertyEditor = PropertyEditor.extend("Kusuma.ext.viewplugins.confirmationPluginV2.builder.PropertyEditor", {
        constructor: function (sId, mSettings) {
            PropertyEditor.apply(this, arguments);
            this.setI18nKeyPrefix("confirmationPluginV2.");
            this.setResourceBundleName("Kusuma.ext.viewplugins.confirmationPluginV2.i18n.builder");
            this.setPluginResourceBundleName("Kusuma.ext.viewplugins.confirmationPluginV2.i18n.i18n");
        },

        addPropertyEditorContent: function (oPropertyFormContainer) {
            var oData = this.getPropertyData();
            this.addSwitch(oPropertyFormContainer, "closeButtonVisible", oData);
        },

        getDefaultPropertyData: function () {
            var oData = {
                "closeButtonVisible": false
            };

            return oData;
        }
    });

    return oPropertyEditor;
});