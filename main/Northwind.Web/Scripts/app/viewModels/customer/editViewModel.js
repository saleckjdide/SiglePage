
define(['customersDatasource', 'customerModel', 'util'],
    function (customerDatasource, customerModel, util) {

        var editViewModel = new kendo.data.ObservableObject({

            loadData: function () {
                var viewModel = new kendo.data.ObservableObject({
                    saveCustomer: function (s) {
                        customerDatasource.sync();
                        
                        customerDatasource.filter({});
                        window.location.href = '#/customer/index';
                    },
                    cancel: function (s) {
                        customerDatasource.filter({});
                        window.location.href = '#/customer/index';
                    }
                });

                customerDatasource.filter({ field: "CustomerID", operator: "equals", value: util.getId() });
                
                customerDatasource.fetch(function () {
                    console.log('editViewModel fetching');
                    if (customerDatasource.view().length > 0) {
                        viewModel.set("Customer", customerDatasource.at(0));
                    } else
                        viewModel.set("Customer", new customerModel());
                });
                return viewModel;
            },
        });

        return editViewModel;
    });