require.config({
   paths:{
       jquery: 'vendors/jquery',
       underscore: 'vendors/underscore',
       backbone: 'vendors/backbone',
       routers: 'src/routers',
       models: 'src/models',
       views: 'src/views',
       collections: 'src/collections',
       templates: 'src/templates'
   },
   shim: {
       "backbone": {
           deps: ['jquery', 'underscore'],
           exports: "Backbone"
       },
       "underscore": {
           exports: "_"
       }
   }
});

define([
    'app'
], function(App){
   App.initialize();
});