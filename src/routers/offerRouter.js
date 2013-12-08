define([
    'backbone',
    'views/offer/offerListView',
    'collections/offerCollection'
], function(Backbone, OfferListView, OfferCollection){
    var OfferRouter = Backbone.Router.extend({
       routes: {
           '': 'index',
           '*path': 'defaultRoute'
       },

        initialize: function(){
            this.offerListCollection = new OfferCollection();
            this.offerListView = new OfferListView(this.offerListCollection);
            this.offerListCollection.getOffers();
        },

        'index': function(){
            this.offerListView.render();
        },

        'defaultRoute': function(path){
            console.log('default route');
        }
    });
    return OfferRouter;
});