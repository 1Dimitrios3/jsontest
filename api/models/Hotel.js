/**
 * ChatMessage.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: http://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    hotelName: {
      type: 'String'
    },

    rating: { 
        type: 'number'
    },

    city: {
        type: 'string'
    },

    thumbnail: {
        type: 'string'
    },

    guestrating: {
        type: 'number'
    },

    ratingsId: {
        model: 'Rating'
    },

    mapurl: {
        type: 'string'
    },

    filtersId: {
        model: 'Filter'
    },

    price: {
        type: 'number'
    }
  },

};

