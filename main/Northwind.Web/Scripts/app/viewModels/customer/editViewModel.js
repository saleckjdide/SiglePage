
define(['customersDatasource', 'customerModel', 'util'],
    function (customerDatasource, customerModel, util) {

        var editViewModel = new kendo.data.ObservableObject({

            loadData: function () {
                var viewModel = new kendo.data.ObservableObject({
                    saveCustomer: function (s) {
                        this.datasource().sync();
                        this.datasource().filter({});
                        window.location.href = '#/customer/index';
                    },
                    cancel: function (s) {
                        this.datasource().filter({});
                        window.location.href = '#/customer/index';
                    }
                });

                customerDatasource.filter({ field: "CustomerID", operator: "equals", value: util.getId() });
                
                customerDatasource.fetch(function () {
                    console.log('editViewModel fetching');
                    if (customerDatasource.view().length > 0) {
                        viewModel.set("Customer", customerDatasource.at(0));

                        viewModel.set("datasource", function () {
                            return customerDatasource;
                        });
                    } else
                        viewModel.set("Customer", new customerModel());
                });
                return viewModel;
            },
        });

        return editViewModel;
    });