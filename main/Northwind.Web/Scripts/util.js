define([],
    function () {

        var util;

        util = {

            getId:
            function () {
                var array = window.location.href.split('/');
                var customerId = array[array.length - 1];
                return customerId;
            }
        };

        return util;

    });