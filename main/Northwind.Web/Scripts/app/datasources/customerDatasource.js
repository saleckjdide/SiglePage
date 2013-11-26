define(['kendo', 'customerModelExtended', 'util'],
    function (kendo, customerModelExtended, util) {

    var customerDatasource = new kendo.data.DataSource({
        baseUrl: "/odata/Customer",
        type: "odata",
        transport: {
            read: {
                cache: false,
                async: false,
                url: function (data) {
                    return customerDatasource.options.baseUrl + "('" + util.getId() + "')";
                },
                dataType: "json"
            },
            update: {
                url: function (data) {
                    return customerDatasource.options.baseUrl + "('" + util.getId() + "')";
                },
                contentType: "application/json",
                type: "PUT",
                dataType: "json"
            },
            destroy: {
                url: function (data) {
                    return customerDatasource.options.baseUrl + "('" + util.getId() + "')";
                },
                dataType: "json"
            },
            parameterMap: function (data, operation) {
                if (operation == "update") {
                    delete data.guid;
                    delete data["odata.metadata"];
                }
                return JSON.stringify(data);
            }
        },
        sync: function (e) {
            window.location.href = '#/customer/index';
        },
        batch: false,
        schema: {
            type: "json",
            data: function (data) {
                delete data["odata.metadata"];
                var customers = [{
                    CustomerID: data.CustomerID,
                    CompanyName:  data.CompanyName,
                    ContactName: data.ContactName,
                    ContactTitle: data.ContactTitle,
                    Address: data.Address,
                    City: data.City,
                    PostalCode: data.PostalCode,
                    Country: data.Country,
                    Phone: data.Phone,
                    Fax: data.Fax,
                    State: data.State
                }];
                return customers;
            },
            total: function (data) {
                return 1;
            },
            model: customerModelExtended
        },
        change: function (e) {
        }
    });

    return customerDatasource;
        
    });