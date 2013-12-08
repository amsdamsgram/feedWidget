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
                var compiledTemplate = _.template(offerTemplate, {offer: _self.organizedData(offer)});
                $('#offers').append(compiledTemplate);
            });
        },

        organizedData: function(offer){
            var splitTitle = offer.get('title').split('@');
            var obj = {
                'title': splitTitle[0].trim(),
                'location': splitTitle[1].trim(),
                'link': offer.get('link')
            }
            return obj;
        },

        render: function(){
            var compiledTemplate = _.template(layoutTemplate, {});
            $(this.el).html(compiledTemplate);
            return this;
        },

        clear: function(){
            $(this.el).empty();
        }
    });
    return OfferListView;
});