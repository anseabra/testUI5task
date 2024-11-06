sap.ui.define(
  [
    "sap/ui/core/mvc/Controller"
  ],
  function (BaseController) {
    "use strict";

    return BaseController.extend("project1.controller.App", {
      onInit: function () {
      },

      onClick: async function (oEvent) {

        $.ajax({
          url: "/V2/Northwind/Northwind.svc/Suppliers",
          method: "GET",
          success: function (data) {
            console.log(data);
          },
          error: function (error) {
            console.error(error);
          }
        });
      }
    });

  }
);
