/**
 * Consultant.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {
  schema: false,
  attributes: {
    number: {
      type: 'integer',
      required: true
    },
    name: {
      type: 'string',
      required: true
    },

    description: {
      type: 'string',
      required: true
    }

  }
};

