require.config({

    deps: [ 'main' ],

    paths: {
        jquery : '../js/vendor/jquery',
        underscore : '../js/vendor/underscore',
        backbone : '../js/vendor/backbone',
        modernizr : '../js/vendor/modernizr.foundation',
        foundation : '../js/vendor/foundation.min'
    },

    shim: {
        backbone: {
            deps: [ 'underscore', 'jquery' ],
            exports: 'Backbone'
        },
        foundation : {
            deps : [ 'jquery' ]
        },
        modernizr : {
            deps : [],
            exports : 'Modernizr'
        }
    }
});
