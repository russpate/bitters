var Backbone = require('backbone');
var Model = require('./model');

module.exports = Backbone.Collection.extend({
  model: Model,
  url: 'http://tiny-tiny.herokuapp.com/collections/russBittersTest',
  initialize: function () {
    console.log('This is coming from collections');
  }
});
