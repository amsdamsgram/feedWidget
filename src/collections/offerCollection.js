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
                var description = $(this).find('description').text();
                var index = description.lastIndexOf('</b>');
                var company = $(description.substring(index)).text().trim();
                var offer = {
                    'title': $(this).find('title').text(),
                    'company': company,
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