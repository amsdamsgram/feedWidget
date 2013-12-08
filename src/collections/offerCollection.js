define([
    'jquery',
    'underscore',
    'backbone',
    'models/offer',
], function($, _, Backbone, OfferModel){
    var OfferCollection = Backbone.Collection.extend({
        model: OfferModel,

        feedsUrl: 'http://www.emploi-e-commerce.com/index.php/page/adv_rss/command/getfeed/feed/137609cb692888197a87fef33506751c',

        offset: 0,
        limit: 10,

        initialize: function(){
        },

        parse: function(resp){
            if (resp.responseData){
                return resp.responseData.feed.entries;
            }
            return [];
        },

        getOffers: function(){
            var _self = this;
            this.fetch({
                url: document.location.protocol + '//ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=100&callback=?&q=' + encodeURIComponent(this.feedsUrl),
                cache: true,
                success: function(collection, response, options){
                    _self.trigger('change');
                },
                error: function(collection, response, options){
                    console.log(response.responseText);
                    console.log(options);
                    console.log(collection);
                },
                complete: function(xhr, textStatus) {
                    console.log(textStatus);
                }
            });
        }
    });
    return OfferCollection;
});