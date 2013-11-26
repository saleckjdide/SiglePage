
define(['customerModelExtended', 'customerDatasource'],
    function (customerModelExtended, customerDatasource) {

        var editViewModel = null;

        customerDatasource.read();

        customerDatasource.fetch(function () {
            if (customerDatasource.view().length > 0) {
                editViewModel = customerDatasource.at(0);

                editViewModel.set("datasource", function () {
                    return customerDatasource;
                });
            } else
                editViewModel = new customerModelExtended();
        });

        return editViewModel;
    });