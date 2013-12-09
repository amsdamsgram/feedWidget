define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/offer/layout.html',
    'text!templates/offer/offer.html'
], function($, _, Backbone, layoutTemplate, offerTemplate){
    var OfferListView = Backbone.View.extend({
        el: $('.wrap'),

        initialize: function(offerCollection){
            this.offerCollection = offerCollection;
            this.listenTo(this.offerCollection, 'change', this.renderOffer);
        },

        renderOffer: function(){
            var _self = this;
            _.forEach(this.offerCollection.models, function(offer){
                var compiledTemplate = _.template(offerTemplate, {offer: offer});
                $('#offers').append(compiledTemplate);
            });
        },

        render: function(){
            var compiledTemplate = _.template(layoutTemplate, {});
            $(this.el).html(compiledTemplate);
            return this;
        },

        getNextOffers: function(){
            this.offerCollection.getOffers();
        },

        clear: function(){
            $(this.el).empty();
        }
    });
    return OfferListView;
});