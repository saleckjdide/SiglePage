﻿require.config({
    paths: {
        //packages
        'jquery': '/scripts/jquery-2.0.3.min',
        'kendo': '/scripts/kendo/2013.3.1119/kendo.web.min',
        'text': '/scripts/text',
        'router': '/scripts/app/router',
        //models
        'customerModel': '/scripts/app/models/customerModel',
        'customerModelExtended': '/scripts/app/models/customerModelExtended',
        //viewModels
        'home-indexViewModel': '/scripts/app/viewmodels/home/indexViewModel',
        'home-aboutViewModel': '/scripts/app/viewmodels/home/aboutViewModel',
        'home-contactViewModel': '/scripts/app/viewmodels/home/contactViewModel',
        'customer-indexViewModel': '/scripts/app/viewmodels/customer/indexViewModel',
        'customer-editViewModel': '/scripts/app/viewmodels/customer/editViewModel',
        //datasources
        'customersDatasource': '/scripts/app/datasources/customersDatasource',
        // util
        'util': '/scripts/util'
    },
    shim : { 
        'kendo' : ['jquery']
    },
    priority: ['text', 'router', 'app'],
    jquery: '2.0.3', 
    waitSeconds: 30
});

require([
  'app'
], function (app) {
    app.initialize();
});