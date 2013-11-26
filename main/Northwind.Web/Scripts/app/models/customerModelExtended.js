define(['kendo', 'customerModel', 'util'],
    function (kendo, customerModel, util) {

        var customerModelExtended = customerModel.extend({
            saveCustomer: function (s) {
                this.datasource().sync();
                window.location.href = '#/customer/index';
            },
            cancel: function (s) {
                window.location.href = '#/customer/index';
            }
        });

        return customerModelExtended;

    });