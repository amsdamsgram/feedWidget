define([
    'backbone',
    'routers/offerRouter',
    'jquery',
    'vendors/backbone.fetch-cache'
], function(Backbone, Router, $){
    var initialize = function(){
        initRouter();
        initHistory();
        resetCache();
    };

    var initRouter = function(){
        new Router();
    };

    var initHistory = function(){
        Backbone.history.start({ pushState: true});
    };

    var resetCache = function(){
        Backbone.fetchCache._cache = {};
        Backbone.fetchCache.setLocalStorage();
    };

    return {
        initialize: initialize
    }
});