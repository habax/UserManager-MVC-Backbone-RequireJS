require.config({
    baseUrl: 'scripts',
    paths: {
    	'jquery':      '../../bower_components/jquery/dist/jquery',
        'underscore':  '../../bower_components/underscore/underscore-min',
        'backbone':    '../../bower_components/backbone/backbone',
        'templates':   '../templates'
    },
    shim: {
    	'jquery': {
            deps: [],
            exports: '$'
        },
        'underscore': {
            deps: [],
            exports: '_'
        }
        ,
        'backbone': {
            deps: [
                'underscore',
                'jquery'
                ],
            exports: 'Backbone'
        }
    }
});
 
 /*
require(['jquery', 'underscore', 'backbone' ], function($ , _ , Backbone ){
    
});
*/

require(['app'], function( App ){
    App.initialize();
});
