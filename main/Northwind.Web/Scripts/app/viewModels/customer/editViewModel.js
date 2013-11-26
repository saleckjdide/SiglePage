
define(['customerModelExtended', 'customerDatasource'],
    function (customerModelExtended, customerDatasource) {

        var editViewModel = {
            loadData: function () {
                var viewModel = null;
                customerDatasource.read();
                customerDatasource.fetch(function() {
                    if (customerDatasource.view().length > 0) {
                        viewModel = customerDatasource.at(0);

                        viewModel.set("datasource", function() {
                            return customerDatasource;
                        });
                    } else
                        viewModel = new customerModelExtended();
                });
                return viewModel;
            }
        };

        return editViewModel;
    });