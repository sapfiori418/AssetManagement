sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/m/MessageToast"
], function (Controller, JSONModel, MessageToast) {
    "use strict";
    
    return Controller.extend("y4cr2ro20e249.controller.AssetView", {

        onInit: function () {
            // var oSimpleForm = this.byId("accountSimpleForm");
            // oSimpleForm.addStyleClass("noTitles");
            // Create an empty data object for the model
            var oData = {
                items: [],
                notifications: [],
                notificationCount: 0
            };

            // Create a new JSON model with the empty data
            var oModel = new JSONModel(oData);

            // Set the model to the view
            this.getView().setModel(oModel);


            var oTableModel = new JSONModel();
            this.getView().setModel(oTableModel, "oTableModel");

            this._oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            this._oRouter.attachRouteMatched(this._handleRouteMatched, this);
        },

        _handleRouteMatched: function(oEvent) {
            var that = this;
            // oEvent.getParameters().arguments.TableIndex
            var oParameters = oEvent.getParameters();
            if (oParameters.name === 'RouteAssetView') {
               // this.onReadData();
                
            }
        },

        onReadData: function(){
            var oModel = this.getView().getModel("oModel");
            oModel.read("/Customers", {
                success: function(oData, response) {
                    console.log("Customers data:", oData);
                },
                error: function(oError) {
                    console.error("Error reading data:", oError);
                }
            });

        },

     /*   onShowData: function(oEvent){
            var that = this;
            var oModel = this.getView().getModel("oModel");
            var oTableModel = this.getView().getModel("oTableModel");
            sap.ui.core.BusyIndicator.show(0);
            oModel.read("/Customers", {
                success: function(oData, response) {
                    sap.ui.core.BusyIndicator.hide();
                    oTableModel.setProperty("/aTableResults", oData.results);
                    if (!that.oTableDialog) {
                        that.oTableDialog = sap.ui.xmlfragment("y4cr2ro20e249.fragment.TableDialog", that);
                        that.getView().addDependent(that.oTableDialog, that);
                    }
        
                    that.oTableDialog.open();
                    console.log("Customers data:", oData);
                },
                error: function(oError) {
                    console.error("Error reading data:", oError);
                }
            });

        }, */

        onShowData: function(oEvent){
            var that = this;
                    if (!that.oTableDialog) {
                        that.oTableDialog = sap.ui.xmlfragment("y4cr2ro20e249.fragment.TableDialog", that);
                        that.getView().addDependent(that.oTableDialog, that);
                    }
                    that.oTableDialog.open();
        },

        onDocumentDateChange: function(oEvent) {
            var sValue = oEvent.getParameter("value");
            var oInput = oEvent.getSource();
            
            // Regular expression for DD.MM.YYYY format
            var dateRegex = /^(0[1-9]|[12][0-9]|3[01])\.(0[1-9]|1[0-2])\.\d{4}$/;
            
            if (!dateRegex.test(sValue)) {
                // Invalid format
                oInput.setValueState("Error");
                oInput.setValueStateText("Please enter date in format DD.MM.YYYY");
            } else {
                // Valid format
                oInput.setValueState("None");
            }
        },
        onPostingDateChange: function(oEvent) {
            var sValue = oEvent.getParameter("value");
            var oInput = oEvent.getSource();
            
            // Regular expression for DD.MM.YYYY format
            var dateRegex = /^(0[1-9]|[12][0-9]|3[01])\.(0[1-9]|1[0-2])\.\d{4}$/;
            
            if (!dateRegex.test(sValue)) {
                // Invalid format
                oInput.setValueState("Error");
                oInput.setValueStateText("Please enter date in format DD.MM.YYYY");
            } else {
                // Valid format
                oInput.setValueState("None");
            }
        },
        onPostingPeriodChange: function(oEvent) {
            var sValue = oEvent.getParameter("value");
            var oInput = oEvent.getSource();
            
            // Regular expression for DD.MM.YYYY format
            var dateRegex = /^(0[1-9]|[12][0-9]|3[01])\.(0[1-9]|1[0-2])\.\d{4}$/;
            
            if (!dateRegex.test(sValue)) {
                // Invalid format
                oInput.setValueState("Error");
                oInput.setValueStateText("Please enter date in format DD.MM.YYYY");
            } else {
                // Valid format
                oInput.setValueState("None");
            }
        },

        onFiscalYearChange: function(oEvent) {
            var sValue = oEvent.getParameter("value");
            var oInput = oEvent.getSource();
            // Regular expression for YYYY format
            var dateRegex = /^\d{4}$/;
            if (!dateRegex.test(sValue)) {
                // Invalid format
                oInput.setValueState("Error");
                oInput.setValueStateText("Please enter date in format YYYY");
            } else {
                // Valid format
                oInput.setValueState("None");
            }
        },


        // Event handler for notification button press
        onNotificationPress: function (oEvent) {
            // Get the notifications array from the model
            var oModel = this.getView().getModel();
            var aNotifications = oModel.getProperty("/notifications");

            if (aNotifications.length === 0) {
                MessageToast.show("No Notifications");
            }   
        }

    });
});
