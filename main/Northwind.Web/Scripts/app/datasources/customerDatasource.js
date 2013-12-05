define(['kendo', 'customerModel'],
    function(kendo, customerModel) {
        var crudServiceBaseUrl = "/odata/Customer";

        var customerDatasource = new kendo.data.DataSource({
            type: "odata",
            transport: {
                read: {
                    async: false,
                    url: crudServiceBaseUrl,
                    dataType: "json"
                },
                update: {
                    url: function(data) {
                        return crudServiceBaseUrl + "(" + data.CustomerID + ")";
                    },
                    dataType: "json"
                },
                destroy: {
                    url: function(data) {
                        return crudServiceBaseUrl + "(" + data.CustomerID + ")";
                    },
                    dataType: "json"
                }
            },
            batch: false,
            serverPaging: true,
            serverSorting: true,
            serverFiltering: true,
            pageSize: 10,
            schema: {
                data: function(data) {
                    return data.value;
                },
                total: function(data) {
                    return data["odata.count"];
                },
                errors: function(data) {
                },
                model: customerModel
            },
            error: function(e) {
                debugger;
                var message = e.xhr.responseJSON["odata.error"].message.value;
                var innerMessage = e.xhr.responseJSON["odata.error"].innererror.message;
                alert(message + "\n\n" + innerMessage);
            }
        });

        return customerDatasource;

    });