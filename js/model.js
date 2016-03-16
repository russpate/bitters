var Backbone = require('backbone');

module.exports = Backbone.Model.extend({
  urlRoot: 'http://tiny-tiny.herokuapp.com/collections/russBittersTest',
  initialize:function(){
    console.log('model created');
  }
});
