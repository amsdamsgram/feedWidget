define([
    'jquery',
    'underscore',
    'backbone',
    'models/offer',
], function($, _, Backbone, OfferModel){
    var OfferCollection = Backbone.Collection.extend({
        model: OfferModel,

        url: 'proxy.php',

        initialize: function(){
        },

        parse: function(resp){
            var dataArray = [];
            $(resp).find('item').each(function() {
                var splitTitle = $(this).find('title').text().split('@');
                var offer = {
                    'title': splitTitle[0].trim(),
                    'location': splitTitle[1].trim(),
                    'link': $(this).find('link').text()
                };
                dataArray.push(offer);
            });
            return dataArray;
        },

        getOffers: function(){
            var _self = this;
            this.fetch({
                dataType: 'xml',
                cache: true,
                success: function(collection, response, options){
                    _self.trigger('change');
                    _self.offset += _self.limit;
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