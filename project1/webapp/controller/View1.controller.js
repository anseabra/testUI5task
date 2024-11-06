sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
function (Controller) {
    "use strict";

    return Controller.extend("project1.controller.View1", {
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
});
