sap.ui.define(
    [
      "sap/ui/core/mvc/Controller",
      "sap/ui/core/Fragment",
      "sap/ui/model/Filter",
      "sap/ui/model/FilterOperator",
      "sap/m/MessageToast",
      "sap/ui/model/json/JSONModel"
    ],
    function(BaseController) {
      "use strict";
  
      return BaseController.extend("ccnaccept.workflowuimodule.controller.App", {
        onInit() {
        },
        onClick: async function(oEvent){

          $.ajax({
            url: "/V2/Northwind/Northwind.svc/Suppliers",
            method: "GET",
            success: function(data) {
                console.log(data);
            },
            error: function(error) {
                console.error(error);
            }
        });

/*
        await $.ajax({
            url: "/projman/Member",
            method: "GET",
            success: function(data) {
                console.log(data);
            },
            error: function(error) {
                console.error(error);
            }
        });
*/

        }
      });
    }
  );
  