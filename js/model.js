var Backbone = require('backbone');

module.exports = Backbone.Model.extend({
  urlRoot: 'http://tiny-tiny.herokuapp.com/collections/russBittersTest',
  idAttribute: '_id',
  initialize:function(){
    console.log('model created');
  }
});
