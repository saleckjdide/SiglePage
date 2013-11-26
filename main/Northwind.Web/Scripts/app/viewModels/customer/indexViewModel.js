
define(['kendo', 'customersDatasource'],
    function (kendo, customersDatasource) {
        var lastSelectedDataItem = null;

        var onClick = function (event, delegate) {
            event.preventDefault();
            var grid = $("#grid").data("kendoGrid");
            var selectedRow = grid.select();
            var dataItem = grid.dataItem(selectedRow);
            if (selectedRow.length > 0)
                delegate(grid, selectedRow, dataItem);
            else
                alert("Please select a row.");
        };

        var indexViewModel = new kendo.data.ObservableObject({

            save: function (event) {
                onClick(event, function (grid) {
                    grid.saveRow();
                    $(".toolbar").toggle();
                });
            },

            cancel: function (event) {
                onClick(event, function (grid) {
                    grid.cancelRow();
                    $(".toolbar").toggle();
                });
            },

            details: function (event) {
                onClick(event, function (grid, row, dataItem) {
                    window.location.href = '#/customer/edit/' + dataItem.CustomerID;
                });
            },

            edit: function (event) {
                onClick(event, function (grid, row) {
                    grid.editRow(row);
                    $(".toolbar").toggle();
                });
            },

            destroy: function (event) {
                onClick(event, function (grid, row, dataItem) {
                    grid.dataSource.remove(dataItem);
                    grid.dataSource.sync();
                });
            },

            dataSource: customersDatasource,
            onChange: function (arg) {
                var grid = arg.sender;
                lastSelectedDataItem = grid.dataItem(grid.select());
            }
        });

        return indexViewModel;

    });


